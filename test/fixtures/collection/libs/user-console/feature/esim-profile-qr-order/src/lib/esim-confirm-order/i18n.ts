import { commonI18n } from '../common-i18n';

export const confirmOrderI18n = {
  pageTitle: {
    en: 'Confirm Order',
    ja: '注文内容確認',
  },
  orderSummaryTitle: {
    en: 'Order Summary',
    ja: '注文内容',
  },
  oderSummaryDescription: {
    en: 'Please review the details of your eSIM profile order below and confirm',
    ja: '以下の eSIM プロファイル注文内容をご確認の上、注文を確定してください',
  },
  summary: {
    subscription: {
      en: 'Subscription',
      ja: 'サブスクリプション',
    },
    bundle: {
      en: 'Bundle',
      ja: 'バンドル',
    },
    speedClass: {
      en: 'Speed Class',
      ja: '速度クラス',
    },
    quantity: {
      en: 'Quantity',
      ja: '数量',
    },
    total: {
      en: 'Order total',
      ja: '注文合計',
    },
  },
  profileOrderAcknowledgementsTitle: {
    en: 'Special Terms & Precautions',
    ja: '注意事項',
  },
  profileOrderAcknowledgements: {
    en:
      `<li>Installation of an eSIM profile requires a device that is compatible with SGP.22 and Local Profile Assistant (LPA).</li>
<li>Quoracomm is unable to provide support for installing eSIM profiles. Please refer to your device manual for instructions on using the LPA to install an eSIM profile.</li>
<li>Once you place your order, Quoracomm will begin provisioning the eSIM profile, and your order cannot be canceled.</li>
<li>As soon as the eSIM profile has been successfully provisioned, it will be registered to your account as a SIM in the Ready status, and your account will be charged regardless of when the profile is actually installed to your device. Additionally, the profile cannot be returned or refunded for any reason.</li>
<li>Once an eSIM profile has been installed to a device, it cannot be reinstalled again or transferred to another device.</li>
<li>eSIM profiles may be used only for IoT/M2M purposes.</li>`,
    ja:
      `<li>eSIM プロファイルのインストールには、 SGP.22 およびローカルプロファイルアシスタント (LPA) と互換性のあるデバイスが必要です。</li>
<li>ソラコムは eSIM プロファイルのインストールに関するサポートを提供できません。 LPA を使用して eSIM プロファイルをインストールする手順については、お使いのデバイスのマニュアルを参照してください。</li>
<li>ご注文後、 eSIM プロファイルのプロビジョニングが開始されます。キャンセルはできません。</li>
<li> eSIM プロファイルが正常にプロビジョニングされ次第、お客様のアカウントに Ready ステータスの SIM として登録され、プロファイルがお客様のデバイスに実際にインストールされるタイミングに関係なく、お客様のアカウントに課金されます。また、いかなる理由でも、 eSIM プロファイルの返品や返金はできません。</li>
<li>一度 eSIM プロファイルがデバイスにインストールされると、再度インストールしたり、別のデバイスに転送したりすることはできません。</li>
<li>eSIM プロファイルは IoT/M2M 目的でのみ使用できます。</li>`,
  },
  agreeProfileOrderAcknowledgements: {
    en: 'I have read and agree to the above terms.',
    ja: '上記の注意事項に同意します。',
  },
  legalTermsSimTitle: {
    en: 'Important Notes for SIM Subscription Plans',
    ja: '重要事項に関する説明',
  },
  legalTermsSim: {
    en:
      'Before ordering an eSIM profile, please thoroughly read the important notes for each subscription plan you are purchasing.',
    ja: 'eSIM プロファイルを注文する前に、重要事項に関する説明書をご確認ください。',
  },
  agreeLegalTermsSim: {
    en: 'I have reviewed and agreed to the Important Notes.',
    ja: '重要事項に関する説明書の内容を理解しました。',
  },
  submitButton: {
    en: 'Submit Order',
    ja: '注文を確定する',
  },
  ...commonI18n,
};
