export const translations = {
  sc_beam_params_signature: {
    create_new_credentials_set: { en: `Create a new Credential set`, ja: `認証情報を新規作成する` },
    direct_input_warning: {
      en:
        `" Direct Input " is now deprecated. Choose " Select from Credential sets " in the select box above, and then create a credential set or choose your credential set.`,
      ja: `直接入力は非推奨となっています。「認証情報ストアから選択」を選び、認証情報を新規作成するか選択してください`,
    },
    psk: { en: `Pre-Shared Key`, ja: `事前共有鍵` },
    psk_description: { en: `Alphanumeric characters are allowed. Max length is 64.`,
      ja: `署名するための鍵です。64文字までの英数字を設定してください` },
    signature: { en: `Signature header`, ja: `署名ヘッダ付与` },
    signature_description: {
      HTTP: {
        en:
          `appends x-quoracomm-signature: \${signature} to each request. This option requires that IMSI, SIMID, MSISDN or IMEI header is enabled.`,
        ja:
          `リクエストに x-quoracomm-signature: \${signature} を追加します。IMSI, SIM ID, MSISDN, IMEI ヘッダのうち、少なくとも１つが有効になっている必要があります。`,
      },
      InventoryToHTTP: {
        en:
          `appends x-quoracomm-signature: \${signature} to each request. This option requires that device ID header is enabled.`,
        ja:
          `リクエストに x-quoracomm-signature: \${signature} を追加します 。デバイスID ヘッダ付与が有効になっている必要があります。`,
      },
      LoRaToHTTP: {
        en:
          `appends x-quoracomm-signature: \${signature} to each request.  This option requires that device ID header is enabled.`,
        ja:
          `リクエストに x-quoracomm-signature: \${signature}を追加します 。デバイスID ヘッダ付与が有効になっている必要があります。`,
      },
      SatelliteToHTTP: {
        en:
          `appends x-quoracomm-signature: \${signature} to each request.  This option requires that device ID header is enabled.`,
        ja:
          `リクエストに x-quoracomm-signature: \${signature}を追加します 。デバイスID ヘッダ付与が有効になっている必要があります。`,
      },
      SquignoxToHTTP: {
        en:
          `appends x-quoracomm-signature: \${signature} to each request. This option requires that device ID header is enabled.`,
        ja:
          `リクエストに x-quoracomm-signature: \${signature}を追加します 。デバイスID ヘッダ付与が有効になっている必要があります。`,
      },
      SMSToHTTP: {
        en:
          `appends x-quoracomm-signature: \${signature} to each request.  This option requires that the IMSI header option is enabled.`,
        ja:
          `リクエストに x-quoracomm-signature: \${signature}を追加します 。IMSI, SIM ID, MSISDN ヘッダのうち、少なくとも１つが有効になっている必要があります。`,
      },
      TCPToHTTP: {
        en:
          `appends x-quoracomm-signature: \${signature} to each request.  This option requires that IMSI, SIMID, MSISDN or IMEI header is enabled.`,
        ja:
          `リクエストに x-quoracomm-signature: \${signature}を追加します 。IMSI, SIM ID, MSISDN, IMEI ヘッダ付与のうち、少なくとも１つが有効になっている必要があります。`,
      },
      TCPToTCP: {
        en:
          `appends imei=<IMEI> imsi=<IMSI> timestamp=<timestamp>;signature=<signature> version=20151001 as the first line. This option requires that IMSI, SIMID, MSISDN or IMEI header option is enabled.`,
        ja:
          `imei=&lt;IMEI&gt; imsi=&lt;IMSI&gt; timestamp=&lt;timestamp&gt;;signature=&lt;signature&gt; version=20151001 を文字列形式で最初の行として送信します（IMSI と IMEI が有効になっている場合）。IMSI, SIM ID, MSISDN ヘッダ付与のうち、少なくとも１つが有効になっている必要があります。`,
      },
      UDPToHTTP: {
        en:
          `appends x-quoracomm-signature: \${signature} to each request.  This option requires that IMSI, SIMID, MSISDN or IMEI header is enabled.`,
        ja:
          `リクエストに x-quoracomm-signature: \${signature} を追加します 。IMSI, SIM ID, MSISDN, IMEI ヘッダ付与のうち、少なくとも１つが有効になっている必要があります。`,
      },
      USSDToHTTP: {
        en:
          `appends x-quoracomm-signature: \${signature} to each request.  This option requires that IMSI, SIMID or MSISDN header option is enabled.`,
        ja:
          `リクエストに x-quoracomm-signature: \${signature} を追加します 。IMSI, SIM ID, MSISDN ヘッダ付与のうち、少なくとも１つが有効になっている必要があります。`,
      },
      Website: {
        en:
          `appends x-quoracomm-signature: \${signature} to each request.  This option requires that IMSI, SIMID, MSISDN or IMEI header is enabled.`,
        ja:
          `リクエストに x-quoracomm-signature: \${signature} を追加します 。IMSI, SIM ID, MSISDN, IMEI ヘッダ付与のうち、少なくとも１つが有効になっている必要があります。`,
      },
    },
    tab: {
      credentials_direct_input: { en: `Direct Input (Deprecated)`, ja: `直接入力（非推奨）` },
      credentials_set: { en: `Select from Credential sets`, ja: `認証情報ストアから選択` },
    },
  },
};
