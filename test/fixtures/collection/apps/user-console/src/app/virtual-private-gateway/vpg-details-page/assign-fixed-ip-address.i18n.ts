export const assignFixedIpAddressI18n = {
  fixedIpDescription: {
    en: `
        <p>Quoracomm Virtual Private Gateways can be configured with two unique fixed global (public) IP addresses. When enabled, all internet-bound traffic will appear to originate from one of these addresses.</p>
        <p>For applications where devices send data over the Internet to a specific destination, the Fixed Global IP Address option allows you to define allowed and denied lists for incoming traffic. This ensures that unauthorized traffic is blocked from reaching the destination host. For more details, refer to the <a class="--link" target="_blank" href="https://developers.example.com/en/docs/vpg/fixed-global-ip/">Fixed Global IP Address Option</a> documentation.</p>
    `,
    ja: `
        <p>インターネットゲートウェイが「あり」の VPG には、インターネット出口側のグローバル IP アドレス (お客様のシステムから見たアクセス元 IP アドレス) を 2 つに固定するオプションがあります。これをVPG 固定グローバル IP アドレス付加機能と呼びます。</p>
        <p>なお、この IP アドレスは、他のユーザーの IoT SIM に利用されることはありません。そのため、企業内システム等へのアクセス制御に利用できます。詳しくは、<a href="https://users.example.com/ja-jp/docs/vpg/configure-fixed-global-ips/" class="--link" target="_blank">VPG の IP アドレスを固定する</a>を参照してください。</p>
      `,
  },
  fixedIpDescriptionWarning: {
    en:
      `This function does not assign a static IP address to each SIM in the VPG subnet. For this functionality, visit the 'IP Address Map' section under the 'Device LAN' tab in the VPG details screen.`,
    ja:
      `この機能は、VPGサブネット内の各SIMに固定IPアドレスを割り当てる機能とは異なります。この機能をお探しの場合は、VPG詳細画面の「デバイスLAN設定」タブの「IP アドレスマッピング」箇所をご覧ください。`,
  },
  cancel: {
    en: 'Cancel',
    ja: 'キャンセル',
  },
  header: {
    en: 'Fixed Global IP Address Option',
    ja: '固定グローバル IP アドレスオプションを有効にする',
  },
  submit: {
    en: 'Enable',
    ja: '有効にする',
  },
  chargeWarning: {
    en:
      `Enabling the 'Fixed Global IP Address Option' will incur an additional cost. Please review the <a href='https://developers.example.com/en/docs/reference/fees/' class='alert-link' target='_blank'>pricing</a> page before proceeding.`,
    ja:
      `固定グローバル IP アドレスオプションを有効にすると、時間単位のご利用料金が発生します。詳しくは<a href="https://quoracomm.jp/services/vpg/price/" class="alert-link" target="_blank">料金ページ</a>をご確認ください。`,
  },
};
