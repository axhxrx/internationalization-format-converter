export const batchJobListUi = {
  heading: {
    en: 'Job details',
    ja: 'ジョブ詳細',
  },

  actions: {
    close: {
      en: 'Close',
      ja: '閉じる',
    },

    addFilterCriteria: {
      en: 'Add',
      ja: '追加',
    },
  },

  label: {
    vpgId: {
      en: 'VPG ID',
      ja: 'VPG ID',
    },
    ipAddress: {
      en: 'IP address',
      ja: 'IP アドレス',
    },
    /**
     This may be changed to IMSI
     */
    key: {
      en: 'Key (Primary IMSI)',
      ja: 'キー(プライマリ IMSI)',
    },
    key2LineHtml: {
      en: 'Primary<br>IMSI',
      ja: 'プライマリ<br>IMSI',
    },
  },
} as const;
