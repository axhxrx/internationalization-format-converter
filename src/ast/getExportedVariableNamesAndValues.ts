import type {
  Expression,
  Project,
  VariableStatement,
} from '@ts-morph/ts-morph';

/**
 Returns an array of (large) objects representing all exported variables that are created in the given source file. (The "name" property indicates the name of the variable.) This returns all exported variables, so if we want to collect only the exported constants whose literal string values are defined in the source file, we need to filter the results to winnow the list.

 Example: The following code would return a 2-element array, for `foo` and `baz` only:
 ```ts
    export hoge from 'hige.ts';

    import { bar } from './bar.ts';
    export bar as foo;

    export const foo = {
      name: {
        en: "hi",
        ja: "ハロー"
      }
    };

    export const baz = bar;
 ```
 */
export function getExportedVariableNamesAndValues(
  sourceFile: ReturnType<Project['createSourceFile']>,
): Array<{ name: string; value: Expression | undefined }>
{
  // Find all exported VariableStatements
  const exportedVars = sourceFile
    .getVariableStatements()
    .filter(stmt => stmt.isExported());

  // Collect each variable's name and initializer
  const results: Array<{ name: string; value: Expression | undefined }> = [];

  exportedVars.forEach((stmt: VariableStatement) =>
  {
    stmt.getDeclarations().forEach((decl) =>
    {
      results.push({
        name: decl.getName(),
        value: decl.getInitializer(), // could be undefined if no initializer
      });
    });
  });

  return results;
}

/**
 Returns an array of objects representing all variable declarations in the given source file, regardless of whether they are exported or not. This is useful for resolving identifiers that might be used in spread syntax within exported objects.
 */
export function getAllVariableNamesAndValuesInFile(
  sourceFile: ReturnType<Project['createSourceFile']>,
): Array<{ name: string; value: Expression | undefined }>
{
  // Find ALL VariableStatements in the file
  const allVarsInFile = sourceFile.getVariableStatements();

  const results: Array<{ name: string; value: Expression | undefined }> = [];

  allVarsInFile.forEach((stmt: VariableStatement) =>
  {
    stmt.getDeclarations().forEach((decl) =>
    {
      results.push({
        name: decl.getName(),
        value: decl.getInitializer(), // could be undefined if no initializer
      });
    });
  });

  return results;
}
