import { baz as hoge } from '../baz.i18n.ts';

export const i18n = {
  awsRegion: {
    ...hoge,
    ...hoge.favorite,
    placeholder: {
      en: 'PLACEHOLDER',
      ja: 'プレースホルダー',
    },
  },
} as const;
