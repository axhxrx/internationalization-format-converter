import { isLocalization, type Localization } from '@axhxrx/internationalization';
import { relative } from '@std/path';
import { stripImports } from './stripImports.ts';
import { tryImportingCode } from './tryImportingCode.ts';

// deno-lint-ignore no-explicit-any
type WhoKnows = Record<string, any>;

/**
 Dynamically imports the TypeScript code from the specified `sourceCode` (which should be the text content of a `Localization` as would be read from a `.ts` file), and throws an error if it is not valid, otherwise returns the i18n definition. Here "valid" means not only valid TypeScript, but valid from the perspective of the rules for `Localization` (as defined by []`@axhxrx/internationalization`](https://jsr.io/@axhxrx/internationalization))

 You can therefore assume that if this method does not throw, the result can be serialized to JSON with `JSON.stringify()`, and it appears to be a valid `Localization` object (even though we can't know the `Locales` generic type parameter here, so its a loose check).

 Note: This function has the side effect of writing the code to a temporary file, which is then deleted.

 @param sourceCode The TypeScript code to import — will be written to a temp file an imported.

 @throws {Error} If the TypeScript code is not valid or the format is incorrect.

 FIXME: This should really use a result type instead of throwing, for consistency with `tryImportingCode()` and just general convenience.
 */
export const loadLocalizationFileContentsOrThrow = async (
  sourceCode: string,
  rootLevelIdentifier?: string,
): Promise<{
  module: WhoKnows;
  originalCode: string;
  code: string;
  json: string;
}> =>
{
  const tmpFile = await Deno.makeTempFile({ suffix: '.ts' });
  await Deno.writeTextFile(tmpFile, sourceCode);
  const result = await loadLocalizationFromFileOrThrow(tmpFile, rootLevelIdentifier);
  await Deno.remove(tmpFile);
  return result;
};

/**
 Loads a `Localization` (a set of translations defined in a specific kind of TypeScript file as defined by `@axhxrx/internationalization`) from a file on disk. This loads the set of translations and a bunch of metadata, which is an intermediate representation of the `Localization` object, and which can then be used to generate some type of output format (e.g. JSON).

 Dynamically imports the TypeScript code from the specified path, and throws an error if it is not valid, otherwise returns the i18n definition. Here "valid" means not only valid TypeScript, but valid from the perspective of the rules for `Localization`.

 You can therefore assume that if this method does not throw, the result can be serialized to JSON with `JSON.stringify()`, and it appears to be a valid `Localization` object as defined by `@axhxrx/internationalization` (even though we can't know the `Locales` generic type parameter here, so its a loose check).

 For this we use Deno's extremely convenient ability to just import the .ts file — because that is just simpler than trying to use the TS AST ourselves. We *could* do that but I don't think it makes sense — even if we moved off Deno, I think Bun can do that or whateverr else we moved to **should** be able to.

 We should avoid using AST processing when not warranted. What we are doing here is simple.

 @param path The path to the TypeScript file to import

 @param rootLevelIdentifier The identifier to use for the root level of the i18n definition. This is important when dealing with multiple `Localization` files and generating a single JSON file, because you need some kind of root-level property name to map to each file. You may specify any arbitrary string, or `{derive: true}` to have the converter automatically derive a name based on the file path relative to the working directory.

 @throws {Error} If the TypeScript code is not valid or the format is incorrect.
 */
