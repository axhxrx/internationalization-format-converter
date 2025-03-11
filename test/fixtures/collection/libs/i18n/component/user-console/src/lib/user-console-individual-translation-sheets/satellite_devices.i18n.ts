export const translations = {
  satellite_device_sent_messages: {
    columns: {
      id: { en: `ID`, ja: `メッセージ ID` },
      sent_time_epoch_ms: { en: `Sent Time`, ja: `送信日時` },
    },
    no_data: { en: `No messages`, ja: `メッセージがありません` },
    title: { en: `Downlink messages sent to this device`, ja: `このデバイスに送信したメッセージ` },
  },
  satellite_devices: {
    actions_menu: {
      title: { en: `Actions`, ja: `操作` },
    },
    actions: {
      change_termination_protection: { en: `Change termination protection`, ja: `解約プロテクション変更` },
      edit_tags: { en: `Edit tags`, ja: `タグを編集` },
      harquest_data: { en: `Harquest Data`, ja: `データを確認` },
      register: { en: `Register Device`, ja: `デバイス登録` },
      send_downlink_message: { en: `Send downlink message`, ja: `ダウンリンクメッセージを送信する` },
      set_group: { en: `Set group`, ja: `グループ設定` },
      terminate: { en: `Terminate`, ja: `解約` },
    },
    columns: {
      group: { en: `Group`, ja: `グループ` },
      id: { en: `ID`, ja: `ID` },
      name: { en: `Name`, ja: `名前` },
      provider: { en: `Provider`, ja: `プロバイダー` },
      registered_time_epoch_ms: { en: `Registered Time`, ja: `登録日時` },
      termination_protection: { en: `TP`, ja: `TP` },
    },
    legends: {
      provider: {
        description: { en: `Satellite connectivity provider name`, ja: `衛星通信プロバイダー名` },
      },
      termination_protection: {
        description: {
          en: `Termination Protection helps prevent a device from being inadvertently terminated`,
          ja:
            `Termination Protection (解約プロテクション)<br />誤って衛星通信デバイスの契約を解約 (Terminate) してしまわないように保護しているかどうかを示します。<br />錠のマークが見えていれば保護されています（解約できません）。<br />保護を解除するには [操作] メニューで [解約プロテクション変更] を選択し、スイッチを OFF に変更します。`,
        },
      },
    },
    message: {
      registration_failure_message: { en: `Failed to register a satellite device`, ja: `デバイスの登録に失敗しました` },
      registration_success_message: { en: `Successfully registered satellite device`,
        ja: `デバイスの登録に成功しました` },
      send_downlink_failure: { en: `Failed to send a satellite downlink message`,
        ja: `ダウンリンクメッセージを送信できませんでした` },
      send_downlink_success: { en: `Successfully sent a satellite downlink message`,
        ja: `ダウンリンクメッセージを送信しました` },
    },
    modals: {
      register: {
        cancel: { en: `Cancel`, ja: `キャンセル` },
        hardware_id: { en: `Hardware ID`, ja: `ハードウェア ID` },
        name: { en: `Name`, ja: `名前` },
        provider: { en: `Satellite Connectivity Provider`, ja: `衛星通信プロバイダー` },
        provider_description: { en: `The satellite connectivity provider name for the device`,
          ja: `デバイスが利用する衛星通信プロバイダー名` },
        provider_placeholder: { en: `Please select`, ja: `選択してください` },
        registration_code: { en: `Registration Code`, ja: `登録コード` },
        submit: { en: `Register`, ja: `登録` },
        title: { en: `Register Device`, ja: `衛星通信デバイス登録` },
      },
      send_downlink_message: {
        message: {
          label: { en: `Message (Base64 format)`, ja: `メッセージ (Base64 形式)` },
        },
        ok: { en: `Send`, ja: `送信する` },
        title: { en: `Send Downlink Message to Device`, ja: `ダウンリンクメッセージを送信する` },
      },
    },
    model_name: { en: `Satellite Device`, ja: `衛星通信デバイス` },
    no_data: { en: `No data`, ja: `デバイスがありません` },
    provider: {
      astrocast: { en: `Astrocast`, ja: `Astrocast` },
    },
    termination_protection: {
      label: { en: `Termination Protection`, ja: `解約プロテクション` },
      value: {
        disabled: { en: `Disabled`, ja: `無効` },
        enabled: { en: `Enabled`, ja: `有効` },
      },
    },
  },
};
