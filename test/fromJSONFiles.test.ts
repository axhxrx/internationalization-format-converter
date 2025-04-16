import { assert, assertEquals } from '@std/assert';
import { join } from '@std/path';
import { loadLocalizationFromFileOrThrow } from '../src/ast/loadLocalizationFromFile.ts';
import { importJSONOrThrow } from '../src/convert/importJSONOrThrow.ts';

const pathToFixtures = new URL('./fixtures/', import.meta.url).pathname;

const fooInputFile = pathToFixtures + 'foo.i18n.ts';
const barInputFile = pathToFixtures + 'bar.i18n.ts';
const bazInputFile = pathToFixtures + 'baz.i18n.ts';
const hogeInputFile = pathToFixtures + 'hoge_nested.i18n.ts';

const pathToOriginalTypeScriptFile = pathToFixtures + 'baz.i18n.ts';
const pathToUneditedJSONFile = pathToFixtures + 'baz.i18n.json';
const pathToEditedJSONFile = pathToFixtures + 'baz.edited.i18n.json';
const pathToEditedTypeScriptFile = pathToFixtures + 'baz.edited.i18n.ts';

/**
 This long and convoluted test will do the full round-trip process of:
 - loading .ts localizations (translation sets)
 - converting them to JSON output format
 - editing the JSON (simulating edits at e.g. SimpleLocalize or other external systems)
 - reading back in the edited JSON
 - applying the changes back to the correct .ts files
 */
