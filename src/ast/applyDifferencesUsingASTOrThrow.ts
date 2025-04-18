import type {
  Expression,
  NoSubstitutionTemplateLiteral,
  ObjectLiteralExpression,
  StringLiteral,
} from '@ts-morph/ts-morph';
import {
  SyntaxKind,
} from '@ts-morph/ts-morph';

import { logger } from '../util/Logger.ts';
import { createTsProject } from './createTsProject.ts';
import type { DiffResult } from './DiffResult.ts';
import { getExportedVariableNamesAndValues } from './getExportedVariableNamesAndValues.ts';

/**
 Local function to unwrap AsExpressions and TypeAssertions
 */
function unwrapExpression(expr: Expression): Expression
{
  while (
    expr
    && (expr.getKind() === SyntaxKind.AsExpression || expr.getKind() === SyntaxKind.TypeAssertionExpression)
  )
  {
    expr = (expr as any).getExpression();
  }
  return expr;
}

/**
Local function to recursively find and modify a string literal at the given path
 */
function findAndModify(
  objExpr: Expression,
  path: string[],
  newValue: string,
  localDeclarations: Map<string, Expression>,
): boolean
{
  if (path.length === 0)
  {
    return false;
  }

  // If not an ObjectLiteralExpression, check if it's an identifier referencing a local variable
  if (objExpr.getKind() === SyntaxKind.Identifier)
  {
    const identifierName = objExpr.getText();
    const localValue = localDeclarations.get(identifierName);

    if (localValue)
    {
      // If the local variable exists, use its value instead
      return findAndModify(localValue, path, newValue, localDeclarations);
    }
    else
    {
      throw new Error(`Referenced identifier '${identifierName}' not found as local variable`);
    }
  }

  // If not a direct object literal, we can't proceed
  if (objExpr.getKind() !== SyntaxKind.ObjectLiteralExpression)
  {
    throw new Error(
      `Expected an object literal or reference to a local variable, got: ${SyntaxKind[objExpr.getKind()]}`,
    );
  }

  // Replace the relevant part in findAndModify
  const objectLiteral = objExpr as ObjectLiteralExpression;
  const [currentKey, ...remainingPath] = path;
  const property = objectLiteral.getProperty(currentKey);

  if (!property)
  {
    // Key not found directly, check for SpreadAssignments
    let modifiedInSpread = false;
    for (const child of objectLiteral.getChildrenOfKind(SyntaxKind.SpreadAssignment))
    {
      const spreadExpr = child.getExpression();
      // We expect the spread expression to be an identifier referencing a known local declaration
      if (spreadExpr.getKind() === SyntaxKind.Identifier)
      {
        const identifierName = spreadExpr.getText();
        const localValue = localDeclarations.get(identifierName);
        if (localValue)
        {
          // Try to find and modify within the spread source object.
          // IMPORTANT: Pass the original 'path', not 'remainingPath', because the currentKey
          // is expected to be a property within the spread source object.
          if (findAndModify(localValue, path, newValue, localDeclarations))
          {
            modifiedInSpread = true;
            break; // Found and modified, stop searching other spreads
          }
        }
        else
        {
          // This might indicate an issue if a spread identifier isn't resolvable,
          // but we'll allow the search to continue in other spreads or properties.
          console.warn(`Spread identifier '${identifierName}' not found in local declarations.`);
        }
      }
      else
      {
        // Log if the spread expression isn't a simple identifier, as we don't handle complex spreads yet.
        console.warn(`Spread assignment expression is not an identifier: ${SyntaxKind[spreadExpr.getKind()]}`);
      }
    }

    if (modifiedInSpread)
    {
      return true; // Modification was successful within a spread assignment
    }

    // If not found in direct properties or any spread assignments, then it's truly not found.
    throw new Error(
      `Property '${currentKey}' not found in object literal or its spread assignments. Path: ${
        path.join(
          '.',
        )
      }. Object text: ${objectLiteral.getText().substring(0, 100)}...`, // Added object text for context
    );
  }

  // --- Property *was* found directly ---

  // Get the kind of the property for debugging reference. But, need to use asKind() to access the properties in a type-aware
  const kindName = property.getKindName();
  logger.debug('AST', `Property kind: ${kindName}`);

  const shorthandPropertyAssignment = property.asKind(SyntaxKind.ShorthandPropertyAssignment);

  // Handle both PropertyAssignment and ShorthandPropertyAssignment
  // if (property.getKind() === SyntaxKind.ShorthandPropertyAssignment)
  if (shorthandPropertyAssignment)
  {
    // For shorthand properties like { fooI18n }, we need to look up the variable
    const shorthandName = shorthandPropertyAssignment.getName();
    const localValue = localDeclarations.get(shorthandName);

    if (localValue)
    {
      // Continue with the remaining path using the resolved value
      return findAndModify(localValue, remainingPath, newValue, localDeclarations);
    }
    else
    {
      throw new Error(`Referenced shorthand property '${shorthandName}' not found as local variable`);
    }
  }
  else if (!property.asKind(SyntaxKind.PropertyAssignment))
  {
    throw new Error(`Unsupported property kind: ${SyntaxKind[property.getKind()]} at path: ${currentKey}`);
  }

  // Original code continues for PropertyAssignment case
  const prop = property as any;
  const initializer = prop.getInitializer && prop.getInitializer();

  if (!initializer)
  {
    throw new Error(`Property '${currentKey}' has no initializer.`);
  }

  const unwrappedInitializer = unwrapExpression(initializer);

  if (remainingPath.length === 0)
  {
    if (unwrappedInitializer && unwrappedInitializer.asKind(SyntaxKind.StringLiteral))
    {
      const stringLiteral = unwrappedInitializer as StringLiteral;
      stringLiteral.setLiteralValue(newValue);
      stringLiteral.formatText({ indentSize: 4 });
      return true;
    }
    else if (unwrappedInitializer && unwrappedInitializer.asKind(SyntaxKind.NoSubstitutionTemplateLiteral))
    {
      // This code is the same as above, but for NoSubstitutionTemplateLiteral, and I keep it in its own block for now as I am not yet sure this is comprehensive
      const noSubstitutionTemplateLiteral = unwrappedInitializer as NoSubstitutionTemplateLiteral;
      noSubstitutionTemplateLiteral.setLiteralValue(newValue);
      noSubstitutionTemplateLiteral.formatText({ indentSize: 4 });
      return true;
    }
    else
    {
      const initializerText = initializer.getText();
      const initializerKind = initializer.getKindName();
      console.error(
        `WOOP WOOP! Expected string literal at path ${currentKey} (found ${initializerKind}: ${initializerText})`,
      );
      throw new Error(`Expected string literal at path ${currentKey} (found ${initializerKind}: ${initializerText})`);
    }
  }
  else if (unwrappedInitializer && unwrappedInitializer.asKind(SyntaxKind.ObjectLiteralExpression))
  {
    // @masonmark 2025-04-06: LE PROBLEME:
    // export const soraCamNotificationI18n = {
    //   eventTypes: {
    //     ...operatorEvents,
    //     ...deviceEvents,
    //   },
    return findAndModify(
      unwrappedInitializer as ObjectLiteralExpression,
      remainingPath,
      newValue,
      localDeclarations,
    );
  }
  else
  {
    throw new Error(`Expected object at path ${currentKey}`);
  }
}

