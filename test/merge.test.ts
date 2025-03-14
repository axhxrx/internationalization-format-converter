import { assertArrayIncludes, assertEquals } from 'jsr:@std/assert';
import { merge } from '../merge.ts';

Deno.test('merge simple case', () =>
{
  const uno = { a: 1, b: 2, c: { hello: 'this is from uno' } };
  const dos = { c: { somethingElse: 'this is from dos' }, d: 4 };

  const merged = merge(uno, dos);
  if (!merged.success)
  {
    throw merged.error;
  }
  else
  {
    const expected = {
      a: 1,
      b: 2,
      c: {
        hello: 'this is from uno',
        somethingElse: 'this is from dos',
      },
      d: 4,
    };
    assertEquals(merged.value, expected);
  }
});

Deno.test('merge with empty objects', () =>
{
  const emptyObj = {};
  const obj = { a: 1, b: 2 };

  // Empty first object
  const mergeResult1 = merge(emptyObj, obj);

  if (!mergeResult1.success)
  {
    throw mergeResult1.error;
  }

  assertEquals(mergeResult1.value, obj);

  // Empty second object
  const mergeResult2 = merge(obj, emptyObj);

  if (!mergeResult2.success)
  {
    throw mergeResult2.error;
  }

  assertEquals(mergeResult2.value, obj);

  // Both empty
  const mergeResult3 = merge(emptyObj, emptyObj);

  if (!mergeResult3.success)
  {
    throw mergeResult3.error;
  }

  assertEquals(mergeResult3.value, {});
});

Deno.test('merge with deep nesting', () =>
{
  const a = {
    level1: {
      level2: {
        level3: {
          a: 1,
          b: 2,
        },
        sibling: 'hello',
      },
    },
    topLevel: true,
  };

  const b = {
    level1: {
      level2: {
        level3: {
          c: 3,
          d: 4,
        },
        newSibling: 'world',
      },
      newLevel2Prop: 'added',
    },
  };

  const expected = {
    level1: {
      level2: {
        level3: {
          a: 1,
          b: 2,
          c: 3,
          d: 4,
        },
        sibling: 'hello',
        newSibling: 'world',
      },
      newLevel2Prop: 'added',
    },
    topLevel: true,
  };

  const mergeResult = merge(a, b);

  if (!mergeResult.success)
  {
    throw mergeResult.error;
  }

  assertEquals(mergeResult.value, expected);
});

Deno.test('merge with primitive value conflict - error strategy', () =>
{
  const a = { key: 'value from a' };
  const b = { key: 'value from b' };

  const mergeResult = merge(a, b);

  if (mergeResult.success)
  {
    throw new Error('Expected merge to fail');
  }

  assertEquals(mergeResult.path, ['key']);
  // Check that error message contains the conflict information
  const errorContainsTypesInfo = mergeResult.error.includes('string')
    && mergeResult.error.includes("path 'key'");
  assertEquals(errorContainsTypesInfo, true);
});

Deno.test('merge with primitive value conflict - prefer second strategy', () =>
{
  const a = { key: 'value from a' };
  const b = { key: 'value from b' };

  const mergeResult = merge(a, b, 'PREFER_LAST');

  if (!mergeResult.success)
  {
    throw mergeResult.error;
  }

  assertEquals(mergeResult.value, b);
});

Deno.test('merge with type conflict - error strategy', () =>
{
  const a = { key: { nested: 'object' } };
  const b = { key: 'primitive string' };

  const mergeResult = merge(a, b);

  if (mergeResult.success)
  {
    throw new Error('Expected merge to fail');
  }

  assertEquals(mergeResult.path, ['key']);
  // Check that error message contains the correct type information
  const errorContainsTypesInfo = mergeResult.error.includes('object')
    && mergeResult.error.includes('string');
  assertEquals(errorContainsTypesInfo, true);
});

