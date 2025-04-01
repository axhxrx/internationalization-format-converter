import { join } from '@std/path';

import { assert, assertGreater } from 'jsr:@std/assert';

import { loadLocalizationFromFileOrThrow } from '../src/ast/loadLocalizationFromFile.ts';
import { stripImports } from '../src/ast/stripImports.ts';

const pathToFixtures = new URL('./fixtures/', import.meta.url).pathname;

Deno.test('Do we have any bugs over-eagerly removing exports?', async () =>
{
  const modulePath = join(pathToFixtures, 'valid_reexported.i18n.ts');

  const fileContents = await Deno.readTextFile(modulePath);
  const strippedContents = await stripImports(fileContents);

  console.log('Stripped contents:',
    strippedContents.length > 100 ? strippedContents.slice(0, 100) + '...' : strippedContents);

  assertGreater(strippedContents.length, 0, 'Stripped contents should not be empty');

  const loaded = await loadLocalizationFromFileOrThrow(modulePath);

  assert(loaded !== null, 'Loaded should not be null');

  console.log(Deno.inspect(loaded, { depth: Infinity, colors: true }));
});
