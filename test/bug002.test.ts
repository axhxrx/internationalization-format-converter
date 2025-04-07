import { join } from '@std/path';

import { assert } from '@std/assert';

import { stripImports } from '../src/ast/stripImports.ts';
import { tryImportingCode } from '../src/ast/tryImportingCode.ts';

const pathToFixtures = new URL('./fixtures/', import.meta.url).pathname;

Deno.test('Regression test for crashing bug on certain .i18n.ts files', async () =>
{
  // This test used to fail because our export generated invalid code like:
  //   export const userConsoleMasterTranslations = {
  //   ...ActivateLagoonV2ModalComponentTranslations,
  //   ...AddShplagoonUserModalComponentTranslations,
  //   ...AddQuoraletModalComponentTranslations,
  //   ...AlertTranslations,
  //   ...CancelTransferSimOperatorComponentTranslations,
  //   // TONS MORE LINES LIKE THIS
  //   ...legacyTranslations,
  // };

  // But the imports are removed so the file is invalid. (We don't want the exports either, they are just a more complex form of the "import something and export it" pattern that we already strip out.)

  const modulePath = join(pathToFixtures, 'collection', 'libs', 'i18n', 'component', 'user-console', 'src', 'lib',
    'user-console-master-translations.i18n.ts');

  try
  {
    // First try the normal way to load the file - this will probably fail
    const fileContents = await Deno.readTextFile(modulePath);
    const strippedContents = await stripImports(fileContents);

    // console.log('Stripped contents:',
    //   strippedContents.length > 100 ? strippedContents.slice(0, 100) + '...' : strippedContents);

    // If strippedContents is empty, we should consider the test passing
    if (strippedContents.trim() === '')
    {
      // console.log('Empty stripped contents is valid for this test case');
    }
    else
    {
      const y = await tryImportingCode({ sourceCode: strippedContents });
      // console.log(
      //   'Successfully imported stripped contents: ',
      //   Deno.inspect(y, { depth: Infinity, colors: true }),
      // );
      assert(y.success, 'Importing stripped contents should work');
    }
  }
  catch (error)
  {
    console.error('Error:', error);
    assert(false, 'Should not throw an error');
  }
});
