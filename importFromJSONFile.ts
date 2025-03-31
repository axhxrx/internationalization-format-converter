import { convertFromSimpleLocalizeFormat } from './convertFromSimpleLocalizeFormat.ts';
import { getDifferencesOrThrow } from './getDifferencesOrThrow.ts';
import { importFromJSON } from './importFromJSON.ts';
import { logger } from './Logger.ts';

/**
 Import changes from a JSON file (that was exported via `exportToJSON()`) to a TypeScript file (in the format defined by `@axhxrx/internationalization`). This process updates the leaf nodes that are strings, if the JSON value is different from the existing value.
 */
export async function importFromJSONFile(
  jsonFile: string,
  tsFile: string,
  options: {
    dryRun?: boolean;
    simpleLocalizeFormat?: boolean;
  } = {},
)
{
  try
  {
    const jsonContent = await Deno.readTextFile(jsonFile);
    const tsContent = await Deno.readTextFile(tsFile);

    // For dry run, we need to calculate differences without applying them
    if (options.dryRun)
    {
      try
      {
        let jsonData = JSON.parse(jsonContent);

        // Convert from SimpleLocalize format if needed
        if (options.simpleLocalizeFormat)
        {
          jsonData = convertFromSimpleLocalizeFormat(jsonData);
          console.log(`[DRY RUN] Converting from SimpleLocalize format with locale keys at root level`);
        }

        const differences = await getDifferencesOrThrow(jsonData, tsContent);
        const changeCount = Object.keys(differences).length;

        logger.info('CLI', `[DRY RUN] Would import from ${jsonFile} to ${tsFile}`);
        logger.info('CLI', `[DRY RUN] Changes detected: ${changeCount}`);

        if (changeCount > 0)
        {
          logger.info('CLI', `[DRY RUN] Changes that would be made:`);
          for (const [path, { left, right }] of Object.entries(differences))
          {
            logger.info('CLI', `  - ${path}: "${left}" → "${right}"`);
          }
        }
        else
        {
          logger.info('CLI', `[DRY RUN] No changes would be made`);
        }
      }
      catch (diffError)
      {
        const err = diffError instanceof Error ? diffError : new Error(`${diffError}`);
        console.error(`[DRY RUN] Error calculating differences:`, err.message);
        Deno.exit(1);
      }
    }
    else
    {
      const updatedTsCode = await importFromJSON(jsonContent, tsContent, {
        simpleLocalizeFormat: options.simpleLocalizeFormat,
      });
      await Deno.writeTextFile(tsFile, updatedTsCode);
      logger.info('CLI', `Successfully imported changes from ${jsonFile} to ${tsFile}`);
      if (options.simpleLocalizeFormat)
      {
        logger.info('CLI', `Converted from SimpleLocalize format with locale keys at root level`);
      }
    }
  }
  catch (error)
  {
    const err = error instanceof Error ? error : new Error(`${error}`);
    logger.error('CLI', `Error importing from ${jsonFile}:`, err.message);
    Deno.exit(1);
  }
}
