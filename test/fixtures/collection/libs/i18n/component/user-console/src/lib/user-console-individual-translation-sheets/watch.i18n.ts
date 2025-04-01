export const translations = {
    'watch': {
        'advance_setup': {
            'description': {
                'en': "to do advance setup of event",
                'ja': ""
            },
            'link_text': { en: `Click here`, ja: `新しい画面では、イベントハンドラーを詳細に設定できるようになりました。` }
        },
        'change_speed_class_action': {
            'title': { en: `Downgrade speed class`, ja: `通信速度を制限` }
        },
        'description': { en: `UTC timezone is only available for now. Stats will be updated every 5 minutes.`, ja: `UTCを基準に、5分間隔で集計・反映されます` },
        'ignore': {
            'checkbox': { en: `Ignore`, ja: `無効にする` },
            'description': { en: `Watch settings for group / operator can be ignored for this subscriber.`, ja: `グループ、全体に設定した監視設定をこのSIMに限り無効にすることができます` },
            'updated_successfully': { en: `Saved watch settings successfully`, ja: `更新しました` }
        },
        'labels': {
            'group_change_speed_class_action_cumulative_traffic_rule': { en: `If life time traffic of any SIM exceeds`, ja: `各SIMの使いはじめからの通信量がこの値を越えたら制限する` },
            'group_change_speed_class_action_cumulative_traffic_rule_ignored': { en: `Event is not exist for "Life time traffic of any SIM".`, ja: `各SIMの使いはじめからの通信量が {{value}} MiB を越えたら制限する` },
            'group_change_speed_class_action_cumulative_traffic_rule_not_exist': { en: `Event is not exist for "Life time traffic of any SIM".`, ja: `各SIMの使いはじめからの通信量に関する監視は設定されていません。` },
            'group_change_speed_class_action_daily_traffic_rule': { en: `If daily traffic of any SIM exceeds`, ja: `各SIMの日次通信量がこの値を越えたら制限する` },
            'group_change_speed_class_action_daily_traffic_rule_ignored': { en: `Event is not exist for "Daily traffic of any SIM".`, ja: `各SIMの日次通信量が {{value}} MiB を越えたら制限する` },
            'group_change_speed_class_action_daily_traffic_rule_not_exist': { en: `Event is not exist for "Daily traffic of any SIM".`, ja: `各SIMの日次通信量に関する監視は設定されていません。` },
            'group_change_speed_class_action_monthly_traffic_rule': { en: `If monthly traffic of any SIM exceeds`, ja: `各SIMの月次通信量がこの値を越えたら制限する` },
            'group_change_speed_class_action_monthly_traffic_rule_ignored': { en: `Event is not exist for "Monthly traffic of any SIM".`, ja: `各SIMの月次通信量が {{value}} MiB を越えたら制限する` },
            'group_change_speed_class_action_monthly_traffic_rule_not_exist': { en: `Event is not exist for "Monthly traffic of any SIM".`, ja: `各SIMの月次通信量に関する監視は設定されていません。` },
            'group_send_mail_to_operator_action_daily_traffic_rule': { en: `If daily traffic of any SIM exceeds`, ja: `各SIMの日次通信量がこの値を越えたら通知する` },
            'group_send_mail_to_operator_action_daily_traffic_rule_ignored': { en: `If daily traffic of any SIM exceeds {{value}} MiB`, ja: `各SIMの日次通信量が {{value}} MiB を越えたら通知する` },
            'group_send_mail_to_operator_action_daily_traffic_rule_not_exist': { en: `Event is not exist for "Daily traffic of any SIM".`, ja: `各SIMの日次通信量に関する監視は設定されていません。` },
            'group_send_mail_to_operator_action_monthly_traffic_rule': { en: `If monthly traffic of any SIM exceeds`, ja: `各SIMの月次通信量がこの値を越えたら通知する` },
            'group_send_mail_to_operator_action_monthly_traffic_rule_ignored': { en: `If monthly traffic of any SIM exceeds {{value}} MiB`, ja: `各SIMの月次通信量が {{value}} MiB を越えたら通知する` },
            'group_send_mail_to_operator_action_monthly_traffic_rule_not_exist': { en: `Event is not exist for "Monthly traffic of any SIM".`, ja: `各SIMの月次通信量に関する監視は設定されていません。` },
            'group_send_mail_to_operator_action_cumulative_traffic_rule': { en: `If life time traffic of any SIM exceeds`, ja: `各SIMの使いはじめからの通信量がこの値を越えたら通知する` },
            'group_send_mail_to_operator_action_cumulative_traffic_rule_ignored': { en: `If life time traffic of any SIM exceeds {{value}} MiB`, ja: `各SIMの使いはじめからの通信量が {{value}} MiB を越えたら通知する` },
            'group_send_mail_to_operator_action_cumulative_traffic_rule_not_exist': { en: `Event is not exist for "Life time traffic of any SIM".`, ja: `各SIMの使いはじめからの通信量に関する監視は設定されていません。` },
            'imsi_send_mail_to_operator_action_daily_traffic_rule': { en: `If daily traffic of the SIM exceeds`, ja: `日次通信量がこの値を越えたら通知する` },
            'imsi_send_mail_to_operator_action_monthly_traffic_rule': { en: `If monthly traffic of the SIM exceeds`, ja: `月次通信量がこの値を越えたら通知する` },
            'imsi_send_mail_to_operator_action_cumulative_traffic_rule': { en: `If life time traffic of the SIM exceeds`, ja: `使いはじめからの通信量がこの値を越えたら通知する` },
            'imsi_change_speed_class_action_daily_traffic_rule': { en: `If daily traffic of the SIM exceeds`, ja: `日次通信量がこの値を越えたら制限する` },
            'imsi_change_speed_class_action_monthly_traffic_rule': { en: `If monthly traffic of the SIM exceeds`, ja: `月次通信量がこの値を越えたら制限する` },
            'imsi_change_speed_class_action_cumulative_traffic_rule': { en: `If life time traffic of the SIM exceeds`, ja: `使いはじめからの通信量がこの値を越えたら制限する` },
            'operator_change_speed_class_action_cumulative_traffic_rule': { en: `If life time traffic of any SIM exceeds`, ja: `各SIMの使いはじめからの通信量がこの値を越えたら制限する` },
            'operator_change_speed_class_action_cumulative_traffic_rule_ignored': { en: `Event is not exist for "Life time traffic of any SIM".`, ja: `各SIMの使いはじめからの通信量が {{value}} MiB を越えたら制限する` },
            'operator_change_speed_class_action_cumulative_traffic_rule_not_exist': { en: `Event is not exist for "Life time traffic of any SIM".`, ja: `各SIMの使いはじめからの通信量に関する監視は設定されていません。` },
            'operator_change_speed_class_action_daily_traffic_rule': { en: `If daily traffic of any SIM exceeds`, ja: `各SIMの日次通信量がこの値を越えたら制限する` },
            'operator_change_speed_class_action_daily_traffic_rule_ignored': { en: `Event is not exist for "Daily traffic of any SIM".`, ja: `各SIMの日次通信量が {{value}} MiB を越えたら制限する` },
            'operator_change_speed_class_action_daily_traffic_rule_not_exist': { en: `Event is not exist for "Daily traffic of any SIM".`, ja: `各SIMの日次通信量に関する監視は設定されていません。` },
            'operator_change_speed_class_action_monthly_total_traffic_rule': { en: `If total monthly traffic of your SIMs exceeds`, ja: `全てのSIMの月次通信量の合計がこの値を越えたら制限する` },
            'operator_change_speed_class_action_monthly_total_traffic_rule_ignored': { en: `If total monthly traffic of your SIMs exceeds {{value}} MiB`, ja: `全てのSIMの月次通信量の合計が {{value}} MiB を越えたら制限する` },
            'operator_change_speed_class_action_monthly_total_traffic_rule_not_exist': { en: `Event is not exist for "Total monthly traffic of your SIMs".`, ja: `全てのSIMの月次通信量の合計に関する監視は設定されていません。` },
            'operator_change_speed_class_action_monthly_traffic_rule': { en: `If monthly traffic of any SIM exceeds`, ja: `各SIMの月次通信量がこの値を越えたら制限する` },
            'operator_change_speed_class_action_monthly_traffic_rule_ignored': { en: `Event is not exist for "Monthly traffic of any SIM".`, ja: `各SIMの月次通信量が {{value}} MiB を越えたら制限する` },
            'operator_change_speed_class_action_monthly_traffic_rule_not_exist': { en: `Event is not exist for "Monthly traffic of any SIM".`, ja: `各SIMの月次通信量に関する監視は設定されていません。` },
            'operator_send_mail_to_operator_action_cumulative_traffic_rule': { en: `If life time traffic of any SIM exceeds`, ja: `各SIMの使いはじめからの通信量がこの値を越えたら通知する` },
            'operator_send_mail_to_operator_action_cumulative_traffic_rule_ignored': { en: `If life time traffic of any SIM exceeds {{value}} MiB`, ja: `各SIMの使いはじめからの通信量が {{value}} MiB を越えたら通知する` },
            'operator_send_mail_to_operator_action_cumulative_traffic_rule_not_exist': { en: `Event is not exist for "Life time traffic of any SIM".`, ja: `各SIMの使いはじめからの通信量に関する監視は設定されていません。` },
            'operator_send_mail_to_operator_action_daily_traffic_rule': { en: `If daily traffic of any SIM exceeds`, ja: `各SIMの日次通信量がこの値を越えたら通知する` },
            'operator_send_mail_to_operator_action_daily_traffic_rule_ignored': { en: `If daily traffic of any SIM exceeds {{value}} MiB`, ja: `各SIMの日次通信量が {{value}} MiB を越えたら通知する` },
            'operator_send_mail_to_operator_action_daily_traffic_rule_not_exist': { en: `Event is not exist for "Daily traffic of any SIM".`, ja: `各SIMの日次通信量に関する監視は設定されていません。` },
            'operator_send_mail_to_operator_action_monthly_total_traffic_rule': { en: `If total monthly traffic of your SIMs exceeds`, ja: `全てのSIMの月次通信量の合計がこの値を越えたら通知する` },
            'operator_send_mail_to_operator_action_monthly_total_traffic_rule_ignored': { en: `If total monthly traffic of your SIMs exceeds {{value}} MiB`, ja: `全てのSIMの月次通信量の合計が {{value}} MiB を越えたら通知する` },
            'operator_send_mail_to_operator_action_monthly_total_traffic_rule_not_exist': { en: `Event is not exist for "Total monthly traffic of your SIMs".`, ja: `全てのSIMの月次通信量の合計に関する監視は設定されていません。` },
            'operator_send_mail_to_operator_action_monthly_traffic_rule': { en: `If monthly traffic of any SIM exceeds`, ja: `各SIMの月次通信量がこの値を越えたら通知する` },
            'operator_send_mail_to_operator_action_monthly_traffic_rule_ignored': { en: `If monthly traffic of any SIM exceeds {{value}} MiB`, ja: `各SIMの月次通信量が {{value}} MiB を越えたら通知する` },
            'operator_send_mail_to_operator_action_monthly_traffic_rule_not_exist': { en: `Event is not exist for "Monthly traffic of any SIM".`, ja: `各SIMの月次通信量に関する監視は設定されていません。` }
        },
        'operator': {
            'link_to_sim': { en: `<a href="/watch/subscribers">Set up watch settings for SIM</a>`, ja: `<a href="/watch/subscribers">SIM ごとに設定する</a>` },
            'title': { en: `Watch`, ja: `監視設定` }
        },
        'send_mail_to_operator_action': {
            'title': { en: `Send an email`, ja: `メールで通知` }
        },
        'subscriber': {
            'imsi': { en: `IMSI`, ja: `IMSI` },
            'load_button': { en: `Load Event Handlers`, ja: `監視設定を読み込む` },
            'no_group': { en: `No group assigned`, ja: `この SIM はグループに所属していません` },
            'resolved_group_id': { en: `Group ID of the subscriber (readonly)`, ja: `SIM の所属するグループ ID (読み取り専用)` },
            'tabs': {
                'group': { en: `Group`, ja: `SIM グループ` },
                'imsi': { en: `Subscriber`, ja: `SIM` },
                'operator': { en: `All SIMs`, ja: `すべての SIM 共通` }
            },
            'title': { en: `Watch (SIM)`, ja: `監視設定 (SIM)` }
        },
        'target': {
            'imsi': { en: `SIM`, ja: `SIM` },
            'operator': { en: `All SIMs`, ja: `全てのSIM` },
            'tag': { en: `Tags`, ja: `タグ` }
        },
        'title': { en: `Watch`, ja: `監視設定` },
        'update_button': { en: `Apply`, ja: `設定を更新` }
    }
};
