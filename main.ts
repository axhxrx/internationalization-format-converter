import { parseArgs } from 'jsr:@std/cli';
import process from 'node:process';
import { getDifferencesOrThrow } from './getDifferencesOrThrow.ts';
import * as importJSONFileOrThrow from './importJSONFileOrThrow.ts';
import { loadLocalizationFromFileOrThrow } from './loadLocalizationFromFile.ts';

/**
 * Convert JSON with locale keys at leaf nodes to JSON with locale keys at the root level.
 * Preserves the nested structure for better organization.
 *
 * Example input:
 * {
 *   "foo": {
 *     "name": {
 *       "en": "Mason",
 *       "ja": "メイソン"
 *     }
 *   }
 * }
 *
 * Example output:
 * {
 *   "en": {
 *     "foo": {
 *       "name": "Mason"
 *     }
 *   },
 *   "ja": {
 *     "foo": {
 *       "name": "メイソン"
 *     }
 *   }
 * }
 */
export function convertToSimpleLocalizeFormat(jsonObject: Record<string, unknown>): Record<string, unknown>
{
  const result: Record<string, any> = {};
  const locales = new Set<string>();

  // First pass to collect all locales
  function collectLocales(obj: any)
  {
    if (obj && typeof obj === 'object' && !Array.isArray(obj))
    {
      // Check if this is a leaf node with locale keys
      const potentialLocaleKeys = Object.keys(obj).filter(k =>
        k === 'en' || k === 'ja' || /^[a-z]{2}(-[A-Z]{2})?$/.test(k)
      );

      if (potentialLocaleKeys.length > 0
        && potentialLocaleKeys.every(k => typeof obj[k] === 'string'))
      {
        // This is a leaf node with locales
        potentialLocaleKeys.forEach(locale => locales.add(locale));
      }
      else
      {
        // Continue traversing
        for (const value of Object.values(obj))
        {
          if (value && typeof value === 'object')
          {
            collectLocales(value);
          }
        }
      }
    }
  }

  // Initialize result with all locales
  collectLocales(jsonObject);
  locales.forEach(locale =>
  {
    result[locale] = {};
  });

  // Helper function to set a value in nested object structure
  function setNestedValue(obj: any, path: string[], value: any)
  {
    let current = obj;

    // Create or traverse path
    for (let i = 0; i < path.length - 1; i++)
    {
      const key = path[i];
      if (!current[key])
      {
        current[key] = {};
      }
      current = current[key];
    }

    // Set the value at the final path
    current[path[path.length - 1]] = value;
  }

  // Process the object to build the locale-based structure
  function processObject(obj: any, path: string[] = [])
  {
    if (obj && typeof obj === 'object' && !Array.isArray(obj))
    {
      // Check if this is a leaf node with locale keys
      const potentialLocaleKeys = Object.keys(obj).filter(k =>
        k === 'en' || k === 'ja' || /^[a-z]{2}(-[A-Z]{2})?$/.test(k)
      );

      if (potentialLocaleKeys.length > 0
        && potentialLocaleKeys.every(k => typeof obj[k] === 'string'))
      {
        // This is a leaf node with locales, add entries to each locale's structure
        for (const locale of potentialLocaleKeys)
        {
          if (locales.has(locale))
          {
            setNestedValue(result[locale], path, obj[locale]);
          }
        }
      }
      else
      {
        // Continue traversing
        for (const [key, value] of Object.entries(obj))
        {
          if (value && typeof value === 'object')
          {
            processObject(value, [...path, key]);
          }
        }
      }
    }
  }

  processObject(jsonObject);
  return result;
}

/**
 * Convert SimpleLocalize JSON format back to our nested format with locales at leaf nodes.
 * Handles nested structures under locale keys.
 *
 * Example input:
 * {
 *   "en": {
 *     "foo": {
 *       "name": "Mason"
 *     }
 *   },
 *   "ja": {
 *     "foo": {
 *       "name": "メイソン"
 *     }
 *   }
 * }
 *
 * Example output:
 * {
 *   "foo": {
 *     "name": {
 *       "en": "Mason",
 *       "ja": "メイソン"
 *     }
 *   }
 * }
 */
export function convertFromSimpleLocalizeFormat(jsonObject: Record<string, unknown>): Record<string, unknown>
{
  const result: Record<string, any> = {};

  // Identify locale keys (assuming they're top-level keys like "en", "ja", etc.)
  const localeKeys = Object.keys(jsonObject).filter(key =>
    key === 'en' || key === 'ja' || /^[a-z]{2}(-[A-Z]{2})?$/.test(key)
  );

  // First, traverse the entire structure to find all paths
  const allPaths: string[][] = [];

  function collectPaths(obj: any, path: string[] = [])
  {
    if (obj && typeof obj === 'object' && !Array.isArray(obj))
    {
      for (const [key, value] of Object.entries(obj))
      {
        const currentPath = [...path, key];

        if (value && typeof value === 'object' && !Array.isArray(value))
        {
          // Continue traversing
          collectPaths(value, currentPath);
        }
        else
        {
          // This is a leaf node, record the path
          allPaths.push(currentPath);
        }
      }
    }
  }

  // For each locale, collect paths
  for (const locale of localeKeys)
  {
    if (jsonObject[locale] && typeof jsonObject[locale] === 'object')
    {
      collectPaths(jsonObject[locale], []);
    }
  }

  // Now, for each path, combine the locale values
  for (const path of allPaths)
  {
    // Start with an empty object for this path
    let current = result;
    for (let i = 0; i < path.length - 1; i++)
    {
      const segment = path[i];
      if (!current[segment])
      {
        current[segment] = {};
      }
      current = current[segment];
    }

    // Create the leaf node with locale values
    const leafKey = path[path.length - 1];
    if (!current[leafKey])
    {
      current[leafKey] = {};
    }

    // Add each locale's value
    for (const locale of localeKeys)
    {
      // Follow the path in the locale data
      let localeValue = jsonObject[locale] as any;
      let found = true;

      for (const segment of path)
      {
        if (localeValue && typeof localeValue === 'object' && segment in localeValue)
        {
          localeValue = localeValue[segment];
        }
        else
        {
          found = false;
          break;
        }
      }

      // If we found a value, add it to the result
      if (found && (typeof localeValue === 'string' || typeof localeValue === 'number'))
      {
        current[leafKey][locale] = localeValue;
      }
    }
  }

  return result;
}

