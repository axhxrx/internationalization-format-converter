import { dprintConfig } from '@axhxrx/dprint-config';
import { createFromWasmModule, type Formatter, type GlobalConfiguration } from '@dprint/formatter';

let tsFormatter: Formatter | undefined;

/**
 Lazily instantiate the TypeScript formatter.
 */
const getFormatter = async () =>
{
  if (tsFormatter === undefined)
  {
    // Get the URL to reference the WASM file, as we need the raw WebAssembly.Module
    const wasmUrl = new URL('./typescript-0.93.3.wasm', import.meta.url);

    const globalConfig: GlobalConfiguration = {
      indentWidth: 2,
      useTabs: false,
    };
    // Fetch and instantiate the WASM module
    const wasmResponse = await fetch(wasmUrl);
    const wasmBytes = await wasmResponse.arrayBuffer();
    const wasmModule = await WebAssembly.compile(wasmBytes);

    tsFormatter = createFromWasmModule(wasmModule);

    tsFormatter.setConfig(globalConfig, {
      ...dprintConfig.default.typescript,
    });
  }
  return tsFormatter;
};

/**
 Formats the code using our standard dprint configuration, but ALSO preprocesses it to convert 4 spaces to 2. This is because dprint won't reformat text inside of multiline comment blocks.

 The reason we need this is mainly to make it less error-prone to write tests that assert that various outputs match our expected results. We want to be able to create fixture files and save them normally, without having to worry about formatting differences between our editor defaults and the not-very-configurable TypeScript Compiler API formatting options.
 */
export const formatTypeScriptCode = async (code: string) =>
{
  const preprocessed = code.replaceAll('    ', '  ');
  const f = await getFormatter();
  const result = f.formatText({ fileText: preprocessed, filePath: 'fake.ts' });
  return result;
};
