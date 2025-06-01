import * as ts from 'typescript';
import { formatTypeScriptCode } from './formatTypeScriptCode.ts';

/**
 The main worker function for `stripImports()` below.
 */
function removeImportsAndUsages(sourceFile: ts.SourceFile): ts.SourceFile
{
  const importedIdentifiers = new Set<string>();

  // Collect imported identifiers
  function collectImports(node: ts.Node)
  {
    if (ts.isImportDeclaration(node) && node.importClause)
    {
      const { importClause } = node;

      if (importClause.name)
      {
        // Default import
        importedIdentifiers.add(importClause.name.text);
      }

      if (importClause.namedBindings)
      {
        if (ts.isNamedImports(importClause.namedBindings))
        {
          // Named imports
          for (const element of importClause.namedBindings.elements)
          {
            importedIdentifiers.add(element.name.text);
          }
        }
        else if (ts.isNamespaceImport(importClause.namedBindings))
        {
          // Namespace import (e.g., import * as ns from 'module')
          importedIdentifiers.add(importClause.namedBindings.name.text);
        }
      }
    }
    ts.forEachChild(node, collectImports);
  }

  // Transform the AST to remove imports and usages
  function transformer<T extends ts.Node>(context: ts.TransformationContext)
  {
    const factory = context.factory;

    // Helper to get the base identifier of an expression, drilling through wrappers and accessors.
    function getBaseIdentifier(expr: ts.Expression): ts.Identifier | undefined
    {
      let current = expr;
      // Loop to drill down to the base identifier
      // Handles common cases like obj.prop1.prop2, obj['prop1']['prop2'], (obj).prop1, func().prop1
      while (true)
      {
        if (ts.isIdentifier(current))
        {
          return current;
        }
        else if (
          ts.isPropertyAccessExpression(current) ||
          ts.isElementAccessExpression(current) ||
          ts.isParenthesizedExpression(current)
        )
        {
          current = current.expression;
        }
        else if (ts.isCallExpression(current)) // e.g. ...getImportedObject().anotherProp or ...importedFunction()
        {
          // This traces to the function/method being called.
          // If importedFunction() is spread, we care if importedFunction is imported.
          // If obj.importedMethod() is spread, we care if obj is imported.
          current = current.expression;
        }
        else
        {
          // If it's not an identifier or a known wrapper/accessor/call, we can't find a base identifier.
          return undefined;
        }
      }
    }

    // Helper to check if an expression references an imported identifier
    function isImportedReference(expr: ts.Expression): boolean
    {
      const baseIdentifier = getBaseIdentifier(expr);
      if (baseIdentifier)
      {
        return importedIdentifiers.has(baseIdentifier.text);
      }
      return false;
    }

    return (rootNode: T) =>
    {
      // First, collect all imported identifiers
      ts.forEachChild(rootNode, collectImports);

      function visit(node: ts.Node): ts.Node | undefined
      {
        // Remove import declarations
        if (ts.isImportDeclaration(node))
        {
          return undefined;
        }

        // Remove export declarations that re-export from other modules
        if (ts.isExportDeclaration(node) && node.moduleSpecifier)
        {
          return undefined;
        }

        // Remove type alias declarations
        if (ts.isTypeAliasDeclaration(node))
        {
          return undefined;
        }

        // Remove export declarations (e.g., export * from 'module')
        if (ts.isExportDeclaration(node))
        {
          return undefined;
        }

        // Remove export variable statements where all declarations reference imported identifiers
        // or where declarations don't have initializers (which would make invalid TS)
        if (ts.isVariableStatement(node) && node.modifiers
          && node.modifiers.some(mod => mod.kind === ts.SyntaxKind.ExportKeyword))
        {
          const declarations = node.declarationList.declarations;

          // Remove if all declarations reference imported identifiers
          if (declarations.every(decl => decl.initializer && isImportedReference(decl.initializer)))
          {
            return undefined;
          }

          // Remove if any declaration is missing an initializer (would be invalid TS)
          if (declarations.some(decl => !decl.initializer))
          {
            return undefined;
          }
        }

        // Handle property assignments
        if (ts.isPropertyAssignment(node))
        {
          const initializer = node.initializer;

          // If the property assignment itself (e.g. `prop: importedVar`) refers to an import, remove it.
          if (isImportedReference(initializer))
          {
            return undefined;
          }

          // Otherwise, visit the initializer to see if IT contains things to remove (e.g. `prop: { ...importedSpread }`)
          const visitedInitializer = visit(initializer) as ts.Expression | undefined;
          if (!visitedInitializer) // Initializer was entirely removed (e.g. an object that became empty)
          {
            return undefined; // Remove the property assignment too
          }
          if (visitedInitializer !== initializer) // Initializer was changed
          {
            return factory.updatePropertyAssignment(node, node.name, visitedInitializer);
          }
          return node; // Initializer unchanged, so property assignment is unchanged
        }

        // Handle shorthand property assignments (e.g. `{ importedVar }`)
        if (ts.isShorthandPropertyAssignment(node) && importedIdentifiers.has(node.name.text))
        {
          return undefined;
        }

        // Handle spread assignments in object literals (e.g. `{ ...importedVar }`)
        if (ts.isSpreadAssignment(node))
        {
          if (isImportedReference(node.expression))
          {
            return undefined; // Remove spread assignment if it references an imported identifier
          }
          // If the spread is not directly of an import (e.g. `...localObj` or `...localObj.prop`)
          // we don't visit `node.expression` further because `stripImports` isn't meant to deeply
          // clean local objects, only to sever connections to imports.
          return node;
        }

        // Handle object literals
        if (ts.isObjectLiteralExpression(node))
        {
          let changed = false;
          const newProperties: ts.ObjectLiteralElementLike[] = [];
          for (const prop of node.properties)
          {
            const visitedProp = visit(prop) as ts.ObjectLiteralElementLike | undefined;
            if (visitedProp)
            {
              newProperties.push(visitedProp);
            }
            if (visitedProp !== prop) // If a property was removed or changed
            {
              changed = true;
            }
          }

          if (!changed && newProperties.length === node.properties.length) {
              return node; // No change to any properties
          }
          
          // If all properties were removed, the object literal itself might be removed depending on context.
          // For example, if `export const foo = {}` and {} becomes empty, `tryImportingCode` might fail if `foo` is used elsewhere without definition.
          // However, the current test case expects `placeholder` to remain, so `newProperties` won't be empty.
          // If `newProperties` is empty, we create an empty object literal.
          return factory.updateObjectLiteralExpression(node, factory.createNodeArray(newProperties));
        }

        // Handle type assertion expressions (e.g., `... as const`)
        if (ts.isAsExpression(node))
        {
          const visitedExpression = visit(node.expression) as ts.Expression | undefined;

          if (!visitedExpression) // If the entire inner expression was removed (e.g. an object that became empty and was removed)
          {
            return undefined; // Remove the 'as const' assertion as well
          }

          if (visitedExpression !== node.expression) // If the inner expression was changed
          {
            return factory.updateAsExpression(node, visitedExpression, node.type);
          }
          return node; // Inner expression unchanged, so AsExpression is unchanged
        }

        return ts.visitEachChild(node, visit, context);
      }

      return ts.visitNode(rootNode, visit) as T;
    };
  }

  const result = ts.transform(sourceFile, [transformer]);
  const transformedSourceFile = result.transformed[0] as ts.SourceFile;
  return transformedSourceFile;
}

