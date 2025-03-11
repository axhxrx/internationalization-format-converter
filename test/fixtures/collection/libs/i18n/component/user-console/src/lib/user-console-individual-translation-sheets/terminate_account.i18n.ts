export const translations = {
  terminate_account: {
    action_is_required: { en: `Action is required to enable termination of this account.`,
      ja: `ご利用中のサービスがあります。` },
    blocker_type: {
      lora: { en: `LoRa`, ja: `LoRa` },
      ltd: { en: `Long-term Discount`, ja: `長期利用割引` },
      other: { en: `Other`, ja: `その他` },
      payment: { en: `Billing`, ja: `お支払い` },
      squignox: { en: `Squignox`, ja: `Squignox` },
      sim: { en: `SIM`, ja: `SIM` },
      vpg: { en: `VPG`, ja: `VPG` },
    },
    check_again: { en: `Check Again`, ja: `再確認` },
    checking_dot_dot_dot: { en: `Checking...`, ja: `確認中` },
    confirm_terminate_modal: {
      body: {
        en:
          `The account will be permanently deleted. To use Quoracomm services in the future, you will need to sign up for a new account and start over from the beginning.`,
        ja:
          `アカウントが削除されます。今後QUORACOMMのサービスを利用するには、新しいアカウントにサインアップして最初からやり直す必要があります。`,
      },
      cancel: { en: `Do not terminate `, ja: `削除しない` },
      confirm: { en: `Terminate account`, ja: `アカウントを削除する` },
      enter_password: { en: `Please enter your password to terminate the account.`,
        ja: `アカウントを削除するには、ログインパスワードを入力してください。` },
      title: { en: `Are you sure you want to terminate your Quoracomm account?`,
        ja: `ソラコムのアカウントを削除してもよろしいですか？` },
    },
    coverage_type: {
      g: { en: `Coverage Type: Global`, ja: `カバレッジタイプ: グローバル` },
      jp: { en: `Coverage Type: Japan`, ja: `カバレッジタイプ: 日本` },
    },
    heading: { en: `Cancel all services and terminate user account`, ja: `ユーザーアカウントの削除` },
    intro_text: {
      en:
        `You may cancel all of your Quoracomm services and terminate your user account at any time. In order to terminate your account, it is necessary to confirm the current status of the various services listed below.`,
      ja:
        `ユーザーアカウントの削除は、QUORACOMMのすべてのサービスが解約済みであることが前提となります。各種サービスの現在の状況を以下よりご確認ください。`,
    },
    message: { en: `Message`, ja: `メッセージ` },
    please_address_blockers_and_try_again: {
      en:
        `<p>Before an account can be terminated, it is necessary to eliminate any active SIMs, devices, or other services, which may prevent the account from being terminated. For example:</p><ul><li>Any registered SIM cards must be terminated (via the "Terminate" command in the "SIM Management" view)</li><li>Any LoRaWAN and Squignox devices must be terminated (via the "LoRaWAN Devices" and "Squignox Devices" management views, respectively)</li><li>Any VPGs that have been created must be deleted (via the "VPG" view)</li></ul><p>Please review the issues highlighted in the table above. Once these issues have been resolved, please revisit this page or press the Check Again button below.<p>`,
      ja:
        `<p> アカウント削除の前に、使用中の SIM、デバイス、その他のサービスを解約してください。</p><ul><li>Air SIMは「SIM 管理」メニューから SIM を選択して「解約」を行ってください。</li><li>LoRaWAN と Squignox デバイスは、それぞれ「LoRaWAN デバイス管理」、「Squignox デバイス管理」メニューから解約してください。</li><li>作成された VPG は「VPG」メニューからすべて削除してください。</li></ul><p>上記の表をご確認のうえ、ご利用中のサービスを解約後、当ページからユーザーアカウントの削除を行ってください。<p>`,
    },
    ready_to_terminate: {
      en:
        `Please note that this operation cannot be undone. (You can still sign up again in the future, but you will need to start over and set everything up from the beginning.) The email address associated with this account will also be unregistered, but please note that this process may take a few days, so you may receive some email messages even after termination.<br />If you wish to terminate your account, and delete all associated customer information, please use the button below to initiate the process.`,
      ja:
        `アカウントの削除は元に戻せません。（再度、新規サインアップすることはできますが情報は受け継がれません。）数日の間で行き違いでメールが送信される場合がありますがご容赦ください。<br />アカウントを削除する場合は、以下のボタンをクリックしてください。`,
    },
    ready_to_terminate_header: { en: `This account can be terminated.`, ja: `当アカウントは削除することができます。` },
    service: { en: `Service`, ja: `サービス` },
    terminate_account_button_title: { en: `Terminate user account`, ja: `アカウントを削除する` },
    terminate_account_request_body: { en: `I would like to terminate my Quoracomm account.`,
      ja: `アカウントの削除を希望します。` },
    terminate_account_request_title: { en: `Account termination request`, ja: `アカウントの削除依頼` },
    termination_completed_modal: {
      body: { en: `This account has been terminated. Thank you for using Quoracomm.`,
        ja: `QUORACOMM をご利用いただき、ありがとうございました。` },
      confirm: { en: `OK`, ja: `閉じる` },
      title: { en: `Termination completed`, ja: `アカウントを削除しました` },
    },
    the_issues_below_must_be_resolved: { en: `The issues below must be resolved:`, ja: `以下をご確認ください。` },
  },
};
