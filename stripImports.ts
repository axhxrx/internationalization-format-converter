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

    // Helper to check if an expression references an imported identifier
    function isImportedReference(expr: ts.Expression): boolean
    {
      if (ts.isIdentifier(expr))
      {
        return importedIdentifiers.has(expr.text);
      }
      if (ts.isPropertyAccessExpression(expr))
      {
        let current: ts.Expression = expr;
        while (ts.isPropertyAccessExpression(current))
        {
          current = current.expression;
        }
        if (ts.isIdentifier(current))
        {
          return importedIdentifiers.has(current.text);
        }
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

        // Remove export declarations (e.g., export * from 'module')
        if (ts.isExportDeclaration(node))
        {
          return undefined;
        }

        // Remove export variable statements where all declarations reference imported identifiers
        if (ts.isVariableStatement(node) && node.modifiers && node.modifiers.some(mod => mod.kind === ts.SyntaxKind.ExportKeyword))
        {
          const declarations = node.declarationList.declarations;
          if (declarations.every(decl => decl.initializer && isImportedReference(decl.initializer)))
          {
            return undefined;
          }
        }

        // Handle property assignments
        if (ts.isPropertyAssignment(node))
        {
          const initializer = node.initializer;

          if (isImportedReference(initializer))
          {
            return undefined;
          }

          const visitedInitializer = ts.visitNode(initializer, visit) as ts.Expression | undefined;
          if (!visitedInitializer)
          {
            return undefined;
          }
          if (visitedInitializer !== initializer)
          {
            return factory.updatePropertyAssignment(node, node.name, visitedInitializer);
          }
          return node;
        }

        // Handle shorthand property assignments
        if (ts.isShorthandPropertyAssignment(node) && importedIdentifiers.has(node.name.text))
        {
          return undefined;
        }

        // Handle object literals
        if (ts.isObjectLiteralExpression(node))
        {
          const properties = node.properties
            .map(prop => ts.visitNode(prop, visit))
            .filter((prop): prop is ts.ObjectLiteralElementLike => prop !== undefined);

          if (properties.length === 0)
          {
            return undefined;
          }

          if (properties.length !== node.properties.length)
          {
            return factory.updateObjectLiteralExpression(node, properties);
          }
          return node;
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
  const transformedSourceFile = removeImportsAndUsages(sourceFile);

  // Convert the transformed AST back to code
  const printer = ts.createPrinter();
  const unformattedResult = printer.printFile(transformedSourceFile);

  const result = await formatTypeScriptCode(unformattedResult);

  return result;
};

if (import.meta.main)
{
    const path = './test/fixtures/hoge.re-exports.i18n.ts';
    const foo = await stripImports(Deno.readTextFileSync(path));
    console.log(foo);
}
