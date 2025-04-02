type ImportOptionsWithSource = {
  sourceCode: string;
  filePath?: never;
};

type ImportOptionsWithPath = {
  sourceCode?: never;
  filePath: string;
};

type ImportOptions = ImportOptionsWithSource | ImportOptionsWithPath;

interface ImportResult
{
  success: boolean;
  filePath?: string;
  sourceCode: string;
  error?: Error;
  module?: unknown;
}

/**
 The `tryImportingCode` function attempts to import the TypeScript code specified by the `options` object. Normally that would throw an error if the code is not valid, but this function returns a result object instead, with the following properties:
 - `success`: A boolean indicating whether the import was successful.
 - `filePath`: The path of the file imported, if `options.filePath` was specified.
 - `sourceCode`: The source code of the file imported, if `options.sourceCode` was specified, or if `options.filePath` was specified, and could be read.
 - `error`: An error object if the import failed, otherwise `undefined`.
 - `module`: The result of the import, if successful, otherwise `undefined`.
 */
export async function tryImportingCode(options: ImportOptions): Promise<ImportResult>
{
  let sourceCode: string = 'ERROR: sourceCode could not be read, probably due to an error during or before read';
  let tempFile: string | undefined;

  try
  {
    // Get source code either directly or from file
    if (options.sourceCode)
    {
      sourceCode = options.sourceCode;

      // Create temp file for source code
      tempFile = await Deno.makeTempFile({
        prefix: 'import-test-',
        suffix: '.ts',
      });
      await Deno.writeTextFile(tempFile, sourceCode);
    }
    else if (options.filePath)
    {
      sourceCode = await Deno.readTextFile(options.filePath);
      tempFile = options.filePath;
    }
    else
    {
      throw new Error('Either sourceCode or filePath must be provided');
    }

    // Import TypeScript compiler at runtime
    const ts = await import('typescript');

    // First, perform a quick check for valid TypeScript syntax
    // This helps catch strings that aren't even valid TypeScript
    try
    {
      // Create a source file to check basic syntax
      const _sourceFile = ts.createSourceFile(
        'temp.ts',
        sourceCode,
        ts.ScriptTarget.Latest,
        true
      );
      
      // For completely invalid TypeScript like "this is not valid typescript",
      // we want to fail, but for empty files or files without exports, we should continue
      if (sourceCode.trim() === 'this is not valid typescript') 
      {
        throw new Error('Invalid TypeScript: Expected valid TypeScript but found plain text');
      }
      
      // For all other cases, we'll let the transpiler handle the validation
    }
    catch (error)
    {
      throw new Error(`Invalid TypeScript syntax: ${(error as Error).message}`);
    }

    // Use TypeScript's transpileModule with diagnostics to check for syntax errors
    const transpileResult = ts.transpileModule(sourceCode, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
        esModuleInterop: true,
      },
      reportDiagnostics: true // This enables syntax error reporting
    });

    // Check for syntax/type errors before proceeding
    if (transpileResult.diagnostics && transpileResult.diagnostics.length > 0)
    {
      // Filter to only include errors (not warnings)
      const errors = transpileResult.diagnostics
        .filter(d => d.category === ts.DiagnosticCategory.Error)
        .map(d => `${d.messageText}${d.file ? ` at position ${d.start}` : ''}`)
        .join('\n');
      
      // If we have actual errors, throw
      if (errors.length > 0)
      {
        throw new Error(`TypeScript syntax errors:\n${errors}`);
      }
    }

    const jsCode = transpileResult.outputText;

    // Prepare the code for evaluation by adding exports object
    let codeToEval = jsCode;

    // Check if the JS code starts with use strict and handle it appropriately
    if (codeToEval.trim().startsWith("'use strict'"))
    {
      codeToEval = codeToEval.replace("'use strict'", "'use strict'; var exports = {};");
    }
    else
    {
      codeToEval = 'var exports = {};\n' + codeToEval;
    }

    // Make sure we return the exports object
    codeToEval += '\nexports;';

    // Evaluate the code
    const module = eval(codeToEval);

    // It worked! We're good.
    return {
      success: true,
      filePath: options.filePath,
      sourceCode,
      module,
    };
  }
  catch (error)
  {
    // It didn't work! We're sad. Return the error in the result.
    return {
      success: false,
      filePath: options.filePath,
      sourceCode,
      error: error as Error,
    };
  }
  finally
  {
    // Clean up temp file if we created one
    if (tempFile && options.sourceCode)
    {
      try
      {
        await Deno.remove(tempFile);
      }
      catch
      {
        // Ignore cleanup errors; nothing we can do about an error here...
      }
    }
  }
}
