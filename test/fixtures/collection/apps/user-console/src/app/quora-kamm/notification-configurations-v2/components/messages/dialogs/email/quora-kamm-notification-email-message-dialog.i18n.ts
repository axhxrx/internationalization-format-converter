export const i18n = {
  // common: commonI18n,
  title: {
    ja: 'E メールのメッセージを編集する',
    en: 'Edit email message',
  },
  heading: {
    onDeviceAdded: {
      ja: 'デバイス追加通知の E メールメッセージ',
      en: 'Email message for device added notification',
    },
    onDeviceRemoved: {
      ja: 'デバイス削除通知の E メールメッセージ',
      en: 'Email message for device removed notification',
    },
    onDeviceShareStatusChanged: {
      ja: 'デバイス共有通知の E メールメッセージ',
      en: 'Email message for device sharing notification',
    },
    onConnected: {
      ja: 'デバイスオンライン通知の E メールメッセージ',
      en: 'Email message for device online notification',
    },
    onDisconnected: {
      ja: 'デバイスオフライン通知の E メールメッセージ',
      en: 'Email message for device offline notification',
    },
    onCloudRecordingInterrupted: {
      ja: 'クラウド常時録画停止通知の E メールメッセージ',
      en: 'Email message for cloud recording interruption notification',
    },
    onEventDetected: {
      ja: 'モーション検知/サウンド検出通知の E メールメッセージ',
      en: 'Email message for motion/sound detection notification',
    },
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
  error: {
    subjectRequired: {
      ja: '件名は必須です。',
      en: 'Subject is required.',
    },
    bodyRequired: {
      ja: '本文は必須です。',
      en: 'Body is required.',
    },
  },
  previewSubjectError: {
    ja: '件名のプレビューに失敗しました。変数が正しく記述されているか確認してください。',
    en: 'Failed to preview the subject. Please check if the variables are correctly written.',
  },
  previewBodyError: {
    ja: '本文のプレビューに失敗しました。変数が正しく記述されているか確認してください。',
    en: 'Failed to preview the body. Please check if the variables are correctly written.',
  },
  preview: {
    ja: 'メッセージ中の変数を"値の例"で置き換えます',
    en: 'Replace variables in the message with "Sample" values',
  },
} as const;