/**
 A function that removes imports, and usages of them, but leaves the rest of the code. Note that this may be destructive to comments, formatting, and other trivia. It's not intended for the re-assembly of TypeScript source files, but rather for preparing TypeScript code matching our expected format to be converted JSON (or whatever other horrific formats we may need).
 */
export const stripImports = async (sourceCode: string): Promise<string> =>
{
  const sourceFile = ts.createSourceFile(
    'input.ts',
    sourceCode,
    ts.ScriptTarget.Latest,
    /* setParentNodes */ true,
  );

  // Perform the transformation
  let transformedSourceFile: ts.SourceFile;
  try
  {
    transformedSourceFile = removeImportsAndUsages(sourceFile);
  }
  catch (error)
  {
    console.error('Error during transformation:', error);
    throw error;
  }

  // Convert the transformed AST back to code
  const printer = ts.createPrinter();
  let unformattedResult = printer.printFile(transformedSourceFile);

  // Handle special cases where we end up with invalid export statements

  // Case 1: Simple invalid export statements like "export const i18n;"
  const invalidExportRegex = /export\s+const\s+\w+\s*;/g;

  // Case 2: Spread syntax with undefined variables like "...ActivateLagoonV2ModalComponentTranslations,"
  const invalidSpreadRegex = /\.\.\.\w+,?\s*(?=\n|\.\.\.|\})/g;

  // Case 3: Object with only spreads that will all be invalid (pattern like export const x = {...a, ...b};)
  const objectWithOnlySpreadsRegex = /export\s+const\s+\w+\s*=\s*\{\s*(?:\.\.\.\w+,?\s*)+\}\s*;?/g;

  // For files that contain spreads that reference imports (which will be undefined after our transform),
  // we'll need a more aggressive approach - especially for complex files like master translation files

  // // First detect if the file has spread syntax
  // if (invalidSpreadRegex.test(unformattedResult))
  // {
  //   console.log('WOMP! WOMP! WOMP!', unformattedResult);
  //   // If we have an object that's mostly or all made up of spreads from imported variables,
  //   // just return an empty string rather than try to salvage parts
  //   // Check for complex spread pattern in an export object
  //   const exportWithSpreadsRegex = /export\s+const\s+\w+\s*=\s*\{[\s\S]*?\.\.\.\w+[\s\S]*?\}/;
  //   if (exportWithSpreadsRegex.test(unformattedResult))
  //   {
  //     return '';
  //   }
  // }

  // // Check if we need to remove invalid exports
  // if (invalidExportRegex.test(unformattedResult)
  //   || invalidSpreadRegex.test(unformattedResult)
  //   || objectWithOnlySpreadsRegex.test(unformattedResult))
  // {
  //   // First, try to remove entire objects that only contain spreads
  //   unformattedResult = unformattedResult.replace(objectWithOnlySpreadsRegex, '');

  //   // Then remove any remaining simple invalid exports
  //   unformattedResult = unformattedResult.replace(invalidExportRegex, '');

  //   // If the file is now empty or only contains whitespace, return empty string
  //   if (!unformattedResult.trim())
  //   {
  //     return '';
  //   }
  // }

  const result = await formatTypeScriptCode(unformattedResult);

  return result;
};

