export const translations = {
  dashboard: {
    title: { en: `Dashboard`, ja: `ダッシュボード` },
    welcome: {
      title: { en: `Welcome`, ja: `ようこそ` },
      subtitle: { en: `Thank you for using the Quoracomm platform`,
        ja: `QUORACOMM プラットフォームをご利用いただきありがとうございます` },
    },
    registerFirstSim: {
      title: { en: `Order SIM Card`, ja: `SIM を購入する` },
      subtitle: { en: `Get your devices connected with an IoT SIM Card from Quoracomm`,
        ja: `QUORACOMM の IoT SIM でデバイスをクラウドに接続しましょう。` },
    },
    registerPaymentMethod: {
      title: { en: `Register payment information`, ja: `支払い情報を登録してください` },
      subtitle: { en: `To get started, please setup a`, ja: `利用開始するには、` },
      linkText: { en: `payment method`, ja: `お支払い方法を設定してください` },
    },
    billing: {
      title: { en: `Billing`, ja: `ご利用料金` },
      currentBillingTitle: { en: `Current billing this month`, ja: `今月のご利用料金` },
    },
    operatorDetails: {
      title: { en: `Operator Details`, ja: `オペレーター情報` },
      username: { en: `Username`, ja: `ユーザー名` },
      email: { en: `Email`, ja: `Email` },
      rootUser: { en: `Root User`, ja: `ルートユーザー` },
      samUser: { en: `SAM User`, ja: `SAM ユーザー` },
      operatorId: { en: `Operator ID`, ja: `ルートユーザー ID` },
    },
    productUpdates: {
      title: { en: `Product Updates`, ja: `更新情報` },
      noPosts: { en: `There are no entries here!`, ja: `まだエントリーがありません` },
    },
    vpgStatus: {
      title: { en: `VPG Status`, ja: `VPG ステータス` },
    },
    simStatusSummary: {
      title: { en: `SIM Status Summary`, ja: `SIM ステータス` },
      updatedTime: { en: `Last updated {{time}} (SIM status summary is updated once per day)`,
        ja: `最終更新時刻：{{time}} （SIM ステータスは１日に１回更新されます）` },
      subtitle: { en: `Total SIMs and Active SIMs`, ja: `すべての SIM の数と、ステータスごとの SIM の数` },
      totalSims: { en: `Total`, ja: `すべて` },
      activeSims: { en: `Active`, ja: `使用中` },
      inactive: { en: `Inactive`, ja: `休止中` },
      ready: { en: `Ready`, ja: `準備完了` },
      suspended: { en: `Suspended`, ja: `利用中断中` },
      standby: { en: `Standby`, ja: `利用開始待ち` },
    },
    beam: {
      title: { en: `Automatically Encrypt Traffic`, ja: `データ転送支援` },
      subtitle: { en: `With Quoracomm Beam`,
        ja: `デバイスから QUORACOMM プラットフォームに送信されたデータを、任意のサーバーに転送できます` },
      link: { en: `https://developers.example.com/en/docs/beam/`,
        ja: `https://users.example.com/ja-jp/docs/beam/use-beam/` },
    },
    billingAlert: {
      title: { en: `Billing Alerts`, ja: `ご利用料金アラート` },
      subtitle: { en: `Set up notifications to alert you when your billing exceeds set amounts`,
        ja: `利用料金が設定金額を超えたときにプライマリメールアドレスにメールを送信する` },
      link: { en: `https://developers.example.com/en/docs/account/billing/`,
        ja: `https://users.example.com/ja-jp/guides/accounting/check-usage/billing-alert/` },
    },
    mfa: {
      title: { en: `Setup MFA`, ja: `多要素認証` },
      subtitle: { en: `Secure your account with multi-factor authentication`,
        ja: `多要素認証でルートユーザー / SAM ユーザーを保護しましょう` },
      link: { en: `https://developers.example.com/en/docs/security/mfa/`,
        ja: `https://users.example.com/ja-jp/docs/mfa/` },
    },
    sam: {
      title: { en: `Create/Manage SAM users`, ja: `SAM ユーザー` },
      subtitle: {
        en:
          `Allow other people (users) in your organization to access your Quoracomm account by using Quoracomm Access Management (SAM)`,
        ja:
          `QUORACOMM Access Managament (SAM) は、ルートユーザーとは別の「SAM ユーザー」を作成し、SAM ユーザーごとに権限を細かく管理する機能です`,
      },
      link: { en: `https://developers.example.com/en/docs/security/users-and-roles/`,
        ja: `https://users.example.com/ja-jp/docs/sam/` },
    },
    recoveryEmail: {
      title: { en: `Setup Recovery email`, ja: `リカバリメールアドレス` },
      subtitle: {
        en: `Recover your account in case you lose access to your primary email address and cannot reset your password`,
        ja:
          `プライマリメールアドレスに送信されたメールを受信できない状況になった場合に、ソラコムからのメールを受信するためのメールアドレスです`,
      },
      link: { en: `https://developers.example.com/en/docs/account/email-settings/`,
        ja: `https://users.example.com/ja-jp/docs/email/` },
    },
    logs: {
      last24Hours: { en: `Last 24 hours`, ja: `直近 24 時間` },
      last7Days: { en: `Last 7 days`, ja: `直近 7 日間` },
      last3Entries: { en: `Last 3 log entries`, ja: `直近 3 件のログエントリ` },
      status: { en: `Status`, ja: `ステータス` },
      auditLog: {
        title: { en: `Audit log`, ja: `監査ログ` },
        noLogs: { en: `No log entries in last 24 hours`, ja: `直近 24 時間のログがありません` },
      },
      errorLog: {
        title: { en: `Error log`, ja: `エラーログ` },
        errors: { en: `Errors`, ja: `エラー` },
        noLogs: { en: `No log entries in the last 7 days`, ja: `直近 7 日間のログがありません` },
      },
    },
    dataTraffic: {
      title: { en: `Last 7 days data traffic`, ja: `直近 7 日間のデータトラフィック` },
    },
    trafficRanking: {
      title: { en: `Traffic ranking`, ja: `トラフィック量ランキング` },
      subtitle: { en: `Top 10 most active SIMS in the last 24 hours`,
        ja: `直近 24 時間でトラフィックが多かった SIM (上位 10 件)` },
      noData: { en: `No traffic ranking data in last 24 hours`,
        ja: `直近 24 時間の利用可能なトラフィックデータがありません` },
      volume: { en: `Traffic volume`, ja: `トラフィック量` },
      tooltip_click: { en: `Click to navigate to SIM details`, ja: `クリックして SIM 詳細に移動` },
    },
    dismiss: { en: `Dismiss`, ja: `表示しない` },
    developerGuide: { en: `Developer Guide`, ja: `ドキュメント` },
    removePanel: { en: `Remove panel`, ja: `非表示にする` },
  },
};
