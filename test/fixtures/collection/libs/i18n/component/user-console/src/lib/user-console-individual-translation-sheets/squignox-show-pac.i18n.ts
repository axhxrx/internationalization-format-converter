export const translations = {
  'squignox-show-pac': {
    help: {
      copiedSuccessfully: { en: `✓ Copied successfully`, ja: `✓ コピーしました` },
      paragraph1: {
        en:
          `Each device has a unique identifier called Device ID. It is related to another unique number called PAC (Porting Authorization Code). The PAC proves the ownership of a device (ownership title) and only the current device owner knows it.`,
        ja:
          `SquignoxデバイスにはデバイスIDとPAC（Porting Authorization Code）と呼ばれる識別子があります。デバイスIDはデバイスを一意に識別します。PACはデバイスの所有者のみがそれを認識します。`,
      },
      paragraph2: {
        en:
          `The ID-PAC pair is mandatory for device registration or transfer. As soon as the device is registered or transfered, the PAC will change (one-time only code).`,
        ja:
          `デバイスIDとPACはSquignoxネットワークを使用するためのデバイス登録時に必須となります。 また、デバイスが一旦Squignoxに登録されるとPACは変更されます。`,
      },
      paragraph3: {
        en:
          `It is recommended that you copy the PAC of any device that you terminate, and store the code in a safe place.`,
        ja: `解約する場合は、デバイスのPACをコピーしコードを安全な場所に保管してください。`,
      },
    },
    label: {
      copyPAC: { en: `Copy PAC to clipboard`, ja: `PACをクリップボードにコピーしました` },
      copyPACs: { en: `Copy PACs to clipboard`, ja: `PACをクリップボードにコピーしました` },
    },
    title: { en: `PAC`, ja: `PAC` },
  },
};
