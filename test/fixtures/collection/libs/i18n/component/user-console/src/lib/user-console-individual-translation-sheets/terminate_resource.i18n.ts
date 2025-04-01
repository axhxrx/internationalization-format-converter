export const translations = {
  terminate_resource: {
    cancel: { en: `Cancel`, ja: `解約しない` },
    confirmation: {
      lora_device: {
        en: '',
        ja: '',
      },
      lora_gateway: {
        en:
          `Please carefully read <a href='https://quoracomm.example.com/hc/ja/articles/360000497631' target='_blank'>the article about LoRaWAN gateway termination (JP only)</a> before termination.`,
        ja:
          `<a href='https://quoracomm.example.com/hc/ja/articles/360000497631' target='_blank'>LoRaWAN ゲートウェイ解約の流れと注意事項</a>を必ずご確認ください。`,
      },
      squignox_device: {
        en:
          `When a Squignox device is terminated, it will remain in your account for 24 hours. During this time, you can view the device's PAC (Porting Authorization Code), however you will not be able to re-register the device. After 24 hours, the device will be deleted from your account, and you will be able re-register the device if needed. If you prefer to delete the device from your account immediately, enable the Delete immediately option below.`,
        ja:
          `Squignox デバイスを解約した場合は、 24 時間に「解約済み」のステータスでお客様のアカウントに残ります。この時間内にデバイスの PAC は確認できますが、解約したデバイスの再登録はできません。解約してから 24 時間後にお客様のアカウントから削除され、再登録が可能となります。すぐに削除したい場合は以下の「すぐに削除」オプションを有効にして解約を行ってください。`,
      },
      subscriber: {
        en: '',
        ja: '',
      },
    },
    delete_immediately_description: {
      en:
        `If this option is enabled, the device will be terminated and immediately deleted from your account, and its PAC (Porting Authorization Code) will be displayed only once. You will not be able to view the PAC later. <br> If this option is disabled, the device will be terminated from your account. It will remain visible in your account for 24 hours, and you will be able to view the PAC during this time.`,
      ja:
        `「すぐに削除」オプションをオンにして解約すると、Squignox デバイスは QUORACOMM ユーザーコンソールからすぐに削除されます。PAC は削除時にのみ表示され、あとから確認することはできません。<br> オフにして解約すると、Squignox デバイスは QUORACOMM ユーザーコンソールから 24 時間後に削除されます。PAC は解約から 24 時間は、QUORACOMM ユーザーコンソールで確認できます。`,
    },
    delete_immediately_label: { en: `Delete immediately`, ja: `すぐに削除` },
    failure_message_multiple: { en: `Failed to terminate {{failed}} of the {{total}} selected {{modelName}}s: {{info}}`,
      ja: `{{total}} 個中 {{failed}} 個の {{modelName}} を解約できませんでした: {{info}}` },
    failure_message_one: { en: `Failed to terminate the {{modelName}}: {{info}}`,
      ja: `{{modelName}} を解約できませんでした` },
    message: { en: `The following {{modelName}}(s) will be terminated. This operation cannot be undone.`,
      ja: `以下の {{modelName}} を解約します。この操作は取り消せません。` },
    protection_description: {
      en: `To terminate {{modelName}}s, termination protection for all the {{modelName}}s should be off.`,
      ja:
        `{{modelName}} を解約するためには、対象の {{modelName}} すべての解約プロテクションが OFF になっている必要があります。`,
    },
    protection_label: { en: `Termination protection `, ja: `解約プロテクション ` },
    resource_label: { en: `{{id}}`, ja: `{{id}}` },
    squignoxDeletedImmediatelySuccessModal: {
      closeButton: { en: `Close`, ja: `閉じる` },
      description: {
        caution: {
          en:
            `Caution! This is the only time the PAC will be displayed! Once you close this window, you will not be able to view the PAC again later. Make sure to save it in a safe place.`,
          ja:
            `注意！ デバイスの PAC の表示は今回だけとなります。この画面を閉じると PAC の表示はできませんので、必ず保管してください。`,
        },
        deviceId: { en: `Device ID`, ja: `デバイス ID` },
        PAC: { en: `PAC`, ja: `PAC` },
        raw1: { en: `The PAC (Porting Authorization Code) for your device is displayed below:`,
          ja: `デバイスの PAC は以下の通りです。` },
      },
      title: { en: `Successfully terminated the Squignox device`, ja: `Squignox デバイスを解約しました` },
    },
    submit: { en: `Terminate`, ja: `解約する` },
    success_message_multiple: { en: `Successfully terminated {{total}} {{modelName}}s.`,
      ja: `{{total}} 個の {{modelName}} を解約しました` },
    success_message_one: { en: `Successfully terminated the {{modelName}}.`, ja: `{{modelName}} を解約しました` },
    termination_protection: { en: `Termination Protection`, ja: `解約プロテクション` },
    title: { en: `Terminate {{modelName}}`, ja: `{{modelName}} 解約` },
  },
};
