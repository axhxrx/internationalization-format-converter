export const translations = {
  EmailSettingsComponent: {
    addNewEmail: { en: `Add new email`, ja: `メールアドレスを追加` },
    addNewEmailHelpText: { en: `To add a new email address, enter the address and click verify.`,
      ja: `メールアドレスを追加する場合は、メールアドレスを入力して「検証」ボタンを押してください。` },
    button: {
      tryAgain: { en: `Go back`, ja: `戻る` },
    },
    checkYourEmailHeading: { en: `Check your email`, ja: `メールを確認してください` },
    checkYourEmailBody: {
      en: `We sent a verification email to {{ email }}. Please click the link in the email to complete verification.`,
      ja: `検証メールを {{ email }} に送信しました。メール内に記載されたリンクをクリックしてください。`,
    },
    continue: { en: `Continue`, ja: `続ける` },
    emailAddress: { en: `Email address`, ja: `メールアドレス` },
    error: {
      body: {
        en:
          `An unexpected error occurred while trying to load email settings. Press the "Load Email Settings" button to try again. If the problem persists, please try again later.`,
        ja:
          `メール設定を取得する際に不明なエラーが発生しました。「メールアドレス設定の取得」ボタンを押してリトライしてください。もしこの問題が続く場合は、しばらくしてから試してください。`,
      },
      heading: {
        error: { en: `Error`, ja: `エラー` },
      },
      subheading: {
        unexpected: { en: `An unexpected error occurred.`, ja: `想定しないエラーが発生しました。` },
      },
      button: {
        loadEmailSettings: { en: `Load Email Settings`, ja: `メールアドレス設定の取得` },
        cancel: { en: `Cancel`, ja: `キャンセル` },
      },
      verificationFailedDueToError: {
        en:
          `Email verification did not succeed, due to the following error:<br><br>{{ message }} ({{ code }}).<br><br>Please try the email verification again.`,
        ja:
          `次のエラーによりメール検証に失敗しました。:<br><br>{{ message }} ({{ code }}).<br><br>もう一度メール検証を行ってください。`,
      },
      verificationFailedDueToUnknown: {
        en:
          `Email verification did not succeed, because an unexpected error occurred.<br><br>Please try the email verification again. If the problem persists, please try again later. We are sorry for the inconvenience.`,
        ja:
          `不明なエラーによりによりメール検証に失敗しました。<br><br>もう一度メール検証を行ってください。もしこの問題が続く場合は、しばらくしてから試してください。ご不便をおかけして申し訳ありません。`,
      },
    },
    billing: { en: `Billing {{ current }}/{{ max }}`, ja: `請求 {{ current }}/{{ max }}` },
    billingAddress: { en: `Billing address`, ja: `請求アドレス` },
    billing_tooltip: {
      jp: {
        default: {
          en:
            `These email addresses will receive a notification if there are any problems with payment.<br />You can select up to 5 additional email addresses that will receive these notifications. The primary email address will always receive all notifications.`,
          ja:
            `このメールアドレスはお支払いに問題があったときに通知されます。<br />最大５つのメールアドレスまで選択できます。プライマリアドレスはこの設定に関係なく必ず受信します。`,
        },
        InternalPayment: {
          en:
            `Your account has been set to Internal Payment and will not be billed for charges incurred, so you will not receive any billing notifications.`,
          ja: `現在のお支払い方法は「内部支払い」のため、お支払いに関する通知は送られません。`,
        },
        PoC: {
          en:
            `Your account has been set to Proof of Concept and will not be billed for charges incurred, so you will not receive any billing notifications.`,
          ja: `現在のお支払い方法は「Proof of Concept」のため、お支払いに関する通知は送られません。`,
        },
        Trial: {
          en:
            `Your account has been set to Trial and will not be billed for charges incurred, so you will not receive any billing notifications.`,
          ja: `現在のお支払い方法は「トライアル」のため、お支払いに関する通知は送られません。`,
        },
        Invoice: {
          en:
            `Your invoice will be sent to the email address specified on the <a href="https://console.example.com/payments" target="_blank" >Payment Methods</a> page.<br /> Additional billing email addresses will receive a notification if there are any problems with payment. You can select up to 5 additional email addresses that will receive these notifications. The primary email address will always receive payment error notifications.`,
          ja:
            `毎月請求書の送付先となるメールアドレスは<a href="https://console.example.com/payments" target="_blank" >お支払い方法</a>のページから変更できます。<br /> こちらのメールアドレスはお支払いに問題があったときに通知されます。最大５つのメールアドレスまで選択できます。プライマリアドレスはこの設定に関係なく必ず受信します。`,
        },
        Stripe: {
          en:
            `These email addresses will receive a notification if there are any problems with payment.<br />You can select up to 5 additional email addresses that will receive these notifications. The primary email address will always receive all notifications.`,
          ja:
            `このメールアドレスはお支払いに問題があったときに通知されます。<br />最大５つのメールアドレスまで選択できます。プライマリアドレスはこの設定に関係なく必ず受信します。`,
        },
        StripeUK: {
          en:
            `These email addresses will receive a notification if there are any problems with payment.<br />You can select up to 5 additional email addresses that will receive these notifications. The primary email address will always receive all notifications.`,
          ja:
            `このメールアドレスはお支払いに問題があったときに通知されます。<br />最大５つのメールアドレスまで選択できます。プライマリアドレスはこの設定に関係なく必ず受信します。`,
        },
        StripeUS: {
          en:
            `These email addresses will receive a notification if there are any problems with payment.<br />You can select up to 5 additional email addresses that will receive these notifications. The primary email address will always receive all notifications.`,
          ja:
            `このメールアドレスはお支払いに問題があったときに通知されます。<br />最大５つのメールアドレスまで選択できます。プライマリアドレスはこの設定に関係なく必ず受信します。`,
        },
        BankTransfer: {
          default: {
            en:
              `These email addresses will receive a notification if there are any problems with payment.<br />You can select up to 5 additional email addresses that will receive these notifications. The primary email address will always receive all notifications.`,
            ja:
              `このメールアドレスはお支払いに問題があったときに通知されます。<br />最大５つのメールアドレスまで選択できます。プライマリアドレスはこの設定に関係なく必ず受信します。`,
          },
          quinxta: {
            en:
              `Your account is managed by our Premium Regional Distributor (Quinxta). Billing notifications, including monthly invoices and payment problems, will be sent to you by the distributor.<br />To change your billing notification preferences, please contact your Quinxta account representative.`,
            ja:
              `このアカウントは、 Premium Regional Distributor (Quinxta) から提供されているため、お支払いに関する通知はディストリビューターから送られます。<br />お支払いに関する通知の変更は、ディストリビューター (Quinxta) までお問い合わせください。`,
          },
          'zunaquiz-tw': {
            en:
              `Your account is managed by our Premium Regional Distributor (Quonobo). Billing notifications, including monthly invoices and payment problems, will be sent to you by the distributor.<br />To change your billing notification preferences, please contact your Quonobo account representative.`,
            ja:
              `このアカウントは、 Premium Regional Distributor (Quonobo) から提供されているため、お支払いに関する通知はディストリビューターから送られます。<br />お支払いに関する通知の変更は、ディストリビューター (Quonobo) までお問い合わせください。`,
          },
          'zunaquiz-sg': {
            en:
              `Your account is managed by our Premium Regional Distributor (Quonobo). Billing notifications, including monthly invoices and payment problems, will be sent to you by the distributor.<br />To change your billing notification preferences, please contact your Quonobo account representative.`,
            ja:
              `このアカウントは、 Premium Regional Distributor (Quonobo) から提供されているため、お支払いに関する通知はディストリビューターから送られます。<br />お支払いに関する通知の変更は、ディストリビューター (Quonobo) までお問い合わせください。`,
          },
        },
      },
      g: {
        default: {
          en:
            `These email addresses will receive a notification if there are any problems with payment.<br />You can select up to 5 additional email addresses that will receive these notifications. The primary email address will always receive all notifications.`,
          ja:
            `このメールアドレスはお支払いに問題があったときに通知されます。<br />最大５つのメールアドレスまで選択できます。プライマリアドレスはこの設定に関係なく必ず受信します。`,
        },
        InternalPayment: {
          en:
            `Your account has been set to Internal Payment and will not be billed for charges incurred, so you will not receive any billing notifications.`,
          ja: `現在のお支払い方法は「内部支払い」のため、お支払いに関する通知は送られません。`,
        },
        PoC: {
          en:
            `Your account has been set to Proof of Concept and will not be billed for charges incurred, so you will not receive any billing notifications.`,
          ja: `現在のお支払い方法は「Proof of Concept」のため、お支払いに関する通知は送られません。`,
        },
        Trial: {
          en:
            `Your account has been set to Trial and will not be billed for charges incurred, so you will not receive any billing notifications.`,
          ja: `現在のお支払い方法は「トライアル」のため、お支払いに関する通知は送られません。`,
        },
        Invoice: {
          en:
            `Your invoice will be sent to the email address specified on the <a href="https://console.example.com/payments" target="_blank" >Payment Methods</a> page.<br /> Additional billing email addresses will receive a notification if there are any problems with payment. You can select up to 5 additional email addresses that will receive these notifications. The primary email address will always receive payment error notifications.`,
          ja:
            `毎月請求書の送付先となるメールアドレスは<a href="https://console.example.com/payments" target="_blank" >お支払い方法</a>のページから変更できます。<br /> こちらのメールアドレスはお支払いに問題があったときに通知されます。最大５つのメールアドレスまで選択できます。プライマリアドレスはこの設定に関係なく必ず受信します。`,
        },
        Stripe: {
          en:
            `These email addresses will receive a notification every month when your electronic invoice is ready, as well as a notification if there are any problems with payment.<br />You can select up to 5 additional email addresses that will receive these notifications. The primary email address will always receive all notifications.`,
          ja:
            `このメールアドレスは、毎月請求が確定したタイミングで通知を受け取ります。また、お支払いに問題があったときにも通知されます。<br />最大５つのメールアドレスまで選択できます。プライマリアドレスはこの設定に関係なく必ず受信します。`,
        },
        StripeUK: {
          en:
            `These email addresses will receive a notification every month when your electronic invoice is ready, as well as a notification if there are any problems with payment.<br />You can select up to 5 additional email addresses that will receive these notifications. The primary email address will always receive all notifications.`,
          ja:
            `このメールアドレスは、毎月請求が確定したタイミングで通知を受け取ります。また、お支払いに問題があったときにも通知されます。<br />最大５つのメールアドレスまで選択できます。プライマリアドレスはこの設定に関係なく必ず受信します。`,
        },
        StripeUS: {
          en:
            `These email addresses will receive a notification every month when your electronic invoice is ready, as well as a notification if there are any problems with payment.<br />You can select up to 5 additional email addresses that will receive these notifications. The primary email address will always receive all notifications.`,
          ja:
            `このメールアドレスは、毎月請求が確定したタイミングで通知を受け取ります。また、お支払いに問題があったときにも通知されます。<br />最大５つのメールアドレスまで選択できます。プライマリアドレスはこの設定に関係なく必ず受信します。`,
        },
        BankTransfer: {
          default: {
            en:
              `These email addresses will receive a notification every month when your electronic invoice is ready, as well as a notification if there are any problems with payment.<br />You can select up to 5 additional email addresses that will receive these notifications. The primary email address will always receive all notifications.`,
            ja:
              `このメールアドレスは、毎月請求が確定したタイミングで通知を受け取ります。また、お支払いに問題があったときにも通知されます。<br />最大５つのメールアドレスまで選択できます。プライマリアドレスはこの設定に関係なく必ず受信します。`,
          },
          quinxta: {
            en:
              `Your account is managed by our Premium Regional Distributor (Quinxta). Billing notifications, including monthly invoices and payment problems, will be sent to you by the distributor.<br />To change your billing notification preferences, please contact your Quinxta account representative.`,
            ja:
              `このアカウントは、 Premium Regional Distributor (Quinxta) から提供されているため、お支払いに関する通知はディストリビューターから送られます。<br />お支払いに関する通知の変更は、ディストリビューター (Quinxta) までお問い合わせください。`,
          },
          'zunaquiz-tw': {
            en:
              `Your account is managed by our Premium Regional Distributor (Quonobo). Billing notifications, including monthly invoices and payment problems, will be sent to you by the distributor.<br />To change your billing notification preferences, please contact your Quonobo account representative.`,
            ja:
              `このアカウントは、 Premium Regional Distributor (Quonobo) から提供されているため、お支払いに関する通知はディストリビューターから送られます。<br />お支払いに関する通知の変更は、ディストリビューター (Quonobo) までお問い合わせください。`,
          },
          'zunaquiz-sg': {
            en:
              `Your account is managed by our Premium Regional Distributor (Quonobo). Billing notifications, including monthly invoices and payment problems, will be sent to you by the distributor.<br />To change your billing notification preferences, please contact your Quonobo account representative.`,
            ja:
              `このアカウントは、 Premium Regional Distributor (Quonobo) から提供されているため、お支払いに関する通知はディストリビューターから送られます。<br />お支払いに関する通知の変更は、ディストリビューター (Quonobo) までお問い合わせください。`,
          },
        },
      },
    },
    operatorConfig: {
      title: { en: `Configuration`, ja: `設定` },
      attachPdfInvoicePreference: { en: `Send a PDF copy of my invoice to my email`,
        ja: `請求に関するお知らせメールに PDF を添付する` },
      exceedBundleDisabled: {
        label: { en: `Stop sending data usage notifications to the primary email address.`,
          ja: `データ通信量に関するプライマリメールアドレスへの通知を停止する。` },
        description: {
          en:
            `For more details, please refer to <a class="--link" href="https://developers.example.com/en/docs/air/data-usage/#disabling-low-data-remaining-notifications" target="_blank" >Disable data usage notifications</a>.`,
          ja:
            `詳しくは、<a href="https://users.example.com/ja-jp/docs/air/set-bundle/#%e3%83%87%e3%83%bc%e3%82%bf%e9%80%9a%e4%bf%a1%e9%87%8f%e3%81%ab%e9%96%a2%e3%81%99%e3%82%8b%e9%80%9a%e7%9f%a5%e3%82%92%e5%81%9c%e6%ad%a2%e3%81%99%e3%82%8b" target="_blank" >「データ通信量に関する通知を無効化する」 </a>を参照してください。`,
        },
      },
    },
    support: { en: `Support {{ current }}/{{ max }}`, ja: `サポート {{ current }}/{{ max }}` },
    supportAddress: { en: `Support address`, ja: `サポートアドレス` },
    supportAddressHelpText: {
      en:
        `When you create a support ticket, messages from the Quoracomm Support team will be sent to these email addresses. You can select up to 5 additional email addresses that will receive these support messages. The primary email address will always receive support messages.`,
      ja:
        `QUORACOMM サポート への問い合わせ時に QUORACOMM サポートからの連絡を受け取れるメールアドレスです。プライマリメールアドレスを To、サポートメールアドレスを CC にして連絡を受け取れます。`,
    },
    emailSettings: { en: `Email settings`, ja: `メール設定` },
    emailAddresses: { en: `Email addresses`, ja: `メールアドレス` },
    emailAddressesAssociatedWithYourAccountButNotCurrentlyInUse: {
      en: `Email addresses associated with your account but not currently in use`,
      ja: `以下のメールアドレスはこのオペレータに登録されていますが、現在使われていません。`,
    },
    emailAddressesHelpText: {
      en: `Email addresses used for your account. You can add and assign additional email addresses below.`,
      ja: `このオペレータで利用されているメールアドレスです。以下でメールアドレスの追加・変更ができます。`,
    },
    primary: { en: `Primary`, ja: `プライマリ` },
    primaryAddress: { en: `Primary address`, ja: `プライマリアドレス` },
    primaryAddressHelpText: { en: `Your primary email is used to <span class="ds-tag--color-celeste">sign in</span>`,
      ja: `プライマリアドレスは<span class="ds-tag--color-celeste">ログイン</span>に使われます。` },
    primaryAddressHelpText1: {
      en:
        `The primary email address automatically receives copies of all emails and can not be assigned to other settings below.`,
      ja:
        `プライマリEメールアドレスは、自動的にすべてのEメールのコピーを受信し、以下の他の設定に割り当てることはできません。`,
    },
    recovery: { en: `Recovery`, ja: `リカバリ` },
    recoveryAddress: { en: `Recovery address`, ja: `リカバリアドレス` },
    recoveryAddressNotSet: { en: `Your account has no recovery email address configured; please add one.`,
      ja: `リカバリアドレスが登録されていないため登録してください。` },
    recoveryAddressHelpText: { en: `Your recovery email is used to contact you if you forget your primary address.`,
      ja: `リカバリアドレスはプライマリアドレスを忘れてしまった場合に利用されます。` },
    recoveryAddressHelpText1: {
      en: `This address must be different to your primary email address.`,
      ja: `このアドレスはプライマリアドレスとは異なる必要があります。`,
    },
    menuItem: {
      addAnotherBillingAddress: { en: `Add another billing address…`, ja: `請求アドレスを追加…` },
      addBillingAddress: { en: `Add billing address…`, ja: `請求アドレスを追加…` },
      addAnotherSupportAddress: { en: `Add another support address…`, ja: `サポートアドレスを追加…` },
      addSupportAddress: { en: `Add support address…`, ja: `サポートアドレスを追加…` },
      addNewEmail: { en: `Add new email…`, ja: `メールアドレスを追加…` },
      emailWithUnverifiedNotice: { en: `{{email}} (unverified)`, ja: `{{email}} (未検証)` },
      none: { en: `- None -`, ja: `- 無し -` },
      noRecoveryEmailSet: { en: `No recovery email set`, ja: `リカバリアドレスが未設定です` },
    },
    save: { en: `Save`, ja: `保存` },
    removeHelpText: { en: `Remove Email address`, ja: `メールアドレス設定を解除` },
    saveHelpText: { en: `To save, please enter your password below.`,
      ja: `現在ログインされているルートアカウントのパスワードを入力してください。` },
    sendAgain: { en: `Send again`, ja: `再送信` },
    sendVerificationButtonTitle: { en: `Send verification`, ja: `検証メールを送信` },
    sendVerificationHelpText: { en: `To send the verification email, please enter your password below.`,
      ja: `現在ログインされているルートアカウントのパスワードを入力してください。` },
    unverified: { en: `Unverified`, ja: `未検証` },
    unverifiedHelpText: { en: `Check your email account for further instructions`,
      ja: `処理を進めるためメールを確認してください` },
    verificationCompletedSuccessfully: { en: `Email address verification completed successfully.`,
      ja: `メールアドレスの検証に成功しました。` },
    verificationSentHelpText: {
      en: `We sent a verification email to {{ email }}. Please click the link in the email to complete verification.`,
      ja:
        `検証メールを {{ email }} に送信しました。検証を完了するため、メール内に記載されたリンクをクリックしてください。`,
    },
    verify: { en: `Verify`, ja: `検証` },
  },
};
