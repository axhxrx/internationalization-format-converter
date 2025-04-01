export const translations = {
  quora_cam_cellular_pack: {
    model_name: { en: `Cellular Pack`, ja: `ソラカメ専用セルラーパック` },
    actions: {
      edit_tag: { en: `Edit tags`, ja: `タグを編集` },
      change_termination_protection: { en: `Change termination protection`, ja: `解約プロテクション変更` },
      terminate: { en: `Terminate`, ja: `解約` },
    },
    actions_menu: {
      title: { en: `Actions`, ja: `操作` },
    },
    columns: {
      msisdn: { en: `MSISDN`, ja: `MSISDN` },
      iccid: { en: `ICCID`, ja: `ICCID` },
      imei: { en: `IMEI`, ja: `IMEI` },
      name: { en: `Name`, ja: `名前` },
      serial_number: { en: `Serial number`, ja: `製造番号` },
      status: { en: `Status`, ja: `状態` },
      billing_start_date: { en: `Billing Start Date`, ja: `課金開始日` },
      termination_protection: { en: `TP`, ja: `TP` },
    },
    context_menu: {
      header: { en: `Actions for selected Cellular Pack`, ja: `選択されたセルラーパックの操作` },
    },
    legends: {
      termination_protection: {
        description: {
          en: `Termination Protection helps prevent a Cellular Pack from being inadvertently terminated`,
          ja:
            `Termination Protection (解約プロテクション)<br />誤ってセルラーパックの契約を解約 (Terminate) してしまわないように保護しているかどうかを示します。<br />錠のマークが見えていれば保護されています（解約できません）。<br />保護を解除するには [操作] メニューで [解約プロテクション変更] を選択し、スイッチを OFF に変更します。`,
        },
      },
    },
    values: {
      status: {
        active: { en: `Active`, ja: `契約中` },
        terminated: { en: `Terminated`, ja: `解約済み` },
      },
    },
    table: {
      no_data: { en: `No data. The cellular pack you have applied for will not be displayed until it is shipped.`,
        ja: `データがありません。お申し込みいただいたソラカメ専用セルラーパックは発送されるまで表示されません。` },
    },
  },
};
