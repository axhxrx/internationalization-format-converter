import { assertEquals } from 'jsr:@std/assert';

import { formatTypeScriptCode } from '../formatTypeScriptCode.ts';
import { stripImports } from '../stripImports.ts';

const pathToFixtures = new URL('./fixtures/', import.meta.url).pathname;

Deno.test('stripImports works basically', async () =>
{
  const modulePath = pathToFixtures + 'baz.i18n.ts';
  const fileContents = await Deno.readTextFile(modulePath);
  const strippedContents = stripImports(fileContents);

  // The only reason to do this is we use 2-space indentation, but the default TSC printer uses 4-space indentation, but we don't want to accidentally break our fixture files just by saving them (and auto-formatting them).
  const fixedContents = strippedContents.replaceAll('    ', '  ');

  const expected = Deno.readTextFileSync(pathToFixtures + 'baz.i18n.stripped.ts');
  assertEquals(fixedContents, expected);
});

Deno.test('stripImports works with multi import', async () =>
{
  const modulePath = pathToFixtures + 'baz2.i18n.ts';
  const fileContents = await Deno.readTextFile(modulePath);
  const strippedContents = stripImports(fileContents);

  // The only reason to do this is we use 2-space indentation, but the default TSC printer uses 4-space indentation, but we don't want to accidentally break our fixture files just by saving them (and auto-formatting them).
  const fixedContents = formatTypeScriptCode(strippedContents);

  const expected = Deno.readTextFileSync(pathToFixtures + 'baz.i18n.stripped.ts');
  assertEquals(fixedContents, expected);
});
