export const translations = {
    'traffic_volume_ranking': {
        'error': {
            'internal_server_error': { en: `A problem occurred. Data retrieval failed.`, ja: `問題が発生しました。データの取得に失敗しました。` },
            'invalid_limit_number': { en: `The number of items to retrieve is invalid. The minimum is 1 item, and the maximum is 50 items.`, ja: `不正な取得件数が指定されました。最小1件から最大50件までの件数を指定できます。` },
            'invalid_range_order': { en: `The order of the start and end points of the search period is invalid.`, ja: `検索期間の始点と終点の順序が不正です。` },
            'invalid_retrospective_range': { en: `The starting point of the search period is invalid.  Up to 40 days can be searched retroactively.`, ja: `不正な検索期間の始点が指定されました。最大40日まで遡って検索することができます。` },
            'invalid_search_range': { en: `The search period is invalid. The maximum search period is 40 days.`, ja: `不正な検索期間が指定されました。検索可能な範囲は最大40日間です。` }
        },
        'exemption_from_responsibility': { en: `The results of this graph are approximate values for visualization. Please refer to the individual detail page of each SIM for actual traffic volume.`, ja: `このグラフの結果はデータの可視化を目的とした概算値です。実際の通信量についてはSIMの個別詳細ページを参照ください。` },
        'imsi_clipboard_notice': { en: `Click to copy IMSI to clipboard`, ja: `クリックするとIMSIがクリップボードにコピーされます` },
        'limit': { en: `Item(s)`, ja: `件` },
        'page_header': { en: `Traffic volume ranking`, ja: `トラフィック量ランキング` },
        'search': { en: `Search`, ja: `検索` },
        'time': { en: `Time`, ja: `時間` }
    }
};
