export const foo = {
  name: {
    en: 'Alex',
    ja: 'アレックス',
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
