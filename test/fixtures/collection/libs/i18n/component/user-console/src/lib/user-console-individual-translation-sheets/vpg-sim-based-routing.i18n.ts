export const translations = {
  vpgSimBasedRouting: {
    title: { en: `SIM-Based Routing`, ja: `SIM ベースルーティング` },
    subTitle: {
      en:
        `Enabling SIM-Based Routing allows access to private subnets under the router. Quoracomm Gate needs to be enabled in order to use SIM-Based Routing. To apply the settings, reconnect the IoT SIM session.`,
      ja:
        `SIM ベースルーティングを有効化すると、ルーター配下のプライベートサブネットへのアクセスが可能になります。SIM ベースルーティングを利用するには、QUORACOMM Gate を有効化してください。詳しくは<a href='https://users.example.com/ja-jp/docs/vpg/sim-based-routing/' target="_blank" rel="noopener noreferrer">こちら</a>をご確認ください`,
    },
    switchLabel: { en: `Enable SIM-Based Routing`, ja: `SIM ベースルーティングを有効にする` },
    atLeastOneWarning: { en: `To enable SIM-Based Routing add at least one IP Range below.`,
      ja: `SIM ベースルーティングを有効にするには、1 つ以上のルーティング設定を追加してください` },
    enabled: { en: `Enabled`, ja: `有効` },
    disabled: { en: `Disabled`, ja: `無効` },
    edit: {
      title: { en: `Routing settings`, ja: `ルーティング設定` },
      add: { en: `Add`, ja: `追加` },
      cancel: { en: `Cancel`, ja: `キャンセル` },
      submit: { en: `Save Config Settings`, ja: `保存` },
      simIdFormatError: { en: `SIM ID is not in the correct format(19 digits).`,
        ja: `SIM ID は 19 桁の数字で入力してください。` },
      ipRangeFormatError: { en: `IP Range needs to be in the CIDR notation of a Class A-C private IP address.`,
        ja: `クラスA〜Cのプライベート IP アドレスレンジ を CIDR 表記で指定してください。` },
      duplicateSimIdError: { en: `Only one configuration per SIM id is allowed.`,
        ja: `1 つの SIM ID に対して複数の IP アドレスレンジを指定することはできません。` },
      ipRangeOverlapError: { en: `Inputted IP range should not overlap with the IP range set for the device subnet.`,
        ja: `IP アドレスレンジは、VPG のデバイスサブネット IP アドレスレンジと重ならない範囲を指定してください。` },
      simIdPlaceholder: { en: `1234567890123456789 (19 DIGITS)`, ja: `1234567890123456789 (19桁)` },
      success: {
        en:
          `SIM-Based Routing settings have been updated. The updates will take effect after the session is recreated.`,
        ja: `SIM ベースルーティングの設定を更新しました。更新内容はセッション再作成後に有効になります。`,
      },
      simIdExistenceCheck: { en: `Allow registration of non-owned SIMs.`, ja: `所有していない SIM の登録を許可` },
    },
    enableSuccess: { en: `SIM-Based Routing has been enabled.`, ja: `SIM ベースルーティングを有効にしました。` },
    disableSuccess: { en: `SIM-Based Routing has been disabled.`, ja: `SIM ベースルーティングを無効にしました。` },
    simId: { en: `SIM ID`, ja: `SIM ID` },
    ipRange: { en: `IP RANGE`, ja: `IP アドレスレンジ` },
    sessionEndConfirm: {
      title: { en: `Communication will be temporarily stopped`, ja: `通信が一時停止します` },
      warningTextEnableDisable: {
        en:
          `Please note that enabling or disabling SIM-Based Routing will cause a temporary interruption in all communications via VPG in order to apply the new settings.`,
        ja:
          `SIM ベースルーティングを有効化または無効化すると、設定を反映するために VPG を経由するすべての通信が一時的に不通となります。ご注意ください。`,
      },
      warningTextConfig: {
        en:
          `Please note that changing SIM-Based Routing settings will cause a temporary interruption in all communications via VPG in order to apply the new settings.`,
        ja:
          `SIM ベースルーティング設定を変更すると、設定を反映するために VPG を経由するすべての通信が一時的に不通となります。ご注意ください。`,
      },
    },
  },
};
