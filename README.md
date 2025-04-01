# @axhxrx/internationalization-format-converter

This library is a WIP hack for converting between TypeScript localization files (as defined by [@axhxrx/internationalization](https://jsr.io/@axhxrx/internationalization)) and JSON.

It's still at the is-it-workable ideation stage, so you probably shouldn't use it yet. 

The purpose here is to be able to use the TypeScript format defined by [@axhxrx/internationalization](https://jsr.io/@axhxrx/internationalization), but automate integrations with other services, which generally only support JSON. This library can (at least sometimes) convert the `.ts` format to JSON, and then update the original `.ts` file with the changes from newer JSON files.

If it proves workable, then this library will be further updated in the future. Until such time, here's some LLM spew about the current state of affairs:

## Requires `--unstable-sloppy-imports` flag

NOTE: Because this library uses Deno's capacity to import arbitrary files, it requires the `--unstable-sloppy-imports` flag if you want to use it with TypeScript files that don't use non-insane imports. (That is, if your imports within the TypeScript code omit the ".ts" file extension, as is still the prevailing practice in 2025 with Node.js projects).

----

# Internationalization Format Converter

A tool for converting between TypeScript (*.i18n.ts) localization files and JSON.

## Features

- Export *.i18n.ts files to JSON format for use with localization services
- Import updated translations from JSON back to *.i18n.ts files
- Support for multiple files with custom or derived identifiers
- Preserves code style and formatting when updating TypeScript files

## Usage

### CLI

The tool provides a command-line interface for converting between formats:

```bash

export MOD="https://jsr.io/@axhxrx/internationalization-format-converter/0.0.1/mod.ts"

# Export a TypeScript file to JSON
deno run -RWE --unstable-sloppy-imports $MOD export path/to/file.i18n.ts output.json

# Import translations from JSON back to TypeScript
deno run -RWE --unstable-sloppy-imports $MOD import input.json path/to/file.i18n.ts

# Export with file path as the root identifier
deno run -RWE --unstable-sloppy-imports $MOD export path/to/file.i18n.ts output.json --derive

# Export with a custom root identifier
deno run -RWE --unstable-sloppy-imports $MOD export path/to/file.i18n.ts output.json --identifier=customName

# Preview changes without writing files (dry run)
deno run -RWE --unstable-sloppy-imports $MOD import input.json path/to/file.i18n.ts --dry-run
deno run -RWE --unstable-sloppy-imports $MOD export path/to/file.i18n.ts output.json --dry-run

# Display help
deno run -RWE --unstable-sloppy-imports $MOD help
```

### API

You can also use the library programmatically:

```typescript
import { loadLocalizationFromFile, importJSONFileOrThrow } from "@axhxrx/internationalization-format-converter";

// Export to JSON
const result = await loadLocalizationFromFile("path/to/file.i18n.ts", { derive: true });
await Deno.writeTextFile("output.json", result.json);

// Import from JSON
const updatedTsCode = await importJSONFileOrThrow("input.json", "path/to/file.i18n.ts");
await Deno.writeTextFile("path/to/file.i18n.ts", updatedTsCode);
```

## How It Works

1. **Export**: Loads TypeScript files, strips imports, and converts to JSON
2. **Import**: Compares JSON with original TypeScript, identifies differences, and applies them using AST manipulation

## Development

```bash
# Run tests
deno test --allow-read --allow-write --allow-env --unstable-sloppy-imports
```

## License

MIT