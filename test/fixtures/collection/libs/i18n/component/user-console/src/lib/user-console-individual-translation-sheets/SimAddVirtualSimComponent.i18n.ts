export const translations = {
  SimAddVirtualSimComponent: {
    heading: {
      multiple: { en: `Add subscription to SIMs`, ja: `SIM にサブスクリプションを追加する` },
      single: { en: `Add subscription to SIM`, ja: `SIM にサブスクリプションを追加する` },
    },
    confirm: { en: `Add Subscription`, ja: `追加する` },
    helpText: { en: `This SIM can have multiple subscriptions.`,
      ja:
        `QUORACOMM IoT SIMはサブスクリプションを追加することで、接続可能なネットワークキャリアを拡張する機能を持っています。` },
    helpTextForVirtualSIMOnly: {
      en: `A virtual SIM (with subscription type planArc01) can be associated with this SIM.`,
      ja:
        `QUORACOMM Arc を利用するためには、 planArc01 サブスクリプションを追加してバーチャル SIM を有効にする必要があります。`,
    },
    currentSubscriptionsHelpText: {
      multiple: { en: `This SIM already has the following subscriptions:`,
        ja: `この SIM には以下のサブスクリプションが追加されています:` },
      single: { en: `This SIM already has the following subscription:`,
        ja: `この SIM には以下のサブスクリプションが追加されています:` },
    },
    noPlansAvailableToAdd: { en: `There are no additional subscription plans that can be added to this SIM.`,
      ja: `この SIM に新たに追加できるサブスクリプションはありません。` },
    addSubscriptionCostWarning: {
      en:
        `Each subscription that is added will incur a one-time subscription delivery charge, and a monthly subscription usage charge. Please check the <a href="https://developers.example.com/en/docs/reference/fees/#quoracomm-air-for-cellular">Pricing and Fee Schedule page</a> for details.`,
      ja:
        `サブスクリプション追加には、サブスクリプション追加費用およびサブスクリプション利用料金(月額)が発生します。料金については<a href="https://quoracomm.jp/services/air/cellular/price_iot_sim/">こちら</a>をご確認ください。`,
    },
    successMessage: { en: `Virtual SIM successfully added to SIM.`, ja: `バーチャル SIM を追加しました。` },
    planArcSuccessModalTitle: { en: `Subscription added`, ja: `サブスクリプションの追加` },
  },
};
