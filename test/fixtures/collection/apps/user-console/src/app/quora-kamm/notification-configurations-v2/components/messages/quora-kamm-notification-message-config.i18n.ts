// import { i18n as commonI18n } from '../../common.i18n';

export const i18n = {
  // common: commonI18n,
  title: {
    onDeviceAdded: {
      ja: 'デバイス追加通知の設定',
      en: 'Configure device addition notification',
    },
    onDeviceRemoved: {
      ja: 'デバイス削除通知の設定',
      en: 'Configure device removal notification',
    },
    onDeviceShareStatusChanged: {
      ja: 'デバイス共有通知の設定',
      en: 'Configure device sharing notification',
    },
    onConnected: {
      ja: 'デバイスオンライン通知の設定',
      en: 'Configure device online notification',
    },
    onDisconnected: {
      ja: 'デバイスオフライン通知の設定',
      en: 'Configure device offline notification',
    },
    onCloudRecordingInterrupted: {
      ja: 'クラウド常時録画停止通知の設定',
      en: 'Configure cloud recording interruption notification',
    },
    onEventDetected: {
      ja: 'モーション検知/サウンド検出通知の設定',
      en: 'Configure motion/sound detection notification',
    },
  },
  description: {
    onDeviceAdded: {
      ja: 'オペレーターに新しくデバイスが追加されたときに通知します。',
      en: 'Notify when a new device is added to an operator.',
    },
    onDeviceRemoved: {
      ja: 'オペレーターからデバイスが削除されたときに通知します。',
      en: 'Notify when a device is removed from an operator.',
    },
    onDeviceShareStatusChanged: {
      ja:
        'オペレーターがデバイスを共有したとき、オペレーターにデバイスが共有されたとき、共有が承認されたとき、拒否されたときに通知します。',
      en:
        'Notify when an operator shares a device, a device is shared with an operator, sharing is approved, or sharing is denied.',
    },
    onConnected: {
      ja: 'デバイスがオンラインになったときに通知します。',
      en: 'Notify when a device comes online.',
    },
    onDisconnected: {
      ja: 'デバイスがオフラインになったときに通知します。',
      en: 'Notify when a device goes offline.',
    },
    onCloudRecordingInterrupted: {
      ja: 'デバイスのクラウド常時録画が停止したときに通知します。',
      en: "Notify when a device's cloud recording is interrupted.",
    },
    onEventDetected: {
      ja: 'デバイスがモーションまたはサウンドを検知したときに通知します。',
      en: 'Notify when a device detects motion or sound.',
    },
  },
  texttip: {
    onEventDetected: {
      ja:
        'モーション/サウンドを検知するには ATOM アプリの設定で検知を有効にしてください。 <a href="https://users.example.com/ja-jp/docs/quoracomm-cloud-camera-services/setting-motion-detection/" target="_blank">詳しくはこちら <i class="ds-icon --icon-external-link"></i></a>',
      en:
        'To detect motion/sound, enable detection in the ATOM app settings. <a href="https://users.example.com/ja-jp/docs/quoracomm-cloud-camera-services/setting-motion-detection/" target="_blank">Learn more (Japanese)<i class="ds-icon --icon-external-link"></i></a>',
    },
  },
  toggle: {
    onDeviceAdded: {
      ja: 'デバイス追加通知を有効にする',
      en: 'Enable device addition notification',
    },
    onDeviceRemoved: {
      ja: 'デバイス削除通知を有効にする',
      en: 'Enable device removal notification',
    },
    onDeviceShareStatusChanged: {
      ja: 'デバイス共有通知を有効にする',
      en: 'Enable device sharing notification',
    },
    onConnected: {
      ja: 'デバイスオンライン通知を有効にする',
      en: 'Enable device online notification',
    },
    onDisconnected: {
      ja: 'デバイスオフライン通知を有効にする',
      en: 'Enable device offline notification',
    },
    onCloudRecordingInterrupted: {
      ja: 'クラウド常時録画停止通知を有効にする',
      en: 'Enable cloud recording interruption notification',
    },
    onEventDetected: {
      ja: 'モーション検知/サウンド検出通知を有効にする',
      en: 'Enable motion/sound detection notification',
    },
  },
  webhookMessage_label: {
    ja: 'Webhook メッセージ {{index}}',
    en: 'Webhook message {{index}}',
  },
  editMessage: {
    ja: 'メッセージ内容を設定する',
    en: 'Configure message content',
  },
  editEmail: {
    ja: 'E メールのメッセージを編集する',
    en: 'Edit email message',
  },
  editWebhook: {
    ja: 'Webhook のメッセージを編集する',
    en: 'Edit Webhook message',
  },
  successEmail: {
    ja: 'E メールのメッセージが保存されました。',
    en: 'Email message saved.',
  },
  successWebhook: {
    ja: 'Webhook のメッセージが保存されました。',
    en: 'Webhook message saved.',
  },
  noEmailDestination: {
    ja: 'E メールの通知先を設定してください。',
    en: 'Configure email notification destinations.',
  },
  noActiveEmailDestination: {
    ja: 'E メール通知を送信するには E メールの通知先を有効にしてください。',
    en: 'To send email notifications, enable email notification destinations.',
  },
  noWebhookDestination: {
    ja: 'Webhook の通知先がありません。',
    en: 'No webhook destination.',
  },
  noActiveWebhookDestination: {
    ja: 'Webhook 通知を送信するには Webhook の通知先を少なくとも 1 つ有効にしてください。',
    en: 'To send webhook notifications, enable at least one webhook destination.',
  },
  webhookDestination: {
    ja: 'Webhook 通知先 {{index}}',
    en: 'Webhook destination {{index}}',
  },
  emptyWebhookDestination_1: {
    ja: 'Webhook のメッセージ内容を設定するには、先に',
    en: 'To configure the content of the webhook message, first',
  },
  emptyWebhookDestination_button: {
    ja: 'Webhook の通知先を追加',
    en: 'Add a webhook destination',
  },
  emptyWebhookDestination_2: {
    ja: 'してください。',
    en: '.',
  },
} as const;
