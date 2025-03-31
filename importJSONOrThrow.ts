import { applyDifferencesUsingASTOrThrow } from './applyDifferencesUsingASTOrThrow.ts';
import { getDifferencesOrThrow } from './getDifferencesOrThrow.ts';

export const importJSONOrThrow = async (jsonText: string, tsCode: string, debugInfo: Record<string, string> = {}) =>
{
  const jsonObj = JSON.parse(jsonText);
  const differences = await getDifferencesOrThrow(jsonObj, tsCode);
  const result = applyDifferencesUsingASTOrThrow(differences, tsCode, debugInfo);
  console.log('importJSONOrThrow():', result);
  return result;
};