// const src = `
// import { Localization as I18nItem } from '@axhxrx/internationalization';

// /**
//  The type defining the locales that Quoracomm supports in its frontend apps.
//  */
// export type DEFAULT_LOCALES = 'en' | 'ja';

// export type I18nItemDefault = I18nItem<DEFAULT_LOCALES>;

// import { UISupportedQuuxActionType } from './ui-supported-quux-action';

// export const QuuxActionI18n = {
//   'object-detection': {
//     label: { en: 'Simple object detection', ja: '簡易物体検出' },
//     description: {
//       en: 'Apply simple object detection to an image from a URL.',
//       ja: '指定した URL の画像に対して、人、車など限られた種類の物体の数を検知します',
//     },
//   },
//   webhook: {
//     label: { en: 'Webhook', ja: 'Webhook' },
//     description: {
//       en: 'Send data to a webhook',
//       ja: 'データを Webhook に送信します',
//     },
//   },
//   ai: {
//     label: { en: 'AI', ja: 'AI' },
//     description: {
//       en: 'Send a request to a GenAI model',
//       ja: '生成 AI にリクエストを送信します',
//     },
//   },
//   'slack-notification': {
//     label: { en: 'Slack Notification', ja: 'Slack 通知' },
//     description: {
//       en: 'Send data to Slack',
//       ja: 'データを Slack に送信します',
//     },
//   },
//   'line-notification': {
//     label: { en: 'LINE Notification', ja: 'LINE 通知' },
//     description: {
//       en: 'Send data to LINE',
//       ja: 'データを LINE に送信します',
//     },
//   },
//   'email-notification': {
//     label: { en: 'Email Notification', ja: 'Email 通知' },
//     description: { en: 'Send Email', ja: 'データを Email 送信します' },
//   },
//   republish: {
//     label: { en: 'Republish', ja: 'Republish' },
//     description: {
//       en: 'Transform the data and republish it to another channel',
//       ja: 'データを変換し、別のチャネルに再送信します',
//     },
//   },
//   'quoracomm-api': {
//     label: { en: 'Quoracomm API', ja: 'QUORACOMM API' },
//     description: {
//       en: 'Invoke QUORACOMM API',
//       ja: 'QUORACOMM API を実行します',
//     },
//   },
//   weathernews: {
//     label: { en: 'Weather Forecast', ja: 'Weather Forecast' },
//     description: {
//       en:
//         'Utilize pinpoint weather forecast data provided by <a href="https://global.weathernews.com/" target="_blank">WeatherNews</a> with 1km mesh accuracy.',
//       ja:
//         '<a href="https://jp.weathernews.com/" target="_blank">WeatherNews</a> 社提供による、指定した緯度経度地点の 1km メッシュピンポイント天気予報のデータが利用できます',
//     },
//   },
// } as const satisfies Record<
//   UISupportedQuuxActionType,
//   { label: I18nItemDefault; description: I18nItemDefault }
// >;
// `;

// const x = await stripImports(src);
// console.log(x);
