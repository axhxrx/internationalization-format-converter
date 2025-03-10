# CLAUDE.md - Internationalization Format Converter

## Build/Lint/Test Commands
- Run tests: `deno test`
- Run single test: `deno test test/filename.test.ts`
- Format code: Uses dprint (configured in dprint.jsonc)

## Code Style Guidelines
- **Imports**: Standard `import { name } from 'module'`
- **Naming**:
  - Functions: camelCase, descriptive, often with "OrThrow" suffix
  - Interfaces: PascalCase
  - Files: kebab-case.ts
  - Test files: name.test.ts
- **Types**: Strict TypeScript, well-documented interfaces, `as const` for literals
- **Error Handling**: Functions that can fail have "OrThrow" suffix with descriptive messages
- **Formatting**: 2-space indentation, no semicolons
- **Documentation**: JSDoc style comments
- **Patterns**: Async/await for asynchronous code

This is a Deno-based project for converting between different internationalization formats.