/**
 Print help message
 */
function printHelp()
{
  console.log(`@axhxrx/internationalization-format-converter

A tool for converting between TypeScript (*.i18n.ts) localization files and JSON.

USAGE:
  deno run -RWE mod.ts [COMMAND] [OPTIONS]

COMMANDS:
  export <ts_file> <json_file>      Export a *.i18n.ts file to JSON
  import <json_file> <ts_file>      Import translations from JSON to a *.i18n.ts file
  help                              Display this help message

OPTIONS:
  --derive                          When exporting, derive property names from file paths
  --identifier=<name>                  When exporting, use a custom identifier for the root level
  --dry-run, --dryRun               Preview changes without writing files
  --simple-localize, --simpleLocalize   Use SimpleLocalize JSON format with locale keys at root level

EXAMPLES:
  deno run -RWE mod.ts export src/locales/foo.i18n.ts foo.json
  deno run -RWE mod.ts export src/locales/foo.i18n.ts foo.json --derive
  deno run -RWE mod.ts export src/locales/foo.i18n.ts foo.json --identifier=customName
  deno run -RWE mod.ts export src/locales/foo.i18n.ts foo.json --simple-localize
  deno run -RWE mod.ts import foo.json src/locales/foo.i18n.ts
  deno run -RWE mod.ts import foo.json src/locales/foo.i18n.ts --dry-run
  deno run -RWE mod.ts import foo.json src/locales/foo.i18n.ts --simple-localize
`);
}

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
)
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
      console.log(`Successfully exported ${tsFile} to ${jsonFile}`);
      if (options.simpleLocalizeFormat)
      {
        console.log(`Used SimpleLocalize format with locale keys at root level`);
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

/**
 * Import changes from a JSON string to a TypeScript source string.
 * Returns the updated TypeScript code without writing to disk.
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

    const updatedTsCode = await importJSONFileOrThrow.importJSONOrThrow(
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

/**
 * Import changes from a JSON file (that was exported via `exportToJSON()`)
 * to a TypeScript file (in the format defined by `@axhxrx/internationalization`)
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

        console.log(`[DRY RUN] Would import from ${jsonFile} to ${tsFile}`);
        console.log(`[DRY RUN] Changes detected: ${changeCount}`);

        if (changeCount > 0)
        {
          console.log(`[DRY RUN] Changes that would be made:`);
          for (const [path, { left, right }] of Object.entries(differences))
          {
            console.log(`  - ${path}: "${left}" → "${right}"`);
          }
        }
        else
        {
          console.log(`[DRY RUN] No changes would be made`);
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
      console.log(`Successfully imported changes from ${jsonFile} to ${tsFile}`);
      if (options.simpleLocalizeFormat)
      {
        console.log(`Converted from SimpleLocalize format with locale keys at root level`);
      }
    }
  }
  catch (error)
  {
    const err = error instanceof Error ? error : new Error(`${error}`);
    console.error(`Error importing from ${jsonFile}:`, err.message);
    Deno.exit(1);
  }
}

/**
 The `main()` function
 */
export async function main()
{
  const args = parseArgs(Deno.args, {
    boolean: ['derive', 'help', 'dry-run', 'dryRun', 'simple-localize', 'simpleLocalize'],
    string: ['identifier'],
    alias: {
      h: 'help',
      d: 'derive',
      i: 'identifier',
      s: 'simple-localize',
    },
  });

  // Normalize flags
  const dryRun = args['dry-run'] || args.dryRun;
  const simpleLocalizeFormat = args['simple-localize'] || args.simpleLocalize;

  const command = args._[0] as string;

  console.warn('args', args);
  console.warn(process.argv);

  if (args.help || !command || !['export', 'import', 'help'].includes(command))
  {
    printHelp();
    return;
  }

  switch (command)
  {
    case 'help':
      printHelp();
      break;

    case 'export':
    {
      const tsFile = args._[1] as string;
      const jsonFile = args._[2] as string;

      if (!tsFile || !jsonFile)
      {
        console.error('Error: Both TS file and JSON file paths are required for export command');
        printHelp();
        Deno.exit(1);
      }

      await exportToJSONFile(tsFile, jsonFile, {
        derive: args.derive,
        identifier: args.identifier,
        dryRun,
        simpleLocalizeFormat,
      });
      break;
    }

    case 'import':
    {
      const jsonFile = args._[1] as string;
      const tsFile = args._[2] as string;

      if (!jsonFile || !tsFile)
      {
        console.error('Error: Both JSON file and TS file paths are required for import command');
        printHelp();
        Deno.exit(1);
      }

      await importFromJSONFile(jsonFile, tsFile, {
        dryRun,
        simpleLocalizeFormat,
      });
      break;
    }
  }
}

if (import.meta.main)
{
  main();
}
