import { baz as hoge } from '../baz.i18n.ts';

const testModeStatusLabelI18n = {
  keyOne: {
    en: `Lorem ipsum I II III`,
    ja: `ほげホゲ I II III`,
  },
  keyOneLabel: {
    en: 'Transitioning',
    ja: '変更中',
  },
};

export const i18n = { ...hoge, ...testModeStatusLabelI18n } as const;
