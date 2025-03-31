/**
 Print help message
 */
export function printHelp()
{
  console.log(`@axhxrx/internationalization-format-converter

A tool for converting between TypeScript (*.i18n.ts) localization files and JSON.

USAGE:
  deno run -RWE mod.ts [COMMAND] [OPTIONS]

COMMANDS:
  export <ts_file> <json_file>      Export a *.i18n.ts file to JSON
  import <json_file> <ts_file>      Import translations from JSON to a *.i18n.ts file
  batch-export <root_dir> <json_file>  Export multiple *.i18n.ts files to a single JSON file
  batch-import <json_file> <target_dir> Import translations from JSON to multiple *.i18n.ts files
  help                              Display this help message

OPTIONS:
  --derive                          When exporting, derive top-level property names from file paths
  --identifier=<n>                  When exporting, use a custom identifier for the root level
  --dry-run, --dryRun               Preview changes without writing files
  --simple-localize, --simpleLocalize   Use SimpleLocalize JSON format with locale keys at root level
  --ext=<extension>                 When batch-exporting, specify file extension(s) to include (default: .i18n.ts)
                                    Can be specified multiple times for different extensions

EXAMPLES:
  deno run -RWE mod.ts export src/locales/foo.i18n.ts foo.json
  deno run -RWE mod.ts export src/locales/foo.i18n.ts foo.json --derive
  deno run -RWE mod.ts export src/locales/foo.i18n.ts foo.json --identifier=customName
  deno run -RWE mod.ts export src/locales/foo.i18n.ts foo.json --simple-localize
  deno run -RWE mod.ts import foo.json src/locales/foo.i18n.ts
  deno run -RWE mod.ts import foo.json src/locales/foo.i18n.ts --dry-run
  deno run -RWE mod.ts import foo.json src/locales/foo.i18n.ts --simple-localize
  deno run -RWE mod.ts batch-export src/locales output.json
  deno run -RWE mod.ts batch-export src/locales output.json --ext=.i18n.ts --ext=.locale.ts
  deno run -RWE mod.ts batch-import output.json src/locales
  deno run -RWE mod.ts batch-import output.json src/locales --simple-localize
`);
}
