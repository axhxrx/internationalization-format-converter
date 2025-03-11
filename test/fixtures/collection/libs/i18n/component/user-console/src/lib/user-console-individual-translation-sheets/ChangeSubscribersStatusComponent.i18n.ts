export const translations = {
    'ChangeSubscribersStatusComponent': {
        'status': { en: `Status`, ja: `ステータス` },
        'Suspend': { en: `Suspend`, ja: `利用中断` },
        'Terminate': { en: `Terminate`, ja: `解約` },
        'heading': {
            'single': {
                'active': { en: `Activate SIM`, ja: `SIM を使用開始する` },
                'inactive': { en: `Deactivate SIM`, ja: `SIM を休止する` },
                'standby': { en: `Set SIM to Standby`, ja: `SIM を利用開始待ちに変更する` },
                'suspended': { en: `Suspend SIM`, ja: `SIM を利用中断する` },
                'terminated': { en: `Terminate SIM`, ja: `SIM を解約する` },
                'transferring': { en: `Transfer SIM to another operator`, ja: `SIM を他のオペレーターへ譲渡する` }
            },
            'multiple': {
                'active': { en: `Activate SIMs`, ja: `SIM を使用開始する` },
                'inactive': { en: `Deactivate SIMs`, ja: `SIM を休止する` },
                'standby': { en: `Set SIMs to Standby`, ja: `SIM を利用開始待ちに変更する` },
                'suspended': { en: `Suspend SIMs`, ja: `SIM を利用中断する` },
                'terminated': { en: `Terminate SIMs`, ja: `SIM を解約する` },
                'transferring': { en: `Transfer SIMs to another operator`, ja: `SIM を他のオペレーターへ譲渡する` }
            }
        },
        'confirmButtonTitle': {
            'single': {
                'active': { en: `Activate SIM`, ja: `使用開始する` },
                'inactive': { en: `Deactivate SIM`, ja: `休止する` },
                'standby': { en: `Set SIM to Standby`, ja: `利用開始待ちに変更する` },
                'suspended': { en: `Suspend SIM`, ja: `利用中断する` },
                'terminated': { en: `Terminate SIM`, ja: `解約する` },
                'transferring': { en: `Transfer SIM to another operator`, ja: `譲渡する` }
            },
            'multiple': {
                'active': { en: `Activate SIMs`, ja: `使用開始する` },
                'inactive': { en: `Deactivate SIMs`, ja: `休止する` },
                'standby': { en: `Set SIMs to Standby`, ja: `利用開始待ちに変更する` },
                'suspended': { en: `Suspend SIMs`, ja: `利用中断する` },
                'terminated': { en: `Terminate SIMs`, ja: `解約する` },
                'transferring': { en: `Transfer SIMs to another operator`, ja: `譲渡する` }
            }
        },
        'successMessage': {
            'single': {
                'active': { en: `Successfully activated SIM`, ja: `SIM の使用を開始しました` },
                'inactive': { en: `Successfully deactivated SIM`, ja: `SIM の使用を休止しました` },
                'standby': { en: `Successfully set SIM to "standby"`, ja: `SIM を「利用開始待ち」にしました` },
                'suspended': { en: `Successfully suspended SIM`, ja: `SIM を利用中断しました` },
                'terminated': { en: `Successfully terminated SIM`, ja: `SIM を解約しました` },
                'transferring': { en: `Successfully started SIM transfer`, ja: `SIM の譲渡を開始しました` }
            },
            'multiple': {
                'active': { en: `Successfully activated {{success}} of {{all}} SIMs`, ja: `{{all}} 個中 {{success}} 個の SIM の使用を開始しました` },
                'inactive': { en: `Successfully deactivated {{success}} of {{all}} SIMs`, ja: `{{all}} 個中 {{success}} 個の SIM の使用を休止しました` },
                'standby': { en: `Successfully set {{success}} of {{all}} SIMs to "standby"`, ja: `{{all}} 個中 {{success}} 個の SIM を「利用開始待ち」にしました` },
                'suspended': { en: `Successfully suspended {{success}} of {{all}} SIMs`, ja: `{{all}} 個中 {{success}} 個の SIM を利用中断しました` },
                'terminated': { en: `Successfully terminated {{success}} of {{all}} SIMs`, ja: `{{all}} 個中 {{success}} 個の SIM を解約しました` },
                'transferring': { en: `Successfully started {{success}} of {{all}} SIMs transfer`, ja: `{{all}} 個中 {{success}} 個の SIM の譲渡を開始しました` }
            }
        },
        'statusWillRequireDeviceReboot': { en: `For each SIM switching from <code>suspended</code> status to <code>active</code> status, the device must be rebooted in order to re-establish connectivity.`, ja: `<code>利用中断中</code> から <code>使用中</code> 状態への変更するたびに、接続を再確立するためにデバイスを再起動する必要があります。` }
    }
};
