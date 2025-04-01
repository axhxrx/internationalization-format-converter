export const translations = {
  ChangeSubscribersBundlesComponent: {
    chooseBundle: {
      bundle: { en: `Bundle`, ja: `バンドル` },
      package: { en: `Package`, ja: `パッケージ` },
      mixed: { en: `Bundle/Package`, ja: `バンドル/パッケージ` },
    },
    confirmation: {
      planD300MB: {
        en:
          `I acknowledge that when the bundle is changed to D-300MB, the speed class will be changed to s1.4xfast automatically, and that when the monthly data usage for a SIM with bundle D-300MB exceeds 250 MiB, a data usage notification email will be sent to the account administrator.`,
        ja:
          `D-300MBにバンドルを変更すると、速度クラスがs1.4xfastに変更となります。また、SIMの月次データ通信量が250MiBを超えた場合、「データ通信使用量のお知らせ」のメールが管理者宛に通知されます。`,
      },
    },
    heading: {
      bundle: {
        multiple: { en: `Update SIM bundle`, ja: `バンドルの更新` },
        single: { en: `Update SIM bundle`, ja: `バンドルの更新` },
      },
      package: {
        multiple: { en: `Update SIM package`, ja: `パッケージの更新` },
        single: { en: `Update SIM package`, ja: `パッケージの更新` },
      },
      mixed: {
        multiple: { en: `Update SIM bundle/package`, ja: `バンドル／パッケージの更新` },
        single: { en: `Update SIM bundle/package`, ja: `バンドル／パッケージの更新` },
      },
    },
    explanatoryText: {
      bundle: {
        en:
          `You can change the bundle associated with the the SIM, to adjust the amount of data transfer that is included in the fixed price.`,
        ja: `SIMのバンドルを変更して、バンドルに含まれるデータ通信量を変更できます。`,
      },
      package: {
        en:
          `You can change the package associated with the the SIM, to adjust the amount of data transfer that is included in the fixed price.`,
        ja: `SIMのパッケージを変更して、パッケージに含まれるデータ通信量を変更できます。`,
      },
      mixed: {
        en:
          `You can change the bundle/package associated with the the SIM, to adjust the amount of data transfer that is included in the fixed price.`,
        ja: `SIMのバンドル／パッケージを変更して、バンドル／パッケージに含まれるデータ通信量を変更できます。`,
      },
    },
    explanatoryTextMoreInfo: {
      bundle: {
        en:
          `Changing the bundle may incur additional fees, so please confirm the <a href='https://developers.example.com/en/docs/reference/fees/' target='_blank'>pricing information</a> before making changes.`,
        ja:
          `バンドル変更後は基本料金およびデータ通信料金が変わります。詳しくは、<a href="https://quoracomm.jp/services/air/cellular/price_specific_area_sim" target="_blank">ご利用料金 - 特定地域向け IoT SIM</a> を参照してください。`,
      },
      package: {
        en:
          `Changing the package may incur additional fees, so please confirm the <a href='https://developers.example.com/en/docs/reference/fees/' target='_blank'>pricing information</a> before making changes.`,
        ja:
          `パッケージ変更後は基本料金およびデータ通信料金が変わります。詳しくは、<a href="https://quoracomm.jp/services/air/cellular/price_iot_sim" target="_blank">ご利用料金 - IoT SIM</a> を参照してください。`,
      },
    },
    errorMessage: {
      bundle: {
        en: `The attempt to change the SIM bundle failed. Please check the information above for detailed information.`,
        ja: `バンドルを変更できませんでした。 詳細については、上記の情報を確認してください。`,
      },
      package: {
        en:
          `The attempt to change the SIM package failed. Please check the information above for detailed information.`,
        ja: `パッケージを変更できませんでした。 詳細については、上記の情報を確認してください。`,
      },
      mixed: {
        en:
          `The attempt to change the SIM bundle/package failed. Please check the information above for detailed information.`,
        ja: `バンドル／パッケージを変更できませんでした。 詳細については、上記の情報を確認してください。`,
      },
    },
    helpTextForNoChanges: {
      bundle: {
        multiple: { en: `All {{count}} SIMs are already using bundle {{bundleName}}. To change, select a new bundle.`,
          ja: `{{ count }} 枚の SIM はすでに {{ bundleName }} が適用されています。別のバンドルを選択してください。` },
        single: { en: `This SIM is already using bundle {{bundleName}}. To change, select a new bundle.`,
          ja: `すでに {{ bundleName }} が適用されています。別のバンドルを選択してください。` },
      },
      package: {
        multiple: { en: `All {{count}} SIMs are already using package {{bundleName}}. To change, select a new package.`,
          ja: `{{ count }} 枚の SIM はすでに {{ bundleName }} が適用されています。別のパッケージを選択してください。` },
        single: { en: `This SIM is already using package {{bundleName}}. To change, select a new package.`,
          ja: `すでに {{ bundleName }} が適用されています。別のパッケージを選択してください。` },
      },
      mixed: {
        multiple: {
          en:
            `All {{count}} SIMs are already using bundle/package {{bundleName}}. To change, select a new bundle/package.`,
          ja:
            `{{ count }} 枚の SIM はすでに {{ bundleName }} が適用されています。別のバンドル／パッケージを選択してください。`,
        },
        single: {
          en: `This SIM is already using bundle/package {{bundleName}}. To change, select a new bundle/package.`,
          ja: `すでに {{ bundleName }} が適用されています。別のバンドル／パッケージを選択してください。`,
        },
      },
    },
    helpTextForSimWhoseBundleCannotBeChanged: {
      en: `It is not possible to change the bundle of a SIM which is already set to {{ bundleName }}.`,
      ja: `既に {{ bundleName }} が設定されているため、バンドルを変更することはできません。`,
    },
    successMessage: {
      bundle: {
        multiple: { en: `The bundle for all {{ count }} SIMs was successfully changed to {{ newBundle }}.`,
          ja: `{{ count }} 枚の SIM が {{ newBundle }} に更新されました。` },
        single: { en: `The bundle for the SIM was successfully changed to {{ newBundle }}.`,
          ja: `{{ newBundle }} に更新されました。` },
      },
      package: {
        multiple: { en: `The package for all {{ count }} SIMs was successfully changed to {{ newBundle }}.`,
          ja: `{{ count }} 枚の SIM が {{ newBundle }} に更新されました。` },
        single: { en: `The package for the SIM was successfully changed to {{ newBundle }}.`,
          ja: `{{ newBundle }} に更新されました。` },
      },
      mixed: {
        multiple: { en: `The bundle/package for all {{ count }} SIMs was successfully changed to {{ newBundle }}.`,
          ja: `{{ count }} 枚の SIM が {{ newBundle }} に更新されました。` },
        single: { en: `The bundle/package for the SIM was successfully changed to {{ newBundle }}.`,
          ja: `{{ newBundle }} に更新されました。` },
      },
    },
  },
};
