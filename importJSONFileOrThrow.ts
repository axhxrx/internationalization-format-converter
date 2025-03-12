import { applyDifferencesUsingASTOrThrow } from './applyDifferencesUsingASTOrThrow.ts';
import { getDifferencesOrThrow } from './getDifferencesOrThrow.ts';

/**
 Loads JSON and applies any differences to the corresponding TypeScript *.i18n.ts file. The assumption here is that the JSON object is newer than the TypeScript file, and differences should be applied to the TypeScript file.

 @throws {Error} If the content is not valid or the format is incorrect.
 */
export const importJSONFileOrThrow = async (jsonPath: string, tsPath: string) =>
{
  const json = await Deno.readTextFile(jsonPath);
  const ts = await Deno.readTextFile(tsPath);
  return importJSONOrThrow(json, ts);
};

export const importJSONOrThrow = async (jsonText: string, tsCode: string) =>
{
  const jsonObj = JSON.parse(jsonText);
  const differences = await getDifferencesOrThrow(jsonObj, tsCode);
  const updatedCode = applyDifferencesUsingASTOrThrow(differences, tsCode);
  return updatedCode;
};
