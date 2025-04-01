export const translations = {
    'virtualSimConnectionInfo': {
        'connectionInfoLabel': { en: `Configure your device with the following WireGuard connection details:`, ja: `以下の WireGuard 接続情報をデバイスに設定してください。` },
        'privateKeyInfo': { en: `It is important to keep this information secret, as anyone who has this information can impersonate your device. <strong>This is the only time that the private key is shown.</strong> If you lose this private key, you can generate a new one, or update your device credentials.`, ja: `<strong>秘密鍵が表示されるのは現在の画面のみです。</strong>この秘密鍵を紛失した場合は、新しい鍵を生成するか、デバイスの認証情報を更新してください。接続情報は決して外部に公開しないでください。` },
        'copy': { en: `Copy`, ja: `コピー` },
        'copied': { en: `Copied!`, ja: `コピーされました` },
        'copyFailed': { en: `There some error in copying info.`, ja: `クリップボードに接続情報をコピーできませんでした。` },
        'wireguardQrHelpText': { en: `Scan the QR code from the WireGuard app, or copy the config to quickly connect:`, ja: `WireGuard アプリで下の二次元バーコードをスキャンするか、以下の WireGuard 接続情報をデバイスに設定してください。` },
        'vsimId': { en: `Virtual SIM ID`, ja: `バーチャル SIM ID` },
        'showQrCodeLabel': { en: `Show QR Code`, ja: `二次元バーコードを表示` },
        'showKeysLabel': { en: `Show keys`, ja: `キーを表示` },
        'hideKeysLabel': { en: `Hide keys`, ja: `キーを非表示` },
        'copyCodeLabel': { en: `Copy code`, ja: `コードをコピー` },
        'privateKeyWontGenerateInfo': { en: `Please note that a private key will not be generated when vSIM is reinitialized.`, ja: `バーチャル SIM を再初期化したときは、PrivateKey (クライアントピア秘密鍵) は生成されません。` }
    }
};
