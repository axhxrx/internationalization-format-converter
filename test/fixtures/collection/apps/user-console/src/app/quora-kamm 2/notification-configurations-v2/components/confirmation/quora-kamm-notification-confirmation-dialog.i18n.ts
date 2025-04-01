// import { i18n as commonI18n } from '../../common.i18n';

export const i18n = {
  // common: commonI18n,
  title: {
    ja: 'ソラカメ 通知オプションのご利用について',
    en: 'About QuoraKamm Notification Options',
  },
  description: {
    ja:
      '通知オプションは、利用内容に応じて追加料金が発生します。以下の内容をご確認頂いた上で、ご利用ください。なお、この利用開始の操作後すぐに機能を使用可能です。',
    en:
      'Notification options may incur additional charges depending on usage. Please review the information below before using the options. The feature becomes available immediately after starting usage.',
  },
  headers: {
    serviceName: {
      ja: '通知サービス名',
      en: 'Notification Service Name',
    },
    charge: {
      ja: '有償/無償',
      en: 'Free/Paid',
    },
    method: {
      ja: '通知方法',
      en: 'Notification Method',
    },
    cost: {
      ja: '料金 (税込)',
      en: 'Cost (tax included)',
    },
  },
  note: {
    ja: '注{{index}}',
    en: 'Note {{index}}',
  },
  serviceName: {
    deviceManagement: {
      ja: 'デバイスの追加 / 削除 / 共有の通知',
      en: 'Device Add/Remove/Share Notifications',
    },
    deviceStatus: {
      ja: 'デバイスのオフライン / オンライン / 録画停止の通知',
      en: 'Device Offline/Online/Recording Stop Notifications',
    },
    deviceEvents: {
      ja: 'デバイスのモーション検知 / サウンド検出の通知',
      en: 'Motion/Sound Detection Notifications',
    },
  },
  charge: {
    free: {
      ja: '無償',
      en: 'Free',
    },
    paid_fixedRate: {
      ja: '有償 (定額)',
      en: 'Paid (Fixed rate)',
    },
    paid_payAsYouGo: {
      ja: '有償 (従量課金)',
      en: 'Paid (Pay-as-you-go)',
    },
  },
  method: {
    emailOrWebhook: {
      ja: 'メール / Webhook',
      en: 'Email / Webhook',
    },
    email: {
      ja: 'メール',
      en: 'Email',
    },
    webhook: {
      ja: 'Webhook',
      en: 'Webhook',
    },
  },
  cost: {
    no: {
      ja: '無し',
      en: 'No charge',
    },
    fixedRate: {
      ja: '通知を有効にしたカメラ 1 台毎に、月額 55 円',
      en: '¥55/month per camera',
    },
    payAsYouGo: {
      email: {
        heading: {
          ja: 'カメラ 1 台・100 通毎に、月額 22 円',
          en: '¥22/month per 100 notifications per camera',
        },
        example: {
          ja: '(例) カメラ 1 台の場合:',
          en: 'Example (for one camera):',
        },
        example_list: {
          ja: `<li>1〜100 通: 22 円</li><li>101〜200 通: 44 円</li>`,
          en: `<li>1-100 notifications: ¥22</li><li>101-200 notifications: ¥44</li>`,
        },
        limit: {
          ja: '月間の送信上限数は 1,000 通',
          en: 'The monthly limit is 1,000 notifications.',
        },
      },
      webhook: {
        heading: {
          ja: 'カメラ 1 台・1,000 通毎に、月額 22 円',
          en: '¥22/month per 1,000 notifications per camera',
        },
        example: {
          ja: '(例) カメラ 1 台の場合:',
          en: 'Example (for one camera):',
        },
        example_list: {
          ja: `<li>1〜1,000 通: 22 円</li><li>1,001〜2,000 通: 44 円</li>`,
          en: `<li>1-1,000 notifications: ¥22</li><li>1,001-2,000 notifications: ¥44</li>`,
        },
        limit: {
          ja: '月間の送信上限数は 10,000 通',
          en: 'The monthly limit is 10,000 notifications.',
        },
      },
    },
  },
  note1: {
    ja:
      '注1: 本サービスは、一度設定を有効にすると、設定を解除するまでの間に行われた通知につき、毎月上記料金がかかります。ただし、設定済みであっても、通知が1件も発生しなかった月については、料金が請求されません。',
    en: 'Note 1: Charges apply only if notifications are sent.',
  },
  note2: {
    ja:
      '注2: 本サービスは、ソラカメライセンス (クラウド常時録画ライセンス / クラウドモーション検知”無制限”録画ライセンス、もしくはライブ視聴見放題 -Limited Preview- ) を契約済みユーザの利用が前提となります。当該ライセンスをいずれも未契約の状態で本サービスを利用した場合は、月額 990 円 (税込) をご負担頂きますのでご注意ください。',
    en: 'Note 2: QuoraKamm license is required. Without it, you will be charged ¥990/month.',
  },
  payment: {
    ja: 'お支払いについて',
    en: 'Regarding Payment',
  },
  payment_detail: {
    ja:
      `<li>お支払い方法は、このソラコムアカウントについてお客様が設定した支払方法によります。Quoracomm Console 右上のプルダウンより「支払い設定」を選択するとご確認いただけます。なお、支払い時期は一括となります。</li>
          <li>本サービスの現時点での請求金額は、こちら (<a href="/billings/billing_dashboard" target="_blank">利用料金ダッシュボード<i class="ds-icon --icon-external-link"></i></a>) から確認が可能です。</li>`,
    en:
      `<li>The payment method is based on the settings of your Quoracomm account. You can verify this by selecting "Payment Settings" from the dropdown menu in the top right of the Quoracomm Console. Payments are processed in one lump sum. </li>
          <li>You can check the current charges for this service through the [<a href="/billings/billing_dashboard" target="_blank">Usage Fee Dashboard<i class="ds-icon --icon-external-link"></i></a>].</li>`,
  },
  cancellation: {
    ja: '設定解除 (解約) について',
    en: 'Regarding Cancellation',
  },
  cancellation_detail: {
    ja:
      `<li>各通知サービスの設定解除 (解約) は、設定画面から任意のタイミングで操作可能です。設定解除したい通知サービス毎に、通知設定を”無効”に変更してください。 (詳しくは<a
            href="https://users.example.com/ja-jp/docs/quoracomm-cloud-camera-services/notification-configuration/"
            target="_blank">こちら<i class="ds-icon --icon-external-link"></i></a>)</li>
            <li>既に有効にした通知オプションにかかる料金は返金いたしません。</li>`,
    en:
      `<li>You can disable (cancel) each notification service at any time through the settings screen. For each service you wish to cancel, change the notification setting to "disabled" (more details <a
            href="https://users.example.com/ja-jp/docs/quoracomm-cloud-camera-services/notification-configuration/"
            target="_blank">here<i class="ds-icon --icon-external-link"></i></a>). </li>
            <li>Please note that fees for already activated notification options will not be refunded.</li>`,
  },
  next: {
    ja: '理解して利用する',
    en: 'Confirm and proceed to settings',
  },
  back: {
    ja: 'ホームに戻る',
    en: 'Back to top page',
  },
} as const;
