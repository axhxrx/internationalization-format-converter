export const bar = {
  nickname: {
    en: 'King',
    ja: '王様',
  },
  greeting: {
    friendly: {
      en: 'Greetings, exalted {name}!',
      ja: 'こんにちは、{name}様！',
    },
    hostile: {
      en: 'You do not look like royalty, {name}!',
      ja: 'おまえはプリンセスぽくねぇ、{name}！',
    },
  },
} as const;
