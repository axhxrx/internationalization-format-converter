import { copy } from '@std/fs';
import { join } from '@std/path';
import { main } from '../main.ts';
import { assertTextFilesEqual } from './assertTextFilesEqual.ts';

const pathToThis = new URL('./', import.meta.url).pathname;
const pathToEnclosingDir = join(pathToThis, '..');
const pathToFixtures = join(pathToEnclosingDir, 'test', 'fixtures');

const tmpDir = await Deno.makeTempDir();

const copyFixtures = async () =>
{
  const pathToCopyOfFixtures = join(tmpDir, 'copy-of-fixtures');
  await copy(pathToFixtures, pathToCopyOfFixtures);
  return {
    original: pathToFixtures,
    copy: pathToCopyOfFixtures,
  };
};

Deno.test('export works (small, default mode)', async () =>
{
  const { original, copy } = await copyFixtures();
  await main('export foo.i18n.ts foo.i18n.actual.json', copy);

  const pathToExpected = join(original, 'foo.i18n.expected.json');
  const pathToActual = join(copy, 'foo.i18n.actual.json');

  await assertTextFilesEqual(pathToExpected, pathToActual);
});

Deno.test('batch export works (small, default mode)', async () =>
{
  const { original, copy } = await copyFixtures();
  await main('batch-export collection batch-export-output.json', copy);

  const pathToExpected = join(original, 'output.expected.json');
  const pathToActual = join(copy, 'batch-export-output.json');

  // await assertTextFilesEqual(pathToExpected, pathToActual);

  await main('batch-import batch-export-output.json collection', copy);
  console.log('Batch import completed');
});
