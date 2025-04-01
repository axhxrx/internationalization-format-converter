export const translations = {
  payment_methods: {
    activation_modal: {
      activate: { en: `Activate`, ja: `有効化` },
      caption: { en: `If you've resolved the payment issue, please click 'Activate' button`,
        ja:
          `エラー内容が解消できた場合は「有効化」ボタンを押してください。解消ができない場合やご入力内容の変更が必要な場合は、新しいお支払方法を登録してください` },
      close: { en: `Close`, ja: `閉じる` },
      header: { en: `Payment method status`, ja: `決済エラーの詳細` },
    },
    card: {
      address1: { en: `Address 1`, ja: `番地` },
      address2: { en: `Address 2`, ja: `建物名など` },
      caption: {
        cardholder: {
          en: '',
          ja: '(半角英字)',
        },
      },
      cardholder: { en: `Cardholder name`, ja: `カード名義` },
      cardholder_help: {
        en:
          `Please remove symbol characters such as period (.) and dash (-) from the cardholder's name. e.g.) A. ABC-COM => A ABCCOM`,
        ja:
          `カード名義の中に記号（ピリオド、ハイフンなど）が含まれている場合はそれらを除いて入力してください。例）A. TA-RO => A TARO`,
      },
      city: { en: `City`, ja: `市区町村名` },
      country: { en: `Country`, ja: `国` },
      cvc: { en: `CVC/CVV`, ja: `セキュリティコード` },
      cvc_help: { en: `The Card Verification Code, or CVC*, is an extra 3-4 digit code printed on your credit card.`,
        ja: `カードに記載されている 3〜4 桁の数です。` },
      details: { en: `Card details`, ja: `カードの詳細情報` },
      expiry: { en: `Expiry`, ja: `有効期限` },
      expiry_month: { en: `Expiry month`, ja: `月` },
      expiry_year: { en: `Expiry year`, ja: `年` },
      guideline: {
        en:
          `<a href="https://support.example.com/hc/en-us/articles/217902998-What-credit-cards-can-I-use-" target="_blank">What credit cards can I use?</a>`,
        ja:
          `<a href="https://support.example.com/hc/ja/articles/217902998-%E5%88%A9%E7%94%A8%E5%8F%AF%E8%83%BD%E3%81%AA%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%AB%E3%83%BC%E3%83%89%E3%81%AF-" target="_blank">利用可能なクレジットカードは？</a>`,
      },
      number: { en: `Card Number`, ja: `カード番号` },
      state: { en: `State`, ja: `都道府県名` },
      zip: { en: `Zip`, ja: `郵便番号` },
    },
    commonAPIError: { en: `An unexpected error has occurred.`, ja: `予期せぬエラーが発生しました` },
    created: { en: `Created a new payment method`, ja: `お支払い方法が登録されました` },
    detail: { en: `Detail`, ja: `詳細` },
    error: { en: `Invalid Payment Method: The registered credit card has a problem. Error code: {{ errorCode }}`,
      ja: `決済エラー: お支払い方法にエラーがあります。エラーコード {{ errorCode }}` },
    expiration_is_near: { en: `The registered credit card is about to expire. Please register a new credit card.`,
      ja: `クレジットカードの有効期限が迫っています。クレジットカード情報を更新してください。` },
    expired: { en: `The registered credit card has expired. Please register a new credit card.`,
      ja: `クレジットカードの有効期限が切れています。クレジットカード情報を更新してください。` },
    new: {
      cancel: { en: `Cancel`, ja: `キャンセル` },
      caption_global: { en: `<p>The current payment method will be replaced with the new one.</p>`,
        ja: `<p>新しいクレジットカードを登録すると、今後のお支払いは新しいクレジットカードで行われます。</p>` },
      caption_jp: {
        en:
          `<p>The current payment method will be replaced with the new one.</p><p class='text-danger'> (Please note that we do not accept debit cards / prepaid cards.)</p>`,
        ja:
          `<p>新しいクレジットカードを登録すると、今後のお支払いは新しいクレジットカードで行われます。</p><p class='text-danger'>デビットカード・プリペイドカードはご利用いただけません。<br>一部のクレジットカードはご利用いただけない場合があります。</p>`,
      },
      submit: { en: `Submit`, ja: `登録` },
      title: { en: `Add a new credit card`, ja: `新しいクレジットカードを登録` },
      unsupported_brand: { en: `Your card brand is not supported.`, ja: `このカードブランドには対応しておりません。` },
    },
    not_found: { en: `Please add a new payment method`, ja: `お支払い方法が登録されていません` },
  },
};
