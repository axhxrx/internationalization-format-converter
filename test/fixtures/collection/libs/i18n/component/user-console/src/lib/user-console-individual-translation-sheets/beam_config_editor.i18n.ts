export const translations = {
  beam_config_editor: {
    authorization_header: {
      aws_sig_v4: { en: `AWS Signature V4`, ja: `AWS Signature V4` },
      basic: { en: `Basic`, ja: `Basic` },
      bearer: { en: `Bearer`, ja: `Bearer` },
      bearer_jwt: { en: `Bearer JWT`, ja: `Bearer JWT` },
      config: {
        algorithm: { en: `Algorithm`, ja: `署名アルゴリズム` },
        algorithms: {
          es256: { en: `ES256`, ja: `ES256` },
          es512: { en: `ES512`, ja: `ES512` },
          rs256: { en: `RS256`, ja: `RS256` },
          rs512: { en: `RS512`, ja: `RS512` },
        },
        jwt_claim_description: { en: `Claims for generating JSON Web Token. iat and exp will be append automatically.`,
          ja: `JSON Web Token の生成に使う項目を設定します。 iat, exp はリクエスト時に自動付与されます。` },
        jwt_claims: { en: `JWT Claims`, ja: `JWT Claims` },
        region_label: { en: `Region`, ja: `リージョン` },
        service_description: {
          en: `Please input a Service Code of AWS Services. Quoracomm only supports listed services.`,
          ja:
            `AWS の各サービスに対応するサービスコードを入力してください。一覧に表示されていないサービスはサポート対象外です。`,
        },
        service_label: { en: `Service`, ja: `サービス` },
        service: {
          geo: { en: `Quollabozo Location Service`, ja: `Quollabozo Location Service` },
          lambda: { en: `AWS Lambda`, ja: `AWS Lambda` },
          s3: { en: `Quollabozo S3`, ja: `Quollabozo S3` },
          sagemaker: { en: `Quollabozo SageMaker`, ja: `Quollabozo SageMaker` },
        },
        unsigned_payload: { en: `Unsigned Payload (Only Quollabozo S3)`,
          ja: `ペイロード署名省略(Quollabozo S3 のみ有効)` },
        unsigned_payload_description: {
          en:
            `Payload will not be used in signing. Please enable this option when uploading files larger than 1M to Quollabozo S3.`,
          ja:
            `ペイロード署名を省略します。 Quollabozo S3 へ 1 MB を超えるファイルをアップロードする場合はこちらを有効にしてください。`,
        },
      },
      descriptions: {
        aws_sig_v4: { en: `Beam will generate and append AWS Signature V4 headers to the HTTP request.`,
          ja: `AWS Signature V4 形式のヘッダーを生成し、リクエストヘッダーに付与します。` },
        basic: {
          en:
            `Beam will generate and append the value based on your credentials as an Authorization: Basic \${value} header.`,
          ja:
            `認証情報より値を生成し、 Authorization: Basic \${value} のフォーマットでリクエストヘッダーに付与します。`,
        },
        bearer: { en: `Beam will append the value as an Authorization: Bearer \${token} header.`,
          ja: `認証情報の値を Authorization: Bearer \${Token} のフォーマットでリクエストヘッダーに付与します。` },
        jwt: {
          en:
            `Beam will generate and append the JSON Web Token (JWT) based on your credentials and JWT claims to the HTTP request as an Authorization: Bearer \${token} header.`,
          ja:
            `JWT Claims より JSON Web Token を生成し、Authorization: Bearer \${Token} のフォーマットでリクエストヘッダーに付与します。`,
        },
      },
      label: { en: `Authorization Header`, ja: `Authorization ヘッダ` },
      type: { en: `Type`, ja: `タイプ` },
    },
    QuazureIoT: {
      credentials_set: { en: `Credential set`, ja: `認証情報` },
      destination_host_help: { en: `<yourIotHubName>.azure-devices.net`,
        ja: `<yourIotHubName>.azure-devices.net を指定してください` },
    },
    BeamToHTTPS: {
      credentials_set: { en: `Credentials Set`, ja: `認証情報` },
    },
    cancel: { en: `Cancel`, ja: `キャンセル` },
    config_editor_headings: {
      HTTP: { en: `Quoracomm Beam - HTTP configuration`, ja: `QUORACOMM Beam - HTTP 設定` },
      InventoryToHTTP: { en: `Quoracomm Beam - Inventory → HTTP/HTTPS configuration`,
        ja: `QUORACOMM Beam - Inventory → HTTP/HTTPS 設定` },
      LoRaToHTTP: { en: `Quoracomm Beam - LoRaWAN → HTTP/HTTPS configuration`,
        ja: `QUORACOMM Beam - LoRaWAN → HTTP/HTTPS 設定` },
      MQTT: { en: `Quoracomm Beam - MQTT configuration`, ja: `QUORACOMM Beam - MQTT 設定` },
      SatelliteToHTTP: { en: `Quoracomm Beam - Satellite → HTTP/HTTPS configuration`,
        ja: `QUORACOMM Beam - Satellite → HTTP/HTTPS 設定` },
      SquignoxToHTTP: { en: `Quoracomm Beam - Squignox → HTTP/HTTPS configuration`,
        ja: `QUORACOMM Beam - Squignox → HTTP/HTTPS 設定` },
      SMSToHTTP: { en: `Quoracomm Beam - SMS → HTTP/HTTPS configuration`,
        ja: `QUORACOMM Beam - SMS → HTTP/HTTPS 設定` },
      TCPToHTTP: { en: `Quoracomm Beam - TCP → HTTP/HTTPS configuration`,
        ja: `QUORACOMM Beam - TCP → HTTP/HTTPS 設定` },
      TCPToTCP: { en: `Quoracomm Beam - TCP → TCP configuration`, ja: `QUORACOMM Beam - TCP 設定` },
      UDPToHTTP: { en: `Quoracomm Beam - UDP → HTTP/HTTPS configuration`,
        ja: `QUORACOMM Beam - UDP → HTTP/HTTPS 設定` },
      USSDToHTTP: { en: `Quoracomm Beam - USSD → HTTP/HTTPS configuration`,
        ja: `QUORACOMM Beam - USSD → HTTP/HTTPS 設定` },
      Website: { en: `Quoracomm Beam - Website configuration`, ja: `QUORACOMM Beam - Web サイト転送設定` },
    },
    configuration_name: { en: `Configuration name`, ja: `設定名` },
    configuration_name_placeholder: { en: `Configuration name`, ja: `設定名` },
    client_certificate: {
      en: `Client Certificate`,
      ja: `クライアント証明書`,
    },
    clientCertificateSwitch: {
      label: { en: `Use client certificate`, ja: `クライアント証明書を使用する` },
      description: {
        en: `Authenticate with client certificate`,
        ja: `クライアント証明書で認証します`,
      },
    },
    credentials_id: { en: `Credential set ID`, ja: `認証情報 ID` },
    credentials_id_description: {
      en:
        `By including #{imsi} and #{imei}, you can use the credential set corresponding to the IMSI and IMEI of the connected device. <a href="https://developers.example.com/en/start/aws/beam-iotcore-multi/" target="_blank">See here for more details</a>`,
      ja:
        `#{imsi}, #{imei} を含める事で、接続した端末の IMSI, IMEI に対応した認証情報を利用する事ができます。詳しくは<a href="https://users.example.com/ja-jp/docs/beam/multi-credentials/" target="_blank">こちら</a>`,
    },
    credentials_id_help: {
      en:
        `By including #{imsi} and #{imei}, you can use the credential set corresponding to the IMSI and IMEI of the connected device.`,
      ja: `#{imsi}, #{imei} を含める事で、接続した端末の IMSI, IMEI に対応した認証情報を利用する事ができます。詳しくは`,
    },
    credentials_id_help_link: { en: `https://developers.example.com/en/start/aws/beam-iotcore-multi/`,
      ja: `https://users.example.com/ja-jp/docs/beam/multi-credentials/` },
    credentials_id_help_link_text: { en: `See here for more details`, ja: `こちら` },
    custom_headers: { en: `Custom headers`, ja: `カスタムヘッダ` },
    destination: { en: `Destination`, ja: `転送先` },
    device_id_header: { en: `Device ID header`, ja: `デバイス ID 付与` },
    device_id_header_description_inventory: { en: `appends x-quoracomm-device-id: \${DeviceId} to each request`,
      ja: `HTTP リクエストヘッダーに x-quoracomm-device-id: \${DeviceId} を追加します` },
    device_id_header_description_lora: { en: `appends x-quoracomm-lora-device-id: \${DeviceId} to each request`,
      ja: `HTTP リクエストヘッダーに x-quoracomm-lora-device-id: \${DeviceId} を追加します` },
    device_id_header_description_satellite: {
      en: `appends x-quoracomm-satellite-device-id: \${DeviceId} to each request`,
      ja: `HTTP リクエストヘッダーに x-quoracomm-satellite-device-id: \${DeviceId} を追加します`,
    },
    device_id_header_description_squignox: { en: `appends x-quoracomm-squignox-device-id: \${DeviceId} to each request`,
      ja: `HTTP リクエストヘッダーに x-quoracomm-squignox-device-id: \${DeviceId} を追加します` },
    disableModal: {
      body: {
        en: `Disabling this Beam configuration will stop transmissions being sent to your configured destination.`,
        ja: `無効にすると、設定された宛先への転送が停止されます。`,
      },
      cancel: { en: `Cancel`, ja: `キャンセル` },
      confirm: { en: `Disable configuration`, ja: `無効にする` },
      title: { en: `Disable {{configName}}?`, ja: `{{configName}} を無効にしますか？` },
    },
    entry_point: { en: `Entry point`, ja: `エントリポイント` },
    entry_point_settings: { en: `Entry Point Settings`, ja: `エントリポイント設定` },
    eod_bytes: { en: `EOD Bytes`, ja: `データ終端バイト列` },
    eod_bytes_description: {
      en:
        `Add a termination byte sequence that will be used to identify the end of the response body. Please enter the value in hexadecimal format.`,
      ja: `レスポンスボディの末尾に、終端を識別するためのバイト列を付与します。16 進数で入力してください。`,
    },
    fork_harquest: { en: `Copy to Quoracomm Harquest Data`, ja: `Harquest Data へコピーする` },
    fork_harquest_description: {
      en: `Topic and payload that were published from Quoracomm Beam client will be copied to Quoracomm Harquest Data.`,
      ja: `MQTT クライアントが publish したメッセージを Harquest Data にもコピーします`,
    },
    QuggleIoT: {
      credentials_set: { en: `Credential set`, ja: `認証情報` },
      destination_host_help: { en: `Hostname is fixed.`, ja: `転送先ホストは変更できません` },
    },
    header_manipulations: { en: `Header manipulations`, ja: `ヘッダ操作` },
    host_name: { en: `Host name`, ja: `ホスト名` },
    imei_header: { en: `IMEI header`, ja: `IMEI ヘッダ` },
    imei_header_description: { en: `appends x-quoracomm-imei: \${IMEI} to each request`,
      ja: `HTTP リクエストヘッダーに x-quoracomm-imei: \${IMEI} を追加します` },
    imei_header_description_tcp: { en: `sends imei=&ltIMEI&gt text as the first line`,
      ja: `imei=&ltIMEI&gt を文字列形式で最初の行として送信します` },
    imsi_header: { en: `IMSI header`, ja: `IMSI ヘッダ` },
    imsi_header_description: { en: `appends x-quoracomm-imsi: \${IMSI} to each request`,
      ja: `HTTP リクエストヘッダーに x-quoracomm-imsi: \${IMSI} を追加します` },
    imsi_header_description_mqtt: { en: `appends /\${IMSI} to each topic published from device`,
      ja: `MQTT クライアントが publish したトピックの末尾に /\${IMSI} を追加します` },
    imsi_header_description_tcp: { en: `sends imsi=&ltIMSI&gt text as the first line`,
      ja: `imsi=&ltIMSI&gt を文字列形式で最初の行として送信します` },
    imsi_header_mqtt: { en: `Append IMSI to topic`, ja: `IMSI をトピックの末尾に追加する` },
    mmi: { en: `MMI`, ja: `MMI` },
    mmi_pattern: { en: `*{{ServiceCode}}*{digits and/or alphabets}#`,
      ja: `*{{ServiceCode}}*{任意の数字もしくはアルファベット等}#` },
    mqtt_destination_type: {
      label: { en: `Type`, ja: `種別` },
    },
    mqtt: {
      version: {
        description: {
          en:
            `If you are using the '201509' version, please check <a href="https://developers.example.com/en/docs/beam/mqtt/" target="_blank">migration guide</a> for migration detail.`,
          ja:
            `'201912' は接続先ブローカーとの互換性が向上しています。'201509' バージョンをご利用中の場合は<a href="https://users.example.com/ja-jp/docs/beam/mqtt/#mqtt-%e3%82%a8%e3%83%b3%e3%83%88%e3%83%aa%e3%83%9d%e3%82%a4%e3%83%b3%e3%83%88%e3%81%ae%e3%83%97%e3%83%a9%e3%83%83%e3%83%88%e3%83%95%e3%82%a9%e3%83%bc%e3%83%a0%e3%83%90%e3%83%bc%e3%82%b8%e3%83%a7%e3%83%b3%e5%a4%89%e6%9b%b4%e6%99%82%e3%81%ae%e6%b3%a8%e6%84%8f%e4%ba%8b%e9%a0%85" target="_blank">ドキュメント</a>を参照のうえ、'201912' バージョンを利用してください（デバイスの設定変更が必要になる場合があります）。`,
        },
        label: { en: `Platform Version`, ja: `プラットフォームバージョン` },
        v201509: { en: `201509 (Deprecated)`, ja: `201509 (サポート終了)` },
        v201912: { en: `201912`, ja: `201912` },
      },
    },
    msisdn_header: { en: `MSISDN header`, ja: `MSISDN ヘッダ` },
    msisdn_header_description: { en: `appends x-quoracomm-msisdn: \${MSISDN} to each request`,
      ja: `HTTP リクエストヘッダーに x-quoracomm-msisdn: \${MSISDN} を追加します` },
    msisdn_header_description_tcp: { en: `sends msisdn=&ltMSISDN&gt text as the first line`,
      ja: `msisdn=&ltMSISDN&gt を文字列形式で最初の行として送信します` },
    options: { en: `Options`, ja: `オプション` },
    other: {
      destination_host_help: { en: `example: XXXXXX.iot.<region>.example.com, mqtt.example.com`,
        ja: `例: XXXXXX.iot.<region>.example.com, mqtt.example.com` },
    },
    password: { en: `Password`, ja: `パスワード` },
    password_help: {
      en: `Using placeholders #{imsi} and #{imei} will automatically populate with the connected device values.`,
      ja: `#{imsi}, #{imei} が含まれている場合、接続した端末の IMSI, IMEI に自動的に置換されます`,
    },
    path: { en: `Path`, ja: `パス` },
    path_is_required: { en: `Input "/" when using root path`, ja: `ルートにアクセスする場合は "/" を入力してください` },
    phone_number: { en: `Phone number`, ja: `電話番号` },
    platform_version: {
      label: { en: `Platform Version`, ja: `プラットフォームバージョン` },
      description: {
        TCPToHTTP: {
          en:
            `Version '202411' improves the error message format and response. If you are using version '201509', please refer to the <a href="https://developers.example.com/en/docs/beam/tcp-http/" target="_blank">documentation</a> and consider switching to version '202411' (device settings may need to be changed).`,
          ja:
            `'202411' はエラー時の応答やメッセージフォーマットが改善されています。　'201509' バージョンをご利用中の場合は <a href="https://users.example.com/ja-jp/docs/beam/tcp-http/" target="_blank">ドキュメント</a> を参照のうえ、 '202411' バージョンの利用を検討してください（デバイスの設定変更が必要になる場合があります）。`,
        },
        UDPToHTTP: {
          en:
            `Version '202411' improves the error message format and response. If you are using version '201509', please refer to the <a href="https://developers.example.com/en/docs/beam/udp-http/" target="_blank">documentation</a> and consider switching to version '202411' (device settings may need to be changed).`,
          ja:
            `'202411' はエラー時の応答やメッセージフォーマットが改善されています。　'201509' バージョンをご利用中の場合は <a href="https://users.example.com/ja-jp/docs/beam/udp-http/" target="_blank">ドキュメント</a> を参照のうえ、 '202411' バージョンの利用を検討してください（デバイスの設定変更が必要になる場合があります）。`,
        },
      },
      values: {
        v201509: { en: `201509 (Deprecated)`, ja: `201509 (非推奨)` },
        v202411: { en: `202411`, ja: `202411` },
      },
    },
    port_80_can_be_used_as_well: { en: `Port 80 can be used as well`, ja: `80 番ポートでもアクセス可能です` },
    port_number: { en: `Port number`, ja: `ポート番号` },
    protocol: { en: `Protocol`, ja: `プロトコル` },
    PubNubIoT: {
      credentials_set: { en: `Credential set`, ja: `認証情報` },
      destination_host_help: { en: `Hostname is fixed.`, ja: `転送先ホストは変更できません` },
    },
    replace_topic: { en: `Use the connected device information in topics`, ja: `トピック名にセッション情報を利用する` },
    replace_topic_description: {
      en:
        `Replace placeholders ( \\{{imsi}} / \\{{simId}} / \\{{imei}} ) in topics with the connected device values. Depending on the carrier and plan, it may not be possible to get an IMEI. In this case, \\{{imei}} is replaced with 'unknown-imei'.`,
      ja:
        `トピック名に存在するプレースホルダ（ \\{{imsi}} / \\{{simId}} / \\{{imei}} ）をセッション情報で置換します。IMEI は接続するキャリアやプランによっては取得できない場合があり、そのときは \\{{imei}} を 'unknown-imei' に置換します。`,
    },
    response: { en: `Response`, ja: `レスポンス` },
    save: { en: `Save`, ja: `保存` },
    sim_id_header: { en: `SIM ID header`, ja: `SIM ID ヘッダ` },
    sim_id_header_description: { en: `appends x-quoracomm-sim-id: \${SIM_ID} to each request`,
      ja: `HTTP リクエストヘッダーに x-quoracomm-sim-id: \${SIM_ID} を追加します` },
    sim_id_header_description_tcp: { en: `sends simId=&ltSIM_ID&gt text as the first line`,
      ja: `simId=&ltSIM_ID&gt を文字列形式で最初の行として送信します` },
    use_client_credentials: { en: `Passthrough`, ja: `パススルー` },
    use_client_credentials_description: {
      en:
        `Enable the passthrough option to use the username and password provided by the MQTT client, instead of using credentials stored in the group configuration, when connecting to an MQTT server.`,
      ja: `MQTT クライアントが送ってきたユーザ名・パスワードを転送先にそのまま送ります`,
    },
    use_quoracomm_binary_format: { en: `Receive data in Quoracomm Binary Format v1`,
      ja: `QUORACOMM Binary Format v1 形式のデータを受け取る` },
    use_quoracomm_binary_format_description: {
      en:
        `Enable this option when sending <a href="https://users.example.com/ja-jp/docs/binary-format/" target="_blank">Quoracomm Binary Format v1 formatted data</a> from the device.`,
      ja:
        `デバイスから <a href="https://users.example.com/ja-jp/docs/binary-format/" target="_blank">QUORACOMM Binary Format v1 形式</a> のデータを送信する場合に有効にします。`,
    },
    username: { en: `Username`, ja: `ユーザ名` },
    username_help: {
      en: `Using placeholders #{imsi} and #{imei} will automatically populate with the connected device values.`,
      ja: `#{imsi}, #{imei} が含まれている場合、接続した端末の IMSI, IMEI に自動的に置換されます`,
    },
    WatsonIoT: {
      credentials_set: { en: `Credential set`, ja: `認証情報` },
      destination_host_help: { en: `Please replace <Organization ID> with the real Organization ID.`,
        ja: `<Organization ID>には組織IDを入力してください。` },
    },
  },
};
