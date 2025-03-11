export const translations = {
    'ui-search': {
        'action': {
            'search': { en: `Search`, ja: `検索` },
            'reset': { en: `Reset`, ja: `リセット` }
        },
        'searchType': {
            'and': { en: `Match all`, ja: `AND検索` },
            'or': { en: `Match any`, ja: `OR検索` }
        },
        'status': {
            'initial': { en: `Enter a search query above`, ja: `上に検索クエリを入力してください` },
            'waitingForValidInput': { en: `To search, finish defining the query`, ja: `検索クエリを入力してください` },
            'readyToSearch': { en: `Ready to search`, ja: `検索準備完了` },
            'searchInProgress': { en: `Searching...`, ja: `検索中...` },
            'searchFailed': { en: `The Search failed. Please try again.`, ja: `検索に失敗しました。再度お試しください` },
            'searchComplete': { en: `Search complete.`, ja: `検索完了` }
        },
        'statusValue': {
            'active': { en: `Active`, ja: `使用中` },
            'inactive': { en: `Inactive`, ja: `inactive` },
            'suspended': { en: `Suspended`, ja: `suspended` },
            'terminated': { en: `Terminated`, ja: `解約済み` },
            'shipped': { en: `Shipped`, ja: `shipped` },
            'ready': { en: `Ready`, ja: `準備完了` },
            'inStock': { en: `In Stock`, ja: `在庫` },
            'banned': { en: `Banned`, ja: `banned` },
            'standby': { en: `Standby`, ja: `standby` }
        },
        'registrationStatusValue': {
            'failed': { en: `Failed`, ja: `登録失敗` },
            'notStarted': { en: `Not Started`, ja: `登録待ち` },
            'pending': { en: `Pending`, ja: `登録保留` },
            'success': { en: `Success`, ja: `登録完了` }
        },
        'tooltip': {
            'matchAllIsAvailableWhenSearchingOnFieldOtherThanAny': { en: `The "Match all" option is available for searches that do not use "Any".`, ja: `AND検索は検索タイプ「すべて」と組み合わせて利用することはできません` },
            'disabledBecauseMaxNumberOfQueryConditionsReached': { en: `Disabled because more than 10 query conditions is not currently supported.`, ja: `現在10個を超えるクエリはサポートしていません` }
        }
    }
};
