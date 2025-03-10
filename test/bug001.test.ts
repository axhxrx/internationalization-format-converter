import { join } from '@std/path';

import { assertGreater } from 'jsr:@std/assert';

import { stripImports } from '../stripImports.ts';

const pathToFixtures = new URL('./fixtures/', import.meta.url).pathname;

Deno.test('Regression test for crashing bug on certain .i18n.ts files', async () =>
{
  const modulePath = join(pathToFixtures, 'bug001', 'i18n.ts');
  const fileContents = await Deno.readTextFile(modulePath);
  const strippedContents = await stripImports(fileContents);

  console.log(strippedContents);

  assertGreater(strippedContents.length, 0);
});
