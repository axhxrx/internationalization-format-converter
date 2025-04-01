// import { MAX_TAG_LENGTH, MAX_TAGS } from './constants';

export const i18n = {
  title: {
    ja: 'ソラカメデバイスを編集する',
    en: 'Edit QuoraKamm Device',
  },
  subtitle: {
    ja: `デバイス <b>{{ name }}</b> の名前やタグを編集します。`,
    en: `Edit name and tags of device <b>{{ name }}</b>.`,
  },
  name: {
    ja: '名前',
    en: 'Name',
  },
  name_required: {
    ja: 'デバイス名を入力してください。',
    en: 'Device name is required.',
  },
  tags: {
    ja: 'タグ',
    en: 'Tags',
  },
  no_tags: {
    ja: '設定されているタグはありません。',
    en: 'No tags are set.',
  },
  tag_placeholder: {
    ja: '追加するタグ名を入力',
    en: 'Enter tag name to add',
  },
  // tag_invalid_length: {
  //   ja: `タグは${MAX_TAG_LENGTH}文字以内で入力してください。`,
  //   en: `Tag must be within ${MAX_TAG_LENGTH} characters.`,
  // },
  // tags_invalid_size: {
  //   ja: `タグは最大${MAX_TAGS}個までしか追加できません。`,
  //   en: `You can add up to ${MAX_TAGS} tags.`,
  // },
  tag_invalid_duplicate: {
    ja: '{{tag}} はすでに追加されています。',
    en: '{{tag}} is already added.',
  },
  add: {
    ja: '追加する',
    en: 'Add',
  },
  save: {
    ja: '保存する',
    en: 'Save',
  },
  close: {
    ja: '閉じる',
    en: 'Close',
  },
  notification_success: {
    ja: 'デバイス {{ name }} の情報を更新しました。',
    en: 'Successfully updated device information of {{ name }}.',
  },
};
