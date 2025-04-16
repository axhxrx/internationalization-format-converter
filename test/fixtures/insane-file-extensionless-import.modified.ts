const fooI18n = {
  name: {
    en: 'FOO!',
    ja: 'フー',
  },
} as const;

import { hoge } from './hoge_nested.i18n';

const barI18n = {
  name: {
    en: 'BAR!',
    ja: 'バー',
  },
} as const;

export const i18n = fooI18n;

export const nardwacker = { barI18n, fooI18n };

export const derpola = {
  fooI18n,
  barI18n,
};

// Hi, mom!!
export const hoge2 = { fooI18n, barI18n, hoge };
export const hoge3 = hoge;

// aass;