export const loadLocalizationFromFileOrThrow = async (
  path: string,
  rootLevelIdentifier?: string | { derive: true },
): Promise<{ module: WhoKnows; originalCode: string; code: string; json: string }> =>
{
  const filePath = path;

  const originalCode = await Deno.readTextFile(filePath);

  const code = await stripImports(originalCode);
  const strippedTmpFile = await Deno.makeTempFile({ suffix: '.ts' });
  await Deno.writeTextFile(strippedTmpFile, code);

  // Once we have stripped the imports, we can import the code using Deno just as a sanity-check. (We could not import it using Deno without stripping the imports first, though, because the code might use monorepo-specific imports that Deno doesn't know about.)
  const importResult = await tryImportingCode({ filePath: strippedTmpFile });

  if (!importResult.success)
  {
    console.error(`Failed to import file ${filePath}: ${Deno.inspect(importResult)}`);
    throw new Error(`Failed to import file ${filePath}: ${importResult.error?.message ?? 'unknown error'}`);
  }

  if (!loadedModuleIsAcceptable(importResult.module))
  {
    console.error(`loadLocalizationFromFile: Invalid i18n structure: ${filePath}`, JSON.stringify(importResult.module));
    throw new Error(`loadLocalizationFromFile: Invalid i18n structure`);
  }

  const reimportResult = await tryImportingCode({ filePath: strippedTmpFile });
  if (!reimportResult.success)
  {
    console.error(
      `loadLocalizationFromFile():Failed to generate valid code when processing ${path}: the generated code is invalid in file: ${strippedTmpFile}: ${reimportResult}`,
    );
    throw new Error(`Failed to reimport file ${strippedTmpFile}: ${reimportResult.error?.message ?? 'unknown error'}`);
  }

  if (!loadedModuleIsAcceptable(reimportResult.module))
  {
    throw new Error(
      `loadLocalizationFromFile(): Failed to reimport file ${strippedTmpFile}: the imported code is not a valid Localization module`,
    );
  }
  const bareModule: Localization<string> = reimportResult.module as Localization<string>;

  await Deno.remove(strippedTmpFile);

  let rootPropertyName: string | undefined = undefined;
  if (typeof rootLevelIdentifier === 'object' && rootLevelIdentifier.derive)
  {
    const filePathRelativeToCwd = relative(Deno.cwd(), filePath);
    rootPropertyName = filePathRelativeToCwd;
  }
  else if (typeof rootLevelIdentifier === 'string')
  {
    rootPropertyName = rootLevelIdentifier;
  }

  const module = rootPropertyName != null
    ? { [rootPropertyName]: bareModule }
    : bareModule;

  const json = JSON.stringify(module, null, 2);

  if (!loadedModuleIsAcceptable(module))
  {
    throw new Error(
      'loadLocalizationFromFile(): The derived result is not a valid Localization module: invalid i18n structure\n\n',
      module,
    );
  }
  return { module, originalCode, code, json };
};

/**
 Returns true if `isLocalization()` returns true **or** if the module is an empty object (which for our purposes means "empty localization")
 */
export function loadedModuleIsAcceptable(module: unknown): module is Localization<string>
{
  const _isLocalization = isLocalization(module);
  if (_isLocalization)
  {
    return true;
  }
  if (typeof module !== 'object' || module === null)
  {
    return false;
  }
  let json: string | undefined;
  try
  {
    json = JSON.stringify(module, null, 2);
  }
  catch (_error)
  {
    return false;
  }
  if (json === '{}')
  {
    return true;
  }

  // Pathological case that sometimes happens in complex re-export situations:
  // {"plan01sESim":{},"planP1ESim":{},"planX1ESim":{},"planUsEsim":{},"planX2Esim":{},"i18n":{"plans":{}},"i18nESim":{"plans":{"plan01s":{},"plan-US":{},"planP1":{},"planX1":{},"planX2":{}}}}

  const everyLeafNodeIsEmptyObject = everyLeafIsEmptyObject(JSON.parse(json!));
  return everyLeafNodeIsEmptyObject;
}

/*
 * Recursively checks if every leaf node in the object is an empty object ({}).
 */
function everyLeafIsEmptyObject(obj: unknown): boolean
{
  if (typeof obj !== 'object' || obj === null)
  {
    // Primitive value, not an empty object
    return false;
  }

  const keys = Object.keys(obj);
  if (keys.length === 0)
  {
    // This is an empty object (leaf)
    return true;
  }

  // For each property, recurse
  return keys.every(key => everyLeafIsEmptyObject((obj as Record<string, unknown>)[key]));
}
