export const translations = {
  subscriber_session_log: {
    area_code: { en: `Area code`, ja: `エリアコード` },
    cell_id: { en: `Cell ID`, ja: `セル ID` },
    country: { en: `Country`, ja: `国・地域` },
    description: {
      en:
        `Only session logs from the past 32 days are available. <a href='https://developers.example.com/en/docs/air/subscriber-status/#viewing-detailed-session-status' target='_blank' >Learn more.</a>`,
      ja:
        `過去 32 日間のセッションログのみが表示されます。セッション履歴を確認する機能については、<a href='https://users.example.com/ja-jp/docs/air/view-stats/#%e3%82%bb%e3%83%83%e3%82%b7%e3%83%a7%e3%83%b3%e8%a9%b3%e7%b4%b0%e3%81%ae%e7%a2%ba%e8%aa%8d' target='_blank'>こちら</a>を参照してください。`,
    },
    event: { en: `Event`, ja: `イベント` },
    imei: { en: `IMEI`, ja: `IMEI` },
    link: { en: `View on OpenCellID`, ja: `OpenCellID で確認` },
    loading: { en: `Loading ...`, ja: `読み込み中 ...` },
    location_of_cell_tower: { en: `Location of cell tower`, ja: `基地局の位置情報` },
    mcc: { en: `MCC`, ja: `MCC` },
    mnc: { en: `MNC`, ja: `MNC` },
    next_page: { en: `more...`, ja: `もっと見る` },
    not_found: {
      en:
        `No session logs in the past 32 days. <a href='https://developers.example.com/en/docs/air/subscriber-status/#viewing-detailed-session-status' target='_blank' >Learn more</a> about session logs.`,
      ja:
        `過去 32 日間のセッションログはありません。セッション履歴を確認する機能については、<a href='https://users.example.com/ja-jp/docs/air/view-stats/#%e3%82%bb%e3%83%83%e3%82%b7%e3%83%a7%e3%83%b3%e8%a9%b3%e7%b4%b0%e3%81%ae%e7%a2%ba%e8%aa%8d' target='_blank'>こちら</a>を参照してください。`,
    },
    operator: { en: `Operator`, ja: `キャリア` },
    radio_type: { en: `Radio type`, ja: `通信方式` },
    subscription: { en: `Subscription`, ja: `サブスクリプション` },
    time: { en: `Time`, ja: `時刻` },
    title: { en: `Session Logs`, ja: `セッション履歴` },
    tooltip: {
      event: {
        en:
          `Created: The device initiated a new data session<br>Modified: One of the data session parameters was updated (ex: roamed to new cell tower)<br> Deleted: The device terminated the current data session`,
        ja:
          `Created: デバイスが新規データセッションを開始した<br>Modified: データセッションのパラメータが更新された（例: 別の基地局に移動した場合）<br>Deleted: デバイスがデータセッションを破棄した`,
      },
    },
    vpg: { en: `VPG`, ja: `VPG` },
  },
};
