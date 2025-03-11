export const translations = {
  payments: {
    contact_info_missing: {
      help_text: {
        en:
          `Your contact information is missing. You must register your contact information before you can change your payment settings.`,
        ja: `契約者情報が不足しています。お支払い方法を登録する前に契約者情報を登録してください。`,
      },
      link_text: {
        en: `Register contact information`,
        ja: `契約者情報を登録する`,
      },
    },
    detailsWarning: {
      en: `Details need to be entered for each coverage type (Global/Japan)`,
      ja: `各カバレッジタイプ（グローバル/日本）に詳細を入力する必要があります`,
    },
    eu_paper_invoice_option_notice: {
      en:
        `Billing details are available here, and invoice notifications are delivered via email. For an additional fee, EU customers also have the option to receive paper invoices. Please contact us for details.`,
      ja:
        `ご利用内容の詳細はこちらから取得していただくことができます。また、毎月のご利用明細はメールにて送付されます。EU 域内のお客様へは、追加の手数料をお支払いいただくことで紙のご利用明細をお送りいたします。詳細に関してはお問い合わせください。`,
    },
    guide: {
      payment_on_credit_card: {
        text: {
          en:
            `<p>If required, a small authorization hold (typically less than $1.00, €1.00, or ¥100) may be placed on newly registered credit cards. We use this verification process to help maintain a safe and trustworthy service and prevent service disruption. Please note in most cases, no actual charges will be made, and any holds will be released automatically within a few days.</p>`,
          ja:
            `必要に応じて、新しく登録されたクレジットカードに対して小額の与信枠の確保（例. $1.00、€1.00、または ¥100 未満）を設定する場合があります。この認証プロセスは、安全で信頼できるサービスを維持し、サービス停止を防ぐために行っています。なお、ほとんどの場合で実際に課金されることはなく、与信枠を確保した場合も数日以内に自動的に解除されますのでご安心ください。`,
        },
        title: { en: `Credit card`, ja: `クレジットカード払い` },
      },
      payment_on_invoice: {
        shared: {
          text1_g: {
            en:
              `Payment on invoice is available for business customers with a monthly service charge of USD $1,000.00 or more. To request payment on invoice, please <a href='https://www.example.com/contact/' target="_blank">contact us here.</a>`,
            ja:
              `クレジットカードによるお支払いではなく請求書によるお支払いをご希望の法人のお客様は、<a class='alert-link' href='https://quoracomm.jp/contact/contactsales/' target="_blank">こちらにお問い合わせください。</a>`,
          },
          text1_jp: {
            en:
              `If you want to migrate to 'payment on invoice' instead of payment by a credit card and you are a business customer, <a href='https://quoracomm.jp/contact/bill_payment/' target="_blank">please apply here.</a>`,
            ja:
              `クレジットカードによるお支払いではなく請求書によるお支払いをご希望の法人のお客様は、<a class='alert-link' href='https://quoracomm.jp/contact/bill_payment/' target="_blank">こちらよりご申請ください。</a>`,
          },
          text2: {
            en: `The migration process takes several business days.`,
            ja: `請求書払いへの切り替えが反映されるまでに数営業日のお時間をいただいております。`,
          },
        },
        title: { en: `Invoice (for businesses)`, ja: `請求書払い（法人向け）` },
      },
      shared: {
        text: {
          en: `Credit Card details need to be entered for each coverage type (Global/Japan).`,
          ja: `カバレッジタイプ（日本、グローバル）ごとに支払い方法を設定いただく必要がございます。`,
        },
        title: { en: `Coverage Type`, ja: `共通` },
      },
      title: { en: `Important notice`, ja: `注意事項` },
    },
    payment_by_banktransfer: {
      description: {
        en: `Your account is currently set to bank transfer.`,
        ja: `現在の支払い方法は 銀行振込 です`,
      },
      title: { en: `Bank transfer`, ja: `銀行振込` },
    },
    payment_on_credit_card: {
      distributor_payment_method_warning: {
        en: `Your payment method is currently managed by the distributor {{distributor}} and cannot be updated.`,
        ja:
          `このオペレーターの支払い方法はディストリビュータ {{distributor}} によって設定されているため、変更できません。`,
      },
      new_payment_method: {
        en: `New payment method`,
        ja: `新しいクレジットカードを登録`,
      },
      shared_payment_method_warning: {
        en: `Your payment method is currently managed by another operator and cannot be updated.`,
        ja: `このオペレーターの支払い方法は別のオペレーターによって設定されているため、変更できません。`,
      },
      title: { en: `Credit card`, ja: `クレジットカード払い` },
      update_payment_method: {
        en: `Update Credit Card`,
        ja: `クレジットカード情報を更新`,
      },
    },
    payment_on_invoice: {
      description: {
        en: `Your account is currently set to Payment on Invoice.`,
        ja: `お客様のアカウントは請求書によるお支払いに移行済みです`,
      },
      switch_to_credit_card: {
        en: `Switch to credit card`,
        ja: `クレジットカード払いに変更する`,
      },
      switch_to_payment_invoice: {
        en:
          `You have already registered an invoice payment for {{ coverage }} coverage.  You can add the current coverage to this invoice payment by clicking this button. Then you will pay both coverages with one invoice.`,
        ja:
          `現在 {{coverage}} カバレッジで請求書払いをご登録済みです。以下のボタンをクリックすることで現在ご選択中のカバレッジを追加することができ、1 枚の請求書で両方のカバレッジのご利用分をお支払い頂くことができます。`,
      },
      title: { en: `Payment on invoice`, ja: `請求書払い` },
    },
    tabs: {
      billing_alert: { en: `Notifications & Alerts`, ja: `利用料金アラート` },
      billing_dashboard: {
        en: `Billing Dashboard`,
        ja: `利用料金ダッシュボード`,
      },
      billings: { en: `Billing & Payment History`, ja: `利用料金と支払い履歴` },
      invoices: { en: `Invoices`, ja: `請求書` },
      payment_methods: { en: `Payment Settings`, ja: `支払い設定` },
      payment_statements: { en: `Payment Statements`, ja: `支払明細` },
    },
    title: { en: `Payment Method`, ja: `お支払い方法` },
  },
};
