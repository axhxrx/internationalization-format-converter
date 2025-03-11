export const translations = {
  group_params_orbit: {
    'code-srn': { en: `Code SRN`, ja: `CODE SRN` },
    'code-srn-find': { en: `Find`, ja: `選択` },
    'code-srn-validation-error': { en: `Invalid SRN format`, ja: `SRN のフォーマットが不正です` },
    content_type: { en: `Content Type`, ja: `Content Type` },
    direction: { en: `Direction`, ja: `Direction` },
    save: { en: `Save`, ja: `保存` },
    save_success: { en: `Saved successfully.`, ja: `QUORACOMM Orbit 設定を保存しました` },
    delete_success: { en: `Deleted successfully.`, ja: `QUORACOMM Orbit 設定を削除しました` },
    use_metadata: { en: `Use metadata`, ja: `メタデータ` },
    use_location: { en: `Use location`, ja: `簡易位置測位機能` },
    tooltip: {
      use_metadata: {
        en:
          `Include resource metadata in the payload of the Quoralet request. This setting takes priority over the Subscriber setting.`,
        ja:
          `メタデータを Quoralet に連携します。Subsciber のメタデータ連携有効設定よりも、こちらの設定が優先されます。`,
      },
      use_location: { en: `Include resource location data in the payload of the Quoralet request.`,
        ja:
          `簡易位置測位機能が有効になっていて、簡易位置測位機能に対応している Subscriber からのリクエストである場合に、位置情報を Quoralet に連携します。` },
    },
    values: {
      direction: {
        uplink: { en: `Uplink`, ja: `Uplink` },
        downlink: { en: `Downlink`, ja: `Downlink` },
      },
      content_type: {
        text_plain: { en: `text/plain`, ja: `text/plain` },
        application_json: { en: `application/json`, ja: `application/json` },
        application_octet_stream: { en: `application/octet-stream`, ja: `application/octet-stream` },
      },
    },
  },
};
