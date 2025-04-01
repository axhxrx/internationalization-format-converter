export const translations = {
  billings: {
    alert: {
      unable_to_load_history: { en: `Unable to load history`, ja: `過去のご利用料金をロードできませんでした` },
      unable_to_load_latest: { en: `Unable to load latest billing`, ja: `最新のご利用料金をロードできませんでした` },
    },
    all_taxes_included: { en: `Amounts include coupons, free tier and any applicable taxes.`,
      ja: `（表示はクーポン、無料利用枠の割引適用後の税込金額）` },
    back: { en: `Back`, ja: `戻る` },
    beta_notice: { en: `We will not charge any fees to your account during the private beta program.`,
      ja: `プライベートβ期間中は一切課金は発生しません` },
    dateRangeWarning: { en: `Billing {{dateRange}}`, ja: `{{dateRange}}の利用料金` },
    download_latest_csv: { en: `Download service usage charges (CSV)`, ja: `CSV 形式でダウンロード` },
    format_date_time: { en: `MMM DD, YYYY`, ja: `YYYY/MM/DD` },
    format_year_month: { en: `MMM YYYY`, ja: `YYYY 年 MM 月` },
    history: {
      header: { en: `Billing history`, ja: `過去のご利用料金` },
      table: {
        column: {
          amount: { en: `Amount of charge`, ja: `ご利用金額` },
          download: { en: `Download`, ja: `ダウンロード` },
          payment_status: { en: `Payment status`, ja: `お支払い状況` },
          yyyymm: { en: `Year / Month`, ja: `年月` },
        },
        payment_status_detail: {
          card_declined: { en: `Card declined`, ja: `カード決済が拒否されました` },
          incorrect_cvc: { en: `Incorrect CVC`, ja: `CVCセキュリティコードに誤りがあります` },
          incorrect_expiry: { en: `Incorrect expiry`, ja: `有効期限に誤りがあります` },
          incorrect_number: { en: `Incorrect card number`, ja: `カード番号が違います` },
          invalid_cvc: { en: `Invalid CVC`, ja: `CVCセキュリティコードが不正です` },
          invalid_expiry_month: { en: `Invalid expiry month`, ja: `カードの有効期限が不正です` },
          invalid_expiry_year: { en: `Invalid expiry year`, ja: `カードの有効期限が不正です` },
          invalid_name: { en: `Invalid name`, ja: `カード名義のフォーマットが不正です` },
          invalid_number: { en: `Invalid card number`, ja: `カード番号が不正です` },
          invalid_request: { en: `Invalid request`, ja: `リクエストが不正です` },
          missing: { en: `Card information is not provided`, ja: `カード情報が登録されていません` },
          processing: { en: `Processing`, ja: `処理中` },
          processing_error: { en: `Processing error`, ja: `処理中にエラーが発生しました` },
          success: { en: `Success`, ja: `処理成功` },
        },
        payment_status: {
          beforeCharging: { en: `In preparation`, ja: `決済処理準備中` },
          charging: { en: `Charging`, ja: `請求実施中` },
          delegated_to_third_party: { en: `Delegated to 3rd party`, ja: `債権譲渡済み` },
          delegating_to_third_party: { en: `Delegating to 3rd party`, ja: `債権譲渡中` },
          fail: { en: `Error`, ja: `エラー` },
          lessThanMinimumCharge: { en: `To be paid next month or later (less than minimum charge)`,
            ja: `翌月以降請求（最低課金額に満たないため）` },
          paid: { en: `Paid`, ja: `お支払い済み` },
          paying: { en: `Processing`, ja: `お支払い処理中` },
          refund_fail: { en: `Refund fail`, ja: `払い戻し失敗` },
          refunded: { en: `Refunded`, ja: `払い戻し済み` },
          refunding: { en: `Refunding`, ja: `払い戻し処理中` },
          temporary: { en: `Aggregating`, ja: `集計中` },
        },
      },
    },
    latest: {
      aggregating: { en: `AGGREGATING`, ja: `集計中` },
      date_time: { en: `Calculated at {{date}}`, ja: `{{date}} 時点の情報です` },
      header: { en: `Latest billing`, ja: `今月の利用料金` },
      header_year_month: { en: ` for {{date}}`, ja: ` - {{date}}` },
      pending: { en: `PENDING`, ja: `未定` },
      totalBillingWarning: { en: `Total Bill is finalized at the end of each calendar month`,
        ja: `ご利用料金の合計は、毎月の終わりに確定されています` },
      usageChargeInfo: {
        en:
          `Includes all Quoracomm platform service usage charges: data usage, connection fees, network and application service charges.`,
        ja:
          `月額料金 / 日額料金など継続して発生する利用料金や割引を含む QUORACOMM の利用料金を表示しています。ただし初期費用は含まれません。`,
      },
    },
    loading: { en: `Loading ...`, ja: `読み込み中 ...` },
    no_data: { en: `No items`, ja: `データがありません` },
    operator_id: { en: `Operator ID`, ja: `オペレーター ID` },
    view_service_usage: { en: `View service usage charges`, ja: `サービス利用料金を見る` },
  },
};
