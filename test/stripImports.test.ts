import { assert, assertEquals } from '@std/assert';

import { stripImports } from '../src/ast/stripImports.ts';
import { tryImportingCode } from '../src/ast/tryImportingCode.ts';

const pathToFixtures = new URL('./fixtures/', import.meta.url).pathname;

Deno.test('stripImports works basically', async () =>
{
  const modulePath = pathToFixtures + 'baz.i18n.ts';
  const fileContents = await Deno.readTextFile(modulePath);
  const strippedContents = await stripImports(fileContents);

  // console.log(strippedContents);

  const expected = Deno.readTextFileSync(pathToFixtures + 'baz.i18n.stripped.ts');
  assertEquals(strippedContents, expected);
});

Deno.test('stripImports works with multi import', async () =>
{
  const modulePath = pathToFixtures + 'baz2.i18n.ts';
  const fileContents = await Deno.readTextFile(modulePath);
  const strippedContents = await stripImports(fileContents);

  const expected = Deno.readTextFileSync(pathToFixtures + 'baz.i18n.stripped.ts');
  assertEquals(strippedContents, expected);
});

Deno.test('stripImports produces importable code', async () =>
{
  const modulePath = pathToFixtures + 'baz.i18n.ts';
  const fileContents = await Deno.readTextFile(modulePath);
  const strippedContents = await stripImports(fileContents);

  const result = await tryImportingCode({ sourceCode: strippedContents });
  assertEquals(result.success, true, `Failed to import stripped code from ${result.filePath}.\n`
    + `Source code:\n${result.sourceCode}\n`
    + `Error: ${result.error?.message ?? 'unknown error'}`);
});

Deno.test('stripImports with multi import produces importable code', async () =>
{
  const modulePath = pathToFixtures + 'baz2.i18n.ts';
  const fileContents = await Deno.readTextFile(modulePath);
  const strippedContents = await stripImports(fileContents);

  const result = await tryImportingCode({ sourceCode: strippedContents });
  assertEquals(result.success, true, `Failed to import stripped code from ${result.filePath}.\n`
    + `Source code:\n${result.sourceCode}\n`
    + `Error: ${result.error?.message ?? 'unknown error'}`);
});

Deno.test('stripImports with nested translation definitions produces importable code', async () =>
{
  const modulePath = pathToFixtures + 'hoge_nested.i18n.ts';
  const fileContents = await Deno.readTextFile(modulePath);
  const strippedContents = await stripImports(fileContents);

  const result = await tryImportingCode({ sourceCode: strippedContents });
  assert(result.success, `Failed to generate valid code when stripping ${modulePath}.\n`
    + `Source code:\n${result.sourceCode}\n`
    + `Error: ${result.error?.message ?? 'unknown error'}`);
});

Deno.test('stripImports with re-exported translation definitions produces importable code', async () =>
{
  const modulePath = pathToFixtures + 'hoge.re-exports.i18n.ts';
  const fileContents = await Deno.readTextFile(modulePath);
  const strippedContents = await stripImports(fileContents);

  const result = await tryImportingCode({ sourceCode: strippedContents });
  assert(result.success, `Failed to generate valid code when stripping ${modulePath}.\n`
    + `Source code:\n${result.sourceCode}\n`
    + `Error: ${result.error?.message ?? 'unknown error'}`);
});

Deno.test('stripImports regression test ', async () =>
{
  const modulePath = pathToFixtures
    + 'collection/libs/apps/user-console/quux-page/src/lib/ui-action-def/quux-action.i18n.ts';
  const fileContents = await Deno.readTextFile(modulePath);
  const strippedContents = await stripImports(fileContents);

  const result = await tryImportingCode({ sourceCode: strippedContents });
  assert(result.success, `Failed to generate valid code when stripping ${modulePath}.\n`
    + `Source code:\n${result.sourceCode}\n`
    + `Error: ${result.error?.message ?? 'unknown error'}`);
});

Deno.test('stripImports removes re-exports', async () =>
{
  const modulePath = pathToFixtures + 'reexports.i18n.ts';
  const fileContents = await Deno.readTextFile(modulePath);
  const strippedContents = await stripImports(fileContents);

  const expected = Deno.readTextFileSync(pathToFixtures + 'reexports.i18n.stripped.ts');
  assertEquals(strippedContents, expected);

  // Also verify it produces valid code
  const result = await tryImportingCode({ sourceCode: strippedContents });
  assert(result.success, `Failed to generate valid code when stripping ${modulePath}.\n`
    + `Source code:\n${result.sourceCode}\n`
    + `Error: ${result.error?.message ?? 'unknown error'}`);
});
