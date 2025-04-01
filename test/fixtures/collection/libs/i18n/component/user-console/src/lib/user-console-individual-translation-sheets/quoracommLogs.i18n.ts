export const translations = {
  QuoracommLogs: {
    button: {
      clearFilter: { en: `Clear`, ja: `クリア` },
      copyAsCSV: { en: `Copy as CSV`, ja: `CSV形式でコピー` },
      copyAsJSON: { en: `Copy as JSON`, ja: `JSON形式でコピー` },
      copyAsText: { en: `Copy as Text`, ja: `テキストとしてコピー` },
      downloadLogs: { en: `Download`, ja: `ダウンロード` },
      filter: { en: `Filter`, ja: `絞り込み` },
      filterLogs: { en: `Filter Logs`, ja: `ログを絞り込む` },
      next: { en: `Next Page`, ja: `次のページ` },
      previous: { en: `Previous Page`, ja: `前のページ` },
      refresh: { en: `Refresh`, ja: `更新` },
    },
    columnTitle: {
      operatorId: { en: `Operator ID`, ja: `オペレーター ID` },
      remoteIpAddress: { en: `IP address`, ja: `IP アドレス` },
      displayDate: { en: `Time`, ja: `時刻` },
      userName: { en: `Username`, ja: `ユーザー名` },
      statusCode: { en: `Status code`, ja: `ステータスコード` },
      requestPath: { en: `Request path`, ja: `リクエストパス` },
      direction: { en: `Direction`, ja: `詳細` },
      connectionId: { en: `Connection ID`, ja: `Connection ID` },
      createdAt: { en: `Created at`, ja: `日時` },
      imsi: { en: `IMSI`, ja: `IMSI` },
      simId: { en: `SIM ID`, ja: `SIM ID` },
      tls: { en: `TLS`, ja: `TLS` },
      type: { en: `Type`, ja: `イベントタイプ` },
      message: { en: `Message`, ja: `メッセージ` },
      time: { en: `Time`, ja: `時刻` },
      service: { en: `Service`, ja: `サービス` },
      resourceType: { en: `Resource type`, ja: `リソースタイプ` },
      resourceId: { en: `Resource ID`, ja: `リソース ID` },
      body: { en: `Body`, ja: `本文` },
    },
    copiedAsCSV: { en: `✓ Copied selected log entries as CSV.`, ja: `✓ 選択した監査ログをCSV形式でコピーしました` },
    copiedAsJSON: { en: `✓ Copied selected log entries as JSON.`, ja: `✓ 選択した監査ログをJSON形式でコピーしました` },
    copiedAsText: { en: `✓ Copied selected log entries as text.`,
      ja: `✓ 選択した監査ログをテキストとしてコピーしました` },
    ErrorLogResourceType: {
      all: { en: `All resources`, ja: `All resources` },
      Subscriber: { en: `Subscriber`, ja: `Subscriber` },
      Device: { en: `Device`, ja: `Device` },
      SquignoxDevice: { en: `Squignox Device`, ja: `Squignox Device` },
      LoraDevice: { en: `LoRaWAN Device`, ja: `LoRaWAN Device` },
    },
    heading: {
      auditLogs: { en: `Audit Logs`, ja: `監査ログ` },
      errorLogs: { en: `Error Logs`, ja: `エラーログ` },
      quapchaAuditLogs: { en: `Quapcha Audit Logs`, ja: `Quapcha 監査ログ` },
    },
    filterButtonTitle: { en: `Filter`, ja: `絞り込み` },
    hoverHelpText: {
      copyAsCSV: { en: `Copy selected log entries as CSV (comma-separated values)`,
        ja: `選択した監査ログをCSV(カンマ区切り)形式でコピー` },
      copyAsJSON: { en: `Copy selected log entries as JSON`, ja: `選択した監査ログをJSON形式でコピー` },
      copyAsText: { en: `Copy selected log entries as text`, ja: `選択した監査ログをテキストとしてコピー` },
      next: { en: `Show next page of log entries`, ja: `次のページを表示` },
      previous: { en: `Show previous page of log entries`, ja: `前のページを表示` },
      refresh: { en: `Reload the list of log entries`, ja: `監査ログのリストを更新する` },
    },
    audit_logs_enterprise_sub_status: {
      saving: { en: `Saving the change to your Audit Logs Enterprise subscription...`,
        ja: `監査ログのエンタープライズオプションを切り替える` },
      subscribed: {
        description: { en: `You're subscribed to Audit Logs Enterprise.`,
          ja: `監査ログのエンタープライズオプションは有効になっています。` },
        openModal: { en: `Unsubscribe`, ja: `無効にする` },
        transition: { en: `Unsubscribe`, ja: `無効にする` },
        transitioned: { en: `Audit Logs Enterprise subscription has been canceled.`,
          ja: `監査ログのエンタープライズオプションは無効になりました。` },
      },
      unsubscribed: {
        description: { en: `You don't have a subscription to Audit Logs Enterprise.`,
          ja: `監査ログのエンタープライズオプションは無効になっています。` },
        openModal: { en: `Subscribe`, ja: `有効にする` },
        transition: { en: `Subscribe`, ja: `追加費用を支払い有効にする` },
        transitioned: { en: `Audit Logs Enterprise subscription has been enabled.`,
          ja: `監査ログのエンタープライズオプションは有効になりました。` },
      },
    },
    audit_logs_enterprise_modal: {
      subscribe: {
        title: { en: `Add subscription to Audit Logs Enterprise?`,
          ja: `監査ログのエンタープライズオプションを有効にしますか？` },
        body: { en: `<div class="ds-rows">
  <div class="ds-notice --warning"><span class="text --alert">Please note that subscribing to this service will incur additional costs.</span> Please refer to <a href='https://developers.example.com/en/docs/reference/fees/#audit-logs' target='_blank'>the pricing information</a> on the website for more details.</div>
  <div>
    <p>Subscribing to the Audit Logs Enterprise feature will enable you to search, filter, and view a much more complete history of your accounts API usage.</p>
    <p>Please note that changing the subscription status does not take effect immediately. There may be a delay of up to 20 minutes, during which all logs will be unavailable.</p>
    <p>Note that no log messages will be lost, but they will not be viewable until the subscription change has completed.</p>
  </div>
</div>
`, ja: `<div class="ds-rows">
  <div class="ds-notice --warning"><span class="text --alert">このオプションを有効にすると、追加費用が発生します。</span>詳しくは弊社 Web サイトの <a href='https://quoracomm.jp/support/audit_logs/' target='_blank'>料金ページ</a> をご確認ください。</div>
  <div>
    <p>監査ログのエンタープライズオプションを有効にすると、ユーザーの API 呼び出しに関するより詳細な履歴を、検索、フィルター、表示できます。標準の監査ログとの違いについては <a href="https://users.example.com/ja-jp/docs/api-audit-logs/">監査ログ</a> を参照してください。</p>
    <p>エンタープライズオプションの切り替えには、ログの量に応じて数十分程度の時間がかかります。</p>
    <p>ログメッセージは失われませんが、その間は (無償提供で参照できる範囲のログを含む) すべてのログが参照できません。</p>
  </div>
</div>
` },
      },
      unsubscribe: {
        title: { en: `Cancel subscription to Audit Logs Enterprise?`,
          ja: `監査ログのエンタープライズオプションを無効にしますか？` },
        body: {
          en:
            `<p>Unsubscribing will cancel your account's subscription to the Audit Logs Enterprise feature. You will no longer be charged the monthly subscription fee. The free log history will still be available, but your account will no longer be able to access all of the additional log history that is available via the Audit Logs Enterprise feature.</p>
<p>Please note that changing the subscription status does not take effect immediately. There may be a delay of up to 20 minutes, during which all logs (including the limited subset of logs that is available for free) will be unavailable.</p>
<p>Note that no log messages will be lost, but they will not be viewable until the subscription change has completed.</p>
`,
          ja:
            `<p>監査ログのエンタープライズオプションを無効にすると、当オプション料金は翌月から請求されません。参照できるログは無償提供される範囲に限られます。</p>
<p>エンタープライズオプションの切り替えには、ログの量に応じて数十分程度の時間がかかります。</p>
<p>ログメッセージは失われませんが、その間は (無償提供で参照できる範囲のログを含む) すべてのログが参照できません。</p>
`,
        },
      },
    },
    quapcha_sub_status: {
      saving: { en: `Saving the change to your Quapcha subscription...`,
        ja: `Saving the change to your Quapcha subscription...` },
      subscribed: {
        description: { en: `You're subscribed to Quapcha audit logs.`,
          ja: `QUORACOMM Quapcha の監査ログオプションが有効になっています。` },
        transition: { en: `Unsubscribe`, ja: `保存期間を延長する` },
        transitioned: { en: `Quapcha audit logs subscription has been disabled.`,
          ja: `Quapcha 監査ログオプションを有効にしました。` },
      },
      unsubscribed: {
        description: { en: `You don't have a subscription to Quapcha audit logs.`,
          ja: `QUORACOMM Quapcha 監査ログは24時間保存されます。` },
        transition: { en: `Subscribe`, ja: `無効にする` },
        transitioned: { en: `Quapcha audit logs subscription has been enabled.`,
          ja: `Quapcha 監査ログオプションを無効にしました。` },
      },
    },
    quapcha_modal: {
      subscribe: {
        title: { en: `Confirmation: Subscribe for Quapcha audit logs`,
          ja: `Confirmation: Subscribe for Quapcha audit logs` },
        body: {
          en:
            `<p>Enabling this option will generate additional costs. Please refer to <a href='https://www.example.com/pricing/ ' target='_blank'>the pricing information</a> on the website for the details.</p>

<p>Immediately after enabling the Quapcha audit log retention period extension, past logs may not be displayed until the audit log migration is completed. Sorry for any inconvenience.</p>
`,
          ja:
            `<p>Enabling this option will generate additional costs. Please refer to <a href='https://www.example.com/pricing/ ' target='_blank'>the pricing information</a> on the website for the details.</p>
<p>Immediately after enabling the Quapcha audit log retention period extension, past logs may not be displayed until the audit log migration is completed. Sorry for any inconvenience.</p>
`,
        },
      },
      unsubscribe: {
        title: { en: `Confirmation: Unsubscribe from Quapcha audit logs`,
          ja: `Confirmation: Unsubscribe from Quapcha audit logs` },
        body: {
          en:
            `<p>Clicking <i>Unsubscribe</i> below will unsubscribe your account from Quapcha audit logs service.</p> <p>Unsubscribing from Quapcha audit logs will immediately reduce visible Quapcha logs to those from the past 24 hours.</p>`,
          ja:
            `<p>Clicking <i>Unsubscribe</i> below will unsubscribe your account from Quapcha audit logs service.</p> <p>Unsubscribing from Quapcha audit logs will immediately reduce visible Quapcha logs to those from the past 24 hours.</p>`,
        },
      },
    },
    placeholder: {
      resourceId: { en: `Resource ID`, ja: `リソース ID` },
    },
    itemsPerPage: { en: `Items per page:`, ja: `表示件数` },
    logDetail: { en: `Log detail`, ja: `ログ詳細` },
    noAuditLogRecordsExist: { en: `No Audit Log entries found`, ja: `監査ログが存在しません` },
    noAuditLogRecordsMatchingTheFilterExist: { en: `No Audit Log entries matching the search criteria exist`,
      ja: `検索条件に一致する監査ログが存在しません` },
    noErrorLogRecordsExist: { en: `No Error Log entries found`, ja: `エラーログが存在しません` },
    noErrorLogRecordsMatchingTheFilterExist: { en: `No Error Log entries matching the search criteria exist`,
      ja: `検索条件に一致するエラーログが存在しません` },
    noQuapchaAuditLogRecordsExist: { en: `No Quapcha Audit Log entries found`, ja: `Quapcha 監査ログが存在しません` },
    noQuapchaAuditLogRecordsMatchingTheFilterExist: {
      en: `No Quapcha Audit Log entries matching the search criteria exist`,
      ja: `検索条件に一致する Quapcha 監査ログが存在しません`,
    },
    pleaseEnterValidDateRangeHelpText: {
      en: `To filter the log entries by date, please enter a valid date range, then press the Filter Logs button.`,
      ja: `監査ログを日付で絞り込むには、有効な日付範囲を指定し、[ログを絞り込む]ボタンを押してください。`,
    },
    pressSearchToUpdateHelpText: {
      en: `Press the Filter Logs button to show log entries matching the specified date range.`,
      ja: `[ログを絞り込む]ボタンをクリックして、指定した日付範囲に一致する監査ログを表示します。`,
    },
    rootUserDisplayName: { en: `<root user>`, ja: `<ルートユーザー>` },
    savingChangesToSubscription: { en: `Saving changes to subscription...`, ja: `変更を適用しています...` },
    selectionCountHint: { en: `({{ count }} selected)`, ja: `({{ count }} 件 選択済み)` },
    showingXtoY: { en: `Items {{ first }}–{{ last }}`, ja: `({{ first }}-{{ last }} 件目)` },
    showingXtoYofZ: { en: `Items {{ first }}–{{ last }} of {{ total }}`,
      ja: `({{ total }} 件中 {{ first }}-{{ last }} 件目)` },
    ServiceSelectorOption: {
      all: { en: `All services`, ja: `All services` },
      beam: { en: `Quoracomm Beam`, ja: `QUORACOMM Beam` },
      junq: { en: `Quoracomm Junq`, ja: `QUORACOMM Junq` },
      funnel: { en: `Quoracomm Funnel`, ja: `QUORACOMM Funnel` },
      harquest: { en: `Quoracomm Harquest`, ja: `QUORACOMM Harquest` },
      quapcha: { en: `Quoracomm Quapcha`, ja: `QUORACOMM Quapcha` },
      orbit: { en: `Quoracomm Orbit`, ja: `QUORACOMM Orbit` },
      unifiedEndpoint: { en: `Unified Endpoint`, ja: `Unified Endpoint` },
    },
    toDateIndicator: { en: ` - `, ja: ` - ` },
  },
};
