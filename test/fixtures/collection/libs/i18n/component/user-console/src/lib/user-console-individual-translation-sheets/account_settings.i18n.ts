export const translations = {
  account_settings: {
    company_information: {
      account_type: {
        corporate: { en: `Business`, ja: `法人として利用` },
        individual: { en: `Individual`, ja: `個人として利用` },
        label: { en: `Account type`, ja: `アカウントタイプ` },
      },
      add_info_do_this_later: { en: `Do this later`, ja: `後でする` },
      alert_add_info_required: { en: `Please register the contact information for this account.`,
        ja: `契約者情報を登録してください。` },
      alert_billing_address: {
        en:
          `Updating your contact information will not change the information reflected on your invoice. To change the information shown on your invoices, please <a href="/payments">update your payment information</a>.`,
        ja:
          `ネットプロテクションズ社が発行する請求書に記載される情報は <a href="/payments">こちら</a> から変更いただけます。`,
      },
      alert_corporation: { en: `Your account is registered as business account.`, ja: `法人として登録されています。` },
      alert_individual: {
        en:
          `Your account is registered as an individual account. It is not possible to convert it to a business account.`,
        ja: `個人として登録されています。法人への登録変更は受け付けておりませんので、ご了承ください。`,
      },
      alert_unregistered: { en: `Please register contact information.`, ja: `契約者情報を登録してください。` },
      created: { en: `Your contact information is registered.`, ja: `契約者情報を登録しました` },
      save_as_corporation: { en: `Save`, ja: `契約者情報を登録する` },
      title: { en: `Contact Information`, ja: `契約者情報` },
      update: { en: `Update`, ja: `契約者情報を更新する` },
      updated: { en: `Your contact information is updated.`, ja: `契約者情報を更新しました` },
    },
    coupons: {
      balance: {
        header: { en: `Your Quoracomm Coupon Balance`, ja: `クーポンの残高` },
      },
      bill_item_name: {
        dailyChargeTotal: { en: `Total Charge`, ja: `課金総額` },
        dailyDataTrafficChargeTotal: { en: `Air Data Traffic`, ja: `Air データ通信料` },
        dailyQuoracommBeamRequestChargeTotal: { en: `Beam Requests`, ja: `Beam 利用料` },
        loraGatewayOwnedModelCharge: { en: `LoRaWAN Gateway Charge (owned)`,
          ja: `LoRaWAN ゲートウェイ利用費用(所有モデル)` },
        loraGatewaySharedServiceModelCharge: { en: `LoRaWAN Gateway Charge (shared service model)`,
          ja: `LoRaWAN ゲートウェイ利用費用(共有サービスモデル)` },
      },
      loading: { en: `Loading ...`, ja: `読み込み中 ...` },
      modals: {
        purchase: {
          amount_help_text: { en: `(1,000 - 10,000,000 JPY)`, ja: `(1,000 〜 10,000,000円)` },
          amount_label: { en: `Amount`, ja: `購入金額` },
          amount_placeholder: { en: `e.g., 2000`, ja: `例: 2000` },
          cancel_button_title: { en: `Cancel`, ja: `キャンセル` },
          expiration_help_text: {
            en:
              `(this coupon can be applied to services used during the month indicated, or any time before, but not after)`,
            ja: `(当クーポンは購入月分の料金にも適用されます。)`,
          },
          expires_label: { en: `Expires`, ja: `有効期限 (年/月)` },
          explanatory_text: {
            en:
              `<p>Coupons purchased here may be used in the future, as follows:</p><ul><li>The coupon amount is registered in Japanese yen (JPY).</li><li>Coupons may be applied to all Quoracomm service fees, but cannot be used to purchase physical products, such as SIM cards or devices.</li><li>Coupons purchased here are valid for 13 months from purchase date. After that, they can no longer be used and do not retain value.</li><li>Cancellation is not possible after purchase.</li><li>For more information, please refer to the <a href='https://quoracomm.jp/share/coupon_terms' target='_blank' rel='noopener'>coupon terms</a> and <a href='https://quoracomm.jp/share/settlement' target='_blank' rel='noopener'>payment processing policy information</a> page. By purchasing a coupon, you indicate acceptance of the <a href='https://quoracomm.jp/share/coupon_terms' target='_blank' rel='noopener'>coupon terms</a>.</li></ul>`,
            ja:
              `<p>以下の点についてご確認ください。</p><ul><li>当クーポンの通貨は日本円です。</li><li>当クーポンは QUORACOMM プラットフォームの課金総額に適用できるクーポンです。</li><li>当クーポンは IoT SIM の初期費用やデバイスの購入費用には適用できません。</li><li>クーポンの有効期限は 13 か月です。残高が残っていても、有効期限を過ぎたクーポンは利用できません。</li><li>クーポンの購入後のキャンセル、払い戻しはお受けできません。</li><li><a href='https://quoracomm.jp/share/coupon_terms' target='_blank' rel='noopener'>クーポンに関する規約</a> および <a href='https://quoracomm.jp/share/settlement' target='_blank' rel='noopener'>資金決済に関する法律に基づく表示</a> をご確認ください。購入をもって<a href='https://quoracomm.jp/share/coupon_terms' target='_blank' rel='noopener'>クーポンに関する規約</a>に同意したものとします。</li></ul>`,
          },
          header: { en: `Order new Quoracomm Platform Coupon`, ja: `QUORACOMM プラットフォームクーポンの購入` },
          next_button_title: { en: `Next`, ja: `次へ` },
          order_button_title: { en: `Order`, ja: `購入する` },
          order_id_label: { en: `Order ID`, ja: `オーダー ID` },
          tax_amount_label: { en: `Tax Amount`, ja: `内消費税` },
          total_amount_label: { en: `Total Amount (Tax Included)`, ja: `購入金額 (税込)` },
        },
        register: {
          cancel: { en: `Cancel`, ja: `キャンセル` },
          coupon_code: { en: `Coupon code`, ja: `クーポンコード` },
          do_register: { en: `Register`, ja: `登録` },
          header: { en: `Register a coupon`, ja: `クーポンを登録` },
        },
      },
      no_data: { en: `No coupons`, ja: `データがありません` },
      purchase: { en: `Purchase a coupon`, ja: `クーポンを購入` },
      register: { en: `Register a coupon`, ja: `クーポンを登録` },
      table: {
        column: {
          amount: { en: `Amount`, ja: `購入金額` },
          balance: { en: `Balance`, ja: `残高` },
          coupon_code: { en: `Claim code`, ja: `クーポンコード` },
          expiry: { en: `Expiry month`, ja: `有効期限（年/月）` },
          item: { en: `Item`, ja: `適用対象` },
          order_id: { en: `Order ID`, ja: `発注ID` },
        },
        header: { en: `Coupon list`, ja: `有効なクーポンの一覧` },
      },
      title: { en: `Coupons`, ja: `クーポン` },
    },
    coverage_country_warning: { en: `Updating your address may update your tax location.`,
      ja: `現在登録されている国においては、住所を更新すると納税地が変更される場合があります。` },
    coverage_warning: {
      en: `This address appears on your monthly invoice and should be the legal address of your home or business.`,
      ja: `この住所は毎月の請求書に記載されます。自宅または会社の住所を正しく入力してください。`,
    },
    email: {
      change_email: { en: `Email settings`, ja: `メールアドレス設定` },
      curr_email: { en: `Current email address`, ja: `現在のメールアドレス` },
      new_email: { en: `New email address`, ja: `新しいメールアドレス` },
      unable_to_update: { en: `Unable to update email address. Please try again later.`,
        ja: `メールアドレスの変更ができませんでした` },
    },
    lang: {
      display_language: { en: `Display language / 表示言語`, ja: `表示言語 / Display Language` },
      title: { en: `Language settings / 言語設定`, ja: `言語設定 / Language settings` },
    },
  },
};
