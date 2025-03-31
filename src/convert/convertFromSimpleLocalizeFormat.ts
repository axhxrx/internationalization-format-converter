/**
 Convert SimpleLocalize JSON format back to our default nested format with locales at leaf nodes.
 Handles nested structures under locale keys.

 Example input:
 ```json
 {
   "en": {
     "foo": {
       "name": "Mason"
     }
   },
   "ja": {
     "foo": {
       "name": "メイソン"
     }
   }
 }
 ```

 Example output:
 ```json
 {
   "foo": {
     "name": {
       "en": "Mason",
       "ja": "メイソン"
     }
   }
 }
 ```
 */
export function convertFromSimpleLocalizeFormat(
  jsonObject: Record<string, unknown>,
): Record<string, unknown>
{
  const result: Record<string, any> = {};

  // Identify locale keys (assuming they're top-level keys like "en", "ja", etc.)
  const localeKeys = Object.keys(jsonObject).filter(key =>
    key === 'en' || key === 'ja' || /^[a-z]{2}(-[A-Z]{2})?$/.test(key)
  );

  // First, traverse the entire structure to find all paths
  const allPaths: string[][] = [];

  // deno-lint-ignore no-explicit-any
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
