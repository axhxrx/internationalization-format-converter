// import { i18n as copyButtonI18n } from '../quora-kamm-shared/components/quora-kamm-copy-button';

export const i18n = {
  save: {
    ja: '保存する',
    en: 'Save',
  },
  close: {
    ja: '閉じる',
    en: 'Close',
  },
  cancel: {
    ja: 'キャンセル',
    en: 'Cancel',
  },
  delete: {
    ja: '削除する',
    en: 'Delete',
  },
  send: {
    ja: '送信する',
    en: 'Send',
  },
  preview: {
    ja: 'プレビュー',
    en: 'Preview',
  },
  revert: {
    ja: '変更を元に戻す',
    en: 'Revert changes',
  },
  dirty: {
    ja: '変更はまだ保存されていません',
    en: 'Changes have not been saved yet',
  },
  useDefault: {
    ja: 'デフォルトのメッセージを使う',
    en: 'Use default message',
  },
  useDefault_texttip: {
    ja: 'システムが生成するデフォルトのメッセージにリセットします',
    en: 'Reset to the default message generated by the system',
  },
  notConfigured: {
    ja: '未設定',
    en: 'Not configured',
  },
  enabled: {
    ja: '有効',
    en: 'Enabled',
  },
  disabled: {
    ja: '無効',
    en: 'Disabled',
  },
  // copy: copyButtonI18n.copy,
  email: {
    ja: 'E メール',
    en: 'Email',
  },
  webhook: {
    ja: 'Webhook',
    en: 'Webhook',
  },
  subject: {
    ja: '件名',
    en: 'Subject',
  },
  body: {
    ja: '本文',
    en: 'Body',
  },
  webhookBody: {
    ja: 'リクエストボディ',
    en: 'Request body',
  },
  url: {
    ja: 'URL',
    en: 'URL',
  },
  httpMethod: {
    ja: 'HTTP メソッド',
    en: 'HTTP Method',
  },
  httpHeaders: {
    ja: 'HTTP ヘッダー',
    en: 'HTTP Headers',
  },
  texttip: {
    delete: {
      ja: '削除',
      en: 'Delete',
    },
    edit: {
      ja: '編集',
      en: 'Edit',
    },
  },
  billingConditions: {
    ja: '料金について',
    en: 'Billing conditions',
  },
  index: {
    ja: '{{ start }} - {{ end }} 件目',
    en: '{{ start }} - {{ end }}',
  },
  refresh: {
    ja: '更新',
    en: 'Refresh',
  },
  prev: {
    ja: '前のページ',
    en: 'Previous',
  },
  next: {
    ja: '次のページ',
    en: 'Next',
  },
  none: {
    ja: 'なし',
    en: 'None',
  },
  // TODO: Planing to integrate unknownEmail into history-email-address component
  unknownEmail: {
    ja: '不明なメールアドレス ({{ email }})',
    en: 'Unknown email address ({{ email }})',
  },
  noEmailViewAccess: {
    ja: 'E メールを確認できません',
    en: 'No permission to view emails',
  },
  emailAccessDenied: {
    ja: 'SAM ユーザーでログインしておりメールアドレスを確認する権限がありません。',
    en: 'User who is logged in as SAM user does not have permission to view email addresses.',
  },
  statsAccessDenied: {
    ja:
      "通知送信件数の取得に失敗しました。この操作を行うための権限 'QuoraKamm:{{ permission }}' が許可されていません。( {{ errorCode }} )",
    en:
      "Failed to get notification sent count. The permission 'QuoraKamm:{{ permission }}' is not allowed to perform this operation. ( {{ errorCode }} )",
  },
  historyAccessDenied: {
    ja:
      "通知送信結果の取得に失敗しました。この操作を行うための権限 'QuoraKamm:{{ permission }}' が許可されていません。( {{ errorCode }} )",
    en:
      "Failed to get notification delivery results. The permission 'QuoraKamm:{{ permission }}' is not allowed to perform this operation. ( {{ errorCode }} )",
  },
} as const;
