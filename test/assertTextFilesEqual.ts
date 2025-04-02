import { assertEquals } from '@std/assert';

/**
 Test util fn assets text contents of two files are equal.
 If the files contain JSON (determined by file extension), the comparison will be order-agnostic.
 */
export async function assertTextFilesEqual(path1: string, path2: string)
{
  const rp1 = await Deno.realPath(path1);
  const rp2 = await Deno.realPath(path2);
  const content1 = await Deno.readTextFile(rp1);
  const content2 = await Deno.readTextFile(rp2);

  // Check if the files are JSON by looking at the file extension
  const isJson1 = path1.toLowerCase().endsWith('.json');
  const isJson2 = path2.toLowerCase().endsWith('.json');

  // If both files are JSON, do an order-agnostic comparison
  if (isJson1 && isJson2)
  {
    try
    {
      const json1 = JSON.parse(content1);
      const json2 = JSON.parse(content2);
      
      // Use assertEquals with a sorted stringification to make order-agnostic comparison
      const sortedJson1 = JSON.stringify(sortObjectDeep(json1), null, 2);
      const sortedJson2 = JSON.stringify(sortObjectDeep(json2), null, 2);
      
      assertEquals(sortedJson1, sortedJson2, `JSON files are not semantically equal: ${path1} and ${path2} (${rp1} and ${rp2})`);
    }
    catch (error: unknown)
    {
      // If parsing fails, fall back to direct text comparison
      const errorMessage = error instanceof Error ? error.message : String(error);
      assertEquals(content1, content2, `Files are not equal (JSON parsing failed): ${path1} and ${path2} (${rp1} and ${rp2}): ${errorMessage}`);
    }
  }
  else
  {
    // For non-JSON files, do a direct text comparison
    assertEquals(content1, content2, `Files are not equal: ${path1} and ${path2} (${rp1} and ${rp2})`);
  }
}

/**
 Recursively sort an object's keys to ensure consistent JSON output regardless of property order.
 */
function sortObjectDeep(obj: unknown): unknown
{
  // Handle non-objects
  if (obj === null || typeof obj !== 'object')
  {
    return obj;
  }
  
  // Handle arrays - recursively sort each element
  if (Array.isArray(obj))
  {
    return obj.map(sortObjectDeep);
  }
  
  // For objects, create a new object with sorted keys
  const sortedObj: Record<string, unknown> = {};
  const sortedKeys = Object.keys(obj).sort();
  
  for (const key of sortedKeys)
  {
    sortedObj[key] = sortObjectDeep((obj as Record<string, unknown>)[key]);
  }
  
  return sortedObj;
}
