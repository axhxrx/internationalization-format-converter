export const QuuxActionFormI18n = {
  config: {
    en: 'Config',
    ja: '設定',
  },
  history: {
    en: 'Run History',
    ja: '実行履歴',
  },
  enabled: {
    en: 'Enabled',
    ja: '有効',
  },
  disabled: {
    en: 'Disabled',
    ja: '無効',
  },
  condition: {
    title: {
      en: 'Action Condition',
      ja: 'アクションの実行条件',
    },
    description: {
      en: `
Specify condition to execute the action using values from events or messages. If no condition is specified, the action will always be executed.`,
      ja: `
イベントやメッセージの値を使ってアクションを実行する条件を指定します。条件を指定しない場合、アクションは常に実行されます。`,
    },
  },
  submit: {
    create: {
      en: 'Create',
      ja: '作成する',
    },
    update: {
      en: 'Update',
      ja: '更新する',
    },
  },
  delete: {
    en: 'Delete',
    ja: '削除する',
  },
  close: {
    create: {
      en: 'Cancel',
      ja: 'キャンセル',
    },
    update: {
      en: 'Close',
      ja: '閉じる',
    },
  },
  actions: {
    en: 'More',
    ja: 'More',
  },
  editName: {
    en: 'Edit name and description',
    ja: '名前と概要を変更する',
  },
  type: {
    en: 'Type',
    ja: 'タイプ',
  },
  name: {
    en: 'Name',
    ja: '名前',
  },
  description: {
    en: 'Description',
    ja: '概要',
  },
  deleteConfirmDialog: {
    title: {
      en: `Delete the quux action`,
      ja: 'Quux アクションを削除する',
    },
    content: {
      en: 'This operation cannot be undone. Are you sure you want to continue the operation?',
      ja: 'この操作は取り消せません。操作を実行してよろしいですか？',
    },
    ok: {
      en: 'Delete action',
      ja: 'アクションを削除する',
    },
    cancel: {
      en: 'Cancel',
      ja: 'キャンセル',
    },
  },
  deleteSuccess: {
    en: `Successfully deleted the quux action: {{ action }}`,
    ja: `Action {{ action }} を削除しました`,
  },
} as const;
