export const translations = {
  editEventActions: {
    action: {
      label: { en: `ACTION`, ja: `アクション` },
      SendMailAction: { en: `Send email`, ja: `メールを送る` },
      ChangeSpeedClassAction: { en: `Change speed class`, ja: `SIM の速度クラスを変更する` },
      SendMailToOperatorAction: { en: `Send mail to operator`,
        ja: `オペレーターのプライマリメールアドレスにメールを送る` },
      ActivationAction: { en: `Activation`, ja: `SIM のステータスを使用中 (active) にする` },
      DeactivationAction: { en: `Deactivation`, ja: `SIM のステータスを休止中 (inactive) にする` },
      ExecuteWebRequestAction: { en: `Execute web request`, ja: `指定の URL にリクエストを送る` },
      InvokeAWSLambdaAction: { en: `Invoke AWS Lambda`, ja: `AWS Lambda を呼び出す` },
      ImeiLockAction: { en: `IMEI lock`, ja: `IMEI ロック` },
      StandbyAction: { en: `Standby`, ja: `SIM のステータスを利用開始待ち (standby) にする` },
      SuspendAction: { en: `Suspend`, ja: `SIM のステータスを利用中断中 (suspended) にする` },
    },
    runPriority: {
      IMMEDIATELY: { en: `Immediately`, ja: `すぐに実行` },
      BEGINNING_OF_NEXT_MONTH: { en: `Beginning of next month`, ja: `翌月初` },
      BEGINNING_OF_NEXT_DAY: { en: `Beginning of next day`, ja: `翌日開始時` },
      AFTER_ONE_DAY: { en: `After one day`, ja: `1日後` },
      NEVER: { en: `Never`, ja: `実行しない` },
      label: { en: `Run`, ja: `実行するタイミング` },
    },
    executionOffsetTime: {
      label: { en: `Run in (minutes)`, ja: `オフセット(分)` },
    },
    actionValueComponentLabel: {
      emailTo: { en: `To`, ja: `宛先` },
      emailTitle: { en: `Title`, ja: `件名` },
      emailMessage: { en: `Message`, ja: `本文` },
      speedClass: { en: `Class`, ja: `速度クラス` },
      webRequestUrl: { en: `URL`, ja: `URL` },
      webRequestHttpMethod: { en: `Method`, ja: `Method` },
      webRequestContentType: { en: `Content Type`, ja: `Content Type` },
      webRequestBody: { en: `Body`, ja: `Body` },
      invokeAWSLambdaEndpoint: { en: `Endpoint`, ja: `Endpoint` },
      invokeAWSLambdaFunctionName: { en: `Function Name`, ja: `Function Name` },
      invokeAWSLambdaAccessKey: { en: `Access Key`, ja: `Access Key` },
      invokeAWSLambdaSecretAccessKey: { en: `Secret Access Key`, ja: `Secret Access Key` },
      invokeAWSLambdaCredentialsId: { en: `Credentials Id`, ja: `認証情報 Id` },
      invokeAWSLambdaParameters: { en: `Parameters`, ja: `Parameters` },
    },
    webRequestHeaders: {
      keyLabel: { en: `Header Name`, ja: `HTTP Header のキー` },
      valueLabel: { en: `Header Value`, ja: `HTTP Header の値` },
    },
    lambdaParams: {
      keyLabel: { en: `Param Name`, ja: `Param Name` },
      valueLabel: { en: `Param Value`, ja: `Param Value` },
    },
    viewSecretKeyToggle: { en: `Show/Hide Secret Access Key`, ja: `Secret Access Key 表示/非表示` },
    speedClass: {
      s1: {
        minimum: { en: `s1.minimum`, ja: `s1.minimum` },
        slow: { en: `s1.slow`, ja: `s1.slow` },
        standard: { en: `s1.standard`, ja: `s1.standard` },
        fast: { en: `s1.fast`, ja: `s1.fast` },
        '4xfast': { en: `s1.4xfast`, ja: `s1.4xfast` },
        '8xfast': { en: `s1.8xfast`, ja: `s1.8xfast` },
      },
      xm: {
        minimum: { en: `xm.minimum`, ja: `xm.minimum` },
        slow: { en: `xm.slow`, ja: `xm.slow` },
        standard: { en: `xm.standard`, ja: `xm.standard` },
        fast: { en: `xm.fast`, ja: `xm.fast` },
        '4xfast': { en: `xm.4xFast`, ja: `xm.4xFast` },
      },
    },
    httpMethod: {
      GET: { en: `GET`, ja: `GET` },
      POST: { en: `POST`, ja: `POST` },
      PUT: { en: `PUT`, ja: `PUT` },
      DELETE: { en: `DELETE`, ja: `DELETE` },
    },
    contentType: {
      'application/json': { en: `application/json`, ja: `application/json` },
    },
    inpuValidationMessage: {
      required: { en: `This field is required`, ja: `このフィールドは入力必須です` },
      email: { en: `Please enter valid email address`, ja: `メールアドレスは正しく入力してください` },
      invokeAWSLambdaParams: {
        pattern: { en: `Parameter name must contain name parameter1 to paramter5`,
          ja: `パラメータ名は parameter1 から parameter5 である必要があります` },
      },
    },
    actionInfo: {
      standbyActionInfo1: {
        en:
          `Please note that changing the status back to <code>active</code> or <code>inactive</code> may affect the fees charged. Please see the <a href="https://developers.example.com/en/docs/reference/fees/" target="_blank">pricing page</a> for more details.`,
        ja:
          `この SIM を <code>使用中</code> または <code>休止</code> 状態に戻す際に、アクティベーション料金が適用される場合があります。詳しくは弊社 Web サイトの<a href="https://quoracomm.jp/services/air/cellular/pricing/" target="_blank">料金ページ</a>をご確認ください。`,
      },
      standbyActionInfo2: { en: `The standby action will only apply to plan-KM1 SIMs.`,
        ja: `このアクションは plan-KM1 の SIM にのみ適用されます。` },
      suspendActionInfo1: {
        en:
          `Please note that changing the status back to <code>active</code> or <code>inactive</code> may affect the fees charged. Please see the <a href="https://developers.example.com/en/docs/air/subscriber-status/" target="_blank">pricing page</a> for more details.`,
        ja:
          `この SIM を <code>使用中</code> または <code>休止</code> 状態に戻す際に、アクティベーション料金が適用される場合があります。詳しくは弊社 Web サイトの<a href="https://users.example.com/ja-jp/docs/air/statuses/" target="_blank">料金ページ</a>をご確認ください。`,
      },
    },
    availablePlaceholders: {
      richtipLabel: { en: `See available placeholders`, ja: `使用できる変数` },
      aboutPlaceholders: {
        en:
          `You can use placeholders given below in email's title and body. Besides this, you can use variables supported by rule.`,
        ja:
          `メールのタイトルおよび本文には以下の変数を使用できます。これ以外にもルールでサポートされる変数を使用できます。`,
      },
      placeholderTable: {
        column: {
          placeholders: { en: `Placeholder`, ja: `変数` },
          description: { en: `Description`, ja: `説明` },
        },
        placeholder: {
          simId: { en: `\${simId}`, ja: `\${simId}` },
          imsi: { en: `\${imsi}`, ja: `\${imsi}` },
          operatorId: { en: `\${operatorId}`, ja: `\${operatorId}` },
          date: { en: `\${date}`, ja: `\${date}` },
          year: { en: `\${year}`, ja: `\${year}` },
          month: { en: `\${month}`, ja: `\${month}` },
          day: { en: `\${day}`, ja: `\${day}` },
          tags: { en: `\${tags.[optional tag name]}`, ja: `\${tags.[任意のタグ名]}` },
          coverage: { en: `\${coverage}`, ja: `\${coverage}` },
          status: {
            oldStatus: { en: `\${oldStatus}`, ja: `\${oldStatus}` },
            newStatus: { en: `\${newStatus}`, ja: `\${newStatus}` },
          },
          speedClass: {
            oldSpeedClass: { en: `\${oldSpeedClass}`, ja: `\${oldSpeedClass}` },
            newSpeedClass: { en: `\${newSpeedClass}`, ja: `\${newSpeedClass}` },
          },
          subscription: {
            subscription: { en: `\${subscription}`, ja: `\${subscription}` },
            otaStatus: { en: `\${otaStatus}`, ja: `\${otaStatus}` },
            imsi: { en: `\${imsi}`, ja: `\${imsi}` },
            primaryImsi: { en: `\${primaryImsi}`, ja: `\${primaryImsi}` },
          },
        },
        placeholderDescription: {
          simId: { en: `The SIM ID of the SIM or subscriber`, ja: `SIM ID` },
          imsi: { en: `The IMSI of the SIM or subscriber`, ja: `IMSI` },
          operatorId: { en: `The Operator ID that the SIM or subscriber belongs to`, ja: `オペレーター ID` },
          date: { en: `The date that the event handler is matched (format: <code>yyyy/m/d</code>)`,
            ja: `送信日付 (<code>yyyy/m/d</code>)` },
          year: { en: `The year that the event handler is matched (format: <code>yyyy</code>)`,
            ja: `送信年 (<code>yyyy</code>)` },
          month: { en: `The month that the event handler is matched (format: <code>m</code>)`,
            ja: `送信月 (<code>m</code>)` },
          day: { en: `The day that the event handler is matched (format: <code>d</code>)`,
            ja: `送信日 (<code>d</code>)` },
          tags: { en: `The value of the SIM or subscriber's specific tag (e.g.: <code>\${tags.name}</code>)`,
            ja: `対象 SIM のタグ名に対応する値 （例：<code>tags.name</code>)` },
          coverage: {
            en:
              `The coverage type of the SIM or subscriber (<code>g</code> for Global coverage, or <code>jp</code> for Japan coverage)`,
            ja: `対象 SIM のカバレッジタイプ`,
          },
          status: {
            oldStatus: { en: `The SIM or subscriber's previous status`,
              ja: `SIMまたはサブスクライバーの変更前のステータス` },
            newStatus: { en: `The SIM or subscriber's current status`,
              ja: `SIMまたはサブスクライバーの変更後のステータス` },
          },
          speedClass: {
            oldSpeedClass: { en: `The SIM or subscriber's previous speed class`,
              ja: `SIMまたはサブスクライバーの変更前の速度クラス` },
            newSpeedClass: { en: `The SIM or subscriber's current speed class`,
              ja: `SIMまたはサブスクライバーの変更後の速度クラス` },
          },
          subscription: {
            subscription: { en: `The name of the subscription container being added to the SIM`,
              ja: `OTA で追加されたサブスクリプション` },
            otaStatus: {
              en:
                `The delivery status of the subscription container (<code>started</code>, <code>finished</code>, or <code>failed</code>)`,
              ja:
                `サブスクリプション追加のステータス<br><code>started:</code>サブスクリプションの追加を開始した状態.<br><code>finished:</code>サブスクリプションの追加が完了した状態<br><code>failed:</code>サブスクリプションの追加が失敗した状態`,
            },
            imsi: {
              en:
                `The IMSI of the newly added subscription container if the OTA status is <code>finished</code>, or the primary IMSI of the SIM if the OTA status is <code>started</code> or <code>failed</code>`,
              ja:
                `ステータスによって入る値は異なります。ステータスは<code>finished</code>の場合は追加されたサブスクリプションの IMSIとなります。。ステータスは<code>started</code>または<code>failed</code>の場合はSIMのプライマリIMSIとなります`,
            },
            primaryImsi: { en: `The IMSI of the SIM.`, ja: `SIMのIMSI` },
          },
        },
      },
    },
  },
};
