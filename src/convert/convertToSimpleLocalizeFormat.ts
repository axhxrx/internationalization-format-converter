// deno-lint-ignore-file no-explicit-any
/**
  Convert JSON with locale keys at leaf nodes to JSON with locale keys at the root level.
  Preserves the nested structure for better organization.

  Example input:
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

  Example output:
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
