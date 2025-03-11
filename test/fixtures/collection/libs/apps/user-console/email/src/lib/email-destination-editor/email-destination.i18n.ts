export const EmailDestinationI18n = {
  to: {
    en: 'To',
    ja: 'To ',
  },
  cc: {
    en: 'CC',
    ja: 'CC',
  },
  bcc: {
    en: 'BCC',
    ja: 'BCC',
  },
  add: {
    en: 'Add',
    ja: '追加',
  },
  remove: {
    en: 'Remove',
    ja: '削除',
  },
  fetchEmailError: {
    en: 'Failed to fetch registered emails list. {{ reason }}',
    ja: 'オペレーター (QUORACOMM アカウント) に追加済みのメールアドレスが取得できません。 {{ reason }}',
  },
  samUserCantUse: {
    en: 'Only root user can configure email destination settings.',
    ja:
      'E メールの送信先はルートユーザーで設定してください。SAM ユーザーでは設定できません。ルートユーザーと SAM ユーザーの違いについては、<a href="https://users.example.com/ja-jp/guides/basic-knowledge/users/" target="_blank">ルートユーザーと SAM ユーザー</a> を参照してください。',
  },
  notice: {
    en:
      'You can specify mail addresses registerd for this operator. You can add a new address at <a href="/account/email" target="_blank"> Mail Settings</a> page.',
    ja:
      'オペレーター (QUORACOMM アカウント) に追加済みのメールアドレスのみを選択できます。新しいメールアドレスは、<a href="/account/email" target="_blank">メール設定画面</a>で追加します。詳しくは、<a href="https://users.example.com/ja-jp/docs/email/add/" target="_blank">メールアドレスを追加する</a> を参照してください。',
  },
} as const;
