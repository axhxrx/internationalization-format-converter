export const i18n = {
  prerequisitesText: {
    en: 'Checking service status...',
    ja: 'サービスのステータスを確認中...',
  },

  serviceStatus: {
    header: {
      en: 'Service status',
      ja: 'サービスステータス',
    },
    actionRequiredTag: {
      en: 'Action required',
      ja: 'アクションが必要',
    },
    actionRequiredTitle: {
      en: 'Further action is required to delete this account',
      ja: 'このアカウントを削除するにはさらなる操作が必要です',
    },
    actionRequiredDescription: {
      en:
        'Before an account can be deleted, it is necessary to terminate any active SIMs, devices, or other services, which are preventing the account from being deleted.',
      ja:
        'アカウントを削除する前に、アカウントの削除を妨げているアクティブな SIM、デバイス、またはその他のサービスを終了する必要があります。',
    },
    actionRequiredNextSteps: {
      en:
        'Please resolve the issues highlighted below. Once these issues have been resolved, please revisit this page or press the Check Again button below.',
      ja:
        '以下に示す問題を解決してください。これらの問題が解決されたら、このページを再度訪れるか、以下の「再確認」ボタンを押してください。',
    },
    okTag: {
      en: 'Ready to delete',
      ja: '終了準備完了',
    },
    okStatus: {
      en: 'OK - service can be deleted',
      ja: 'OK - サービスを削除できます',
    },
  },

  readyToDelete: {
    header: {
      en: 'Confirm delete',
      ja: '削除を確認',
    },
    description: {
      en: 'This account will be deleted and all services terminated',
      ja: 'アカウントを削除し、すべてのサービスを終了できます',
    },
    permanentNotice: {
      en: 'This action is permanent and can not be undone.',
      ja: 'この操作は元に戻すことができません。このテナントを削除してもよろしいですか？',
    },
    emailNotice: {
      en:
        'Unregistering the email address associated with this account may take a few days. You may still receive emails during this period.',
      ja:
        'このアカウントに関連付けられたメールアドレスの登録解除には数日かかる場合があります。この期間中もメールを受信することがあります。',
    },
    confirmCheckboxLabel: {
      en:
        'I confirm I wish to permanently delete the account for <strong class="ds-text --bold --alert">{{ userName }}</strong> ({{ operatorId }})',
      ja:
        '<strong class="ds-text --bold --alert">{{ userName }}</strong> ({{ operatorId }}) のアカウントを永久に削除することを確認します',
    },

    confirmDeleteWithPasswordLabel: {
      en: 'Enter your password to confirm deletion',
      ja: '削除を確認するにはパスワードを入力してください',
    },
  },

  // borrowed from terminate-account.yaml files
  actionIsRequired: {
    en: 'Action is required to enable termination of this account.',
    ja: 'ご利用中のサービスがあります。',
  },
  blockerType: {
    lora: { en: 'LoRa', ja: 'LoRa' },
    ltd: { en: 'Long-term Discounts', ja: '長期利用割引' },
    other: { en: 'Other', ja: 'その他' },
    payment: { en: 'Billing', ja: 'お支払い' },
    squignox: { en: 'Squignox', ja: 'Squignox' },
    sim: { en: 'SIM', ja: 'SIM' },
    vpg: { en: 'VPG', ja: 'VPG' },
  },
  gotoPageLabel: {
    en: 'Go to {{ pageName }} page',
    ja: '{{ pageName }} ページへ',
  },
  serviceAndPageMapping: {
    payment: { en: 'Billing', ja: 'お支払い' },
    lora: { en: 'LoRa Devices', ja: 'LoRa デバイス' },
    ltd: { en: 'Long-term Discounts', ja: '長期利用割引' },
    sim: { en: 'SIM Management', ja: 'SIM 管理' },
    squignox: { en: 'Squignox Devices', ja: 'Squignox デバイス' },
    vpg: { en: 'VPG', ja: 'VPG' },
  },
  checkAgain: {
    en: 'Check Again',
    ja: '再確認',
  },
  checkingDotDotDot: {
    en: 'Checking...',
    ja: '確認中',
  },
  confirmTerminateModal: {
    body: {
      en:
        'The account will be permanently deleted. To use Quoracomm services in the future, you will need to sign up for a new account and start over from the beginning.',
      ja:
        'アカウントが削除されます。今後QUORACOMMのサービスを利用するには、新しいアカウントにサインアップして最初からやり直す必要があります。',
    },
    cancel: {
      en: 'Do not terminate ',
      ja: '削除しない',
    },
    confirm: {
      en: 'Terminate account',
      ja: 'アカウントを削除する',
    },
    enterPassword: {
      en: 'Please enter your password to terminate the account.',
      ja: 'アカウントを削除するには、ログインパスワードを入力してください。',
    },
    title: {
      en: 'Are you sure you want to terminate your QUORACOMM account?',
      ja: 'ソラコムのアカウントを削除してもよろしいですか？',
    },
  },
  coverageType: {
    g: {
      en: 'Coverage Type: Global',
      ja: 'カバレッジタイプ: グローバル',
    },
    jp: {
      en: 'Coverage Type: Japan',
      ja: 'カバレッジタイプ: 日本',
    },
  },
  message: {
    en: 'Message',
    ja: 'メッセージ',
  },
  pleaseAddressBlockersAndTryAgain: {
    en:
      '<p>Before an account can be terminated, it is necessary to eliminate any active SIMs, devices, or other services, which may prevent the account from being terminated. For example:</p><ul><li>Any registered SIM cards must be terminated (via the "Terminate" command in the "SIM Management" view)</li><li>Any LoRaWAN and Squignox devices must be terminated (via the "LoRaWAN Devices" and "Squignox Devices" management views, respectively)</li><li>Any VPGs that have been created must be deleted (via the "VPG" view)</li></ul><p>Please review the issues highlighted in the table above. Once these issues have been resolved, please revisit this page or press the Check Again button below.<p>',
    ja:
      '<p> アカウント削除の前に、使用中の SIM、デバイス、その他のサービスを解約してください。</p><ul><li>Air SIMは「SIM 管理」メニューから SIM を選択して「解約」を行ってください。</li><li>LoRaWAN と Squignox デバイスは、それぞれ「LoRaWAN デバイス管理」、「Squignox デバイス管理」メニューから解約してください。</li><li>作成された VPG は「VPG」メニューからすべて削除してください。</li></ul><p>上記の表をご確認のうえ、ご利用中のサービスを解約後、当ページからユーザーアカウントの削除を行ってください。<p>',
  },
  readyToTerminate: {
    en:
      'Please note that this operation cannot be undone. (You can still sign up again in the future, but you will need to start over and set everything up from the beginning.) The email address associated with this account will also be unregistered, but please note that this process may take a few days, so you may receive some email messages even after termination.<br />If you wish to terminate your account, and delete all associated customer information, please use the button below to initiate the process.',
    ja:
      'アカウントの削除は元に戻せません。（再度、新規サインアップすることはできますが情報は受け継がれません。）数日の間で行き違いでメールが送信される場合がありますがご容赦ください。<br />アカウントを削除する場合は、以下のボタンをクリックしてください。',
  },
  readyToTerminateHeader: {
    en: 'This account can be terminated.',
    ja: '当アカウントは削除することができます。',
  },
  service: {
    en: 'Service',
    ja: 'サービス',
  },
  terminateAccountButtonTitle: {
    en: 'Terminate user account',
    ja: 'アカウントを削除する',
  },
  terminateAccountRequestBody: {
    en: 'I would like to terminate my QUORACOMM account.',
    ja: 'アカウントの削除を希望します。',
  },
  terminateAccountRequestTitle: {
    en: 'Account termination request',
    ja: 'アカウントの削除依頼',
  },

  theIssuesBelowMustBeResolved: {
    en: 'The issues below must be resolved:',
    ja: '以下をご確認ください。',
  },
} as const;
