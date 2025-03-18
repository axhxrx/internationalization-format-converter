import { join } from '@std/path/join';
import { assertEquals } from 'jsr:@std/assert';
import { BatchExport } from '../BatchExport.ts';
import { assertTextFilesEqual } from './assertTextFilesEqual.ts';

const pathToParent = './test'; // = new URL('.', import.meta.url).pathname;

const path1 = join(pathToParent, 'fixtures', 'foo.i18n.ts');
const path2 = join(pathToParent, 'fixtures', 'bar.i18n.ts');
const path3 = join(pathToParent, 'fixtures', 'hoge.nested.i18n.ts');
const path4 = join(pathToParent, 'fixtures', 'insane-file-extensionless-import.ts');
const path5 = join(pathToParent, 'fixtures', 'collection', 'libs', 'user-console', 'feature', 'connect-web-console',
  'src', 'lib', 'feature-connect-web-console', 'i18n.ts');

const paths = [path1, path2, path3, path4, path5];

Deno.test('BatchExport works (default mode)', async () =>
{
  const b = new BatchExport(paths, {
    outputFile: 'BOONCH.json',
  });
  const r = await b.run();
  console.log(Deno.inspect(r, { depth: 3 }));
  assertEquals(r.state, 'complete');

  const expected = join(pathToParent, 'BatchExport.test.expected.output.json');
  const actual = join('.', 'BOONCH.json');

  assertTextFilesEqual(expected, actual);
});

Deno.test('BatchExport works (SimpleLocalize mode)', async () =>
{
  const b = new BatchExport(paths, {
    outputFile: 'BOONCH2.json',
    simpleLocalizeFormat: true,
  });
  const r = await b.run();
  console.log(Deno.inspect(r, { depth: 3 }));
  assertEquals(r.state, 'complete');

  const expected = join(pathToParent, 'BatchExport.test.expected.output.alternate.json');
  const actual = join('.', 'BOONCH2.json');

  assertTextFilesEqual(expected, actual);
});
