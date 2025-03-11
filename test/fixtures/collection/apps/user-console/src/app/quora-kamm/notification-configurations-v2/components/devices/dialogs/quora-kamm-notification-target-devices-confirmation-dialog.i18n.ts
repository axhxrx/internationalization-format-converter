// import { i18n as commonI18n } from '../../../common.i18n';

export const i18n = {
  // common: commonI18n,
  title: {
    enable: {
      ja: '全デバイスの通知を有効にする',
      en: 'Enable notifications for all devices',
    },
    disable: {
      ja: '全デバイスの通知を無効にする',
      en: 'Disable notifications for all devices',
    },
  },
  subtitle: {
    deviceStatus: {
      enable: {
        ja: '全デバイスのオンライン/オフライン/録画停止の通知を有効にします。',
        en: 'Enable notifications for all devices for online/offline/recording interruption.',
      },
      disable: {
        ja: '全デバイスのオンライン/オフライン/録画停止の通知を無効にします。',
        en: 'Disable notifications for all devices for online/offline/recording interruption.',
      },
    },
    deviceEvents: {
      enable: {
        ja: '全デバイスのモーション検知/サウンド検出の通知を有効にします。',
        en: 'Enable notifications for all devices for motion/sound detection.',
      },
      disable: {
        ja: '全デバイスのモーション検知/サウンド検出の通知を無効にします。',
        en: 'Disable notifications for all devices for motion/sound detection.',
      },
    },
  },
  description: {
    ja:
      `以下の {{ count }} 台のデバイスの通知を<span class="ds-text --label --{{ kind }}">{{ verb }}</span >にします。`,
    en:
      `<span class="ds-text --label --{{ kind }}">{{ verb }}</span > the following {{ count }} devices for notifications.`,
  },
  enableAll: {
    ja: '有効にする',
    en: 'Enable all',
  },
  disableAll: {
    ja: '無効にする',
    en: 'Disable all',
  },
  enable: {
    ja: '有効',
    en: 'Enable',
  },
  disable: {
    ja: '無効',
    en: 'Disable',
  },
  name: {
    ja: '名前',
    en: 'Name',
  },
  id: {
    ja: 'ID',
    en: 'ID',
  },
} as const;
