import { countLeafNodes } from './countLeafNodes.ts';

type NestedStringRecord = {
  [key: string]: string | NestedStringRecord;
};
export function copyWithMaxLeafNodeCount(jsonObj: Record<string, NestedStringRecord>,
  maxLeafNodes: number): NestedStringRecord
{
  const entries = Object.entries(jsonObj);
  let count = 0;
  const result: NestedStringRecord = {};

  for (const [key, value] of entries)
  {
    const nextTopLevelObject = value;
    if (typeof nextTopLevelObject !== 'object')
    {
      throw new Error(`copyWithMaxLeafNodeCount(): Expected object, got ${typeof nextTopLevelObject}`);
    }
    const additionalLeafNodes = countLeafNodes(nextTopLevelObject);
    if (count + additionalLeafNodes <= maxLeafNodes)
    {
      result[key] = nextTopLevelObject;
      count += additionalLeafNodes;
      console.log(`Added ${key} with ${additionalLeafNodes} leaf nodes, total is ${count}`);
    }
    else
    {
      break;
    }
  }
  return result;
}
