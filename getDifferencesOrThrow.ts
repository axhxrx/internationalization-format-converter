// deno-lint-ignore-file no-explicit-any
import type { DiffResult } from './DiffResult.ts';
import { loadLocalizationFileContents } from './loadLocalizationFromFile.ts';
import { stripImports } from './stripImports.ts';

type LocaleRecord = Record<string, string>;

type NestedObject = {
  [key: string]: NestedObject | LocaleRecord;
};

function isLocaleRecord(obj: any): obj is LocaleRecord
{
  return (
    obj
    && typeof obj === 'object'
    && Object.values(obj).every(value => typeof value === 'string')
  );
}

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

 @param jsonObj — a p
 @param tsSourceFile
 @returns
 */
export const getDifferencesOrThrow = async (
  jsonObj: any,
  tsSourceCode: string,
): Promise<DiffResult> =>
{
  console.log('jsonObj!!!', typeof jsonObj, jsonObj);
  console.log('tsSourceCode!!!', typeof tsSourceCode, tsSourceCode);

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
      console.log('obj1:', typeof obj1, obj1);
      console.log('obj2:', typeof obj2, obj2);
      console.log('path:', path);
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

  const obj1 = jsonObj;
  const obj2 = (await loadLocalizationFileContents(tsSourceCodeWithImportsStripped)).module;

  // console.log('obj1:', obj1);
  // console.log('obj2:', obj2);

  const result = compare(obj2, obj1, '');

  return result;
};
