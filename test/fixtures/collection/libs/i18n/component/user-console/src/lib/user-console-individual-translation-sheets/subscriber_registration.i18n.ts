export const translations = {
  subscriber_registration: {
    agree_jp: { en: `I will comply with the regulations.`, ja: `技術基準適合証明等について確認しました` },
    agree_terms_jp: {
      en:
        `<p>Before using Quoracomm Air, please confirm the following:<br><br>In the case of plan-D or plan-DU, the equipment using the SIM card must be certified to conform to the relevant technical standards, or that it is conformant with all radio equipment technical requirements of a foreign telecommunications carrier that is <a href='https://www.example.com/corporate/disclosure/mvno/user/index.html' target='_blank'>a roaming partner of Minnesota Telegraph Corp QoQoHo</a>.<br><br>In the case of plan-K, plan-K2, or plan-KM1, the equipment using the SIM card must be  certified to conform to the relevant technical standards as described on the LMNOP website.</p>`,
      ja:
        `<p>QUORACOMM Air の利用に際しては、以下についてご確認ください。<br>plan-D または plan-DU の場合、SIM カードを利用する機器が技術基準適合証明等を受けていること、あるいは <a href='https://www.example.com/corporate/disclosure/mvno/user/index.html' target='_blank'>Minnesota Telegraph Corp のローミングパートナー</a>である外国の電気通信事業者の無線局の無線設備であることを事前にご確認ください。<br>plan-K、plan-K2、または plan-KM1 の場合、SIM カードを利用する機器が技術基準適合証明等を受けていることを事前にご確認ください。LMNOP の Web サイトでの動作確認済み機器を確認することを推奨しています。</p>`,
    },
    apn_info: {
      en:
        `<p>After registering your SIMs, configure your devices with the following APN (Access Point Name) settings, or view the <a href="https://developers.example.com/en/start/" target="_blank">Developer Guides <i class="ds-icon --icon-external-link --tiny"></i></a> to learn how to set up various devices.</p><dl class="ds-details"><dt>APN</dt><dd><div>example.com</div></dd><dt>Username</dt><dd><div>quora</div></dd><dt>Password</dt><dd><div>quora</div></dd></dl>`,
      ja:
        `<p>データ通信をご利用いただくためにはデバイスのAPN設定が必要です。設定方法の詳細は<a href="https://users.example.com/ja-jp/guides/getting-started/setup/" target="_blank">こちら</a>をご確認ください。</p><dl class="ds-details"><dt>APN</dt><dd><div>example.com</div></dd><dt>ユーザー名</dt><dd><div>quora</div></dd><dt>パスワード</dt><dd><div>quora</div></dd></dl>`,
    },
    cancel: { en: `Cancel`, ja: `キャンセル` },
    close: { en: `Close`, ja: `閉じる` },
    direct_input: { en: `Direct Input`, ja: `直接入力` },
    from_order: { en: `From Order`, ja: `注文から登録` },
    group: { en: `Group`, ja: `グループ` },
    header: { en: `SIM Registration`, ja: `SIM 登録` },
    header_subtitle: { en: `Register SIMs to your account in order to begin using them.`,
      ja:
        `SIM の受け取りを確認し、SIM からの基本料金とデータ使用料をアカウントに関連付けるために、SIM 登録プロセスが必要です。` },
    iccid: { en: `ICCID ({{iccidLength}} digits)`, ja: `ICCID ({{iccidLength}} 桁)` },
    iccid_placeholder: { en: `1234560012345678901`, ja: `1234560012345678901` },
    imsi: { en: `IMSI ({{imsiLength}} digits)`, ja: `IMSI ({{imsiLength}} 桁)` },
    imsi_placeholder: { en: `12345 12345 12345`, ja: `12345 12345 12345` },
    name: { en: `Name`, ja: `名前` },
    notice_base_charge: {
      en:
        `Registering SIMs will add them to your account. Once registered, the status of each SIM will be Ready, and each SIM will automatically activate as soon as it connects to a network for the first time. Your account will incur fees according to each SIM's subscription plan until the SIM is terminated. For more details, please refer to the <a href="https://developers.example.com/en/docs/reference/fees/" target="_blank">Pricing &amp; Fee Schedule <i class="ds-icon --icon-external-link --tiny"></i></a>.`,
      ja:
        `SIM を登録すると、その SIM のステータスが「準備完了」になり、SIM の種類に応じた料金が発生します。詳しくは<a href='https://quoracomm.jp/services/air/cellular/pricing/' target='_blank'>弊社 Web サイトのご利用料金についてのページ</a>をご確認ください。`,
    },
    notice_direct_purchase: {
      en:
        `Once you have received your order, click the Register button to register all SIMs in the order to your account.`,
      ja: `以下のオーダーに含まれている SIM を登録するには「受け取り確認」ボタンを押してください。`,
    },
    password: { en: `Passcode (5 or 8 digits)`, ja: `パスコード (5 桁または 8 桁)` },
    password_placeholder: { en: `12345`, ja: `12345` },
    puk: { en: `PUK ({{pukLength}} digits)`, ja: `PUK ({{pukLength}} 桁)` },
    puk_placeholder: { en: `12345678`, ja: `12345678` },
    register: { en: `Register`, ja: `登録` },
    register_by_order_header: { en: `Orders containing SIMs to be registered`, ja: `ユーザーコンソールで注文した SIM` },
    register_sim_card: { en: `Register SIM`, ja: `SIM を登録` },
    register_virtual_sim: { en: `Add Virtual SIM`, ja: `バーチャル SIM を登録` },
    required: { en: `required fields`, ja: `は必須項目です` },
    success: {
      finish: { en: `Finish`, ja: `終了して元の画面に戻る` },
      header: { en: `SIM registered`, ja: `SIM の登録に成功しました` },
      message: { en: `Your SIM was successfully registered to your account. Would you like to register another SIM?`,
        ja: `続けて登録しますか？` },
      next: { en: `Register another SIM`, ja: `続けて次の SIM を登録する` },
    },
    vsim: {
      details: { en: `Details`, ja: `詳細` },
      notice1: {
        en:
          `A Virtual SIM allows your device to connect to Quoracomm with any Internet connection (such as WiFi or ethernet) by using the <a href="https://www.example.com/products/arc/" target="_blank">Quoracomm Arc <i class="ds-icon --icon-external-link --tiny"></i></a> secure link service. Before creating a Virtual SIM, check that your device meets the <a href="https://developers.example.com/en/docs/arc/#requirements" target="_blank">Quoracomm Arc requirements <i class="ds-icon --icon-external-link --tiny"></i></a>.`,
        ja:
          `バーチャル SIM は、セキュアリンクサービス<a href="https://quoracomm.jp/products/arc/" target="blank">QUORACOMM Arc</a>を利用して、お持ちのデバイスを任意のインターネット接続（WiFi やイーサネットなど）からQUORACOMMプラットフォームに接続することができます。`,
      },
      notice2: {
        en:
          `By creating a Virtual SIM, your account will incur Quoracomm Arc service fees until the Virtual SIM is terminated. For more details, please refer to the <a href="https://developers.example.com/en/docs/reference/fees/" target="_blank">Pricing &amp; Fee Schedule <i class="ds-icon --icon-external-link --tiny"></i></a>.`,
        ja:
          `バーチャル SIM を作成する前に、お使いのデバイスが<a href="https://users.example.com/ja-jp/docs/arc/" target="blank">QUORACOMM Arc のデバイス要件</a>を満たしていることをご確認ください。バーチャル SIM を作成すると、初期費用とバーチャル SIM を解約するまで月額基本料金が発生します。詳細は<a href="https://quoracomm.jp/services/arc/#pricing" target="blank">QUORACOMM Arc 利用料金</a>をご確認ください。`,
      },
      notice3: {
        en:
          `Please note that this option will create a Standalone Virtual SIM. Virtual SIMs can also be added to an existing SIM as a Subscription Container. For more information, please refer to the <a href="https://developers.example.com/en/docs/arc/#virtual-sims" target="_blank">Quoracomm Arc documentation <i class="ds-icon --icon-external-link --tiny"></i></a>.`,
        ja:
          `なお、当操作は単独の バーチャル SIM を作成します。これ以外に、既存の QUORACOMM IoT SIM にサブスクリプションコンテナとして バーチャル SIM を追加できます。詳細は、<a href="https://users.example.com/ja-jp/docs/arc/" target="blank">QUORACOMM Arc ドキュメント</a>をご参照ください。`,
      },
      successMessage: { en: `A Virtual SIM was successfully created and added to your account.`,
        ja: `バーチャル SIM を作成しました。` },
      successTitle: { en: `Virtual SIM created`, ja: `バーチャル SIM の作成` },
      title: { en: `Add Virtual SIM`, ja: `バーチャル SIMを登録` },
      vsimNotSupportedText: { en: `To create a Virtual SIM, please switch to the new SIM Management interface.`,
        ja: `バーチャル SIM に関連した操作は、新しい SIM 管理画面に移動してご利用ください。` },
    },
  },
};
