export const translations = {
  SubscriptionPlanUserMessage: {
    blankLine: {
      any: { en: `<br><br>`, ja: `<br><br>` },
    },
    space: {
      any: {
        en: ' ',
        ja: '',
      },
    },
    pleaseSeeThePricingPageForMoreInformation: {
      any: {
        en:
          `Please see the <a target="_blank" href="https://developers.example.com/en/docs/reference/fees/">pricing page</a> for more details.`,
        ja:
          `詳しくは弊社 Web サイトの<a href='https://quoracomm.jp/services/air/cellular/pricing/' target='_blank'>料金ページ</a>をご確認ください。`,
      },
    },
    statusNotSupported: {
      single: { en: `This SIM does not support the <code>{{ newStatus }}</code> status.`,
        ja: `この <code>{{ jpLocalizedNewStatus }}</code> の状態には対応していません。` },
      multiple: { en: `These SIMs do not support the <code>{{ newStatus }}</code> status.`,
        ja: `これらNO、<code>{{ jpLocalizedNewStatus }}</code> の状態には対応していません。` },
    },
    statusWillDisableDataTransferAndDailyBasicFee: {
      single: {
        en:
          `By changing this SIM to <code>{{ newStatus }}</code> status, data transfer will be disabled and the basic fee ({{ basicFeeCurrency }} {{ basicFeeAmount }} per day) will not be charged.`,
        ja:
          `この SIM を <code>{{ jpLocalizedNewStatus }}</code> 状態にすることで、データ通信ができなくなり、基本料金 ({{ basicFeeAmount }}{{ jpLocalizedCurrency }} /日）が請求されなくなります。`,
      },
      multiple: {
        en:
          `By changing these SIMs to <code>{{ newStatus }}</code> status, data transfer will be disabled and the basic fee ({{ basicFeeCurrency }} {{ basicFeeAmount }} per day per SIM) will not be charged.`,
        ja:
          `これらの SIM を <code>{{ jpLocalizedNewStatus }}</code> 状態にすることで、データ通信ができなくなり、基本料金 ({{ basicFeeAmount }}{{ jpLocalizedCurrency }} /日/SIM）が請求されなくなります。`,
      },
    },
    statusWillDisableDataTransferAndMonthlyBasicFee: {
      single: {
        en:
          `By changing this SIM to <code>{{ newStatus }}</code> status, data transfer will be disabled and the basic fee ({{ basicFeeCurrency }} {{ basicFeeAmount }} per month) will not be charged.`,
        ja:
          `この SIM を <code>{{ jpLocalizedNewStatus }}</code> 状態にすることで、データ通信ができなくなり、基本料金 ({{ basicFeeAmount }}{{ jpLocalizedCurrency }} /月）が請求されなくなります。`,
      },
      multiple: {
        en:
          `By changing these SIMs to <code>{{ newStatus }}</code> status, data transfer will be disabled and the basic fee ({{ basicFeeCurrency }} {{ basicFeeAmount }} per month per SIM) will not be charged.`,
        ja:
          `これらの SIM を <code>{{ jpLocalizedNewStatus }}</code> 状態にすることで、データ通信ができなくなり、基本料金 ({{ basicFeeAmount }}{{ jpLocalizedCurrency }} /月/SIM）が請求されなくなります。`,
      },
    },
    statusEntryWillIncurFee: {
      single: {
        en:
          `A {{ statusEntryFeeCurrency }} {{ statusEntryFee }} fee will be charged when changing this SIM to <code>{{ newStatus }}</code> status.`,
        ja:
          `この SIM を <code>{{ jpLocalizedNewStatus }}</code>状態にする際に {{ statusEntryFee }}{{ jpLocalizedCurrency }}の設定変更料金が適用されます。`,
      },
      multiple: {
        en:
          `A {{ statusEntryFeeCurrency }} {{ statusEntryFee }} per SIM fee will be charged when changing these SIMs to <code>{{ newStatus }}</code> status.`,
        ja:
          `これらの SIM を <code>{{ jpLocalizedNewStatus }}</code> 状態にする際に {{ statusEntryFee }}{{ jpLocalizedCurrency }}/SIM の設定変更料金が適用されます。`,
      },
    },
    statusExitWillIncurFee: {
      single: {
        en:
          `A {{ statusExitFeeCurrency }} {{ statusExitFee }} reactivation fee will apply when changing the status back to <code>active</code> or <code>inactive</code> status.`,
        ja:
          `この SIM を <code>使用中</code> または <code>休止</code> 状態に戻す際に、 {{ statusExitFee }}{{ jpLocalizedCurrency }} のアクティベーション料金が適用されます。`,
      },
      multiple: {
        en:
          `A {{ statusExitFeeCurrency }} {{ statusExitFee }} per SIM reactivation fee will apply when changing the status back to <code>active</code> or <code>inactive</code> status.`,
        ja:
          `これらの SIM を <code>使用中</code> または <code>休止</code> 状態に戻す際に、 {{ statusExitFee }}{{ jpLocalizedCurrency }} のアクティベーション料金が適用されます。`,
      },
    },
    statusWillIncurAnnualRenewalFee: {
      single: {
        en:
          `Additionally, a {{ annualExtensionCurrency }} {{ annualExtensionFee }} annual renewal fee will apply if the SIM remains in <code>{{ newStatus }}</code> status for longer than 1 year.`,
        ja:
          `さらに、この SIM は <code>{{ jpLocalizedNewStatus }}</code> 状態で1年を経過すると、1年毎に {{ annualExtensionFee }}{{ jpLocalizedCurrency }} の更新料が発生します。`,
      },
      multiple: {
        en:
          `Additionally, a {{ annualExtensionCurrency }} {{ annualExtensionFee }} per SIM annual renewal fee will apply to any SIMs that remain in <code>{{ newStatus }}</code> status for longer than 1 year.`,
        ja:
          `さらに、これらの SIM は <code>{{ jpLocalizedNewStatus }}</code> 状態で1年を経過すると、1年毎に {{ annualExtensionFee }}{{ jpLocalizedCurrency }} の更新料が発生します。`,
      },
    },
    statusWillDisableDataTransferAndReduceTheMonthlyBasicFee: {
      single: {
        en:
          `By changing this SIM to <code>{{ newStatus }}</code> status, data transfer will be disabled and a reduced basic fee of {{ basicFeeCurrency }} {{ basicFeeInNewStatusAmount }} per month will apply.`,
        ja:
          `この SIM を <code>{{ jpLocalizedNewStatus }}</code> 状態にすることで、データ通信ができなくなり、基本料金が {{ basicFeeInNewStatusAmount }}{{ jpLocalizedCurrency }}/月 に減額されます。`,
      },
      multiple: {
        en:
          `By changing these SIMs to <code>{{ newStatus }}</code> status, data transfer will be disabled and a reduced basic fee of {{ basicFeeCurrency }} {{ basicFeeInNewStatusAmount }} per month per SIM will apply.`,
        ja:
          `これらの SIM を <code>{{ jpLocalizedNewStatus }}</code> 状態にすることで、データ通信ができなくなり、基本料金が {{ basicFeeInNewStatusAmount }}{{ jpLocalizedCurrency }}/月 に減額されます。`,
      },
    },
    statusWillDisableDataTransferAndReduceTheDailyBasicFee: {
      single: {
        en:
          `By changing this SIM to <code>{{ newStatus }}</code> status, data transfer will be disabled and a reduced basic fee of {{ basicFeeCurrency }} {{ basicFeeInNewStatusAmount }} per day will apply.`,
        ja:
          `この SIM を <code>{{ jpLocalizedNewStatus }}</code> 状態にすることで、データ通信ができなくなり、基本料金が {{ basicFeeInNewStatusAmount }}{{ jpLocalizedCurrency }}/日 に減額されます。`,
      },
      multiple: {
        en:
          `By changing these SIMs to <code>{{ newStatus }}</code> status, data transfer will be disabled and a reduced basic fee of {{ basicFeeCurrency }} {{ basicFeeInNewStatusAmount }} per day per SIM will apply.`,
        ja:
          `これらの SIM を <code>{{ jpLocalizedNewStatus }}</code> 状態にすることで、データ通信ができなくなり、基本料金が {{ basicFeeInNewStatusAmount }}{{ jpLocalizedCurrency }}/日 に減額されます。`,
      },
    },
    statusWillDisableDataTransferButNotReduceTheMonthlyBasicFee: {
      single: {
        en:
          `By changing this SIM to <code>{{ newStatus }}</code> status, data transfer will be disabled. However, the basic fee of {{ basicFeeCurrency }} {{ basicFeeAmount }} per month will still apply.`,
        ja:
          `この SIM を <code>{{ jpLocalizedNewStatus }}</code> 状態にすることで、データ通信ができなくなります。ただし、{{ basicFeeAmount }}{{ jpLocalizedCurrency }}/月 の基本料金が引き続き適用されます。`,
      },
      multiple: {
        en:
          `By changing these SIMs to <code>{{ newStatus }}</code> status, data transfer will be disabled. However, the basic fee of {{ basicFeeCurrency }} {{ basicFeeAmount }} per month per SIM will still apply.`,
        ja:
          `これらの SIM を <code>{{ jpLocalizedNewStatus }}</code> 状態にすることで、データ通信ができなくなります。ただし、{{ basicFeeAmount }}{{ jpLocalizedCurrency }}/月/SIM の基本料金が引き続き適用されます。`,
      },
    },
    statusWillDisableDataTransferButNotReduceTheDailyBasicFee: {
      single: {
        en:
          `By changing this SIM to <code>{{ newStatus }}</code> status, data transfer will be disabled. However, the basic fee of {{ basicFeeCurrency }} {{ basicFeeAmount }} per day will still apply.`,
        ja:
          `この SIM を <code>{{ jpLocalizedNewStatus }}</code> 状態にすることで、データ通信ができなくなります。ただし、{{ basicFeeAmount }}{{ jpLocalizedCurrency }}/日 の基本料金が引き続き適用されます。`,
      },
      multiple: {
        en:
          `By changing these SIMs to <code>{{ newStatus }}</code> status, data transfer will be disabled. However, the basic fee of {{ basicFeeCurrency }} {{ basicFeeAmount }} per day per SIM will still apply.`,
        ja:
          `これらの SIM を <code>{{ jpLocalizedNewStatus }}</code> 状態にすることで、データ通信ができなくなります。ただし、{{ basicFeeAmount }}{{ jpLocalizedCurrency }}/日/SIM の基本料金が引き続き適用されます。`,
      },
    },
    statusWillEnableDataTransferWithDailyBasicFee: {
      single: {
        en:
          `By changing this SIM to <code>{{ newStatus }}</code> status, data transfer will be allowed and a basic fee of {{ basicFeeCurrency }} {{ basicFeeAmount }} per day will apply.`,
        ja:
          `この SIM を <code>{{ jpLocalizedNewStatus }}</code> 状態に変更することでデータ通信が可能となり、{{ basicFeeAmount }} {{ jpLocalizedCurrency }}/日 の基本料金が適用されます。`,
      },
      multiple: {
        en:
          `By changing these SIMs to <code>{{ newStatus }}</code> status, data transfer will be allowed and a basic fee of {{ basicFeeCurrency }} {{ basicFeeAmount }} per day per SIM will apply.`,
        ja:
          `これらの SIM を <code>{{ jpLocalizedNewStatus }}</code> 状態に変更することでデータ通信が可能となり、{{ basicFeeAmount }} {{ jpLocalizedCurrency }}/日/SIM の基本料金が適用されます。`,
      },
    },
    statusWillEnableDataTransferWithMonthlyBasicFee: {
      single: {
        en:
          `By changing this SIM to <code>{{ newStatus }}</code> status, data transfer will be allowed and a basic fee of {{ basicFeeCurrency }} {{ basicFeeAmount }} per month will apply.`,
        ja:
          `この SIM を <code>{{ jpLocalizedNewStatus }}</code> 状態に変更することでデータ通信が可能となり、{{ basicFeeAmount }}{{ jpLocalizedCurrency }}/月 の基本料金が適用されます。`,
      },
      multiple: {
        en:
          `By changing these SIMs to <code>{{ newStatus }}</code> status, data transfer will be allowed and a basic fee of {{ basicFeeCurrency }} {{ basicFeeAmount }} per month per SIM will apply.`,
        ja:
          `これらの SIM を <code>{{ jpLocalizedNewStatus }}</code> 状態に変更することでデータ通信が可能となり、{{ basicFeeAmount }}{{ jpLocalizedCurrency }}/月/SIM の基本料金が適用されます。`,
      },
    },
    statusWillEnableDataTransferFixedRate: {
      single: {
        en:
          `By changing this SIM to <code>{{ newStatus }}</code> status, data transfer will be allowed. Data transfer will be allowed until the data maximums are reached.`,
        ja:
          `この IoT SIM のステータスを <code>{{ jpLocalizedNewStatus }}</code> に変更すると、データ通信量が上限に達するまで、データ通信が利用できます。`,
      },
      multiple: {
        en:
          `By changing these SIMs to <code>{{ newStatus }}</code> status, data transfer will be allowed. Data transfer will be allowed until the data maximums are reached.`,
        ja:
          `これらの IoT SIM のステータスを <code>{{ jpLocalizedNewStatus }}</code> に変更すると、データ通信量が上限に達するまで、データ通信が利用できます。`,
      },
    },
    statusCostImpactCouldNotBeAutomaticallyDetermined: {
      single: { en: `Changing this SIM to <code>{{ newStatus }}</code> status may affect the fees charged.`,
        ja:
          `この SIM を <code>{{ jpLocalizedNewStatus }}</code> 状態に変更すると、請求される料金に影響が出る場合があります。` },
      multiple: { en: `Changing these SIMs to <code>{{ newStatus }}</code> status may affect the fees charged.`,
        ja:
          `これらの SIM を <code>{{ jpLocalizedNewStatus }}</code> 状態に変更すると、請求される料金に影響が出る可能性があります。` },
    },
    statusWillPermanentlyRejectConnection: {
      single: {
        en:
          `After changing this SIM to <code>{{ newStatus }}</code> status, please consider powering down the device it is installed in. If your device is not powered off and begins to signal the network excessively to request a cellular session, Quoracomm may reactivate this SIM without notice to prevent further signaling. Please click <a href="https://developers.example.com/en/docs/air/subscriber-status/#suspended" target="_blank">here</a> for more information.`,
        ja:
          `SIM のステータスを <code>{{ jpLocalizedNewStatus }}</code> にする場合はデバイスの電源をオフにしてください。電源をオフにしない場合、お客様に確認することなく QUORACOMM の操作によって IoT SIM のステータスを <code>使用中</code> に変更することがあります。詳しくは、 <a href="https://users.example.com/ja-jp/docs/air/set-status/#turn-off-device" target="_blank">IoT SIM のステータスを利用中断中 (suspended) にする場合はデバイスの電源をオフにしてください</a> を参照してください。`,
      },
      multiple: {
        en:
          `After changing these SIMs to <code>{{ newStatus }}</code> status, please consider powering down the devices they are installed in. If your devices are not powered off and begin to signal the network excessively to request cellular sessions, Quoracomm may reactivate these SIMs without notice to prevent further signaling. Please click <a href="https://developers.example.com/en/docs/air/subscriber-status/#suspended" target="_blank">here</a> for more information.`,
        ja:
          `SIM のステータスを <code>{{ jpLocalizedNewStatus }}</code> にする場合はデバイスの電源をオフにしてください。電源をオフにしない場合、お客様に確認することなく QUORACOMM の操作によって IoT SIM のステータスを <code>使用中</code> に変更することがあります。詳しくは、 <a href="https://users.example.com/ja-jp/docs/air/set-status/#turn-off-device" target="_blank">IoT SIM のステータスを利用中断中 (suspended) にする場合はデバイスの電源をオフにしてください</a> を参照してください。`,
      },
    },
    basicFeeDiscountsMayAlsoApply: {
      any: { en: `Basic fee discounts may also apply.`, ja: `基本料金の割引が適用される場合もあります。` },
    },
    longTermDiscountsMayAlsoApply: {
      any: { en: `Long-term discounts may also apply.`, ja: `長期利用割引が適用される場合もあります。` },
    },
    basicFeeDiscountsDoNotApplyInStatus: {
      any: { en: `Basic fee discounts do not apply to SIMs in <code>{{ newStatus }}</code> status.`,
        ja: `基本料金割引は、<code>{{ jpLocalizedNewStatus }}</code> 状態のSIMには適用されません。` },
    },
    longTermDiscountsDoNotApplyInStatus: {
      any: { en: `Long-term discounts do not apply to SIMs in <code>{{ newStatus }}</code> status.`,
        ja: `長期利用割引は、 <code>{{ jpLocalizedNewStatus }}</code> 状態のSIMには適用されません。` },
    },
    willBeActiveWhenConnect: {
      any: {
        en:
          `A device with a {{ standBy }} SIM remains in this state until connection. After this initial connection the status will automatically change to {{ active }}.`,
        ja:
          `<code>{{ jpLocalizedStandBy }}</code> 状態にあるSIMを使って実際にデバイスから通信開始処理を行った場合には、SIMの状態は自動的に <code>{{ jpLocalizedActive }}</code> 状態に移行します。`,
      },
    },
    willChargeMonthlyFeeAfter6Months: {
      any: {
        en:
          `By changing this SIM to <code>{{ newStatus }}</code> status, data transfer will be disabled. For the first 6 months, no fee will be charged for being in the <code>{{ newStatus }}</code> status. After 6 months, a {{basicFeeCurrency}} {{extendedSuspensionFee}} per month fee will be charged.`,
        ja:
          `この SIM を <code>{{ jpLocalizedNewStatus }}</code> 状態にすることで、データ通信ができなくなります。最初の6か月間、<code>{{ jpLocalizedNewStatus }}</code> ステータスにいるための料金は発生しません。6か月後から、{{ basicFeeCurrency }} {{ extendedSuspensionFee }} が月額で請求されます。`,
      },
    },
    statusWillIncurReactivationFee: {
      any: {
        en:
          `For each sim switching from <code>suspended</code>/<code>standby</code> to <code>active</code>/<code>inactive</code> status, a reactivation fee of {{ reactivationFeeCurrency }} {{ reactivationFee }} will be charged.`,
        ja:
          `「<code>利用開始待ち</code>/<code>利用中断中</code>」から「<code>使用中</code>/<code>休止中</code>」状態への変更 1 回につき、１枚のSIMごとに {{ reactivationFee }}{{ reactivationFeeCurrency }} の{{ jpReactivationFeeWording }}が発生します。`,
      },
    },
  },
};
