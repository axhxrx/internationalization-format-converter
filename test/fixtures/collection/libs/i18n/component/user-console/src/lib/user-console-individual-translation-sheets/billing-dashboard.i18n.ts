export const translations = {
  billingDashboard: {
    coverageTypeWarning: { en: `Showing {{coverageType}} coverage billing only`,
      ja: `{{coverageType}}カバレッジの利用料金を表示しています` },
    totalBillingWarning: { en: `Total Bill is finalized at the end of each calendar month`,
      ja: `ご利用料金の合計は、毎月の終わりに確定されています` },
    updatedTimeWarning: {
      en: `Billing for the current month is updated every 12-24 hours and does not reflect charges in real-time.`,
      ja:
        `ご利用料金は、12 ～ 24 時間ごとに更新されます。リアルタイムの利用料金ではありません。また、更新日時はパネルごとに異なります。`,
    },
    recentBilling: {
      title: { en: `Recent Billing`, ja: `最近のご利用料金` },
      dateRangeInfo: { en: `(Current MTD: 1 - {{endDay}} {{monthName}})`,
        ja: `({{monthName}}1日 - {{monthName}}{{endDay}}日)` },
      dateRangeInfoSingleDay: { en: `(Current MTD: 1 {{monthName}})`, ja: `({{monthName}}１日)` },
      couponInfo: { en: `Totals shown includes savings from coupons`,
        ja: `表示される合計は、クーポン適用後の金額です` },
      couponApplied: { en: `Coupon applied`, ja: `クーポン適用` },
    },
    serviceBreakdown: {
      title: { en: `COSTS BY SERVICE`, ja: `サービス別の費用` },
      priceDifferenceWarning: {
        en: `Cost by service totals do not include discounts, coupons, free usage quotas or taxes.`,
        ja:
          `このパネルで表示される金額は、[最近のご利用料金] パネルに表示される金額と異なる条件で算出されています。詳しくは、<a href='https://users.example.com/ja-jp/guides/accounting/check-usage/billing-dashboard/' target='_blank'>[利用料金ダッシュボードを確認する]</a>を参照してください。`,
      },
    },
    costPerSim: {
      title: { en: `COSTS PER SIM (TOP 100)`, ja: `SIM ごとの料金 (トップ 100)` },
      description: { en: `Cost includes the fees of Basic, Data, SMS, and other options.`,
        ja: `料金には、基本料金、データ通信量、SMS、およびその他のオプションの料金が含まれます。` },
      costColumn: { en: `Cost`, ja: `料金` },
      simIdColumn: { en: `SIM ID`, ja: `SIM ID` },
      nameColumn: { en: `Name`, ja: `名前` },
      noDataMessage: { en: `No Data Available`, ja: `データはありません。` },
      priceDifferenceWarning: {
        en: `Cost per SIM totals do not include discounts, coupons, free usage quotas or taxes.`,
        ja:
          `このパネルで表示される金額は、[最近のご利用料金] パネルに表示される金額と異なる条件で算出されています。詳しくは、<a href='https://users.example.com/ja-jp/guides/accounting/check-usage/billing-dashboard/' target='_blank'>[利用料金ダッシュボードを確認する]</a>を参照してください。`,
      },
      samPermissionError: {
        en:
          `SAM user "{{ name }}" does not have sufficient permissions to view this panel. Please ask your administrator to add the following permissions: 'Query:searchSims' and 'Group:listGroups'.`,
        ja:
          `SAM ユーザー "{{ name }}" には、このパネルを見るための権限が設定されていません。管理者に依頼して、次の権限を設定してください: 'Query:searchSims', 'Group:listGroups'`,
      },
    },
    serviceBilling: {
      title: { en: `SERVICE BILLING`, ja: `サービスの費用` },
      info: {
        en:
          `For more details regarding bill items in the "SERVICE BILLING" panels, please view our <a href="https://developers.example.com/en/docs/account/billing/#csv-item-name-reference" target="_blank">billing csv documentation</a>.`,
        ja:
          `[サービスの費用]パネルの請求項目の詳細については、<a href="https://users.example.com/ja-jp/guides/accounting/check-usage/billing-csv/" target="_blank">[課金詳細情報 CSV リファレンス]</a>をご参照ください。`,
      },
    },
  },
};
