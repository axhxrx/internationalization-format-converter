export const translations = {
    'button': {
        'actions_menu': {
            'title': { en: `Actions`, ja: `操作` }
        },
        'actions': {
            'change_name': { en: `Change name`, ja: `名前を変更する` },
            'change_termination_protection': { en: `Change termination protection`, ja: `解約プロテクション変更` },
            'edit_tag': { en: `Edit tags`, ja: `タグを編集` },
            'register': { en: `Register LTE-M Button`, ja: `デバイス登録` },
            'show_details': { en: `Show details`, ja: `詳細を表示` },
            'terminate': { en: `Terminate`, ja: `解約` }
        },
        'columns': {
            'clicks_remaining': { en: `Clicks remaining`, ja: `残りクリック回数` },
            'expire_date': { en: `Expire date`, ja: `有効期限` },
            'group': { en: `Group`, ja: `グループ` },
            'last_seen': { en: `Last seen`, ja: `最終受信日時` },
            'name': { en: `Name`, ja: `名前` },
            'product_id': { en: `Product ID`, ja: `プロダクト ID` },
            'serial_number': { en: `Serial number`, ja: `製造番号` },
            'status': { en: `Status`, ja: `状態` },
            'termination_protection': { en: `TP`, ja: `TP` },
            'type': { en: `Type`, ja: `タイプ` }
        },
        'context_menu': {
            'header': { en: `Actions for selected devices`, ja: `選択されたデバイスの操作` }
        },
        'legends': {
            'clicks_remaining': {
                'description': { en: `The remaining number of clicks the Button can process`, ja: `このボタンがクリックできる残り回数` }
            },
            'expire_date': {
                'description': { en: `Expiration date of the Button's current service period`, ja: `現在のご契約の有効期限(期限を超過した場合自動更新となります。)` }
            },
            'last_seen': {
                'description': { en: `Date the Button was last active`, ja: `最終データ送信時刻` }
            },
            'termination_protection': {
                'description': { en: `Termination Protection helps prevent a Button from being inadvertently terminated`, ja: `Termination Protection (解約プロテクション)<br />誤ってボタンの契約を解約 (Terminate) してしまわないように保護しているかどうかを示します。<br />錠のマークが見えていれば保護されています（解約できません）。<br />保護を解除するには [操作] メニューで [解約プロテクション変更] を選択し、スイッチを OFF に変更します。` }
            }
        },
        'message': {
            'registration_failure_message': { en: `Button could not be registered.`, ja: `ボタンを登録できませんでした。` },
            'registration_success_message': { en: `Button registered successfully.`, ja: `ボタンの登録に成功しました。` }
        },
        'modals': {
            'details': {
                'confirm': { en: `Done`, ja: `OK` },
                'title': { en: `Details for Button {{ serialNumber }}`, ja: `ボタンの詳細 {{ serialNumber }}` }
            },
            'register': {
                'cancel': { en: `Cancel`, ja: `キャンセル` },
                'name': { en: `Name`, ja: `名前` },
                'serial_number': { en: `Device serial number`, ja: `製造番号` },
                'serial_number_placeholder': { en: `The serial number of the Button, e.g. M45ONW45H3R3`, ja: `ボタンの製造番号 （例） M45ONW45H3R3` },
                'submit': { en: `Register`, ja: `登録` },
                'text': {
                    'en': "",
                    'ja': ""
                },
                'title': { en: `Register Button`, ja: `ボタン登録` }
            }
        },
        'model_name': { en: `LTE-M Button for AWS`, ja: `LTE-M Button for AWS` },
        'terminate_confirmation_message': { en: `After a Button is terminated, it can no longer be used.`, ja: `LTE-M Button for AWS を解約した場合、デバイスは使用できなくなります。解約後、再び使用することはできません。` }
    }
};
