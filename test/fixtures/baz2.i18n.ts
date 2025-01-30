// This file is the same as baz.i18n.ts, but with a different import statement, that imports multiple files from a barrel file, in a single import statement, just to make sure that doesn't break anything in our import stripping.
import {
  // comment *
  bar,
  /* comment */
  foo,
} from './barrel.ts';

/**
 Comment for baz.
 */
export const baz = {
  foo,
  bar,
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
