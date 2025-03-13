import { join } from '@std/path';

import { assertEquals } from '@std/assert/equals';
import { loadLocalizationFileContentsOrThrow, loadLocalizationFromFileOrThrow } from '../loadLocalizationFromFile.ts';
import { exportToJSONFile, importFromJSONFile } from '../main.ts';

const pathToFixtures = new URL('./fixtures/', import.meta.url).pathname;

Deno.test('Regression test for in-editor test running (vs unstable-sloppy-imports', async () =>
{
  // deno run --unstable-sloppy-imports -A mod.ts export --derive --simple-localize test/fixtures/insane-file-extensionless-import.ts exported.json

  // edit exported.json

  // deno run --unstable-sloppy-imports -A mod.ts import --simple-localize exported.json test/fixtures/insane-file-extensionless-import.ts

  // assert edits are applied correctly to .ts file

  const tmpDir = await Deno.makeTempDir();

  const files = [
    'insane-file-extensionless-import.ts',
    'hoge.nested.i18n.ts',
    'foo.i18n.ts',
    'bar.i18n.ts',
  ];

  for (const file of files)
  {
    const src = join(pathToFixtures, file);
    const dst = join(tmpDir, file);
    await Deno.copyFile(src, dst);
  }

  const rootPath = join(tmpDir, 'insane-file-extensionless-import.ts');
  const rootSourceCode = await Deno.readTextFile(rootPath);

  const hogePath = join(tmpDir, 'hoge.nested.i18n.ts');
  const hogeSourceCode = await Deno.readTextFile(hogePath);

  const fooPath = join(tmpDir, 'foo.i18n.ts');
  const fooSourceCode = await Deno.readTextFile(fooPath);

  const barPath = join(tmpDir, 'bar.i18n.ts');
  const barSourceCode = await Deno.readTextFile(barPath);

  const exportedJsonPath = join(tmpDir, 'exported.json');

  // In this test case, we know that the root file exports everything in all of the other files, so we don't have to worry about exporting more than one file here:
  await exportToJSONFile(rootPath, exportedJsonPath, {
    derive: true,
    simpleLocalizeFormat: true,
  });

  const exportedJson = await Deno.readTextFile(exportedJsonPath);

  const modifiedJSON = exportedJson
    .replace(': "foo"', ': "FOO!"')
    .replace(': "bar"', ': "BAR!"');

  const modifiedJSONPath = join(tmpDir, 'modified.json');
  await Deno.writeTextFile(modifiedJSONPath, modifiedJSON);

  // However, we do have to import the modified JSON into every file to import all the modifications.
  await importFromJSONFile(modifiedJSONPath, rootPath, {
    simpleLocalizeFormat: true,
  });
  await importFromJSONFile(modifiedJSONPath, fooPath, {
    simpleLocalizeFormat: true,
  });
  await importFromJSONFile(modifiedJSONPath, barPath, {
    simpleLocalizeFormat: true,
  });
  await importFromJSONFile(modifiedJSONPath, hogePath, {
    simpleLocalizeFormat: true,
  });

  const rootSourceCode2 = await Deno.readTextFile(rootPath);
  console.log('Root source code after import:', rootSourceCode2);

  const moddedMod = await loadLocalizationFromFileOrThrow(rootPath);

  // Assert that the modifications from our JSON were applied correctly:
  assertEquals(moddedMod.module.derpola.fooI18n.name.en, 'FOO!');
  assertEquals(moddedMod.module.derpola.barI18n.name.en, 'BAR!');

  console.log('TEST DONE', tmpDir);
});
