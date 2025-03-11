const CreateGroupComponent = {
  confirm: {
    en: 'Create Group',
    ja: 'グループ作成',
  },
  heading: {
    en: 'Create a new group',
    ja: 'グループ作成',
  },
  newGroupName: {
    en: 'New group name',
    ja: 'グループ名',
  },
  pleaseEnterAUniqueGroupName: {
    en: 'Please enter a unique group name.',
    ja: 'グループ名が重複しています',
  },
  error: {
    unableToCreateANewGroup: {
      en: 'Unable to create a new group. An unexpected error occurred.',
      ja: '予期せぬエラーが発生したため、グループを作成できませんでした。',
    },
  },
} as const;

export const i18n = CreateGroupComponent;
