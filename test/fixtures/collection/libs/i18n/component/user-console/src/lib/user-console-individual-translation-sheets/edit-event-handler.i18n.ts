export const translations = {
    'editEvent': {
        'title': { en: `Edit Event`, ja: `イベント編集` },
        'label': {
            'eventName': { en: `Name`, ja: `イベント名` },
            'description': { en: `Description`, ja: `概要` },
            'isActive': { en: `Active`, ja: `有効` },
            'offsetTime': { en: `Offset (minutes)`, ja: `オフセット(分)` },
            'hasImei': { en: `Has IMEI`, ja: `IMEI有り` },
            'isRunOnceAmongTarget': { en: `Do not execute again until next re-evaluation`, ja: `再評価を行うタイミングまで再実行しない` }
        },
        'sectionTitle': {
            'target': { en: `Target`, ja: `監視対象` },
            'rule': { en: `Rule`, ja: `ルール` },
            'action': { en: `Action`, ja: `アクション` }
        },
        'button': {
            'addAction': { en: `Add action`, ja: `アクション追加` },
            'updateEvent': { en: `Update`, ja: `保存` },
            'createEvent': { en: `Create`, ja: `保存` },
            'cancel': { en: `Cancel`, ja: `キャンセル` },
            'delete': { en: `Delete`, ja: `削除` }
        },
        'eventTarget': {
            'targetImsi': { en: `Subscriber`, ja: `サブスクライバー` },
            'targetGroupId': { en: `Group`, ja: `グループ` },
            'targetSimId': { en: `SIM`, ja: `SIM` },
            'targetOperatorId': { en: `Operator`, ja: `オペレーター` }
        },
        'eventRule': {
            'DailyTrafficRule': { en: `Daily traffic`, ja: `SIM の日次通信量が一定を超えたら実行` },
            'MonthlyTrafficRule': { en: `Monthly traffic`, ja: `SIM の月次通信量が一定を超えたら実行` },
            'CumulativeTrafficRule': { en: `Cumulative traffic`, ja: `SIM の利用開始からの累積データ通信量が一定を超えたら実行` },
            'SessionStatusRule': { en: `Session status`, ja: `SIM のセッションステータスが変更されたら実行` },
            'SubscriberFirstTrafficRule': { en: `Subscriber first traffic`, ja: `サブスクライバーのデータ通信量が初めて記録されたら実行` },
            'SubscriberDailyTrafficRule': { en: `Subscriber Daily traffic`, ja: `サブスクライバーの日次データ通信量が一定を超えたら実行` },
            'SubscriberMonthlyTrafficRule': { en: `Subscriber Monthly traffic`, ja: `サブスクライバーの月次データ通信量が一定を超えたら実行` },
            'SubscriberCumulativeTrafficRule': { en: `Subscriber Cumulative traffic`, ja: `サブスクライバーの利用開始からの累積データ通信量が一定を超えたら実行` },
            'SubscriberStatusAttributeRule': { en: `Subscriber status attribute`, ja: `サブスクライバーのステータスが変更されたら実行` },
            'SubscriberSpeedClassAttributeRule': { en: `Subscriber speed class attribute`, ja: `サブスクライバーの速度クラスが変更されたら実行` },
            'SubscriberExpiredRule': { en: `Subscriber expired`, ja: `サブスクライバーの有効期限が切れたら実行` },
            'SubscriberSessionStatusRule': { en: `Subscriber session status`, ja: `サブスクライバーのセッションステータスが変更されたら実行` },
            'SubscriberImeiMismatchedRule': { en: `Subscriber IMEI mismatched`, ja: `サブスクライバーが IMEI ロックにより接続失敗したら実行` },
            'SimDailyTotalTrafficRule': { en: `SIM Daily total traffic`, ja: `SIM に紐づく全サブスクライバーの日次データ通信量合計が一定を超えたら実行` },
            'SimMonthlyTotalTrafficRule': { en: `SIM Monthly total traffic`, ja: `SIM に紐づく全サブスクライバーの月次データ通信量合計が一定を超えたら実行` },
            'SimCumulativeTotalTrafficRule': { en: `SIM Cumulative total traffic`, ja: `SIM に紐づく全サブスクライバーの利用開始からの累積データ通信量合計が一定を超えたら実行` },
            'SimStatusAttributeRule': { en: `SIM status attribute`, ja: `SIM のステータスが変更されたら実行` },
            'SimSpeedClassAttributeRule': { en: `SIM speed class attribute`, ja: `SIM の速度クラスが変更されたら実行` },
            'SimSubscriptionStatusRule': { en: `SIM subscription status`, ja: `SIM にサブスクリプションが追加されたら実行` },
            'SimExpiredRule': { en: `SIM expired`, ja: `SIM の有効期限が切れたら実行` },
            'SimSessionStatusRule': { en: `SIM session status`, ja: `SIM のセッションステータスが変更されたら実行` },
            'SimImeiMismatchedRule': { en: `SIM IMEI mismatched`, ja: `SIM が IMEI ロックにより接続失敗したら実行` },
            'DailyTotalTrafficRule': { en: `Daily total traffic`, ja: `監視対象に紐づく全 SIM の日次データ通信量合計が一定を超えたら実行` },
            'MonthlyTotalTrafficRule': { en: `Monthly total traffic`, ja: `監視対象に紐づく全 SIM の月次データ通信量合計が一定を超えたら実行` },
            'DeviceRegisteredRule': { en: `Device registered`, ja: `デバイスが登録されたら実行` },
            'MonthlyChargeRule': { en: `Monthly bill amount`, ja: `今月の利用料金が設定金額を超えたら実行` }
        },
        'eventRuleReEvaluate': {
            'IMMEDIATELY': { en: `Immediately`, ja: `すぐに再評価` },
            'BEGINNING_OF_NEXT_MONTH': { en: `Beginning of next month`, ja: `翌月初` },
            'BEGINNING_OF_NEXT_DAY': { en: `Beginning of next day`, ja: `翌日開始時` },
            'AFTER_ONE_DAY': { en: `After one day`, ja: `1日後` },
            'NEVER': { en: `Never`, ja: `再評価を行わない` },
            'label': { en: `RE-EVALUATE`, ja: `再評価を行うタイミング` }
        },
        'ruleTrafficInputSuffix': { en: `MiB`, ja: `MiB` },
        'ruleChargeAmountInputLabel': { en: `Threshold`, ja: `設定金額` },
        'subscriberStatusAttribute': {
            'ruleValue': {
                'null': { en: `Any`, ja: `すべて` },
                'ready': { en: `Ready`, ja: `準備完了` },
                'active': { en: `Active`, ja: `使用中` },
                'inactive': { en: `Inactive`, ja: `休止中` },
                'standby': { en: `Standby`, ja: `利用開始待ち` },
                'suspended': { en: `Suspended`, ja: `利用中断中` },
                'terminated': { en: `Terminated`, ja: `解約済み` }
            },
            'sourceStatusLabel': { en: `Source status`, ja: `変更前` },
            'targetStatusLabel': { en: `Target status`, ja: `変更後` },
            'statusShouldNotBeSame': { en: `Source status and Target status should not be same`, ja: `Source status and Target status should not be same` },
            'sourceStatus': {
                'null': { en: `Any`, ja: `すべて` },
                'ready': { en: `Ready`, ja: `準備完了` },
                'active': { en: `Active`, ja: `使用中` },
                'inactive': { en: `Inactive`, ja: `休止中` },
                'standby': { en: `Standby`, ja: `利用開始待ち` },
                'suspended': { en: `Suspended`, ja: `利用中断中` }
            }
        },
        'subscriberSpeedClassAttribute': {
            'ruleValue': {
                'null': { en: `Any`, ja: `すべて` },
                's1': {
                    'minimum': { en: `s1.minimum`, ja: `s1.minimum` },
                    'slow': { en: `s1.slow`, ja: `s1.slow` },
                    'standard': { en: `s1.standard`, ja: `s1.standard` },
                    'fast': { en: `s1.fast`, ja: `s1.fast` },
                    '4xfast': { en: `s1.4xfast`, ja: `s1.4xfast` },
                    '8xfast': { en: `s1.8xfast`, ja: `s1.8xfast` }
                },
                'xm': {
                    'minimum': { en: `xm.minimum`, ja: `xm.minimum` },
                    'slow': { en: `xm.slow`, ja: `xm.slow` },
                    'standard': { en: `xm.standard`, ja: `xm.standard` },
                    'fast': { en: `xm.fast`, ja: `xm.fast` },
                    '4xfast': { en: `xm.4xfast`, ja: `xm.4xfast` }
                }
            }
        },
        'sessionStatus': {
            'ruleValue': {
                'null': { en: `Any`, ja: `すべて` },
                'Created': { en: `Created`, ja: `Created` },
                'Deleted': { en: `Deleted`, ja: `Deleted` }
            }
        },
        'simSubscriptionStatus': {
            'ruleValue': {
                'null': { en: `Not set`, ja: `未設定` },
                'started': { en: `Started`, ja: `開始` },
                'finished': { en: `Finished`, ja: `成功` },
                'failed': { en: `Failed`, ja: `失敗` }
            }
        },
        'message': {
            'commonError': { en: `There was some error occurred in API`, ja: `反映時にエラーが発生しました` },
            'createSuccess': { en: `Event was created successfully`, ja: `イベントは正常に作成されました` },
            'updateSuccess': { en: `Event was updated successfully`, ja: `イベントは正常に更新されました` },
            'deleteSuccess': { en: `Event was deleted successfully. Will be moved to event list screen`, ja: `イベントは正常に削除されました。まもなくイベント一覧に移動します。` },
            'actionRequired': { en: `At least one action is required. Please add action`, ja: `少なくとも１つのアクションを設定してください。` }
        },
        'inpuValidationMessage': {
            'eventName': {
                'required': { en: `Event name is required`, ja: `イベント名は必須です` }
            },
            'targetValue': {
                'targetImsi': {
                    'required': { en: `Target IMSI is required`, ja: `監視対象の IMSI は必須です` },
                    'pattern': { en: `Only numbers are allowed`, ja: `数字のみ入力できます` },
                    'maxlength': { en: `Target IMSI should not exceed 15 digits`, ja: `監視対象の IMSI は15桁を超えてはいけません` },
                    'minlength': { en: `Target IMSI must be of 15 digits`, ja: `監視対象の IMSI は15桁である必要があります` }
                },
                'targetGroupId': {
                    'required': { en: `Target Group ID is required`, ja: `監視対象の グループ ID は必須です` }
                },
                'targetOperatorId': {
                    'required': { en: `Target Operator ID is required`, ja: `監視対象の オペレーター ID は必須です` }
                },
                'targetSimId': {
                    'required': { en: `Target SIM ID is required`, ja: `監視対象の SIM ID は必須です` },
                    'pattern': { en: `Only numbers are allowed`, ja: `数字のみ入力できます` }
                }
            },
            'eventRuleTrafficInput': {
                'required': { en: `This field is required`, ja: `入力が必須です` },
                'pattern': { en: `Only numbers are allowed`, ja: `数字のみ入力できます` }
            },
            'eventRuleChargeAmountInput': {
                'required': { en: `This field is required`, ja: `入力が必須です` },
                'pattern': { en: `Only numbers are allowed`, ja: `数字のみ入力できます` }
            }
        },
        'deleteConfirmDialog': {
            'title': { en: `Confirm`, ja: `削除確認` },
            'body': { en: `Are you sure you want to delete this event ?`, ja: `イベントを削除してもよろしいでしょうか？` },
            'cancel': { en: `Cancel`, ja: `キャンセル` },
            'confirm': { en: `Delete`, ja: `削除する` }
        }
    }
};
