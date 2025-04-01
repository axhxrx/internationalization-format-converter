export const translations = {
  send_downlink_message: {
    cancel: { en: `Cancel`, ja: `キャンセル` },
    confirm: { en: `Send downlink message`, ja: `送信` },
    data: { en: `Data`, ja: `データ` },
    lora: {
      device_id: { en: `Device ID`, ja: `デバイス ID` },
      f_port: { en: `fPort (optional)`, ja: `fPort (任意)` },
      tooltip_for_data: {
        en:
          `Binary data encoded as a hexadecimal string. Maximum length of original binary data is 11 octets (22 case-insensitive characters when encoded as a hexadecimal string).`,
        ja:
          `16進数でエンコードされたバイナリデータの文字列を入力してください。バイナリデータの最大サイズは11 octets（16進数エンコードされた文字列で22文字）で、文字列は大文字・小文字問わず送信できます。`,
      },
      tooltip_for_f_port: {
        en:
          `Optional port field defined in LoRaWAN specification. If it not given, it defaults to 2. Applications may expect the specific port number and users may want to specify fPort to that port number. 0 is allowed but it is intended to be used for indicating the payload contains MAC commands only. Usually it is set in the range of 1~223.`,
        ja:
          `LoRaWANの仕様により規定された任意のポート番号。与えられなかった場合デフォルト値である2が設定されます。アプリケーションによっては特定ポート番号で待ち受ける場合があり、その場合ユーザはそのポート番号を指定する必要があります。0は許可されていますが、ペイロードがMACコマンドの時にのみ使用されます。通常1から223までの値が用いられます。`,
      },
    },
    squignox: {
      device_id: { en: `Squignox device ID`, ja: `Squignox デバイス ID` },
      tooltip_for_data: {
        en:
          `Binary data encoded as a hexadecimal string. The length of the original binary data must be 8 octets (16 case-insensitive characters when encoded as a hexadecimal string).`,
        ja:
          `16進数でエンコードされたバイナリデータの文字列を入力してください。バイナリデータのサイズは8 octets（16進数エンコードされた文字列で16文字）で、文字列は大文字・小文字問わず送信できます。`,
      },
    },
    title: { en: `Send downlink message`, ja: `ダウンリンク通信` },
  },
};
