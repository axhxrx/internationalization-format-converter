export const translations = {
  squignox_devices: {
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
      register: { en: `Register`, ja: `デバイス登録` },
      show_pac: { en: `Show PAC`, ja: `PAC表示` },
      terminate: { en: `Terminate`, ja: `解約` },
    },
    change_group_success_message: { en: `The group change was completed successfully.`, ja: `グループを変更しました` },
    columns: {
      activated_time: { en: `Activated Time`, ja: `アクティベート日時` },
      group: { en: `Group`, ja: `グループ` },
      id: { en: ` Device ID`, ja: `デバイス ID` },
      last_seen: { en: `Last seen`, ja: `最終受信日時` },
      lqi: { en: `Link Quality`, ja: `Link Quality` },
      name: { en: `Name`, ja: `名前` },
      product_certification_id: { en: `Product Certificate ID`, ja: `Product Certificate ID` },
      registered_time: { en: `Registered Time`, ja: `登録日時` },
      registration_status: { en: `Registration`, ja: `登録状態` },
      snr: { en: `SNR`, ja: `SNR` },
      status: { en: `Status`, ja: `ステータス` },
      termination_protection: { en: `TP`, ja: `TP` },
    },
    context_menu: {
      header: { en: `Actions for selected devices`, ja: `選択された Squignox デバイスの操作` },
    },
    downlink_sent: { en: `Downlink message sent.`, ja: `ダウンリンク通信をリクエストしました` },
    errors: {
      query_is_not_permitted: {
        en:
          `The search function is restricted by the current user permissions. To use this feature, the Query:searchSquignoxDevices permission must be granted.`,
        ja:
          `現在の権限ではSquignox検索機能が制限されています。使用するには Query:searchSquignoxDevices 権限が必要です。`,
      },
      unable_to_register_squignox_device: {
        en:
          `Unable to register Squignox device. Please double-check the Device ID and PAC (Porting Authorization Code).`,
        ja:
          `Squignox デバイスが登録できませんでした。デバイス ID と PAC (Porting Authorization Code) が正しいことをご確認ください。`,
      },
      unspecified_registration_error: { en: `Unknown error on registration. Please contact our customer support.`,
        ja: `登録時にエラーが発生しました。サポートまでお問い合わせください。` },
    },
    label_registration_error_details: { en: `Registration error details`, ja: `デバイス登録エラーの詳細` },
    lead_to_order_page: { en: `<p>Squignox devices can be ordered from <a href='/orders'>Orders</a> menu.</p>`,
      ja: `<p>Squignox デバイスは<a href='/orders'>発注ページ</a>からお買い求めいただけます。</p>` },
    legends: {
      activated_time: {
        description: { en: `Squignox activated time`, ja: `Squignox デバイスがアクティベートされた日時です。` },
      },
      group: {
        description: { en: `Group that the Squignox device belongs to`,
          ja: `Squignox デバイスが所属しているグループです` },
      },
      id: {
        description: { en: `Device ID is a unique identifier for each device`,
          ja: `各 Squignox デバイスを一意に識別するための識別子です` },
      },
      last_seen: {
        description: { en: `Timestamp when Quoracomm received a message from the Squignox device`,
          ja: `Squignox デバイスからのメッセージがプラットフォームに届いた最新の日時です。` },
      },
      lqi: {
        description: { en: `Link Quality Indicator based on RSSI, receiver redundancy and RC zone.`,
          ja: `Squignox デバイスの電波状態です。` },
      },
      name: {
        description: { en: `The name assigned to the Squignox device`, ja: `Squignox デバイスに付けた名前です` },
      },
      product_certification_id: {
        description: { en: `The Product Certificate ID populated when the device was registered.`,
          ja: `登録時に入力された Product Certificate ID です。` },
      },
      registered_time: {
        description: { en: `Squignox registered time`, ja: `Squignox デバイスの登録日時です。` },
      },
      registration_status: {
        description: { en: `Squignox API registration status`, ja: `Squignox デバイスの登録状態です。` },
      },
      status: {
        description: { en: `State of the Squignox device`, ja: `Squignox デバイスの状態です。` },
      },
      termination_protection: {
        description: {
          en:
            `Termination Protection<br />Shows whether the Squignox Device is protected from unintentional termination.<br />Lock icon indicates the Squignox Device is protected (cannot be terminated).<br />To unlock the protection, go to [Actions] > [Change termination protection] then turn the protection switch to 'Off'.`,
          ja:
            `Termination Protection (解約プロテクション)<br />誤って Squignox デバイスの契約を解約 (Terminate) してしまわないように保護しているかどうかを示します。<br />錠のマークが見えていれば保護されています（解約できません）。<br />保護を解除するには [操作] メニューで [解約プロテクション変更] を選択し、スイッチを OFF に変更します。`,
        },
      },
    },
    modals: {
      register: {
        cancel: { en: `Cancel`, ja: `キャンセル` },
        device_id: { en: `Squignox device ID`, ja: `Squignox デバイス ID` },
        device_id_placeholder: { en: `the device ID, e.g. M450N`, ja: `デバイス ID （例）M450N` },
        product_certification_id: { en: `Product certification ID (if required)`, ja: `Product certification ID` },
        product_certification_id_placeholder: { en: `product certification ID is required if device not pre-registered`,
          ja: `Squignox デバイスに記載されている Product certification ID を入力してください。` },
        product_certification_not_required_for_prototypes: {
          en: `product certification ID is not required for prototype devices`,
          ja: `プロトタイプデバイスの場合 Product certification ID は不要です。`,
        },
        prototype_status: { en: `Prototype status`, ja: `プロトタイプ` },
        prototype_status_help: {
          en:
            `A limited number of devices may be registered as prototypes.  Prototypes do not need a product certification ID.`,
          ja:
            `プロトタイプデバイスは Product certification ID は不要です。プロトタイプとして登録できるデバイス数に制限があります。`,
        },
        register_squignox_jp_coverage_pricing_notice: {
          en:
            `There will be a charge for the use of Quoracomm Air for Squignox. Please see the <a href='https://developers.example.com/en/docs/reference/fees/#quoracomm-air-for-squignox' target='_blank'>pricing page</a> for details.<br/>`,
          ja:
            `QUORACOMM Air for Squignox の利用には料金が発生いたします。<br />詳しくは<a href="https://quoracomm.jp/services/air/squignox/squignox_price/" target="_blank">料金ページ</a>をご覧ください。`,
        },
        register_this_devices_as_a_prototype: { en: `Register this device as a prototype`,
          ja: `このデバイスをプロトタイプとして登録する` },
        registration_code: { en: `PAC (Porting Authorization Code)`, ja: `PAC (Porting Authorization Code)` },
        registration_code_placeholder: {
          en: 'the registration code for the device (printed on the package)',
          ja: '',
        },
        submit: { en: `Register`, ja: `登録` },
        text: {
          en: '',
          ja: '',
        },
        title: { en: `Register Squignox device`, ja: `Squignox デバイスの登録` },
      },
    },
    registration_failure_message: { en: `The Squignox device was not registered successfully.`,
      ja: `Squignox デバイスの登録に失敗しました。` },
    registration_success_message: { en: `The Squignox device was registered successfully.`,
      ja: `Squignox デバイスの登録に成功しました。` },
    values: {
      lqi: {
        Average: { en: `Average`, ja: `Average` },
        Excellent: { en: `Excellent`, ja: `Excellent` },
        Good: { en: `Good`, ja: `Good` },
        Limit: { en: `Limit`, ja: `Limit` },
      },
      registration_status: {
        failed: { en: `Failed`, ja: `登録失敗` },
        notStarted: { en: `Not Started`, ja: `登録待ち` },
        pending: { en: `Pending`, ja: `登録保留` },
        restarting: { en: `Restarting`, ja: `再登録中` },
        success: { en: `Success`, ja: `登録完了` },
      },
      status: {
        active: { en: `Active`, ja: `使用中` },
        inactive: { en: `Inactive`, ja: `休止中` },
        instock: { en: `In Stock`, ja: `在庫` },
        ready: { en: `Ready`, ja: `準備完了` },
        terminated: { en: `Terminated`, ja: `解約済み` },
      },
    },
  },
};
