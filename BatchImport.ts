import { isAbsolute, join } from '@std/path';
import { isLocalization } from '../internationalization/mod.ts';
import { convertFromSimpleLocalizeFormat } from './convertFromSimpleLocalizeFormat.ts';
import { DiffResult } from './DiffResult.ts';
import { importJSONOrThrow } from './importJSONOrThrow.ts';
import { loadLocalizationFromFileOrThrow } from './loadLocalizationFromFile.ts';
import type { SearchOptions } from './SearchOptions.ts';

const defaultSearchOptions: SearchOptions = {
  fileExtensions: ['.json'],
  skip: [/node_modules/, /.git/],
};

interface CompletedBatchImport extends BatchImport
{
  // outputDir: string;
  json: string;
  jsonObject: Record<string, unknown>;
}

interface FailedBatchImport extends BatchImport
{
  error: unknown;
}

export interface ImportOptions
{
  /**
   If true, the input JSON pathMap is converted from SimpleLocalize format to our normal JSON format before attempting the import.
   */
  simpleLocalizeFormat?: boolean;

  /**
   The rootPath (default: current working directory) controls how relative paths in the JSON `pathMap` that is passed to the constructor are resolved. It is expected that paths in the JSON `pathMap` will often be relative paths. (If the paths are NOT relative, though, this option has no effect.)
   */
  rootPath?: string;
}

export class ImportResult
{
  state: 'new' | 'in progress' | 'complete' | 'error' = 'new';
  public appliedKeypaths?: string[];
  public diff?: DiffResult;

  constructor(
    public destination: string,
    public json: string,
    public jsonObj: Record<string, unknown>,
    public typescriptSource?: string,
    public typescriptDestination?: string, // delete?
    public error?: unknown,
  )
  {
  }
}

export class BatchImport
{
  state: 'new' | 'in progress' | 'complete' | 'error' = 'new';

  private inputs: Record<string, ImportResult>;

  readonly jsonPathMap: Record<string, unknown>;

  constructor(
    /**
     A JSON object whose keys are paths to the TypeScript source files to be modified, and the values are the JSON objects to be imported. The JSON objects are presumed to be the result of a previous export operation, and may or may not contain changes that need to be mapped to the TypeScript source files.
     */
    jsonPathMap: Record<string, unknown>,
    protected importOptions: ImportOptions = {},
  )
  {
    this.inputs = {};

    if (importOptions.simpleLocalizeFormat)
    {
      const fixedPathMap: Record<string, Record<string, unknown>> = {};
      for (const [key, value] of Object.entries(jsonPathMap))
      {
        fixedPathMap[key] = convertFromSimpleLocalizeFormat(value as Record<string, unknown>);
      }
      this.jsonPathMap = fixedPathMap;
    }
    else
    {
      this.jsonPathMap = jsonPathMap;
    }
  }

  /**
   Run the batch import operation. The `rootPath` argument controls how relative paths in the JSON `pathMap` that is passed to the constructor are resolved (defaults to the current working directory).
   */
  async run(
    rootPath?: string,
  ): Promise<CompletedBatchImport | FailedBatchImport>
  {
    const paths = Object.keys(this.jsonPathMap);
    for (const possiblyRelativePath of paths)
    {
      console.log('Processing path:', possiblyRelativePath);
      console.log('Root path:', rootPath);

      const path = isAbsolute(possiblyRelativePath)
        ? possiblyRelativePath
        : join(rootPath ?? Deno.cwd(), possiblyRelativePath);

      const jsonObjectForPath = this.jsonPathMap[possiblyRelativePath];

      if (!isLocalization(jsonObjectForPath))
      {
        this.inputs[path] = new ImportResult(path, '', {}, '', '', 'Invalid i18n structure');
      }
      else
      {
        try
        {
          const json = JSON.stringify(jsonObjectForPath, null, 2);

          // Note: `code` is a MODIFIED version of the original code, with the imports stripped out. That's intentional, but don't confuse it with the original code, which is in the `originalCode` property.
          const {
            module: _module,
            originalCode,
            code: _code,
            json: _jsonFromOriginalTs,
          } = await loadLocalizationFromFileOrThrow(path);

          const {
            appliedKeypaths,
            diff,
            originalCode: originalCode2,
            modifiedCode,
            debugInfo,
          } = await importJSONOrThrow(json, originalCode);

          this.inputs[path] = new ImportResult(
            path,
            json,
            jsonObjectForPath,
            modifiedCode,
            path, /// delete?
          );
          this.inputs[path].state = 'complete';

          this.inputs[path].appliedKeypaths = appliedKeypaths ?? [];
          this.inputs[path].diff = diff ?? {};

          console.log(`Successfully imported JSON for path: ${path}`);
        }
        catch (error)
        {
          this.inputs[path] = new ImportResult(path, '', {}, '', '', error);
          continue;
        }
      }
    }

    return this.finalize();
  }

  async finalize(): Promise<CompletedBatchImport | FailedBatchImport>
  {
    for (const [path, result] of Object.entries(this.inputs))
    {
      if (result.state === 'error')
      {
        return { ...this, state: 'error', error: result.error };
      }
    }

    for (const [path, result] of Object.entries(this.inputs))
    {
      if (result.state === 'complete')
      {
        const typescriptSource = result.typescriptSource;
        const typescriptDestination = result.typescriptDestination;
        if (typescriptSource && typescriptDestination)
        {
          await Deno.writeTextFile(typescriptDestination, typescriptSource);
        }
        console.log(`Successfully imported JSON for path: ${path}`, result.appliedKeypaths?.join(', '));
      }
    }
    return { ...this, state: 'complete', json: '', jsonObject: {} };
  }
}
