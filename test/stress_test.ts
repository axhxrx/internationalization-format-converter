import { assertEquals } from 'jsr:@std/assert';
import { walk } from 'jsr:@std/fs';
import { join } from 'jsr:@std/path';

import { loadLocalizationFromFileOrThrow } from '../src/ast/loadLocalizationFromFile.ts';
const pathToFixtures = new URL('./fixtures/', import.meta.url).pathname;
const pathToCollection = join(pathToFixtures, 'collection');

Deno.test('Stress test on real-world files', async () =>
{
  const jsonOutputs = [];
  const errPaths: string[] = [];
  const errors: unknown[] = [];

  // Use walk from @std/fs to recursively iterate through all files in the directory
  for await (const entry of walk(pathToCollection))
  {
    if (entry.isFile && entry.name.endsWith('.i18n.ts'))
    {
      try
      {
        const modulePath = entry.path;
        const fileContents = await Deno.readTextFile(modulePath);
        const x = await loadLocalizationFromFileOrThrow(modulePath);
        const j = JSON.stringify(x.module, null, 2);
        jsonOutputs.push(j);
        // console.log(j);
        // console.log('---');
      }
      catch (error)
      {
        console.error(entry.name, error);
        errPaths.push(entry.name);
        errors.push(error);
        throw error;
      }
    }
  }

  console.log('errPaths', errPaths);
  // console.log('Errors:', errors);

  // Assert the expected number of files
  console.log(`Found ${jsonOutputs.length} .i18n.ts files`);
  assertEquals(jsonOutputs.length, 314);
});
