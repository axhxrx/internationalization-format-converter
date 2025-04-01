export const foo = {
  name: {
    en: 'Fred',
    ja: 'フレッド',
  },
  greeting: {
    friendly: {
      en: 'Hello, {name}!',
      ja: 'こんにちは、{name}さん！',
    },
    hostile: {
      en: 'Get lost, {name}!',
      ja: '何だ、{name}！',
    },
  },
} as const;
