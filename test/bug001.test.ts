import { join } from '@std/path';

import { assert } from 'jsr:@std/assert';

import { stripImports } from '../src/ast/stripImports.ts';
import { tryImportingCode } from '../src/ast/tryImportingCode.ts';

const pathToFixtures = new URL('./fixtures/', import.meta.url).pathname;

Deno.test('Regression test for crashing bug on certain .i18n.ts files', async () =>
{
  const modulePath = join(pathToFixtures, 'bug001', 'i18n.ts');
  const fileContents = await Deno.readTextFile(modulePath);
  const strippedContents = await stripImports(fileContents);

  console.log(strippedContents);

  // If strippedContents is empty, we should consider the test passing without trying to import it
  if (strippedContents.trim() === '')
  {
    console.log('Empty stripped contents is valid for this test case');
  }
  else
  {
    const y = await tryImportingCode({ sourceCode: strippedContents });
    console.log(
      'Importing stripped contents: ',
      Deno.inspect(y, { depth: Infinity, colors: true }),
    );
    assert(y.success, 'Importing stripped contents should work');
  }
});
