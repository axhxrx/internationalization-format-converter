export const translations = {
  LteMButtonConfigComponent: {
    title: { en: `LTE-M Button for Enterprise/Plus Settings`, ja: `LTE-M Button for Enterprise/Plus の設定` },
    contents: {
      title: { en: `Contents`, ja: `送信内容` },
    },
    dialog: {
      configurationSaved: {
        title: { en: `Configuration saved`, ja: `設定完了` },
        confirm: { en: `Back to index page`, ja: `デバイス一覧に戻る` },
        body: { en: `Button settings saved successfully.`, ja: `設定を保存しました。` },
      },
    },
    destination: {
      title: { en: `Visualization`, ja: `可視化` },
      labels: {
        configurable: { en: `Configurable`, ja: `変更可能` },
      },
      description: {
        en:
          `If you want to send data to a destination other than Quoracomm Harquest Data, you need to edit settings on the Group settings screen separately.<br> To use Quoracomm Shplagoon, you need to sign up for Quoracomm Shplagoon separately.<br>To use Quoracomm Beam, you need to configure 'UDP to HTTP/HTTPS' destination.<br> A separate platform usage fee will be charged depending on the destination.`,
        ja:
          `QUORACOMM Harquest Data 以外の送信先にデータを送信する場合は、別途グループ設定画面での設定が必要です。<br>QUORACOMM Shplagoon を利用するには別途 QUORACOMM Shplagoon の利用開始が必要です。<br>QUORACOMM Beam を利用するには UDP to HTTP/HTTPS エンドポイントの設定が必要です。<br>送信先に応じて別途プラットフォーム利用料がかかります。`,
      },
    },
    cellLocation: {
      title: { en: `Location service tracking`, ja: `簡易位置測位機能` },
      description: {
        en:
          `Obtains and transmits the approximate location information at the time the LTE-M communication session is established. Please refer to <a href="https://users.example.com/ja-jp/docs/air/get-location-info/" target="_blank">here (ja)</a> for details.`,
        ja:
          `LTE-M 通信のセッション確立時点でのおおよその位置情報を取得し、送信します。詳しくは<a href="https://users.example.com/ja-jp/docs/air/get-location-info/" target="_blank">こちら</a>をご参考ください。`,
      },
    },
    emailNotification: {
      title: { en: `Email notification`, ja: `メール送信` },
      labels: {
        emailSubject: { en: `Subject`, ja: `件名` },
        emailBcc: { en: `Bcc`, ja: `BCC` },
        emailTo: { en: `To`, ja: `宛先` },
        emailBody: { en: `Body`, ja: `本文` },
      },
      description: {
        emailTo: {
          en:
            `Multiple addresses can be specified, separated by a space. If this value is blank, email will be sent to an operator's email address`,
          ja:
            `スペース区切りで複数の宛先を指定いただけます。宛先が空欄の場合にはオペレーターに登録されたメールアドレスに送ります。`,
        },
        emailBcc: { en: `Multiple addresses can be specified, separated by a space.`,
          ja: `スペース区切りで複数の宛先を指定いただけます` },
        emailBody: {
          en:
            `When you enable email notification, Quoracomm Junq is enabled in the group to which the device belongs and emails are delivered through the managed service operated by Quoracomm. There is no additional charge for email delivery. However, you will be required to pay for the data traffic and Quoracomm Junq usage fees. <BR>Email deliverability is not guaranteed. If you need a guarantee, please consider building your own email delivery system. <br><br>In the subject line and body of the email, you can use placeholders to insert SIM and group tags and location information. Learn more at <a href="https://users.example.com/ja-jp/guides/quoracomm-lte-m-button-series/lte-m-button-enterprise/mail/" target="_blank">here (ja)</a>.`,
          ja:
            `メール送信を有効にするとデバイスの所属するグループで QUORACOMM Junq の機能が有効になり、ソラコムが運用するマネージドサービスを通じてメールが配信されます。本メール送信をONにした場合に追加の課金はありません。ただし、データ通信量およびQUORACOMM Junqの利用料は必要となります。<br>本メール送信の機能ではメール到達性は保証しておりません。保証が必要な場合は、お客様ご自身で独自のメール配信システム構築をご検討ください。<br><br>メールの件名ならびに本文ではSIMやグループのタグ、位置情報を挿入することができます。詳細は<a href="https://users.example.com/ja-jp/guides/quoracomm-lte-m-button-series/lte-m-button-enterprise/mail/" target="_blank">こちら</a>をご参考ください。`,
        },
      },
      subText: {
        tagValue: { en: `bytes (Byte length is calculated in URL encoded text)`,
          ja: `保存可能な容量はエンコード後のサイズで計算されています。` },
      },
      to: {
        errors: {
          maxLength: { en: `The max length is exceeded.`, ja: `宛先が保存可能な長さを超えています。` },
          email: { en: `Please check if mail address and delimiters are correct.`,
            ja: `宛先と区切り文字が正しいかご確認ください。` },
        },
      },
      subject: {
        errors: {
          maxLength: { en: `The max length is exceeded.`, ja: `件名が保存可能な長さを超えています。` },
        },
      },
      body: {
        errors: {
          maxLength: { en: `The max length is exceeded.`, ja: `本文が保存可能な長さを超えています。` },
        },
      },
    },
    actions: {
      save: {
        title: { en: `Save`, ja: `保存` },
      },
      back: {
        title: { en: `Back`, ja: `戻る` },
      },
      backToIndex: {
        title: { en: `Back to Index`, ja: `一覧に戻る` },
      },
    },
    labels: {
      enabled: { en: `Send email`, ja: `メール送信を有効にする (QUORACOMM Junq)` },
      cellLocation: { en: `Enable location service`, ja: `位置情報を付与する (簡易位置測位機能)` },
      QuoracommHarquest: { en: `Enable Visualization (Quoracomm Harquest Data / Shplagoon)`,
        ja: `可視化を有効にする (QUORACOMM Harquest Data / Shplagoon)` },
    },
    save_success: { en: `Button settings saved successfully.`, ja: `設定を保存しました。` },
    save_failed: { en: `Button settings save failed.`, ja: `設定の保存に失敗しました。` },
  },
};
