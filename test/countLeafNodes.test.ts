import { assertEquals } from 'jsr:@std/assert';
import { countLeafNodes } from '../src/util/countLeafNodes.ts';

Deno.test('countLeafNodes with empty object', () =>
{
  const result = countLeafNodes({});
  assertEquals(result, 1); // Empty object counts as a leaf
});

Deno.test('countLeafNodes with simple object', () =>
{
  const obj = { a: 1, b: 2, c: 3 };
  const result = countLeafNodes(obj);
  assertEquals(result, 3); // Three leaf nodes (1, 2, 3)
});

Deno.test('countLeafNodes with nested objects', () =>
{
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: 3,
    },
    e: 4,
  };
  const result = countLeafNodes(obj);
  assertEquals(result, 4); // Four leaf nodes (1, 2, 3, 4)
});

Deno.test('countLeafNodes with arrays', () =>
{
  const obj = {
    a: [1, 2, 3],
    b: 4,
  };
  const result = countLeafNodes(obj);
  assertEquals(result, 4); // Four leaf nodes (1, 2, 3, 4)
});

Deno.test('countLeafNodes with empty arrays', () =>
{
  const obj = {
    a: [],
    b: 1,
  };
  const result = countLeafNodes(obj);
  assertEquals(result, 2); // Two leaf nodes (empty array, 1)
});

Deno.test('countLeafNodes with mixed nested structures', () =>
{
  const obj = {
    a: 1,
    b: [2, { c: 3 }],
    d: {
      e: 4,
      f: [],
    },
  };
  const result = countLeafNodes(obj);
  assertEquals(result, 5); // Five leaf nodes (1, 2, 3, 4, empty array)
});