Deno.test('conversion from a set of JSON files with changes', async () =>
{
  // Collect the sample .ts localizations and copy them to a temp directory
  const tmpDir = await Deno.makeTempDir({ prefix: 'fromJSONFiles-test-dir-' });
  await Deno.copyFile(fooInputFile, join(tmpDir, 'foo.i18n.ts'));
  await Deno.copyFile(barInputFile, join(tmpDir, 'bar.i18n.ts'));
  await Deno.copyFile(bazInputFile, join(tmpDir, 'baz.i18n.ts'));
  await Deno.copyFile(hogeInputFile, join(tmpDir, 'hoge_nested.i18n.ts'));

  // Load each of the localizations and assert whatever we can
  const foo = await loadLocalizationFromFileOrThrow(join(tmpDir, 'foo.i18n.ts'), { derive: true });
  const bar = await loadLocalizationFromFileOrThrow(join(tmpDir, 'bar.i18n.ts'), { derive: true });
  const baz = await loadLocalizationFromFileOrThrow(join(tmpDir, 'baz.i18n.ts'), { derive: true });
  const hoge = await loadLocalizationFromFileOrThrow(join(tmpDir, 'hoge_nested.i18n.ts'), { derive: true });

  // Combine them into one object — for now, just do it like this; we will have a Conversion object later that tracks progress, etc.
  const all = {
    ...foo.module,
    ...bar.module,
    ...baz.module,
    ...hoge.module,
  };

  // We can rely on the path order being stable, but let's sanity check it anyway:
  const paths = Object.keys(all);

  const fooJSONPath = paths[0];
  assert(fooJSONPath.endsWith('foo.i18n.ts'));

  const barJSONPath = paths[1];
  assert(barJSONPath.endsWith('bar.i18n.ts'));

  const bazJSONPath = paths[2];
  assert(bazJSONPath.endsWith('baz.i18n.ts'));

  const hogeJSONPath = paths[3];
  assert(hogeJSONPath.endsWith('hoge_nested.i18n.ts'));

  // Get the JSON contents
  const fooJSON = all[fooJSONPath];
  const barJSON = all[barJSONPath];
  const bazJSON = all[bazJSONPath];
  const hogeJSON = all[hogeJSONPath];

  // We don't really need to write the JSON out to disk here; we assume that part works, for this test. So instead, make changes directly to the JSON, then write it out to disk.

  fooJSON.foo.name.en = 'Boatie McBoatface';
  fooJSON.foo.name.ja = 'ボーティー マックボートフェイス';

  barJSON.bar.greeting.friendly.en = 'Nice to see you, {name}!';
  barJSON.bar.greeting.friendly.ja = 'うおぉ、{name}さんキタ！';

  bazJSON.baz.favorite.food.en = 'sushi';
  bazJSON.baz.favorite.food.ja = '寿司';

  hogeJSON.hoge.nested2.moreDeeplyNested.wowser.en = 'w00t w00t';
  hogeJSON.hoge.nested2.moreDeeplyNested.wowser.ja = 'わほー';

  // Now we have made the above changes to the in-memory JSON structure. So let's write it out to a single JSON file, which is the JSON representation of multiple .ts localizations, but with simulated changes applied.

  const jsonPath = join(tmpDir, 'all.i18n.ts');
  await Deno.writeTextFile(jsonPath, JSON.stringify(all, null, 2));

  // Load the JSON back into memory, and then into TypeScript, to check that it works.
  const tsCode = await Deno.readTextFile(fooInputFile);
  const fooTsUpdated = await importJSONOrThrow(JSON.stringify(fooJSON), tsCode);

  // const fooTs = await Deno.readTextFile(pathToFixtures + 'foo.i18n.ts');
  // const barTs = await Deno.readTextFile(pathToFixtures + 'bar.i18n.ts');
  // const bazTs = await Deno.readTextFile(pathToFixtures + 'baz.i18n.ts');
  // const hogeTs = await Deno.readTextFile(pathToFixtures + 'hoge_nested.i18n.ts');

  // const fooTsUpdated = await importJSONOrThrow(JSON.stringify(fooJSON), fooTs);
  // const barTsUpdated = await importJSONOrThrow(JSON.stringify(barJSON), barTs);
  // const bazTsUpdated = await importJSONOrThrow(JSON.stringify(bazJSON), bazTs);
  // const hogeTsUpdated = await importJSONOrThrow(JSON.stringify(hogeJSON), hogeTs);

  // console.log(fooTsUpdated);
  // console.log(barTsUpdated);
  // console.log(bazTsUpdated);
  // console.log(hogeTsUpdated);

  const expected = `export const foo = {
  name: {
    en: 'Boatie McBoatface',
    ja: 'ボーティー マックボートフェイス',
  },
  greeting: {
    friendly: {
      en: 'Hello, {name}!',
      ja: 'こんにちは、{name}さん！',
    },
    hostile: {
      en: 'Get lost, {name}!',
      ja: '何だ、{name}！',
    },
  },
} as const;
`;
  assertEquals(fooTsUpdated.modifiedCode, expected);

  // console.log('WAHATA');
  // console.log(JSON.stringify(all, null, 2));

  // const tsContent = await Deno.readTextFile(pathToOriginalTypeScriptFile);
  // const jsonContent = await Deno.readTextFile(pathToUneditedJSONFile);
  // const editedJSONContent = await Deno.readTextFile(pathToEditedJSONFile);
  // const editedTypeScriptContent = await Deno.readTextFile(pathToEditedTypeScriptFile);

  // const expectedDifferences = {
  //   'favorite.drink.alcoholic.en': { left: 'wine', right: 'whiskey' },
  //   'favorite.drink.alcoholic.ja': { left: 'ワイン', right: 'ウイスキー' },
  //   'favorite.drink.nonAlcoholic.en': { left: 'milk', right: 'water' },
  //   'favorite.drink.nonAlcoholic.ja': { left: '牛乳', right: '水' },
  // };

  // try {
  // const actual = await importJSONOrThrow(editedJSONContent, tsContent);
  // console.log(actual);

  // const expectedUpdatedSourceCode = Deno.readTextFileSync(pathToEditedTypeScriptFile);
  // assertEquals(actual, expectedUpdatedSourceCode);
  // } catch (error) {
  // assertEquals(error, null);
  // }

  // const x = await loadLocalizationFromFile(modulePath);
  // const j = JSON.stringify(x, null, 2);
  // const expected = Deno.readTextFileSync(pathToFixtures + 'foo.i18n.json');
  // assertEquals(j, expected);
});

// FIXME THIS TEST IS FUBAR NEEDS REWRITE
