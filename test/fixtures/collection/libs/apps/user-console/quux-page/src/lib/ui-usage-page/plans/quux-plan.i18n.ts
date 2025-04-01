/**
 The main i18n definitions for the Quux plan. @masonmark 2025-03-11: Note that I separated the i18n definitions here from the usage of localizeAll() to prelocalize them; this is because our SimpleLocalize integration won't support *i18n.ts files having colocated functions in the same file. (At least, not the initial version of it.)
 */
export const quuxPlanI18nDefs = {
  basicFee: {
    ja: '月額基本料金',
    en: 'Monthly basic charge',
  },
  contactUs: {
    en: 'Contact us',
    ja: 'ご相談ください',
  },
  unlimited: {
    en: 'Unlimited',
    ja: '無制限',
  },
  free: {
    ja: '無料',
    en: 'Free',
  },
  plan: {
    en: 'Plan',
    ja: 'プラン',
  },
  month: {
    en: 'month',
    ja: '月',
  },
  events: {
    en: 'events',
    ja: 'イベント',
  },
  credits: {
    en: 'credits',
    ja: 'クレジット',
  },
  maxApps: {
    ja: '最大 Quux アプリ数',
    en: 'Max Quux apps',
  },
  appSuffix: {
    ja: 'アプリ',
    en: 'apps',
  },
  eventPriceLabel: {
    ja: 'イベント数に応じた料金',
    en: 'Price per event',
  },
  eventBundleDescription: {
    ja: '<strong>バンドル</strong>: <wbr/>{{ n }} イベント / 月',
    en: '<strong>Bundle</strong>: <wbr/>{{ n }} events / month',
  },
  eventUnitPriceDescription: {
    ja: '<strong>バンドル超過分</strong>: <wbr/>{{ price }} / イベント',
    en: '<strong>Excess bundle</strong>: <wbr/>{{ price }} / event',
  },
  creditPriceLabel: {
    ja: 'クレジット使用料金',
    en: 'Credit price',
  },
  creditBundleDescription: {
    ja: '<strong>バンドル</strong>: </wbr/>{{ n }} クレジット / 月',
    en: '<strong>Bundle</strong>: <wbr/>{{ n }} credits / month',
  },
  creditUnitPriceDescription: {
    ja: '<strong>バンドル超過分</strong>: <wbr/> {{ price }} <wbr/> / クレジット',
    en: '<strong>Excess bundle</strong>: <wbr/> {{ price }} <wbr/> / credit',
  },
  support: {
    label: {
      en: 'Support',
      ja: 'サポート',
    },
    developer: {
      ja: '障害/不具合のお問い合わせのみ',
      en: 'Only inquiries about malfunctions and bugs',
    },
    standard: {
      ja:
        'ご利用方法のお問い合わせ、各種ドキュメントの内容に関連する質問やトラブルシューティング (QUORACOMM サポートのプランに準じます)',
      en:
        'Inquiries about how to use the service, questions related to the content of various documents, and troubleshooting (in accordance with the Quoracomm Support Plan)',
    },
    enterprise: {
      ja: '24時間365日の対応、専任技術者のアサイン (QUORACOMM サポートの Enterprise プランを前提とします)',
      en: '24/7 support, assignment of dedicated engineers (based on the Quoracomm Support Enterprise Plan)',
    },
  },
  purpose: {
    label: {
      en: 'Purpose',
      ja: '用途',
    },
    developer: {
      ja: '小規模でシンプルな IoT の自動化',
      en: 'Small-scale, simple IoT automation',
    },
    standard: {
      ja: '業務利用、幅広い IoT の自動化',
      en: 'Business use, wide range of IoT automation',
    },
    enterprise: {
      ja: 'ミッションクリティカルな IoT の自動化',
      en: 'Mission-critical IoT automation',
    },
  },
  availableFeatures: {
    en: 'Available features',
    ja: '利用可能な機能',
  },
  scheduleTimer: {
    en: 'Schedule timer (Cron)',
    ja: 'スケジュールタイマー (Cron)',
  },
  emailActionLimit: {
    label: {
      ja: 'Email通知アクションによる<wbr>メール通知の制限',
      en: 'Limit on email notifications by email notification action',
    },
    developer: {
      ja: `<ul class="ds-list"><li>1 時間あたり最大 10 通</li> <li>1 か月 100 通まで</li></ul>`,
      en: `<ul class="ds-list"><li>Up to 10 per hour</li> <li>Up to 100 per month</li></ul>`,
    },
    standard: {
      ja: `<ul class="ds-list"><li>1 時間あたり最大 10 通</li></ul>`,
      en: `<ul class="ds-list"><li>Up to 10 per hour</li></ul>`,
    },
    enterprise: { en: 'Contact us', ja: 'Contact us' },
  },
  features: {
    label: {
      ja: '利用機能な機能',
      en: 'Available features',
    },
    developer: {
      en: 'Basic features',
      ja: '基本機能',
    },
    standard: {
      ja: `
      <ul class="ds-list --icon-check-mark-large --small">
        <li> Developer プランの全機能</li>
        <li>スケジュールタイマー (Cron 設定)</li>
      </ul>
      `,
      en: `
      <ul class="ds-list --icon-check-mark-large --small">
        <li> All features of the Developer plan</li>
        <li>Schedule timer (Cron)</li>
      `,
    },
    enterprise: {
      ja: `
      <ul class="ds-list --icon-check-mark-large --small">
        <li> Developer プランの全機能</li>
        <li>スケジュールタイマー (Cron 設定)</li>
      </ul>
      `,
      en: `
      <ul class="ds-list --icon-check-mark-large --small">
        <li> All features of the Developer plan</li>
        <li>Schedule timer (Cron)</li>
      `,
    },
  },
  notice1: {
    en: 'Bundle amounts will not be carried over to the next month.',
    ja: 'バンドル分の翌月繰越は行いません。',
  },
  notice2: {
    en:
      'Credits and event counts have upper limits set by the bundle. If you want to use more than the upper limit, please update the upper limit. Any usage exceeding the monthly bundle will be charged based on usage.',
    ja:
      'クレジット、イベント数は、バンドル分の上限値が設定されます。これを超えて使用したい場合は上限を更新してください。月のバンドル分を超える分は従量課金でご利用いただけます。',
  },
  notice3: {
    en:
      '<span>The upper limit of the number of requests to external services is managed by "credits". For example, Quggle Gemini 1.5 Flash consumes 4 credits per request. Quazure OpenAI GPT-4o consumes 86 credits per request. Please refer to the <a href="https://quoracomm.jp/services/quux/" target="_blank" class="--link">pricing page</a> for AI models and the credits they consume.</span>',
    ja:
      '<span>外部サービスのリクエスト数の上限は「クレジット」により管理されます。たとえば、Quggle Gemini 1.5 Flash では 1 リクエストごとに 4 クレジットを消費します。Quazure OpenAI GPT-4o では 1 リクエストごとに 86 クレジットを消費します。AIモデルと消費するクレジットは<a href="https://quoracomm.jp/services/quux/" target="_blank" class="--link"> 料金ページ</a>を参照してください。</span>',
  },
  notice4: {
    en: 'The features available in the Standard and Enterprise plans will be expanded in the future.',
    ja: 'Standard プランおよび Enterprise プランで利用できる機能は今後拡張されます。',
  },
  payment: {
    ja: 'お支払いについて',
    en: 'Regarding payment',
  },
  payment_detail: {
    ja: `<ul>
  <li>お支払い方法は、このソラコムアカウントについてお客様が設定した支払方法によります。Quoracomm Console 右上のプルダウンより「支払い設定」を選択するとご確認いただけます。</li>
  <li> 支払い時期は、サービス利用月の翌月上旬です。</li>
  <li>本サービスの現時点での請求金額は、こちら (<a href="/billings/billing_dashboard" target="_blank" class="--link">利用料金ダッシュボード</a>) から確認が可能です。</li>
 </ul>`,
    en: `<ul>
  <li>The payment method is based on the settings of your Quoracomm account. You can verify this by selecting "Payment Settings" from the dropdown menu in the top right of the Quoracomm Console. Payments are processed in one lump sum.</li>
  <li>Payments are billed in early the following month after the month of use.</li>
  <li>You can check the current charges for this service through the <a href="/billings/billing_dashboard" target="_blank" class="--link">Usage Fee Dashboard</a>.</li>
</ul>`,
  },
};
