export const translations = {
  subscribers: {
    abolished: {
      button: { en: `Go to new SIM management page`, ja: `新しい SIM 管理画面を使う` },
      text: {
        en:
          `The legacy SIM management page you are trying to access has been retired and is no longer supported. Please click the button below to be redirected to the new SIM management page.`,
        ja:
          `使いやすく、高速で、チーム利用に適した最新の SIM 管理画面をご利用ください。従来の SIM 管理画面の廃止については <a href="https://changelog.example.com/ja/cong-lai-no-sim-guan-li-hua-mian-wofei-zhi-simasu-3Pn3R6">QUORACOMM サービス更新情報</a>をご覧ください。`,
      },
      title: { en: `Legacy SIM Management - Retired`, ja: `新しい SIM 管理画面をご利用ください` },
    },
    actions_menu: {
      title: { en: `Actions`, ja: `操作` },
      sections: {
        session: { en: `Session`, ja: `セッション` },
        sim: { en: `SIM`, ja: `SIM` },
        settings: { en: `Settings`, ja: `設定` },
        logs_and_diagnostics: { en: `Logs & Diagnostics`, ja: `ログと診断` },
      },
    },
    actions: {
      activate: { en: `Activate`, ja: `使用中に変更` },
      add_subscription: { en: `Add subscription`, ja: `サブスクリプションを追加` },
      add_virtual_sim: { en: `Add Virtual SIM`, ja: `バーチャル SIM を追加` },
      cancel_transfer: { en: `Cancel transfer`, ja: `譲渡をキャンセル` },
      change_name: { en: `Change name`, ja: `名前を変更` },
      change_termination_protection: { en: `Change termination protection`, ja: `解約プロテクションを変更` },
      create_session: { en: `Create session`, ja: `Arc セッションを作成` },
      data: { en: `View Harquest Data`, ja: `Harquest Data を表示` },
      data_usage: { en: `View data usage`, ja: `通信量履歴を表示` },
      deactivate: { en: `Deactivate`, ja: `休止中に変更` },
      delete_session: { en: `Delete session`, ja: `セッションを切断` },
      details: { en: `Details`, ja: `詳細` },
      download_csv: { en: `Download`, ja: `ダウンロード` },
      expiry: { en: `Change expiration`, ja: `有効期限を変更` },
      group: { en: `Change group`, ja: `所属グループを変更` },
      logs: { en: `View logs`, ja: `ログを表示` },
      packet_capture: { en: `Packet capture`, ja: `パケットキャプチャ` },
      ping: { en: `Send ping`, ja: `Ping を送信` },
      send_sms: { en: `Send SMS`, ja: `SMS を送信` },
      set_imei_lock: { en: `Enable IMEI lock`, ja: `IMEI ロックを設定` },
      set_to_standby: { en: `Standby`, ja: `利用開始待ちに変更` },
      show_on_demand_remote_access: { en: `On-demand Remote Access`, ja: `オンデマンドリモートアクセス` },
      connect_web_console: { en: `Connect using web terminal`, ja: `Web ターミナルで接続` },
      speed_class: { en: `Change speed class`, ja: `速度クラスを変更` },
      suspend: { en: `Suspend`, ja: `利用中断中に変更` },
      terminate: { en: `Terminate`, ja: `解約` },
      transfer: { en: `Transfer to another operator`, ja: `他のオペレーターへ譲渡` },
      transfer_tooltip: { en: `Only SIMs in Ready status can be transferred to another operator`,
        ja: `'準備完了' 状態の SIM のみ他のオペレーターへ譲渡できます` },
      troubleshoot: { en: `Run diagnostics`, ja: `接続状況を診断` },
      unset_imei_lock: { en: `Remove IMEI lock`, ja: `IMEI ロックを解除` },
      update_bundle: { en: `Change bundle`, ja: `バンドルを選択` },
      update_bundle_or_package: { en: `Change bundle/package`, ja: `バンドル／パッケージを選択` },
      update_package: { en: `Change package`, ja: `パッケージを選択` },
    },
    alert: {
      activate_failed_multi: { en: `Unable to activate {{failure}} of {{all}} SIMs`,
        ja: `{{all}} 個中 {{failure}} 個の SIM の使用を開始できませんでした` },
      activated_multi: { en: `Successfully activated {{success}} of {{all}} SIMs`,
        ja: `{{all}} 個中 {{success}} 個の SIM の使用を開始しました` },
      deactivate_failed_multi: { en: `Unable to deactivate {{failure}} of {{all}} SIMs`,
        ja: `{{all}} 個中 {{failure}} 個の SIM の使用を休止できませんでした` },
      deactivated_multi: { en: `Successfully deactivated {{success}} of {{all}} SIMs`,
        ja: `{{all}} 個中 {{success}} 個の SIM の使用を休止しました` },
      delete_session: {
        failed: { en: `Unable to delete session`, ja: `セッションを切断できませんでした` },
        succeeded: { en: `Successfully deleted session`, ja: `セッションを切断しました` },
      },
      expiry_change_failed: { en: `Unable to change the expiration date of the SIM`,
        ja: `有効期限を変更できませんでした` },
      expiry_change_failed_multi: { en: `Unable to change the expiration date / time of {{failure}} of {{all}} SIMs`,
        ja: `{{all}} 個中 {{failure}} 個の SIM の有効期限を変更できませんでした` },
      expiry_changed: { en: `Successfully changed the expiration date of the SIM`, ja: `有効期限を変更しました` },
      expiry_changed_multi: { en: `Successfully changed the expiration date / time of {{success}} of {{all}} SIMs`,
        ja: `{{all}} 個中 {{success}} 個の SIM の有効期限を変更しました` },
      expiry_delete_failed: { en: `Unable to clear the expiration date of the SIM`,
        ja: `有効期限をクリアできませんでした` },
      expiry_delete_failed_multi: { en: `Unable to clear the expiration date of {{failure}} of {{all}} SIMs`,
        ja: `{{all}} 個中 {{failure}} 個の SIM の有効期限をクリアできませんでした` },
      expiry_deleted: { en: `Successfully cleared the expiration date of the SIM`, ja: `有効期限をクリアしました` },
      expiry_deleted_multi: { en: `Successfully cleared the expiration date of {{success}} of {{all}} SIMs`,
        ja: `{{all}} 個中 {{success}} 個の SIM の有効期限をクリアしました` },
      group_change_failed_format: { en: `Unable to change the group of {{failure}} of {{all}} SIMs`,
        ja: `{{all}} 個中 {{failure}} 個の SIM のグループを変更できませんでした` },
      group_changed_format: { en: `Successfully changed the group of the {{success}} of {{all}} SIMs`,
        ja: `{{all}} 個中 {{success}} 個の SIM のグループを変更しました` },
      imei_lock_set: {
        multiple: {
          failed: { en: `Unable to enable IMEI lock for {{failure}} of {{all}} SIMs.`,
            ja: `{{all}} 個中 {{failure}} 個の SIM の IMEI をロックできませんでした` },
          succeeded: { en: `Successfully enabled IMEI lock for {{success}} of {{all}} SIMs.`,
            ja: `{{all}} 個中 {{success}} 個の SIM の IMEI をロックしました` },
        },
        single: {
          failed: { en: `Unable to enable IMEI lock for the SIM`, ja: `IMEI ロックを設定できませんでした` },
          succeeded: { en: `Successfully enabled IMEI lock for the SIM`, ja: `IMEI ロックを設定しました` },
        },
      },
      imei_lock_unset: {
        multiple: {
          failed: { en: `Unable to disable IMEI lock for {{failure}} of {{all}} SIMs.`,
            ja: `{{all}} 個中 {{failure}} 個の SIM のロックを解除できませんでした` },
          succeeded: { en: `Successfully disabled IMEI lock for {{success}} of {{all}} SIMs.`,
            ja: `{{all}} 個中 {{success}} 個の SIM のロックを解除しました` },
        },
        single: {
          failed: { en: `Unable to disable IMEI lock for the SIM`, ja: `IMEI ロックを解除できませんでした` },
          succeeded: { en: `Successfully disabled IMEI lock for the SIM`, ja: `IMEI ロックを解除しました` },
        },
      },
      set_to_standby_failed_multi: { en: `Unable to set {{failure}} of the {{all}} selected SIMs to standby status`,
        ja: `{{all}} 個中 {{failure}} 個の SIM を「利用開始待ち」に設定できませんでした` },
      set_to_standby_failed_single: { en: `Unable to set the SIM to standby status`,
        ja: `SIM を「利用開始待ち」に設定できませんでした` },
      set_to_standby_multi: { en: `Successfully set {{success}} of {{all}} SIMs to "standby" status`,
        ja: `{{all}} 個中 {{success}} 個の SIM を「利用開始待ち」にしました` },
      set_to_standby_single: { en: `Successfully set 1 SIM to "standby" status`,
        ja: `SIM を「利用開始待ち」にしました` },
      speed_class_change_failed: { en: `Unable to change the speed class`, ja: `速度クラスを変更できませんでした` },
      speed_class_change_failed_multi_format: { en: `Unable to change the speed class of {{failure}} of {{all}} SIMs`,
        ja: `{{all}} 個中 {{failure}} 個の SIM の速度クラスを変更できませんでした` },
      speed_class_changed: { en: `Successfully changed the speed class of the SIM(s)`, ja: `速度クラスを変更しました` },
      speed_class_changed_multi_format: { en: `Successfully changed the speed class of {{success}} of {{all}} SIMs`,
        ja: `{{all}} 個中 {{success}} 個の SIM の速度クラスを変更しました` },
      suspend_failed_multi: { en: `Unable to suspend {{failure}} of {{all}} SIMs`,
        ja: `{{all}} 個中 {{failure}} 個の SIM を利用中断できませんでした` },
      suspended_multi: { en: `Successfully suspended {{success}} of {{all}} SIMs`,
        ja: `{{all}} 個中 {{success}} 個の SIM を利用中断しました` },
      terminate_failed_multi: { en: `Unable to terminate {{failure}} of {{all}} SIMs`,
        ja: `{{all}} 個中 {{failure}} 個の SIM を解約できませんでした` },
      terminated_multi: { en: `Successfully terminated {{success}} of {{all}} SIMs`,
        ja: `{{all}} 個中 {{success}} 個の SIM を解約しました` },
      transfer_cancellation_failed: { en: `Unable to cancel SIM transfer for {{failure}} of {{all}} SIM(s)`,
        ja: `{{all}} 個中 {{failure}} 個の SIM の譲渡をキャンセルできませんでした` },
      transfer_cancellation_succeeded: { en: `Successfully canceled SIM transfer for {{success}} of {{all}} SIM(s)`,
        ja: `{{all}} 個中 {{success}} 個の SIM の譲渡をキャンセルしました` },
      transfer_failed: { en: `Unable to start SIM transfer`, ja: `SIM の譲渡を開始できませんでした` },
      transfer_started: { en: `Successfully started SIM transfer`, ja: `SIM の譲渡を開始しました` },
    },
    apiMode: {
      enableSimApiModeHelpTextAfterLink: { en: `.`, ja: `をお試しください。` },
      enableSimApiModeHelpTextBeforeLink: {
        en:
          `<i class='ds-icon --icon-info'></i>&nbsp; A new and improved version of this view is available. To access it, please switch to the `,
        ja: `<i class='ds-icon --icon-info'></i>&nbsp; パフォーマンスが大きく改善された、`,
      },
      enableSimApiModeLinkText: { en: `new SIM Management console`, ja: `新しい SIM 管理画面` },
      enableSubscriberApiModeHelpTextAfterLink: {
        en: '.',
        ja: '',
      },
      enableSubscriberApiModeHelpTextBeforeLink: {
        en: `You are using the latest version of the SIM Management console. `,
        ja: `SIM 管理画面の最新版をご利用中です。`,
      },
      enableSubscriberApiModeLinkText: { en: `Switch to the old version`, ja: `従来のバージョンに戻す` },
      mapRequiresNewSimManagementHelpText: { en: `The SIM locations map feature is available in the `,
        ja: `SIMロケーションマップ機能を利用するには、新しいSIM管理画面をお試しください。 ` },
      samUserPermissionHint: {
        en:
          `<i class='ds-icon --icon-info'></i>&nbsp; A new and improved version of this view is available. However, SAM user "{{ name }}" does not have sufficient permissions to use it. To access it, please ask your administrator to add the following permissions: <code>Query:searchSims</code> and <code>Group:listGroups</code>.`,
        ja:
          `<i class='ds-icon --icon-info'></i>&nbsp; パフォーマンスが大きく改善された、新しい SIM 管理画面がご利用可能です。ただし、SAM ユーザー "{{ name }}" には新しい SIM 管理画面を使用するための権限が設定されていません。管理者に依頼して、次の権限を設定してください:<code>Query:searchSims</code> and <code>Group:listGroups</code>.`,
      },
    },
    column_sort_disabled_popup: {
      en: `You can sort items when you set filters and the number of resulting items are less than 100.`,
      ja: `フィルタを適用し、アイテム数が 100 以下であればソートできます。`,
    },
    columns: {
      baseband_type: { en: `3G/LTE`, ja: `3G/LTE` },
      bundles: { en: `Bundle(s)`, ja: `バンドル` },
      category: { en: `Category`, ja: `カテゴリ` },
      country: { en: `Country / Area`, ja: `国または地域` },
      expiry: { en: `Expiry Date / Time`, ja: `有効期限` },
      group: { en: `Group`, ja: `グループ` },
      iccid: { en: `ICCID`, ja: `ICCID` },
      imei_lock: { en: `IMEI Lock`, ja: `IMEI ロック` },
      imsi: { en: `IMSI`, ja: `IMSI` },
      ip_address: { en: `IP address`, ja: `IP アドレス` },
      last_port_mapping_created_time: { en: `Last On-Demand Remote Access created time`,
        ja: `最終オンデマンドリモートアクセス作成日時` },
      last_seen: { en: `Last seen`, ja: `最終オンライン日時` },
      last_seen_online: { en: `Online since`, ja: `オンライン日時` },
      module_type: { en: `Module Type`, ja: `モジュールタイプ` },
      msisdn: { en: `MSISDN`, ja: `MSISDN` },
      name: { en: `Name`, ja: `名前` },
      plan: { en: `Plan`, ja: `プラン` },
      serial_number: { en: `Serial#`, ja: `製造番号` },
      session_status: { en: `Session`, ja: `セッション状態` },
      sim_id: { en: `SIM ID`, ja: `SIM ID` },
      speed_class: { en: `Speed class`, ja: `速度クラス` },
      status: { en: `Status`, ja: `状態` },
      subscription: { en: `Subscription`, ja: `サブスクリプション` },
      termination_protection: { en: `TP`, ja: `TP` },
    },
    context_menu: {
      header: { en: `Actions for selected SIMs`, ja: `選択された SIM の操作` },
    },
    details: { en: `Details`, ja: `詳細` },
    download_csv: {
      confirm: {
        body: {
          en:
            `Download the information of all SIMs in CSV format. If there are many SIMs, it may take some time to process.`,
          ja: `全 SIM の情報を CSV 形式でダウンロードします。件数が多い場合、処理に時間がかかる場合があります。`,
        },
        cancel: { en: `Cancel`, ja: `キャンセル` },
        confirm: { en: `Download`, ja: `ダウンロード` },
        title: { en: `Download the full SIM list`, ja: `全 SIM 一覧をダウンロード` },
      },
      downloading: { en: `Download SIMs list CSV file`, ja: `SIM の一覧を CSV 形式でダウンロード` },
    },
    fallback_sim_search: {
      en:
        `The current user permissions do not completely enable the search feature. Please grant the Query:searchSims permission to enable full search capability.`,
      ja:
        `現在の権限ではSIM検索機能の一部が制限されています。新しい検索機能を使用するにはQuery:searchSims権限を付与してください。`,
    },
    fallback_subscriber_search: {
      en:
        `The current user permissions do not completely enable the search feature. Please grant the Query:searchSubscribers permission to enable full search capability.`,
      ja:
        `現在の権限ではSIM検索機能の一部が制限されています。新しい検索機能を使用するにはQuery:searchSubscribers権限を付与してください。`,
    },
    hints: {
      please_check_iccid_and_puk: { en: `please double-check your input for the ICCID and PUK numbers.`,
        ja: `ICCID と PUK の入力に間違いがないかご確認ください` },
      please_check_imsi_and_pin: { en: `please double-check your input for the IMSI and PIN numbers`,
        ja: `IMSI とパスコードの入力に間違いがないかご確認ください` },
    },
    items_count_and_position: { en: `Items {{head}} - {{tail}}`, ja: `{{head}} - {{tail}} 件目` },
    items_count_and_position_and_selection: { en: `Items {{head}} - {{tail}} ({{selected}} selected)`,
      ja: `{{head}} - {{tail}} 件目 ({{selected}} 件選択中)` },
    items_per_page: { en: `Items per page`, ja: `表示件数` },
    legends: {
      country: {
        description: { en: `Name of country or area currently connected`,
          ja: `現在セッションが確立されている場合、どの国または地域で接続されているかを示します。` },
      },
      expiry: {
        description: {
          en:
            `Expiration date/time of the SIM. <br />After the expiry date/time, an ongoing data session will be disconnected and it becomes impossible to create a new session using the SIM until the expiration date/time is cleared or reset to a future date/time. `,
          ja:
            `ここで設定した日時に通信セッションを切断します。また、セッション切断後は有効期限をクリアするか、未来の日時に再設定するまで通信セッションを再接続できなくなります。`,
        },
      },
      group: {
        description: { en: `Group that the SIM belongs to`, ja: `SIM が所属しているグループです` },
      },
      iccid: {
        description: {
          en: `ICCID (Integrated Circuit Card Identifier) is an internationally unique identifier for each SIM card`,
          ja: `ICCID (Integrated Circuit Card Identifier) は、SIM カードを物理的に識別するための識別子です`,
        },
      },
      imei_lock: {
        description: {
          en:
            `When the IMEI Lock feature is enabled, the SIM is restricted to the device with the designated IMEI, and it is disabled if used with any other device.`,
          ja:
            `IMEI ロックを有効にすることで、SIM を指定デバイスの IMEI に紐づけます。これにより、他のデバイスでの通信を無効にすることができます。`,
        },
      },
      imsi: {
        description: {
          en:
            `IMSI (International Mobile Subscriber Identity) is an internationally unique identifier for each subscriber on their individual operator network`,
          ja:
            `IMSI (International Mobile Subscriber Identity) は、ネットワークオペレーターが各契約者を一意に識別するための識別子です`,
        },
      },
      ip_address: {
        previous_ip_address: { en: `This IP address was allocated in VPG in previous session.`,
          ja: `VPG内にて最後に割り当てられたIPアドレスです。` },
      },
      last_port_mapping_created_time: {
        description: {
          en:
            `Last On-Demand Remote Access creation time for Quoracomm Quapcha. Charges are based on the number of SIMs that used On-Demand Remote Access during the current billing month (UTC). The time of the relevant SIM is displayed in blue.`,
          ja:
            `直近のオンデマンドリモートアクセスが作成された日時です。当月中 (UTC) にオンデマンドリモートアクセスを作成した SIM に QUORACOMM Quapcha の利用料金が発生します。該当の SIM の時刻を青色で表示しています。`,
        },
      },
      last_seen: {
        description: { en: `The approximate date and time the SIM was last known to be online.`,
          ja: `現在オフラインの SIM が最後にオンラインだったと確認できた日時です。` },
      },
      module_type: {
        description: { en: `Form factor of SIM card`, ja: `SIM カードのフォームファクターです` },
      },
      msisdn: {
        description: { en: `MSISDN is the telephone number assigned to the SIM`,
          ja: `MSISDN は SIM に割り当てられた電話番号です` },
      },
      name: {
        description: { en: `Name assigned to the SIM`, ja: `SIM に付けた名前です` },
      },
      plan: {
        description: { en: `<div class="ds-text --icon-data">Data</div><div class="ds-text --icon-sms">SMS</div>`,
          ja: `<div class="ds-text --icon-data">データ通信</div><div class="ds-text --icon-sms">SMS</div>` },
      },
      serial_number: {
        description: { en: `Serial number printed on each SIM card`, ja: `SIM カード表面に印字された製造番号です` },
      },
      session_status: {
        description: { en: `Whether currently in-session or not`,
          ja: `現在セッションが確立されているかどうかを示します。` },
      },
      sim_id: {
        description: { en: `SIM ID`, ja: `SIM ID` },
      },
      speed_class: {
        description: {
          en:
            `The Speed Class refers to the maximum upload and download bandwidth that can be achieved by the SIM, which can be adjusted to customize the SIM's capabilities to meet specific usage requirements.`,
          ja:
            `速度クラスを変更して、IoT SIM の通信速度 (上限) を設定できます。通信速度 (上限) を設定すると、IoT SIM が意図せずに大量のデータ通信をすることを抑止できます。`,
        },
      },
      status: {
        description: {
          en:
            `State of the SIM.<br />If a session started with a SIM in [Ready] state, it turns into [Active] automatically.<br />If a SIM is in [Inactive] state, it is unable to create a new session using the SIM.`,
          ja:
            `SIM の状態です。<br />[準備完了] 状態の SIM でセッションを開始すると自動的に [使用中] 状態になります。<br />[休止中] 状態の SIM ではセッションを開始することができません。`,
        },
      },
      termination_protection: {
        description: {
          en:
            `Termination Protection<br />Shows whether the SIMs are protected from unintentional termination.<br />Lock icon indicates the SIM is protected (cannot be terminated).<br />To unlock the protection, go to [Actions] > [Change termination protection] then turn the protection switch to 'Off'.`,
          ja:
            `Termination Protection (解約プロテクション)<br />誤って SIM の契約を解約 (Terminate) してしまわないように保護しているかどうかを示します。<br />錠のマークが見えていれば保護されています（解約できません）。<br />保護を解除するには [操作] メニューで [解約プロテクション変更] を選択し、スイッチを OFF に変更します。`,
        },
      },
    },
    module_type: {
      embedded: { en: `Embedded (MFF2)`, ja: `Embedded (MFF2)` },
      integrated: { en: `Embedded (iSIM)`, ja: `Embedded (iSIM)` },
      micro: { en: `Micro-SIM (3FF)`, ja: `マイクロ` },
      mini: { en: `Mini-SIM (2FF)`, ja: `標準` },
      nano: { en: `Nano-SIM (4FF)`, ja: `ナノ` },
      trio: { en: `Universal 3-in-1`, ja: `3 in 1` },
      profilePackage: { en: `profilePackage`, ja: `profilePackage` },
      unknown: {
        en: '',
        ja: '',
      },
    },
    newUiIntroModal: {
      subtitle: { en: `You are now using the latest version of the SIM Management page.`,
        ja: `使いやすく、高速で、チーム利用に適しています` },
      text1: {
        en:
          `To learn about the discontinuation of the old SIM Management page, please refer to the <a href="https://changelog.example.com/discontinuation-of-the-old-sim-management-interface-3Pn3R6" target="_blank">Changelog&nbsp;<i class="ds-icon --icon-external-link --tiny"></i></a>.`,
        ja:
          `最新バージョンの SIM 管理画面を使用しています。従来の SIM 管理画面はまもなく廃止される予定です。詳しくは <a href="https://changelog.example.com/ja/cong-lai-no-sim-guan-li-hua-mian-wofei-zhi-simasu-3Pn3R6" target="_balnk">QUORACOMM サービス更新情報</a>を参照してください。`,
      },
      title: { en: `Introducing the new & improved SIM Management page`, ja: `新しい SIM 管理画面を使用しています` },
    },
    operator_id: { en: `Operator ID`, ja: `オペレーター ID` },
    pager: {
      next: { en: `Next`, ja: `次へ` },
      previous: { en: `Previous`, ja: `前へ` },
    },
    register: { en: `Register SIM`, ja: `SIM 登録` },
    reserved_tag_names: {
      group: { en: `Group`, ja: `グループ` },
      name: { en: `Name`, ja: `名前` },
    },
    search: { en: `Search SIMs`, ja: `SIM を検索` },
    search_category: {
      any: { en: `Any`, ja: `すべて` },
      group: { en: `Group`, ja: `グループ` },
      iccid: { en: `ICCID`, ja: `ICCID` },
      imsi: { en: `IMSI`, ja: `IMSI` },
      msisdn: { en: `MSISDN`, ja: `MSISDN` },
      name: { en: `Name`, ja: `名前` },
      offline_only: { en: `Offline only`, ja: `オフラインのみ` },
      online_only: { en: `Online only`, ja: `オンラインのみ` },
      serial_number: { en: `Serial Number`, ja: `製造番号` },
      sim_id: { en: `SIM ID`, ja: `SIM ID` },
      tag: { en: `Tag`, ja: `タグ` },
    },
    search_placeholder: {
      any: { en: `Search by any attribute`, ja: `検索可能なすべての属性で検索` },
      group: { en: `Search by Group`, ja: `グループで検索` },
      iccid: { en: `Search by ICCID`, ja: `ICCID で検索` },
      imsi: { en: `Search by IMSI`, ja: `IMSI で検索` },
      msisdn: { en: `Search by MSISDN`, ja: `MSISDN で検索` },
      name: { en: `Search by Name`, ja: `名前で検索` },
      serial_number: { en: `Serial Number`, ja: `製造番号で検索` },
      sim_id: { en: `Search by SIM ID`, ja: `SIM IDで検索` },
      tag: { en: `Search by tag value`, ja: `タグの値で検索` },
    },
    speed_classes_incompatible_modal: {
      body: {
        en:
          `These SIMs cannot be set to the same speed class, because they have different plan types, and are not compatible with the same set of speed classes. Please select a group of SIMs with the same plan type, and try again.`,
        ja: `プランによって利用できるスピードクラスが異なるため、同じプランのSIMのみを選択して再実行してください。`,
      },
      confirm: { en: `OK`, ja: `OK` },
      title: { en: `Selected SIMs have different plan types`, ja: `プランの異なるSIMが選択されています` },
    },
    status: {
      active: { en: `Active`, ja: `使用中` },
      inactive: { en: `Inactive`, ja: `休止中` },
      ready: { en: `Ready`, ja: `準備完了` },
      shipped: { en: `Shipped`, ja: `出荷済み` },
      standby: { en: `Standby`, ja: `利用開始待ち` },
      suspended: { en: `Suspended`, ja: `利用中断中` },
      terminated: { en: `Terminated`, ja: `解約済み` },
      transferring: { en: `Transferring`, ja: `譲渡手続き中` },
    },
    subscribersFeedback: {
      text1: { en: `You are currently viewing the old (legacy) version of the SIM Management page.`,
        ja: `現在、SIM 管理ページの旧バージョン（従来のバージョン）を表示しています。` },
      text2: {
        en:
          `We would appreciate understanding your reasons for preferring this version. Please reach out to <a href="https://support.example.com/hc/en-us/requests/new" target="_blank">Quoracomm&nbsp;Support&nbsp;<i class="ds-icon --icon-external-link --tiny"></i></a> or share your feedback by completing the <a href="https://docs.example.com/forms/d/e/1FAIpQLSe2NYksEHSEcI-lET0n3WCrljel4QYhVghhsxNu7GTPldgPAw/viewform" target="_blank">feedback form&nbsp;<i class="ds-icon --icon-external-link --tiny"></i></a>.`,
        ja:
          `従来の SIM 管理画面の提供は、近日中に終了予定です。従来の画面を利用したい理由があれば、<a href="https://docs.example.com/forms/d/e/1FAIpQLSd5_6IQBWK9E9Q4aKMyntrO7GTWuojuigROd3sXj1oSd1rnHg/viewform" target="_blank">このフォーム</a>からお知らせください。新しい SIM 管理画面への移行にサポートが必要な場合は、<a href="https://support.example.com/hc/ja/requests/new" target="_blank">お問い合わせ</a> ください。`,
      },
      title: { en: `Legacy SIM Management page feedback`, ja: `従来の SIM 管理画面へのフィードバック` },
    },
  },
};
