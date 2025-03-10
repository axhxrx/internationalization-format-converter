import { parse } from "jsr:@std/flags";
import { join, basename, dirname } from "@std/path";
import { loadLocalizationFromFile } from "./loadLocalizationFromFile.ts";
import { importJSONFileOrThrow } from "./importJSONFileOrThrow.ts";
import { Conversion } from "./Conversion.ts";

// Print help message
function printHelp() {
  console.log(`@axhxrx/internationalization-format-converter

A tool for converting between TypeScript (*.i18n.ts) localization files and JSON.

USAGE:
  deno run -RW mod.ts [COMMAND] [OPTIONS]

COMMANDS:
  export <ts_file> <json_file>      Export a *.i18n.ts file to JSON
  import <json_file> <ts_file>      Import translations from JSON to a *.i18n.ts file
  help                              Display this help message

OPTIONS:
  --derive                          When exporting, derive property names from file paths
  --identifier=<name>               When exporting, use a custom identifier for the root level

EXAMPLES:
  deno run -RW mod.ts export src/locales/foo.i18n.ts foo.json
  deno run -RW mod.ts export src/locales/foo.i18n.ts foo.json --derive
  deno run -RW mod.ts export src/locales/foo.i18n.ts foo.json --identifier=customName
  deno run -RW mod.ts import foo.json src/locales/foo.i18n.ts
`);
}

async function exportToJSON(tsFile: string, jsonFile: string, options: { derive?: boolean; identifier?: string }) {
  try {
    let rootLevelIdentifier: string | { derive: true } | undefined;
    
    if (options.derive) {
      rootLevelIdentifier = { derive: true };
    } else if (options.identifier) {
      rootLevelIdentifier = options.identifier;
    }
    
    const result = await loadLocalizationFromFile(tsFile, rootLevelIdentifier);
    await Deno.writeTextFile(jsonFile, result.json);
    
    console.log(`Successfully exported ${tsFile} to ${jsonFile}`);
  } catch (error) {
    console.error(`Error exporting ${tsFile} to JSON:`, error.message);
    Deno.exit(1);
  }
}

async function importFromJSON(jsonFile: string, tsFile: string) {
  try {
    const updatedTsCode = await importJSONFileOrThrow(jsonFile, tsFile);
    await Deno.writeTextFile(tsFile, updatedTsCode);
    
    console.log(`Successfully imported changes from ${jsonFile} to ${tsFile}`);
  } catch (error) {
    console.error(`Error importing from ${jsonFile}:`, error.message);
    Deno.exit(1);
  }
}

async function main() {
  const args = parse(Deno.args, {
    boolean: ["derive", "help"],
    string: ["identifier"],
    alias: {
      h: "help",
      d: "derive",
      i: "identifier",
    },
  });

  const command = args._[0] as string;
  
  if (args.help || !command || !["export", "import", "help"].includes(command)) {
    printHelp();
    return;
  }

  switch (command) {
    case "help":
      printHelp();
      break;
    
    case "export": {
      const tsFile = args._[1] as string;
      const jsonFile = args._[2] as string;
      
      if (!tsFile || !jsonFile) {
        console.error("Error: Both TS file and JSON file paths are required for export command");
        printHelp();
        Deno.exit(1);
      }
      
      await exportToJSON(tsFile, jsonFile, {
        derive: args.derive,
        identifier: args.identifier,
      });
      break;
    }
    
    case "import": {
      const jsonFile = args._[1] as string;
      const tsFile = args._[2] as string;
      
      if (!jsonFile || !tsFile) {
        console.error("Error: Both JSON file and TS file paths are required for import command");
        printHelp();
        Deno.exit(1);
      }
      
      await importFromJSON(jsonFile, tsFile);
      break;
    }
  }
}

if (import.meta.main) {
  main();
}

// Export public API
export { Conversion };
export { loadLocalizationFromFile } from "./loadLocalizationFromFile.ts";
export { importJSONFileOrThrow, importJSONOrThrow } from "./importJSONFileOrThrow.ts";