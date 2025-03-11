export const translations = {
  generic: {
    button_title: {
      cancel: { en: `Cancel`, ja: `キャンセル` },
      change: { en: `Change`, ja: `変更` },
      change_lowercase: { en: `change`, ja: `変更` },
      close: { en: `Close`, ja: `閉じる` },
      ok: { en: `OK`, ja: `OK` },
      unset: { en: `Unset`, ja: `解除` },
    },
    deactivation_cost_detailed_warning: {
      g: {
        en:
          `NOTE: Deactivating a SIM <strong>does not eliminate the daily basic fee.</strong><br><br>Deactivating a SIM will prevent it from incurring data transfer charges, because a SIM cannot perform data transfer while in the "inactive" state. However, the basic daily fee of <span class='cost-warning'>USD $0.06 per day</span> will still apply. (The basic fee may be lower in some cases; please see the <a href='https://www.example.com/pricing/' target='_blank'>pricing page</a> for complete details.)`,
        ja:
          `注意:SIMを休止状態にしても<span class='cost-warning'>1日0.06 USD</span>の基本料金は停止されません。<br><br>SIMの状態を「休止」に変更すると、データ通信が休止されるため、データ通信量は課金されませんが、使用中と同様に<span class='cost-warning'>1日0.06 USD</span>の基本料金は継続して課金されます。基本料金は契約条件によって異なる場合があります。詳しくは<a href='https://quoracomm.jp/services/air/cellular/price_global/' target='_blank'>料金ページ</a>をご覧ください。`,
      },
      jp: {
        en:
          `NOTE: Deactivating this SIM will prevent it from incurring data transfer charges, because a SIM cannot perform data transfer while in the "inactive" state. However, the basic fee will still apply.`,
        ja:
          `注意:SIMを休止状態にしても基本料金は停止されません。<br><br>SIMの状態を「休止」に変更すると、データ通信が休止されるため、データ通信量は課金されませんが、使用中と同様に<span class='cost-warning'>10円/日(plan-KM1の場合、100円/月)</span>の基本料金は継続して課金されます。基本料金は契約条件によって異なる場合があります。詳しくは<a href='https://quoracomm.jp/services/air/cellular/price/' target='_blank'>料金ページ</a>をご覧ください。`,
      },
    },
    greeting: { en: `Hello, {{ name }}`, ja: `Hello, {{ name }}` },
    group: { en: `Group`, ja: `グループ` },
    label: {
      off: { en: `OFF`, ja: `OFF` },
      on: { en: `ON`, ja: `ON` },
    },
    message: {
      feature_cannot_be_displayed_in_this_browser: {
        en: `INCOMPATIBLE BROWSER: This feature is not compatible with this web browser, and cannot be displayed.`,
        ja:
          `この機能はお使いのWebブラウザでは互換性がないためご利用いただけません。 対応ブラウザについてはFAQをご確認ください。`,
      },
      not_specified: { en: `not specified`, ja: `なし` },
      the_date_is_not_valid: { en: `The date is not valid.`, ja: `日にちが正しくありません。` },
    },
    noGroup: { en: `(no group)`, ja: `(なし)` },
    noName: { en: `(no name)`, ja: `(なし)` },
    punctuation: {
      sentence_terminator: { en: `.`, ja: `。` },
    },
    speedClass: { en: `Speed class`, ja: `速度クラス` },
    tags: { en: `Tags`, ja: `タグ` },
  },
};
