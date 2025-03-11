export const translations = {
  chstatus_multi: {
    cancel: { en: `Cancel`, ja: `キャンセル` },
    do_update: { en: `Update`, ja: `ステータスを変更する` },
    header: { en: `Change status of the SIMs`, ja: `ステータス変更` },
    imsi: { en: `IMSI`, ja: `IMSI` },
    new_status: { en: `New status`, ja: `変更後のステータス` },
    suspended_to_active_transition_warning: {
      g: {
        en:
          `NOTE: Changing these SIMs from "suspended" to "active" will re-enable using the SIMs, and your account will be charged the normal basic fee for each SIM.  Any applicable discounted basic fee for SIMs in the "suspended" state will no longer apply.`,
        ja:
          `これらのSIMの状態を「利用中断中」から「使用中」に変更すると、通信サービスが再度ご利用いただけるようになります。同時に「利用中断中」のSIMに適用されていた割引料金が適用されなくなり、通常の基本使用料がかかるようになります。`,
      },
      jp: {
        en:
          `NOTE: Changing a SIM from "suspended" to "active" will re-enable using the SIM, and your account will be charged the basic fee of JPY 10 per day.`,
        ja: `注意：SIMを「利用中断中」から「使用中」に変更すると、基本料金が1日あたり10円になります。よろしいですか？`,
      },
      'lmnop-jp': {
        en:
          `NOTE: Changing a SIM from "suspended" to "active" will re-enable using the SIM, and your account will be charged the basic fee of JPY 10 per day.`,
        ja: `注意：SIMを「利用中断中」から「使用中」に変更すると、基本料金が1日あたり10円になります。よろしいですか？`,
      },
    },
  },
};
