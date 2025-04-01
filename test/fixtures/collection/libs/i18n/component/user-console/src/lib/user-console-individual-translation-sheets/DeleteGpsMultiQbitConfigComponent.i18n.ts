export const translations = {
  DeleteGpsMultiqbitConfigComponent: {
    heading: {
      single: { en: `Delete GPS multiqbit configuration`, ja: `GPS マルチユニット設定解除` },
      multiple: { en: `Delete GPS multiqbit configurations`, ja: `GPS マルチユニット設定解除` },
    },
    explanatoryText: {
      single: {
        en:
          `<p> Remove the SIM from the group associated with the GPS multiqbit configuration. </p> <ul> <li> Removing the SIM does not delete the group, or the configuration associated with the group. </li> <li> If you want to delete the group also, you can delete it from the SIM group management screen. </li> <li> <strong>Note that even if the configuration is deleted, the GPS multiqbit will try to continue communication. Before deleting the configuration, be sure to turn off the GPS multiqbit or remove the SIM from the GPS multiqbit. </strong></li> </ul>`,
        ja:
          `<p>この SIM の GPS マルチユニット設定が保存されているグループから SIM を解除します。</p><ul><li>SIM を解除してもグループやグループに保存された情報は削除されません。</li><li>グループもあわせて削除したい場合は、SIM グループ管理画面から削除できます。</li><li><strong>設定を解除しても GPS マルチユニットは通信を継続しようとします。設定を解除する前に必ず GPS マルチユニットの電源を切るか、GPS マルチユニットから SIM を抜き出してください。</strong></li></ul>`,
      },
      multiple: {
        en:
          `<p> Remove the SIMs from the group associated with the GPS multiqbit configuration. </p> <ul> <li> Removing the SIMs does not delete the group, or the configuration associated with the group. </li> <li> If you want to delete the group also, you can delete it from the SIM group management screen. </li> <li> <strong>Note that even if the configuration is deleted, the GPS multiqbit will try to continue communication. Before deleting the configuration, be sure to turn off the GPS multiqbit or remove the SIM from the GPS multiqbit. </strong></li> </ul>`,
        ja:
          `<p>これらの SIM の GPS マルチユニット設定が保存されているグループから SIM を解除します。</p><ul><li>SIM を解除してもグループやグループに保存された情報は削除されません。</li><li>グループもあわせて削除したい場合は、SIM グループ管理画面から削除できます。</li><li><strong>設定を解除しても GPS マルチユニットは通信を継続しようとします。設定を解除する前に必ず GPS マルチユニットの電源を切るか、GPS マルチユニットから SIM を抜き出してください。</strong></li></ul>`,
      },
    },
    confirm: { en: `Delete configuration`, ja: `設定を解除する` },
    error: {
      updateFailed: { en: `Update failed.`, ja: `更新に失敗しました。` },
    },
  },
};
