import { assertEquals } from '@std/assert';
import { join } from '@std/path';
import { exportToJSONFile } from '../src/convert/exportToJSONFile.ts';
import { importJSONOrThrow } from '../src/convert/importJSONOrThrow.ts';

const pathToThis = new URL('./', import.meta.url).pathname;
const pathToEnclosingDir = join(pathToThis, '..');
const pathToFixture = join(pathToEnclosingDir, 'test', 'fixtures', 'regression-2025-04-03.i18n.ts');

Deno.test('Regression test 2025-04-03', async () =>
{
  const tmpFile2 = await Deno.makeTempFile();
  await exportToJSONFile(pathToFixture, tmpFile2, {
    derive: true,
    simpleLocalizeFormat: false,
  });

  console.log(tmpFile2);

  const jsonPathMap = await Deno.readTextFile(tmpFile2);

  const parsed = JSON.parse(jsonPathMap);

  const json = Object.entries(parsed)[0][1];

  const copyOfFixture = join(pathToEnclosingDir, 'test', 'fixtures', 'regression-2025-04-03.copy.i18n.ts');
  await Deno.copyFile(pathToFixture, copyOfFixture);

  let text = JSON.stringify(json, null, 2);

  text = text.replace('Notifiy you when a device is removed from your account', 
    'NATRD BANE');

  console.log(text);

  const tsCode = await Deno.readTextFile(pathToFixture);

  const reimported = await importJSONOrThrow(text, tsCode);
  console.log(reimported);

  const reimportedCode = reimported.modifiedCode;
  await Deno.writeTextFile(copyOfFixture, reimportedCode);

  console.log('Reimported code written to', copyOfFixture);
  // assertEquals(reimported, {});
});
