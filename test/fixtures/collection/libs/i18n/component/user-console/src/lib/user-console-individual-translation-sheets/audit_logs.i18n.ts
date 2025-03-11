export const translations = {
  audit_logs: {
    add_resource: { en: `Add resource`, ja: `リソース追加` },
    columns: {
      created_at: { en: `Created at`, ja: `日時` },
      imsi: { en: `IMSI`, ja: `IMSI` },
      type: { en: `Type`, ja: `イベントタイプ` },
      direction: { en: `Direction`, ja: `詳細` },
    },
    manage_subscription: {
      subscription_guide: { en: `You don't have a subscription to Quapcha audit logs.`,
        ja: `QUORACOMM Quapcha 監査ログは24時間保存されます。` },
      unsubscription_guide: { en: `You're subscribed to Quapcha audit logs.`,
        ja: `QUORACOMM Quapcha の監査ログオプションが有効になっています。` },
      subscribe: { en: `Subscribe`, ja: `保存期間を延長する` },
      unsubscribe: { en: `Unsubscribe`, ja: `無効にする` },
      subscribed: { en: `Quapcha audit logs subscription has been started.`,
        ja: `Quapcha 監査ログオプションを有効にしました。` },
      unsubscribed: { en: `Quapcha audit logs subscription has been stopped.`,
        ja: `Quapcha 監査ログオプションを無効にしました。` },
    },
    table: {
      filter: { en: `Filter`, ja: `フィルター` },
      no_data: { en: `Audit logs for Quoracomm Quapcha not found.`, ja: `QUORACOMM Quapcha の監査ログがありません` },
      description: {
        en:
          `If you’ve tried to access IoT devices remotely, you know it’s not always as easy as it should be. Quoracomm Quapcha lets you access devices remotely. On demand. Without setting up relay servers, installing agents on devices, or risking security with a fixed public IP address.`,
        ja:
          `QUORACOMM Quapcha は、QUORACOMM Air for セルラーの SIM (IoT SIM) を使用したデバイスへ簡単にセキュアにリモートアクセスすることができます。`,
      },
    },
    query: {
      resource_id: { en: `Resource ID`, ja: `リソース ID` },
      resource_id_placeholder: { en: `Resource ID`, ja: `リソース ID` },
      resource_id_placeholder_Subscriber: { en: `IMSI`, ja: `IMSI` },
      search: { en: `Search`, ja: `検索` },
      time: { en: `Time`, ja: `時間` },
    },
    values: {
      type: {
        ACCESS: { en: `ACCESS`, ja: `ACCESS` },
        CLOSED: { en: `CLOSED`, ja: `CLOSED` },
        CONNECTED: { en: `CONNECTED`, ja: `CONNECTED` },
        DENIED: { en: `DENIED`, ja: `DENIED` },
        REFUSED: { en: `REFUSED`, ja: `REFUSED` },
        CREATED: { en: `CREATED`, ja: `CREATED` },
        DELETED: { en: `DELETED`, ja: `DELETED` },
        EXPIRED: { en: `EXPIRED`, ja: `EXPIRED` },
      },
      service: {
        quapcha: { en: `Quoracomm Quapcha`, ja: `QUORACOMM Quapcha` },
      },
    },
  },
};
