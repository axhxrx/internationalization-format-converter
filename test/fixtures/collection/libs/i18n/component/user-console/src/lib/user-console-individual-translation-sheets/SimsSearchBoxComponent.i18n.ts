export const translations = {
    'SimsSearchBoxComponent': {
        'clearSearch': { en: `Clear`, ja: `検索条件をクリア` },
        'close': { en: `Close`, ja: `閉じる` },
        'reset': { en: `Reset`, ja: `リセット` },
        'search': { en: `Search`, ja: `検索` },
        'searchButton': { en: `Search`, ja: `検索` },
        'searchByText': { en: `Search by text`, ja: `文字列で検索` },
        'filterByStatus': { en: `Filter by status`, ja: `状態で絞り込む` },
        'filterBySessionStatus': { en: `Filter by session status`, ja: `セッション状態で絞り込む` },
        'filterByModuleType': { en: `Filter by module type`, ja: `モジュールタイプで絞り込む` },
        'filterBySubscription': { en: `Filter by subscription`, ja: `サブスクリプションで絞り込む` },
        'filterIsNotAvailable': { en: `If you specify "Any" in "Search by text", you cannot combine it with other attributes to narrow down the search. If you want to combine with other attributes, please specify a search category other than "Any".`, ja: `「文字列で検索」で「すべて」を指定した場合、他の属性と組み合わせて絞り込むことはできません。他の属性と組み合わせたい場合は「すべて」以外の検索条件を指定してください` },
        'howToUse': { en: `If you choose multiple values for the condition of one attribute, you can search SIMs which include one of the values as an attribute.`, ja: `ひとつの属性の条件に複数の値を選んだ場合、他の属性の条件は無効になりますが、「この属性がいずれかの値を含む」条件で絞り込むことができます。` },
        'searchQueryKey': {
            'moduleType': { en: `Module type`, ja: `モジュールタイプ` },
            'sessionStatus': { en: `Session status`, ja: `セッション状態` },
            'status': { en: `Status`, ja: `状態` },
            'subscription': { en: `Subscription`, ja: `サブスクリプション` }
        },
        'searchPlaceholder': {
            'any': { en: `Search by any attribute`, ja: `検索可能なすべての属性で検索` },
            'group': { en: `Search by Group`, ja: `グループで検索` },
            'iccid': { en: `Search by ICCID`, ja: `ICCID で検索` },
            'imsi': { en: `Search by IMSI`, ja: `IMSI で検索` },
            'msisdn': { en: `Search by MSISDN`, ja: `MSISDN で検索` },
            'name': { en: `Search by Name`, ja: `名前で検索` },
            'serialNumber': { en: `Serial Number`, ja: `製造番号で検索` },
            'simId': { en: `Search by SIM ID`, ja: `SIM IDで検索` },
            'tag': { en: `Search by tag value`, ja: `タグの値で検索` }
        },
        'subscription': {
            'other': { en: `other subscriptions (comma-separated)`, ja: `その他のサブスクリプション（カンマ区切り）` }
        },
        'values': {
            'moduleType': {
                'mini': { en: `Mini`, ja: `標準` },
                'micro': { en: `Micro`, ja: `マイクロ` },
                'nano': { en: `Nano`, ja: `ナノ` },
                'profilePackage': { en: `profilePackage`, ja: `profilePackage` },
                'trio': { en: `3 in 1`, ja: `3 in 1` },
                'embedded': { en: `Embedded (MFF2)`, ja: `Embedded (MFF2)` },
                'integrated': { en: `Embedded (iSIM)`, ja: `Embedded (iSIM)` },
                'virtual': { en: `Virtual`, ja: `バーチャル` }
            },
            'searchCategory': {
                'any': { en: `Any`, ja: `すべて` },
                'name': { en: `Name`, ja: `名前` },
                'group': { en: `Group`, ja: `グループ` },
                'simId': { en: `SIM ID`, ja: `SIM ID` },
                'imsi': { en: `IMSI`, ja: `IMSI` },
                'msisdn': { en: `MSISDN`, ja: `MSISDN` },
                'iccid': { en: `ICCID`, ja: `ICCID` },
                'serialNumber': { en: `Serial Number`, ja: `製造番号` },
                'tag': { en: `Tag`, ja: `タグ` }
            },
            'sessionStatus': {
                'online': { en: `Online`, ja: `オンライン` },
                'offline': { en: `Offline`, ja: `オフライン` }
            },
            'status': {
                'standby': { en: `Standby`, ja: `利用開始待ち` },
                'ready': { en: `Ready`, ja: `準備完了` },
                'shipped': { en: `Shipped`, ja: `出荷済み` },
                'active': { en: `Active`, ja: `使用中` },
                'inactive': { en: `Inactive`, ja: `休止中` },
                'suspended': { en: `Suspended`, ja: `利用中断中` },
                'terminated': { en: `Terminated`, ja: `解約済み` }
            }
        }
    }
};
