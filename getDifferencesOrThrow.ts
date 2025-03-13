// deno-lint-ignore-file no-explicit-any
import type { DiffResult } from './DiffResult.ts';
import { loadLocalizationFileContentsOrThrow } from './loadLocalizationFromFile.ts';
import { stripImports } from './stripImports.ts';

/**
 A simplified type to substitute for the `LocalizedUnit` provided by [`@axhxrx/internationalization`](https://jsr.io/@axhxrx/internationalization). Since there is no way for us to know the `Locales` generic type actually used, we just use our own similarly-shaped (but less-specific) type.
 */
type LocaleRecord = Record<string, string>;

/**
 A recursive type to represent nested objects, similar to [`Localization`](https://jsr.io/@axhxrx/internationalization/0.0.8/Localization.ts).
 */
type NestedObject = {
  [key: string]: NestedObject | LocaleRecord;
};

/**
 A cheap heuristic to fuzzy-check if `obj` appears to be a `LocaleRecord`.
 */
function isLocaleRecord(obj: any): obj is LocaleRecord
{
  return (
    obj
    && typeof obj === 'object'
    && Object.values(obj).every(value => typeof value === 'string')
  );
}

/**
 Primitive object diff method.
 */
function diffObjects(
  obj1: NestedObject,
  obj2: NestedObject,
): DiffResult
{
  const result: DiffResult = {};

  function traverse(o1: any, o2: any, path: string[] = [])
  {
    const keys = new Set([
      ...Object.keys(o1 || {}),
      ...Object.keys(o2 || {}),
    ]);

    for (const key of keys)
    {
      const val1 = o1 ? o1[key] : undefined;
      const val2 = o2 ? o2[key] : undefined;
      const currentPath = [...path, key];

      if (isLocaleRecord(val1) && isLocaleRecord(val2))
      {
        // Both are leaf nodes (LocaleRecord), compare each locale
        const locales = new Set([
          ...Object.keys(val1),
          ...Object.keys(val2),
        ]);
        for (const locale of locales)
        {
          const localeVal1 = val1[locale];
          const localeVal2 = val2[locale];
          if (localeVal1 !== localeVal2)
          {
            const fullPath = currentPath.join('.') + '.' + locale;
            result[fullPath] = {
              left: localeVal1,
              right: localeVal2,
            };
          }
        }
      }
      else if (isLocaleRecord(val1))
      {
        // val1 is leaf, val2 is not, or undefined
        for (const locale of Object.keys(val1))
        {
          const fullPath = currentPath.join('.') + '.' + locale;
          result[fullPath] = {
            left: val1[locale],
            right: undefined,
          };
        }
      }
      else if (isLocaleRecord(val2))
      {
        // val2 is leaf, val1 is not, or undefined
        for (const locale of Object.keys(val2))
        {
          const fullPath = currentPath.join('.') + '.' + locale;
          result[fullPath] = {
            left: undefined,
            right: val2[locale],
          };
        }
      }
      else if (typeof val1 === 'object' || typeof val2 === 'object')
      {
        // Both are objects, or one is undefined
        traverse(val1 || {}, val2 || {}, currentPath);
      }
      else
      {
        // Values are different
        const fullPath = currentPath.join('.');
        if (val1 !== val2)
        {
          result[fullPath] = {
            left: val1,
            right: val2,
          };
        }
      }
    }
  }

  traverse(obj1, obj2);
  return result;
}

/**
 Return a `Differences` object (array of difference descriptors) which indicates which values of jsonObj that are different in tsSourceFile.

 @param jsonObj — a JSON object, which should be the result of exporting a TypeScript-format localization to JSON using this library — if it is not, then this method will throw an error
 @param tsSourceFile — the source code of a TypeScript-format localization file, which should be the one used to produce the original JSON upon which `jsonObj` is based (although the two files may have diverged)
 */
export const getDifferencesOrThrow = async (
  jsonObj: any,
  tsSourceCode: string,
  removePathKey = false,
): Promise<DiffResult> =>
{
  console.log('jsonObj', jsonObj);

  function compare(obj1: any, obj2: any, path: string)
  {
    if (obj1 === obj2)
    {
      throw new Error(
        `getDifferencesOrThrow(): Error: Invalid input: Compared objects may not be identical references.`,
      );
    }

    if (typeof obj1 !== typeof obj2)
    {
      console.error('getDifferencesOrThrow(): obj1:', typeof obj1, obj1);
      console.error('getDifferencesOrThrow(): obj2:', typeof obj2, obj2);
      console.error('getDifferencesOrThrow(): path:', path);
      throw new Error(`getDifferencesOrThrow(): Error: Invalid input: Type mismatch at ${path}`);
    }

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object')
    {
      throw new Error(
        `getDifferencesOrThrow(): Error: Invalid input: Compared objects must be typeof "object" ${path}: got types: ${typeof obj1} and ${typeof obj2}`,
      );
    }

    const differences = diffObjects(obj1, obj2);
    return differences;
  }

  const tsSourceCodeWithImportsStripped = await stripImports(tsSourceCode);

  let objFromJSON = jsonObj;
  const objFromTypeScript = (await loadLocalizationFileContentsOrThrow(tsSourceCodeWithImportsStripped)).module;

  if (removePathKey)
  {
    // Remove the top-level key, which is the path to the file, and log it
    const pathKey = Object.keys(objFromJSON)[0];
    objFromJSON = objFromJSON[pathKey];
  }

  const result = compare(objFromTypeScript, objFromJSON, '');

  return result;
};
