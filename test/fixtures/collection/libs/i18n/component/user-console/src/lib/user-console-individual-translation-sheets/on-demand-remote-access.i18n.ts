export const translations = {
  'on-demand-remote-access': {
    access: { en: `Access`, ja: `アクセス` },
    accessFrom: { en: `Access From`, ja: `アクセス元` },
    accessibilitySummary: {
      en:
        `Access {{hostname}} or {{ipAddress}} using external port {{port}}. Allowed IP address range is {{sourceRange}}. {{ tls }}`,
      ja:
        `{{hostname}} または {{ipAddress}} の {{port}} 番ポートに接続できます。 {{ tls }} 。{{sourceRange}} のIPアドレスレンジからの接続のみを受け付けます。`,
    },
    accessPort: { en: `Port`, ja: `デバイス側ポート` },
    accessTime: { en: `Access Time`, ja: `アクセス時間` },
    active: { en: `Active`, ja: `使用中` },
    addMapping: { en: `Add port mapping`, ja: `作成` },
    airNotAvailable: { en: `Quoracomm Air is not available`, ja: `Quoracomm Air は利用できません` },
    arcNotAvailable: { en: `Quoracomm Arc is currently not enabled for this SIM`,
      ja: `Quoracomm Arc は現在、このSIMで有効ではありません` },
    asteriskWarning: { en: `Fields marked with an asterisk (<span class="--required">*</span>) are required.`,
      ja: `アスタリスク (<span class="--required">*</span>) が付いているフィールドは必須です。` },
    cancel: { en: `Cancel`, ja: `キャンセル` },
    close: { en: `Close`, ja: `閉じる` },
    connectUsing: { en: `Connect using`, ja: `接続方法` },
    deleteMapping: { en: `Delete mapping`, ja: `削除` },
    destinationService: { en: `Service`, ja: `サービス` },
    deviceSidePort: { en: `Port<br>(device-side)`, ja: `ポート<br>(デバイス側)` },
    downloadRdpProfile: { en: `Download Windows Remote Desktop profile`,
      ja: `リモートデスクトップ（.rdp）形式のファイルをダウンロード` },
    duration: { en: `Access allowed for`, ja: `アクセス可能時間` },
    durations: {
      eight_hours: { en: `8 hours`, ja: `8時間` },
      four_hours: { en: `4 hours`, ja: `4時間` },
      one_hour: { en: `1 hour`, ja: `1時間` },
      one_time: { en: `One time only`, ja: `一回だけ` },
      thirty_minutes: { en: `30 minutes`, ja: `30分` },
      two_hours: { en: `2 hours`, ja: `2時間` },
    },
    enableRemoteAccess: { en: `Enable`, ja: `リモート接続を作成` },
    heading: { en: `On-demand Remote Access`, ja: `オンデマンドリモートアクセス` },
    helpTextDontExposeIpAddressAndPortForYourSecurity: {
      en: `For your security, do not expose any hostname, IP address, or port number to third parties.`,
      ja: `上記のアドレス、ポートおよびホスト名は決して外部に公開しないでください。`,
    },
    helpTextForEditingAdditionalPortMapping: {
      en: `To add another On-demand Remote Access configuration, enter the details below.`,
      ja: `追加のオンデマンドリモートアクセスを有効にするには、以下の項目を入力してください。`,
    },
    helpTextForEditingFirstPortMapping: { en: `To enable On-demand Remote Access, enter the details below.`,
      ja: `オンデマンドリモートアクセスを有効にするには、以下の項目を入力してください。` },
    helpTextForEnabledPortsList: { en: `On-demand Remote Access is enabled for the ports shown below.`,
      ja: `オンデマンドリモートアクセスは以下のポートに対して有効になっています。` },
    helpTextForSuccessfullyCreatedPortMapping: {
      en: `The On-demand Remote Access configuration was created successfully.`,
      ja: `オンデマンドリモートアクセスが正常に構成されました。`,
    },
    ipAddressRange: { en: `IP address range(s) allowed access`, ja: `アクセス元 IP アドレスレンジ` },
    ipAddressRangeHint: {
      en:
        `Enter IP address range in CIDR notation (e.g., 12.34.56.78/30). Multiple comma-separated IP address ranges may be entered. If blank, only the current IP address connecting to this website will be allowed.`,
      ja:
        `アクセス元IPアドレスの範囲をCIDR形式（例：12.34.56.78/30）で入力してください。カンマで区切って複数のレンジを入力することもできます。空の場合は現在アクセスしているグローバルIPアドレスが指定されます。`,
    },
    message: {
      deleting: { en: `Deleting on-demand remote access configuration...`,
        ja: `オンデマンドリモートアクセスを削除中...` },
      loading: { en: `Loading...`, ja: `読み込み中 ...` },
      submitting: { en: `Configuring on-demand remote access...`, ja: `オンデマンドリモートアクセスを設定中...` },
    },
    quapchaFeeWarning: {
      en:
        `By enabling on-demand remote access for this SIM, your account will incur the Quoracomm Quapcha usage fee. Please refer to the <a href='https://developers.example.com/en/docs/reference/fees/' target='_blank'>Pricing & Fee Schedule</a> for more information.`,
      ja:
        `オンデマンドリモートアクセスを有効にすると、Quapcha の<a href='https://quoracomm.jp/services/quapcha/price/' target='_blank'>月額料金が発生します。</a>`,
    },
    noCurrentOnline: { en: `There is currently no active online connection`,
      ja: `現在、アクティブなオンライン接続はありません` },
    notSubscribedThisMonth: {
      en: `By enabling on-demand remote access, your account will be charged the Quapcha fee for this subscriber.`,
      ja: `オンデマンドリモートアクセスを有効にすると、Quapcha の月額料金が発生します。`,
    },
    offline: { en: `OFFLINE`, ja: `オフライン` },
    online: { en: `ONLINE`, ja: `オンライン` },
    port: { en: `Port`, ja: `ポート` },
    portDescription: {
      en:
        `The port on your device used for direct access, such as 22 for SSH, 3389 for RDP, 5900 for VNC, or 80 for web interface.`,
      ja:
        `直接アクセスに使用されるデバイスのポート (SSH の場合は 22、RDP の場合は 3389、VNC の場合は 5900、Web インターフェイスの場合は 80 など)。`,
    },
    remove: { en: `Remove`, ja: `削除` },
    saveMapping: { en: `Save port mapping`, ja: `保存` },
    showList: { en: `Show all`, ja: `全て表示する` },
    simId: { en: `SIM ID`, ja: `SIM ID` },
    quoracommAir: { en: `Quoracomm Air`, ja: `QUORACOMM Air` },
    quoracommArc: { en: `Quoracomm Arc`, ja: `QUORACOMM Arc` },
    subHeading: {
      en:
        `Quoracomm Quapcha provides a simple and secure way to perform common remote access tasks using any TCP protocol, such as SSH, RDP, VNC, and HTTP/HTTPS.`,
      ja:
        `QUORACOMM Quapchaは、SSH、RDP、VNC、HTTP/HTTPSなどのTCPプロトコルを使用した一般的なリモートアクセスタスクを簡単かつ安全に実行する方法を提供します。`,
    },
    subscribedThisMonth: {
      en:
        `On-demand remote access has already been enabled for this SIM this month. You can continue to use Quoracomm Quapcha at no additional charge.`,
      ja: `この SIM はオンデマンドリモートアクセスの月額料金が発生しています。今月は追加料金なしで有効にできます。`,
    },
    tlsHelpText: {
      en:
        `The <a href="https://developers.example.com/en/docs/quapcha/usage/" target="_blank">TLS option</a> is used when you want to encrypt communications between a client such as a PC and Quoracomm. For example, a device listening over HTTP can be accessed over HTTPS. <strong>Do not</strong> enable this option for communications that are already encrypted, such as SSH.`,
      ja:
        `TLS オプションは、PC などのクライアントと QUORACOMM 間の通信を暗号化したい場合にチェックします。たとえば、チェックすると HTTP で待ち受けているデバイスに HTTPS でアクセスすることができます。このオプションは、SSH のようにすでに暗号化されている通信では<strong>チェックしないでください</strong>。詳細は<a href="https://users.example.com/ja-jp/docs/quapcha/use-quapcha/" target="_blank">ユーザーコンソールでオンデマンドリモートアクセスを作成する</a>を参照してください。`,
    },
    tlsRequired: { en: `TLS`, ja: `TLS` },
    useCurrentOnline: { en: `The currently active online connection will be used`,
      ja: `オンラインのサブスクリプションが使用されます` },
    validationMessageBogusCIDR: { en: `Please specify IP address range(s) using comma-separated CIDR notation.`,
      ja: `カンマ区切りの CIDR 表記を使用して IP アドレス範囲を指定してください。` },
    viewConfiguration: { en: `View Configuration`, ja: `設定を表示` },
  },
};
