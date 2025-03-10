# Internationalization Format Converter

A tool for converting between TypeScript (*.i18n.ts) localization files and JSON.

## Features

- Export *.i18n.ts files to JSON format for use with localization services
- Import updated translations from JSON back to *.i18n.ts files
- Support for multiple files with custom or derived identifiers
- Preserves code style and formatting when updating TypeScript files

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/internationalization-format-converter.git
cd internationalization-format-converter
```

## Usage

### CLI

The tool provides a command-line interface for converting between formats:

```bash
# Export a TypeScript file to JSON
deno run -RW mod.ts export path/to/file.i18n.ts output.json

# Import translations from JSON back to TypeScript
deno run -RW mod.ts import input.json path/to/file.i18n.ts

# Export with file path as the root identifier
deno run -RW mod.ts export path/to/file.i18n.ts output.json --derive

# Export with a custom root identifier
deno run -RW mod.ts export path/to/file.i18n.ts output.json --identifier=customName

# Display help
deno run -RW mod.ts help
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
deno test
```

## License

Copyright &copy; 2025 axhxrx