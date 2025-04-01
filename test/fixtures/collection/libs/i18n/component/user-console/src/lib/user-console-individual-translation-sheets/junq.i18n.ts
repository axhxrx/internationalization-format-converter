export const translations = {
  junq: {
    contentType: { en: `Content type`, ja: `送信データ形式` },
    createNewCredential: { en: `Add new credentials`, ja: `認証情報を新規作成する` },
    credentials: { en: `Credentials`, ja: `認証情報` },
    credentialsSetId: { en: `Credential set ID`, ja: `認証情報 ID` },
    entryPointTcpOrUdp: { en: `Entry point (TCP or UDP)`, ja: `エントリポイント（TCP もしくは UDP）` },
    entryPointTcpOrUdpDescription: { en: `junq.example.com:23080`, ja: `junq.example.com:23080` },
    entryPointHttp: { en: `Entry point (HTTP)`, ja: `エントリポイント（HTTP）` },
    entryPointHttpDescription: { en: `http://junq.example.com`, ja: `http://junq.example.com` },
    entryPointSms: { en: `Entry point (SMS)`, ja: `エントリポイント (SMS)` },
    entryPointSmsDescription: { en: `901031`, ja: `901031` },
    entryPointUssd: { en: `Entry point (USSD)`, ja: `エントリポイント (USSD)` },
    entryPointUssdDescription: { en: `*901031*{value}#`, ja: `*901031*{value}#` },
    functionARN: { en: `Function ARN`, ja: `関数の ARN` },
    functionURL: { en: `Function URL`, ja: `関数の URL` },
    loading: { en: `Loading Junq configuration...`, ja: `QUORACOMM Junq 設定をロード中...` },
    save: { en: `Save`, ja: `保存` },
    savingConfig: { en: `Saving Quoracomm Junq configuration...`, ja: `QUORACOMM Junq 設定を保存中...` },
    savedConfigSuccessfully: { en: `Quoracomm Junq configuration saved.`, ja: `QUORACOMM Junq 設定を保存しました` },
    deletedConfigSuccessfully: { en: `Quoracomm Junq configuration deleted.`, ja: `QUORACOMM Junq 設定を削除しました` },
    service: { en: `Service`, ja: `サービス` },
    quoracommHostedJunq: { en: `Set Credential set ID to blank`, ja: `認証情報を指定しない` },
    quoracommHostedJunqHint: {
      en: `Credential set ID is not necessary if you want to use AWS Lambda Functions provided by Quoracomm.`,
      ja: `QUORACOMM が提供している AWS Lambda Functions を利用する場合、認証情報は不要です。`,
    },
    invalidFunctionARN: { en: `Invalid function ARN`, ja: `関数の ARN が正しくありません` },
    invalidFunctionURL: { en: `Invalid function URL`, ja: `関数の URL が正しくありません` },
    JunqContentType: {
      unspecified: { en: `(not specified)`, ja: `(指定しない)` },
      json: { en: `JSON`, ja: `JSON` },
      text: { en: `text`, ja: `テキスト` },
      binary: { en: `binary`, ja: `バイナリ` },
    },
    credentials_id_help: {
      en:
        `By including #{imsi} and #{imei}, you can use the credential set corresponding to the IMSI and IMEI of the connected device. <a href="https://developers.example.com/en/docs/junq/configuration/" target="_blank">See here for more details</a>`,
      ja:
        `#{imsi}, #{imei} を含める事で、接続した端末の IMSI, IMEI に対応した認証情報を利用する事ができます。詳しくは<a href="https://users.example.com/ja-jp/docs/beam/multi-credentials/" target="_blank">こちら</a>`,
    },
  },
};
