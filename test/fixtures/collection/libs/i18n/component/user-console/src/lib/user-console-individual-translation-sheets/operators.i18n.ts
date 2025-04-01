export const translations = {
  operators: {
    modals: {
      update_contracts: {
        cancel: { en: `Cancel`, ja: `キャンセル` },
        confirmation_text_subscribe: {
          en:
            `Enabling this option will generate additional costs. Please refer to <a href='https://www.example.com/pricing/' target='_blank'>the pricing information</a> on the website for the details`,
          ja:
            `Harquest Data のデータ保存期間延長を有効にすると追加費用が発生します。詳しくは当社 web サイトの<a href="https://quoracomm.jp/services/harquest/#pricing_data" target="_blank">料金ページ</a>をご確認ください。`,
        },
        confirmation_text_unsubscribe: { en: `Disabling this option will limit the display of past data to 40 days.`,
          ja: `Harquest Data のデータ保存期間延長を無効にすると40日以前に保存したデータが閲覧できなくなります。` },
        current_plan: { en: `Current plan`, ja: `契約中のプラン` },
        new_plan: { en: `New plan`, ja: `変更後のプラン` },
        submit: { en: `OK`, ja: `変更する` },
        title: { en: `Confirmation`, ja: `データ保持期間（TTL）の変更確認` },
      },
      update_quapcha_contracts: {
        cancel: { en: `Cancel`, ja: `キャンセル` },
        confirmation_text_subscribe: {
          en:
            `<p>Enabling this option will generate additional costs. Please refer to <a href='https://www.example.com/pricing/' target='_blank'>the pricing information</a> on the website for the details.</p><p>Immediately after enabling the Quapcha audit log retention period extension, past logs may not be displayed until the audit log migration is completed. Sorry for any inconvenience.</p>`,
          ja:
            `<p>Quapcha の監査ログ保存期間延長を有効にすると追加費用が発生します。詳しくは当社 web サイトの<a href="https://quoracomm.jp/services/quapcha/price/" target="_blank">料金ページ</a>をご確認ください。</p><p>Quapcha の監査ログ保存期間延長を有効にした直後、監査ログの移行が完了するまでしばらく過去のログが表示されない場合があります。しばらくお待ちください。</p>`,
        },
        confirmation_text_unsubscribe: { en: `Disabling this option will limit the display of log history to 24 hours.`,
          ja: `Quapcha の監査ログ保存期間延長を無効にすると24時間以前に保存したログが閲覧できなくなります。` },
        current_plan: { en: `Current status`, ja: `現在のステータス` },
        submit: { en: `OK`, ja: `変更する` },
        subscribed: { en: `Subscribed`, ja: `契約中` },
        title: { en: `Confirmation`, ja: `QUORACOMM Quapcha 監査ログ保持期間の変更` },
        unsubscribed: { en: `Unsubscribed`, ja: `未契約` },
      },
    },
  },
};
