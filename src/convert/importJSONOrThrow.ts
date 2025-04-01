import { applyDifferencesUsingASTOrThrow } from '../ast/applyDifferencesUsingASTOrThrow.ts';
import type { DiffResult } from '../ast/DiffResult.ts';
import { getDifferencesOrThrow } from '../ast/getDifferencesOrThrow.ts';

export const importJSONOrThrow = async (jsonText: string, tsCode: string,
  debugInfo: Record<string, string> = {}
): Promise<{
  originalCode: string;
  modifiedCode: string;
  appliedKeypaths: string[];
  diff: DiffResult;
  debugInfo: Record<string, string>;
}> =>
{
  const jsonObj = JSON.parse(jsonText);
  const differences = await getDifferencesOrThrow(jsonObj, tsCode);
  const result = applyDifferencesUsingASTOrThrow(differences, tsCode, debugInfo);
  return result;
};
