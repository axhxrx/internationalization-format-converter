export const translations = {
  GpsMultiqbitNewGroupSelectComponent: {
    title: { en: `Select a group to save settings`, ja: `設定を保存するグループを選択` },
    description: {
      en:
        `GPS multiqbit settings are associated with the SIM group, not the SIM. The SIM group can be changed later. SIMs in the same SIM group share the same settings.`,
      ja:
        `GPSマルチユニットの設定は SIM ではなく、 SIM グループに保存されます。 SIM グループは後から変更ができます。同じ SIM グループ内にある SIM は同じ設定を共有します。`,
    },
    actions: {
      next: {
        title: { en: `Next: Edit settings`, ja: `次へ：設定を編集` },
      },
      back: {
        title: { en: `Back`, ja: `戻る` },
      },
    },
    errors: {
      nameExists: { en: `Please enter a unique group name.`, ja: `グループ名が重複しています` },
    },
    labels: {
      groupId: { en: `Select group`, ja: `グループを選択` },
      mode: {
        create: { en: `Create new group`, ja: `新規グループを作成` },
        select: { en: `Choose existing group`, ja: `既存のグループを利用` },
      },
      newGroupName: { en: `Group name`, ja: `グループ名` },
    },
  },
};
