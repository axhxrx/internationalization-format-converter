export const translations = {
  lora_devices: {
    actions_menu: {
      title: { en: `Actions`, ja: `操作` },
    },
    actions: {
      change_group: { en: `Change group`, ja: `所属グループ変更` },
      change_termination_protection: { en: `Change termination protection`, ja: `解約プロテクション変更` },
      data: { en: `Harquest data`, ja: `データを確認` },
      downlink: { en: `Send downlink message`, ja: `ダウンリンク通信` },
      edit_tag: { en: `Edit tags`, ja: `タグを編集` },
      logs: { en: `Check logs`, ja: `ログを確認` },
      terminate: { en: `Terminate`, ja: `解約` },
    },
    change_group_success_message: { en: `The group change was completed successfully.`, ja: `グループを変更しました` },
    columns: {
      group: { en: `Group`, ja: `グループ` },
      id: { en: `Device ID`, ja: `デバイス ID` },
      last_seen: { en: `Last Seen`, ja: `最終受信日時` },
      name: { en: `Name`, ja: `名前` },
      rssi: { en: `RSSI`, ja: `RSSI` },
      snr: { en: `SNR`, ja: `SNR` },
      status: { en: `Status`, ja: `状態` },
      termination_protection: { en: `TP`, ja: `TP` },
    },
    context_menu: {
      header: { en: `Actions for selected devices`, ja: `選択された LoRaWAN デバイスの操作` },
    },
    downlink_sent: { en: `A downlink message was sent to network server`, ja: `ダウンリンク通信をリクエストしました` },
    legends: {
      group: {
        description: { en: `Group that the LoRaWAN device belongs to`,
          ja: `LoRaWAN デバイスが所属しているグループです` },
      },
      id: {
        description: { en: `Device ID is a unique identifier for each device`,
          ja: `各 LoRaWAN デバイスを一意に識別するための識別子です` },
      },
      last_seen: {
        description: { en: `Timestamp when Quoracomm received a message from the LoRaWAN device`,
          ja: `LoRaWAN デバイスからのメッセージがプラットフォームに届いた最新の日時です。` },
      },
      name: {
        description: { en: `The name assigned to the LoRaWAN device`, ja: `LoRaWAN デバイスに付けた名前です` },
      },
      status: {
        description: { en: `State of the LoRaWAN device`, ja: `LoRaWAN デバイスの状態です。` },
      },
      termination_protection: {
        description: {
          en:
            `Termination Protection<br />Shows whether the LoRaWAN device is protected from unintentional termination.<br />Lock icon indicates the LoRaWAN Device is protected (cannot be terminated).<br />To unlock the protection, go to [Actions] > [Change termination protection] then turn the protection switch to 'Off'.`,
          ja:
            `Termination Protection (解約プロテクション)<br />誤って LoRaWAN デバイスの契約を解約 (Terminate) してしまわないように保護しているかどうかを示します。<br />錠のマークが見えていれば保護されています（解約できません）。<br />保護を解除するには [操作] メニューで [解約プロテクション変更] を選択し、スイッチを OFF に変更します。`,
        },
      },
    },
    values: {
      status: {
        active: { en: `Active`, ja: `使用中` },
        instock: { en: `In Stock`, ja: `在庫` },
        ready: { en: `Ready`, ja: `準備完了` },
        terminated: { en: `Terminated`, ja: `解約済み` },
      },
    },
  },
};
