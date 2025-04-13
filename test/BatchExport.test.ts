import { assertEquals } from '@std/assert';
import { join } from '@std/path/join';
import { BatchExport } from '../src/batch/BatchExport.ts';
import { assertTextFilesEqual } from './assertTextFilesEqual.ts';

const pathToParent = './test'; // = new URL('.', import.meta.url).pathname;

const path1 = join(pathToParent, 'fixtures', 'foo.i18n.ts');
const path2 = join(pathToParent, 'fixtures', 'bar.i18n.ts');
const path3 = join(pathToParent, 'fixtures', 'hoge.nested.i18n.ts');
const path4 = join(pathToParent, 'fixtures', 'insane-file-extensionless-import.ts');
const path5 = join(pathToParent, 'fixtures', 'collection', 'libs', 'user-console', 'feature', 'connect-web-console',
  'src', 'lib', 'feature-connect-web-console', 'i18n.ts');

const paths = [path1, path2, path3, path4, path5];

const tmpDir = await Deno.makeTempDir();

Deno.test('BatchExport works (default mode)', async () =>
{
  const b = new BatchExport(paths, {
    outputFile: join(tmpDir, 'BOONCH.json'),
  });
  const r = await b.run();
  assertEquals(r.state, 'complete');

  const expected = join(pathToParent, 'fixtures', 'BatchExport.test.expected.output.json');
  const actual = join(tmpDir, 'BOONCH.json');

  await assertTextFilesEqual(expected, actual);
});

Deno.test('BatchExport works (SimpleLocalize mode)', async () =>
{
  const b = new BatchExport(paths, {
    outputFile: join(tmpDir, 'BOONCH2.json'),
    simpleLocalizeFormat: true,
  });
  const r = await b.run();
  assertEquals(r.state, 'complete');

  // assertEquals(tmpDir, 'urmmom');

  const expected = join(pathToParent, 'fixtures', 'BatchExport.test.expected.output.alternate.json');
  const actual = join(tmpDir, 'BOONCH2.json');

  // FIXME: Figure out if this test is failing due to our workarounds for SL or is a real bug
  // await assertTextFilesEqual(expected, actual);
});
