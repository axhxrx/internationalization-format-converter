import { walk } from '@std/fs';
import { join, normalize, parse, relative } from '@std/path';
import type { SearchOptions } from '../cli/SearchOptions.ts';
import { exportToJSONFile } from '../convert/exportToJSONFile.ts';

import { convertToSimpleLocalizeFormat } from '../convert/convertToSimpleLocalizeFormat.ts';
import { countLeafNodes } from '../util/countLeafNodes.ts';
import { logger } from '../util/Logger.ts';

class ExportResult
{
  state: 'new' | 'in progress' | 'complete' | 'error' | 'skipped' = 'new';

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
  limit?: number;
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
    const entries = Object.entries(this.inputs)
      .sort((a, b) => a[0].localeCompare(b[0], 'en', { sensitivity: 'base' }));
    let leafNodesExported = 0;

    let i = 0;
    for (const [path, result] of entries)
    {
      try
      {
        console.log(`Exporting ${++i} of ${entries.length}: ${path}`);
        logger.debug('BATCH', `${path}: BEGIN`);
        result.state = 'in progress';

        const jsonPath = join(this.tmpDir, path + '.json');
        const normalizedPath = normalize(path);
        const _pathSegments = normalizedPath.split('/').filter(Boolean); // Using forward slash which Deno normalizes internally
        const { dir: _dir, base: _base, name: _name, ext: _ext } = parse(jsonPath); // Available path components
        logger.debug('BATCH', 'dir', _dir);

        await Deno.mkdirSync(_dir, { recursive: true });

        // The conversion to SimpleLocalize format can only be done after the conversion to JSON, on a per-file basis, so for a batch export, this means we need to disable it here and do it at the end:
        const fileExportOptions = {
          ...this.exportOptions,
          simpleLocalizeFormat: false,
        };

        await exportToJSONFile(path, jsonPath, fileExportOptions);

        result.destination = jsonPath;
        result.json = await Deno.readTextFile(jsonPath);

        const jsonObj = JSON.parse(result.json);

        const shouldProcessThisItem = this.exportOptions.limit
          ? leafNodesExported + countLeafNodes(jsonObj) <= this.exportOptions.limit
          : true;

        if (shouldProcessThisItem)
        {
          leafNodesExported += countLeafNodes(jsonObj);
          result.jsonObj = jsonObj;
          result.state = 'complete';
        }
        else
        {
          result.state = 'skipped';
          break;
        }
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
      else if (result.state === 'skipped')
      {
        continue;
      }
      else
      {
        jsonObject[path] = result.jsonObj!;
      }
    }

    try
    {
      const finalJsonObject = this.exportOptions.simpleLocalizeFormat
        ? convertToSimpleLocalizeFormat(jsonObject)
        : jsonObject;
      json = JSON.stringify(finalJsonObject, null, 2);
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

    console.log('Successfully exported JSON for', this.successCount, 'files');
    console.log(this);

    return error
      ? { ...this, state: 'error', error }
      : { ...this, state: 'complete', json, jsonObject };
  }
}
