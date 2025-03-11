export const translations = {
  group_params_harquest: {
    custom_timestamp: {
      description: {
        en:
          `Normally, the timestamp is the time when Quoracomm stores the data. Enable this setting to use to the timestamp obtained from the sent data itself.`,
        ja:
          `通常、タイムスタンプは QUORACOMM がデータを保存した時刻です。これを送信データから取得した時刻に変更します。`,
      },
      format: {
        example: { en: `Examples of valid timestamp`, ja: `タイムスタンプの例` },
        example_doc: { en: `Developer documentation`, ja: `QUORACOMM Users` },
        example_refer: { en: `For additional examples and details, please refer to our`,
          ja: `より詳しい情報はこちらを参照してください。` },
        'iso-8601': { en: `Date/Time (ISO-8601)`, ja: `ISO 8601 形式` },
        title: { en: `Format`, ja: `送信データの値の形式` },
        'unix-msec': { en: `Unix Time (milliseconds)`, ja: `UNIX 時間 (ミリ秒)` },
        'unix-sec': { en: `Unix Time (seconds)`, ja: `UNIX 時間 (秒)` },
      },
      title: { en: `Overwrite timestamp with payload data`, ja: `送信データの時刻をタイムスタンプに利用する` },
      type: {
        jsonpointer: { en: `JSON`, ja: `JSON` },
        title: { en: `Payload format`, ja: `送信データ形式` },
      },
      value: {
        title: {
          jsonpointer: { en: `JSON Pointer to timestamp`, ja: `時刻への JSON Pointer` },
        },
      },
    },
    encryption_enabled: { en: `Enable data encryption`, ja: `データを暗号化して保存する` },
    entrypoint_for_device_http: { en: `Device Entry point (HTTP)`, ja: `デバイス エントリポイント（HTTP）` },
    entrypoint_for_device_http_description_jp: {
      en: `https://api.example.com/v1/devices/\${deviceId}/publish?device_secret=\${deviceKey.secret}`,
      ja: `https://api.example.com/v1/devices/\${deviceId}/publish?device_secret=\${deviceKey.secret}`,
    },
    entrypoint_for_device_http_description_global: {
      en: `https://g.api.example.com/v1/devices/\${deviceId}/publish?device_secret=\${deviceKey.secret}`,
      ja: `https://g.api.example.com/v1/devices/\${deviceId}/publish?device_secret=\${deviceKey.secret}`,
    },
    entrypoint_for_http: { en: `Entry point (HTTP)`, ja: `エントリポイント（HTTP）` },
    entrypoint_for_http_description: { en: `http://harquest.example.com`, ja: `http://harquest.example.com` },
    entrypoint_for_sms: { en: `Entry point (SMS)`, ja: `エントリポイント（SMS）` },
    entrypoint_for_sms_description: { en: `901031`, ja: `901031` },
    entrypoint_for_tcp_or_udp: { en: `Entry point (TCP or UDP)`, ja: `エントリポイント（TCP もしくは UDP）` },
    entrypoint_for_tcp_or_udp_description: { en: `harquest.example.com:8514`, ja: `harquest.example.com:8514` },
    entrypoint_for_ussd: { en: `Entry point (USSD)`, ja: `エントリポイント（USSD）` },
    entrypoint_for_ussd_description: { en: `*901031*{value}#`, ja: `*901031*{value}#` },
    modals: {
      confirm: {
        cancel: { en: `Cancel`, ja: `キャンセル` },
        confirm: { en: `Confirm`, ja: `確認しました` },
        text: {
          en:
            `Enabling Quoracomm Harquest Data will generate additional costs according to the number of SIMs / devices in this group. Please refer to <a href='https://www.example.com/pricing/' target='_blank'>the price information</a> on the website for the details.`,
          ja:
            `QUORACOMM Harquest Data をご利用の場合、このグループに所属する SIM の枚数やデバイスの台数に応じて<b>追加費用</b>が発生します。詳しくは弊社 Web サイトの<a href='https://quoracomm.jp/services/harquest/#pricing' target='_blank'>料金ページ</a>をご確認ください。`,
        },
        title: { en: `Confirmation: Quoracomm Harquest Data is enabled`,
          ja: `QUORACOMM Harquest Data が有効になっています` },
      },
    },
    save: { en: `Save`, ja: `保存` },
    save_success: { en: `Successfully updated`, ja: `保存しました` },
  },
};
