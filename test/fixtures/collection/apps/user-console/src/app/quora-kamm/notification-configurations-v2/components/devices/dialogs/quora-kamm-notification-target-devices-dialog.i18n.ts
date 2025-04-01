// import { i18n as commonI18n } from '../../../common.i18n';

export const i18n = {
  // common: commonI18n,
  title: {
    ja: '通知対象デバイスを設定する',
    en: 'Configure notification target devices',
  },
  subtitle: {
    deviceStatus: {
      ja: 'デバイスのオンライン/オフライン/録画停止の通知対象デバイスを設定します。',
      en: 'Set the devices to notify when they go online/offline or recording is interrupted.',
    },
    deviceEvents: {
      ja: 'デバイスのモーション検知/サウンド検出の通知対象デバイスを設定します。',
      en: 'Set the devices to notify when they detect motion or sound.',
    },
  },
  enableAll: {
    ja: '全デバイスの通知を有効にする',
    en: 'Enable notifications for all devices',
  },
  disableAll: {
    ja: '全デバイスの通知を無効にする',
    en: 'Disable notifications for all devices',
  },
  nextPage: {
    ja: '次のページ',
    en: 'Next page',
  },
  previousPage: {
    ja: '前のページ',
    en: 'Previous page',
  },
  searchPlaceholder: {
    ja: '名前または ID で検索',
    en: 'Search by name or ID',
  },
  pageStatus: {
    ja: '{{ total }} 件中 {{ startIndex }} - {{ endIndex }} 件',
    en: '{{ startIndex }} - {{ endIndex }} of {{ total }} items',
  },
  deviceName: {
    ja: 'デバイス名',
    en: 'Device name',
  },
  deviceId: {
    ja: 'デバイス ID',
    en: 'Device ID',
  },
  state: {
    ja: '通知対象',
    en: 'Notification target',
  },
  count: {
    ja: `現在の通知対象デバイス数: <span class="ds-text --label">{{ count }}</span> / {{ total }}台`,
    en: `Current number of devices to notify: <span class="ds-text --label">{{ count }}</span> / {{ total }} devices`,
  },
} as const;
