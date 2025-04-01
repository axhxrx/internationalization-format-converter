import { Localization as I18nItem } from '@axhxrx/internationalization';

/**
 The type defining the locales that Quoracomm supports in its frontend apps.
 */
export type DEFAULT_LOCALES = 'en' | 'ja';

export type I18nItemDefault = I18nItem<DEFAULT_LOCALES>;

import { UISupportedQuuxActionType } from './ui-supported-quux-action';

export const QuuxActionI18n = {
  'object-detection': {
    label: { en: 'Simple object detection', ja: '簡易物体検出' },
    description: {
      en: 'Apply simple object detection to an image from a URL.',
      ja: '指定した URL の画像に対して、人、車など限られた種類の物体の数を検知します',
    },
  },
  webhook: {
    label: { en: 'Webhook', ja: 'Webhook' },
    description: {
      en: 'Send data to a webhook',
      ja: 'データを Webhook に送信します',
    },
  },
  ai: {
    label: { en: 'AI', ja: 'AI' },
    description: {
      en: 'Send a request to a GenAI model',
      ja: '生成 AI にリクエストを送信します',
    },
  },
  'slack-notification': {
    label: { en: 'Slack Notification', ja: 'Slack 通知' },
    description: {
      en: 'Send data to Slack',
      ja: 'データを Slack に送信します',
    },
  },
  'line-notification': {
    label: { en: 'LINE Notification', ja: 'LINE 通知' },
    description: {
      en: 'Send data to LINE',
      ja: 'データを LINE に送信します',
    },
  },
  'email-notification': {
    label: { en: 'Email Notification', ja: 'Email 通知' },
    description: { en: 'Send Email', ja: 'データを Email 送信します' },
  },
  republish: {
    label: { en: 'Republish', ja: 'Republish' },
    description: {
      en: 'Transform the data and republish it to another channel',
      ja: 'データを変換し、別のチャネルに再送信します',
    },
  },
  'quoracomm-api': {
    label: { en: 'Quoracomm API', ja: 'QUORACOMM API' },
    description: {
      en: 'Invoke QUORACOMM API',
      ja: 'QUORACOMM API を実行します',
    },
  },
  weathernews: {
    label: { en: 'Weather Forecast', ja: 'Weather Forecast' },
    description: {
      en:
        'Utilize pinpoint weather forecast data provided by <a href="https://global.weathernews.com/" target="_blank">WeatherNews</a> with 1km mesh accuracy.',
      ja:
        '<a href="https://jp.weathernews.com/" target="_blank">WeatherNews</a> 社提供による、指定した緯度経度地点の 1km メッシュピンポイント天気予報のデータが利用できます',
    },
  },
} as const satisfies Record<
  UISupportedQuuxActionType,
  { label: I18nItemDefault; description: I18nItemDefault }
>;
