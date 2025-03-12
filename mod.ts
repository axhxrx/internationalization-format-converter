import { main } from './main.ts';

if (import.meta.main)
{
  main();
}

// Export public API
export { importJSONFileOrThrow, importJSONOrThrow } from './importJSONFileOrThrow.ts';
export { loadLocalizationFileContentsOrThrow as loadLocalizationFileContents,
  loadLocalizationFromFileOrThrow as loadLocalizationFromFile } from './loadLocalizationFromFile.ts';
