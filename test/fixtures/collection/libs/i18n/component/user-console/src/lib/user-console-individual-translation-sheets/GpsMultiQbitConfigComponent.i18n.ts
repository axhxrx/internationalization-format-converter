export const translations = {
  GpsMultiqbitConfigComponent: {
    title: { en: `GPS Multiqbit`, ja: `GPS マルチユニットの設定` },
    contents: {
      title: { en: `Contents`, ja: `送信内容` },
    },
    dialog: {
      configurationSaved: {
        title: { en: `Configuration saved`, ja: `設定完了` },
        confirm: { en: `Back to index page`, ja: `デバイス一覧に戻る` },
        body: {
          en:
            `Please insert the SIM into the GPS Multiqbit device, power it on, and press the button to apply the configuration to the device.`,
          ja: `設定を反映するために SIM を挿入して電源を入れ、ファンクションボタンを押してください`,
        },
      },
    },
    destination: {
      title: { en: `Destination`, ja: `送信先` },
      labels: {
        configurable: { en: `Configurable`, ja: `変更可能` },
        readonly: { en: `The items below can be set only from the group setting screen.`,
          ja: `以下の項目はグループ設定画面からのみ設定可能` },
      },
      description: {
        en:
          `If you want to send data to a destination other than Quoracomm Harquest Data, you need to edit settings on the Group settings screen separately.<br> To use Quoracomm Shplagoon, you need to sign up for Quoracomm Shplagoon separately.<br>To use Quoracomm Beam, you need to configure 'UDP to HTTP/HTTPS' destination.<br> A separate platform usage fee will be charged depending on the destination.`,
        ja:
          `QUORACOMM Harquest Data 以外の送信先にデータを送信する場合は、別途グループ設定画面での設定が必要です。<br>QUORACOMM Shplagoon を利用するには別途 QUORACOMM Shplagoon の利用開始が必要です。<br>QUORACOMM Beam を利用するには UDP to HTTP/HTTPS エンドポイントの設定が必要です。<br>送信先に応じて別途プラットフォーム利用料がかかります。`,
      },
    },
    accelerationEvent: {
      title: { en: `Acceleration event`, ja: `加速度割り込み` },
      description: { en: `The acceleration event transmission works only when the periodic transmission is enabled.`,
        ja: `加速度割り込み送信は定期送信が有効な期間、曜日、時刻でのみ動作します` },
    },
    actions: {
      save: {
        title: { en: `Save`, ja: `保存` },
      },
      back: {
        title: { en: `Back`, ja: `戻る` },
      },
    },
    labels: {
      accelerator: { en: `Acceleration`, ja: `加速度` },
      QuoracommBeam: { en: `Quoracomm Beam`, ja: `QUORACOMM Beam` },
      QuoracommJunq: { en: `Quoracomm Junq`, ja: `QUORACOMM Junq` },
      QuoracommFunnel: { en: `Quoracomm Funnel`, ja: `QUORACOMM Funnel` },
      QuoracommHarquest: { en: `Quoracomm Harquest Data (Shplagoon)`, ja: `QUORACOMM Harquest Data (Shplagoon)` },
      location: { en: `Location (GPS)`, ja: `位置情報（GPS）` },
      temperature: { en: `Temperature`, ja: `温度` },
      humidity: { en: `Humidity`, ja: `湿度` },
      battery: { en: `Battery level`, ja: `バッテリー残量` },
      accelerationEventThreshold: { en: `Threshold`, ja: `しきい値` },
      isEnabledAccelerationEvent: { en: `Send data when acceleration exceeding threshold is detected`,
        ja: `しきい値を超える加速度を検知したらデータを送信する` },
    },
    intervalScenario: {
      title: { en: `Scheduled transmission - manual mode advanced settings`, ja: `定期送信 - 手動モード 詳細設定` },
      description: { en: `Scheduled transmission - manual mode`, ja: `この設定は手動モードのときにのみ有効です。` },
      date: {
        title: { en: `Period`, ja: `期間` },
        invalidStartDate: { en: `Invalid start date of period`, ja: `開始日が正しくありません` },
        invalidEndDate: { en: `Invalid end date of period`, ja: `終了日が正しくありません` },
        invalidDateRange: { en: `Invalid period`, ja: `期間が正しくありません` },
      },
      weekdays: {
        title: { en: `Day of week`, ja: `曜日` },
        labels: {
          SUN: { en: `S`, ja: `日` },
          MON: { en: `M`, ja: `月` },
          TUE: { en: `T`, ja: `火` },
          WED: { en: `W`, ja: `水` },
          THU: { en: `T`, ja: `木` },
          FRI: { en: `F`, ja: `金` },
          SAT: { en: `S`, ja: `土` },
        },
      },
      time: {
        title: { en: `Time of day`, ja: `時刻` },
        description: { en: `It's not possible to specify a period spanning multiple days`,
          ja:
            `0:00 を跨いだ期間 (例: 22:00 - 10:00) は指定できません。「常に送信する (00:00 - 23:59 を指定)」でない場合、定期送信は開始時刻に始まります。` },
        invalidTimeRange: { en: `Invalid time of day`, ja: `時刻が正しくありません` },
      },
      duration: {
        units: {
          hour: { en: `hr.`, ja: `時間` },
          minute: { en: `min.`, ja: `分` },
        },
        title: { en: `Transmission interval`, ja: `送信間隔` },
        description: { en: `Can be 1 minute to 24 hours, with 1 minute granularity`,
          ja:
            `1 分から 24 時間まで 1 分間隔で設定可能です。位置情報が有効になっている場合、デバイスの設置環境によっては GPS 取得には時間がかかることで送信間隔が伸びる可能性があります。` },
      },
      labels: {
        noDateLimit: { en: `Always send`, ja: `常に送信する` },
        noTimeLimit: { en: `Always send`, ja: `常に送信する` },
        noWeekdayLimit: { en: `Always send`, ja: `常に送信する` },
      },
    },
    fetchConfigurationMode: {
      title: { en: `Fetch Configuration Mode`, ja: `設定取得モード` },
      description: {
        en:
          `Regardless of which mode is selected, configuration will be fetched by pressing the function button.<br> All communications, including configuration acquisition, will incur usage fees charged to your SIM card.`,
        ja:
          `いずれのモードを選択した場合も、ファンクションボタンを押すことで設定の取得とデータ送信が行われます。 <br>設定取得を含む、すべての通信はご利用の SIM カードに課金されます。`,
      },
      auto: {
        label: { en: `ON`, ja: `定期設定取得 - あり` },
        description: {
          en:
            `Devices fetch configuration automatically according to the schedule below. You can set the period, day of the week, and time of the day as well as the acquisition interval.<p><ul><li>The acquisition of settings requires a larger amount of data than normal data transmission.</li><li>If the timing overlaps with data transmission, one of them will fail, so please specify a time period when data transmission is not performed.</li><li> Normally, the configuration retrieval will be done shortly after the start time.</li><li>When the new settings are reflected in the device, the transmission interval of the periodic transmission will be reset.</li></ul></p>`,
          ja:
            `設定内容にしたがって定期的に設定を取得するモードです。取得間隔だけでなく、取得する期間、曜日、時間帯を設定することができます。<p><ul><li>設定取得は通常のデータ送信よりも通信量が多くなります。</li><li>通常、設定取得は開始時刻になってまもなく行われます。</li><li>新しい設定が端末に反映されると、定期送信の送信間隔がリセットされます。</li><li>データ送信と設定取得のタイミングが重なるとどちらかが失敗します。重複しないように開始時刻を設定してください。</li></ul></p>`,
        },
      },
      manual: {
        label: { en: `OFF`, ja: `定期設定取得 - なし` },
        description: { en: `Devices fetch configuration only when the power is on / the function button is pressed.`,
          ja:
            `定期的な設定の取得を行いません。通信量を削減したい場合に有効です。<p><ul><li>この画面で設定した内容は電源を入れ直したとき、またはファンクションボタンを押したときにのみ同期されます。</li></ul></p>` },
      },
    },
    fetchConfigurationScenario: {
      title: { en: `Schedule for fetching the device configuration`, ja: `定期設定取得 詳細設定` },
      description: {
        en:
          `You can specify the timing at which the GPS Multi-Unit will fetch the configuration from the Quoracomm platform. Getting the configuration will consume more data than regular transmissions. Also, if the timing overlaps with data transmission, one of them will fail, so please specify a time period when regular transmission will not be performed.`,
        ja: `定期設定取得が「あり」の場合のみ編集できます。`,
      },
      date: {
        title: { en: `Period`, ja: `期間` },
        invalidStartDate: { en: `Invalid start date of period`, ja: `開始日が正しくありません` },
        invalidEndDate: { en: `Invalid end date of period`, ja: `終了日が正しくありません` },
        invalidDateRange: { en: `Invalid period`, ja: `期間が正しくありません` },
      },
      weekdays: {
        title: { en: `Day of week`, ja: `曜日` },
        labels: {
          SUN: { en: `S`, ja: `日` },
          MON: { en: `M`, ja: `月` },
          TUE: { en: `T`, ja: `火` },
          WED: { en: `W`, ja: `水` },
          THU: { en: `T`, ja: `木` },
          FRI: { en: `F`, ja: `金` },
          SAT: { en: `S`, ja: `土` },
        },
      },
      time: {
        title: { en: `Time of day`, ja: `時刻` },
        description: { en: `It's not possible to specify a period spanning multiple days`,
          ja:
            `0:00 を跨いだ期間 (例: 22:00 - 10:00) は指定できません。「常に送信する (00:00 - 23:59 を指定)」でない場合、設定取得は開始時刻に始まります。` },
        invalidTimeRange: { en: `Invalid time of day`, ja: `時刻が正しくありません` },
      },
      duration: {
        units: {
          hour: { en: `hr.`, ja: `時間` },
          minute: { en: `min.`, ja: `分` },
        },
        labels: {
          from: { en: `from`, ja: `から` },
          to: { en: `to`, ja: `まで` },
        },
        title: { en: `Transmission interval`, ja: `取得間隔` },
        description: {
          en: `Can be 1 minute to 1440 minutes (24 hours), with 1 minute granularity. Recommended value is 1440.`,
          ja: `1分間から24時間まで1分間隔で設定可能です。24時間間隔 (1440) が推奨値です。`,
        },
      },
      labels: {
        noDateLimit: { en: `Always`, ja: `常に取得する` },
        noTimeLimit: { en: `Always (deprecated)`, ja: `常に取得する (非推奨)` },
        noWeekdayLimit: { en: `Always`, ja: `常に取得する` },
      },
    },
    mode: {
      title: { en: `Transmission mode`, ja: `送信モード` },
      description: {
        en:
          `Regardless of which mode is selected, data can be transmitted by pressing the function button, in addition to the automatic periodic transmission. <br>Please turn off the power when not in use. <br> All communications, including configuration acquisition, will incur usage fees charged to your SIM card.`,
        ja:
          `いずれのモードを選択した場合も、定期送信のほか、ファンクションボタンを押すことでデータ送信が可能です。 すべての通信はご利用の SIM カードに課金されます。`,
      },
      auto: {
        label: { en: `Scheduled transmission - automatic mode`, ja: `定期送信 - 自動モード` },
        description: {
          en:
            `In this mode, the frequency of periodic transmission is automatically adjusted according to the movement status of the GPS multiqbit. You cannot adjust the mode threshold or the periodic transmission frequency.`,
          ja:
            `GPSマルチユニットの移動状態に応じて定期送信の頻度が自動的に調整されるモードです。モードのしきい値や定期送信頻度を調整することはできません。`,
        },
      },
      manual: {
        label: { en: `Scheduled transmission - manual mode`, ja: `定期送信 - 手動モード` },
        description: {
          en:
            `This mode is for manually setting the details of the periodic transmission. In addition to the transmission interval, you can set the transmission period, day of week, and time zone.`,
          ja:
            `定期送信の詳細を手動で設定するモードです。送信間隔だけでなく、送信する期間、曜日、時間帯を設定することができます。`,
        },
      },
      none: {
        label: { en: `Scheduled transmission - none`, ja: `定期送信 - なし` },
        description: { en: `Scheduled transmission is not enabled.`, ja: `定期送信を行いません。` },
      },
    },
  },
};
