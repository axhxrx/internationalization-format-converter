export const translations = {
  group_params_harquest_files: {
    assumed_role_id: { en: `Assumed Role`, ja: `ロール` },
    create_role_button_label: { en: `Create Role`, ja: `ロール作成` },
    default_path: { en: `Default Path`, ja: `デフォルトパス` },
    default_path_description: {
      en:
        `When you upload a file to a path without specifying a file name, a customisable default file name is created. Placeholder variables are available (:imsi and :time)`,
      ja:
        `セルラー経由でルートにファイル名なしでアップロードした場合、自動的にこのパスに保存されます。 :imsi と :time が placeholder として利用できます。`,
    },
    entrypoint_for_api: { en: `Entrypoint (API)`, ja: `エントリポイント（API）` },
    entrypoint_for_api_description: { en: `https://api.example.com/v1/files/private/`,
      ja: `https://api.example.com/v1/files/private/` },
    entrypoint_for_cellular: { en: `Entrypoint (Cellular)`, ja: `エントリポイント（セルラー）` },
    entrypoint_for_cellular_description: { en: `http://harquest-files.example.com`,
      ja: `http://harquest-files.example.com` },
    log_file_uploading_event_to_harquest: {
      description: { en: `When a file is uploaded to Harquest Files, save its file path and datetime to Harquest Data`,
        ja: `Harquest Files にファイルがアップロードされたときに、Harquest Data にそのパスを保存します` },
      label: { en: `Log file uploading event to Harquest Data`, ja: `Harquest Data 連携` },
      path_patterns: { en: `Path patterns`, ja: `連携対象のファイルパス` },
      path_patterns_description: { en: `Regular expressions can be used.`, ja: `正規表現を利用できます。` },
    },
    modals: {
      confirm: {
        cancel: { en: `Cancel`, ja: `Cancel` },
        confirm: { en: `OK`, ja: `OK` },
        text: {
          en:
            `Using Quoracomm Harquest Files will generate additional costs relative to the traffic used uploading / downloading files. Please refer to the <a href='https://developers.example.com/en/docs/reference/fees/#quoracomm-harquest-files' target='_blank'>price information page</a> for details.`,
          ja:
            `QUORACOMM Harquest Files をご利用いただく場合、アップロードやダウンロードに応じて<b>追加費用</b>が発生します。詳しくは弊社 Web サイトの<a href='https://quoracomm.jp/services/harquest/#pricing_files' target='_blank'>料金ページ</a>をご確認ください。`,
        },
        title: { en: `Please confirm Harquest Files pricing`, ja: `Harquest Files の利用料金をご確認ください` },
      },
    },
    save: { en: `Save`, ja: `保存` },
    save_success: { en: `Saved successfully`, ja: `保存しました` },
    unset_role: { en: `Unset`, ja: `ロールなし` },
  },
};
