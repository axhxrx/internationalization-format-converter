export const translations = {
    'paymentHistoryTable': {
        'header': { en: `Billing & payment history`, ja: `支払い履歴` },
        'filter': {
            'label': { en: `Filter`, ja: `フィルター` },
            'all': { en: `All`, ja: `全て` },
            'usageCharges': { en: `Usage charges`, ja: `利用料金` },
            'orders': { en: `Orders`, ja: `注文` }
        },
        'actions': {
            'downloadPaymentStatement': { en: `Download payment statement (PDF)`, ja: `支払い明細をダウンロード (PDF)` },
            'downloadInvoice': { en: `Download invoice (PDF)`, ja: `請求書をダウンロード (PDF)` },
            'downloadServiceUsageCharges': { en: `Download service usage charges (CSV)`, ja: `利用料の詳細をダウンロード (CSV)` },
            'viewServiceUsageCharges': { en: `View service usage charges`, ja: `利用料の詳細を見る` }
        },
        'status': {
            'paid': { en: `Paid`, ja: `お支払い済み` },
            'deferred': { en: `Deferred`, ja: `繰り越し` },
            'issued': { en: `Issued`, ja: `発行済み` },
            'delegating_to_third_party': { en: `Delegating to 3rd party`, ja: `債権譲渡中` },
            'delegated_to_third_party': { en: `Delegated to 3rd party`, ja: `債権譲渡済み` }
        },
        'deferredPayment': {
            'warning': { en: `Costs are below the minimum chargeable amount and will be deferred until next month's invoice`, ja: `費用が請求可能な最低額を下回っているため、翌月の請求書まで延期されます` }
        },
        'monthlyCharge': {
          'defaultMessage': {
            en: 'Service Period: {{ yearMonth }} Summary',
            ja: '対象期間: {{ yearMonth }}'
          }
        },
        'tooltip': {
            'serviceCharge': { en: `Platform service usage charges`, ja: `利用料金` },
            'order': { en: `Order`, ja: `注文` }
        }
    }
};
