import { i18n as commonI18n } from '../common.i18n';

export const i18n = {
  common: commonI18n,
  destination: {
    ja: '通知先設定',
    en: 'Notification destination setting',
  },
  targetDevices: {
    ja: '通知対象デバイス設定',
    en: 'Target device setting',
  },
  message: {
    ja: '通知メッセージ設定',
    en: 'Notification message setting',
  },
  title: {
    ja: '通知設定',
    en: 'Notification configuration',
  },
  dashboard: {
    title: {
      ja: '設定',
      en: 'Configuration',
    },
  },
  stats: {
    title: {
      ja: '今月の送信件数',
      en: 'Latest monthly sent count',
    },
  },
  history: {
    title: {
      ja: '最近の送信結果',
      en: 'Latest delivery results',
    },
  },
  deviceManagement: {
    title: {
      ja: 'デバイスの追加/削除/共有の通知設定',
      en: 'Notification configuration for device addition/removal/sharing',
    },
    description: {
      ja: 'オペレーターにデバイスが追加、削除、共有されたときに通知します。',
      en: 'Notify when a device is added, removed, or shared with an operator.',
    },
  },
  deviceStatus: {
    title: {
      ja: 'デバイスのオンライン/オフライン/録画停止の通知設定',
      en: 'Notification configuration for device motion/sound detection',
    },
    description: {
      ja: 'デバイスがオンラインになったとき、オフラインになったとき、クラウド常時録画が停止したときに通知します。',
      en: 'Notify when a device detects motion or sound.',
    },
    billingConditions: {
      ja: `デバイスのオンライン/オフライン/録画停止の通知対象となるデバイスを設定します。<br /> 通知対象デバイス数によって課金が発生します。`,
      en: `Set the devices that will be notified of device motion/sound detection.<br /> Charges will be incurred based on the number of notifications sent.`,
    },
  },
  deviceEvents: {
    title: {
      ja: 'デバイスのモーション検知/サウンド検出の通知設定',
      en: 'Notification configuration for device motion/sound detection',
    },
    description: {
      ja: 'デバイスがモーション、もしくはサウンドを検知した際に通知します。',
      en: 'Notify when a device detects motion or sound.',
    },
    billingConditions: {
      ja: `デバイスのモーション検知/サウンド検出の通知対象となるデバイスを設定します。<br /> 通知の送信数に応じて課金が発生します。`,
      en: `Set the devices that will be notified of device motion/sound detection.<br /> Charges will be incurred based on the number of notifications sent.`,
    },
  },
  loading: {
    ja: '通知設定を読み込んでいます...',
    en: 'Loading notification settings...',
  },
  seeTerms: {
    ja: '利用規約を確認する',
    en: 'See terms of service',
  },
};
