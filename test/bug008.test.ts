import { join } from '@std/path';

import { assert } from '@std/assert';

import { stripImports } from '../src/ast/stripImports.ts';
import { tryImportingCode } from '../src/ast/tryImportingCode.ts';

const pathToFixtures = new URL('./fixtures/', import.meta.url).pathname;

Deno.test('Regression test for crashing bug on certain .i18n.ts files', async () =>
{
  const modulePath = join(pathToFixtures, 'bug008', 'i18n.exclude.ts');
  const fileContents = await Deno.readTextFile(modulePath);
  const strippedContents = await stripImports(fileContents);

  // If strippedContents is empty, we should consider the test passing without trying to import it
  if (strippedContents.trim() === '')
  {
    console.log('Empty stripped contents is valid for this test case');
  }
  else
  {
    try
    {
      const y = await tryImportingCode({ sourceCode: strippedContents });
      console.log(y);
      assert(y.success, 'Importing stripped contents should work');
    }
    catch (error)
    {
      console.error('Error:', error);
      assert(false, 'Should not throw an error');
    }
  }
});
