import { main } from './main.ts';

if (import.meta.main)
{
  main();
}

// Export public API
export { convertFromSimpleLocalizeFormat } from './convertFromSimpleLocalizeFormat.ts';
export { convertToSimpleLocalizeFormat } from './convertToSimpleLocalizeFormat.ts';
export { importJSONFileOrThrow, importJSONOrThrow } from './importJSONFileOrThrow.ts';
export { loadLocalizationFileContentsOrThrow as loadLocalizationFileContents,
  loadLocalizationFromFileOrThrow as loadLocalizationFromFile } from './loadLocalizationFromFile.ts';
export { exportToJSON, exportToJSONFile, importFromJSON, importFromJSONFile } from './main.ts';
