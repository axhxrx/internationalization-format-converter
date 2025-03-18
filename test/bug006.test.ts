import { join } from '@std/path';

import { convertFromSimpleLocalizeFormat } from '../convertFromSimpleLocalizeFormat.ts';
import { loadLocalizationFromFileOrThrow } from '../loadLocalizationFromFile.ts';
import { exportToJSON, exportToJSONFile, importFromJSON, importFromJSONFile, importFromJSONPathMap } from '../main.ts';
import { mergeAll } from '../merge.ts';
import { assertTextFilesEqual } from './assertTextFilesEqual.ts';

const pathToFixtures = new URL('./fixtures/', import.meta.url).pathname;

Deno.test('Spitballing the batch export/import process', async () =>
{
  // Multiple files, round-trip process:

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

  const jsonRoot = await exportToJSON(rootPath, {
    derive: true,
    simpleLocalizeFormat: true,
  });

  const jsonHoge = await exportToJSON(hogePath, {
    derive: true,
    simpleLocalizeFormat: true,
  });

  const jsonFoo = await exportToJSON(fooPath, {
    derive: true,
    simpleLocalizeFormat: true,
  });

  const jsonBar = await exportToJSON(barPath, {
    derive: true,
    simpleLocalizeFormat: true,
  });

  console.log(jsonRoot);
  console.log(jsonHoge);
  console.log(jsonFoo);
  console.log(jsonBar);

  const jsonObjects: Record<string, any>[] = [jsonRoot, jsonHoge, jsonFoo, jsonBar].map((json) =>
    JSON.parse(json.json)
  );

  const mergedJSONResult = mergeAll(jsonObjects, 'ERROR');
  console.log(mergedJSONResult);

  if (!mergedJSONResult.success)
  {
    throw new Error(`Failed to merge JSON: ${mergedJSONResult.error}`);
  }

  const mergedJSONObject = mergedJSONResult.value as Record<string, any>;
  const mergedJSONString = JSON.stringify(mergedJSONObject, null, 2);

  console.log('Merged JSON:', mergedJSONString);

  // OK, now we have exported everything to JSON. Let's modify the JSON and re-import it into the files:

  mergedJSONString.replace('foo', 'FOO!');

  await exportToJSONFile(hogePath, exportedJsonPath, {
    derive: true,
    simpleLocalizeFormat: true,
  });

  await exportToJSONFile(fooPath, exportedJsonPath, {
    derive: true,
    simpleLocalizeFormat: true,
  });

  await exportToJSONFile(barPath, exportedJsonPath, {
    derive: true,
    simpleLocalizeFormat: true,
  });

  const exportedJson = await Deno.readTextFile(exportedJsonPath);

  const modifiedJSON = mergedJSONString
    .replace(': "foo"', ': "FOO!"')
    .replace(': "bar"', ': "BAR!"')
    .replace('whiskey', 'Canadian Club')
    .replace('ウイスキー', 'カナディアンクラブ')
    .replace('こんにちは、{name}さん！', 'おす、 {name} 　！')
    .replace('Get lost, {name}!', 'Scram, {name}!')
    .replace('Princess', 'Peach')
    .replace('プリンセス', 'ピーチ');

  const modifiedJSONPath = join(tmpDir, 'modified.json');
  await Deno.writeTextFile(modifiedJSONPath, modifiedJSON);

  console.log('Modified JSON:', modifiedJSON);

  // However, we do have to import the modified JSON into every file to import all the modifications.

  const keys = Object.keys(mergedJSONObject);

  const modifiedJSONObject = JSON.parse(modifiedJSON);

  const convertedModifiedJSONObject = convertFromSimpleLocalizeFormat(modifiedJSONObject) as Record<string, any>;
  const keys2 = Object.keys(convertedModifiedJSONObject);

  const mods = await importFromJSONPathMap(convertedModifiedJSONObject);

  console.log('Mods:', mods);

  await assertTextFilesEqual(rootPath, join(pathToFixtures, 'insane-file-extensionless-import.modified.ts'));
  await assertTextFilesEqual(hogePath, join(pathToFixtures, 'hoge.nested.i18n.modified.ts'));
  await assertTextFilesEqual(fooPath, join(pathToFixtures, 'foo.i18n.modified.ts'));
  await assertTextFilesEqual(barPath, join(pathToFixtures, 'bar.i18n.modified.ts'));

  // const modifiedFoo = await importFromJSONPathMap(mergedJSONObject, { dryRun: true });
  // const modifiedBar = await importFromJSONPathMap(mergedJSONObject, { dryRun: true });
  // const modifiedHoge = await importFromJSONPathMap(mergedJSONObject, { dryRun: true });

  // console.log('Modified root:', modifiedRoot);
  // console.log('Modified foo:', modifiedFoo);
  // console.log('Modified bar:', modifiedBar);
  // console.log('Modified hoge:', modifiedHoge);

  // // Now we have to write the modified code back to the files:
  // const modifiedRootPath = join(tmpDir, 'modified-root.ts');
  // const modifiedFooPath = join(tmpDir, 'modified-foo.ts');
  // const modifiedBarPath = join(tmpDir, 'modified-bar.ts');
  // const modifiedHogePath = join(tmpDir, 'modified-hoge.ts');

  // await Deno.writeTextFile(modifiedRootPath, modifiedRoot);
  // await Deno.writeTextFile(modifiedFooPath, modifiedFoo);
  // await Deno.writeTextFile(modifiedBarPath, modifiedBar);
  // await Deno.writeTextFile(modifiedHogePath, modifiedHoge);

  // console.log('tmpDir:', tmpDir);

  /*
  const rootSourceCode2 = await Deno.readTextFile(rootPath);
  console.log('Root source code after import:', rootSourceCode2);

  const moddedMod = await loadLocalizationFromFileOrThrow(rootPath);

  // Assert that the modifications from our JSON were applied correctly:
  assertEquals(moddedMod.module.derpola.fooI18n.name.en, 'FOO!');
  assertEquals(moddedMod.module.derpola.barI18n.name.en, 'BAR!');

  */
  console.log('TEST DONE', tmpDir);
});
