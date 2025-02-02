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

    // Try importing the file
    const realPath = await Deno.realPath(tempFile);
    const module = await import(`file://${realPath}`);

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
        // Ignore cleanup errors
      }
    }
  }
}
