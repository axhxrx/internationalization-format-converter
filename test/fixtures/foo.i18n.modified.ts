export const foo = {
  name: {
    en: 'Mason',
    ja: 'メイソン',
  },
  greeting: {
    friendly: {
      en: 'Hello, {name}!',
      ja: 'おす、 {name} 　！',
    },
    hostile: {
      en: 'Scram, {name}!',
      ja: '何だ、{name}！',
    },
  },
} as const;
