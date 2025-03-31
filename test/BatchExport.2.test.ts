import { copy } from '@std/fs';
import { join } from '@std/path/join';
import { assertEquals } from 'jsr:@std/assert';
import { BatchExport } from '../src/batch/BatchExport.ts';
import { convertToSimpleLocalizeFormat } from '../src/convert/convertToSimpleLocalizeFormat.ts';
import { splitByMaxLeafNodesOrThrow } from '../src/util/splitByMaxLeafNodes.ts';
import { assertTextFilesEqual } from './assertTextFilesEqual.ts';

const pathToThis = new URL('./', import.meta.url).pathname;
const pathToEnclosingDir = join(pathToThis, '..');
const pathToFixture = join(pathToEnclosingDir, 'test', 'fixtures', 'collection');

const tmpDir = await Deno.makeTempDir();
const pathToCopyOfFixture = join(tmpDir, 'copy');

await copy(pathToFixture, pathToCopyOfFixture);

Deno.test('BatchExport works (large, default mode)', async () =>
{
  const outputFile = join(tmpDir, 'OUTPUT.json');
  const b = await BatchExport.find(pathToCopyOfFixture, {
    outputFile,
    // rootDir: pathToCopyOfParent,
  });
  const r = await b.run();
  console.log(Deno.inspect(r, { depth: 3 }));
  assertEquals(r.state, 'complete');

  const expected = join(pathToEnclosingDir, 'test', 'fixtures', 'BatchExport.test2.expected.output.json');
  const actual = outputFile;

  await assertTextFilesEqual(expected, actual);

  const json = await Deno.readTextFile(actual);
  const parsed = JSON.parse(json);

  // SimpleLocalize: You can import up to 4000 keys at once, while your import has 8405 keys. Please upgrade your account.

  const parsedChunk = splitByMaxLeafNodesOrThrow(parsed, 9999999)[0];

  const converted = convertToSimpleLocalizeFormat(parsedChunk);

  const actualSimpleLocalize = join('.', 'OUTPUT.simpleLocalize.json');

  await Deno.writeTextFile(actualSimpleLocalize, JSON.stringify(converted, null, 2));
});
