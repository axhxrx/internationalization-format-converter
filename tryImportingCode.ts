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

    return {
      success: true,
      filePath: options.filePath,
      sourceCode,
      module,
    };
  }
  catch (error)
  {
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
