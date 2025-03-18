import { walk } from '@std/fs';
import { join, normalize, parse } from '@std/path';
import { exportToJSONFile } from './main.ts';
import type { SearchOptions } from './SearchOptions.ts';

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

  static async find(
    root: string,
    exportOptions: ExportOptions,
    searchOptions?: SearchOptions,
  )
  {
    const resolvedSearchOptions = searchOptions || defaultSearchOptions;

    const a = await Array.fromAsync(walk(root, {
      exts: resolvedSearchOptions.fileExtensions,
      // match: [/^i18n\.ts$/, /^.+\.i18n\.ts$/],
      includeDirs: false,
      skip: resolvedSearchOptions.skip,
    }));

    const filePaths = a.map(x => x.path);

    const result = new BatchExport(filePaths, exportOptions);
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
        this.log(`${path}: BEGIN`);
        result.state = 'in progress';

        const jsonPath = join(this.tmpDir, path + '.json');
        const normalizedPath = normalize(path);
        const _pathSegments = normalizedPath.split('/').filter(Boolean); // Using forward slash which Deno normalizes internally
        const { dir: _dir, base: _base, name: _name, ext: _ext } = parse(jsonPath); // Available path components
        this.log('dir', _dir);

        await Deno.mkdirSync(_dir, { recursive: true });

        const exportedJSONFile = await exportToJSONFile(path, jsonPath, this.exportOptions);
        result.destination = jsonPath;
        result.json = await Deno.readTextFile(jsonPath);
        result.jsonObj = JSON.parse(result.json!);

        this.log(`${path}: exported: ${jsonPath}`);

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

  async finalize(): Promise<CompletedBatchExport | FailedBatchExport>
  {
    const jsonObject: Record<string, unknown> = {};
    let json = '';
    let error: unknown;

    const entries = Object.entries(this.inputs);
    for (const [path, result] of entries)
    {
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
      if (this.exportOptions.outputFile)
      {
        await Deno.writeTextFile(this.exportOptions.outputFile, json);
      }
    }

    return error
      ? { ...this, state: 'error', error }
      : { ...this, state: 'complete', json, jsonObject };
  }

  log(...args: unknown[])
  {
    console.log('BATCH: ', ...args);
  }
}

const paths = [
  'test/fixtures/insane-file-extensionless-import.ts',
  'test/fixtures/hoge.nested.i18n.ts',
  'test/fixtures/foo.i18n.ts',
  'test/fixtures/bar.i18n.ts',
];

const batch = new BatchExport(paths, {});

await batch.run();
