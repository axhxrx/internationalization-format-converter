export const translations = {
  long_term_discount: {
    alerts: {
      activated_successfully: { en: `The long term discount was activated successfully.`,
        ja: `長期利用割引が有効になりました。` },
    },
    caption_has_data: {
      en:
        `There {{isOrAre}} {{ count }} long term discount{{sIfPlural}}, shown below. To create a new one, click 'New Long Term Discount'.`,
      ja: `{{ count }} 件`,
    },
    caption_no_data: { en: `This account has no long term discounts. To create one, click 'New Long Term Discount'.`,
      ja: `長期利用割引のご利用はありません。` },
    confirm_long_term_discount_modal_heading: { en: `Accept and activate long term discount`, ja: `申込内容の確認` },
    confirm_long_term_discount_modal_help_text_html: {
      en:
        `<p>Please review the details of the long term discount. To accept these terms and finalize this discount, press <strong>Accept & Activate Discount</strong>.</p><p>If you don't want to proceed with this discount, press Cancel.</p>`,
      ja: `<p>申込内容をご確認ください。</p>`,
    },
    discount_type: {
      QUORACOMM_AIR_BASIC_CHARGE: { en: `(Old plan) Discounted basic fee (daily)`, ja: `旧プラン (日額基本料固定)` },
      QUORACOMM_AIR_BASIC_CHARGE_V2: { en: `Discounted basic fee (daily)`, ja: `日額基本料固定` },
      QUORACOMM_AIR_MONTHLY_FIXED_BASIC_CHARGE: { en: `Discounted fixed rate (monthly)`, ja: `月額基本量固定` },
    },
    duration_in_months_suffix: { en: ` months`, ja: `ヶ月` },
    fixed_term: {
      '12': { en: `12 months (1 year)`, ja: `12 ヶ月 (1 年)` },
      '36': { en: `36 months (3 years)`, ja: `36 ヶ月 (3 年)` },
      '60': { en: `60 months (5 years)`, ja: `60 ヶ月 (5 年)` },
      '72': { en: `72 months (6 years)`, ja: `72 ヶ月 (6 年)` },
    },
    hints: {
      volume_discount_type: {
        en:
          `Customers who has purchased Long term discount before 2019/09 can select old plans. <a href="https://quoracomm.jp/services/air/cellular/discount_price_201909/" target="_blank">more details</a>`,
        ja:
          `2019年9月以前に長期利用割引を契約していた方は<a href="https://quoracomm.jp/services/air/cellular/discount_price_201909/" target="_blank">旧プラン</a>も選択可能です`,
      },
    },
    labels: {
      duration: { en: `Duration`, ja: `期間` },
      id: { en: `ID`, ja: `ID` },
      initial_cost: { en: `Initial cost`, ja: `初期費用` },
      jpy: { en: `JPY`, ja: `円` },
      number_of_sims: { en: `Number of SIMs`, ja: `割引が適用されるSIMの枚数` },
      payment_type: { en: `Payment type`, ja: `お支払い方法` },
      start_date: { en: `Start date`, ja: `適用開始日` },
      status: { en: `Status`, ja: `ステータス` },
      tax_amount: { en: `VAT / Tax`, ja: `税額` },
      term: { en: `Discount term`, ja: `契約期間` },
      total_amount: { en: `Total`, ja: `総額` },
      unit_price: { en: `Basic charge for each SIM`, ja: `1枚あたりの基本料金` },
      volume_discount_type: { en: `Type`, ja: `料金計算方法` },
    },
    new_long_term_discount_button_title: { en: `New Long Term Discount`, ja: `長期利用割引を追加` },
    new_long_term_discount_modal_cancel_button_title: { en: `Cancel`, ja: `キャンセル` },
    new_long_term_discount_modal_confirm_button_title: { en: `Accept & Activate Discount`, ja: `申し込む` },
    new_long_term_discount_modal_heading: { en: `Request long term discount quotation`, ja: `新規申込` },
    new_long_term_discount_modal_help_text_html: {
      en:
        `When you request long term discount longer than one year, please <a href="https://quoracomm.jp/contact/" target="_blank">contact our sales</a>.`,
      ja:
        `1年を超える長期利用割引の契約をご希望のお客様は、セールスまで<a href="https://quoracomm.jp/contact/" target="_blank">お問い合わせ</a>ください。`,
    },
    new_long_term_discount_modal_request_button_title: { en: `Request Quotation`, ja: `確認画面へ` },
    new_long_term_discount_modal_sending: { en: `Submitting discount request...`, ja: `送信中` },
    notice_body_html_content: {
      en:
        `<p>Long term discounts let you provision Quoracomm Air SIMs at a reduced rate for a fixed period of time.</p><p>The rate of discount depends on the term of the discount agreement and payment type.</p><p>To configure a long term discount, press <strong>New Long Term Discount</strong>. A quotation for the long term discount will be created immediately, and you can review it to decide whether or not to accept and activate the discount.<p>`,
      ja:
        `<p>長期利用割引は、固定期間のご契約をいただくことで、QUORACOMM Air の基本料金に割引料金が適用される制度です。</p><p>この長期利用割引は、plan-D（plan-D D-300MBを除く）およびplan-Kのサブスクリプションに適用可能です。</p><p>割引後の基本料金はご契約期間とお支払い方法によって異なります。詳細は<a href="https://quoracomm.jp/services/air/cellular/discount_price/" target="_blank">こちらからご確認いただけます</a>。</p><p><strong>「長期利用割引を追加」</strong>ボタンを押して、必要項目を入力してお申込みいただくと、すぐに反映されます。</p>`,
    },
    notice_heading: { en: `How do long term discounts work?`, ja: `長期利用割引とは？` },
    page_header: { en: `Long Term Discounts`, ja: `長期利用割引` },
    payment_type: {
      MONTHLY: { en: `Monthly`, ja: `月払い` },
      PREPAYMENT: { en: `Prepaid`, ja: `前払い` },
    },
    status: {
      active: { en: `active`, ja: `有効` },
      expired: { en: `expired`, ja: `期限切れ` },
    },
    title_has_data: { en: `Existing long term discounts`, ja: `申込済み` },
    title_loading: { en: `Loading existing long term discounts...`, ja: `読み込み中 ...` },
    title_no_data: { en: `No long term discounts exist.`, ja: `長期利用割引はありません。` },
  },
};
