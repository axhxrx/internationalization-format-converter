export const translations = {
  LogViewerRequestDownloadLinkComponent: {
    header: { en: `Get download link for logs data`, ja: `ログデータのダウンロード用リンクを取得する` },
    description: { en: `Download your account's API Audit Log data for a specific time range`,
      ja: `指定した期間の監査ログをダウンロードできます。` },
    helpText1: {
      en:
        `<p>The maximum span of time that can be requested is 31 days. If you require data for a longer range of time, please make multiple requests (for example, one month per request).</p>
`,
      ja:
        `<p>指定可能な期間は最大で 31 日です。それ以上の期間の監査ログが必要な場合は複数回に分けてダウンロードしてください。</p>
`,
    },
    notice1: {
      en:
        `<p>After the data has been processed, and the log data download is ready, the download link will be sent to the primary email address of your Quoracomm account.</p>
`,
      ja:
        `<p>監査ログのダウンロードの準備が整うと、QUORACOMM のルートアカウントに登録しているメールアドレス宛にダウンロードリンクが送信されます。</p>
`,
    },
    button: {
      request: { en: `Get Link`, ja: `リンクを取得` },
    },
    label: {
      from: { en: `Start date`, ja: `開始日` },
      to: { en: `End date`, ja: `終了日` },
    },
  },
};
