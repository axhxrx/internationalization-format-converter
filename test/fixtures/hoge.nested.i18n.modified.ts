import { bar } from './bar.i18n.ts';
import { foo } from './foo.i18n.ts';

/**
 Comment for hoge.
 */
export const hoge = {
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
        en: 'Canadian Club',
        ja: 'カナディアンクラブ',
      },
      nonAlcoholic: {
        en: 'water',
        ja: '水',
      },
    },
  },
  nested: {
    nickname: bar.nickname,
    moreDeeplyNested: {
      foo,
    },
  },
  nested2: {
    nickname: bar.nickname,
    moreDeeplyNested: {
      foo,
      wowser: {
        en:
          'The nested property should be completely erased becuase it contains nothing but import references, but nested2 should remain because I, wowser, exist',
        ja: 'なんか、俺いるぞ',
      },
    },
  },
} as const;
