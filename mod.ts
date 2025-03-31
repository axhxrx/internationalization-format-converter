import { exportToJSON } from './exportToJSON.ts';
import { main } from './main.ts';

if (import.meta.main)
{
  main();
}

// Export public API
export { convertFromSimpleLocalizeFormat } from './convertFromSimpleLocalizeFormat.ts';
export { convertToSimpleLocalizeFormat } from './convertToSimpleLocalizeFormat.ts';

export { loadLocalizationFileContentsOrThrow as loadLocalizationFileContents,
  loadLocalizationFromFileOrThrow as loadLocalizationFromFile } from './loadLocalizationFromFile.ts';

export { importJSONFileOrThrow } from './importJSONFileOrThrow.ts';
export { importJSONOrThrow } from './importJSONOrThrow.ts';

export { exportToJSON } from './exportToJSON.ts';
export { exportToJSONFile } from './exportToJSONFile.ts';
export { importFromJSON } from './importFromJSON.ts';
export { importFromJSONFile } from './importFromJSONFile.ts';
