export const translations = {
  serviceUsageHistoryPage: {
    title: { en: `Service usage history`, ja: `サービス使用履歴` },
    subText: { en: `Download Quoracomm platform service usage history in CSV format.`,
      ja: `QUORACOMM プラットフォームのサービス使用履歴を CSV でダウンロードできます。` },
    noticeText: {
      en:
        `<p>Each CSV file may take a minute to generate, depending on the number of devices, services, or options active during the given month.</p>`,
      ja:
        ` <p>それぞれのサービス使用履歴 CVS の詳細については、下記のドキュメントを参照してください。なお、特定の月にアクティブなデバイス、サービス、またはオプションの数によっては、各 CSV ファイルの生成に 1 分ほどかかる場合があります。</p> <li><a href="https://users.example.com/ja-jp/docs/air/stats-csv/" target="_blank">Air</a></li> <li><a href="https://users.example.com/ja-jp/docs/beam/stats-csv/" target="_blank">Beam</a></li> <li><a href="https://users.example.com/ja-jp/docs/junq/stats-csv/" target="_blank">Junq</a></li> <li><a href="https://users.example.com/ja-jp/docs/funnel/stats-csv/" target="_blank">Funnel</a></li> <li><a href="https://users.example.com/ja-jp/docs/harquest/stats-csv/" target="_blank">Harquest</a></li> `,
    },
    relocationWarning: {
      en:
        `<a href='/service_usage_history'>Download traffic stats as CSV <i class="ds-icon --tiny --icon-arrow-top-right"></i></a> has been moved to Service Usage History under Logs & Statistics.`,
      ja:
        `<a href='/service_usage_history'>サービス使用履歴<i class="ds-icon --tiny --icon-arrow-top-right"></i></a>は「メニュー」→「ログと統計」に移動しました。`,
    },
  },
  traffic_csv_download: {
    air: { en: `Air (Data Usage History)`, ja: `Air (データ使用履歴)` },
    beam: { en: `Beam`, ja: `Beam` },
    junq: { en: `Junq`, ja: `Junq` },
    funnel: { en: `Funnel`, ja: `Funnel` },
    daily_90days: { en: `Last 90 days (daily)`, ja: `過去 90 日間分（日ごと）` },
    download: { en: `Download`, ja: `ダウンロード` },
    harquest: { en: `Harquest Data`, ja: `Harquest Data` },
    header: { en: `Download service usage as CSV`, ja: `実績データを CSV 形式でダウンロード` },
    monthly_6months: { en: `Last 6 months (monthly)`, ja: `過去 6 ヶ月間分（月ごと）` },
    columnHeaders: {
      service: { en: `SERVICE`, ja: `サービス` },
      timeFrame: { en: `TIME FRAME`, ja: `時間枠` },
    },
  },
};
