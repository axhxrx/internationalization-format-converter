import { walk } from '@std/fs';
import { isAbsolute, join, normalize, parse } from '@std/path';
import { stringify } from 'node:querystring';
import { isLocalization } from '../internationalization/mod.ts';
import { DiffResult } from './DiffResult.ts';
import { importJSONOrThrow } from './importJSONFileOrThrow.ts';
import { loadLocalizationFromFileOrThrow } from './loadLocalizationFromFile.ts';
import { exportToJSONFile } from './main.ts';
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

interface ImportOptions
{
  simpleLocalizeFormat?: boolean;
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

  constructor(
    /**
     A JSON object whose keys are paths to the TypeScript source files to be modified, and the values are the JSON objects to be imported. The JSON objects are presumed to be the result of a previous export operation, and may or may not contain changes that need to be mapped to the TypeScript source files.
     */
    protected jsonPathMap: Record<string, unknown>,
    protected importOptions: ImportOptions = {},
  )
  {
    this.inputs = {};
  }

  /**
   Run the batch import operation. The `rootPath` argument controls how relative paths in the JSON `pathMap` that is passed to the constructor are resolved (defaults to the current working directory).
   */
  async run(rootPath?: string): Promise<CompletedBatchImport | FailedBatchImport>
  {
    const paths = Object.keys(this.jsonPathMap);
    for (const possiblyRelativePath of paths)
    {
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
