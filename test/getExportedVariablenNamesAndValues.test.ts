import { assertEquals } from '@std/assert';
import { createTsProject } from '../src/ast/createTsProject.ts';
import { getExportedVariableNamesAndValues } from '../src/ast/getExportedVariableNamesAndValues.ts';

Deno.test('getExportedVariableNamesAndValues', () =>
{
  const {
    // project,
    sourceFile,
  } = createTsProject(`
    export hoge from 'hige.ts';

    import { bar } from './bar.ts';
    export bar as foo;

    export const foo = {
      name: {
        en: "hi",
        ja: "ハロー"
      }
    };

    export const baz = bar;
  `);

  const exportedNamesAndValues = getExportedVariableNamesAndValues(sourceFile);
  const names = exportedNamesAndValues.map(e => e.name);
  assertEquals(names, ['foo', 'baz']);
});
