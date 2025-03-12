import type {
  Expression,
  ObjectLiteralExpression,
  StringLiteral,
  VariableStatement,
} from '@ts-morph/ts-morph';
import {
  IndentationText,
  NewLineKind,
  Project,
  QuoteKind,
  SyntaxKind,
} from '@ts-morph/ts-morph';
import type { DiffResult } from './DiffResult.ts';

function getExportedVariableNamesAndValues(
  sourceFile: ReturnType<Project['createSourceFile']>,
): Array<{ name: string; value: Expression | undefined }>
{
  // Find all exported VariableStatements
  const exportedVars = sourceFile
    .getVariableStatements()
    .filter(stmt => stmt.isExported());

  // Collect each variable's name and initializer
  const results: Array<{ name: string; value: Expression | undefined }> = [];

  exportedVars.forEach((stmt: VariableStatement) =>
  {
    stmt.getDeclarations().forEach((decl) =>
    {
      results.push({
        name: decl.getName(),
        value: decl.getInitializer(), // could be undefined if no initializer
      });
    });
  });

  return results;
}

/**
 Given a `DiffResult` and a string containing TypeScript code for an *.i18n.ts file, this function applies the differences to the code using the TypeScript AST. It returns the modified code as a string — suitable for using as the content of a *.i18n.ts file.

 To make this work with minimal formatting changes, we use the TypeScript AST to modify the code, but we do that through `ts-morph` for this because using the TypeScript compiler directly makes it hard to avoid unwanted formatting changes.

 This function throws an error if the code is not valid or the format is incorrect or any other thing goes wrong.
 */
