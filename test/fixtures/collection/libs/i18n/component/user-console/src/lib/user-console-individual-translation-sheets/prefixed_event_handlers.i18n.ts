export const translations = {
  prefixed_event_handlers: {
    handler_text: {
      ChangeSpeedClassAction: {
        EndMessage: { en: `Speed class is updated to {{speedClass}}.`,
          ja: `速度制限期間が終わったので、速度が {{speedClass}} に変更されました。` },
        StartMessage: {
          CumulativeTrafficRule: {
            en: `Lifetime total traffic of the SIM exceeds {{value}} MiB. Speed class is updated to {{speedClass}}`,
            ja: `SIMの使いはじめからの通信量が{{value}}MiBに到達したので通信速度が {{speedClass}} に制限されました。`,
          },
          DailyTotalTrafficRule: {
            en: `Daily total traffic exceeds {{value}} MiB. Speed class is updated to {{speedClass}}`,
            ja: `全SIMの日次合計通信量が{{value}}MiBに到達したので通信速度が {{speedClass}} に制限されました。`,
          },
          DailyTrafficRule: {
            en: `Daily total traffic of the SIM exceeds {{value}} MiB. Speed class is updated to {{speedClass}}`,
            ja: `SIMの日次通信量が{{value}}MiBに到達したので通信速度が {{speedClass}} に制限されました。`,
          },
          MonthlyTotalTrafficRule: {
            en: `Monthly total traffic exceeds {{value}} MiB. Speed class is updated to {{speedClass}}`,
            ja: `全SIMの月次合計通信量が{{value}}MiBに到達したので通信速度が {{speedClass}} に制限されました。`,
          },
          MonthlyTrafficRule: {
            en: `Monthly total traffic of the SIM exceeds {{value}} MiB.  Speed class is updated to {{speedClass}}`,
            ja: `SIMの月次通信量が{{value}}MiBに到達したので通信速度が {{speedClass}} に制限されました。`,
          },
        },
      },
      imsiHeader: { en: `Target SIM: simId=\${simId} imsi=\${imsi} 

`, ja: `対象SIM simId=\${simId} imsi=\${imsi} 

` },
      SendMailToOperatorAction: {
        Alert: {
          Message: {
            CumulativeTrafficRule: { en: `Lifetime total traffic of the SIM exceeds {{value}} MiB.`,
              ja: `SIMの使いはじめからの通信量が{{value}}MiBを超えています。` },
            DailyTotalTrafficRule: { en: `Daily total traffic exceeds {{value}} MiB.`,
              ja: `全SIMの日次合計通信量が{{value}}MiBを超えています。` },
            DailyTrafficRule: { en: `Daily total traffic of the SIM exceeds {{value}} MiB.`,
              ja: `SIMの日次通信量が{{value}}MiBを超えています。` },
            MonthlyTotalTrafficRule: { en: `Monthly total traffic exceeds {{value}} MiB.`,
              ja: `全SIMの月次合計通信量が{{value}}MiBを超えています。` },
            MonthlyTrafficRule: { en: `Monthly total traffic of the SIM exceeds {{value}} MiB.`,
              ja: `SIMの月次通信量が{{value}}MiBを超えています。` },
          },
          Subject: { en: `Traffic notification`, ja: `利用状況を確認してください。` },
        },
        BillingAlert: {
          Message: {
            en:
              `We are writing to inform you that your monthly billable usage has exceeded the billing alert threshold set on your account. Your Quoracomm services are not affected by this alert and will continue to operate normally. If you wish to adjust your threshold or disable this notification, you may do so by logging into your account.

Threshold - \${limitTotalAmount} {{currency}}
Latest billing - \${currentTotalAmount} {{currency}}`,
            ja:
              `オペレーターの今月の利用料金が、お客様が設定した金額 (しきい値) を超えたことをお知らせいたします。QUORACOMM サービスは引き続きご利用いただけます。しきい値を調整したり、メール通知を止めたりするには、ユーザーコンソールで「イベントハンドラー」の設定を変更してください。

設定金額 - \${limitTotalAmount} {{currency}}
オペレーターの今月の利用料金 - \${currentTotalAmount} {{currency}}`,
          },
          Subject: { en: `Billing Alert`, ja: `今月のご利用料金が設定値に達しました` },
        },
        DeviceHarquestUsageAlert: {
          Message: { en: `API count \${deviceId} of \${date} exceeds {{value}}.`,
            ja: `\${date} における \${deviceId} のリクエスト回数が設定値に達しましたので、お知らせいたします。` },
          Subject: { en: `Daily Harquest Data Usage Notification (\${deviceId})`,
            ja: `\${date} における \${deviceId} のリクエスト回数が設定値に達しました` },
        },
        Subject: {
          TransferSpeedsIsLimited: { en: `Transfer speed is limited`, ja: `速度制限のお知らせ` },
          TransferSpeedsIsRecovered: { en: `Transfer speed is updated`, ja: `速度制限解除のお知らせ` },
        },
      },
    },
    messages: {
      saved: { en: `Saved watch settings successfully`, ja: `監視設定を保存しました` },
    },
  },
};
