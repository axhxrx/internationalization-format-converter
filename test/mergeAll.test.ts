import { assertArrayIncludes, assertEquals } from 'jsr:@std/assert';
import { merge, mergeAll } from '../merge.ts';

Deno.test('mergeAll with empty array', () =>
{
  const result = mergeAll([]);

  if (!result.success)
  {
    throw result.error;
  }

  assertEquals(result.value, {});
});

Deno.test('mergeAll with single object', () =>
{
  const obj = { a: 1, b: 2, c: { hello: 'world' } };
  const result = mergeAll([obj]);

  if (!result.success)
  {
    throw result.error;
  }

  assertEquals(result.value, obj);
});

Deno.test('mergeAll with multiple simple objects', () =>
{
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  const obj3 = { e: 5, f: 6 };

  const result = mergeAll([obj1, obj2, obj3]);

  if (!result.success)
  {
    throw result.error;
  }

  const expected = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
  };

  assertEquals(result.value, expected);
});

Deno.test('mergeAll with nested objects', () =>
{
  const obj1 = {
    level1: {
      a: 1,
      level2: { x: 'original' },
    },
  };
  const obj2 = {
    level1: {
      b: 2,
      level2: { y: 'added' },
    },
  };
  const obj3 = {
    level1: {
      c: 3,
      level2: { z: 'final' },
    },
  };

  const result = mergeAll([obj1, obj2, obj3]);

  if (!result.success)
  {
    throw result.error;
  }

  const expected = {
    level1: {
      a: 1,
      b: 2,
      c: 3,
      level2: {
        x: 'original',
        y: 'added',
        z: 'final',
      },
    },
  };

  assertEquals(result.value, expected);
});

Deno.test('mergeAll with conflicts - error strategy', () =>
{
  const obj1 = { key: 'value1' };
  const obj2 = { key: 'value2' };
  const obj3 = { key: 'value3' };

  const result = mergeAll([obj1, obj2, obj3]);

  if (result.success)
  {
    throw new Error('Expected merge to fail');
  }

  assertEquals(result.path, ['key']);
});

Deno.test('mergeAll with conflicts - prefer last strategy', () =>
{
  const obj1 = { key: 'value1', unchanged: true };
  const obj2 = { key: 'value2' };
  const obj3 = { key: 'value3' };

  const result = mergeAll([obj1, obj2, obj3], 'PREFER_LAST');

  if (!result.success)
  {
    throw result.error;
  }

  assertEquals(result.value.key, 'value3');
  assertEquals(result.value.unchanged, true);
});

Deno.test('mergeAll respects object order', () =>
{
  const obj1 = { a: 1, common: 'first' };
  const obj2 = { b: 2, common: 'second' };
  const obj3 = { c: 3, common: 'third' };

  // Order matters with PREFER_LAST strategy
  const result1 = mergeAll([obj1, obj2, obj3], 'PREFER_LAST');

  if (!result1.success)
  {
    throw result1.error;
  }

  assertEquals(result1.value.common, 'third');

  // Changing order changes the result
  const result2 = mergeAll([obj3, obj2, obj1], 'PREFER_LAST');

  if (!result2.success)
  {
    throw result2.error;
  }

  assertEquals(result2.value.common, 'first');
});

Deno.test('mergeAll with mixed types causing conflicts', () =>
{
  const obj1 = { key: { nested: 'object' } };
  const obj2 = { other: 'property' };
  const obj3 = { key: 'now a string' };

  const result = mergeAll([obj1, obj2, obj3]);

  if (result.success)
  {
    throw new Error('Expected merge to fail');
  }
  assertEquals(result.path, ['key']);

  // With PREFER_LAST it should work
  const result2 = mergeAll([obj1, obj2, obj3], 'PREFER_LAST');

  if (!result2.success)
  {
    throw result2.error;
  }

  assertEquals(result2.value.key, 'now a string');
  assertEquals(result2.value.other, 'property');
});

Deno.test('mergeAll handles arrays like merge does', () =>
{
  const obj1 = { items: [1, 2, 3] };
  const obj2 = { items: [4, 5, 6] };

  // With ERROR strategy, arrays should conflict
  const result1 = mergeAll([obj1, obj2]);

  if (result1.success)
  {
    throw new Error('Expected merge to fail');
  }

  assertEquals(result1.path, ['items']);

  // With PREFER_LAST strategy, last array wins
  const result2 = mergeAll([obj1, obj2], 'PREFER_LAST');

  if (!result2.success)
  {
    throw result2.error;
  }

  assertArrayIncludes(result2.value.items, [4, 5, 6]);
});

Deno.test('mergeAll with identical objects', () =>
{
  const base = {
    primitive: 'string',
    number: 42,
    nested: { prop: true },
    array: [1, 2, 3],
  };

  // Create clones of the base object
  const obj1 = JSON.parse(JSON.stringify(base));
  const obj2 = JSON.parse(JSON.stringify(base));
  const obj3 = JSON.parse(JSON.stringify(base));

  const result = mergeAll([obj1, obj2, obj3]);

  if (!result.success)
  {
    throw result.error;
  }

  assertEquals(result.value, base);

  const result2 = mergeAll([obj1, obj2, obj3], 'PREFER_LAST');

  if (!result2.success)
  {
    throw result2.error;
  }

  assertEquals(result2.value, base);
});

Deno.test('mergeAll is equivalent to sequential merge operations', () =>
{
  const obj1 = { a: 1, shared: { x: 10 } };
  const obj2 = { b: 2, shared: { y: 20 } };
  const obj3 = { c: 3, shared: { z: 30 } };

  // Using mergeAll
  const resultAll = mergeAll([obj1, obj2, obj3]);

  if (!resultAll.success)
  {
    throw resultAll.error;
  }

  const result12 = merge(obj1, obj2);
  if (!result12.success)
  {
    throw result12.error;
  }

  const result123 = merge(result12.value, obj3);
  if (!result123.success)
  {
    throw result123.error;
  }

  // Both approaches should yield identical results
  assertEquals(resultAll.value, result123.value);
});
