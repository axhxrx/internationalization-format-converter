// import { i18n as commonI18n } from '../../common.i18n';

export const i18n = {
  // common: commonI18n,
  onDeviceAdded: {
    ja: 'デバイス追加',
    en: 'Device added',
  },
  onDeviceRemoved: {
    ja: 'デバイス削除',
    en: 'Device removed',
  },
  onDeviceShareStatusChanged: {
    ja: 'デバイス共有',
    en: 'Device shared',
  },
  onConnected: {
    ja: 'デバイスオンライン',
    en: 'Device online',
  },
  onDisconnected: {
    ja: 'デバイスオフライン',
    en: 'Device offline',
  },
  onCloudRecordingInterrupted: {
    ja: 'クラウド常時録画停止',
    en: 'Cloud recording interrupted',
  },
  onEventDetected: {
    ja: 'モーション検知/サウンド検出',
    en: 'Motion/sound detection',
  },
  notificationType: {
    ja: '通知タイプ',
    en: 'Notification types',
  },
  destination: {
    ja: '通知先',
    en: 'Destinations',
  },
  target: {
    ja: '通知対象',
    en: 'Targets',
  },
  target_all: {
    ja: 'オペレーターの全てのデバイス',
    en: 'All devices of the operator',
  },
  target_selectedDevices: {
    ja: '通知対象デバイスとして設定されたデバイスのみ',
    en: 'Selected devices',
  },
  targetDevices: {
    ja: '現在の通知対象デバイス数',
    en: 'Number of devices to notify',
  },
  targetDevicesCount: {
    ja: '{{ count }} 台',
    en: '{{ count }} devices',
  },
  emailDestination: {
    ja: 'E メール通知先',
    en: 'Email destination',
  },
  webhookDestination: {
    ja: 'Webhook 通知先',
    en: 'Webhook destination',
  },
  targetDevicesWarning_1: {
    ja: '通知は有効ですが、<wbr />通知対象デバイスが<wbr />設定されていないため、<wbr />通知は送信されません。<br />',
    en:
      'Notifications are enabled, but no devices are selected to receive notifications. <br /> Configure the devices in the ',
  },
  targetDevicesWarning_button: {
    ja: '通知設定画面',
    en: 'Notification settings',
  },
  targetDevicesWarning_2: {
    ja: 'で<wbr />通知対象デバイスを<wbr />設定してください。',
    en: '.',
  },
  incompleteWarning: {
    ja: '通知は有効化されていますが、メッセージ設定が未完了のため、全てまたは一部の通知先には通知が送信されません。',
    en:
      'Notifications are enabled, but message settings are incomplete. As a result, notifications may not be sent to all or some of the destinations.',
  },
} as const;
