import { applyDifferencesUsingASTOrThrow } from './applyDifferencesUsingASTOrThrow.ts';
import { getDifferencesOrThrow } from './getDifferencesOrThrow.ts';

/**
 Loads JSON and applies any differences to the corresponding TypeScript *.i18n.ts file.

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
  // console.log('importJSONFileOrThrow', json);

  const j = JSON.parse(jsonText);

  console.log('j!!!', typeof j, j);

  const differences = await getDifferencesOrThrow(j, tsCode);

  console.log('differences!!!', typeof differences, differences);

  // console.log('tsCode', tsCode);
  // console.log('differences', differences);

  const updatedCode = applyDifferencesUsingASTOrThrow(differences, tsCode);
  return updatedCode;
};
