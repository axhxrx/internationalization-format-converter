import { walk } from '@std/fs';
import { join, normalize, parse, relative } from '@std/path';
import { exportToJSONFile } from './exportToJSONFile.ts';
import type { SearchOptions } from './SearchOptions.ts';

import { logger } from './Logger.ts';

class ExportResult
{
  state: 'new' | 'in progress' | 'complete' | 'error' = 'new';

  constructor(
    public path: string,
  )
  {}

  destination?: string;
  json?: string;
  jsonObj?: Record<string, unknown>;
  error?: unknown;
}

interface ExportOptions
{
  derive?: boolean;
  identifier?: string;
  printToStdout?: boolean;
  simpleLocalizeFormat?: boolean;
  outputFile?: string;
  /**
   If present, then the JSON path map created will have paths relative to this directory.
   */
  rootDir?: string;
}

const defaultSearchOptions: SearchOptions = {
  fileExtensions: ['.i18n.ts'],
  skip: [/node_modules/, /.git/],
};

interface CompletedBatchExport extends BatchExport
{
  outputDir: string;
  json: string;
  jsonObject: Record<string, unknown>;
}

interface FailedBatchExport extends BatchExport
{
  error: unknown;
}

export class BatchExport
{
  private inputs: Record<string, ExportResult>;

  private exportOptions: ExportOptions;

  protected searchOptions: SearchOptions = { ...defaultSearchOptions };

  private tmpDir: string;

  state: 'new' | 'in progress' | 'complete' | 'error' = 'new';

  get outputDir()
  {
    return this.tmpDir;
  }

  /**
   Finds all files to export, based on the search options, and creates a new `BatchExport` instance. The created instance does not do anything further until `run` is called.
   */
  static async find(
    root: string,
    exportOptions: ExportOptions,
    searchOptions?: SearchOptions,
  )
  {
    const resolvedSearchOptions = searchOptions || defaultSearchOptions;
    const resolvedExportOptions = { ...exportOptions, rootDir: root };

    const a = await Array.fromAsync(walk(root, {
      exts: resolvedSearchOptions.fileExtensions,
      // match: [/^i18n\.ts$/, /^.+\.i18n\.ts$/],
      includeDirs: false,
      skip: resolvedSearchOptions.skip,
    }));

    const filePaths = a.map(x => x.path);

    const result = new BatchExport(filePaths, resolvedExportOptions);
    result.searchOptions = resolvedSearchOptions;

    return result;
  }

  constructor(
    inputs: string[],
    options: ExportOptions,
  )
  {
    this.inputs = {};
    this.exportOptions = options;
    for (const input of inputs)
    {
      this.inputs[input] = new ExportResult(input);
    }
    this.tmpDir = Deno.makeTempDirSync();
  }

  protected count: number = 0;

  /**
   Creates a temporary directory to store the JSON files, then tries to export each input file to a JSON file. If successful, returns a `CompletedBatchExport` object, otherwise a `FailedBatchExport` object. These types extend `BatchExport` with additional properties relating to the export results.

   This method can optionally also write the combined JSON to a file if the `outputFile` option is set in the `ExportOptions`.
   */
  async run(): Promise<CompletedBatchExport | FailedBatchExport>
  {
    const entries = Object.entries(this.inputs);
    for (const [path, result] of entries)
    {
      try
      {
        logger.debug('BATCH', `${path}: BEGIN`);
        result.state = 'in progress';

        const jsonPath = join(this.tmpDir, path + '.json');
        const normalizedPath = normalize(path);
        const _pathSegments = normalizedPath.split('/').filter(Boolean); // Using forward slash which Deno normalizes internally
        const { dir: _dir, base: _base, name: _name, ext: _ext } = parse(jsonPath); // Available path components
        logger.debug('BATCH', 'dir', _dir);

        await Deno.mkdirSync(_dir, { recursive: true });

        const exportedJSONFile = await exportToJSONFile(path, jsonPath, this.exportOptions);
        result.destination = jsonPath;
        result.json = await Deno.readTextFile(jsonPath);
        result.jsonObj = JSON.parse(result.json!);

        logger.debug('BATCH', `${path}: exported: ${jsonPath}`);

        result.state = 'complete';
      }
      catch (error)
      {
        result.state = 'error';
        result.error = error;
      }
    }
    return this.finalize();
  }

  protected successCount: number = 0;

  async finalize(): Promise<CompletedBatchExport | FailedBatchExport>
  {
    const jsonObject: Record<string, unknown> = {};
    let json = '';
    let error: unknown;

    const entries = Object.entries(this.inputs);
    for (const [_path, result] of entries)
    {
      const path = this.exportOptions.rootDir
        ? relative(this.exportOptions.rootDir, _path)
        : _path;

      if (result.state === 'error')
      {
        error = result.error;
        break;
      }
      else
      {
        jsonObject[path] = result.jsonObj!;
      }
    }

    try
    {
      json = JSON.stringify(jsonObject, null, 2);
    }
    catch (jsonErr)
    {
      error = new Error(`Error stringifying combined JSON: ${jsonErr}`);
    }

    if (!error)
    {
      this.successCount = entries.length;
      if (this.exportOptions.outputFile)
      {
        await Deno.writeTextFile(this.exportOptions.outputFile, json);
      }
    }

    return error
      ? { ...this, state: 'error', error }
      : { ...this, state: 'complete', json, jsonObject };
  }
}
