import * as ts from 'typescript';

interface DiffResult {
  [key: string]: {
    left?: string;
    right?: string;
  };
}

export function applyDifferencesUsingAST(diff: DiffResult, tsCode: string): string {
  const sourceFile = ts.createSourceFile('temp.ts', tsCode, ts.ScriptTarget.Latest, true);

  // Map to hold nodes to be modified and their new values
  const modifications = new Map<ts.Node, string>();

  // Helper function to get the text of a property name
  function getPropertyNameText(name: ts.PropertyName): string {
    if (
      ts.isIdentifier(name)
      || ts.isStringLiteral(name)
      || ts.isNumericLiteral(name)
    ) {
      return name.text;
    } else {
      throw new Error(`Unsupported property name kind: ${ts.SyntaxKind[name.kind]}`);
    }
  }

  // Find the appropriate exported constant
  function findExportedConstVariable(): ts.VariableDeclaration | undefined {
    const exportedConsts: ts.VariableDeclaration[] = [];

    ts.forEachChild(sourceFile, node => {
      if (ts.isVariableStatement(node)) {
        const isExported = node.modifiers?.some(mod => mod.kind === ts.SyntaxKind.ExportKeyword);
        if (isExported) {
          node.declarationList.declarations.forEach(decl => {
            if (ts.isVariableDeclaration(decl)) {
              exportedConsts.push(decl);
            }
          });
        }
      }
    });

    if (exportedConsts.length === 1) {
      return exportedConsts[0];
    } else if (exportedConsts.length > 1) {
      // Look for a const named 'i18n'
      const i18nConst = exportedConsts.find(
        decl => ts.isIdentifier(decl.name) && decl.name.text === 'i18n'
      );
      if (i18nConst) {
        return i18nConst;
      } else {
        throw new Error('Multiple exported constants found, but none named \'i18n\'.');
      }
    } else {
      throw new Error('No exported constants found.');
    }
  }

  // Recursive function to traverse the AST and collect modifications
  function findAndModify(
    node: ts.Node,
    path: string[],
    currentPath: string[] = []
  ): void {
    if (path.length === 0) {
      // We have reached the target node
      if (ts.isStringLiteral(node)) {
        const diffKey = currentPath.join('.');
        const diffEntry = diff[diffKey];
        if (diffEntry && diffEntry.right !== undefined) {
          modifications.set(node, diffEntry.right);
        } else {
          throw new Error(`No right value for key ${diffKey}`);
        }
      } else {
        throw new Error(`Expected string literal at path ${currentPath.join('.')}`);
      }
      return;
    }

    const [currentKey, ...remainingPath] = path;

    if (ts.isObjectLiteralExpression(node)) {
      // Match object properties
      const property = node.properties.find(prop => {
        if (ts.isPropertyAssignment(prop)) {
          const propName = getPropertyNameText(prop.name);
          return propName === currentKey;
        }
        return false;
      }) as ts.PropertyAssignment | undefined;

      if (property && property.initializer) {
        findAndModify(property.initializer, remainingPath, [...currentPath, currentKey]);
      } else {
        throw new Error(`Path not found in code: ${[...currentPath, currentKey].join('.')}`);
      }
    } else {
      // Continue traversing other child nodes
      ts.forEachChild(node, child => findAndModify(child, path, currentPath));
    }
  }

  // Find the exported constant to start from
  const exportedConst = findExportedConstVariable();

  if (!exportedConst || !exportedConst.initializer) {
    throw new Error('Exported constant has no initializer.');
  }

  // Start traversal for each key in the diff
  for (const key of Object.keys(diff)) {
    const path = key.split('.'); // Do not include the variable name
    findAndModify(exportedConst.initializer, path);
  }

  // Transformer to apply the collected modifications
  const transformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
    function visit(node: ts.Node): ts.Node {
      if (modifications.has(node)) {
        const newValue = modifications.get(node)!;
        // Create a new StringLiteral node with the new value
        const newStringLiteral = ts.factory.createStringLiteral(newValue);
        return newStringLiteral;
      }
      return ts.visitEachChild(node, visit, context);
    }
    return ts.visitNode(rootNode, visit);
  };

  // Apply the transformations
  const result = ts.transform(sourceFile, [transformer]);
  const transformedSourceFile = result.transformed[0];

  // Use the default printer
  let printedCode = ts.createPrinter().printFile(transformedSourceFile as ts.SourceFile);

  // Post-process to unescape Unicode sequences
  printedCode = unescapeUnicodeSequences(printedCode);

  // Replace double-quoted .right values with single-quoted versions
  printedCode = replaceRightValuesWithSingleQuotes(printedCode, diff);

  return printedCode;
}

// Function to unescape Unicode sequences in a string
function unescapeUnicodeSequences(str: string): string {
  return str.replace(/\\u([\dA-Fa-f]{4})|\\u\{([\dA-Fa-f]+)\}/g, (_, g1, g2) => {
    const codePoint = parseInt(g1 || g2, 16);
    return String.fromCodePoint(codePoint);
  });
}

// Function to replace double-quoted .right values with single-quoted versions
function replaceRightValuesWithSingleQuotes(code: string, diff: DiffResult): string {
  for (const key of Object.keys(diff)) {
    const { right } = diff[key];
    if (right !== undefined) {
      // Escape special regex characters in the right value
      const escapedValue = right.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      // Create a regex to match the double-quoted string
      const regex = new RegExp(`"${escapedValue.replace(/"/g, '\\"')}"`, 'g');
      // Replace with single-quoted string, escaping any single quotes in the value
      const singleQuotedValue = `'${right.replace(/'/g, '\\\'')}'`;
      code = code.replace(regex, singleQuotedValue);
    }
  }
  return code;
}

// Example usage:
const diff: DiffResult = {
  'favorite.drink.alcoholic.en': { left: 'wine', right: 'whiskey' },
  'favorite.drink.alcoholic.ja': { left: 'ワイン', right: 'ウイスキー' },
  'favorite.drink.nonAlcoholic.en': { left: 'milk', right: 'water' },
  'favorite.drink.nonAlcoholic.ja': { left: '牛乳', right: '水' },
};

const tsCode = `
import { Foo } from './foo';

export const baz = {
  /**
   Favorite food and drink.
   */
  favorite: {
    food: {
      en: 'pizza',
      ja: 'ピザ',
    },
    drink: {
      alcoholic: {
        en: 'wine',
        ja: 'ワイン',
      },
      nonAlcoholic: {
        en: 'milk',
        ja: '牛乳',
      },
    },
  },
} as const;
`;

const newTsCode = applyDifferencesUsingAST(diff, tsCode);
console.log(newTsCode);

/*
Expected output:

export const baz = {
    favorite: {
        food: {
            en: 'pizza',
            ja: 'ピザ',
        },
        drink: {
            alcoholic: {
                en: 'whiskey',
                ja: 'ウイスキー',
            },
            nonAlcoholic: {
                en: 'water',
                ja: '水',
            },
        },
    },
} as const;
*/
