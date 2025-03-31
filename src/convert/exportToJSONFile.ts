import { exportToJSON } from './exportToJSON.ts';

/**
 * Export a TypeScript-format localization (in the format defined by `@axhxrx/internationalization`)
 * to a JSON file. The purpose here is e.g. to integrate with some other system which can
 * interoperate with JSON but not our custom .ts format.
 */
export async function exportToJSONFile(
  tsFile: string,
  jsonFile: string,
  options: {
    derive?: boolean;
    identifier?: string;
    dryRun?: boolean;
    simpleLocalizeFormat?: boolean;
  },
)
{
  try
  {
    const result = await exportToJSON(tsFile, {
      derive: options.derive,
      identifier: options.identifier,
      simpleLocalizeFormat: options.simpleLocalizeFormat,
    });

    if (options.dryRun)
    {
      console.log(`[DRY RUN] Would export ${tsFile} to ${jsonFile}`);
      console.log(`[DRY RUN] JSON content would have ${result.json.length} characters`);
      if (options.simpleLocalizeFormat)
      {
        console.log(`[DRY RUN] Using SimpleLocalize format with locale keys at root level`);
      }
    }
    else
    {
      await Deno.writeTextFile(jsonFile, result.json);
      // console.log(`Successfully exported ${tsFile} to ${jsonFile}`);
      if (options.simpleLocalizeFormat)
      {
        // console.log(`Used SimpleLocalize format with locale keys at root level`);
      }
    }
  }
  catch (error)
  {
    const err = error instanceof Error ? error : new Error(`${error}`);
    console.error(`Error exporting ${tsFile} to JSON:`, err.message);
    Deno.exit(1);
  }
}
