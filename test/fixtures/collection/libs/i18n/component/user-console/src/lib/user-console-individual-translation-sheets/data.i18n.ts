export const translations = {
  data: {
    actions: {
      delete: { en: `Delete`, ja: `削除` },
      download: { en: `Download`, ja: `ダウンロード` },
      download_all: { en: `Download all as JSON`, ja: `すべてダウンロード (JSON形式)` },
      download_chart_data: { en: `Download chart data as JSON`, ja: `グラフ用データをダウンロード (JSON形式)` },
      download_chart_data_csv: { en: `Download chart data as CSV`, ja: `グラフ用データをダウンロード (CSV形式)` },
      download_content: { en: `Download content as JSON`, ja: `データをダウンロード (JSON形式)` },
      download_decoded_data: { en: `Download parsed data as JSON`, ja: `一次処理済みデータをダウンロード (JSON形式)` },
    },
    add_resource: { en: `Add resource`, ja: `リソース追加` },
    auto_refresh: { en: `Auto refresh ({{interval}} sec)`, ja: `自動更新（{{interval}}秒）` },
    chart: {
      y_max_label: { en: `Max`, ja: `最大値` },
      y_min_label: { en: `Min`, ja: `最小値` },
      y_range_automatic_adjustment: { en: `Auto`, ja: `自動で調整` },
    },
    columns: {
      chart_data: { en: `Chart data`, ja: `グラフ用データ` },
      content: { en: `Content`, ja: `データ` },
      content_type: { en: `Content Type`, ja: `Content Type` },
      decoded_data: { en: `Parsed data`, ja: `一次処理済みデータ` },
      resource_id: { en: `Resource Id`, ja: `リソース ID` },
      resource_type: { en: `Resource Type`, ja: `種類` },
      time: { en: `Time`, ja: `時刻` },
    },
    contract: {
      'action-modal': {
        subscribe: {
          body: { en: `<p>Data will be automatically deleted after the data retention period has expired.
You can extend the data retention period from the default of 40 days to about 2 years (731 days) by activating this option.</p>

<p>Extending the data retention period of Harquest Data will incur additional fees. Please refer to <a href='https://www.example.com/pricing/' target='_blank'>the Harquest Data pricing information</a> for details. </p>
<p>Note that it's not possible to change the retention period of saved data. You will need to extend the retention period in advance before saving tha data. </p>
`,
            ja:
              `<p>データ保持期間を過ぎたデータは自動的に削除されます。データ保持期間延長オプションを有効化することで、データ保存期間をデフォルトの40日から約2年（731日）に延長することができます。</p>
<p>このオプションを有効にすると追加費用が発生します。詳しくは弊社 Web サイトの<a href="https://quoracomm.jp/services/harquest/#pricing" target="_blank">料金ページ</a>をご確認ください。</p>
<p>保存済みのデータの保持期間を変更することはできないため、データを保存する前にあらかじめ保持期間を延長しておく必要があります。<p>
` },
          cancel: { en: `Cancel`, ja: `キャンセル` },
          confirm: { en: `Subscribe`, ja: `有効化する` },
          successMessage: { en: `The extended retention period of Harquest Data has been enabled.`,
            ja: `データ保持期間延長オプションが有効になりました` },
          title: { en: `Subscribe to Harquest Data Extended Retention Option?`,
            ja: `Harquest Data のデータ保持期間延長オプションを有効にしますか？` },
        },
        unsubscribe: {
          body: {
            en:
              `<p>Disabling this option will shrink the retention period from approximately 2 years (731 days) to the default of 40 days.</p>
<p>Note that disabling this option does not affect the retention of the stored data.</p>
`,
            ja:
              `<p>Harquest Data のデータ保持期間延長オプションを無効にすると、データ保持期間が約 2 年（731日）から、デフォルトの 40 日に変更されます。</p>
<p>なお、保存済みのデータの保持期間が変更されることはありません。</p>
`,
          },
          cancel: { en: `Cancel`, ja: `キャンセル` },
          confirm: { en: `Unsubscribe`, ja: `無効化する` },
          successMessage: { en: `The extended retention period of Harquest Data has been disabled.`,
            ja: `データ保持期間延長オプションが無効になりました` },
          title: { en: `Unsubscribe to Harquest Data Extended Retention option?`,
            ja: `Harquest Data のデータ保持期間延長オプションを無効にしますか？` },
        },
      },
      notice: {
        'action-link': {
          custom: {
            en: '',
            ja: '',
          },
          extended: { en: `Unsubscribe Harquest Data Extended Data Retention Option`,
            ja: `データ保持期間延長オプションを無効化する。` },
          normal: { en: `Subscribe Harquest Data Extended Retention Option`,
            ja: `データ保持期間延長オプションを有効化する。` },
        },
        description: {
          custom: { en: `Data retention period is {{retentionPeriod}} days.`,
            ja: `データ保持期間は {{retentionPeriod}}日です。` },
          extended: {
            en:
              `Data retention period is {{retentionPeriod}} days. You're subscribed to Harquest Data Extended Retention Option.`,
            ja: `データ保持期間は {{retentionPeriod}}日です。データ保持期間延長オプションが有効になっています。`,
          },
          normal: {
            en:
              `Data retention period is {{retentionPeriod}} days. You're not subscribed to Harquest Data Extended Retention Option.`,
            ja: `データ保持期間は {{retentionPeriod}}日です。データ保持期間延長オプションは無効になっています。`,
          },
        },
      },
    },
    data_download_link_modal: {
      close: { en: `Close`, ja: `閉じる` },
      download: { en: `Click to download`, ja: `クリックして保存` },
      title: { en: `Download`, ja: `データダウンロード` },
    },
    delete_data_action_modal: {
      body: { en: `This action can't be undone. Are you sure you want to delete?`,
        ja: `この操作は取り消せません。選択したデータを削除しますか？` },
      cancel: { en: `Cancel`, ja: `キャンセル` },
      confirm: { en: `Delete`, ja: `削除する` },
      error: { en: `Unable to delete {{failure}} of {{all}} records`,
        ja: `{{all}}件中、{{failure}}件のデータ削除に失敗しました。` },
      succeed: { en: `Successfully deleted {{success}} of {{all}} records`,
        ja: `{{all}}件中、{{success}}件のデータを削除しました` },
      title: { en: `Delete data`, ja: `データの削除` },
    },
    global_options: {
      applied: { en: `Settings are saved in this browser.`, ja: `設定をブラウザに保存しました` },
      apply: { en: `Apply`, ja: `適用` },
      heading: { en: `Graph settings`, ja: `パネル描画設定` },
      ignore_keys: {
        description: {
          en:
            `Keys specified here will ignore when drawing graph. You may specify several keys with comma. This setting saves in your browser and applies globally.`,
          ja:
            `ここに指定された項目はパネルに描画されなくなります。グラフ用データには反映されます。複数のキーを指定したい場合はカンマで区切ってください。この設定はブラウザに保存され、あらゆるリソースに適用されます。`,
        },
        label: { en: `Keys to ignore`, ja: `グラフに描画しない項目` },
      },
      image_preview: {
        apply: { en: `Apply`, ja: `適用` },
        domain: {
          description: {
            en: '',
            ja: '',
          },
          label: { en: `Image domain for image preview`, ja: `画像プレビューに利用するドメイン` },
        },
        key_name: {
          description: {
            en: '',
            ja: '',
          },
          label: { en: `The key for image url`, ja: `画像プレビューに利用するキー名` },
        },
      },
      latitude: {
        description: { en: `Specify a key to use as latitude.`,
          ja:
            `マップで座標を描画する際に、緯度として利用する属性を指定します。指定がない場合、Harquestによって自動的に選ばれます。` },
        label: { en: `Latitude key`, ja: `緯度として利用する属性` },
        placeholder: { en: `latitude`, ja: `latitude` },
      },
      longitude: {
        description: { en: `Specify a key to use as longitude.`,
          ja:
            `マップで座標を描画する際に、経度として利用する属性を指定します。指定がない場合、Harquestによって自動的に選ばれます。` },
        label: { en: `Longitude key`, ja: `経度として利用する属性` },
        placeholder: { en: `longitude`, ja: `longitude` },
      },
    },
    harquest_contract: {
      heading: { en: `Harquest Data retention`, ja: `データ保持期間` },
    },
    map: {
      data_format: { en: `Data Format`, ja: `データフォーマット` },
    },
    no_preview_data: { en: `Preview selected data in graph.`,
      ja: `グラフの項目を選択すると、選択しているデータの内容が表示されます` },
    pager: {
      next: { en: `Next`, ja: `次へ` },
      previous: { en: `Previous`, ja: `前へ` },
    },
    preview: {
      selected_data: { en: `Selected data`, ja: `選択中のデータ` },
    },
    query: {
      resource_id: { en: `Resource ID`, ja: `リソース ID` },
      resource_id_placeholder: { en: `Resource ID`, ja: `リソース ID` },
      resource_id_placeholder_Device: { en: `Device ID`, ja: `デバイス ID` },
      resource_id_placeholder_LoraDevice: { en: `LoRaWAN device ID`, ja: `LoRaWAN デバイス ID` },
      resource_id_placeholder_SquignoxDevice: { en: `Squignox Device ID`, ja: `Squignox デバイス ID` },
      resource_id_placeholder_Subscriber: { en: `IMSI`, ja: `IMSI` },
      search: { en: `Search`, ja: `検索` },
      time: { en: `Time`, ja: `時間` },
    },
    range: {
      custom: { en: `Custom range`, ja: `期間指定` },
      latest: { en: `Latest`, ja: `最新` },
    },
    record_count: { en: `items`, ja: `件` },
    resource_type_options: {
      Device: { en: `Device`, ja: `デバイス` },
      LoraDevice: { en: `LoRaWAN device`, ja: `LoRaWAN デバイス` },
      SquignoxDevice: { en: `Squignox device`, ja: `Squignox デバイス` },
      Subscriber: { en: `SIM`, ja: `SIM` },
    },
    tab: {
      data_retention: { en: `Data retention period ({{retentionPeriod}} Days)`,
        ja: `データ保持期間 ({{retentionPeriod}}日)` },
      data_table: { en: `Data`, ja: `データ` },
      panel_option: { en: `Display settings`, ja: `パネル描画設定` },
      preview: { en: `Preview`, ja: `プレビュー` },
    },
  },
};
