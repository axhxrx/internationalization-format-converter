import { profileOrderStatusesI18n } from '../common-i18n';

export const eSimOrderPlacedInformationI18n = {
  pageTitle: {
    en: 'Order placed',
    ja: '注文完了',
  },
  orderPlacedMessage: {
    en:
      '<p class="ds-text --large --icon-confirm">Your eSIM profile order was successfully submitted. Quoracomm will begin provisioning your eSIM profiles shortly.</p><p>You can view the provisioning status from your eSIM Profile Orders history.</p><p>Once your eSIM profiles have been provisioned, you will be able to view their details in order to install them.</p>',
    ja:
      '<p class="ds-text --large --icon-confirm">eSIM プロファイルの注文は正常に受け付けられました。まもなく eSIM プロファイルのプロビジョニングが開始されます。</p><p>eSIM プロファイルのプロビジョニングステータスは、 eSIM プロファイル注文の画面から確認できます。</p><p>eSIM プロファイルのプロビジョニングが完了すると、eSIM プロファイル注文の画面から eSIM プロファイルの一覧を表示してインストール情報を確認することができます。</p>',
  },
  orderDetails: {
    profileOrderId: {
      en: 'Profile Order ID',
      ja: 'プロファイル注文ID',
    },
    status: {
      en: 'Status',
      ja: 'ステータス',
    },
    subscription: {
      en: 'Subscription',
      ja: 'サブスクリプション',
    },
    quantity: {
      en: 'Quantity',
      ja: '数量',
    },
    bundle: {
      en: 'Bundle',
      ja: 'バンドル',
    },
    speedClass: {
      en: 'Speed Class',
      ja: '速度クラス',
    },
  },
  profileOrderStatusesI18n: {
    ...profileOrderStatusesI18n,
  },
};
