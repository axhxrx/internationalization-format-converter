import { profileOrderStatusesI18n } from '../common-i18n';

export const eSimProfilesOrderListI18n = {
  pageTitle: {
    en: 'eSIM profiles',
    ja: 'eSIM プロファイル',
  },
  pageDescription: {
    en: `<p>eSIM profiles allow you to add Quoracomm Air connectivity to a device that has its own eSIM. Please refer to
      our <a class="--link" href="https://developers.example.com/en/docs/air/esim-profiles" target="_blank">Quoracomm
        eSIM profiles documention</a> and <a class="--link" target="_blank" href="https://developers.example.com/en/docs/reference/fees">Pricing &amp; Fee
        Schedule</a> for more details.
    </p>`,
    ja:
      `<p>IoT SIM の一部のサブスクリプションでは、eSIM プロファイルを発行できます。発行した eSIM プロファイルは、お使いの eSIM 対応デバイスにインストールできます。詳しくは、
      <a class="--link" href="https://users.example.com/ja-jp/docs/air/issue-esim-profile/" target="_blank">eSIM プロファイルを発行する</a>および
      <a class="--link" href="https://quoracomm.jp/services/air/cellular/pricing/price_iot_sim_esim_profile_download/" target="_blank">QUORACOMM IoT SIM(eSIM プロファイル)のご利用料金</a>をご参照ください。
    </p>`,
  },
  esimProfileNoticeTitle: {
    en: 'eSIM Profile Order FAQ',
    ja: 'eSIM プロファイル注文 FAQ',
  },
  esimProfileNotice: {
    en: `
      <p>If you are looking to purchase physical eSIM modules rather than eSIM profiles, please use <a class="--link" href="/orders">product orders</a>.</p>
      <p>Before you purchase an eSIM profile, please confirm the following details:</p>
      <p></p>
      <ul>
        <li>eSIM profiles can only be installed in a device that is compatible with SGP.22 and Local Profile
          Assistant
          (LPA).</li>
        <li>Quoracomm eSIM profiles do not support Subscription Containers or Local Info Report</li>
        <li>Once purchased, eSIM profile orders cannot be canceled, and eSIM profiles cannot be returned or
          refunded.</li>
        <li>Once an eSIM profile has been installed to a device, it cannot be reinstalled again or transferred to
          another
          device.</li>
      </ul>
      <p></p>
      `,
    ja: `
      <p>Embedded (MFF2) と呼ばれる eSIM (Embedded Subscriber Identity Module) を購入する場合は、<a class="--link" href="/orders">IoT SIM、デバイス、キットなど</a>を参照してください。</p>
      <p>eSIMプロファイルを購入する前に、以下の詳細を確認してください:</p>
      <p></p>
      <ul>
        <li>eSIMプロファイルは、SGP.22およびローカルプロファイルアシスタント（LPA）に対応したデバイスにのみインストールできます。</li>
        <li>QUORACOMM eSIMプロファイルは、サブスクリプションコンテナやローカル情報レポートをサポートしていません。</li>
        <li>購入後、eSIMプロファイルの注文はキャンセルできず、eSIMプロファイルは返品や返金ができません。</li>
        <li>eSIMプロファイルがデバイスにインストールされると、再インストールや他のデバイスへの転送はできません。</li>
      </ul>
      <p></p>
      `,
  },
  esimProfileNoticeDismiss: {
    en: 'Dismiss',
    ja: '閉じる',
  },
  esimPriorRegistrationNotice: {
    en:
      'Prior user registration and approval from Quoracomm are required to have eSIM profiles issued to your account. To request access, please contact our <a href="https://www.example.com/contact/" target="_blank" clas="--link">Sales Team</a>.',
    ja:
      'eSIM プロファイルを発行するサービスを利用するには、事前の申請およびソラコムからの承認が必要です。詳しくは、<a href="https://quoracomm.jp/contact/" target="_blank" clas="--link">セールスチーム</a> にお問い合わせください。',
  },
  // Set time from which we want to show order notice. In case in future some notice has updated, and user has hidden it, changing this time will force notice to be shown.
  eSimProfileOrderNoticeVisibleFromTime: {
    en: '1720753292837', // Fri Jul 12 2024 12:01:32 JST
    ja: '1720753292837', // Fri Jul 12 2024 12:01:32 JST
  },
  newSimOrderButton: {
    en: 'New eSIM Profile Order',
    ja: '新規 eSIM プロファイル注文',
  },
  tableColumn: {
    profileOrderId: {
      en: 'Profile Order ID',
      ja: 'プロファイル注文ID',
    },
    subscription: {
      en: 'Subscription',
      ja: 'サブスクリプション',
    },
    quantity: {
      en: 'Quantity',
      ja: '数量',
    },
    status: {
      en: 'Status',
      ja: 'ステータス',
    },
    orderTime: {
      en: 'Order Time',
      ja: '注文日時',
    },
    confirmedTime: {
      en: 'Confirmed Time',
      ja: '確認日時',
    },
    completedTime: {
      en: 'Completed Time',
      ja: '完了日時',
    },
    noData: {
      en: 'No orders',
      ja: '注文なし',
    },
    listProfiles: {
      en: 'List eSIM Profiles in this order',
      ja: 'eSIM プロファイルを表示',
    },
  },
  eSimProfilesInOrderModal: {
    title: {
      en: 'eSIM profiles in this order',
      ja: 'この注文の eSIM プロファイル',
    },
    closeButton: {
      en: 'Close',
      ja: '閉じる',
    },
  },
  profileOrderStatusesI18n: {
    ...profileOrderStatusesI18n,
  },
};
