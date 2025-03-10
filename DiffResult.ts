/**
 The `DiffResult` interface represents the result of a diff operation on two similar objects. This isn't a generic or general-purpose diff result. It is specifically for diffing an `I18nDef` (a *.i18n.ts file, in our convention) against some kinds of lower-resolution representations of the same data. E.g. a JSON file, or some other external system integration format.

 We might add a metadata field to this interface in the future, to indicate the source of the diff, and perhaps the context in which it was generated. But for now it is super simple.

 NOTE: When applying to diff, the `right` value is the new value, and the `left` value is the old value. (Might be renamed in the future to better reflect that.)
 */
export interface DiffResult {
  [key: string]: {
    left?: string;
    right?: string;
  };
}
