import { QuuxEventSourceI18n } from './fake';

export const i18n = {
  title: {
    en: 'Create a new channel',
    ja: '新しいチャネルを作成',
  },
  text: {
    en: 'Choose an event source',
    ja: 'イベントソースを選んでください',
  },
  explanation: {
    en: 'The Quux App is executed when a channel receives an event message from an event source.',
    ja: 'イベントソースからイベントメッセージがチャネルに送られることによって、Quux アプリ が実行されます。',
  },
  ok: {
    en: 'Create a new channel',
    ja: 'チャネルを作成する',
  },
  next: {
    en: 'Next',
    ja: '次へ',
  },
  cancel: {
    en: 'Cancel',
    ja: 'キャンセル',
  },

  name: {
    en: 'Name',
    ja: '名前',
  },
  description: {
    en: 'Description',
    ja: '概要',
  },
  eventSource: {
    en: 'Event source config',
    ja: 'イベントソース設定',
  },
  updateSuccess: {
    en: 'Successfully updated channel',
    ja: 'チャネルを更新しました',
  },
  defaultName: {
    device: {
      en: 'IoT Device Channel',
      ja: 'IoT Device Channel',
    },
    api: {
      en: 'API Channel',
      ja: 'API Channel',
    },
    timer: {
      en: 'Timer Channel',
      ja: 'Timer Channel',
    },
    harquestFilesEvent: {
      en: 'Harquest Files Event Channel',
      ja: 'Harquest Files Event Channel',
    },
    action: {
      en: 'Action output',
      ja: 'アクション',
    },
  },
  event: QuuxEventSourceI18n,
};
