export const i18n = {
  title: {
    ja: 'Webhook のメッセージを編集する',
    en: 'Edit Webhook message',
  },
  subtitle: {
    onDeviceAdded: {
      ja: 'デバイス追加通知のメッセージを編集します。',
      en: 'Edit the message for device added notification.',
    },
    onDeviceRemoved: {
      ja: 'デバイス削除通知のメッセージを編集します。',
      en: 'Edit the message for device removed notification.',
    },
    onDeviceShareStatusChanged: {
      ja: 'デバイス共有通知のメッセージを編集します。',
      en: 'Edit the message for device sharing notification.',
    },
    onConnected: {
      ja: 'デバイスオンライン通知のメッセージを編集します。',
      en: 'Edit the message for device online notification.',
    },
    onDisconnected: {
      ja: 'デバイスオフライン通知のメッセージを編集します。',
      en: 'Edit the message for device offline notification.',
    },
    onCloudRecordingInterrupted: {
      ja: 'クラウド常時録画停止通知のメッセージを編集します。',
      en: 'Edit the message for cloud recording interruption notification.',
    },
    onEventDetected: {
      ja: 'モーション検知/サウンド検出通知のメッセージを編集します。',
      en: 'Edit the message for motion/sound detection notification.',
    },
  },
  heading: {
    onDeviceAdded: {
      ja: 'デバイス追加通知の Webhook メッセージ',
      en: 'Webhook message for device added notification',
    },
    onDeviceRemoved: {
      ja: 'デバイス削除通知の Webhook メッセージ',
      en: 'Webhook message for device removed notification',
    },
    onDeviceShareStatusChanged: {
      ja: 'デバイス共有通知の Webhook メッセージ',
      en: 'Webhook message for device sharing notification',
    },
    onConnected: {
      ja: 'デバイスオンライン通知の Webhook メッセージ',
      en: 'Webhook message for device online notification',
    },
    onDisconnected: {
      ja: 'デバイスオフライン通知の Webhook メッセージ',
      en: 'Webhook message for device offline notification',
    },
    onCloudRecordingInterrupted: {
      ja: 'クラウド常時録画停止通知の Webhook メッセージ',
      en: 'Webhook message for cloud recording interruption notification',
    },
    onEventDetected: {
      ja: 'モーション検知/サウンド検出通知の Webhook メッセージ',
      en: 'Webhook message for motion/sound detection notification',
    },
  },
  error: {
    bodyRequired: {
      ja: 'リクエストボディは必須です。',
      en: 'Request body is required.',
    },
  },
  previewError: {
    ja: 'リクエストボディのプレビューに失敗しました。変数が正しく記述されているか確認してください。',
    en: 'Failed to preview the request body. Please check if the variables are correctly written.',
  },
  preview: {
    ja: 'メッセージ中の変数を"値の例"で置き換えます',
    en: 'Replace variables in the message with "Sample" values',
  },
  test: {
    ja: 'テストメッセージを送信する',
    en: 'Send test message',
  },
} as const;
