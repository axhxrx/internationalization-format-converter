import { join } from '@std/path';

import { assert } from 'jsr:@std/assert';

import { loadLocalizationFromFile } from '../loadLocalizationFromFile.ts';

const pathToFixtures = new URL('./fixtures/', import.meta.url).pathname;

Deno.test('Regression test for in-editor test running (vs unstable-sloppy-imports', async () =>
{
  // This lib is supposed to work on localizations from node projects that do not or can not use sane import syntax (with the .ts).
  // But, the way we leverage Deno to import arbitrary files meant that it would not work in editors via the GUI extension, because
  // "--unstable-sloppy-imports" cannot be used in some circumstances. This test failed due to that reason, and is intended to see if we can easily work around it.
  const modulePath = join(pathToFixtures, 'collection', 'libs', 'i18n', 'ui-conversations',
    '/insane-file-extensionless-import.ts');

  const x = await loadLocalizationFromFile(modulePath);
  console.log('Loaded contents:', Deno.inspect(x, { depth: Infinity, colors: true }));

  assert(x !== null, 'x should not be null');
});
