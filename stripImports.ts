import * as ts from 'typescript';

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
    return (rootNode: T) =>
    {
      // First, collect all imported identifiers
      ts.forEachChild(rootNode, collectImports);

      function visit(node: ts.Node): ts.VisitResult<ts.Node>
      {
        // Remove import declarations
        if (ts.isImportDeclaration(node))
        {
          return undefined as any;
        }

        // Remove property assignments where the initializer is an imported identifier
        if (
          ts.isPropertyAssignment(node)
          && ts.isIdentifier(node.initializer)
          && importedIdentifiers.has(node.initializer.text)
        )
        {
          // Remove the property assignment
          return undefined as any;
        }

        // Remove shorthand property assignments of imported identifiers
        if (
          ts.isShorthandPropertyAssignment(node)
          && importedIdentifiers.has(node.name.text)
        )
        {
          // Remove the shorthand property assignment
          return undefined as any;
        }

        // Remove usages of imported identifiers in other contexts if needed

        return ts.visitEachChild(node, visit, context);
      }
      return ts.visitNode(rootNode, visit);
    };
  }

  const result = ts.transform(sourceFile, [transformer]);
  const transformedSourceFile = result.transformed[0] as ts.SourceFile;
  return transformedSourceFile;
}

/**
 A function that removes imports, and usages of them, but leaves the rest of the code. Note that this may be destructive to comments, formatting, and other trivia. It's not intended for the re-assembly of TypeScript source files, but rather for preparing TypeScript code matching our expected format to be converted JSON (or whatever other horrific formats we may need).
 */
export const stripImports = (sourceCode: string): string =>
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
  const result = printer.printFile(transformedSourceFile);

  return result;
};
