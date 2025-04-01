export const translations = {
    'send_sms': {
        'button_cancel': { en: `Cancel`, ja: `キャンセル` },
        'button_send_sms': { en: `Send SMS`, ja: `SMS を送信` },
        'encoding': {
            'binary': { en: `binary`, ja: `バイナリ` },
            'gsm7': { en: `GSM-7`, ja: `GSM-7` },
            'ucs2': { en: `UCS-2`, ja: `UCS-2` },
            'ucs2_default': { en: `UCS-2 (default)`, ja: `UCS-2 (default)` }
        },
        'enter_sms_content_press_send': { en: `The SMS will be sent to the device with the SIM card identified by the IMSI shown here.`, ja: `表示されている IMSI に対して SMS を送信します` },
        'heading_send_sms': { en: `Send SMS`, ja: `SMS 送信` },
        'hint_text': {
            'default': { en: `When sending SMS, there are two options for encoding. The default is UCS-2, because it is the most compatible, but it is limited to 70 characters per message. GSM-7 can send up to 160 characters, but it is not compatible with special characters, including multi-byte characters or emoji.`, ja: `SMS を送信するときには、エンコーディングを選択してください。デフォルトの UCS-2 はマルチバイト文字を含めて70文字まで送信できます。GSM-7 は160文字まで送れますが、マルチバイト文字は送信できません。` }
        },
        'invalid_input_text': {
            'input_too_long_for_selected_format': { en: `The message contains too many characters to be sent using the currently selected encoding.`, ja: `選択中のエンコーディングにおける送信可能文字数を超えています。` }
        },
        'label_encoding': { en: `Encoding`, ja: `エンコーディング` },
        'label_imsi': { en: `IMSI`, ja: `IMSI` },
        'label_simId': { en: `SIM ID`, ja: `SIM ID` },
        'label_sms_content': { en: `SMS content`, ja: `SMS 本文` },
        'success': { en: `Successfully sent SMS to the selected SIM.`, ja: `選択されたSIMに SMS を送信しました。` }
    }
};
