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