export function applyDifferencesUsingASTOrThrow(diff: DiffResult, tsCode: string): string
{
  const project = new Project({
    useInMemoryFileSystem: true,
    manipulationSettings: {
      indentationText: IndentationText.TwoSpaces, // Adjust to match your code's indentation
      quoteKind: QuoteKind.Single, // Use single quotes
      newLineKind: NewLineKind.LineFeed, // Use '\n' for new lines
      insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: true,
    },
  });

  // Create a source file in memory
  const sourceFile = project.createSourceFile('temp.ts', tsCode);

  // Find the exported constants
  const exportedConsts = sourceFile.getVariableStatements().filter(stmt => stmt.isExported());

  const exportedNamesAndValues = getExportedVariableNamesAndValues(sourceFile);

  console.log(exportedNamesAndValues);

  // HERE I NEED TO FIGURE OUT THE NAMES OF ALL EXPORTED VARIABLES
  // diff is like:
  // {
  //   "foo.name.en": { left: "Mason", right: "Boatie McBoatface" },
  //   "foo.name.ja": { left: "メイソン", right: "ボーティー マックボートフェイス" }
  // }

  // exportedNamesAndValues is like:
  // [{name: 'foo', value: AsExpression}]

  for (const exportedConst of exportedConsts)
  {
    console.log('exportedConst', exportedConst);

    const declarations = exportedConst.getDeclarations();
    console.log('declarations', declarations);

    const declaration = declarations[0];
    console.log('declaration', declaration);

    const name = declaration.getName();
    console.log('name', name);

    const initializer = declaration.getInitializer();
    console.log('initializer', initializer);

    if (!initializer)
    {
      console.error('Exported constant has no initializer.');
      throw new Error('Exported constant has no initializer.');
    }

    const unwrappedInitializer = unwrapExpression(initializer);

    // Unwrap the exported constant initializer
    // exportedConstInitializer = unwrapExpression(exportedConstInitializer);

    const objectLiteralExpression = unwrappedInitializer.asKind(SyntaxKind.ObjectLiteralExpression);
    console.log('objectLiteralExpression', objectLiteralExpression);

    if (!objectLiteralExpression)
    {
      throw new Error('Exported constant initializer is not an object literal.');
    }

    const objectLiteral = objectLiteralExpression as ObjectLiteralExpression;
    console.log('objectLiteral', objectLiteral);

    for (const [keyPath, leftRight] of Object.entries(diff))
    {
      if (!keyPath.startsWith(name + '.'))
      {
        continue;
      }
      const innerKeyPath = keyPath.slice(name.length + 1);
      console.log('innerKeyPath', innerKeyPath);
      console.log('leftRight', leftRight);

      if (!leftRight.right)
      {
        throw new Error(`No right value found for key: ${keyPath}`);
      }

      findAndModify(objectLiteral, innerKeyPath.split('.'), leftRight.right);
    }
  }

  // Function to unwrap AsExpressions and TypeAssertions
  function unwrapExpression(expr: Expression): Expression
  {
    while (
      expr
      && (expr.getKind() === SyntaxKind.AsExpression || expr.getKind() === SyntaxKind.TypeAssertionExpression)
    )
    {
      expr = (expr as any).getExpression();
    }
    return expr;
  }

  // Function to recursively find and modify a string literal at the given path
  function findAndModify(
    objExpr: ObjectLiteralExpression,
    path: string[],
    newValue: string,
  ): void
  {
    if (path.length === 0) return;

    const [currentKey, ...remainingPath] = path;
    const property = objExpr.getProperty(currentKey);

    if (!property || !property.asKind(SyntaxKind.PropertyAssignment))
    {
      throw new Error(`Path not found in code: ${currentKey}`);
    }

    const prop = property as any;
    const initializer = prop.getInitializer && prop.getInitializer();

    if (!initializer)
    {
      throw new Error(`Property '${currentKey}' has no initializer.`);
    }

    const unwrappedInitializer = unwrapExpression(initializer);

    if (remainingPath.length === 0)
    {
      if (unwrappedInitializer && unwrappedInitializer.asKind(SyntaxKind.StringLiteral))
      {
        const stringLiteral = unwrappedInitializer as StringLiteral;
        stringLiteral.setLiteralValue(newValue);
        stringLiteral.formatText({ indentSize: 4 });
      }
      else
      {
        throw new Error(`Expected string literal at path ${currentKey}`);
      }
    }
    else if (unwrappedInitializer && unwrappedInitializer.asKind(SyntaxKind.ObjectLiteralExpression))
    {
      findAndModify(
        unwrappedInitializer as ObjectLiteralExpression,
        remainingPath,
        newValue,
      );
    }
    else
    {
      throw new Error(`Expected object at path ${currentKey}`);
    }
  }

  console.log('R WE DONE?');

  // Format the entire source file to adjust indentation and formatting
  sourceFile.formatText();

  // Get the modified code
  const newCode = sourceFile.getFullText();

  return newCode;
}

// Example usage:
const diff: DiffResult = {
  'favorite.drink.alcoholic.en': { left: 'wine', right: 'whiskey' },
  'favorite.drink.alcoholic.ja': { left: 'ワイン', right: 'ウイスキー' },
  'favorite.drink.nonAlcoholic.en': { left: 'milk', right: 'water' },
  'favorite.drink.nonAlcoholic.ja': { left: '牛乳', right: '水' },
};

// const tsCode = `
// import { something } from 'somewhere';

// export const i18n = {
//   favorite: {
//     food: {
//       en: 'pizza',
//       ja: 'ピザ',
//     },

//     drink: {
//       alcoholic: {
//         en: 'wine',
//         ja: 'ワイン',
//       },
//       nonAlcoholic: {
//         en: 'milk',
//         ja: '牛乳',
//       },
//     },
//   },
// } as const;

// // Some comment

// export const anotherConst = {
//   value: 42,
// };
// `;

// const newTsCode = applyDifferencesUsingASTOrThrow(diff, tsCode);
// console.log(newTsCode);

/**
import { something } from 'somewhere';

export const i18n = {
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

// Some comment

export const anotherConst = {
  value: 42,
};
*/