Deno.test('merge with type conflict - prefer second strategy', () =>
{
  const a = { key: { nested: 'object' } };
  const b = { key: 'primitive string' };

  const mergeResult = merge(a, b, 'PREFER_LAST');

  if (!mergeResult.success)
  {
    throw mergeResult.error;
  }

  assertEquals(mergeResult.value, b);
});

Deno.test('merge with deep conflict - error strategy', () =>
{
  const a = {
    level1: {
      level2: {
        conflict: 42,
      },
    },
  };

  const b = {
    level1: {
      level2: {
        conflict: 'string',
      },
    },
  };

  const mergeResult = merge(a, b);

  if (mergeResult.success)
  {
    throw new Error('Expected merge to fail');
  }

  assertEquals(mergeResult.path, ['level1', 'level2', 'conflict']);

  // Check that error message contains the path and type information
  const errorHasPath = mergeResult.error.includes('level1.level2.conflict');
  const errorHasTypes = mergeResult.error.includes('number')
    && mergeResult.error.includes('string');
  assertEquals(errorHasPath, true);
  assertEquals(errorHasTypes, true);
});

Deno.test('merge with arrays', () =>
{
  // Note: Arrays are not deeply merged by default
  const a = {
    items: [1, 2, 3],
    mixed: { array: [1, 2, 3] },
  };

  const b = {
    items: [4, 5, 6],
    mixed: { other: 'property' },
  };

  // With error strategy, arrays should conflict
  const mergeResult1 = merge(a, b);

  if (mergeResult1.success)
  {
    throw new Error('Expected merge to fail');
  }

  assertEquals(mergeResult1.path, ['items']);

  // With prefer second strategy, b's array should win
  const mergeResult2 = merge(a, b, 'PREFER_LAST');

  if (!mergeResult2.success)
  {
    throw mergeResult2.error;
  }

  assertArrayIncludes(mergeResult2.value.items, [4, 5, 6]);
  assertArrayIncludes(mergeResult2.value.mixed.array, [1, 2, 3]);
  assertEquals(mergeResult2.value.mixed.other, 'property');
});

Deno.test('merge with null values', () =>
{
  const a = {
    nullValue: null,
    notNull: 'value',
  };

  const b = {
    nullValue: { nowAnObject: true },
    notNull: null,
  };

  // With error strategy, should detect conflicts
  const mergeResult1 = merge(a, b);
  assertEquals(mergeResult1.success, false);

  // With prefer second strategy, b's values should win
  const mergeResult2 = merge(a, b, 'PREFER_LAST');

  if (!mergeResult2.success)
  {
    throw mergeResult2.error;
  }

  assertEquals(mergeResult2.value.nullValue, { nowAnObject: true });
  assertEquals(mergeResult2.value.notNull, null);
});

Deno.test('merge identical objects', () =>
{
  const a = {
    primitive: 'string',
    number: 42,
    nested: { prop: true },
    array: [1, 2, 3],
  };

  // Clone a
  const b = JSON.parse(JSON.stringify(a));

  const mergeResult = merge(a, b);

  if (!mergeResult.success)
  {
    throw mergeResult.error;
  }

  assertEquals(mergeResult.value, a);
});

Deno.test('merge with circular references handling', () =>
{
  // This test verifies that the merge function doesn't get stuck in
  // an infinite loop due to circular references

  const a: Record<string, unknown> = { name: 'a' };
  const b: Record<string, unknown> = { name: 'b' };

  // Create circular references
  a.self = a;
  b.self = b;

  try
  {
    const mergeResult = merge(a, b);
    // If we don't handle circular refs, this test will timeout
    // If we handle properly, we should get a conflict error
    assertEquals(mergeResult.success, false);
  }
  catch (error: unknown)
  {
    // Maximum call stack size exceeded would indicate we have an issue
    // with handling circular references
    assertEquals((error as Error).toString().includes('call stack'), false);
  }
});
