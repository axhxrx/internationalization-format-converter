import { profileStatusesI18n } from '../common-i18n';

export const eSimProfilesTableI18n = {
  tableColumn: {
    simid: {
      en: 'SIM ID',
      ja: 'SIM ID',
    },
    imsi: {
      en: 'IMSI',
      ja: 'IMSI',
    },
    iccid: {
      en: 'ICCID',
      ja: 'ICCID',
    },
    profileOrderId: {
      en: 'Profile Order ID',
      ja: 'プロファイル注文ID',
    },
    qrCode: {
      en: 'QR Code',
      ja: 'QRコード',
    },
    downloadStatus: {
      en: 'Download Status',
      ja: 'ダウンロードステータス',
    },
    profileStatus: {
      en: 'Profile Status',
      ja: 'プロファイルステータス',
    },
    viewQRLabel: {
      en: 'View QR Code',
      ja: 'QRコードを表示',
    },
    subscription: {
      en: 'Subscription',
      ja: 'サブスクリプション',
    },
    installedTime: {
      en: 'Installed Time',
      ja: 'インストール日時',
    },
    matchingId: {
      en: 'Matching ID',
      ja: 'マッチングID',
    },
    smdpAddress: {
      en: 'SM-DP Address',
      ja: 'SM-DP アドレス',
    },
    activationCode: {
      en: 'Activation Code',
      ja: 'アクティベーションコード',
    },
    createdTime: {
      en: 'Created Time',
      ja: '作成日時',
    },
    lastModifiedTime: {
      en: 'Last Modified Time',
      ja: '最終更新日時',
    },
  },
  controlButtons: {
    downloadCsv: {
      en: 'Download CSV',
      ja: 'CSVダウンロード',
    },
  },
  downloadStatuses: {
    VIEWED: { en: 'VIEWED', ja: '表示済み' },
  },
  profileStatusesI18n: {
    ...profileStatusesI18n,
  },
};