/**
 Given a `DiffResult` and a string containing TypeScript code for an *.i18n.ts file, this function applies the differences to the code using the TypeScript AST. It returns the modified code as a string — suitable for using as the content of a *.i18n.ts file.

 To make this work with minimal formatting changes, we use the TypeScript AST to modify the code, but we do that using `ts-morph`, because using the TypeScript compiler directly makes it hard to avoid unwanted formatting changes.

 This function throws an error if the code is not valid or the format is incorrect or any other thing goes wrong.
 */
export function applyDifferencesUsingASTOrThrow(
  diff: DiffResult,
  tsCode: string,
  debugInfo: Record<string, string>,
): {
  originalCode: string;
  modifiedCode: string;
  appliedKeypaths: string[];
  diff: DiffResult;
  debugInfo: Record<string, string>;
}
{
  const originalCode = tsCode;

  const { sourceFile } = createTsProject(tsCode);

  logger.debug('AST', 'DIFF:', diff);

  const appliedKeypaths: string[] = [];

  const localDeclarations = new Map<string, Expression>();
  sourceFile.getVariableDeclarations().forEach(decl =>
  {
    const name = decl.getName();
    const initializer = decl.getInitializer();
    if (initializer)
    {
      localDeclarations.set(name, unwrapExpression(initializer));
    }
  });

  // Find the exported constants
  const exportedConsts = sourceFile.getVariableStatements().filter(stmt => stmt.isExported());

  const exportedNamesAndValues = getExportedVariableNamesAndValues(sourceFile);

  logger.info('AST', 'EXPORTED NAMES:', exportedNamesAndValues.map(e => e.name));

  // HERE I NEED TO FIGURE OUT THE NAMES OF ALL EXPORTED VARIABLES
  // diff is like:
  // {
  //   "foo.name.en": { left: "Mason", right: "Boatie McBoatface" },
  //   "foo.name.ja": { left: "メイソン", right: "ボーティー マックボートフェイス" }
  // }

  // exportedNamesAndValues is like:
  // [{name: 'foo', value: AsExpression}]

  // 📖 OUTER LOOP: EXPORTED CONSTS
  //
  // We loop over the exported consts of the file, looking for a diff entry.
  //
  // This is not efficient, when you contemplate the diff being a huge diff generated by compating a combined JSON file for say, 500 files, with a single file (because we have the inner loops over every keyPath in the diff, below). However, we can fix that upstream of this method, because we can pare down the JSON to exclude unrelated translations. And it is actually desirable to be **able** to do the inefficient huge comparison of the "all translations vs one file", because that is useful for E2E tests of the entire system's integrity.

  for (const exportedConst of exportedConsts)
  {
    logger.debug('AST', 'exportedConst', exportedConst.getText());

    const declarations = exportedConst.getDeclarations();
    logger.debug('AST', 'declarations', declarations.map(d => d.getText()));

    const declaration = declarations[0];
    // logger.debug('AST', 'declaration', declaration);

    const name = declaration.getName();
    logger.debug('AST', 'dec[0] name', name);

    const initializer = declaration.getInitializer();
    logger.debug('AST', 'initializer', initializer?.getKindName());

    if (!initializer)
    {
      logger.error('AST', 'Exported constant has no initializer.');
      throw new Error('Exported constant has no initializer.');
    }

    const unwrappedInitializer = unwrapExpression(initializer);

    // Unwrap the exported constant initializer
    // exportedConstInitializer = unwrapExpression(exportedConstInitializer);

    // EXAMPLE:
    // We have to support all these types
    //
    // const fooI18n = {
    //   name: {
    //     en: 'foo',
    //     ja: 'フー',
    //   },
    // } as const;

    // import { hoge } from './hoge_nested.i18n';

    // const barI18n = {
    //   name: {
    //     en: 'bar',
    //     ja: 'バー',
    //   },
    // } as const;

    // export const i18n = fooI18n;

    // export const nardwacker = { barI18n, fooI18n };

    // export const derpola = {
    //   fooI18n,
    //   barI18n,
    // };

    // // Hi, mom!!
    // export const hoge2 = { fooI18n, barI18n, hoge };
    // export const hoge3 = hoge;

    // Handle different initializer types
    if (unwrappedInitializer.getKind() === SyntaxKind.ObjectLiteralExpression)
    {
      // Direct object literal case: { prop: value }
      const objectLiteral = unwrappedInitializer as ObjectLiteralExpression;

      // Process the key paths for this object literal
      for (const [keyPath, leftRight] of Object.entries(diff))
      {
        if (!keyPath.startsWith(name + '.'))
        {
          continue;
        }
        const innerKeyPath = keyPath.slice(name.length + 1);
        logger.debug('AST', 'keyPath', keyPath);
        logger.debug('AST', 'innerKeyPath', innerKeyPath);
        logger.debug('AST', 'leftRight', leftRight);

        if (!leftRight.right)
        {
          logger.warn('AST', `FIXME: No right value found for key: ${keyPath}`);
          // throw new Error(`No right value found for key: ${keyPath}`);
        }
        else
        {
          const found = findAndModify(objectLiteral, innerKeyPath.split('.'), leftRight.right, localDeclarations);
          if (found)
          {
            appliedKeypaths.push(keyPath);
          }
          else
          {
            logger.debug('AST', 'SKIP keypath: ', keyPath);
          }
        }
      }
    }
    else if (unwrappedInitializer.getKind() === SyntaxKind.Identifier)
    {
      // Reference case: export const i18n = fooI18n
      const identifier = unwrappedInitializer.getText();
      logger.debug('AST', `Export '${name}' references identifier '${identifier}'`);

      // Try to handle this case by looking for a matching local variable
      // We'll pass the identifier directly to findAndModify which will look it up
      for (const [keyPath, leftRight] of Object.entries(diff))
      {
        if (!keyPath.startsWith(name + '.'))
        {
          continue;
        }
        const innerKeyPath = keyPath.slice(name.length + 1);
        logger.debug('AST', 'innerKeyPath', innerKeyPath);
        logger.debug('AST', 'leftRight', leftRight);

        if (!leftRight.right)
        {
          // throw new Error(`No right value found for key: ${keyPath}`);
          logger.warn('AST', `FIXME: No right value found for key: ${keyPath}`);
        }
        else
        {
          const found = findAndModify(
            unwrappedInitializer,
            innerKeyPath.split('.'),
            leftRight.right,
            localDeclarations,
          );
          if (found)
          {
            appliedKeypaths.push(keyPath);
          }
          else
          {
            logger.debug('AST', 'SKIP keypath: ', keyPath);
          }
        }
      }
    }
  }

  // Format the entire source file to adjust indentation and formatting, to avoid spurious differences
  sourceFile.formatText();

  // Get the modified code
  const modifiedCode = sourceFile.getFullText();

  return { originalCode, modifiedCode, appliedKeypaths, diff, debugInfo };
}
