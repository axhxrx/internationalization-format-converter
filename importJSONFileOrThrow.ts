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

  // return formatTypeScriptCode(updatedCode);

  // console.log('differences', differences);

  // return differences;

  // for (const difference of differences) {
  //   console.log('difference', difference);
  // }

  // const modulePath = json;
  // const i18n = await import(modulePath);

  // const entries = Object.entries(i18n);

  // for (const [key, value] of entries) {
  //   if (typeof value === 'object' && value !== null) {
  //     const validateI18nObject = (obj: unknown): boolean => {
  //       if (typeof obj !== 'object' || obj === null) {
  //         return false;
  //       }

  //       // If it's a leaf node (has 'en' or 'ja' keys)
  //       if ('en' in obj || 'ja' in obj) {
  //         return isI18nItem(obj);
  //       }

  //       // If it's a nested object, recursively check all values
  //       return Object.values(obj).every(val => validateI18nObject(val));
  //     };

  //     if (!validateI18nObject(value)) {
  //       throw new Error(`Invalid i18n structure in key "${key}"`);
  //     }
  //   } else {
  //     throw new Error(`Invalid i18n structure: value must be an object`);
  //   }

  //   // const j = JSON.stringify(i18n, null, 2);
  //   // console.log('JSON:', j);

  //   return i18n;
  // }
};
