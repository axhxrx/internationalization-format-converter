export const foo = {
  name: {
    en: 'Mason',
    ja: 'メイソン',
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
