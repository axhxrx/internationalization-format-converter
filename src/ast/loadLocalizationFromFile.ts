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

  const importResult = await tryImportingCode({ filePath: strippedTmpFile });

  if (!importResult.success)
  {
    console.error(`Failed to import file ${filePath}: ${Deno.inspect(importResult)}`);
    throw new Error(`Failed to import file ${filePath}: ${importResult.error?.message ?? 'unknown error'}`);
  }

  // Initial validation after stripping and first import
  if (!loadedModuleIsAcceptable(importResult.module))
  {
    console.error(`loadLocalizationFromFile: Invalid i18n structure after initial import: ${filePath}`, JSON.stringify(importResult.module));
    throw new Error(`loadLocalizationFromFile: Invalid i18n structure after initial import`);
  }

  // The reimportResult is what we'll actually use, as tryImportingCode can return a slightly different structure
  // (e.g. default export unwrapped) compared to a direct dynamic import if the original file had only a default export.
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
      `loadLocalizationFromFile(): Failed to reimport file ${strippedTmpFile}: the imported code is not a valid Localization module after reimport`,
    );
  }
  const bareModule: WhoKnows = reimportResult.module as WhoKnows;

  await Deno.remove(strippedTmpFile);

  // Recursively remove empty objects from the bare module before further processing
  removeEmptyObjectsRecursively(bareModule);

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

  const moduleToProcess = rootPropertyName != null
    ? { [rootPropertyName]: bareModule }
    : bareModule;
  
  // If, after wrapping, the entire moduleToProcess itself became an empty object (e.g. bareModule was {} and no rootPropertyName)
  // or if bareModule was {} and it's the only thing under rootPropertyName, then moduleToProcess might be like { root: {} }
  // We need to ensure the final `module` variable reflects the cleaned state.
  removeEmptyObjectsRecursively(moduleToProcess); 

  // Final check on the module that will be returned and stringified
  if (!loadedModuleIsAcceptable(moduleToProcess))
  {
    throw new Error(
      'loadLocalizationFromFile(): The final processed module is not a valid Localization module: invalid i18n structure\n\n',
      moduleToProcess,
    );
  }

  const json = JSON.stringify(moduleToProcess, null, 2);
  
  return { module: moduleToProcess, originalCode, code, json };
};

/**
 * Recursively removes properties from an object if their value is an empty object (`{}`).
 * This function mutates the passed object.
 */
function removeEmptyObjectsRecursively(obj: unknown): void
{
  if (typeof obj !== 'object' || obj === null)
  {
    return; // Not an object, or null
  }

  const currentObject = obj as Record<string, unknown>;
  for (const key in currentObject)
  {
    if (Object.prototype.hasOwnProperty.call(currentObject, key))
    {
      const value = currentObject[key];
      if (typeof value === 'object' && value !== null)
      {
        removeEmptyObjectsRecursively(value); // Recurse first
        // After recursion, check if the child object is now empty
        if (Object.keys(value).length === 0)
        {
          delete currentObject[key];
        }
      }
    }
  }
}

/**
 Returns true if `isLocalization()` returns true **or** if the module is an empty object 
 (which for our purposes means "empty localization" and is acceptable at certain stages).
 */
export function loadedModuleIsAcceptable(module: unknown): module is Localization<string>
{
  if (isLocalization(module))
  {
    return true;
  }
  // Allow an entirely empty object {} as acceptable at intermediate steps
  if (typeof module === 'object' && module !== null && Object.keys(module).length === 0)
  {
    return true;
  }
  return false;
}
