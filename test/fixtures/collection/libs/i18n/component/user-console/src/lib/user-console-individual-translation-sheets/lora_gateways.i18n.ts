export const translations = {
  lora_gateways: {
    actions_menu: {
      title: { en: `Actions`, ja: `操作` },
    },
    actions: {
      change_termination_protection: { en: `Change termination protection`, ja: `解約プロテクション変更` },
      edit_tag: { en: `Edit tags`, ja: `タグを編集` },
      show_lora_gateway: { en: `Detail`, ja: `詳細` },
      terminate: { en: `Terminate`, ja: `解約` },
    },
    columns: {
      contract_end_time: { en: `Contract end time`, ja: `契約満了予定日` },
      gateway_type: { en: `Type`, ja: `種類` },
      id: { en: `Gateway ID`, ja: `ゲートウェイ ID` },
      name: { en: `Name`, ja: `名前` },
      network_set_id: { en: `Network Set ID`, ja: `ネットワークセットID` },
      online: { en: `Session`, ja: `セッション状態` },
      status: { en: `Status`, ja: `ステータス` },
      termination_protection: { en: `TP`, ja: `TP` },
    },
    context_menu: {
      header: { en: `Actions for selected LoRaWAN gateway`, ja: `選択された LoRaWAN ゲートウェイの操作` },
    },
    legends: {
      contract_end_time: {
        description: {
          en: `LoRaWAN Gateway contract expiration date. If no action is taken, it will be automatically renewed.`,
          ja: `LoRaWAN ゲートウェイの契約満了予定日です。特に届け出がない場合は、自動更新されます。`,
        },
      },
      gateway_type: {
        description: { en: `LoRaWAN Gateway type: 'Owned' or 'Shared Serivce'`,
          ja: `LoRaWAN ゲートウェイが所有モデルか共有サービスモデルかを表しています` },
      },
      online: {
        description: { en: `LoRaWAN Gateway is connecting to Quoracomm.`,
          ja: `LoRaWAN ゲートウェイが QUORACOMM に接続しているかを表しています` },
      },
      termination_protection: {
        description: {
          en:
            `Termination Protection<br />Shows whether the LoRaWAN Gateways are protected from unintentional termination.<br />Lock icon indicates the LoRaWAN Gateway is protected (cannot be terminated).<br />To unlock the protection, go to [Actions] > [Change termination protection] then turn the protection switch to 'Off'.`,
          ja:
            `Termination Protection (解約プロテクション)<br />誤って LoRaWAN ゲートウェイの契約を解約 (Terminate) してしまわないように保護しているかどうかを示します。<br />錠のマークが見えていれば保護されています（解約できません）。<br />保護を解除するには [操作] メニューで [解約プロテクション変更] を選択し、スイッチを OFF に変更します。`,
        },
      },
    },
    values: {
      gateway_type: {
        owned: { en: `Owned Gateway`, ja: `所有モデル` },
        shared: { en: `Shared Service Gateway`, ja: `共有サービスモデル` },
      },
      owned: {
        false: { en: `Shared Service Gateway`, ja: `共有サービスモデル` },
        true: { en: `Owned Gateway`, ja: `所有モデル` },
      },
      status: {
        active: { en: `Active`, ja: `使用中` },
        instock: { en: `In stock`, ja: `在庫` },
        ready: { en: `Ready`, ja: `準備完了` },
        terminated: { en: `Terminated`, ja: `解約済み` },
      },
    },
  },
};
