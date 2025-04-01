/**i18n used for fixed rate modals */

export const fixedRateI18n = {
  cancel: {
    en: 'Cancel',
    ja: 'キャンセル',
  },

  simId: {
    en: 'SIM ID',
    ja: 'SIM ID',
  },

  calculatedTime: {
    en: 'Calculated at {{ date }}',
    ja: '{{ date }} 時点の情報です',
  },

  manualTopUpComponent: {
    title: {
      en: 'Manual Top-up',
      ja: '手動チャージ',
    },

    subTitle: {
      en: `<p>Topping up a SIM adds additional Data, SMS and expiry time.</p>`,
      ja: `<p>トップアップ（チャージ）すると、データ通信量、SMS 通数、USSD 通数が追加され、有効期限が延長されます。</p>`,
    },

    beforeTopUp: {
      en: 'Current Plan',
      ja: '現在のプラン',
    },

    afterTopUp: {
      en: 'After Top Up',
      ja: 'チャージ後',
    },

    submit: {
      en: 'Purchase top-up',
      ja: '購入',
    },

    cancel: {
      en: 'Cancel',
      ja: 'キャンセル',
    },

    overageWarning: {
      en: 'The current usage overage amounts displayed above will be deducted from your top-up.',
      ja: '上記の超過分はトップアップ（チャージ）後のデータ通信量、SMS 通数、USSD 通数から差し引かれます。',
    },
  },

  remainingUsageTable: {
    imsi: {
      en: 'IMSI',
      ja: 'IMSI',
    },

    remainingData: {
      en: 'Remaining Data',
      ja: '残りのデータ通信量',
    },

    remainingSms: {
      en: 'Remaining SMS',
      ja: '残りのSMS通数',
    },

    remainingUssd: {
      en: 'Remaining USSD',
      ja: '残りのUSSD通数',
    },

    expiryDate: {
      en: 'Expiry',
      ja: '有効期限',
    },

    overage: {
      en: 'OVERAGE',
      ja: '超過',
    },
  },

  dataUsage: {
    en: 'Data Usage',
    ja: 'データ通信量',
  },

  smsUsage: {
    en: 'SMS Usage',
    ja: 'SMS通数',
  },

  ussdUsage: {
    en: 'USSD Usage',
    ja: 'USSD通数',
  },

  remainingTime: {
    en: 'Remaining Time',
    ja: '残り期間',
  },

  manualTopupSuccess: {
    en: 'Manual Top Up was performed successfully',
    ja: 'トップアップに成功しました。',
  },

  operatorTopUpDefaultsEditSuccess: {
    en: 'Operator Top-up defaults were updated successfully',
    ja: 'オペレータのトップアップのデフォルト設定を更新しました。',
  },

  fixedRateSimDetails: {
    title: {
      en: 'Data usage for planFX1',
      ja: 'planFX1のデータ通信量',
    },

    operatorDefaultHint: {
      en: 'Manage Operator Top-up default settings...',
      ja: 'オペレーターのトップアップ（チャージ）設定を管理...',
    },

    historyHint: {
      en: 'View Top-up history...',
      ja: 'トップアップ（チャージ）履歴を表示...',
    },

    autoTopUpLabel: {
      en: 'AUTO TOP-UP',
      ja: 'オートチャージ',
    },

    autoTopUpDescription: {
      en: 'When remaining Data, SMS or USSD usage is 20% or less; or 30 days before expiry.',
      ja: 'データ通信量、SMS通信数、USSD通数が20%以下、または有効期限の30日前に自動的にトップアップ（チャージ）されます。',
    },

    manualTopUpButton: {
      en: 'Manual Top-up...',
      ja: 'チャージ',
    },

    manualTopUpDescription: {
      en: 'You must manually add a top-up before the Data, SMS or USSD usage limit, or expiry date is reached.',
      ja: 'データ通信量、SMS通信数、USSD通数が上限に達する、または有効期限が切れると通信できません。トップアップ（チャージ）してください。',
    },

    startDate: {
      en: 'PLAN START DATE',
      ja: 'プラン開始日',
    },

    expiryDate: {
      en: 'PLAN EXPIRY DATE',
      ja: 'プランの有効期限',
    },

    isApproachingLimit: {
      en: "You are close to exceeding the plan's allocated Data, SMS, USSD, or time limit. Data connection will be blocked once the limit is reached.  Please purchase a top-up to continue using this SIM without interruption.",
      ja: 'データ通信量、SMS 通数、USSD 通数の上限、または有効期限が近づいています。上限または期限に達すると通信できません。トップアップ（チャージ）してください。',
    },

    hasReachedLimit: {
      en: "You have exceeded the plan's allocated Data, SMS, USSD, or time limit. Data connection has been blocked. Please purchase a top-up to continue using this SIM.",
      ja: 'データ通信量、SMS 通数、USSD 通数の上限、または有効期限に達したため、通信できません。トップアップ（チャージ）してください。',
    },
  },

  topUpSettingOptions: {
    operatorDefault: {
      en: 'Operator Top-up defaults',
      ja: 'デフォルト',
    },
    manualTopUp: {
      en: 'Manual Top-up',
      ja: '手動チャージ',
    },
    autoTopUp: {
      en: 'Automatically Top-up',
      ja: 'オートチャージ',
    },
  },

  topUpSettingSwitchSuccess: {
    en: 'Top-up setting was switched successfully',
    ja: 'トップアップの設定を更新しました。',
  },

  operatorTopUpDefaults: {
    title: {
      en: 'Operator Top-up default settings',
      ja: 'デフォルトのチャージ設定',
    },
    subTitle: {
      en: `<p>The following option will be used globally for all Fixed rate plan SIMs using "Operator Top-up defaults". </p>`,
      ja: `<p>デフォルトのトップアップ（チャージ）設定を変更します。なお、トップアップ（チャージ）設定は IoT SIM ごとに変更できます。</p>`,
    },
    autoTopUpLabel: {
      en: 'AUTOMATICALLY TOP-UP',
      ja: 'オートチャージ',
    },
    autoTopUpDescription: {
      en: `A top-up will be purchased automatically for each SIM when remaining Data, SMS or USSD usage is 20% or less; or 30 days before expiry.`,
      ja: `データ通信量、SMS 通数、USSD 通数が上限の 20% 以下、または有効期限の 30 日前に、トップアップ（オートチャージ）されます。`,
    },
    manualTopUpLabel: {
      en: 'MANUAL TOP-UP',
      ja: '手動チャージ',
    },
    manualTopUpDescription: {
      en: `You must manually add a top-up for each SIM before the Data, SMS or USSD usage limit; or expiry date is reached.`,
      ja: `データ通信量、SMS 通数、USSD 通数が上限に達する、または有効期限が切れると通信できません。トップアップ（チャージ）してください。`,
    },
    submit: {
      en: 'Save',
      ja: '保存',
    },
    cancel: {
      en: 'Cancel',
      ja: 'キャンセル',
    },
  },

  history: {
    title: {
      en: 'Event History',
      ja: 'イベント履歴',
    },

    subTitle: {
      en: 'View the dates of data/sms/ussd top-up, as well as other events of this fixed rate plan SIM.',
      ja: 'トップアップ（チャージ）日時 (データ通信量、SMS通数、USSD通数の更新日時) や、その他のイベントの日時を確認できます。',
    },

    close: {
      en: 'Close',
      ja: '閉じる',
    },

    columns: {
      date: {
        en: 'Date',
        ja: '日付',
      },

      event: {
        en: 'Event',
        ja: 'イベント',
      },

      reason: {
        en: 'Type',
        ja: '実行タイプ',
      },
    },

    eventName: {
      contracted: {
        en: 'Contracted',
        ja: '契約',
      },
      toppedUp: {
        en: 'Top-up',
        ja: 'トップアップ（チャージ）',
      },
      transferred: {
        en: 'Transferred',
        ja: '譲渡',
      },
      suspended: {
        en: 'Suspended',
        ja: '利用中断',
      },
      terminated: {
        en: 'Terminated',
        ja: '解約',
      },
      usageNotificationMailSent: {
        en: 'Usage Notification Email Sent',
        ja: '通信量通知メール送信',
      },
      unusedNotificationMailSent: {
        en: 'Unused Notification Email Sent',
        ja: '未使用通知メール送信',
      },
      preSuspensionNotificationMailSent: {
        en: 'Pre-suspension Notification Email Sent',
        ja: '利用中断前通知メール送信',
      },
      preTerminationNotificationMailSent: {
        en: 'Pre-termination Notification Email Sent',
        ja: '解約前通知メール送信',
      },
    },
    eventReason: {
      automatic: {
        en: 'Automatic',
        ja: '自動',
      },
      manual: {
        en: 'Manual',
        ja: '手動',
      },
    },
  },
};
