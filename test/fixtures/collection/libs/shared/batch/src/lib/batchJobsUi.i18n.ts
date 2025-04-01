export const batchJobsUi = {
  heading: {
    en: 'Batch Jobs',
    ja: 'バッチジョブ一覧',
  },
  headingWithGroupName: {
    en: 'Batch jobs: {{groupName}}',
    ja: 'バッチジョブ: {{groupName}}',
  },
  subHeading: {
    en: 'Create batch jobs and check processing status.',
    ja: 'バッチジョブの作成と処理状況の確認',
  },

  newJob: {
    heading: {
      en: 'Create Job',
      ja: 'ジョブ作成',
    },
    requiredFieldHelp: {
      en: 'Fields marked with an asterisk (*) are required.',
      ja: 'アスタリスク（*）が付いているフィールドは必須です。',
    },
    requiredFieldHelpBegin: {
      en: 'Fields marked with an asterisk ',
      ja: 'アスタリスク',
    },
    requiredFieldHelpEnd: {
      en: ' are required.',
      ja: ' が付いているフィールドは必須です。',
    },
    /**
     This is the label in the <select> when the user has not yet selected a value.
     */
    select: {
      en: '- Select -',
      ja: 'API を選択してください...',
    },
  },
} as const;
