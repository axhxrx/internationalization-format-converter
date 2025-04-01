export const translations = {
  support: {
    paidSupport: {
      planChangeNotice: { en: `Your support plan will change to {{plan}} from {{date}}`,
        ja: `{{date}} から {{plan}} にサポートプランが変更されます` },
      heading: { en: `Support plans`, ja: `サポートプラン` },
      description: { en: `Choose a support plan to match your business requirements`,
        ja:
          `お客様のビジネスニーズに合ったサポートプランを選択してください。サービスの詳細は <a href="https://quoracomm.jp/support/plans/" target="_blank">こちら<i class="ds-icon --icon-external-link --xtiny"></i></a>を参照してください。` },
      globalNotSupported: {
        en:
          `Global Coverage support plans for your account are linked with Japan Coverage support plans. To add, change, or cancel a support plan, please`,
        ja: `このサービスの利用には日本円での支払いが必要です。カバレッジタイプを`,
      },
      switchToJpCoverage: { en: `switch to Japan Coverage`, ja: `日本へ変更してください。` },
    },
    changePlanError: {
      en: `Changing the plan was not successful. Please note that only the root user can change the Support plan.`,
      ja: `プラン切り替えは行われていません。プラン切り替えは Root ユーザのみが実行できます。`,
    },
    basic: {
      coverage: { en: `Japan & Global`, ja: `日本とグローバル` },
      planTitle: { en: `Basic`, ja: `Basic` },
      planDescription: { en: `Basic support for all projects including development phase.`,
        ja: `開発中を含むすべてのプロジェクトで利用できるサポート` },
      pricing: { en: `Free`, ja: `無料` },
      hours: { en: `Weekdays 10am-6pm`, ja: `平日 10:00 - 18:00` },
      responseTime: { en: `Best-effort`, ja: `ベストエフォート` },
      supportChannel: {
        en:
          `<a href="https://support.example.com/hc/en-us/" target="_blank">Support portal<i class="ds-icon --icon-external-link --xtiny"></i></a>`,
        ja:
          `<a href="https://support.example.com/hc/ja/" target="_blank">サポートサイト<i class="ds-icon --icon-external-link --xtiny"></i></a>`,
      },
    },
    priority: {
      coverage: { en: `Japan & Global`, ja: `日本とグローバル` },
      planTitle: { en: `Priority`, ja: `Priority` },
      planDescription: { en: `Guaranteed response times and expanded support for production projects.`,
        ja: `応答時間の保証と広範囲の問題切り分けを提供する本番環境向けのサポート` },
      pricing: {
        main: { en: `5% of service fee`, ja: `サービス料金の 5%` },
        sub: { en: `(or ¥10,780 minimum)`, ja: `(または 10,780 円のいずれか高い方)` },
      },
      hours: { en: `Weekdays 10am-6pm`, ja: `平日 10:00 - 18:00` },
      responseTime: {
        urgent: {
          title: { en: `Urgent: Within 4 business hours`, ja: `緊急: 4 営業時間以内` },
          tooltip: {
            title: { en: `<strong>Urgent</strong> issues impacting customer’s business significantly`,
              ja: `<strong>緊急</strong> お客様のビジネスに重大な影響を与える問題` },
            point1: { en: `Applicable for production environments issues only`, ja: `本番稼働中にのみ適用` },
            point2: { en: `Not applicable for development phase issues or staging environments issues`,
              ja: `開発上の問題やステージング環境の問題は含まれません` },
            point3: { en: `The majority of connectivity is down or critical service is completely unavailable`,
              ja: `過半数の接続が失われるか、重要な機能が完全に利用不可能` },
            point4: { en: `No workaround exists`, ja: `回避策が存在しない` },
          },
        },
        high: {
          title: { en: `High: Within 8 business hours`, ja: `高: 8 営業時間以内` },
          tooltip: {
            title: { en: `<strong>High</strong> issues declining the service level of customer’s business`,
              ja: `<strong>高</strong> お客様のサービスレベルが低下する問題` },
            point1: { en: `Applicable for production environments issues only`, ja: `本番稼働中のみに適用` },
            point2: { en: `Not applicable for development phase issues or staging environments issues`,
              ja: `開発上の問題やステージング環境での問題は含まれません` },
            point3: { en: `The majority of connectivity has intermittent issues or service level is degraded`,
              ja: `多数の回線に断続的な問題があり、サービスレベル低下による影響がある` },
            point4: { en: `Workaround may exist`, ja: `回避策が存在する可能性がある` },
          },
        },
        normal: {
          title: { en: `Best-effort`, ja: `普通 / 低: ベストエフォート` },
          tooltip: {
            title: { en: `<strong>Middle/Low</strong> general support questions`,
              ja: `<strong>普通 / 低</strong> 一般的なサポートの質問` },
            point1: { en: `Questions about Quoracomm product`, ja: `Quoracomm 製品に関する質問` },
            point2: { en: `Feature requests`, ja: `機能リクエスト` },
            point3: { en: `Troubleshooting of development environment`, ja: `開発環境のトラブルシューティング` },
          },
        },
      },
      priorityResponse: { en: `Responses are prioritized over lower tier support requests`,
        ja: `下位のサポートプランより優先` },
      supportChannel: {
        support: {
          en:
            `<a href="https://support.example.com/hc/en-us/" target="_blank">Support portal<i class="ds-icon --icon-external-link --xtiny"></i></a>`,
          ja:
            `<a href="https://support.example.com/hc/ja/" target="_blank">サポートサイト<i class="ds-icon --icon-external-link --xtiny"></i></a>`,
        },
        webMeeting: { en: `Web meeting (office hours)`, ja: `Web ミーティング (オフィスアワー)` },
      },
    },
    enterprise: {
      coverage: { en: `Japan & Global`, ja: `日本とグローバル` },
      planTitle: { en: `Enterprise`, ja: `Enterprise` },
      planDescription: {
        en: `Round the clock tailored support with guaranteed response times for mission critical projects.`,
        ja: `24 時間 365 日の体制などを提供するミッションクリティカルなプロジェクト向けのサポート`,
      },
      pricing: { en: `Contact us`, ja: `個別見積` },
      hours: { en: `24/7 365 days`, ja: `24 時間 365 日` },
      responseTime: { en: `Tailored`, ja: `個別設定可能` },
      priorityResponse: { en: `Responses are prioritized over lower tier support requests`,
        ja: `下位のサポートプランより優先` },
      quotePageLink: { en: `https://quoracomm.jp/contact/`, ja: `https://quoracomm.jp/contact/` },
      supportChannel: {
        support: {
          en:
            `<a href="https://support.example.com/hc/en-us/" target="_blank">Support portal<i class="ds-icon --icon-external-link --xtiny"></i></a>`,
          ja:
            `<a href="https://support.example.com/hc/ja/" target="_blank">サポートサイト<i class="ds-icon --icon-external-link --xtiny"></i></a>`,
        },
        webMeeting: { en: `Web meeting (office hours)`, ja: `Webミーティング（オフィスアワー）` },
        tailored: {
          title: { en: `Tailored`, ja: `個別設定可能` },
          tooltip: { en: `Support channel examples could include phone support, text chat,  Slack etc.`,
            ja: `サポートチャンネルの例として、電話サポート、テキストチャット、Slackなどが含まれます` },
        },
      },
      technicalAccountManager: { en: `Optional`, ja: `対応可` },
    },
    action: {
      switchToBasic: { en: `Switch to the Basic plan`, ja: `Basic プランに切り替え` },
      switchToPriority: { en: `Switch to the Priority plan`, ja: `Priority プランに切り替え` },
      currentPlan: { en: `Current plan`, ja: `現在のプラン` },
      requestQuote: { en: `Request a quote`, ja: `見積り請求` },
      switch: { en: `Switch`, ja: `切り替え` },
      contactUs: { en: `Contact us to change the plan`, ja: `切り替えを依頼する` },
      contactUsLink: { en: `https://quoracomm.jp/contact/`, ja: `https://quoracomm.jp/contact/` },
    },
    coverage: {
      title: { en: `Target coverage`, ja: `対象カバレッジ` },
    },
    pricing: {
      title: { en: `Monthly pricing`, ja: `月額料金` },
    },
    hours: {
      title: { en: `Support hours`, ja: `サポート時間` },
    },
    responseTime: {
      title: { en: `First response time`, ja: `初回応答時間 (SLA)` },
      subtitle: {
        en:
          `Read more about <a href="https://users.example.com/ja-jp/docs/support/severity/" target="_blank">incident severity<i class="ds-icon --icon-external-link --xtiny"></i></a>`,
        ja:
          `インシデントの重要度についての詳細は <a href="https://users.example.com/ja-jp/docs/support/severity/" target="_blank">こちら<i class="ds-icon --icon-external-link --xtiny"></i></a>`,
      },
    },
    priorityResponse: {
      title: { en: `Priority response`, ja: `優先対応` },
    },
    supportChannel: {
      title: { en: `Support channel`, ja: `対応窓口` },
    },
    technicalAccountManager: {
      title: { en: `Technical account manager`, ja: `専任技術者 (Technical Account Manager)` },
    },
    supportScope: {
      title: { en: `Support scope`, ja: `サポート範囲` },
      subtitle: {
        en:
          `Read more about <a href="https://users.example.com/ja-jp/docs/support/about/" target="_blank">scope of support <i class="ds-icon --icon-external-link --xtiny"></i></a>`,
        ja:
          `サポート範囲についての詳細は <a href="https://users.example.com/ja-jp/docs/support/about/" target="_blank">こちら<i class="ds-icon --icon-external-link --xtiny"></i></a>`,
      },
      billing: { en: `Billing`, ja: `請求` },
      connectivity: { en: `Connectivity`, ja: `コネクティビティ` },
      device: { en: `Customer's device (best-effort)`, ja: `お客様デバイス (ベストエフォート)` },
      cloud: { en: `Customer's cloud (best-effort)`, ja: `お客様クラウド (ベストエフォート)` },
      incidentReport: {
        title: { en: `Incident Report`, ja: `障害報告書` },
        tooltip: { en: `Incident Report will be provided in response to a connectivity issue`,
          ja: `障害報告書はコネクティビティの問題に対して提供されます` },
      },
    },
    confirm: {
      applyPriority: {
        en:
          `Upgrading to the Priority plan will result in a monthly charge. Please review the pricing details before confirming the change. <br>Are you sure you want to proceed for Priority plan ?`,
        ja:
          `Priority プランにアップグレードすると、月額料金が発生します。 変更前に、料金の詳細を確認してください。 Priority プランに更新しますか？`,
      },
      downgradePriority: {
        en:
          `You are switching from the Enterprise plan to the Priority plan, resulting in the loss of 24/7 365 support. <br> Your Enterprise plan will be valid until the end of this month. <br><br> Are you sure you want to proceed with the downgrade?`,
        ja:
          `You are switching from the Enterprise plan to the Priority plan, resulting in the loss of 24/7 365 support and your Enterprise plan will be valid until the end of this month. Are you sure you want to proceed with the downgrade?`,
      },
      terminatePaid: {
        en:
          `Are you sure you want to cancel your existing support plan and switch to the Basic plan? <br>Your existing plan will remain active until the end of the month and will not be renewed.`,
        ja: `Basic プランに変更しますか？現在のプランを終了しても、サービスは月末まで有効です。`,
      },
    },
    support_login: { en: `Redirecting to support site ...`, ja: `サポートサイトにリダイレクトしています` },
    support_logout: { en: `signed out from support site, you may close this window`,
      ja: `サポートサイトからサインアウトしました このウィンドウはクローズして下さい` },
  },
};
