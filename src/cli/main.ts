import { parseArgs } from '@std/cli';
import { batchExportWithOptions } from '../batch/batchExportWithOptions.ts';
import { batchImportWithOptions } from '../batch/batchImportWithOptions.ts';
import { exportToJSONFile } from '../convert/exportToJSONFile.ts';
import { importFromJSONFile } from '../convert/importFromJSONFile.ts';
import { logger } from '../util/Logger.ts';
import { printHelp } from './printHelp.ts';

/**
 The `main()` function

 @param testArgs Optional argument that can be a string or array of strings for testing CLI arguments
 */
export async function main(testArgs?: string | string[], useCwd?: string): Promise<number>
{
  let argsToUse: string[];

  const originalCwd = Deno.cwd();
  if (useCwd)
  {
    Deno.chdir(useCwd);
  }

  if (testArgs !== undefined)
  {
    // Handle test arguments
    if (typeof testArgs === 'string')
    {
      // Split string into array, respecting quoted arguments
      const regex = /[^\s"]+|"([^"]*)"/gi;
      argsToUse = [];
      let match;

      while ((match = regex.exec(testArgs)) !== null)
      {
        // If the match has a capturing group (quoted string), use that
        argsToUse.push(match[1] ? match[1] : match[0]);
      }
    }
    else
    {
      // Use the array as is
      argsToUse = testArgs;
    }
  }
  else
  {
    // Use real CLI args when not in test mode
    argsToUse = Deno.args;
  }

  const args = parseArgs(argsToUse, {
    boolean: ['derive', 'help', 'dry-run', 'dryRun', 'simple-localize', 'simpleLocalize'],
    string: ['identifier', 'ext'],
    collect: ['ext'],
    alias: {
      h: 'help',
      d: 'derive',
      i: 'identifier',
      s: 'simple-localize',
      l: 'limit',
      e: 'ext',
    },
  });

  // Normalize flags
  const dryRun = args['dry-run'] || args.dryRun;
  const simpleLocalizeFormat = args['simple-localize'] || args.simpleLocalize;

  const command = args._[0] as string;

  if (args.help || !command || !['export', 'import', 'help', 'batch-export', 'batch-import'].includes(command))
  {
    printHelp();
    Deno.chdir(originalCwd);
    return 5;
  }

  let exitStatus = 5;
  switch (command)
  {
    case 'help':
      printHelp();
      break;

    case 'export':
    {
      const tsFile = args._[1] as string;
      const jsonFile = args._[2] as string;

      if (!tsFile || !jsonFile)
      {
        logger.error('CLI', 'Error: Both TS file path and JSON file path are required for export command');
        printHelp();
        exitStatus = 1;
      }

      await exportToJSONFile(tsFile, jsonFile, {
        derive: args.derive,
        identifier: args.identifier,
        dryRun,
        simpleLocalizeFormat,
      });
      break;
    }

    case 'import':
    {
      const jsonFile = args._[1] as string;
      const tsFile = args._[2] as string;

      if (!jsonFile || !tsFile)
      {
        logger.error('CLI', 'Error: Both JSON file path and TS file path are required for import command');
        printHelp();
        exitStatus = 1;
      }

      await importFromJSONFile(jsonFile, tsFile, {
        dryRun,
        simpleLocalizeFormat,
      });
      break;
    }

    case 'batch-export':
    {
      const rootDir = args._[1] as string;
      const outputFile = args._[2] as string;

      if (!rootDir || !outputFile)
      {
        logger.error('CLI',
          'Error: Both root directory and output JSON file paths are required for batch-export command');
        printHelp();
        exitStatus = 1;
      }

      // Get file extensions to search for, default to .i18n.ts if not specified
      const fileExtensions = args.ext && (args.ext as string[]).length > 0
        ? args.ext as string[]
        : ['.i18n.ts'];

      const limit = args.limit ? Number(args.limit) : 0;

      exitStatus = await batchExportWithOptions({
        rootDir,
        outputFile,
        fileExtensions,
        dryRun,
        simpleLocalizeFormat,
        limit,
      });
      break;
    }

    case 'batch-import':
    {
      const jsonFile = args._[1] as string;
      const targetDir = args._[2] as string;

      if (!jsonFile || !targetDir)
      {
        logger.error('CLI',
          'Error: Both JSON file path and target directory path are required for batch-import command');
        printHelp();
        exitStatus = 1;
      }

      exitStatus = await batchImportWithOptions({
        jsonFile,
        targetDir,
        dryRun,
        simpleLocalizeFormat,
      });
      break;
    }
  }
  if (useCwd)
  {
    Deno.chdir(originalCwd);
  }

  if (exitStatus !== 0)
  {
    console.error('💀 FAILED. There is probably error output above that may yield a clue. Exit status:', exitStatus);
  }
  else
  {
    console.log('✅ Success. Exit status:', exitStatus);
  }

  return exitStatus;
}

if (import.meta.main)
{
  main();
}
