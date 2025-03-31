import {
  IndentationText,
  NewLineKind,
  Project,
  QuoteKind,
  type SourceFile,
} from '@ts-morph/ts-morph';

/**
 Create `ts-morph` project and source file from the given TypeScript source code. */
export function createTsProject(
  tsSourceCode: string,
  manipulationSettings = {
    indentationText: IndentationText.TwoSpaces,
    quoteKind: QuoteKind.Single,
    newLineKind: NewLineKind.LineFeed,
    insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: true,
  },
): { project: Project; sourceFile: SourceFile }
{
  const project = new Project({
    useInMemoryFileSystem: true,
    manipulationSettings,
  });

  const sourceFile = project.createSourceFile('temp.ts', tsSourceCode);
  return { project, sourceFile };
}
