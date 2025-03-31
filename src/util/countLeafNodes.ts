/**
 Counts the number of leaf nodes in a JSON object.
 Leaf nodes are terminal values that aren't objects or arrays.

 @param jsonObject - The JSON object to count leaf nodes in
 @returns The total number of leaf nodes
 */
export const countLeafNodes = (jsonObject: Record<string, unknown>) =>
{
  let count = 0;

  // Recursive function to traverse the JSON structure
  const traverse = (obj: unknown): void =>
  {
    if (obj === null || typeof obj !== 'object')
    {
      count++;
      return;
    }

    if (Array.isArray(obj))
    {
      if (obj.length === 0)
      {
        count++; // Empty array counts as a leaf
      }
      else
      {
        for (const item of obj)
        {
          traverse(item);
        }
      }
    }
    else
    {
      const entries = Object.entries(obj);
      if (entries.length === 0)
      {
        count++; // Empty object counts as a leaf
      }
      else
      {
        for (const [_, value] of entries)
        {
          traverse(value);
        }
      }
    }
  };

  traverse(jsonObject);
  return count;
};
