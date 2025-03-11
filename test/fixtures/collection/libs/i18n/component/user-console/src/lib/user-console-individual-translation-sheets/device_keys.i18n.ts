export const translations = {
    'device_keys': {
        'actions': {
            'activate': { en: `Activate`, ja: `有効化` },
            'create': { en: `Create`, ja: `追加` },
            'deactivate': { en: `Deactivate`, ja: `無効化` },
            'delete': { en: `Delete`, ja: `削除` }
        },
        'columns': {
            'actions': { en: `Actions`, ja: `操作` },
            'created_time': { en: `Created`, ja: `生成日時` },
            'id': { en: `ID`, ja: `ID` },
            'key_id': { en: `Device key ID`, ja: `デバイスキーID` },
            'secret_key': { en: `Secret Key`, ja: `シークレットキー` },
            'status': { en: `Status`, ja: `ステータス` }
        },
        'confirmation': {
            'activate': {
                'body': { en: `If the API key is activated, you can send data using this API key. Are you sure you want to proceed?`, ja: `キーを有効にすると、このキーを使ってデータプラットフォームにデータを送ることができるようになります。有効にしてよろしいですか？` },
                'cancel': { en: `Cancel`, ja: `キャンセル` },
                'confirm': { en: `Activate`, ja: `有効にする` },
                'title': { en: `Confirmation: Activate API key`, ja: `確認：キーの有効化` }
            },
            'deactivate': {
                'body': { en: `If the API key is deactivated, you can't send data by this API key. Are you sure you want to proceed?`, ja: `キーを無効にすると、このキーを使ってデータプラットフォームにデータを送ることができなくなります。無効にしてよろしいですか？` },
                'cancel': { en: `Cancel`, ja: `キャンセル` },
                'confirm': { en: `Deativate`, ja: `無効にする` },
                'title': { en: `Confirmation: Deactivate API key`, ja: `確認：キーの無効化` }
            }
        },
        'messages': {
            'activate_success': { en: `Device key is activated.`, ja: `デバイスキーを有効にしました` },
            'deactivate_success': { en: `Device key is deactivated.`, ja: `デバイスキーを無効にしました` },
            'delete_success': { en: `Device key is deleted.`, ja: `デバイスキーを削除しました` }
        },
        'modals': {
            'add_device_key': {
                'close': { en: `Close`, ja: `閉じる` },
                'copied': { en: `Successfully copied`, ja: `クリップボードにコピーしました` },
                'copy': { en: `Copy to clipboard`, ja: `クリップボードにコピー` },
                'copy_failed': { en: `Your web browser doesn't seem to support the copy function. Please manually copy the data.`, ja: `お使いのブラウザーではボタンクリックによるコピーができないようです。表示されている情報を手作業で選択して、メニューからコピーしてください。` },
                'device_id': { en: `Device ID`, ja: `デバイスID` },
                'message': { en: `An device key has been generated.`, ja: `デバイスキーを生成しました` },
                'message_important': { en: `IMPORTANT: This is the last time these security credentials will be available. Device Key Secret will not be shown again.`, ja: `重要: 以下の「シークレットキー」の情報は、このダイアログを閉じると再び表示させることはできませんので、安全な状態で記録・保管してください。` },
                'secret_key': { en: `Secret key`, ja: `シークレットキー` },
                'title': { en: `Generated device key`, ja: `デバイスキー作成` }
            }
        },
        'not_used': { en: `(Not used)`, ja: `(未使用)` },
        'values': {
            'status': {
                'active': { en: `Active`, ja: `有効` },
                'inactive': { en: `Inactive`, ja: `無効` }
            }
        }
    }
};
