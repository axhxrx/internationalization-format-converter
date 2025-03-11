export const translations = {
  local_info: {
    buttons: {
      request_report: { en: `Request Report`, ja: `レポートを取得` },
      request_update: { en: `Request Update`, ja: `レポートを更新` },
    },
    disabled_reasons: {
      generic: { en: `SIM local info report is disabled because it is not supported for this SIM`,
        ja: `SIMローカル情報レポートは、このSIMではサポートされていません。` },
      ineligible_subscription: {
        en:
          `SIM local info report is disabled because it is not supported for this SIM. A SIM with subscription type "plan01s" is required.`,
        ja: `SIMローカル情報レポートは、このSIMでサポートされていません。 "plan01s" のSIMが必要です。`,
      },
      not_active: {
        en: `SIM local info report is disabled because it is only available for SIMs in the "active" state.`,
        ja: `SIMローカル情報レポートは、SIMの状態が "active" の場合のみ有効です。`,
      },
    },
    heading: { en: `SIM local info report`, ja: `SIM ローカル情報レポート` },
    help: {
      no_report_exists: {
        en:
          `No SIM local info report exists. To send a request to the SIM to generate a local info report, press the button below.`,
        ja:
          `SIMローカル情報レポートは存在しません。 ローカル情報レポートを生成するために、レポートを取得してください。`,
      },
      price_caution: {
        en:
          `Requesting a Local Info Report will incur an MT SMS fee. Refer to the <a href="https://developers.example.com/en/docs/reference/fees/" target="_blank">Pricing & Fee Schedule</a> for more information.`,
        ja:
          `SIM ローカルレポートの確認には IoT デバイスへの SMS 送信を利用します。SMS の利用料金は <a href="https://quoracomm.jp/services/air/cellular/price_iot_sim/#sms" target="_blank" >料金ページ</a> を参照してください。`,
      },
      request_failed: {
        en:
          `The last attempt to trigger a SIM local info report failed. This can happen if the device does not meet the technical requirements for this feature, or if the device was not reachable when the request was in progress.`,
        ja:
          `SIMローカル情報レポートの取得要求が送信できませんでした。デバイスが当機能に対応していない、もしくはデバイスがオフラインなどの理由で、送信できませんでした。 `,
      },
      request_pending: {
        en:
          `The SIM local info report request has been submitted. The result will be shown here when it becomes available.`,
        ja: `SIMローカル情報レポートの取得要求が送信されました。 レポートが取得されると、以下に表示されます。`,
      },
      request_succeeded: { en: `The SIM's most recent local info report is shown below.`,
        ja: `最新のSIMローカル情報レポートが以下に表示されます。` },
      submitting: { en: `Submitting request...`, ja: `送信中...` },
      to_try_again_press_the_button_below: { en: `To try again, press the button below.`,
        ja: `再度送信するには、レポートを取得ボタンをクリックしてください。` },
    },
    labels: {
      batteryStatus: { en: `Battery status`, ja: `Battery status` },
      ci: { en: `Cell identity`, ja: `Cell identity` },
      createdTime: { en: `Created`, ja: `Created` },
      data: { en: `Data`, ja: `Data` },
      eci: { en: `Cell identification (eci)`, ja: `Cell identification (eci)` },
      gsm: { en: `gsm (2G)`, ja: `gsm (2G)` },
      iccid: { en: `ICCID`, ja: `ICCID` },
      imei: { en: `IMEI`, ja: `IMEI` },
      imsi: { en: `IMSI`, ja: `IMSI` },
      lac: { en: `Location area code`, ja: `Location area code` },
      lastModifiedTime: { en: `Updated`, ja: `Updated` },
      location: { en: `Location`, ja: `Location` },
      lte: { en: `lte (LTE)`, ja: `lte (LTE)` },
      mcc: { en: `Mobile country code`, ja: `Mobile country code` },
      mnc: { en: `Mobile network code`, ja: `Mobile network code` },
      nmr: { en: `Network measurement results (nmr)`, ja: `Network measurement results (nmr)` },
      status: { en: `Status`, ja: `Status` },
      tac: { en: `Tracking area code (tci)`, ja: `Tracking area code (tci)` },
      timingAdvance: { en: `Timing advance`, ja: `Timing advance` },
      utran: { en: `utran (3G)`, ja: `utran (3G)` },
      value: { en: `Value`, ja: `Value` },
    },
    local_info: { en: `SIM Local Info`, ja: `SIM ローカル情報` },
  },
};
