export const translations = {
  harquest_datas: {
    columns: {
      chart_data: { en: `Chart data`, ja: `グラフ用データ` },
      content: { en: `Content`, ja: `データ` },
      content_type: { en: `Content Type`, ja: `Content Type` },
      decoded_data: { en: `Parsed data`, ja: `一次処理済みデータ` },
      resource_id: { en: `Resource Id`, ja: `リソース ID` },
      resource_type: { en: `Resource Type`, ja: `種類` },
      time: { en: `Time`, ja: `時刻` },
    },
  },
  HarquestData: {
    title: { en: `Quoracomm Harquest Data`, ja: `QUORACOMM Harquest Data` },
    actions: {
      delete: { en: `Delete`, ja: `削除` },
      download_chart_data: { en: `Chart data as JSON`, ja: `グラフ用データをダウンロード (JSON形式)` },
      download_chart_data_csv: { en: `Chart data as CSV`, ja: `グラフ用データをダウンロード (CSV形式)` },
      download_content: { en: `Content as JSON`, ja: `データをダウンロード (JSON形式)` },
    },
    download: {
      heading: { en: `Download Harquest Data`, ja: `Harquest Data ダウンロード` },
      success_download: { en: `Download completed.`, ja: `ダウンロードが完了しました。` },
      err_api_request_limit: {
        en: `You have reached the maximum number of calls to the API. Please wait a while and try again later.`,
        ja: `API リクエスト数の上限に到達しました。しばらく時間をおいてから、再開してください。`,
      },
      err_api_error: { en: `The download function is temporarily unavailable. We are sorry for the inconvenience.`,
        ja: `API への通信に失敗しました。しばらく時間をおいてから、もう一度お試しください。` },
      err_reach_size: {
        en:
          `This download has been automatically paused at 250MB and saved. If you wish to continue downloading the next 250MB please press the Resume button.`,
        ja:
          `ダウンロード容量が 250 MB を超えたため、ファイルへ保存しダウンロードを一時停止しました。続行する場合は再開ボタンを押してください。`,
      },
      err_others: { en: `Download failed. Please try again later.`,
        ja: `ダウンロードに失敗しました。しばらく時間をおいてから、もう一度お試しください。` },
      btn_download: { en: `Download`, ja: `ダウンロード` },
      btn_resume: { en: `Resume`, ja: `再開` },
      btn_cancel: { en: `Cancel`, ja: `キャンセル` },
      format: { en: `Download Format`, ja: `フォーマット` },
      time: { en: `Time Range`, ja: `期間` },
      target: { en: `Target Resource`, ja: `リソース` },
      downloading: { en: `Downloading in progress. Please do not close this window until it is complete.`,
        ja: `ダウンロード中です。完了するまで画面を閉じないでください。` },
      downloaded_size: { en: `downloaded`, ja: `ダウンロード済` },
      chargeWarning: {
        en:
          `Customers with the Extended Data Retention option will be charged if the amount of data exported during the month exceeds a certain amount. Please refer to <a href='https://developers.example.com/en/docs/reference/fees/#quoracomm-harquest-data' target='_blank'>the price information</a> on the website for the details.`,
        ja:
          `データ保持期間延長オプションを利用している場合、当月のデータエクスポート量に応じた追加料金が発生する可能性があります。ご注意ください。 詳しくは<a href='https://quoracomm.jp/services/harquest/' target="_blank" >こちら</a>`,
      },
      information: {
        en:
          `<p class="ds-text">Download all data within the current specified time range.</p><p class="ds-text">Select the resource for which you wish to download data and press the button to start.</p><p class="ds-text">Each time the downloaded data exceeds 250MB, it will be saved as a file.</p><p class="ds-text">In order to prevent unintentional downloading of large amounts of data, the download will be paused after every file save. If you wish to continue, please press the Resume button.</p>`,
        ja:
          `<p class="ds-text">期間内の全データをダウンロードします。</p><p class="ds-text">リソースとフォーマットを選び、ダウンロードボタンを押すと開始します。</p><p class="ds-text">ダウンロードしたデータは 250 MB ごとに分割されてファイルに保存されます。</p><p class="ds-text">意図しない大容量データダウンロードを防ぐため、ファイルが作成されるたびにダウンロードを一時停止します。続行する場合は再開ボタンを押してください。</p>`,
      },
      close: { en: `close`, ja: `閉じる` },
    },
    download_actions_menu: {
      title: { en: `Download`, ja: `ダウンロード` },
    },
    delete_action_button: {
      title: { en: `Delete`, ja: `削除` },
    },
    table_setting_action_button: {
      title: { en: `Setting`, ja: `設定` },
    },
  },
};
