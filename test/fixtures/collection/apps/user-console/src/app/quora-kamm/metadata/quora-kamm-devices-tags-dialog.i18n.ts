// import { MAX_TAG_LENGTH, MAX_TAGS } from './constants';

export const i18n = {
  title: {
    ja: '複数デバイスのタグを一括編集する',
    en: 'Edit tags for multiple devices',
  },
  subtitle: {
    ja: '選択された <b>{{ count }}</b> 台のデバイスのタグにタグを一括で追加または削除します。',
    en: 'Add or remove tags to the selected <b>{{ count }}</b> devices below.',
  },
  devices_title: {
    ja: '以下のデバイスのタグを編集:',
    en: 'Edit the following devices:',
  },
  device_id: {
    ja: 'ID',
    en: 'ID',
  },
  device_name: {
    ja: '名前',
    en: 'Name',
  },
  device_tags: {
    ja: '現在のタグ',
    en: 'Current tags',
  },
  device_no_tags: {
    ja: 'なし',
    en: 'None',
  },
  add_tags: {
    ja: 'タグを追加する',
    en: 'With the following tags to add:',
  },
  add_no_tags: {
    ja: '追加されるタグはありません。',
    en: 'No tags to add.',
  },
  new_tag_placeholder: {
    ja: '追加するタグ名を入力してください。',
    en: 'Type a tag name to add to the devices.',
  },
  // tag_invalid_length: {
  //   ja: `タグは${MAX_TAG_LENGTH}文字以内で入力してください。`,
  //   en: `Tag must be within ${MAX_TAG_LENGTH} characters.`,
  // },
  // tags_invalid_size: {
  //   ja: `デバイスのタグが${MAX_TAGS}個を超えないように設定してください。`,
  //   en: `Set the number of tags within ${MAX_TAGS} for each device.`,
  // },
  tag_invalid_duplicate: {
    ja: '{{tag}} はすでに追加されています。',
    en: '{{tag}} is already added.',
  },
  tag_conflict: {
    ja: '{{tag}} は削除するタグとして選択されています。',
    en: '{{tag}} is already selected to delete.',
  },
  delete_tags: {
    ja: 'タグを削除する',
    en: 'With the following tags to delete:',
  },
  delete_options_label: {
    ja: '削除するタグを選択',
    en: 'Select tags to delete',
  },
  delete_no_options: {
    ja: 'これ以上削除できるタグはありません。',
    en: 'No more tags to delete.',
  },
  delete_no_tags: {
    ja: '削除されるタグはありません。',
    en: 'No tags to delete.',
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
    ja: '{{ count }} 個のデバイスのタグを更新しました。',
    en: 'Updated tags for {{ count }} devices.',
  },
  notification_error: {
    ja: '{{ name }} のタグの更新に失敗しました: {{ reason }}',
    en: 'Failed to update tags for {{ name }}: {{ reason }}',
  },
} as const;
