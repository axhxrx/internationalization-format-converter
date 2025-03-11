export const translations = {
    'ChangeSubscribersImeiLockComponent': {
        'heading': {
            'multiple': { en: `IMEI lock`, ja: `IMEI ロック` },
            'single': { en: `IMEI lock`, ja: `IMEI ロック` }
        },
        'lock': {
            'errorMessage': { en: `Unable to enable IMEI lock for SIMs.`, ja: `IMEI ロックを設定できませんでした` },
            'successMessage': {
                'multiple': { en: `Successfully enabled IMEI lock for {{success}} of {{all}} SIMs.`, ja: `{{all}} 個中 {{success}} 個の SIM の IMEI をロックしました` },
                'single': { en: `Successfully enabled IMEI lock for the SIM`, ja: `IMEI ロックを設定しました` }
            }
        },
        'unlock': {
            'errorMessage': { en: `Unable to disable IMEI lock for SIMs.`, ja: `IMEI ロックを解除できませんでした` },
            'successMessage': {
                'multiple': { en: `Successfully disabled IMEI lock for {{success}} of {{all}} SIMs.`, ja: `{{all}} 個中 {{success}} 個の SIM の IMEI ロックを解除しました` },
                'single': { en: `Successfully disabled IMEI lock for the SIM`, ja: `IMEI ロックを解除しました` }
            }
        }
    }
};
