import { assertEquals } from 'jsr:@std/assert';

import { formatTypeScriptCode } from '../src/ast/formatTypeScriptCode.ts';

Deno.test('formatTypeScriptCode formats TypeScript code correctly', async () =>
{
  const input = `function hello(name:string)    {
    console.log("Hello " + name);
    return {
        greeting: "Hello",
        name: name
    };
}`;

  const expected = `function hello(name: string)
{
  console.log('Hello ' + name);
  return {
    greeting: 'Hello',
    name: name,
  };
}

`;

  const formatted = await formatTypeScriptCode(input);
  assertEquals(formatted.trim(), expected.trim());
});

Deno.test('formatTypeScriptCode handles multiline comments', async () =>
{
  const input = `/**
    * This is a test function
    * with multiple lines
    * in its comment
    */
function test() {
    return true;
}`;

  const expected = `/**
 * This is a test function
 * with multiple lines
 * in its comment
 */
function test()
{
  return true;
}

`;

  const formatted = await formatTypeScriptCode(input);
  assertEquals(formatted.trim(), expected.trim());
});
