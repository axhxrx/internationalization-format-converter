import { convertFromSimpleLocalizeFormat } from './convertFromSimpleLocalizeFormat.ts';
import { getDifferencesOrThrow } from './getDifferencesOrThrow.ts';
import { importJSONOrThrow } from './importJSONOrThrow.ts';

/**
 Import changes from a JSON string to a TypeScript source string.
 Returns the updated TypeScript code without writing to disk.
 */
export async function importFromJSON(
  jsonContent: string,
  tsContent: string,
  options: {
    showDiffs?: boolean;
    simpleLocalizeFormat?: boolean;
  } = {},
)
{
  try
  {
    let jsonData = JSON.parse(jsonContent);

    // Convert from SimpleLocalize format if needed
    if (options.simpleLocalizeFormat)
    {
      jsonData = convertFromSimpleLocalizeFormat(jsonData);
    }

    if (options.showDiffs)
    {
      const differences = await getDifferencesOrThrow(jsonData, tsContent);
      const changeCount = Object.keys(differences).length;

      console.log(`Changes detected: ${changeCount}`);

      if (changeCount > 0)
      {
        console.log(`Changes that would be made:`);
        for (const [path, { left, right }] of Object.entries(differences))
        {
          console.log(`  - ${path}: "${left}" → "${right}"`);
        }
      }
    }

    // Convert jsonData back to string with the correct format
    const processedJsonContent = JSON.stringify(jsonData, null, 2);

    const updatedTsCode = await importJSONOrThrow(
      processedJsonContent,
      tsContent,
    );
    return updatedTsCode.modifiedCode;
  }
  catch (error)
  {
    throw error; // Let the caller handle errors
  }
}
