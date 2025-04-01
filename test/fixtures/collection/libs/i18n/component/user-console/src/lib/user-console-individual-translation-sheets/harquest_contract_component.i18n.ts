export const translations = {
  harquest_contract_component: {
    apply: { en: `Apply`, ja: `適用` },
    description: {
      en:
        `Extending the data retention period of Harquest Data will incur additional fees. Please refer to <a href='https://www.example.com/pricing/' target='_blank'>the Harquest Data pricing information</a> for details.`,
      ja:
        `保持期間を過ぎたデータは自動的に削除されます。デフォルトは40日です。設定を変更することで保存期間を約2年(731日) に延長することができます。<br>保存済みのデータの保持期間を変更することはできないため、データを保存する前にあらかじめ保持期間を延長しておく必要があります。<br><a href="https://quoracomm.jp/services/harquest/#pricing" target="_blank">データの保持期間を延長すると、追加料金が発生します</a>。`,
    },
    disabled_successfully: { en: `Disabled the extended retention period of Quoracomm Harquest Data.`,
      ja: `データの保持期間の延長を無効にしました` },
    enabled_successfully: { en: `Enabled the extended retention period of Quoracomm Harquest Data.`,
      ja: `データの保持期間を延長しました` },
    label: { en: `TTL`, ja: `データ保持期間 (TTL)` },
  },
};
