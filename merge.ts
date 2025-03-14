import { assertNever } from '@axhxrx/assert-never';
import { equal } from 'jsr:@std/assert';

type DeepMerge<T, U> = T extends object ? U extends object ? {
      [K in keyof T | keyof U]: K extends keyof U ? U[K] extends object ? K extends keyof T ? DeepMerge<T[K], U[K]>
          : U[K]
        : U[K]
        : K extends keyof T ? T[K]
        : never;
    }
  : T
  : U;

type MergeResult<T, U> =
  | { success: true; value: DeepMerge<T, U> }
  | { success: false; error: string; path: string[] };

/**
 Strategy to use when encountering conflicting values
 */
export type MergeStrategy =

  /**
   * Fail with an error when conflicting values are found
   */
  | 'ERROR'
  /**
   * Use the value from the second/last object when conflicts occur
   */
  | 'PREFER_LAST';

/**
 Deeply merges two objects with configurable conflict resolution
 @param a First object
 @param b Second object
 @param strategy How to handle conflicting values (default: error)
 @param currentPath Used internally for tracking object path during recursion
 */
export function merge<T extends Record<string, unknown>, U extends Record<string, unknown>>(
  a: T,
  b: U,
  strategy: MergeStrategy = 'ERROR',
  currentPath: string[] = [],
): MergeResult<T, U>
{
  const result = { ...a } as Record<string, unknown>;

  for (const [key, bValue] of Object.entries(b))
  {
    const path = [...currentPath, key];
    const pathStr = path.join('.');

    // If key doesn't exist in result, just add it
    if (!(key in result))
    {
      result[key] = bValue;
      continue;
    }

    const aValue = result[key];

    // Both values are objects - merge them recursively
    if (isObject(aValue) && isObject(bValue))
    {
      const mergedValue = merge(
        aValue as Record<string, unknown>,
        bValue as Record<string, unknown>,
        strategy,
        path,
      );

      // Handle potential error result from recursive merge
      if (!mergedValue.success)
      {
        return mergedValue as MergeResult<T, U>;
      }

      result[key] = mergedValue.value;
      continue;
    }

    // Values conflict - they have same key but different types or non-object values
    if (!equal(aValue, bValue))
    {
      switch (strategy)
      {
        case 'ERROR':
        {
          const error = `Conflict at path '${pathStr}': cannot merge ${typeof aValue} with ${typeof bValue}`;
          return {
            success: false,
            error,
            path,
          } as MergeResult<T, U>;
        }

        case 'PREFER_LAST':
        {
          // Use the value from the second object
          result[key] = bValue;
          break;
        }

        default:
        {
          assertNever(strategy);
        }
      }
    }
  }

  return { success: true, value: result as DeepMerge<T, U> };
}

/**
 Type guard to check if a value is a plain object
 */
function isObject(value: unknown): value is Record<string, unknown>
{
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Utility type that converts a union type to an intersection type
 */
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

/**
 Type representing the deep merged result of multiple objects.
 */
type DeepMergeMultiple<T extends unknown[]> = T extends [] ? {}
  : T extends [infer First] ? First
  : T extends [infer First, infer Second, ...infer Rest] ? DeepMergeMultiple<[DeepMerge<First, Second>, ...Rest]>
  : never;

/**
 * Deeply merges multiple objects with configurable conflict resolution
 * @param objects Array of objects to merge
 * @param strategy How to handle conflicting values (default: error)
 */
export function mergeAll<T extends Record<string, unknown>[]>(
  objects: [...T],
  strategy: MergeStrategy = 'ERROR',
): MergeResult<{}, DeepMergeMultiple<T>>
{
  if (objects.length === 0)
  {
    // Return an empty object if no objects provided
    return { success: true, value: {} } as MergeResult<{}, DeepMergeMultiple<T>>;
  }

  if (objects.length === 1)
  {
    // Return the single object if only one provided
    return { success: true, value: objects[0] } as MergeResult<{}, DeepMergeMultiple<T>>;
  }

  // Start with the first object and merge the rest into it
  let accumulator = objects[0];

  for (let i = 1; i < objects.length; i++)
  {
    const result = merge(accumulator, objects[i], strategy);
    if (!result.success)
    {
      return result as MergeResult<{}, DeepMergeMultiple<T>>;
    }
    accumulator = result.value as Record<string, unknown>;
  }

  return { success: true, value: accumulator } as MergeResult<{}, DeepMergeMultiple<T>>;
}
