export const translations = {
    'VpgAllowedOperatorsComponent': {
        'title': { en: `Sharing VPG with other Operators`, ja: `VPG の共有` },
        'description': { en: `Input operator ID to share this VPG with`, ja: `VPG を共有するオペレーターを指定してください` },
        'labels': {
            'allowedOperatorId': { en: `Operator ID to share this VPG with`, ja: `VPG を共有するオペレーター ID` }
        },
        'actions': {
            'add': { en: `Add an operator`, ja: `オペレーターを追加` },
            'delete': { en: `Delete an operator`, ja: `オペレーターを削除` }
        },
        'table': {
            'noData': { en: `Not set`, ja: `設定されていません` }
        },
        'errors': {
            'operatorId': { en: `Invalid format for operator ID.`, ja: `オペレーターIDが正しくありません` },
            'duplicated': { en: `Operator ID is already set.`, ja: `オペレーターIDが重複しています` },
            'required': { en: `Operator ID is required.`, ja: `オペレーターIDは必須です` }
        },
        'added': { en: `Operator ID added successfully.`, ja: `オペレーターIDが追加されました。` },
        'removed': { en: `Operator ID removed successfully.`, ja: `オペレーターIDが削除されました。` },
        'modals': {
            'confirmOperatorIdDeletion': {
                'title': { en: `Remove operator ID`, ja: `オペレーターの削除` },
                'body': { en: `After the operator ID is removed, Subscribers registered to the operator won't be able to access this VPG.`, ja: `オペレーターをリストから削除すると、このオペレーターの SIM はこの VPG にアクセスできなくなります。` },
                'cancel': { en: `Cancel`, ja: `キャンセル` },
                'confirm': { en: `Remove`, ja: `削除する` }
            }
        }
    }
};
