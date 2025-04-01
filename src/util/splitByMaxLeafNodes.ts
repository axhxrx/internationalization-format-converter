import { countLeafNodes } from './countLeafNodes.ts';

/**
 Takes an object and returns an array of one or more objects, which contain
 the same set of top-level keys as `jsonObject`, but with a total of no more
 than `maxLeafNodes` leaf nodes in the entire object.

 It does not split the nested objects up, it just splits the top-level keys.
 If a nested object has more than `maxLeafNodes` leaf nodes, it throws an error.

 This method returns as many objects as necessary to ensure that no object
 exceeds the `maxLeafNodes` limit.

 @param jsonObject - The JSON object to split
 @param maxLeafNodes - The maximum number of leaf nodes allowed in each result object
 @returns An array of objects, each with no more than maxLeafNodes leaf nodes
 */
export const splitByMaxLeafNodesOrThrow = (
  jsonObject: Record<string, unknown>,
  maxLeafNodes: number,
): Array<Record<string, unknown>> =>
{
  // Get all entries from the input object
  const entries = Object.entries(jsonObject);

  // Maps to track leaf count for each key
  const leafCountByKey: Record<string, number> = {};

  // Check if any individual nested object exceeds maxLeafNodes
  for (const [key, value] of entries)
  {
    const count = countLeafNodes({ [key]: value });
    leafCountByKey[key] = count;

    if (count > maxLeafNodes)
    {
      throw new Error(
        `The nested object at key "${key}" has ${count} leaf nodes, which exceeds the maximum of ${maxLeafNodes}`,
      );
    }
  }

  // Sort entries by leaf count (descending) to optimize chunking
  const sortedEntries = [...entries].sort((a, b) => leafCountByKey[b[0]] - leafCountByKey[a[0]]);

  const results: Array<Record<string, unknown>> = [];
  let currentChunk: Record<string, unknown> = {};
  let currentLeafCount = 0;

  // Process each entry, adding to chunks
  for (const [key, value] of sortedEntries)
  {
    const leafCount = leafCountByKey[key];

    // If adding this key would exceed the max, start a new chunk
    if (currentLeafCount + leafCount > maxLeafNodes && currentLeafCount > 0)
    {
      results.push(currentChunk);
      currentChunk = {};
      currentLeafCount = 0;
    }

    // Add the key to the current chunk
    currentChunk[key] = value;
    currentLeafCount += leafCount;
  }

  // Add the final chunk if it has entries
  if (Object.keys(currentChunk).length > 0)
  {
    results.push(currentChunk);
  }

  return results;
};
