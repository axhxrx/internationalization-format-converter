import { importFromJSON } from './importFromJSON.ts';

/**
 Import changes from a JSON object whose top-level keys are paths (to the corresponding TypeScript files) and values are JSON objects containing any new values to import. Specify `dryRun: true` to return the result without without writing to disk.

 @param jsonPathMap

 @param param1
 */
export async function importFromJSONPathMap(jsonPathMap: Record<string, Record<string, unknown>>, {
  dryRun,
  simpleLocalizeFormat,
}: {
  dryRun?: boolean;
  simpleLocalizeFormat?: boolean;
} = {})
{
  const result = {
    tsPathMap: {} as Record<string, string>,
  };
  for (const [jsonPath, jsonObject] of Object.entries(jsonPathMap))
  {
    const fullPath = await Deno.realPath(jsonPath);
    const tsCode = await Deno.readTextFile(fullPath);
    const updatedTsCode = await importFromJSON(JSON.stringify(jsonObject), tsCode, {
      simpleLocalizeFormat,
    });

    // Use the path specified by the caller, not the realPath, so that callers can use relative paths:
    result.tsPathMap[jsonPath] = updatedTsCode;
  }

  if (dryRun)
  {
    console.log(`[DRY RUN] Would import changes to the following files:`);
    for (const [tsPath, _updatedCode] of Object.entries(result.tsPathMap))
    {
      console.log(`  - ${tsPath}`);
    }
  }
  else
  {
    for (const [tsPath, updatedCode] of Object.entries(result.tsPathMap))
    {
      await Deno.writeTextFile(tsPath, updatedCode);
    }
  }

  return result;
}
