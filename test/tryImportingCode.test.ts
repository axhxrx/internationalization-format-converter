import { assertEquals } from '@std/assert';
import { tryImportingCode } from '../src/ast/tryImportingCode.ts';

Deno.test('tryImportingCode works with source code', async () =>
{
  const sourceCode = `export const foo = { bar: 'baz' };`;
  const result = await tryImportingCode({ sourceCode });

  // console.log('RESULT!!!', result);

  assertEquals(result.success, true);
  assertEquals(result.sourceCode, sourceCode);
  assertEquals(result.error, undefined);
});

Deno.test('tryImportingCode works with file path', async () =>
{
  const filePath = new URL('./fixtures/foo.i18n.ts', import.meta.url).pathname;
  const result = await tryImportingCode({ filePath });

  assertEquals(result.success, true);
  assertEquals(result.filePath, filePath);
  assertEquals(result.error, undefined);
});

Deno.test('tryImportingCode fails with invalid source code', async () =>
{
  const sourceCode = `this is not valid typescript() && foo;`;
  const result = await tryImportingCode({ sourceCode });

  // console.log('RESULT!!!', result);
  assertEquals(result.success, false);
  assertEquals(result.sourceCode, sourceCode);
  assertEquals(result.error instanceof Error, true);
  // assertEquals(result.error?.message.includes('syntax err'), true);
});

Deno.test('tryImportingCode fails with non-existent file', async () =>
{
  const filePath = '/nonexistent/file.ts';
  const result = await tryImportingCode({ filePath });

  assertEquals(result.success, false);
  assertEquals(result.filePath, filePath);
  assertEquals(result.error instanceof Error, true);
  assertEquals(result.error?.message.includes('No such file'), true);
});
