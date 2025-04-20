import { main } from './src/cli/main.ts';

if (import.meta.main)
{
  main();
}

// Export public API
export * from './src/convert/convertFromSimpleLocalizeFormat.ts';
export * from './src/convert/convertToSimpleLocalizeFormat.ts';

export { loadLocalizationFileContentsOrThrow as loadLocalizationFileContents,
  loadLocalizationFromFileOrThrow as loadLocalizationFromFile } from './src/ast/loadLocalizationFromFile.ts';

export * from './src/convert/importJSONFileOrThrow.ts';
export * from './src/convert/importJSONOrThrow.ts';

export * from './src/convert/exportToJSON.ts';
export * from './src/convert/exportToJSONFile.ts';
export * from './src/convert/importFromJSON.ts';
export * from './src/convert/importFromJSONFile.ts';

export * from './src/batch/BatchExport.ts';
export * from './src/batch/batchExportWithOptions.ts';
export * from './src/batch/BatchImport.ts';
export * from './src/batch/batchImportWithOptions.ts';
