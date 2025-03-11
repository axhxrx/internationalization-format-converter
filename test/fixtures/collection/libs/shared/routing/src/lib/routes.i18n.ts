export const i18n = {
  /**
   Description for the conceptual route `/settings`, which is currently not a real route (there is only `/settings/something`). So this may or may not be used; that is up to the UI. Maybe it is skipped in the breadcrumbs. However, that is the purpose of this bit of i18n.
   */
  Settings: {
    en: 'Settings',
    ja: '設定',
  },
  /*
   The short form route description, suitable for breadcrumb, or tab title.
   */
  'Language settings': {
    en: 'Language settings',
    ja: '言語設定',
  },
  /**
   A special both-languages i18n that is used in e.g. heading so it can be understood in either language.
   */
  'Language settings / 言語設定': {
    en: 'Language settings / 言語設定',
    ja: '言語設定 / Language settings',
  },
  /**
   Support Bot
   */
  'Support Bot': {
    en: 'Quoracomm Support Bot',
    ja: 'QUORACOMM Support Bot',
  },
  /**
   Query Intelligence
   */
  'Query Intelligence': {
    en: 'Quoracomm Query Intelligence',
    ja: 'QUORACOMM Query Intelligence',
  },
} as const;
