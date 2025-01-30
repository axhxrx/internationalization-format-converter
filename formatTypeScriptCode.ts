/**
 Does **minimal** formatting of TypeScript code, namely just changing 4-space indentation to 2-space indentation.

 FIXME: We can probably just delete this, unless it gets the complicated.
 */
export const formatTypeScriptCode = (code: string) =>
{
  const result = code.replaceAll('    ', '  ');
  return result;
};
