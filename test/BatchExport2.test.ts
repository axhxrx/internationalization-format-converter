import { assertEquals } from '@std/assert';
import { join } from '@std/path/join';
import { BatchExport } from '../src/batch/BatchExport.ts';
import { assertTextFilesEqual } from './assertTextFilesEqual.ts';

const pathToParent = './test'; // = new URL('.', import.meta.url).pathname;


// const path6 = join(pathToParent, 'fixtures', 'bug008', 'i18n.exclude.ts');
const path7 = join(pathToParent, 'fixtures', 'bug008', 'another.i18n.exclude.ts');

const paths = [path7];

const tmpDir = await Deno.makeTempDir();

Deno.test('BatchExport works (default mode)', async () =>
{
  const b = new BatchExport(paths, {
    outputFile: join(tmpDir, 'BOONCH.json'),
  });
  const r = await b.run();
  assertEquals(r.state, 'complete');

  const expected = join(pathToParent, 'fixtures', 'BatchExport2.test.expected.output.json');
  const actual = join(tmpDir, 'BOONCH.json');

  await assertTextFilesEqual(expected, actual);
});

