export const translations = {
  group_air_params: {
    binary_parser: {
      description: { en: `Specify format to parse binary data before sending to Beam / Junq / Funnel / Harquest Data.`,
        ja: `Beam / Junq / Funnel / Harquest Data に送信する前に、バイナリを指定のフォーマットでパースします` },
      format_label: { en: `Format`, ja: `フォーマット` },
      learn_more: { en: `Binary Parser format reference`, ja: `バイナリパーサー フォーマット リファレンス` },
      learn_more_url: { en: `https://developers.example.com/en/docs/groups/binary-parser/`,
        ja: `https://users.example.com/ja-jp/docs/binary-parser/` },
      title: { en: `Binary Parser`, ja: `バイナリパーサー` },
    },
    chap: {
      help_disabled: { en: `CHAP authentication is not enabled.`, ja: `CHAP認証ステータス：無効` },
      help_enabled_and_configured: { en: `CHAP authentication is enabled and configured.`,
        ja: `CHAP認証ステータス：有効` },
      settings: { en: `Change Settings`, ja: `設定` },
      title: { en: `CHAP Authentication`, ja: `CHAP 認証` },
    },
    confirm_chap: {
      body: {
        en:
          `Enabling CHAP authentication will generate additional costs. Please refer to <a href='https://www.example.com/pricing/' target='_blank'>the price information</a> on the website for the details.`,
        ja:
          `CHAP 認証が有効になっている状態では<b>追加費用</b>が発生します。詳しくは弊社 Web サイトの<a href='https://quoracomm.jp/services/air/cellular/pricing/' target='_blank'>料金ページ</a>をご確認ください。<br>よろしければ、OK ボタンを押してください。`,
      },
      cancel: { en: `Cancel`, ja: `キャンセル` },
      confirm: { en: `OK`, ja: `OK` },
      title: { en: `Confirmation: CHAP authentication is enabled`, ja: `CHAP 認証が有効になっています` },
    },
    confirm_dns: {
      cancel: { en: `Cancel`, ja: `キャンセル` },
      confirm: { en: `OK`, ja: `OK` },
      text: {
        en: `Custom DNS will cost {{ dnsFeeDescription }} per day per subscriber in the group`,
        ja:
          `カスタム DNS が有効になっている状態では<b>追加費用</b>が発生します。詳しくは弊社 Web サイトの<a href='https://quoracomm.jp/services/air/cellular/pricing/' target='_blank'>料金ページ</a>をご確認ください。<br>よろしければ、OK ボタンを押してください。`,
      },
      title: { en: `Confirmation: Custom DNS is enabled`, ja: `カスタム DNS が有効になっています` },
    },
    confirm_vpg: {
      cancel: { en: `Cancel`, ja: `キャンセル` },
      confirm: { en: `OK`, ja: `OK` },
      text: {
        en:
          `Using Public Gate / Private Garden will generate additional costs. Please refer to <a href='https://www.example.com/pricing/' target='_blank'>the price information</a> on the website for the details.`,
        ja:
          `Private Garden / Public Gate は通常の VPG と異なり、一部のサービス利用に<b>追加費用</b>が発生します。詳しくは<a href='https://quoracomm.jp/services/vpg/price/#private-garden' target='_blank'>QUORACOMM の課金体系</a>の Private Garden / Public Gate の欄を参照してください。<br>よろしければ、OK ボタンを押してください。`,
      },
      title: { en: `Confirmation: Public Gate / Private Garden is used`,
        ja: `Public Gate / Private Garden を利用しています` },
    },
    dns: {
      add: { en: `Add a DNS Server`, ja: `DNS サーバーを追加` },
      cancel: { en: `Cancel`, ja: `閉じる` },
      caption: { en: `2 DNS Servers can be configured.`, ja: `2つまで指定できます` },
      edit: { en: `Edit`, ja: `編集` },
      ip_address: { en: `IP Address`, ja: `IP アドレス` },
      not_found: { en: `DNS Server is not configured`, ja: `DNS サーバーが設定されていません` },
      remove: { en: `Remove`, ja: `削除` },
      servers: { en: `DNS servers`, ja: `DNS サーバー` },
      submit: { en: `Add`, ja: `追加` },
      title: { en: `Custom DNS`, ja: `カスタム DNS` },
      use_custom_dns: { en: `Enable custom DNS Server Setting`, ja: `カスタム DNS を有効にする` },
    },
    error_message: { en: `Input error`, ja: `入力に誤りがあります` },
    location_service: {
      help_disabled: { en: `Simple location tracking is disabled.`, ja: `簡易位置測位機能が無効になっています。` },
      help_enabled: {
        en:
          `Location information will be added to Beam HTTP header and Harquest Data metadata if the subscriber supports simple location tracking. <a href="https://dev.example.com/jp" target="_blank">Detail</a>`,
        ja:
          `位置情報が Beam の HTTP ヘッダーや Harquest Data のメタデータ領域に保存されます。簡易位置測位機能に対応している SIM などの詳細は<a href="https://users.example.com/ja-jp/docs/air/get-location-info/" target="_blank">こちら</a>をご確認ください。`,
      },
      title: { en: `Simple Location Tracking`, ja: `簡易位置測位機能` },
    },
    lorawan: {
      enable_sls: {
        description: { en: `Check this option if you want to use shared LoRaWAN gateway.`,
          ja:
            `共有サービスモデルのゲートウェイを利用したくない場合は、この項目をOffにしてください。<br>LoRaWAN ネットワークセット ID も空欄の場合、LoRaWAN デバイスと通信できなくなりますので、ご注意ください。` },
        label: { en: `Quoracomm LoRaWAN Space`, ja: `QUORACOMM LoRa Space を利用` },
        off_text: { en: `Disabled`, ja: `利用しない` },
        on_text: { en: `Enabled`, ja: `利用する` },
      },
      network_set_id: {
        create_button_label: { en: `Create new LoRaWAN network set`, ja: `LoRaWAN ネットワークセット作成` },
        description: { en: `Set network set ID when you want to use owned gateways`,
          ja:
            `自分で作成したネットワークセット、または、他オペレーターから共有されているネットワークセットを利用する場合に設定してください。そのネットワークセットに含まれるゲートウェイを経由してメッセージを送受信できるようになります。` },
        direct_input: { en: `Direct input`, ja: `直接入力` },
        label: { en: `LoRaWAN Network Set ID`, ja: `LoRaWAN ネットワークセット ID` },
        placeholder: { en: `LoRaWAN Network Set ID`, ja: `LoRaWAN ネットワークセット ID` },
        prompt: { en: `--------`, ja: `--------` },
      },
      title: { en: `LoRaWAN Settings`, ja: `LoRaWAN` },
    },
    metadata: {
      allow_origin: { en: `Allow origin`, ja: `許可するオリジン` },
      allow_origin_notice: { en: `This value will be specified in the Access-Control-Allow-Origin: Header`,
        ja: `この値が Access-Control-Allow-Origin ヘッダーに指定されます` },
      caption: {
        en: '',
        ja: '',
      },
      enabled: { en: `Enabled`, ja: `有効にする` },
      errors: {
        userdata_invalid_json: { en: `Invalid JSON text`, ja: `不正な JSON 文字列です` },
      },
      minimize_response_body: { en: `Minimize response body`, ja: `レスポンスボディを最小化` },
      minimize_response_body_notice: {
        en:
          `( Only affects POST and PUT requests ) The response body will be empty with status code 204 on request success.`,
        ja:
          `リクエスト成功時のレスポンスがステータスコード 204 かつ空のレスポンスボディになります。( POST PUT のみ有効 )`,
      },
      readonly: { en: `Readonly`, ja: `読み取り専用` },
      title: { en: `Metadata Service`, ja: `メタデータサービス` },
      userdata: { en: `User data`, ja: `ユーザーデータ` },
      userdata_is_json: { en: `Save as JSON`, ja: `JSON 形式で保存` },
    },
    save: { en: `Save`, ja: `保存` },
    saved: { en: `Quoracomm Air configuration is updated.`, ja: `Quoracomm Air 設定が更新されました` },
    squignox: {
      squignoxDownlinkMessageRepeated: {
        description: {
          en:
            `If this option is enabled, the downlink message will be sent to a device repeatedly, until a new downlink message is set.`,
          ja:
            `このオプションが有効な場合、新しいダウンリンクメッセージが QUORACOMM プラットフォームに登録されるまで同じダウンリンクメッセージを再送し続けます。無効の場合、ダウンリンクメッセージを一度だけ送信します。`,
        },
        label: { en: `Send Squignox downlink messages repeatedly`, ja: `Squignox ダウンリンクメッセージを再送する` },
        off_text: { en: `Disabled`, ja: `OFF` },
        on_text: { en: `Enabled`, ja: `ON` },
      },
    },
    vpg: {
      create_button_label: { en: `Create VPG`, ja: `VPG 作成` },
      external_vpg_id: { en: `VPG ID`, ja: `VPG ID` },
      id: { en: `VPG`, ja: `VPG` },
      id_direct_input: { en: `Input VPG ID directly`, ja: `VPG ID を直接入力する` },
      private_garden: { en: `Shared VPG for Private Garden (PrivateGarden)`,
        ja: `Shared VPG for Private Garden (PrivateGarden)` },
      prompt: { en: `--- Please select a VPG ---`, ja: `--- VPG を選択してください ---` },
      prompt_no_vpgs: { en: `--- no VPG entries found ---`, ja: `--- VPG がありません ---` },
      public_gate: { en: `Shared VPG for Public Gate (PublicGate)`, ja: `Shared VPG for Public Gate (PublicGate)` },
      public_gate_description: {
        en:
          `<p>'Public Gate' enables you to try Quoracomm Gate without hosting your own VPG. 'Public Gate' uses a VPG that is shared by other users, which means that other subscribers using 'Public Gate' could attempt to access your devices. Therefore you must apply security measures against attack to your devices, and should turn on the VPG only when you are actually using it for testing.</p><p>* For example: </p><ul><li>Change default passwords (OS, Web console)</li><li>Stop unnecessary services</li><li>Apply the latest security updates</li></ul>`,
        ja:
          `<p>Public Gate は他のユーザーと VPG を共有し、SIM の VPG 利用料のみで QUORACOMM Gate を利用できるサービスです。そのため、Public Gate を利用している他のユーザーが所有する QUORACOMM Air と相互接続が可能です。Public Gate をご利用の際には、不正侵入を防ぐための対策(*)をデバイス等に必ず施してください。また、利用時のみ有効にしていただくことを推奨いたします</p><p>* 対策の例</p><ul><li>WebUIやOS等の初期パスワードを変更する</li><li>不要なサービスを停止する</li><li>セキュリティアップデートを随時適用する</li></ul>`,
      },
      public_gate_frankfurt: { en: `Shared VPG for Public Gate - Frankfurt (PublicGate)`,
        ja: `Shared VPG for Public Gate - Frankfurt (PublicGate)` },
      public_gate_oregon: { en: `Shared VPG for Public Gate - Oregon (PublicGate-Oregon)`,
        ja: `Shared VPG for Public Gate - Oregon (PublicGate-Oregon)` },
      public_gate_tokyo: { en: `Shared VPG for Public Gate - Tokyo (PublicGate-Tokyo)`,
        ja: `Shared VPG for Public Gate - Tokyo (PublicGate-Tokyo)` },
      title: { en: `Virtual Private Gateway`, ja: `VPG (Virtual Private Gateway)` },
    },
  },
};
