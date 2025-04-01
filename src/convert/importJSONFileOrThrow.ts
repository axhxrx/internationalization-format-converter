import type { DiffResult } from '../ast/DiffResult.ts';
import { importJSONOrThrow } from './importJSONOrThrow.ts';

/**
 Loads JSON and applies any differences to the corresponding TypeScript *.i18n.ts file. The assumption here is that the JSON object is newer than the TypeScript file, and differences should be applied to the TypeScript file.

 @throws {Error} If the content is not valid or the format is incorrect.
 */
export const importJSONFileOrThrow = async (jsonPath: string, tsPath: string): Promise<{
  originalCode: string;
  modifiedCode: string;
  appliedKeypaths: string[];
  diff: DiffResult;
  debugInfo: Record<string, string>;
}> =>
{
  const json = await Deno.readTextFile(jsonPath);
  const ts = await Deno.readTextFile(tsPath);
  const debugInfo = { jsonPath, tsPath };
  return importJSONOrThrow(json, ts, debugInfo);
};
