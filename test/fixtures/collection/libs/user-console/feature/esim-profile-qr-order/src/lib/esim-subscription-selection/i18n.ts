import { i18nESim as subscriptionComparisonI18n } from '@i18n/subscription-comparison';
import { commonI18n } from '../common-i18n';

export const subscriptionSelectionI18n = {
  pageTitle: {
    en: 'Subscription',
    ja: 'サブスクリプション',
  },
  pageDescription: {
    en: `Select the subscription plan for the eSIM profile. Please refer to
          our <a class="--link" href="https://developers.example.com/en/docs/air/esim-profiles" target="_blank">Quoracomm
          eSIM profiles documention</a> and <a class="--link" href="https://developers.example.com/en/docs/reference/fees" target="_blank">Pricing &amp; Fee
          Schedule</a> for more details.`,
    ja: `eSIM プロファイルのサブスクリプションを選択してください。詳しくは、
      <a class="--link" href="https://quoracomm.jp/services/air/cellular/pricing/price_iot_sim_esim_profile_download/" target="_blank">QUORACOMM IoT SIM(eSIM プロファイル)のご利用料金</a>をご参照ください。`,
  },
  bundleHeader: {
    title: {
      en: 'Bundle',
      ja: 'バンドル',
    },
    subTitle: {
      en:
        'Select the bundle to be provisioned for eSIM profile. The bundle can be changed after registration in the Quoracomm User Console.',
      ja:
        'eSIMプロファイルにプロビジョニングするバンドルを選択してください。バンドルは、QUORACOMM ユーザーコンソールに登録後に変更できます。',
    },
  },
  speedClassHeader: {
    title: {
      en: 'Speed Class',
      ja: '速度クラス',
    },
    subTitle: {
      en:
        'Select the speed class for the eSIM profile. The speed class can be changed after registration in the Quoracomm User Console.',
      ja:
        'eSIM プロファイルの速度クラスの初期設定を選択してください。速度クラスは、QUORACOMM ユーザーコンソールに登録後に変更できます。',
    },
  },
  quantityLabel: {
    en: 'Quantity',
    ja: '数量',
  },
  quantityDescription: {
    en:
      'Enter the number of eSIM profiles to be provisioned. You can order up to {{ eSimMaxQuantity }} profiles per order.',
    ja: 'eSIM プロファイルの数を入力してください。一つの注文あたり最大 {{ eSimMaxQuantity }} 個まで注文できます。',
  },
  planComparison: {
    labels: {
      ...subscriptionComparisonI18n.label,
      gridTitle: {
        en: 'Select Subscription',
        ja: 'サブスクリプション',
      },
      subscriptionContainerAndLocalInfo: {
        en: 'Subscription Containers and Local Info Report',
        ja: 'サブスクリプションコンテナ、SIM ローカル情報レポート',
      },
    },
    plans: {
      ...subscriptionComparisonI18n.plans,
    },
  },
  ...commonI18n,
};
