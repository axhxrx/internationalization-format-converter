// import { i18n as commonI18n } from '../../../../common.i18n';

export const i18n = {
  // common: commonI18n,
  title: {
    ja: 'Webhook 通知先を編集する',
    en: 'Edit Webhook notification destination',
  },
  heading: {
    deviceManagement: {
      ja: 'デバイスの追加/削除/共有の Webhook 通知先',
      en: 'Webhook notification destinations for device addition/removal/sharing',
    },
    deviceStatus: {
      ja: 'デバイスのオンライン/オフライン/録画停止の Webhook 通知先',
      en: 'Webhook notification destinations for device online/offline/cloud recording interruption',
    },
    deviceEvents: {
      ja: 'デバイスのモーション検知/サウンド検出の Webhook 通知先',
      en: 'Webhook notification destinations for device motion/sound detection',
    },
  },
  headerKey: {
    ja: 'ヘッダー名',
    en: 'Header Name',
  },
  headerValue: {
    ja: '値',
    en: 'Value',
  },
  addHeader: {
    ja: 'ヘッダーを追加する',
    en: 'Add header',
  },
  error: {
    urlRequired: {
      ja: 'URL は必須です。',
      en: 'URL is required.',
    },
    invalidUrl: {
      ja: 'URL が無効です。',
      en: 'URL is invalid.',
    },
    headerKeyRequired: {
      ja: 'ヘッダー名は必須です。',
      en: 'Header name is required.',
    },
    duplicateHeaderKey: {
      ja: 'ヘッダー名が重複しています。',
      en: 'Header name is duplicated.',
    },
  },
} as const;
