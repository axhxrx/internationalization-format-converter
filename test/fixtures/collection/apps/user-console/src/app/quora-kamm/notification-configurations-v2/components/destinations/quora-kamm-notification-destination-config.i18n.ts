// import { i18n as commonI18n } from '../../common.i18n';

export const i18n = {
  // common: commonI18n,
  title: {
    deviceManagement: {
      ja: 'デバイスの追加/削除/共有の通知先設定',
      en: 'Configure notification destinations for device addition/removal/sharing',
    },
    deviceStatus: {
      ja: 'デバイスのオンライン/オフライン/録画停止の通知先設定',
      en: 'Configure notification destinations for device online/offline/cloud recording interruption',
    },
    deviceEvents: {
      ja: 'デバイスのモーション検知/サウンド検出の通知先設定',
      en: 'Configure notification destinations for device motion/sound detection',
    },
  },
  description: {
    deviceManagement: {
      ja: 'デバイスの追加/削除/共有の通知先を設定します。',
      en: 'Configure notification destinations for device addition/removal/sharing.',
    },
    deviceStatus: {
      ja: 'デバイスのオンライン/オフライン/録画停止の通知先を設定します。',
      en: 'Configure notification destinations for device online/offline/cloud recording interruption.',
    },
    deviceEvents: {
      ja: 'デバイスのモーション検知/サウンド検出の通知先を設定します。',
      en: 'Configure notification destinations for device motion/sound detection.',
    },
  },
  limit: {
    email: {
      ja: 'TO、CC、BCC 合わせて {{ limit }} つのメールアドレスまで設定することが可能です。',
      en: 'You can set up to {{ limit }} email addresses in total for TO, CC, and BCC.',
    },
    webhook: {
      ja: 'Webhook の通知先を最大 {{ limit }} つまで作成することが可能です。',
      en: 'You can create up to {{ limit }} webhook destinations.',
    },
  },
  add: {
    email: {
      ja: 'E メール通知先を追加する',
      en: 'Add email notification destination',
    },
    webhook: {
      ja: 'Webhook 通知先を追加する',
      en: 'Add webhook destination',
    },
  },
  enable: {
    email: {
      ja: 'E メール通知先を有効にする',
      en: 'Enable email notification destination',
    },
    webhook: {
      ja: 'Webhook 通知先 {{index}} を有効にする',
      en: 'Enable webhook destination {{index}}',
    },
  },
  edit: {
    email: {
      ja: 'E メール通知先を設定する',
      en: 'Edit email notification destination',
    },
  },
  success: {
    email: {
      ja: 'E メール通知先が保存されました。',
      en: 'Email notification destination saved.',
    },
    webhook: {
      ja: 'Webhook 通知先が保存されました。',
      en: 'Webhook destination saved.',
    },
  },
  texttip: {
    ja: '通知先が有効、かつ通知タイプが有効になると通知が送信されるようになります。',
    en: 'Notifications will be sent when the destination is enabled and the notification type is enabled.',
  },
  billingConditions: {
    email: {
      ja: 'メールの送信数 (送信先 x イベント数) に応じて課金が発生します。',
      en: 'Charges will be incurred based on the number of emails sent (number of recipients x number of events).',
    },
    webhook: {
      ja: 'Webhook の送信数 (送信先 x イベント数) に応じて課金が発生します。',
      en: 'Charges will be incurred based on the number of webhooks sent (number of recipients x number of events).',
    },
  },
  emptyWarning: {
    email: {
      ja: '通知先のメールアドレスを設定してください。',
      en: 'Set the email address of the notification destination.',
    },
  },
} as const;
