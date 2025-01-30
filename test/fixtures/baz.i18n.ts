import { bar } from './bar.i18n.ts';
import { foo } from './foo.i18n.ts';

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
