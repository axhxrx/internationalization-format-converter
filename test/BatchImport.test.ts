import { copy, ensureDir } from '@std/fs';
import { join, parse } from '@std/path';
import { BatchImport, ImportOptions } from '../BatchImport.ts';
import { assertTextFilesEqual } from './assertTextFilesEqual.ts';

const pathToParent = './test'; // = new URL('.', import.meta.url).pathname;

const pathToOriginalFoo = join(pathToParent, 'fixtures', 'foo.i18n.ts');
const pathToOriginalBar = join(pathToParent, 'fixtures', 'bar.i18n.ts');
const pathToOriginalHoge = join(pathToParent, 'fixtures', 'hoge.nested.i18n.ts');
const pathToOriginalInsane = join(pathToParent, 'fixtures', 'insane-file-extensionless-import.ts');
const pathToOriginalConnect = join(pathToParent, 'fixtures', 'collection', 'libs', 'user-console', 'feature',
  'connect-web-console', 'src', 'lib', 'feature-connect-web-console', 'i18n.ts');

const pathToUnmodifiedAlternate = join(pathToParent, 'BatchImport.test.unmodified.alternate.json');
const pathToUnmodified = join(pathToParent, 'BatchImport.test.unmodified.json');
const pathToModified = join(pathToParent, 'BatchImport.test.modified.json');
const pathToModifiedAlternate = join(pathToParent, 'BatchImport.test.modified.alternate.json');

const paths = [pathToOriginalFoo, pathToOriginalBar, pathToOriginalHoge, pathToOriginalInsane, pathToOriginalConnect,
  pathToUnmodified, pathToUnmodifiedAlternate, pathToModifiedAlternate, pathToModified];

async function runImportTest(pathMap: Record<string, string>, pathToTmpSourceDir: string, importOptions?: ImportOptions)
{
  for (const pathToOriginal of paths)
  {
    const pathToCopy = join(pathToTmpSourceDir, pathToOriginal);
    const parsed = parse(pathToCopy);
    await ensureDir(parsed.dir);

    await copy(pathToOriginal, pathToCopy);
  }

  console.log('Copied files to temp directory:', pathToTmpSourceDir);

  const b = new BatchImport(pathMap, importOptions);
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

  const pathToFinalOutputs = join(pathToTmpSourceDir, 'test', 'fixtures');

  const pathToFinalFoo = join(pathToFinalOutputs, 'foo.i18n.ts');
  const pathToFinalBar = join(pathToFinalOutputs, 'bar.i18n.ts');
  const pathToFinalHoge = join(pathToFinalOutputs, 'hoge.nested.i18n.ts');
  const pathToFinalInsane = join(pathToFinalOutputs, 'insane-file-extensionless-import.ts');
  const pathToFinalConnect = join(pathToFinalOutputs, 'collection', 'libs', 'user-console', 'feature',
    'connect-web-console', 'src', 'lib', 'feature-connect-web-console', 'i18n.ts');

  assertTextFilesEqual(pathToExpectedFinalFoo, pathToFinalFoo);
  assertTextFilesEqual(pathToExpectedFinalBar, pathToFinalBar);
  assertTextFilesEqual(pathToExpectedFinalHoge, pathToFinalHoge);
  assertTextFilesEqual(pathToExpectedFinalInsane, pathToFinalInsane);
  assertTextFilesEqual(pathToExpectedFinalConnect, pathToFinalConnect);
}

Deno.test('BatchImport works (normal mode)', async () =>
{
  const pathToTmpSourceDir = await Deno.makeTempDir({ prefix: 'BatchImport-test-source-' });
  const json = await Deno.readTextFile(pathToModified);
  const pathMap = JSON.parse(json);

  await runImportTest(pathMap, pathToTmpSourceDir);
});

Deno.test('BatchImport works (SimpleLocalize mode)', async () =>
{
  const pathToTmpSourceDir = await Deno.makeTempDir({ prefix: 'BatchImport-test-source-alt-' });
  const json = await Deno.readTextFile(pathToModifiedAlternate);
  const pathMap = JSON.parse(json);

  await runImportTest(pathMap, pathToTmpSourceDir, { simpleLocalizeFormat: true });
});
