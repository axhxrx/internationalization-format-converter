import { assert, assertEquals } from '@std/assert';

import { loadLocalizationFromFileOrThrow } from '../src/ast/loadLocalizationFromFile.ts';

const pathToFixtures = new URL('./fixtures/', import.meta.url).pathname;

const fooInputFile = pathToFixtures + 'foo.i18n.ts';
const barInputFile = pathToFixtures + 'bar.i18n.ts';
const bazInputFile = pathToFixtures + 'baz.i18n.ts';

Deno.test('toJSON converts input file to expected JSON (foo)', async () =>
{
  const modulePath = pathToFixtures + 'foo.i18n.ts';
  const { module, originalCode, code } = await loadLocalizationFromFileOrThrow(modulePath);
  const j = JSON.stringify(module, null, 2);
  const expected = Deno.readTextFileSync(pathToFixtures + 'foo.i18n.json');
  assertEquals(j, expected);
});

Deno.test('toJSON converts input file to expected JSON (bar)', async () =>
{
  const modulePath = pathToFixtures + 'bar.i18n.ts';
  const x = await loadLocalizationFromFileOrThrow(modulePath);
  const j = JSON.stringify(x.module, null, 2);
  const expected = Deno.readTextFileSync(pathToFixtures + 'bar.i18n.json');
  assertEquals(j, expected);
});

Deno.test('toJSON converts input file to expected JSON (baz)', async () =>
{
  const modulePath = pathToFixtures + 'baz.i18n.ts';
  const x = await loadLocalizationFromFileOrThrow(modulePath);
  const j = JSON.stringify(x.module, null, 2);
  const expected = Deno.readTextFileSync(pathToFixtures + 'baz.i18n.json');
  assertEquals(j, expected);
});

Deno.test('toJSON with multiple files an top-level identifiers', async () =>
{
  const foo = await loadLocalizationFromFileOrThrow(fooInputFile);
  const bar = await loadLocalizationFromFileOrThrow(barInputFile);
  const baz = await loadLocalizationFromFileOrThrow(bazInputFile);

  const all = {
    ...foo.module,
    ...bar.module,
    ...baz.module,
  };
  const actual = JSON.stringify(all, null, 2);

  const expected = Deno.readTextFileSync(pathToFixtures + 'foo-bar-baz.combined.json');

  assertEquals(actual, expected, 'merged JSON output should match expected');
});

Deno.test('toJSON with multiple files and no top-level identifiers', async () =>
{
  const fooInputFile = pathToFixtures + 'foo.i18n.ts';
  const barInputFile = pathToFixtures + 'bar.i18n.ts';
  const bazInputFile = pathToFixtures + 'baz.i18n.ts';

  const foo = await loadLocalizationFromFileOrThrow(fooInputFile);
  const bar = await loadLocalizationFromFileOrThrow(barInputFile);
  const baz = await loadLocalizationFromFileOrThrow(bazInputFile);

  const all = {
    ...foo.module,
    ...bar.module,
    ...baz.module,
  };
  const actual = JSON.stringify(all, null, 2);

  const expected = Deno.readTextFileSync(pathToFixtures + 'foo-bar-baz.combined.json');

  assertEquals(actual, expected, 'merged JSON output should match expected');
});

Deno.test('toJSON with multiple files and specified top-level identifiers', async () =>
{
  const foo = await loadLocalizationFromFileOrThrow(fooInputFile, 'hoge');
  const bar = await loadLocalizationFromFileOrThrow(barInputFile, 'hige');
  const baz = await loadLocalizationFromFileOrThrow(bazInputFile, 'hage');

  const all = {
    ...foo.module,
    ...bar.module,
    ...baz.module,
  };

  const actual = JSON.stringify(all, null, 2);

  const expected = Deno.readTextFileSync(pathToFixtures + 'foo-bar-baz.combined.custom-identifiers.json');

  assertEquals(actual, expected, 'merged JSON output should match expected');
});

/**
 This is maybe the most important test: it simulates a lot of what this library is intended to do: convert several .localization.ts files into a single JSON output.
 */
Deno.test('toJSON with multiple files and derived file path-based identifiers', async () =>
{
  const foo = await loadLocalizationFromFileOrThrow(fooInputFile, { derive: true });
  const bar = await loadLocalizationFromFileOrThrow(barInputFile, { derive: true });
  const baz = await loadLocalizationFromFileOrThrow(bazInputFile, { derive: true });

  const all = {
    ...foo.module,
    ...bar.module,
    ...baz.module,
  };

  const actual = JSON.stringify(all, null, 2);

  // console.log(actual);

  const expected = Deno.readTextFileSync(pathToFixtures + 'foo-bar-baz.combined.derived-identifiers.json');

  assertEquals(actual, expected, 'merged JSON output should match expected');
});

Deno.test('to JSON with nested references to imported entities', async () =>
{
  const inputFile = pathToFixtures + 'hoge_nested.i18n.ts';
  const result = await loadLocalizationFromFileOrThrow(inputFile);

  // No type help here; cannot be helped, though — we import unknown data at runtime, so nothing we can do at build time
  const drink = result.module.hoge.favorite.drink;

  // Thus lets just do:
  const expected = {
    hoge: {
      favorite: {
        food: {
          en: 'pizza',
          ja: 'ピザ',
        },
        drink: {
          alcoholic: {
            en: 'whiskey',
            ja: 'ウイスキー',
          },
          nonAlcoholic: {
            en: 'water',
            ja: '水',
          },
        },
      },
      nested2: {
        moreDeeplyNested: {
          wowser: {
            en:
              'The nested property should be completely erased becuase it contains nothing but import references, but nested2 should remain because I, wowser, exist',
            ja: 'なんか、俺いるぞ',
          },
        },
      },
    },
  };

  assertEquals(result.module, expected);

  assertEquals(drink.alcoholic.en, 'whiskey');
});

Deno.test('to JSON with re-exported references to imported entities', async () =>
{
  const inputFile = pathToFixtures + 'hoge.re-exports.i18n.ts';
  const result = await loadLocalizationFromFileOrThrow(inputFile);

  // No type help here; cannot be helped, though — we import unknown data at runtime, so nothing we can do at build time
  const drink = result.module.hoge.favorite.drink;

  // Thus lets just do:
  const expected = {
    hoge: {
      favorite: {
        food: {
          en: 'pizza',
          ja: 'ピザ',
        },
        drink: {
          alcoholic: {
            en: 'whiskey',
            ja: 'ウイスキー',
          },
          nonAlcoholic: {
            en: 'water',
            ja: '水',
          },
        },
      },
      nested2: {
        moreDeeplyNested: {
          wowser: {
            en:
              'The nested property should be completely erased becuase it contains nothing but import references, but nested2 should remain because I, wowser, exist',
            ja: 'なんか、俺いるぞ',
          },
        },
      },
    },
  };

  assertEquals(result.module, expected);

  assertEquals(drink.alcoholic.en, 'whiskey');
});
