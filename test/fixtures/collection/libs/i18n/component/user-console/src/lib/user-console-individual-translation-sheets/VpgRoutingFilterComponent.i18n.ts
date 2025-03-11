export const translations = {
    'VpgRoutingFilterComponent': {
        'title': { en: `VPG routing outbound filter`, ja: `アウトバウンドルーティングフィルター` },
        'description': { en: `The VPG Outbound Routing Filter allows you to control access from your VPG to the Internet, peering destinations, private line services, and VPN destinations by IP address range. When the filter configuration has multiple entries that overlap, the policy for an IP range with the longest prefix is applied.`, ja: `VPG アウトバウンドルーティングフィルターでは、VPG からインターネット、ピアリング先や専用線、仮想専用線での接続先環境へのアクセスを IP アドレスレンジで許可/拒否できます。エントリーが指定する IP アドレスレンジが重複した場合は、ロンゲストマッチで優先順位を決定します。` },
        'labels': {
            'action': { en: `Action`, ja: `アクション` },
            'ipRange': { en: `IP address range`, ja: `IP アドレスレンジ` }
        },
        'errors': {
            'required': { en: `This field is required.`, ja: `IP アドレスレンジを入力してください` },
            'cidr': { en: `Invalid format for IP Range (it should be like 111.111.111.111/24).`, ja: `IP アドレスレンジが正しいか確認してください` }
        },
        'actions': {
            'add': { en: `Add`, ja: `追加` },
            'remove': { en: `Remove`, ja: `削除` },
            'save': { en: `Save`, ja: `保存` }
        },
        'table': {
            'noData': { en: `No routing filter entries`, ja: `エントリーが存在しません` }
        },
        'modals': {
            'confirm': {
                'title': { en: `Confirmation`, ja: `確認` },
                'body': { en: `When applying the settings to devices that are online, the current session will be deleted.`, ja: `変更を適用します。既に接続中のデバイスに設定を反映するには、セッション切断・再接続が必要です。` },
                'cancel': { en: `Cancel`, ja: `キャンセル` },
                'confirm': { en: `Save`, ja: `保存` }
            }
        },
        'updated': { en: `Entries have been updated.`, ja: `エントリーを保存しました` }
    }
};
