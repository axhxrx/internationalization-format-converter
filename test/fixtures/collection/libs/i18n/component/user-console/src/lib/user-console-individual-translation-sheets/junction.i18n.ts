export const translations = {
  junction: {
    add_mirroring_destination: { en: `Add Mirroring Destination`, ja: `ミラーリング先を追加` },
    add_mirroring_destination_help_text: {
      en:
        `To add a new destination for mirroring, enter the details below, then press Save. The new settings will take effect immediately.`,
      ja:
        `ミラーリング先を追加するには、詳細を入力して「保存」ボタンを押してください。新しい設定はすぐに反映されます。`,
    },
    alert_text_inspection_config_deleted_successfully: { en: `The Inspection configuration was deleted successfully.`,
      ja: `インスペクション設定は削除されました。` },
    alert_text_inspection_config_saved_successfully: { en: `The Inspection configuration was saved successfully.`,
      ja: `インスペクション設定は正しく保存されました。` },
    alert_text_peer_deleted_successfully: { en: `The Mirroring destination was deleted successfully.`,
      ja: `ミラーリング先は削除されました。` },
    alert_text_peer_saved_successfully: { en: `The Mirroring destination was saved successfully.`,
      ja: `ミラーリング先は正しく保存されました。` },
    alert_text_successfully_deleted_redirection_config: { en: `The Redirection configuration was deleted successfully.`,
      ja: `リダイレクション設定は削除されました。` },
    alert_text_successfully_saved_redirection_config: { en: `The Redirection configuration was saved successfully.`,
      ja: `リダイレクション設定は正しく保存されました。` },
    cancel: { en: `Cancel`, ja: `キャンセル` },
    customRouting: {
      destinationDescription: { en: `Description`, ja: `概要` },
      destinationIpRange: { en: `IP Range`, ja: `IP アドレスレンジ` },
      label: { en: `Custom routing`, ja: `カスタムルーティング` },
      mode: {
        exclusive: { en: `EXCLUSIVE`, ja: `EXCLUSIVE` },
        exclusiveDescription: {
          en: `Packets destined for the configured IP ranges will be routed to the Internet Gateway.`,
          ja:
            `設定された IP アドレスレンジ宛てのパケットはインターネットゲートウェイへルーティングされ、その他のパケットは Gate Peer へルーティングされます。`,
        },
        inclusive: { en: `INCLUSIVE`, ja: `INCLUSIVE` },
        inclusiveDescription: {
          en:
            `Packets destined for the configured IP ranges will be routed to the Gate Peer, and other packets will be routed to the Internet Gateway.`,
          ja:
            `設定された IP アドレスレンジ宛てのパケットは Gate Peer へルーティングされ、その他のパケットはインターネットゲートウェイへルーティングされます。`,
        },
        label: { en: `Mode`, ja: `モード` },
      },
    },
    delete: { en: `Delete`, ja: `削除` },
    delete_inspection_settings: { en: `Delete Inspection Settings`, ja: `インスペクション設定を削除` },
    delete_inspection_settings_confirm: {
      en: `This action cannot be undone. Are you sure you want to delete Inspection Settings ?`,
      ja: `この操作は取り消せません。 インスペクション設定を削除しますか？`,
    },
    delete_peer_modal_strings: {
      body: { en: `Are you sure you want to delete this mirroring destination?`,
        ja: `ミラーリング先を削除してもよろしいですか？` },
      cancel: { en: `Cancel`, ja: `キャンセル` },
      confirm: { en: `Confirm`, ja: `確認` },
      title: { en: `Delete mirroring destination?`, ja: `ミラーリング設定の削除` },
    },
    delete_redirection_settings: { en: `Delete Redirection Settings`, ja: `リダイレクション設定を削除` },
    description: { en: `Description`, ja: `概要` },
    destination: { en: `Destination`, ja: `転送先` },
    edit: { en: `Edit`, ja: `編集` },
    enabled: { en: `Enabled`, ja: `有効` },
    gateway_ip_address: { en: `Gateway IP address`, ja: `ゲートウェイ IP アドレス` },
    info_mirroring_destination_limit_reached: {
      en:
        `A maximum of 2 mirroring destinations may be defined. To add a new destination, first delete one of the existing destinations.`,
      ja:
        `ミラーリング先として設定することができるのは最大2つまでです。新しいミラーリング先を追加したい場合は、先に既存のミラーリング先のどちらかを削除してください。`,
    },
    info_redirection_disabled_because_no_peers_available: {
      en:
        `NOTE: No customer Gate Peers are defined for this VPG. To use the Redirection feature of Quoracomm Junction, you must first add a Gate Peer (in the Device LAN tab).`,
      ja:
        `この VPG には Gate Peer がありません。リダイレクションをご利用いただくには、「デバイス LAN 設定」タブで、お客様の Gate Peer を追加してください`,
    },
    inspection: { en: `Inspection`, ja: `インスペクション` },
    ip_address_traffic_should_be_redirected_to: { en: `IP address traffic should be redirected to`,
      ja: `転送先 IP アドレス` },
    LOADING_dot_dot_dot: { en: `LOADING...`, ja: `ロード中...` },
    mirroring: { en: `Mirroring`, ja: `ミラーリング` },
    mirroring_destination_description_placeholder: {
      en: '',
      ja: '',
    },
    mirroring_destination_ip_address: { en: `Mirroring destination IP address`, ja: `ミラーリング先 IP アドレス` },
    mirroring_destination_ip_address_placeholder: {
      en: '',
      ja: '',
    },
    mirroring_peer: {
      disabled: { en: `Disabled`, ja: `無効` },
      enabled: { en: `Enabled`, ja: `有効` },
    },
    no_peers_exist_mirroring_will_not_occur: {
      en: `No mirroring destinations have been defined. Mirroring will not occur.`,
      ja: `ミラーリング先がありません。`,
    },
    optional_notes_descriptive_text_etc: { en: `Optional notes, descriptive text, etc.`,
      ja: `メモやノートなど（任意）` },
    redirection: { en: `Redirection`, ja: `リダイレクション` },
    redirection_is_currently_disabled: { en: `Redirection is currently disabled.`,
      ja: `リダイレクション設定は無効になっています。` },
    redirection_is_currently_enabled: { en: `Redirection is currently enabled.`,
      ja: `リダイレクション設定は有効になっています。` },
    save: { en: `Save`, ja: `保存` },
    save_inspection_settings: { en: `Save Inspection Settings`, ja: `インスペクション設定を保存` },
    save_redirection_settings: { en: `Save Redirection Settings`, ja: `リダイレクション設定を保存` },
    save_your_changes_to_apply_new_configuration: { en: `To apply this new configuration, please save your changes.`,
      ja: `新しい設定を反映するには、保存してください。` },
    quoracomm_junction: { en: `Quoracomm Junction`, ja: `QUORACOMM Junction` },
    quoracomm_junction_colon_inspection: { en: `Quoracomm Junction: Inspection`,
      ja: `QUORACOMM Junction: インスペクション設定` },
    quoracomm_junction_colon_mirroring: { en: `Quoracomm Junction: Mirroring`,
      ja: `QUORACOMM Junction: ミラーリング設定` },
    quoracomm_junction_colon_redirection: { en: `Quoracomm Junction: Redirection`,
      ja: `QUORACOMM Junction: リダイレクション設定` },
    status: { en: `Status`, ja: `ステータス` },
  },
};
