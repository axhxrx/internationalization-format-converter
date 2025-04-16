import { Cmd } from '@axhxrx/cmd';
import { Input, Select } from '@cliffy/prompt';
import { parseArgs } from '@std/cli';
import { diffObjects } from '../ast/getDifferencesOrThrow.ts';
import { batchExportWithOptions } from '../batch/batchExportWithOptions.ts';
import { batchImportWithOptions } from '../batch/batchImportWithOptions.ts';
import { configValue, type InferBaseConfig, initConfig } from '../util/initConfig.ts';

export const appId = 'com.axhxrx.internationalization-format-converter.simple-localize';

const argsDefinition = {
  boolean: ['help', 'yes', 'dryRun'],
  string: [
    // Precisely one of the next two is required (if 0 or both present, we prompt)
    'export',
    'extension',
    'import',
    /**
     The root dir, which for export means the dir to search for translations, and for import means the dir to apply the imported values to.
     */
    'root',
    /**
     The SimpleLocalize API key.
     */
    'api-key',
  ],
  alias: {
    a: 'api-key',
    e: 'extension',
    h: 'help',
    r: 'root',
    y: 'yes',
    'dry-run': 'dryRun',
  },
} as const;

const defaultConfig = {
  'SimpleLocalize API key': configValue('', {
    envOverride: 'SIMPLELOCALIZE_API_KEY',
    promptIfFalsy: false, // we'll handle it manually
  }),
};

// The merged CLI args and any stored config values (possibly including environment variable override values).
type ArgsAndConfig = {
  help: boolean;
  yes: boolean;
  dryRun: boolean;
  export: boolean;
  import: boolean;
  root: string;
  apiKey: string;
  extension: string;
};

if (import.meta.main)
{
  main();
}

/**
 This function is the entry point for the `simple-localize` command, which is the integration bringing `@axhxrx/internationalization` with the [SimpleLocalize](https://simplelocalize.io) Saas
 */
export async function main(): Promise<number>
{
  let exitStatus = 5;

  console.log(`
    🌸 Welcome to the SimpleLocalize integration tool 🌸
  `);

  const config = await buildConfig();

  console.log(`
    config: ${Deno.inspect(config, { depth: 3 })}
  `);

  const outputDir = await Deno.makeTempDir();

  console.log(`
    📂 Output directory: ${outputDir}
  `);
  const outputFile = `${outputDir}/local-translations.json`;
  const downloadFile = `${outputDir}/simplelocalize-translations.json`;
  const rootDir = Deno.cwd();

  if (config.import)
  {
    console.log(`
      📤 IMPORT all changes from SimpleLocalize...
    `);
  }
  else if (config.export)
  {
    console.log(`
      📤 EXPORT all changes to SimpleLocalize...
    `);
  }
  else
  {
    throw new Error('Internal error: neither IMPORT nor EXPORT specified. This should have been caught earlier.');
  }

  console.log(`
    🧹 HOUSEKEEPING: First we will export all translations to a temp file, and download all translations from SimpleLocalize, for sanity-checking.
  `);

  console.log(`
    📤 Exporting to ${outputFile}...
  `);

  exitStatus = await batchExportWithOptions({
    rootDir,
    outputFile: outputFile,
    fileExtensions: ['i18n.ts'],
    dryRun: false,
    simpleLocalizeFormat: true,
  });

  if (exitStatus !== 0)
  {
    console.error('💀 Export failed');
    return exitStatus;
  }

  console.log(`
    📤 Exported all i18n to local file: ${outputFile}
  `);

  console.log(`
    🔬 Next, I will download the current SimpleLocalize translations... and compare them for a sanity check.
  `);

  const simpleLocalizeCommand = await Cmd.run(`npx simplelocalize download \
      --apiKey ${config.apiKey} \
      --downloadPath ${downloadFile} \
      --downloadFormat multi-language-json \
      --downloadOptions WRITE_NESTED`);

  if (simpleLocalizeCommand.exitCode !== 0)
  {
    console.error('💀 Failed to download SimpleLocalize translations');
    const tmpFile = await Deno.makeTempFile();
    await Deno.writeTextFile(tmpFile, JSON.stringify(simpleLocalizeCommand, null, 2));
    console.log(`
        Failed to download SimpleLocalize translations. See ${tmpFile} for details.
      `);
    return simpleLocalizeCommand.exitCode;
  }

  console.log(`
      📤 Downloaded SimpleLocalize translations to ${downloadFile}
    `);

  const localJsonObj = JSON.parse(await Deno.readTextFile(outputFile));
  const simpleLocalizeJsonObj = JSON.parse(await Deno.readTextFile(downloadFile));

  const diff = diffObjects(localJsonObj, simpleLocalizeJsonObj);

  console.log(`
    📤 Diff:
    ${JSON.stringify(diff, null, 2)}

    The above is a crude diff of what your changes will be. (This will be improved in the future.) Do you want to proceed?
  `);

  if (Object.keys(diff).length === 0)
  {
    console.log(`
      🚨 NOTE: Seems like there are no changes to export or import. You can still try continuing if you want, but that would imply there is a bug in this program, otherwise this operation will have no effect. If you don't want to continue, you can exit this program now.
    `);
  }

  const answer = await Select.prompt({
    message: 'What would you like to do?',
    options: [
      { value: 'continue', name: 'Continue' },
      { value: 'exit', name: 'Exit this program now' },
    ],
  });

  if (answer === 'exit')
  {
    return 1;
  }

  if (config.import)
  {
    console.log(`
      📤 IMPORT all changes from SimpleLocalize...
    `);

    exitStatus = await batchImportWithOptions({
      jsonFile: downloadFile,
      targetDir: rootDir,
      dryRun: false,
      simpleLocalizeFormat: true,
    });

    if (exitStatus !== 0)
    {
      console.error('💀 Failed to import SimpleLocalize translations. There should hopefully be more output above.');
      return exitStatus;
    }
  }
  else if (config.export)
  {
    const simpleLocalizeUploadCommand = await Cmd.run(`npx simplelocalize upload \
      --apiKey ${config.apiKey} \
      --uploadPath ${outputFile} \
      --uploadFormat multi-language-json \
      --overwrite \
      --delete
      `);

    if (simpleLocalizeUploadCommand.exitCode !== 0)
    {
      console.error('💀 Failed to upload SimpleLocalize translations');
      const tmpFile = await Deno.makeTempFile();
      await Deno.writeTextFile(tmpFile, JSON.stringify(simpleLocalizeUploadCommand, null, 2));
      console.log(`
        Failed to upload SimpleLocalize translations. See ${tmpFile} for details.
      `);
      return simpleLocalizeUploadCommand.exitCode;
    }

    console.log(`
      📤 Uploaded changes to SimpleLocalize
    `);

    return 0;
  }

  return exitStatus;
}

