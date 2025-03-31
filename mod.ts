import { main } from './src/cli/main.ts';

if (import.meta.main)
{
  main();
}

// Export public API
export { convertFromSimpleLocalizeFormat } from './src/convert/convertFromSimpleLocalizeFormat.ts';
export { convertToSimpleLocalizeFormat } from './src/convert/convertToSimpleLocalizeFormat.ts';

export { loadLocalizationFileContentsOrThrow as loadLocalizationFileContents,
  loadLocalizationFromFileOrThrow as loadLocalizationFromFile } from './src/ast/loadLocalizationFromFile.ts';

export { importJSONFileOrThrow } from './src/convert/importJSONFileOrThrow.ts';
export { importJSONOrThrow } from './src/convert/importJSONOrThrow.ts';

export { exportToJSON } from './src/convert/exportToJSON.ts';
export { exportToJSONFile } from './src/convert/exportToJSONFile.ts';
export { importFromJSON } from './src/convert/importFromJSON.ts';
export { importFromJSONFile } from './src/convert/importFromJSONFile.ts';
