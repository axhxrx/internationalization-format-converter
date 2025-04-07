# @axhxrx/internationalization-format-converter

## WIP (!)

This library is a WIP hack for converting between TypeScript localization files (as defined by [@axhxrx/internationalization](https://jsr.io/@axhxrx/internationalization)) and JSON.

It's still at the "is this even workable?" ideation stage, so you probably shouldn't use it yet. 

The purpose here is to be able to use the TypeScript format defined by [@axhxrx/internationalization](https://jsr.io/@axhxrx/internationalization), but automate integrations with other services, which generally only support JSON. This library can (at least sometimes) convert the `.ts` format to JSON, and then update the original `.ts` file with the changes from newer JSON files.

If it proves workable, then this library will be further updated in the future. Until such time, here's some LLM spew about the current state of affairs:

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
deno run -RWE $MOD export path/to/file.i18n.ts output.json

# Import translations from JSON back to TypeScript
deno run -RWE $MOD import input.json path/to/file.i18n.ts

# Export with file path as the root identifier
deno run -RWE $MOD export path/to/file.i18n.ts output.json --derive

# Export with a custom root identifier
deno run -RWE $MOD export path/to/file.i18n.ts output.json --identifier=customName

# Preview changes without writing files (dry run)
deno run -RWE $MOD import input.json path/to/file.i18n.ts --dry-run
deno run -RWE $MOD export path/to/file.i18n.ts output.json --dry-run

# Display help
deno run -RWE $MOD help
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

## NOTE: Yoshimi & JSR vs the pink robots and dynamic imports

I had intended to publish this on jsr.io, but after developing the initial WIP version on my local machine, I published it and immediately learned that [JSR.io doesn't support dynamic imports](https://github.com/denoland/deno/discussions/26266). It rewrites imports to be static, and JSR-package-relative, which means we can't dynamically import arbitrary .ts files using Deno. That's sad, since that is actually central to the purpose of this library. But, there's an intergalactic-time-vortex kludge that we can use instead — using the `typescript` NPM package to compile the TypeScript code to JS in memory, then wrap it in a `var exports = {}; /* ... */ exports;` sandwich, and then use `eval()` to execute the code and get the exported values. 😐

## License

MIT

## Happenings

2025-04-14: Add hack WIP roundtrip export-import to/from SimpleLocalize SaaS (but this normally wouldn't be published yet, I'm pushing the dirty WIP so that we can invoke it in CI direct from JSR)
2025-04-07: Published version 0.0.5, still rough but usable in some cases
