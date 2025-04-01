export const translations = {
    'lora_network_set': {
        'add_permission': { en: `Add`, ja: `追加` },
        'allowed_operators': {
            'column': {
                'operator_id': { en: `Allowed Operator ID`, ja: `接続を許可しているオペレーター ID` }
            },
            'no_data': { en: `No allowed operator IDs`, ja: `オペレーター ID がありません` }
        },
        'columns': {
            'operator_id': { en: `Operator ID`, ja: `オペレーター ID` }
        },
        'delete': { en: `Delete LoRaWAN Network Set`, ja: `LoRaWAN ネットワークセットを削除` },
        'errors': {
            'duplicated_operator_id': { en: `Operator ID is duplicated.`, ja: `オペレーター ID が重複しています` },
            'invalid_operator_id': { en: `Invalid Operator ID`, ja: `オペレーター ID が不正です` }
        },
        'id': { en: `ID`, ja: `ID` },
        'modals': {
            'add_network_set': {
                'cancel': { en: `Cancel`, ja: `キャンセル` },
                'header': { en: `Create a new LoRaWAN network set`, ja: `LoRaWAN ネットワークセット作成` },
                'name': { en: `Name`, ja: `名前` },
                'required': { en: `required fields`, ja: `は必須項目です` },
                'submit': { en: `Create`, ja: `作成` }
            },
            'confirm_delete_ns': {
                'body': { en: `Delete LoRaWAN network set. It can't be deleted if it's refered by group or LoRaWAN gateway`, ja: `LoRaWAN ネットワークセットを削除します。Group や LoRaWAN ゲートウェイから利用されている場合は削除できません` },
                'cancel': { en: `Cancel`, ja: `キャンセル` },
                'confirm': { en: `Delete LoRaWAN network set`, ja: `削除する` },
                'title': { en: `Delete LoRaWAN network set`, ja: `LoRaWAN ネットワークセットの削除` }
            }
        },
        'name': { en: `Name`, ja: `名前` },
        'permissions': { en: `Permissions`, ja: `共有設定` },
        'revoke_permission': { en: `Revoke`, ja: `削除` },
        'tab': {
            'advanced_settings': { en: `Advanced settings`, ja: `高度な設定` },
            'basic_settings': { en: `Basic settings`, ja: `基本設定` },
            'lora_gateways': { en: `Gateways in this network set`, ja: `所属しているゲートウェイ` }
        },
        'tags': { en: `Tags`, ja: `タグ` }
    }
};
