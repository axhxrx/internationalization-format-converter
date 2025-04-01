export const tenantDeleteConfirmModelI18n = {
  title: {
    en: 'Delete Tenant?',
    ja: 'テナントの削除',
  },
  subtitle: {
    en: 'To delete this tenant and terminate all their services, please confirm the following information.',
    ja: 'この操作は元に戻すことができません。このテナントを削除してもよろしいですか？',
  },

  prerequisitesText: {
    en: 'Checking service status...',
    ja: 'サービスのステータスを確認中...',
  },

  tenantDeleteInfoDescription: {
    en: 'Tenant to be deleted:',
    ja: '削除されるテナント:',
  },

  tenantDeleteInfo: {
    operatorId: {
      en: 'Operator ID',
      ja: 'オペレータ ID',
    },
    tenantName: {
      en: 'Tenant Name',
      ja: 'テナント名',
    },
    tenantDescription: {
      en: 'Tenant Description',
      ja: 'テナントの説明',
    },
  },

  tenantServiceStatus: {
    header: {
      en: 'Tenant Service status',
      ja: 'サービスステータス',
    },
    actionRequiredTag: {
      en: 'Action required',
      ja: 'アクションが必要',
    },
    actionRequiredTitle: {
      en: 'Further action is required to delete this tenant',
      ja: 'このテナントを削除するにはさらなる操作が必要です',
    },
    actionRequiredDescription: {
      en: 'Before a tenant can be deleted, it is necessary to terminate any active SIMs, devices, or other services, which are preventing the account from being deleted.',
      ja: 'テナントを削除する前に、アカウントの削除を妨げているアクティブな SIM、デバイス、またはその他のサービスを終了する必要があります。',
    },
    actionRequiredNextSteps: {
      en: 'Please resolve the issues highlighted below. Once these issues have been resolved, please revisit this page or press the Check Again button below.',
      ja: '以下に示す問題を解決してください。これらの問題が解決されたら、このページを再度訪れるか、以下の「再確認」ボタンを押してください。',
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
      en: 'Tenant account will be deleted and all services terminated',
      ja: 'テナントアカウントを削除し、すべてのサービスを終了できます',
    },
    permanentNotice: {
      en: 'This action is permanent and can not be undone.',
      ja: 'この操作は元に戻すことができません。このテナントを削除してもよろしいですか？',
    },
    emailNotice: {
      en: 'Unregistering the email address associated with this tentant may take a few days. You may still receive emails during this period.',
      ja: 'このテナントに関連付けられたメールアドレスの登録解除には数日かかる場合があります。この期間中もメールを受信することがあります。',
    },
    confirmCheckboxLabel: {
      en: 'I confirm I wish to permanently delete the account for <strong class="ds-text --bold --alert">{{ tenantName }}</strong> ({{ operatorId }})',
      ja: '<strong class="ds-text --bold --alert">{{ tenantName }}</strong> ({{ operatorId }}) のアカウントを永久に削除することを確認します',
    },

    confirmDeleteWithPasswordLabel: {
      en: 'Enter your password to confirm deletion',
      ja: '削除を確認するにはパスワードを入力してください',
    },
  },

  // actionRequired: {
  //   header: {
  //     en: 'Confirm delete',
  //     ja: '削除を確認',
  //   },
  //   description: {
  //     en: 'Tenant account will be deleted and all services terminated',
  //     ja: 'テナントアカウントを削除し、すべてのサービスを終了できます',
  //   },
  //   permanentNotice: {
  //     en: 'This action is permanent and can not be undone.',
  //     ja: 'この操作は元に戻すことができません。このテナントを削除してもよろしいですか？',
  //   },
  //   emailNotice: {
  //     en: 'Unregistering the email address associated with this tentant may take a few days. You may still receive emails during this period.',
  //     ja: 'このテナントに関連付けられたメールアドレスの登録解除には数日かかる場合があります。この期間中もメールを受信することがあります。',
  //   },
  // },

  buttons: {
    cancel: {
      en: 'Cancel',
      ja: 'キャンセル',
    },
    delete: {
      en: 'Delete tenant',
      ja: 'テナントを削除',
    },
  },
};
