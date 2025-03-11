export const vpgIpAddressMappingI18n = {
  ipAddress: {
    en: 'IP Address',
    ja: 'IP アドレス',
  },
  imsi: {
    en: 'IMSI',
    ja: 'IMSI',
  },
  mainTitle: {
    en: 'IP Address map',
    ja: 'IP アドレスマッピング',
  },
  mainSubtitle: {
    en: 'Associate a static IP address to a SIM.',
    ja: '静的 IP アドレスを SIM に関連付けます。',
  },
  deleteAction: {
    en: 'Delete',
    ja: '削除',
  },
  addAction: {
    en: 'Add IP address',
    ja: 'IP アドレスを追加',
  },
  addVpgIpAddressMapping: {
    title: {
      en: 'Add Entry',
      ja: 'エントリを追加',
    },
    imsiAlreadyHasMapping: {
      en: 'The selected IMSI already has an IP address mapping.',
      ja: '選択した IMSI には既に IP アドレスマッピングが記録されています。',
    },
    illegalCharacter: {
      en: 'Unallowed characters are included in your input. Please check and try again.',
      ja: '指定できない文字が含まれています。'
    }
  },
  deleteVpgIpAddressMapping: {
    title: {
      en: 'Delete entries',
      ja: 'エントリを削除',
    },
    subTitle: {
      en: 'This operation can not be undone. Are you sure you want to delete the selected IP address map entries?',
      ja: 'この操作は元に戻せません。選択したエントリを削除してもよろしいですか？？',
    },
    description: {
      en: 'The following entries ({{amount}}) will be deleted:',
      ja: '以下のエントリ ({{amount}}) が削除されます:',
    },
    table: {
      ipAddress: {
        en: 'IP Address',
        ja: 'IP アドレス',
      },
    },
    submit: {
      en: 'Delete',
      ja: '削除',
    },
    retrySubmit: {
      en: 'Re-run failed jobs',
      ja: '失敗した操作を再実行',
    },
    cancel: {
      en: 'Cancel',
      ja: 'キャンセル',
    },
    singleDeleteSuccessHint: {
      en: 'Successfully deleted the IP address mapping record for IMSI: {{imsi}} ',
      ja: 'IMSI: {{imsi}} の IP アドレスマッピングレコードを削除しました。',
    },
    someOperationsFailed: {
      en: 'There was an error in deleting one or more IP address mapping records.',
      ja: '少なくとも 1 つの IP アドレスマッピングレコードの削除中にエラーが発生しました。',
    },
    success: {
      en: 'Successfully deleted {{numSuccess}} IP address mapping record(s).',
      ja: '{{numSuccess}} 件の IP アドレスマッピングレコードを削除しました。',
    },
    sessionWarning: {
      en: `Deleting an IP address mapping will disconnect the associated IoT SIM's session.`,
      ja: 'エントリを削除すると、そのエントリの IoT SIM のセッションが切断されます。',
    }
  },

  vpgIpAddressMappingFilter: {
    filterBy: {
      en: 'Filter by',
      ja: 'フィルター',
    },
    filter: {
      en: 'Filter',
      ja: 'フィルター',
    },
    addFilter: {
      en: 'Add',
      ja: '追加',
    },
  },
};
