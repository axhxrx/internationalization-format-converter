export const translations = {
    'billing_alert_component': {
        'availablePlaceholders': {
            'aboutPlaceholders': { en: `You can use placeholders given below in email's title and body.`, ja: `メールのタイトルおよび本文には以下の変数を使用できます。` },
            'column': {
                'description': { en: `Description`, ja: `説明` },
                'placeholders': { en: `Placeholder`, ja: `変数` }
            },
            'placeholderDescription': {
                'currentTotalAmount': { en: `Current monthly usage fee`, ja: `現在のご利用料金` },
                'limitTotalAmount': { en: `Threshold`, ja: `設定金額` },
                'operatorId': { en: `The Operator ID`, ja: `オペレーター ID` }
            },
            'richtipLabel': { en: `See available placeholders`, ja: `使用できる変数` }
        },
        'description': { en: `Send a notification to the registered email address when the monthly usage fee exceeds the specified amount.`, ja: `今月のご利用料金が設定金額を上回ったときにオペレーターのメールアドレスに通知します。別のアクションを行いたい場合はイベントハンドラーを設定してください。` },
        'labels': {
            'body': { en: `Email body`, ja: `本文` },
            'enabled': { en: `Enable alert`, ja: `アラートを有効にする` },
            'show_detail': { en: `Edit email subject/body`, ja: `メールの件名・本文を編集する` },
            'threshold_EUR': { en: `Threshold (EUR)`, ja: `設定金額  (EUR)` },
            'threshold_JPY': { en: `Threshold (JPY)`, ja: `設定金額  (JPY)` },
            'threshold_USD': { en: `Threshold (USD)`, ja: `設定金額  (USD)` },
            'title': { en: `Email subject`, ja: `件名` }
        },
        'restore_default': { en: `Restore default`, ja: `件名・本文をデフォルトに戻す` },
        'save': { en: `Save`, ja: `保存` },
        'success': { en: `Your settings have been saved.`, ja: `変更を保存しました。` },
        'title': { en: `Billing alert`, ja: `利用料金アラート` },
        'updatedTimeWarning': { en: `Billing is updated every 12-24 hours. Depending on your service usage, the billing amount calculated at the time of the update may significantly exceed the threshold.`, ja: `ご利用料金は12-24時間ごとに更新されます。サービスの利用状況によっては、更新時に算出された料金が設定金額を大幅に超える場合があります。` }
    }
};
