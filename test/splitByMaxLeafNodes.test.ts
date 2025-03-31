import { assertEquals, assertThrows } from 'jsr:@std/assert';
import { splitByMaxLeafNodesOrThrow } from '../src/util/splitByMaxLeafNodes.ts';

Deno.test('splitByMaxLeafNodesOrThrow with simple object under limit', () =>
{
  const obj = { a: 1, b: 2, c: 3 };
  const result = splitByMaxLeafNodesOrThrow(obj, 5);
  
  assertEquals(result.length, 1);
  assertEquals(result[0], obj);
});

Deno.test('splitByMaxLeafNodesOrThrow splits object exceeding limit', () =>
{
  const obj = {
    section1: { a: 1, b: 2 },
    section2: { c: 3, d: 4 },
    section3: { e: 5, f: 6 }
  };
  
  const result = splitByMaxLeafNodesOrThrow(obj, 3);
  
  assertEquals(result.length, 3);
  // Check that all keys from original object are preserved across result objects
  const allKeys = result.flatMap(obj => Object.keys(obj));
  assertEquals(allKeys.sort(), ['section1', 'section2', 'section3'].sort());
  
  // With maxLeafNodes of 3, each section should be in its own chunk
  // since each has 2 leaf nodes and we're sorting by size
  assertEquals(Object.keys(result[0]).length, 1);
  assertEquals(Object.keys(result[1]).length, 1);
  assertEquals(Object.keys(result[2]).length, 1);
});

Deno.test('splitByMaxLeafNodesOrThrow throws when nested object exceeds limit', () =>
{
  const obj = {
    small: { a: 1 },
    large: { b: 2, c: 3, d: 4, e: 5 }
  };
  
  assertThrows(
    () => splitByMaxLeafNodesOrThrow(obj, 3),
    Error,
    'exceeds the maximum'
  );
});
