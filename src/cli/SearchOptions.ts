/**
 The options control how searching for files to process works. (It's a simplified subset of `WalkOptions` from `@std/fs`.)
 */
export interface SearchOptions
{
  fileExtensions: string[];
  skip: RegExp[];
  // TODO: Might add match: RexExp[] later to match walk()'s WalkOptions, but would need to convert globs to RegExp for easy CLI use. For now, skip it.
}
