import { assertEquals } from '@std/assert';

/**
 Test util fn assets text contents of two files are equal
 */
export async function assertTextFilesEqual(path1: string, path2: string)
{
  const rp1 = await Deno.realPath(path1);
  const rp2 = await Deno.realPath(path2);
  const content1 = await Deno.readTextFile(rp1);
  const content2 = await Deno.readTextFile(rp2);

  if (content1 !== content2)
  {
    // throw new Error(`Files are not equal: ${path1} and ${path2} (${rp1} and ${rp2})`);
    assertEquals(content1, content2, `Files are not equal: ${path1} and ${path2} (${rp1} and ${rp2})`);
  }
}
