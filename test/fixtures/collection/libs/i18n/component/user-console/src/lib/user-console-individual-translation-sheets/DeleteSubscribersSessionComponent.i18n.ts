export const translations = {
    'DeleteSubscribersSessionComponent': {
        'cancel': { en: `Cancel`, ja: `キャンセル` },
        'cautionaryText': {
            'single': { en: `Before performing the remote session disconnection operation, be sure to confirm that the device has a mechanism to reconnect. If there is no automatic reconnection mechanism, you will need to manually reconnect. This may require physical access to the device, and may therefore be unsuitable for devices in remote locations.`, ja: `遠隔でセッション切断の操作を行う場合、デバイス側にセッション再接続の仕組みがあることを事前に必ず確認してください。自動再接続の仕組みがない場合、手動で再接続をお願いいたします。遠隔地にデバイスがあるようなケースでは、自動再接続やリモートメンテナンスの仕組みがないと、現地でデバイスを操作いただく必要が出てくる可能性があります。` },
            'multiple': { en: `Before performing the remote session disconnection operation, be sure to confirm that all devices have a mechanism to reconnect. If there is no automatic reconnection mechanism, you will need to manually reconnect. This may require physical access to the devices, and may therefore be unsuitable for devices in remote locations.`, ja: `遠隔でセッション切断の操作を行う場合、デバイス側にセッション再接続の仕組みがあることを事前に必ず確認してください。自動再接続の仕組みがない場合、手動で再接続をお願いいたします。遠隔地にデバイスがあるようなケースでは、自動再接続やリモートメンテナンスの仕組みがないと、現地でデバイスを操作いただく必要が出てくる可能性があります。` }
        },
        'confirmButtonTitle': {
            'multiple': { en: `Delete Sessions`, ja: `セッション切断` },
            'single': { en: `Delete Session`, ja: `セッション切断` }
        },
        'errorMessage': {
            'allUpdatesFailed': { en: `The attempt to delete the sessions was not successful.`, ja: `セッションを切断できませんでした` },
            'singleUpdateFailed': { en: `The attempt to delete the SIM's session was not successful.`, ja: `セッションを切断できませんでした` },
            'someUpdatesFailed': { en: `Unable to delete the session for {{ failureCount }} of the {{ totalCount }} SIMs.`, ja: `{{ totalCount }} 個中 {{ failureCount }} 個の SIM のセッションを切断できませんでした` }
        },
        'explanatoryText': {
            'multiple': { en: `Any active sessions of the SIMs will be deleted.`, ja: `SIMのアクティブなセッションがあれば削除されます。` },
            'single': { en: `The active session of the SIM will be deleted.`, ja: `SIMのアクティブなセッションがあれば削除されます。` }
        },
        'heading': {
            'multiple': { en: `Delete sessions`, ja: `セッション切断` },
            'single': { en: `Delete session`, ja: `セッション切断` }
        },
        'imsi': { en: `IMSI`, ja: `IMSI` },
        'successMessage': {
            'single': { en: `Successfully deleted session`, ja: `セッションを切断しました` },
            'multiple': { en: `Successfully deleted {{ success }} of {{ all }} SIM sessions`, ja: `{{all}} 個中 {{success}} 個の SIM のセッションを切断しました` }
        }
    }
};
