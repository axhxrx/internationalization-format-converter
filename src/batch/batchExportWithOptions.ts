import { BatchExport } from './BatchExport.ts';

type BatchExportOptions = {
  rootDir: string;
  outputFile: string;
  fileExtensions?: string[];
  dryRun?: boolean;
  simpleLocalizeFormat?: boolean;
  limit?: number;
};

/**
 The CLI version of batch export. Create a `BatchExport` instance and run it, reporting the result in the CLI. This is just a CLI-specific wrapper around the `BatchExport` class.
 */
export const batchExportWithOptions = async (options: BatchExportOptions): Promise<number> =>
{
  const b = await BatchExport.find(options.rootDir, options);
  const r = await b.run();

  // console.log(Deno.inspect(r, { depth: 3 }));

  return r.state === 'complete' ? 0 : 1;
};