/**
 Builds the final config from the defaults, any stored config, and environment variable overrides, and finally any command-line overrides. Note that this will prompt the user for missing values, or throw an error if `--dry-run` is specified and not all required values are present.
 */
async function buildConfig(): Promise<ArgsAndConfig>
{
  console.log(`
    🔬 Checking configuration...
  `);
  const args = parseArgs(Deno.args, argsDefinition);

  // The operation is not stored in the config, it depends solely on CLI args:
  let _isExport = args._.includes('export') && !args._.includes('import');
  let _isImport = args._.includes('import') && !args._.includes('export');

  if (!_isExport && !_isImport)
  {
    if (args.yes || args.dryRun)
    {
      throw new Error(
        'You must specify either --export or --import. (When using --yes or --dry-run, you must specify one of these options, as we do not interactively prompt for a choice.)',
      );
    }

    const answer = await Select.prompt({
      message: '    🔧 What do you want to do?',
      options: [
        { value: 'export', name: 'export (generate JSON and upload to SimpleLocalize)' },
        { value: 'import', name: 'import (download from SimpleLocalize and map changes to i18n files)' },
      ],
    });

    if (answer === 'export')
    {
      _isExport = true;
    }
    else if (answer === 'import')
    {
      _isImport = true;
    }
  }

  // Now we are done with "args-only" config, so lets init the full config (passing in the arg values we have), to get the full merged config. Only then can we detect if we have all the values we need.

  let _apiKey = args['api-key'];
  const _rootDir = args.root ?? Deno.cwd();
  const _fileExtension = args.extension || 'i18n.ts';

  const overrideConfig: Partial<InferBaseConfig<typeof defaultConfig>> = {};

  if (_apiKey)
  {
    overrideConfig['SimpleLocalize API key'] = _apiKey;
  }

  const config = await initConfig(appId, defaultConfig, overrideConfig);

  // Use the config to check if we have all the values we need
  _apiKey = config.get('SimpleLocalize API key')!;
  if (!_apiKey)
  {
    if (args.yes || args.dryRun)
    {
      throw new Error(
        'You must specify --api-key. (When using --yes or --dry-run, you must specify one of these options, as we do not interactively prompt for a choice.)',
      );
    }

    console.log(`
      🔑 No SimpleLocalize project API key found. You can specify your API key by using the --api-key argment, or by setting the SIMPLELOCALIZE_API_KEY environment variable before running this program, or by storing it in the local config file (NOTE: stored in plaintext), or by entering it interactively. What would you like to do?
    `);

    const answer = await Select.prompt({
      message: 'What would you like to do?',
      options: [
        { value: 'exit', name: 'Exit this program now' },
        { value: 'enter', name: 'Enter API key interactively, without storing' },
        { value: 'config', name: 'Store in config file (NOTE: stored in plaintext)' },
      ],
    });

    if (answer === 'enter' || answer === 'config')
    {
      _apiKey = await Input.prompt({
        message: 'Enter your SimpleLocalize API key:',
      });
      if (answer === 'config')
      {
        await config.set('SimpleLocalize API key', _apiKey);
      }
    }
    else
    {
      Deno.exit(1);
    }
  }

  return {
    help: args.help,
    yes: args.yes,
    dryRun: args.dryRun,
    export: _isExport,
    import: _isImport,
    root: _rootDir,
    extension: _fileExtension,
    apiKey: _apiKey,
  };
}
