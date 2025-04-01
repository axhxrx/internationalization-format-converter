import { loadLocalizationFromFileOrThrow } from '../ast/loadLocalizationFromFile.ts';
import { convertToSimpleLocalizeFormat } from './convertToSimpleLocalizeFormat.ts';

// deno-lint-ignore no-explicit-any
type WhoKnows = Record<string, any>;

/**
 * Export a TypeScript-format localization to JSON without writing to disk.
 * Returns the result object containing JSON and other data.
 */
export async function exportToJSON(
  tsFile: string,
  options: {
    derive?: boolean;
    identifier?: string;
    printToStdout?: boolean;
    simpleLocalizeFormat?: boolean;
  } = {},
): Promise<{
  module: WhoKnows;
  originalCode: string;
  code: string;
  json: string;
}>
{
  let rootLevelIdentifier: string | { derive: true } | undefined;

  if (options.derive)
  {
    rootLevelIdentifier = { derive: true };
  }
  else if (options.identifier)
  {
    rootLevelIdentifier = options.identifier;
  }

  const result = await loadLocalizationFromFileOrThrow(tsFile, rootLevelIdentifier);

  // If SimpleLocalize format is requested, transform the JSON
  if (options.simpleLocalizeFormat)
  {
    const parsed = JSON.parse(result.json);
    const transformed = convertToSimpleLocalizeFormat(parsed);
    result.json = JSON.stringify(transformed, null, 2);
  }

  if (options.printToStdout)
  {
    console.log(result.json);
  }

  return result;
}
