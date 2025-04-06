import { BatchImport } from './BatchImport.ts';

type BatchImportOptions = {
  jsonFile: string;
  targetDir: string;
  dryRun?: boolean;
  simpleLocalizeFormat?: boolean;
};

export const batchImportWithOptions = async (options: BatchImportOptions): Promise<number> =>
{
  const pathToJsonPathMap = options.jsonFile;
  const json = await Deno.readTextFile(pathToJsonPathMap);
  const jsonObj = JSON.parse(json) as Record<string, unknown>;

  // console.log('OPTIONS', options);

  const b = new BatchImport(jsonObj, options);

  // FIXME: Stupid that we have to pass the targetDir twice, it is in the options!
  const r = await b.run(options.targetDir);

  // console.log(Deno.inspect(r, { depth: 3 }));

  return r.state === 'complete' ? 0 : 1;
};
