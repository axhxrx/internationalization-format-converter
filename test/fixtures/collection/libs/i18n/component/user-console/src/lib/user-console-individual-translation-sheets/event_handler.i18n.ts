export const translations = {
    'event_handler': {
        'action_config': {
            'add_button': { en: `Add`, ja: `アクションの追加` },
            'change_speed_class_action': { en: `Change speed class`, ja: `速度クラスを変更` },
            'csca': {
                'execution_date_time_const': { en: `When execute action`, ja: `実行タイミング` },
                'speed_class': { en: `Change speed class to:`, ja: `変更後のSIMタイプ` },
                'speed_class_options': {
                    'h1': {
                        '2xlarge': { en: `2xlarge - 72Mbps`, ja: `2xlarge - 72Mbps` },
                        'large': { en: `large - 6Mbps`, ja: `large - 6Mbps` },
                        'medium': { en: `medium - 1.5Mbps`, ja: `medium - 1.5Mbps` },
                        'small': { en: `small - 256kbps`, ja: `small - 256kbps` },
                        'xlarge': { en: `xlarge - 12Mbps`, ja: `xlarge - 12Mbps` }
                    },
                    's1': {
                        'large': { en: `large - 1Mbps`, ja: `large - 1Mbps` },
                        'medium': { en: `medium - 384kbps`, ja: `medium - 384kbps` },
                        'small': { en: `small - 64kbps`, ja: `small - 64kbps` }
                    }
                }
            },
            'execution_date_time_const': { en: `When execute action`, ja: `実行タイミング` },
            'execution_date_time_const_options': {
                'after_one_day': { en: `After one day`, ja: `1日後` },
                'beginning_of_next_day': { en: `Beginning of next day`, ja: `翌日開始時` },
                'beginning_of_next_month': { en: `Beginning of next month`, ja: `翌月初` },
                'blank': { en: `----- Please select -----`, ja: `----- 選択してください -----` },
                'immediately': { en: `Immediately`, ja: `今すぐ` }
            },
            'iaa': {
                'access_key': { en: `Access key`, ja: `AWSアクセスキー` },
                'endpoint': { en: `Endpoint`, ja: `エンドポイント` },
                'execution_date_time_const': { en: `When execute action`, ja: `実行タイミング` },
                'function_name': { en: `Function name`, ja: `ファンクション名` },
                'parameter1': { en: `Parameter 1`, ja: `パラメータ 1` },
                'parameter2': { en: `Parameter 2`, ja: `パラメータ 2` },
                'parameter3': { en: `Parameter 3`, ja: `パラメータ 3` },
                'secret_access_key': { en: `Secret access key`, ja: `AWSシークレットキー` }
            },
            'invoke_awslambda_action': { en: `Invoke AWS lambda`, ja: `AWS lambdaを実行` },
            'new': {
                'cancel_button': { en: `Cancel`, ja: `キャンセル` },
                'save_button': { en: `Save`, ja: `保存` },
                'title': { en: `Add a new action`, ja: `アクションの追加` }
            },
            'send_mail_action': { en: `Send an email`, ja: `メールを送信` },
            'sma': {
                'execution_date_time_const': { en: `When execute action`, ja: `実行タイミング` },
                'from': { en: `From email address`, ja: `送信元アドレス` },
                'message': { en: `Message`, ja: `本文` },
                'title': { en: `Subject`, ja: `タイトル` },
                'to': { en: `To email address`, ja: `宛先アドレス` }
            },
            'summary': { en: `Summary`, ja: `概要` },
            'title': { en: `Actions`, ja: `アクションの設定` },
            'type': { en: `Type`, ja: `アクション種類` },
            'type_options': {
                'blank': { en: `----- Please select -----`, ja: `----- 選択してください -----` }
            }
        },
        'blank_option': { en: `----- Please select -----`, ja: `----- 選択してください -----` },
        'close_button': { en: `Close`, ja: `閉じる` },
        'delete_button': { en: `Delete`, ja: `削除` },
        'description': { en: `Description`, ja: `概要` },
        'edit_button': { en: `Edit`, ja: `編集` },
        'name': { en: `Name`, ja: `イベントハンドラ名` },
        'rule_config': {
            'blank': { en: `----- Please select -----`, ja: `----- 選択してください -----` },
            'daily_traffic_rule': { en: `Daily traffic`, ja: `日単位の上限` },
            'inactive_timeout_data_const': { en: `Inactive timeout`, ja: `次にチェックするのは` },
            'inactive_timeout_data_const_options': {
                'after_one_day': { en: `After one day`, ja: `1日後` },
                'beginning_of_next_day': { en: `Beginning of next day`, ja: `翌日開始時` },
                'beginning_of_next_month': { en: `Beginning of next month`, ja: `翌月初` },
                'blank': { en: `----- Please select -----`, ja: `----- 選択してください -----` },
                'immediately': { en: `Immediately`, ja: `今すぐ` }
            },
            'limit_total_traffic_mega_byte': { en: `Limit total traffic (MegaByte)`, ja: `転送量制限` },
            'monthly_traffic_rule': { en: `Monthly traffic`, ja: `月単位の上限` },
            'title': { en: `Rule`, ja: `ルール` },
            'type': { en: `Type`, ja: `種類` }
        },
        'target': {
            'blank': { en: `----- Please select -----`, ja: `----- 選択してください -----` },
            'imsi': { en: `IMSI`, ja: `IMSI` },
            'operator': { en: `All SIMs you have`, ja: `すべてのSIM` },
            'operator_id': { en: `Operator Id`, ja: `オペレーター ID` },
            'tag': { en: `Tag`, ja: `タグ` },
            'tag_key': { en: `Tag name`, ja: `タグの名前` },
            'tag_value': { en: `Tag value`, ja: `タグの値` },
            'title': { en: `Target`, ja: `対象のSIM` },
            'type': { en: `Type`, ja: `指定方法` }
        }
    }
};
