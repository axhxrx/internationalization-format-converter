import { copy, ensureDir } from '@std/fs';
import { join, parse } from '@std/path';
import { BatchImport } from '../BatchImport.ts';
import { assertTextFilesEqual } from './assertTextFilesEqual.ts';

const pathToTmpSourceDir = await Deno.makeTempDir({ prefix: 'BatchImport-test-source-' });

const pathToParent = './test'; // = new URL('.', import.meta.url).pathname;

const path1 = join(pathToParent, 'fixtures', 'foo.i18n.ts');
const path2 = join(pathToParent, 'fixtures', 'bar.i18n.ts');
const path3 = join(pathToParent, 'fixtures', 'hoge.nested.i18n.ts');
const path4 = join(pathToParent, 'fixtures', 'insane-file-extensionless-import.ts');
const path5 = join(pathToParent, 'fixtures', 'collection', 'libs', 'user-console', 'feature', 'connect-web-console',
  'src', 'lib', 'feature-connect-web-console', 'i18n.ts');

const path6 = join(pathToParent, 'BatchImport.test.unmodified.alternate.json');
const path7 = join(pathToParent, 'BatchImport.test.unmodified.json');
const path8 = join(pathToParent, 'BatchImport.test.modified.alternate.json');
const path9 = join(pathToParent, 'BatchImport.test.modified.json');

const paths = [path1, path2, path3, path4, path5, path6, path7];

for (const pathToOriginal of paths)
{
  const pathToCopy = join(pathToTmpSourceDir, pathToOriginal);
  const parsed = parse(pathToCopy);
  await ensureDir(parsed.dir);

  await copy(pathToOriginal, pathToCopy);
}

console.log('Copied files to temp directory:', pathToTmpSourceDir);

Deno.test('BatchImport works (default mode)', async () =>
{
  const json = await Deno.readTextFile(path9);
  const pathMap = JSON.parse(json);

  const b = new BatchImport(pathMap);
  const r = await b.run(pathToTmpSourceDir);
  console.log(Deno.inspect(r, { depth: 3 }));

  const pathToExpectedFinalFoo = join(pathToParent, 'BatchImport.test.expected.outputs', 'normal', 'foo.i18n.ts');
  const pathToExpectedFinalBar = join(pathToParent, 'BatchImport.test.expected.outputs', 'normal', 'bar.i18n.ts');
  const pathToExpectedFinalHoge = join(pathToParent, 'BatchImport.test.expected.outputs', 'normal',
    'hoge.nested.i18n.ts');
  const pathToExpectedFinalInsane = join(pathToParent, 'BatchImport.test.expected.outputs', 'normal',
    'insane-file-extensionless-import.ts');
  const pathToExpectedFinalConnect = join(
    pathToParent,
    'BatchImport.test.expected.outputs',
    'normal',
    'collection',
    'libs',
    'user-console',
    'feature',
    'connect-web-console',
    'src',
    'lib',
    'feature-connect-web-console',
    'i18n.ts',
  );
  const _expectedFinalFoo = await Deno.readTextFile(
    pathToExpectedFinalFoo,
  );
  const _expectedFinalBar = await Deno.readTextFile(
    pathToExpectedFinalBar,
  );
  const _expectedFinalHoge = await Deno.readTextFile(
    pathToExpectedFinalHoge,
  );
  const _expectedFinalInsane = await Deno.readTextFile(
    pathToExpectedFinalInsane,
  );
  const _expectedFinalConnect = await Deno.readTextFile(
    pathToExpectedFinalConnect,
  );

  const pathToFinalOutputs = join(pathToTmpSourceDir, 'test', 'fixtures');

  const pathToFinalFoo = join(pathToFinalOutputs, 'foo.i18n.ts');
  const pathToFinalBar = join(pathToFinalOutputs, 'bar.i18n.ts');
  const pathToFinalHoge = join(pathToFinalOutputs, 'hoge.nested.i18n.ts');
  const pathToFinalInsane = join(pathToFinalOutputs, 'insane-file-extensionless-import.ts');
  const pathToFinalConnect = join(pathToFinalOutputs, 'collection', 'libs', 'user-console', 'feature',
    'connect-web-console', 'src', 'lib', 'feature-connect-web-console', 'i18n.ts');

  const _actualFinalFoo = await Deno.readTextFile(pathToFinalFoo);
  const _actualFinalBar = await Deno.readTextFile(pathToFinalBar);
  const _actualFinalHoge = await Deno.readTextFile(pathToFinalHoge);
  const _actualFinalInsane = await Deno.readTextFile(pathToFinalInsane);
  const _actualFinalConnect = await Deno.readTextFile(pathToFinalConnect);

  assertTextFilesEqual(pathToExpectedFinalFoo, pathToFinalFoo);
  assertTextFilesEqual(pathToExpectedFinalBar, pathToFinalBar);
  assertTextFilesEqual(pathToExpectedFinalHoge, pathToFinalHoge);
  assertTextFilesEqual(pathToExpectedFinalInsane, pathToFinalInsane);
  assertTextFilesEqual(pathToExpectedFinalConnect, pathToFinalConnect);
});

// Deno.test('BatchExport works (default mode)', async () =>
// {
//   const b = new BatchExport(paths, {
//     outputFile: 'BOONCH.json',
//   });
//   const r = await b.run();
//   console.log(Deno.inspect(r, { depth: 3 }));
//   assertEquals(r.state, 'complete');

//   const expected = join(pathToParent, 'BatchExport.test.expected.output.json');
//   const actual = join('.', 'BOONCH.json');

//   assertTextFilesEqual(expected, actual);
// });

// Deno.test('BatchExport works (SimpleLocalize mode)', async () =>
// {
//   const b = new BatchExport(paths, {
//     outputFile: 'BOONCH2.json',
//     simpleLocalizeFormat: true,
//   });
//   const r = await b.run();
//   console.log(Deno.inspect(r, { depth: 3 }));
//   assertEquals(r.state, 'complete');

//   const expected = join(pathToParent, 'BatchExport.test.expected.output.alternate.json');
//   const actual = join('.', 'BOONCH2.json');

//   assertTextFilesEqual(expected, actual);
// });
