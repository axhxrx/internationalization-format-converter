import { join } from '@std/path';

import { assert } from 'jsr:@std/assert';

import { loadLocalizationFromFile } from '../loadLocalizationFromFile.ts';
import { stripImports } from '../stripImports.ts';
import { tryImportingCode } from '../tryImportingCode.ts';

const pathToFixtures = new URL('./fixtures/', import.meta.url).pathname;

Deno.test('Regression test for crashing bug on certain .i18n.ts files', async () =>
{
  const modulePath = join(pathToFixtures, 'collection', 'libs', 'i18n', 'ui-conversations',
    '/ui-conversations.i18n.ts');

  const x = await loadLocalizationFromFile(modulePath);
  console.log('Loaded contents:', Deno.inspect(x, { depth: Infinity, colors: true }));

  assert(x !== null, 'x should not be null');
});
