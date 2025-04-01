export const translations = {
  quora_cam: {
    heading: { en: `Quoracomm Cloud Camera Services`, ja: `ソラコムクラウドカメラサービス` },
    subheading: { en: `Manage Licenses`, ja: `デバイス管理` },
    licenses: { en: `Licenses`, ja: `ライセンス管理` },
    updateLicenseBtn: { en: `Update license`, ja: `追加購入` },
    releaseLicenseBtn: { en: `Release license`, ja: `解約` },
    currentCountLabel: { en: `Current quantity`, ja: `現在のライセンス数` },
    updateLicense: {
      title: { en: `Update license`, ja: `ライセンスを追加購入` },
      button: {
        cancel: { en: `Cancel`, ja: `キャンセル` },
        submit: { en: `Update`, ja: `購入する` },
      },
      licenseCountLabel: { en: `How many licenses you want to buy ?`,
        ja: `いくつライセンスを購入しますか？一度に購入できるライセンスは最大 100 個です。` },
      success: { en: `Updated license successfully`, ja: `ライセンスの購入が完了しました。` },
    },
    releaseLicense: {
      title: { en: `Release license`, ja: `ライセンスの解約` },
      info: {
        en:
          `If you want to release all the licenses, press "Release all" button. If you want to release specific number of licences, enter quantity below. Note that in case your entered quantity is same as your existing number of licenses (current quantity), All licenses will be released.`,
        ja:
          `すべてのライセンスを解約したい場合は、「すべて解約する」ボタンをクリックしてください。所持しているライセンスの一部を解約したい場合は、解約したい数量を入力して「解約する」ボタンを押してください。`,
      },
      licenseCountLabel: { en: `How many licenses you want to release ?`, ja: `いくつライセンスを解約しますか？` },
      button: {
        cancel: { en: `Cancel`, ja: `キャンセル` },
        submit: { en: `Release`, ja: `解約する` },
        releaseAll: { en: `Release all`, ja: `すべて解約する` },
      },
      success: { en: `Released license successfully.`, ja: `ライセンスの解約が完了しました。` },
      successWithFeedbackForm: { en: `Released license successfully.`,
        ja:
          `ライセンスの解約が完了しました。<a href="https://forms.gle/HpbXS4Kr3RCY8KJW7" target="_blank">解約理由のアンケートへのご協力をお願いいたします。</a>` },
    },
    confirmModal: {
      title: { en: `Confirm`, ja: `確認` },
      releaseSubtitle: { en: `This action cannot be undone.`, ja: `この操作は取り消せません。` },
      buyLicenses: {
        en:
          `You are going to buy <code>{{quantity}}</code> license(s), in total you will have <code>{{finalQuantity}}</code> licenses. Are you sure you would like to proceed with this purchase?`,
        ja:
          `<code>{{quantity}}</code> 個のライセンスを購入します（購入後のライセンス数 <code>{{finalQuantity}}</code>)`,
      },
      releaseLicenses: {
        en:
          `Are you sure you want to release <code>{{quantity}}</code> license(s) ? At the end you will have <code>{{finalQuantity}}</code> license(s) remaining.`,
        ja:
          `<code>{{quantity}}</code> 個のライセンスを解約してよろしいですか？（解約後のライセンス数 <code>{{finalQuantity}}</code>）`,
      },
      releaseAllLicenses: { en: `Are you sure you want to release all licenses ?`,
        ja: `このライセンスをすべて解約してよろしいですか？` },
      button: {
        buy: { en: `Buy`, ja: `購入する` },
        release: { en: `Release`, ja: `解約する` },
      },
    },
    licensesTable: {
      partner: { en: `Partner`, ja: `代理店` },
      licenseCountInUse: { en: `Assigned`, ja: `割り当て済み` },
      licenseCount: { en: `Purchased`, ja: `購入済み` },
      licenseType: { en: `Type`, ja: `種類` },
      actions: { en: `Actions`, ja: `操作` },
    },
    license: {
      paymentType: { en: `Payment Type`, ja: `支払いタイプ` },
      changePaymentTypeButton: { en: `Change`, ja: `変更する` },
      autoRenewal: { en: `Auto-Renewal`, ja: `ライセンスの自動更新` },
      expirationDate: { en: `License Expiration Date`, ja: `ライセンスの有効期限` },
    },
    no_license_label: { en: `None`, ja: `なし` },
    before_change: { en: `Before Change`, ja: `変更前` },
    after_change: { en: `After Change`, ja: `変更後` },
    first_time: { en: `First Time`, ja: `初回` },
    after_the_first_time: { en: `After the first time`, ja: `２回目以降` },
    no_licenses: { en: `No licenses`, ja: `ライセンスを所持していません` },
    introduction_for_no_licenses: {
      en:
        `To use <a href="https://quoracomm.jp/quora_cam" target="_blank">Quoracomm Cloud Camera Services</a>, you need to buy a camera & license bundle from user console/IoT store.`,
      ja:
        `ソラコムクラウドカメラサービスを利用するには、ユーザーコンソールまたは IoT ストアで対応カメラとライセンスを購入する必要があります。詳しくは<a href="https://quoracomm.jp/quora_cam" target="_blank">製品ページ</a>をご確認ください。`,
    },
    device_type: {
      atomCamV2: { en: `ATOM Cam 2`, ja: `ATOM Cam 2` },
      atomCamSwingV1: { en: `ATOM Cam Swing`, ja: `ATOM Cam Swing` },
      unknown: { en: `Unknown Device`, ja: `不明なデバイス` },
    },
    export_video: { en: `Export Video`, ja: `動画をエクスポート` },
    fetch_and_play_stream_video: { en: `Fetch and Play stream video`, ja: `ストリーミング再生を開始` },
    export_billed_in_consumed_prefix_label: { en: `Billed time`, ja: `うち課金対象時間` },
    payment_type: {
      monthly: { en: `Monthly payment`, ja: `月払い` },
      upfront_12_months: { en: `Annual payment`, ja: `一括年払い` },
    },
    license_expiration_notice: {
      en: `If auto-renewal of license is disabled, all licenses will be cancelled after the expiration date.`,
      ja: `ライセンスの自動更新が無効になっている場合、有効期限が過ぎると全てのライセンスが解約されます`,
    },
    license_cancellation_policy_notice: {
      en:
        `You can cancel your license from the QuoraKamm license management page of Quoracomm User Console. However, no refund will be given if licenses are canceled halfway.`,
      ja:
        `購入したライセンスは、ユーザーコンソールのライセンス管理画面から解約できます。ただし、途中解約も含めいかなる場合にも返金はできません。`,
    },
    license_cancellation_message: { en: `No refund will be given for licenses canceled halfway.`,
      ja: `途中解約したライセンスは返金されません` },
    license_about_to_expire_message: {
      en:
        `Your licenses are about to expire soon. To continue using your licenses, enable the auto-renewal option of your quora-kamm payment cycle.`,
      ja:
        `ライセンスの有効期限がもうすぐ切れます。ライセンスを使い続けるためには、ライセンスの自動更新オプションを有効にしてください。`,
    },
    license_one_shot_payment_notice: { en: `Billing will be at the beginning of the next month.`,
      ja: `請求は来月上旬となります。` },
    license_recurring_payment_notice: {
      en:
        `Your license will be billed at the begging of the next month. For the next and subsequent payments, you will be billed at the beginning of the month following your license renewal.`,
      ja: `初回の請求は来月上旬です。次回以降の支払いについては、ライセンス更新の翌月上旬の請求となります。`,
    },
    cannot_use_during_phantom_message: { en: `This feature is not available during the QuoraKamm free trial`,
      ja: `ソラカメ無償トライアル中はご利用いただけません` },
    edit_name: {
      dialog_title: { en: `Edit QuoraKamm device name`, ja: `ソラカメデバイスの名前を変更する` },
      name: { en: `Name`, ja: `名前` },
      success: { en: `Successfully updated the name of a QuoraKamm device (id: {{ id }})`,
        ja: `ソラカメデバイス (id: {{ id }}）の名前を変更しました` },
    },
    video_player: {
      unexpected_error: { en: `An unexpected error occurred while playing the video.`,
        ja: `予期しないエラーが発生しました` },
    },
    notification_group: { en: `Notification Group`, ja: `通知グループ` },
    device_event_configuration: { en: `Device Event Configuration`, ja: `デバイスイベント設定` },
  },
  quora_cam_devices: {
    columns: {
      applied_licenses: { en: `Applied Licenses`, ja: `有効なライセンス` },
      name: { en: `Name`, ja: `名前` },
      tags: { en: `Tags`, ja: `タグ` },
      last_connected_time: { en: `Last Connected Time`, ja: `最終接続日時` },
      firmware_version: { en: `Firmware Version`, ja: `ファームウェアバージョン` },
      product_display_name: { en: `Product model name`, ja: `製品名` },
      device_id: { en: `Device ID`, ja: `デバイス ID` },
      state: { en: `Status`, ja: `状態` },
      export_limit: { en: `Recorded video time available for export (monthly limit)`,
        ja: `月あたりの動画のエクスポート可能時間` },
      export_consumed: { en: `Consumed time this month`, ja: `今月の消費時間` },
      export_remaining: { en: `Remaining time this month`, ja: `今月の残り時間` },
      last_event: { en: `Latest event (β)`, ja: `直近のイベント画像 (β)` },
      actions: { en: `Actions`, ja: `アクション` },
      license: { en: `License`, ja: `ライセンス` },
      harquest_data: { en: `Quoracomm Harquest Data`, ja: `QUORACOMM Harquest Data` },
    },
    legends: {
      last_connected_time: {
        description: { en: `Datetime when the compatible camera device was last connected to the cloud.`,
          ja: `ソラカメ対応カメラが最後にクラウドに接続した日時` },
      },
      last_event: {
        description: {
          en:
            `Latest image of the most recent event. The newest image of the most recent event will be displayed. Events that have passed 7 days or devices that have not recorded events due to being offline will not be displayed. The specifications of this column may change in the future.`,
          ja:
            `直近のイベントのうち最も新しい画像が表示されます。7 日間が過ぎたイベントや、オフライン等でイベントが記録されていないデバイスには表示されません。この列の仕様は将来変更される可能性があります。`,
        },
      },
      export_limit: {
        description: {
          en:
            `Monthly limit of time to watch video of the device. You have free discount of 72 hours for each device every month. ¥66 per hour (tax included) will be charged for viewing videos beyond the free trial period. For details, see <a target="_blank" href="https://quoracomm.jp/quora_cam/#pricing">pricing page (Japanese)</a>.`,
          ja:
            `デバイスの月あたりの動画視聴可能時間の上限。月間 72 時間までは無料で利用できます。無料枠を超えた動画の視聴には 1 時間あたり 66 円（税込）の費用がかかります。詳しくは<a target="_blank" href="https://quoracomm.jp/quora_cam/#pricing">料金ページ</a>をご確認ください。`,
        },
      },
    },
    texttip: {
      is_shared: { en: `This device is shared by another user.`,
        ja: `このデバイスは他のユーザーから共有されているデバイスです。` },
      firmware_available: { en: `A new version is available.`, ja: `新しいバージョンが利用可能です。` },
      firmware_latest: { en: `The latest version is installed.`, ja: `お使いのファームウェアは最新です。` },
      firmware_online: { en: `Update now`, ja: `アップデートする` },
      firmware_offline: { en: `Turn on the device and update the firmware.`,
        ja: `デバイスをオンラインにしてファームウェアをアップデートしてください。` },
    },
    text_filter: {
      placeholder: { en: `Search by name`, ja: `名前で検索` },
    },
    add_button: { en: `Add new device`, ja: `デバイス追加` },
    query: {
      from: { en: `From`, ja: `開始時刻` },
      to: { en: `To`, ja: `終了時刻` },
      time: { en: `Time`, ja: `時刻` },
      image_filter: { en: `Image Filters`, ja: `フィルター` },
    },
    values: {
      image_filter: {
        wide_angle_correction: { en: `Wide Angle Correction`, ja: `広角補正` },
      },
      connected: {
        true: { en: `<span class="ds-text --icon-plug-closed --success">Connected</span>`,
          ja: `<span class="ds-text --icon-plug-closed --success">接続中</span>` },
        false: { en: `<span class="ds-text --icon-wi-fi-no">Disconnected</span>`,
          ja: `<span class="ds-text --icon-wi-fi-no">切断</span>` },
      },
      state: {
        on: { en: `<span class="ds-text --icon-active-online --success">Online</span>`,
          ja: `<span class="ds-text --icon-active-online --success">オンライン</span>` },
        sleep: { en: `<span class="ds-text --icon-inactive">Sleep</span>`,
          ja: `<span class="ds-text --icon-inactive">スリープ</span>` },
      },
      tags: {
        none: { en: `None`, ja: `なし` },
      },
      harquest_data: { en: `Go to Harquest Data`, ja: `データを確認する` },
    },
    column_actions: {
      watch_recording: { en: `Watch recording`, ja: `録画を見る` },
      view_events: { en: `View event list`, ja: `イベント一覧を見る` },
      view_exports: { en: `View exported files`, ja: `エクスポートしたファイル見る` },
      edit_name_and_tags: { en: `Edit name and tags`, ja: `名前やタグを編集する` },
    },
    actions: {
      power_on: { en: `Wake up`, ja: `オンラインにする（スリープ解除）` },
      power_off: { en: `Sleep`, ja: `スリープにする` },
      reboot: { en: `Reboot`, ja: `再起動する` },
      regular_interval_images: { en: `Show images taken at regular intervals`, ja: `一定間隔で画像を表示する` },
      multi_device_images: { en: `Show images from multiple devices`, ja: `複数デバイスの画像を表示する` },
      live_streaming: { en: `Watch live streaming of multiple devices`, ja: `複数デバイスのライブ映像を見る` },
      cloud_recording: { en: `Watch recording of multiple devices`, ja: `複数デバイスのクラウド録画を見る` },
      edit_name_and_tags: { en: `Change name and tags`, ja: `名前やタグを変更する` },
      share: { en: `Share`, ja: `デバイスを共有する` },
      delete: { en: `Delete`, ja: `削除する` },
      firmware_update: { en: `Update firmware`, ja: `ファームウェアをアップデートする` },
      assign_license: { en: `Assign/unassign license`, ja: `ライセンスを割り当てる / 解除する` },
      change_order: { en: `Change device order`, ja: `デバイスの並びを変更する` },
      edit_tags_in_bulk: { en: `Edit tags in bulk`, ja: `タグを一括編集する` },
      change_network_settings: { en: `Change network settings`, ja: `ネットワーク設定を変更する` },
    },
  },
  quora_cam_exports: {
    columns: {
      operator_id: { en: `Operator ID`, ja: `オペレーター ID` },
      device_id: { en: `Device ID`, ja: `デバイス ID` },
      device_name: { en: `Device Name`, ja: `デバイス名` },
      export_id: { en: `Export ID`, ja: `エクスポート ID` },
      requested_time: { en: `Requested Time`, ja: `リクエスト日時` },
      expired_time: { en: `Expiration Time`, ja: `ダウンロード期限` },
      status: { en: `Status`, ja: `ステータス` },
      url: { en: `Download URL`, ja: `ダウンロード` },
    },
    values: {
      status: {
        initializing: { en: `Processing (init)`, ja: `エクスポート処理中 (初期化中)` },
        processing: { en: `Processing`, ja: `エクスポート処理中` },
        retrying: { en: `Processing (retry)`, ja: `エクスポート処理中 (再実行中)` },
        completed: { en: `Available`, ja: `ダウンロード可能` },
        expired: { en: `Expired`, ja: `ダウンロード期限切れ` },
        failed: { en: `Failed to export`, ja: `エクスポート失敗` },
        limitExceeded: { en: `Exceed export limits`, ja: `エクスポート制限超過` },
        unknown: { en: `Unknown`, ja: `不明` },
      },
    },
    texttip: {
      harquest: {
        en:
          `This file is stored in Quoracomm Harquest Files. Additional charges apply for downloading. <a href="https://quoracomm.jp/services/harquest/#pricing_files" target="_blank" rel="noreferrer">Learn more <i class="ds-icon --icon-external-link"></i></a>`,
        ja:
          `このファイルは QUORACOMM Harquest Files にエクスポートされたファイルです。ダウンロードには別途料金が発生します。<a href="https://quoracomm.jp/services/harquest/#pricing_files" target="_blank" rel="noreferrer">詳しくはこちら <i class="ds-icon --icon-external-link"></i></a>`,
      },
    },
  },
  QuoraKammDeviceComponent: {
    actions: {
      load_video: { en: `Play cloud recording`, ja: `クラウド録画のストリーミング再生を開始` },
      open_export_video_modal: { en: `Export video`, ja: `動画をエクスポート` },
      open_export_image_modal: { en: `Export image`, ja: `静止画をエクスポート` },
      change_export_limit: { en: `Edit`, ja: `編集` },
      update: { en: `Update`, ja: `アップデート` },
    },
    success_change_export_limit: { en: `Successfully updated monthly limit of exportable recorded video time.`,
      ja: `動画視聴可能時間の上限を変更しました` },
    video_export_initialized: {
      en:
        `Your video has been accepted for download. Once output is complete, you can download it from the download management page. Export ID: {{exportId}}`,
      ja:
        `動画のエクスポートを受け付けました。出力が完了したら、動画ダウンロード管理画面からダウンロードいただけます。Export ID: {{exportId}}`,
    },
    image_export_initialized: {
      en:
        `Your image has been accepted for download. Once output is complete, you can download it from the download management page. Export ID: {{exportId}}`,
      ja:
        `静止画のエクスポートを受け付けました。出力が完了したら、静止画ダウンロード管理画面からダウンロードいただけます。Export ID: {{exportId}}`,
    },
    no_license: { en: `In order to use each feature, an always-on recording license must be assigned in the ATOM app.`,
      ja: `各機能をご利用いただくためには、ATOM アプリで常時録画ライセンスを割り当てる必要があります。` },
    tabs: {
      cloudRecording: { en: `Cloud Recording`, ja: `クラウド録画` },
      live: { en: `Live Streaming`, ja: `ライブ映像` },
      info: { en: `Information`, ja: `デバイス情報` },
      event: { en: `Events`, ja: `イベント` },
      regularIntervalImages: { en: `Regular Interval Images`, ja: `一定間隔で画像を表示する` },
      video_exports: { en: `Download Videos`, ja: `動画ダウンロード管理` },
      image_exports: { en: `Download Images`, ja: `静止画ダウンロード管理` },
    },
  },
  QuoraKammDevicesComponent: {
    title: { en: `Device list`, ja: `デバイス管理` },
  },
  QuoraKammImageExportsComponent: {
    title: { en: `Download Images`, ja: `静止画ダウンロード管理` },
  },
  QuoraKammVideoExportsComponent: {
    title: { en: `Download Videos`, ja: `動画ダウンロード管理` },
  },
  ExportQuoraKammDevice: {
    harquest: {
      title: { en: `Save options`, ja: `保存オプション` },
      checkbox: {
        label: { en: `Export to Quoracomm Harquest Files`, ja: `QUORACOMM Harquest Files にエクスポートする` },
        note: {
          en:
            `Quoracomm Harquest Files is billed based on the amount of data written/read. For more details, please check <a class="ds-text --xsmall" href="https://quoracomm.jp/services/harquest/#pricing_files" target="_blank" rel="noreferrer">this pricing plan explanation page <i class="ds-icon --icon-external-link"></i></a> (JP coverage).`,
          ja:
            `QUORACOMM Harquest Filesは、書き込み/読み出しのデータ量に応じて従量課金が発生します。<br/>詳しくは、こちらの <a class="ds-text --xsmall" href="https://quoracomm.jp/services/harquest/#pricing_files" target="_blank" rel="noreferrer">料金プラン説明ページ <i class="ds-icon --icon-external-link"></i></a>（日本カバレッジ）をご確認ください。`,
        },
        texttip: {
          en:
            `Files exported to Quoracomm Harquest Files are stored on the Quoracomm platform for two years by default, and can be downloaded at any time during that period. However, additional fees apply for exporting (writing) to and downloading (reading) from Quoracomm Harquest Files. <a href="https://quoracomm.jp/services/harquest/#pricing_files" target="_blank" rel="noreferrer">Learn more <i class="ds-icon --icon-external-link"></i></a>`,
          ja:
            `QUORACOMM Harquest Files にエクスポートされたファイルは<wbr/>標準で 2 年間ソラコムプラットフォーム上に保存され、<wbr/>その間いつでもダウンロードが可能です。<wbr/>ただし QUORACOMM Harquest Files へのエクスポート（書き込み）と<wbr/>ダウンロード（読み出し）には別途料金が発生します。<wbr/><a class="ds-text" href="https://quoracomm.jp/services/harquest/#pricing_files" target="_blank" rel="noreferrer">詳しくはこちら <i class="ds-icon --icon-external-link"></i></a>`,
        },
      },
      path: {
        label: { en: `Specify the directory to save`, ja: `保存先のディレクトリを指定する` },
        note: { en: `If left blank, the file will be saved to the root directory.`,
          ja: `空欄の場合はルートディレクトリに保存されます。` },
        texttip: {
          en:
            `You can use placeholders such as <code class="ds-text --code">{device_id}</code> to specify the directory. For a list of available placeholders, see the documentation. <a class="ds-text --icon-external-link" href="https://users.example.com/ja-jp/docs/quoracomm-cloud-camera-services/download-movie-or-picture/" target="_blank" rel="noreferrer"></a>`,
          ja:
            `ディレクトリの指定には <code class="ds-text --code">{device_id}</code> のようなプレースホルダーが利用できます。利用可能なプレースホルダーの一覧はドキュメントをご確認ください。<a class="ds-text" href="https://users.example.com/ja-jp/docs/quoracomm-cloud-camera-services/download-movie-or-picture/" target="_blank" rel="noreferrer">詳しくはこちら <i class="ds-icon --icon-external-link"></i></a>`,
        },
      },
    },
  },
  ExportQuoraKammDeviceVideoComponent: {
    title: { en: `Export video`, ja: `動画のエクスポート` },
    subtitle: {
      en:
        `You can output a video up to 5 minutes in length at a time. It can be downloaded after output is complete in the download videos page.`,
      ja: `一度に最長 15 分までの動画を出力できます。動画はダウンロード管理画面で出力完了後にダウンロードできます。`,
    },
    actions: {
      export: { en: `Export`, ja: `エクスポート` },
    },
  },
  ExportQuoraKammDeviceImageComponent: {
    title: { en: `Export image`, ja: `静止画のエクスポート` },
    subtitle: {
      en:
        `You can output an image at the time. It can be downloaded after output is complete in the download images page.`,
      ja: `指定した時点の画像をエクスポートします。静止画はダウンロード管理画面で出力完了後にダウンロードできます。`,
    },
    actions: {
      export: { en: `Export`, ja: `エクスポート` },
    },
  },
  QuoraKammPageComponent: {
    tab: {
      index: {
        title: { en: `Top`, ja: `トップ` },
      },
      cellular_packs: {
        title: { en: `Cellular Pack`, ja: `ソラカメ専用セルラーパック` },
      },
      devices: {
        title: { en: `Devices`, ja: `デバイス管理` },
      },
      device_share: {
        title: { en: `Device share`, ja: `デバイス共有` },
      },
      events: {
        title: { en: `Events`, ja: `イベント` },
      },
      image_exports: {
        title: { en: `Download Images`, ja: `静止画ダウンロード管理` },
      },
      video_exports: {
        title: { en: `Download Videos`, ja: `動画ダウンロード管理` },
      },
      licenses: {
        title: { en: `Licenses`, ja: `ライセンス管理` },
      },
      annual_payment: {
        title: { en: `Annual Payment Limited Preview Application Form`, ja: `一括年払い Limited Preview` },
      },
      live_streaming: {
        title: { en: `Live Streaming Limited Preview Application Form`, ja: `ライブ視聴見放題 Limited Preview` },
      },
      notification_configurations: {
        title: { en: `Notification Configurations`, ja: `通知設定` },
        device_management: {
          title: { en: `Notifications for Adding/Removing/Sharing Devices`, ja: `デバイスの追加/削除/共有の通知` },
        },
        device_status: {
          title: { en: `Notifications for Device Online/Offline/Recording Interrupted`,
            ja: `デバイスのオンライン/オフライン/録画停止の通知` },
        },
        device_events: {
          title: { en: `Notifications for Device Motion/Sound Detection`,
            ja: `デバイスのモーション検知/サウンド検出の通知` },
        },
      },
      ai_market: {
        title: { en: `AI Market`, ja: `AI マーケット` },
      },
    },
    menu_header: {
      documentation: { en: `Documentation`, ja: `ドキュメント` },
    },
    document: { en: `Document`, ja: `ドキュメント` },
    service_page: { en: `Product page`, ja: `製品ページ` },
    back_to_top: { en: `Back to top`, ja: `トップに戻る` },
  },
  QuoraKammStreamVideoPlayerDialogComponent: {
    title: { en: `Play stream video`, ja: `動画をストリーミング再生する` },
    device: { en: `Device`, ja: `デバイス` },
  },
  QuoraKammEventVideoPlayerDialogComponent: {
    title: { en: `Play Event Video`, ja: `イベント映像` },
    device: { en: `Device`, ja: `デバイス` },
    startTime: { en: `Start Time`, ja: `開始日時` },
    download: { en: `Download`, ja: `ダウンロード` },
  },
  QuoraKammImageCardComponent: {
    reload: { en: `Reload`, ja: `再読込み` },
    error_message: {
      not_found: { en: `Cloud record was not found`, ja: `クラウド録画映像がありません。` },
      permission: { en: `This device does not have a license`, ja: `デバイスにライセンスが適用されていません` },
      rate_limit: { en: `API rate limit exceeded. Please wait for a while and try again later.`,
        ja: `API の実行回数制限を超過しました. しばらく待ってから再度お試しください。` },
    },
  },
  QuoraKammDeviceAutocompleteComponent: {
    placeholder: { en: `Search by device name, ID, or tags`, ja: `デバイス名、ID、またはタグで検索` },
  },
  QuoraKammSelectDeviceDialogComponent: {
    title: { en: `Select Camera`, ja: `カメラを選択する` },
  },
  QuoraKammRegularIntervalImagesComponent: {
    title: { en: `Regular interval images`, ja: `一定間隔で画像を表示する` },
    startDate: { en: `Start Date`, ja: `開始日時` },
    interval: { en: `Interval`, ja: `間隔` },
    itemsPerPage: { en: `Number of images`, ja: `一度に表示する画像数` },
    show: { en: `Show Images`, ja: `画像を表示する` },
    prev: { en: `Previous Images`, ja: `前の画像を表示` },
    next: { en: `Next Images`, ja: `次の画像を表示` },
    download: { en: `Download`, ja: `ダウンロード` },
    download_all: { en: `Download All`, ja: `まとめてダウンロード` },
    filter: { en: `Filter`, ja: `フィルター` },
  },
  duration: {
    weeks: { en: `weeks`, ja: `週` },
    days: { en: `days`, ja: `日` },
    hours: { en: `hours`, ja: `時間` },
    minutes: { en: `minutes`, ja: `分` },
    seconds: { en: `seconds`, ja: `秒` },
  },
  QuoraKammTileSize: {
    small: { en: `Small`, ja: `小` },
    large: { en: `Large`, ja: `大` },
  },
  QuoraKammMultiDeviceImagesComponent: {
    title: { en: `Display images from multiple devices`, ja: `複数デバイスの画像を表示する` },
    datetime: { en: `Datetime`, ja: `日時` },
    add_device: { en: `Add device`, ja: `デバイスを追加する` },
    remove_device: { en: `Remove`, ja: `取り除く` },
  },
  QuoraKammMultiDeviceLiveStreamingsComponent: {
    title: { en: `Live streaming from multiple devices`, ja: `複数デバイスのライブ映像を見る` },
  },
  QuoraKammMultiDeviceCloudRecordingsComponent: {
    title: { en: `Cloud recording of multiple devices`, ja: `複数デバイスのクラウド録画を見る` },
  },
  QuoraKammChangeExportLimitDialog: {
    title: { en: `Change monthly limit of exportable video time`, ja: `動画のエクスポート可能時間を変更する` },
    subtitle: { en: `Change monthly limit of time to export video of the following device`,
      ja: `下記のデバイスの月あたりの動画のエクスポート可能時間を変更します` },
    price_notice: {
      en:
        `You have free discount of 72 hours for each device every month. ¥66 per hour (tax included) will be charged for exporting videos beyond the free trial period. For details, see <a target="_blank" href="https://quoracomm.jp/quora_cam/#pricing">pricing page (in Japanese)</a>`,
      ja:
        `無料で利用できる動画のエクスポート時間は月間 72 時間までです。無料枠を超えた動画の視聴には 1 時間あたり 66 円（税込）の費用がかかります。詳しくは<a href="https://quoracomm.jp/quora_cam/#pricing" target="_blank">料金ページ</a>をご確認ください。`,
    },
    device_name: { en: `Device`, ja: `デバイス名` },
    current_limit_hours: { en: `Current monthly limit`, ja: `現在の月あたりのエクスポート可能時間` },
    current_consumed_time: { en: `Consumed time this month`, ja: `今月の消費時間` },
    current_remaining_time: { en: `Remaining time this month`, ja: `今月の残り時間` },
    new_limit_hours: { en: `New monthly limit`, ja: `変更後のエクスポート可能時間の上限` },
    reset: { en: `Restore Defaults`, ja: `デフォルトに戻す` },
    hours: { en: `Hours`, ja: `時間` },
    confirm: { en: `Change`, ja: `上限を変更する` },
  },
  QuoraKammUpdatePaymentPlan: {
    title: { en: `Update Payment Cycle`, ja: `支払いサイクルを変更する` },
    confirm: { en: `Update`, ja: `変更する` },
    payment_type: { en: `Payment Cycle`, ja: `支払いサイクル` },
    auto_renewal: { en: `License Auto-Renewal`, ja: `ライセンスの自動更新` },
    auto_renewal_label: { en: `Auto-Renewal`, ja: `自動更新` },
    license: { en: `License`, ja: `ライセンス` },
    price: { en: `Price (Tax Included)`, ja: `価格 (税込)` },
    quantity: { en: `Quantity`, ja: `数量` },
    subTotal: { en: `Subtotal (Tax Included)`, ja: `小計 (税込)` },
    license_expiration: { en: `Expiration date`, ja: `ライセンスの有効期限` },
    no_update: { en: `No Updates`, ja: `変更なし` },
    license_payment_notice: { en: `Payment for the following licenses will be changed`,
      ja: `現在所有しているすべてのライセンスの支払いタイプが変更されます` },
    confirm_step_title: { en: `Confirm changes`, ja: `変更内容の確認` },
    year_to_monthly_change_is_prohibited_message: { en: `Changing payment cycle to "monthly" is not supported`,
      ja: `"一括年払い"から"月払い"への支払いサイクルの変更はできません` },
    year_to_monthly_change_is_prohibited_notice: {
      en: `Please be aware that switching back from an "annual" payment cycle to a "monthly" is not supported.`,
      ja: `"一括年払い"から"月払い"への支払いサイクルの変更はできませんので、ご注意ください`,
    },
    licenses_in_processing_are_also_affected_message: {
      en:
        `If you have in-processing orders with quora-kamm licenses , this payment cycle change will also be applied to them.`,
      ja:
        `現在注文中で、まだ発行されていないライセンスがある場合、それらのライセンスに対しても変更後の支払いサイクルが適用されます。`,
    },
    submit: { en: `Update`, ja: `変更する` },
    for_n_months: { en: `for {{ n }} months`, ja: `{{ n }} ヶ月分` },
    success: { en: `Successfully updated the payment cycle`, ja: `支払いサイクルを変更しました` },
  },
  QuoraKammTryPhantomButton: {
    label: { en: `Click to Start the QuoraKamm Free Trial!`, ja: `ソラカメ無償トライアルは、こちらから` },
  },
  QuoraKammTryPhantomDialog: {
    title: { en: `QuoraKamm free trial`, ja: `ソラカメ無償トライアルを開始する` },
    body: { en: `<div class="ds-rows">
  <ul>
    <li> You can try an actual device for 30 minutes with this Quoracomm account, powered by the "share" feature of QuoraKamm.</li>
    <li><span>You can use our mobile app in addition to this web console. Plese refer to <a href="https://users.example.com/ja-jp/docs/quoracomm-cloud-camera-services/use-trial/" target="_blank"> this document (Japanese)</a> for details about QuoraKamm usage and this trial program.</span></li>
    <li> The QuoraKamm free trial is intended for the purpose of evaluating the features and user experience of this service. Usage for purposes other than evaluation is not permitted. </li>
    <li>Unauthorized reproduction or use of any data obtained through this trial is strictly prohibited.</li>
    <li> The free trial may be subject to usage restrictions or termination without prior notice.</li>
    <li><span>Please read <a href="https://quoracomm.jp/files/terms/quoracomm-cloud-camera-services-terms_ja-jp.pdf" target="_blank">the Terms of Service of QuoraKamm (in Japanese)</a> before starting the trial.</span></li>
  </ul>
</div>`, ja: `<ul class="ds-list --icon-check-mark-large">
  <li>ソラカメ無償トライアルでは、ソラカメの共有機能を利用し、お使いのソラコムアカウントで 30 分間ソラカメを実際にお試しいただけます。</li>
  <li><span>現在ご覧いただいているユーザーコンソールの他、モバイルアプリもご利用いただけます。
  具体的な利用方法や、ソラカメ無償トライアルの詳細については<a href="https://users.example.com/ja-jp/docs/quoracomm-cloud-camera-services/use-trial/" target="_blank">こちらのドキュメント</a>を参照してください </span></li>
  <li>ソラカメ無償トライアルは、ソラカメの機能・操作感の検証を目的としたものであり、検証目的以外でのご利用はできません。また、本トライアルを通じて取得したあらゆるデータ（静止画・動画を問わず）の無断転載・無断使用を固く禁じます。</li>
  <li>ソラカメ無償トライアルは、事前の予告なく利用制限もしくは停止することがあります。</li>
  <li><span>トライアル開始前に、必ず<a href="https://quoracomm.jp/files/terms/quoracomm-cloud-camera-services-terms_ja-jp.pdf" target="_blank">ソラカメ利用規約</a>をご確認ください。</span></li>
</ul>` },
    term_of_service_checkbox: { en: `I have read and agreed to the terms and conditions`,
      ja: `上記内容および利用規約を確認し、同意しました` },
    confirm: { en: `Start free trial`, ja: `無償トライアルを開始する` },
  },
  QuoraKammWelcomePhantomDialog: {
    title: { en: `Welcome to the QuoraKamm free trial!`, ja: `ソラカメ無償トライアルへようこそ` },
    body: { en: `<ul>
  <li><span>You can use our mobile app in addition to this web console. Plese refer to <a href="https://users.example.com/ja-jp/docs/quoracomm-cloud-camera-services/use-trial/" target="_blank"> this documnet (Japanese)</a> for details about QuoraKamm usage and this trial program.</span></li>
  <li class="--indent --no-v-indent"">
    In particular, camera controls (camera orientation (pan/tilt), video quality change, night vision mode on/off, power on/off) can only be controlled via the mobile app.</li>
  <li><span>
    When you operate the camera according to <a href="https://users.example.com/ja-jp/docs/quoracomm-cloud-camera-services/use-trial/" target="_blank">the document</a>, you will usually see the following images. If you cannot acquire an image or see a different image, the camera may have been turned in a different direction, the image quality may have been changed, or the power may have been turned off (in sleep mode).
    In this case, please use the mobile application installed on your smartphone to operate the camera.</span></li>
  </li>
  <li>
    At the end of the trial, please turn the power back on and return the camera to its original orientation.
  </li>
</ul>`, ja: `<ul class="ds-list --icon-check-mark-large">
  <li><span>現在ご覧いただいているユーザーコンソールのほか、スマートフォンにインストールする ATOM アプリも利用できます。
    具体的な利用方法や、ソラカメ無償トライアルの詳細については <a href="https://users.example.com/ja-jp/docs/quoracomm-cloud-camera-services/use-trial/" target="_blank">ドキュメント</a> を参照してください。</span></li>
  <li class="--indent --no-v-indent">
      特に、ATOM Cam Swing 本体の操作 (カメラの向きの変更 (パン/チルト)、画質変更、ナイトビジョンモード ON/OFF、電源 ON/OFF) などは ATOM アプリからのみ操作可能です。
  </li>
  <li>
      <p><a href="https://users.example.com/ja-jp/docs/quoracomm-cloud-camera-services/use-trial/" target="_blank">ドキュメント</a> に従って操作すると、通常は下記のような映像が表示されます。
      映像が取得できない場合や、異なる映像が見えている場合は、カメラの向きが変わってたり、画質が変更されていたり、電源が OFF (スリープ状態) になっていたりする可能性があります。
      その場合、スマートフォンにインストールする ATOM アプリを用いて、カメラを操作してください。</p>
  </li>
  <li>
    トライアル終了時には、電源を ON にしてカメラの向きを元に戻すよう、ご協力をお願いいたします。
  </li>
</ul>` },
  },
  QuoraKammUsingPhantomNotice: {
    label: { en: `You're using the QuoraKamm free trial`, ja: `ソラカメ無償トライアル中です` },
    remaining_time: { en: `Remaining Time`, ja: `残り時間` },
    finish_button: { en: `Finish trial`, ja: `ソラカメ無償トライアルを終了する` },
    faq_button: { en: `Show FAQ`, ja: `注意事項を表示する` },
  },
  QuoraKammReleasePhantomConfirmationModal: {
    title: { en: `Finish QuoraKamm free trial`, ja: `ソラカメ無償トライアルを終了する` },
    body: { en: `Are you sure want to finish the QuoraKamm free trial?`, ja: `ソラカメ無償トライアルを終了します。` },
    confirm: { en: `OK`, ja: `OK` },
    cancel: { en: `Cancel`, ja: `キャンセル` },
  },
  QuoraKammAfterPhantomModal: {
    title: { en: `Thank you for joining the QuoraKamm trial!`, ja: `ソラカメ無償トライアルを終了しました` },
    body: {
      en: `Please make sure to fill in <a href="{{url}}" target="_blank"><strong>this questionnaire</strong></a>.`,
      ja:
        `ソラカメ無償トライアルをご利用いただき、ありがとうございます。是非、<a href="{{url}}" target="_blank"><strong>アンケート</strong></a>にご協力ください。`,
    },
    confirm: { en: `I have submitted the questionnaire`, ja: `アンケートに回答しました` },
  },
  QuoraKammToSDialog: {
    title: {
      en:
        `Do you consent to sharing your account information with <a href="https://www.atomtech.co.jp/">ATOM Tech</a>?`,
      ja: `<a href="https://www.atomtech.co.jp/">ATOM Tech</a> にアカウントの利用を許可しますか？`,
    },
    body: { en: `<div class="ds-notice --info">
  When you use Quoracomm Cloud Camera Services (QuoraKamm), <a href="https://www.atomtech.co.jp/">ATOM Tech</a> will have access to the following information of your account:
  <ul class="ds-list">
    <li> Operator ID </li>
    <li> Type and number of QuoraKamm licenses you bought</li>
  </ul>
</div>`, ja: `<div class="ds-notice --info">
  Quoracomm Cloud Camera Services ソラカメを利用する際は、<a href="https://www.atomtech.co.jp/">ATOM Tech</a> がお客様の以下の情報を利用します。
  <ul class="ds-list">
    <li> オペレーター ID </li>
    <li> 購入したライセンスの種類と数 </li>
  </ul>
</div>` },
    checkbox: {
      en:
        `I agree with the above, <a href="https://quoracomm.jp/files/terms/quoracomm-cloud-camera-services-terms_ja-jp.pdf" target="_blank">the terms of service (Japanese)</a> and <a href='https://quoracomm.jp/share/privacy/contractant_privacy/' target='_blank'>Privacy Policy</a>`,
      ja:
        `上記の内容、および <a href="https://quoracomm.jp/files/terms/quoracomm-cloud-camera-services-terms_ja-jp.pdf" target="_blank">利用規約</a> と <a href='https://quoracomm.jp/share/privacy/contractant_privacy/' target='_blank'>プライバシーポリシー</a> に同意します`,
    },
    ok: { en: `OK`, ja: `許可する` },
  },
  quora_cam_cloud_recording_player: {
    set_oldest_label: { en: `Oldest Record`, ja: `最も古いクラウド録画` },
    set_latest_label: { en: `SetLatest Record`, ja: `最も新しいクラウド録画` },
    settings: { en: `Settings`, ja: `設定` },
    play: { en: `Play`, ja: `再生` },
    pause: { en: `Pause`, ja: `停止` },
    playback_rate: {
      label: { en: `Playback speed`, ja: `再生速度` },
      options: {
        '0_5x': { en: `0.5x`, ja: `0.5x` },
        '1x': { en: `1.0x (Normal)`, ja: `1.0x (標準)` },
        '1_5x': { en: `1.5x`, ja: `1.5x` },
        '2x': { en: `2.0x`, ja: `2.0x` },
      },
    },
  },
  quora_cam_cloud_recording_player_settings_dialog: {
    title: { en: `Settings`, ja: `設定` },
    autoplay: {
      label: { en: `Auto Play`, ja: `自動再生` },
      description: {
        en:
          `When operating the timeline bar during video playback, the video will automatically play. Also, when a video loaded from the cloud is played until the end, it will automatically play the continuation of the video`,
        ja:
          `動画再生中にタイムラインバーを操作したときに、自動的に動画を再生します。また、クラウドから読み込んだ動画を最後まで再生したときに、自動的に動画の続きを再生します。`,
      },
    },
    durationToLoad: {
      label: { en: `Video duration (minutes)`, ja: `読み込む動画の長さ（分）` },
      description: {
        en: `Specify the length of the video to be loaded from the cloud with an integer between 1 and 15.`,
        ja: `クラウドから読み込む動画の長さを、1～15 の整数で指定します。`,
      },
    },
  },
  quora_cam_new_device_cloud_recording_dialog: {
    title: { en: `Welcome to new QuoraKamm device!`, ja: `新しいデバイスへようこそ！` },
  },
  quora_cam_p2p_control: {
    title: { en: `Camera Settings`, ja: `カメラ設定` },
    quality: {
      label: { en: `Video Quality`, ja: `画質` },
      edit_label: { en: `Edit video quality`, ja: `画質を変更する` },
      values: {
        low: { en: `Low`, ja: `Low` },
        medium: { en: `Medium`, ja: `Medium` },
        high: { en: `High`, ja: `High` },
      },
      success: { en: `Successfully updated video quality settings.`, ja: `画質を変更しました` },
    },
    statusLight: {
      label: { en: `Status Light`, ja: `ステータスライト` },
      edit_label: { en: `Edit status light settings`, ja: `ステータスライトの設定を変更する` },
      description: { en: `Indicates the status of the camera body by lighting and blinking lamps`,
        ja: `カメラ本体の状態をステータスライトの点灯や点滅で表現します` },
      values: {
        on: { en: `On`, ja: `On` },
        off: { en: `Off`, ja: `Off` },
      },
      success: { en: `Successfully updated status light settings.`, ja: `ステータスライトの設定を変更しました` },
    },
    nightVision: {
      label: { en: `Night Vision`, ja: `ナイトビジョン` },
      edit_label: { en: `Edit night vision settings`, ja: `ナイトビジョンの設定を変更する` },
      values: {
        on: { en: `On`, ja: `On` },
        off: { en: `Off`, ja: `Off` },
        auto: { en: `Auto`, ja: `Auto` },
      },
      success: { en: `Successfully updated night vision settings.`, ja: `ナイトビジョンの設定を変更しました` },
    },
    timestamp: {
      label: { en: `Show Timestamp`, ja: `タイムスタンプ` },
      edit_label: { en: `Edit timestamp settings`, ja: `タイムスタンプの設定を変更する` },
      description: { en: `Displays the date and time at the lower right of the screen`,
        ja: `映像の右下に日付と時間を表示します` },
      values: {
        on: { en: `On`, ja: `On` },
        off: { en: `Off`, ja: `Off` },
      },
      success: { en: `Successfully updated timestamp settings.`, ja: `タイムスタンプの設定を変更しました` },
    },
    logo: {
      label: { en: `Show Logo`, ja: `ロゴ` },
      edit_label: { en: `Edit logo settings`, ja: `ロゴの設定を変更する` },
      description: { en: `Displays the ATOM logo at the lower left of the screen`,
        ja: `映像の左下に ATOM ロゴを表示します` },
      values: {
        on: { en: `On`, ja: `On` },
        off: { en: `Off`, ja: `Off` },
      },
      success: { en: `Successfully updated logo settings.`, ja: `ロゴの設定を変更しました` },
    },
    sound: {
      label: { en: `Sound Detection`, ja: `サウンド検出` },
      edit_label: { en: `Edit sound detection settings`, ja: `サウンド検出の設定を変更する` },
      description: { en: `Detects sounds and records the scenes where sound was detected as events`,
        ja: `サウンドを検出して、サウンドがあった場面をイベントとして記録します` },
      values: {
        on: { en: `On`, ja: `On` },
        off: { en: `Off`, ja: `Off` },
      },
      success: { en: `Successfully updated sound detection settings.`, ja: `サウンド検出の設定を変更しました` },
    },
    soundSensitivity: {
      label: { en: `Sound Detection Sensitivity`, ja: `サウンド検出感度` },
      label_short: { en: `Sensitivity`, ja: `感度` },
      edit_label: { en: `Edit sound detection sensitivity settings`, ja: `サウンド検出感度の設定を変更する` },
      description: { en: `Adjust the sensitivity of sound detection`, ja: `サウンドを検出する感度を調節します` },
      values: {
        low: { en: `Low`, ja: `低` },
        medium: { en: `Medium`, ja: `中` },
        high: { en: `High`, ja: `高` },
      },
      success: { en: `Successfully updated sound detection sensitivity settings.`,
        ja: `サウンド検出感度の設定を変更しました` },
    },
    motion: {
      label: { en: `Motion Detection`, ja: `モーション検知` },
      edit_label: { en: `Edit motion detection settings`, ja: `モーション検知の設定を変更する` },
      description: { en: `Detects motions and records the scenes where motion was detected as events`,
        ja: `動きを検知して、動きがあった場面をイベントとして記録します` },
      values: {
        on: { en: `On`, ja: `On` },
        off: { en: `Off`, ja: `Off` },
      },
      success: { en: `Successfully updated motion detection settings.`, ja: `モーション検知の設定を変更しました` },
    },
    motionSensitivity: {
      label: { en: `Motion Detection Sensitivity`, ja: `モーション検知感度` },
      label_short: { en: `Sensitivity`, ja: `感度` },
      edit_label: { en: `Edit motion detection sensitivity settings`, ja: `モーション検知感度の設定を変更する` },
      description: { en: `Adjust the sensitivity of motion detection`, ja: `動きを検知する感度を調節します` },
      values: {
        low: { en: `Low`, ja: `低` },
        medium: { en: `Medium`, ja: `中` },
        high: { en: `High`, ja: `高` },
      },
      success: { en: `Successfully updated motion detection sensitivity settings.`,
        ja: `モーション検知感度の設定を変更しました` },
    },
    motionTagging: {
      label: { en: `Motion Tagging`, ja: `モーションタグ` },
      edit_label: { en: `Edit motion tagging settings`, ja: `モーションタグの設定を変更する` },
      description: { en: `When motion detected, a green frame will be marked on the detected objects`,
        ja: `動きを検知して、動くものに緑色の枠をつけます` },
      values: {
        on: { en: `On`, ja: `On` },
        off: { en: `Off`, ja: `Off` },
      },
      success: { en: `Successfully updated motion tagging settings.`, ja: `モーションタグの設定を変更しました` },
    },
    rotation: {
      label: { en: `Rotate Image`, ja: `画像回転` },
      edit_label: { en: `Edit rotation settings`, ja: `画像回転の設定を変更する` },
      description: { en: `Rotate the camera feed image 180 degrees`, ja: `画像を上下 180° 回転させます` },
      success: { en: `Successfully updated rotation settings.`, ja: `画像回転の設定を変更しました` },
    },
    position: {
      label: { en: `Camera orientation`, ja: `カメラの向き` },
      reset: { en: `Reset`, ja: `リセット` },
      description: { en: `Change the orientation of the camera`, ja: `カメラの向きを変更します` },
      value: { en: `Horizontal: {{ horizontal }}° Vertical: {{ vertical }}°`,
        ja: `水平方向: {{ horizontal }}° 垂直方向: {{ vertical }}°` },
    },
  },
  quora_cam_position_control: {
    positioning_message: { en: `Adjusting...`, ja: `調整しています...` },
    waiting_message: {
      title: { en: `The adjustment is complete`, ja: `調整が完了しました` },
      info: { en: `Waiting for the video to arrive... ({{ countdown }} seconds remaining)`,
        ja: `映像が届くのを待っています... (残り{{ countdown }}秒)` },
    },
    guide_message: { en: `Click on the screen where you want to position the camera.`,
      ja: `カメラを向かせたい場所を画面上でクリックしてください。` },
    error_message: { en: `Failed to retrieve camera orientation, so adjustment will be terminated.`,
      ja: `カメラの向きの取得に失敗したため調整を終了します。` },
    info_message: {
      ok: { en: `OK`, ja: `OK` },
    },
    rotation: {
      top: { en: `Rotate 60° upward`, ja: `上に60°回転する` },
      bottom: { en: `Rotate 60° downward`, ja: `下に60°回転する` },
      left: { en: `Rotate 60° to the left`, ja: `左に60°回転する` },
      right: { en: `Rotate 60° to the right`, ja: `右に60°回転する` },
    },
    button: {
      label: {
        on: { en: `Adjust camera orientation`, ja: `カメラの向きを調整する` },
        off: { en: `Finish adjustment`, ja: `調整を終える` },
        rotating: { en: `Adjusting position`, ja: `位置を調整しています` },
        loading: { en: `Preparing camera`, ja: `カメラの準備をしています` },
        error: { en: `Failed to retrieve camera orientation`, ja: `カメラの向きの取得に失敗しました` },
      },
      help: {
        title: { en: `Not moving as expected?`, ja: `思い通りに動きませんか？` },
        message: { en: `Frequent adjustments may cause the camera orientation to be inaccurate.`,
          ja:
            `調整を繰り返すと、カメラの実際の向きとカメラの内部状態に差異が発生することがあります。その場合はカメラの向きをリセットしてください。` },
        action: { en: `Reset the camera's orientation.`, ja: `今すぐ試す` },
      },
    },
    reset_modal: {
      title: { en: `Reset camera orientation`, ja: `カメラの向きをリセットする` },
      body: { en: `Are you sure you want to reset the camera orientation?`,
        ja: `カメラの向きをリセットします。実行しますか？` },
      confirm: { en: `Proceed`, ja: `実行` },
      cancel: { en: `Cancel`, ja: `キャンセル` },
    },
    force_end_modal: {
      title: { en: `Camera orientation adjustment ended`, ja: `カメラの向きの調整を終了しました` },
      body: { en: `Camera orientation adjustment has ended due to the video playback being stopped.`,
        ja: `動画の再生が停止されたため、カメラの向きの調整を終了しました。` },
      confirm: { en: `OK`, ja: `OK` },
    },
  },
  CreateQuoraKammNotificationGroup: {
    name: { en: `Name`, ja: `名前` },
    description: { en: `Description`, ja: `概要` },
  },
  DeleteQuoraKammNotifcationGroup: {
    dialog: {
      title: { en: `Delete a QuoraKamm notification group`, ja: `ソラカメ通知グループを削除する` },
      body: { en: `This operation cannnot be undone. Are you sure you want to delete this group?`,
        ja: `この操作は取り消せません。本当にこのグループを削除しますか？` },
      cancel: { en: `Cancel`, ja: `キャンセル` },
      confirm: { en: `Delete`, ja: `削除` },
    },
  },
  SetQuoraKammNotificationGroup: {
    dialog: {
      title: { en: `This device beleongs to another QuoraKamm notification group`,
        ja: `このデバイスは他のソラカメ通知グループに所属しています` },
      body: { en: `<p>
  This device <span class="ds-tag --outline --24-wmax-ch">{{ deviceName }}</span> currently belongs to another notification group <span class="ds-tag --outline --24-wmax-ch">{{fromGroupName}}</span>.
</p>
<p> A device cannot belong to multiple groups.</p>
<p>
  Are you sure want to move the device <span class="ds-tag --outline --24-max-ch">{{ deviceName }}</span> to this group <span class="ds-tag --outline --24-max-ch">{{ toGroupName}}</span>?
</p>`, ja: `<p>
  このデバイス <span class="ds-tag --outline --24-wmax-ch">{{ deviceName }}</span> は他のソラカメ通知グループ <span class="ds-tag --outline --24-wmax-ch">{{fromGroupName}}</span> に所属しています。
</p>
<p> １つのデバイスを複数のソラカメ通知グループに所属させることはできません。</p>
<p>
  このデバイス <span class="ds-tag --outline --24-max-ch">{{ deviceName }}</span> の所属を <span class="ds-tag --outline --24-max-ch">{{ toGroupName}}</span> に移しますか？
</p>` },
      cancel: { en: `Cancel`, ja: `キャンセル` },
      confirm: { en: `Confirm`, ja: `確認` },
    },
  },
  QuoraKammDevicesInNotificationGroupTableComponent: {
    dialog: {
      title: { en: `Add QuoraKamm device to notification group`, ja: `デバイスを通知グループに追加する` },
    },
  },
  QuoraKammNotificationConfiguration: {
    unsaved_changes_warning: {
      title: { en: `Unsaved changes exists`, ja: `保存されていない変更があります` },
      body: { en: `Unsaved changes exist. Are you sure you want to close this dialog, and lose these changes?`,
        ja: `保存されていないデータがあります。このまま閉じると変更が失われますがよろしいですか？` },
      cancel: { en: `Cancel`, ja: `キャンセル` },
      confirm: { en: `Confirm`, ja: `確認` },
    },
  },
  QuoraKammDeviceShareSuccessModal: {
    title: { en: `Shared devices`, ja: `デバイスを共有しました` },
    body: {
      en:
        `You shared <b>{{ numOfDevices }}</b> devices with User <b>{{ operatorId }}</b>. They can access your cameras by accepting this share. You can check the shared devices and cancel the share from the <a href="/quora_cam/shares">Device Sharing<i class="ds-icon --icon-arrow-top-right --color-celeste-dark"></i></a> page.`,
      ja:
        `ユーザー <b>{{ operatorId }}</b>と<b>{{ numOfDevices }}</b>個のデバイスを共有しました。相手のユーザーはこの共有を承認することであなたのカメラにアクセスできるようになります。共有済みのデバイスの確認や共有の取り消しは<a href="/quora_cam/shares" target="_blank">デバイス共有画面<i class="ds-icon --icon-arrow-top-right --color-celeste-dark"></i></a>から行うことができます。`,
    },
    confirm: { en: `OK`, ja: `OK` },
  },
  quora_cam_device_shares: {
    columns: {
      device_name: { en: `Device name`, ja: `デバイス名` },
      device_id: { en: `Device ID`, ja: `デバイスID` },
      status: { en: `Status`, ja: `共有ステータス` },
      owner_atom_user_id: { en: `Owner`, ja: `共有元` },
      recipient_atom_user_id: { en: `Recipient`, ja: `共有先` },
      sent_at: { en: `Sent at`, ja: `送信日時` },
      received_at: { en: `Received at`, ja: `受信日時` },
      actions: { en: `Actions`, ja: `アクション` },
    },
    actions: {
      accept: { en: `Accept`, ja: `承認する` },
      decline: { en: `Decline`, ja: `拒否する` },
      cancel: { en: `Cancel`, ja: `取り消す` },
      configure: { en: `Configure share settings`, ja: `共有の受信設定を行う` },
    },
    buttons: {
      accept: { en: `Accept`, ja: `承認` },
      decline: { en: `Decline`, ja: `拒否` },
      cancel: { en: `Execute cancellation`, ja: `取り消しを実行` },
    },
    cancel_confirmation: {
      singular: {
        en:
          `You are canceling the share of <b>{{ deviceName }}</b> to User <b>{{ user }}</b>. It will be removed from their list.`,
        ja:
          `ユーザー <b>{{ user }}</b> への <b>{{ deviceName }}</b> の共有を取り消します。共有を取り消すと共有先の画面から削除されます。`,
      },
    },
    cancel_invalid_confirmation: {
      singular: {
        en:
          `You are canceling the share of <b>{{ deviceName }}</b> to an invalid recipient. It will be removed from their list.`,
        ja:
          `無効な共有先への <b>{{ deviceName }}</b> の共有を取り消します。共有を取り消すと共有先の画面から削除されます。`,
      },
    },
    accept_confirmation: {
      singular: {
        en:
          `You are accepting the device share of <b>{{ deviceName }}</b> from User <b>{{ user }}</b>. By accepting the device share, you will be able to access the device from your device list.`,
        ja:
          `ユーザー <b>{{ user }}</b> からの <b>{{ deviceName }}</b> の共有を承認します。デバイス共有を承認するとデバイス管理画面に表示されます。`,
      },
      plural: {
        en:
          `You are accepting <b>{{ num }}</b> device shares. By accepting the device shares, you will be able to access the devices from your device list.`,
        ja: `<b>{{ num }}</b>件のデバイス共有を承認します。デバイス共有を承認するとデバイス管理画面に表示されます。`,
      },
    },
    decline_confirmation: {
      singular: {
        en:
          `You are declining the device share of <b>{{ deviceName }}</b> from User <b>{{ user }}</b>. The device share will be removed from this list.`,
        ja: `ユーザー <b>{{ user }}</b> からの <b>{{ deviceName }}</b> の共有を拒否し、共有の一覧から削除します。`,
      },
      plural: {
        en: `You are declining <b>{{ num }}</b> device shares. The device shares will be removed from this list.`,
        ja: `<b>{{ num }}</b>件のデバイス共有を拒否し、共有の一覧から削除します。`,
      },
    },
    decline_invalid_confirmation: {
      singular: {
        en:
          `You are declining the device share of <b>{{ deviceName }}</b> from an invalid owner. The device share will be removed from this list.`,
        ja: `無効な共有元からの <b>{{ deviceName }}</b> の共有を拒否し、共有の一覧から削除します。`,
      },
      plural: {
        en: `You are declining <b>{{ num }}</b> device shares. The device shares will be removed from this list.`,
        ja: `<b>{{ num }}</b>件のデバイス共有を拒否し、共有の一覧から削除します。`,
      },
    },
    remove_confirmation: {
      singular: {
        en:
          `You are canceling the share of <b>{{ deviceName }}</b> from User <b>{{ user }}</b>. You will lose access to this device and it will be removed from your device list.`,
        ja:
          `ユーザー <b>{{ user }}</b> からの <b>{{ deviceName }}</b> の共有を取り消します。このデバイスはデバイス管理画面から削除されます。`,
      },
    },
    remove_invalid_confirmation: {
      singular: { en: `You are removing device share of <b>{{ deviceName }}</b> from an invalid owner.`,
        ja: `不明なユーザーからの無効な <b>{{ deviceName }}</b> の共有を一覧から削除します。` },
      plural: { en: `You are removing <b>{{ num }}</b> device shares from invalid owners.`,
        ja: `不明なユーザーからの<b>{{ num }}</b>件の無効なデバイス共有を一覧から削除します。` },
    },
  },
  quora_cam_device_registration: {
    cancel_add_confirmation: {
      title: { en: `Cancel adding device`, ja: `デバイス追加をやめる` },
      body: {
        en:
          `The entered content will not be saved. If you cancel adding, you will need to start over from the beginning.`,
        ja: `入力された内容は保存されません。追加をやめた場合は最初からやり直す必要があります。`,
      },
      cancel: { en: `Back to adding`, ja: `追加に戻る` },
      confirm: { en: `Cancel adding`, ja: `追加をやめる` },
    },
    cancel_edit_confirmation: {
      title: { en: `Cancel editing device`, ja: `デバイスの設定をやめる` },
      body: { en: `If you quit setting here, you will need to change a name and assign a license later.`,
        ja: `ここで設定をやめた場合、あとで名前やライセンスの割り当てを行う必要があります。` },
      cancel: { en: `Back to editing`, ja: `設定に戻る` },
      confirm: { en: `Cancel editing`, ja: `設定をやめる` },
    },
    cancel_change_network_confirmation: {
      title: { en: `Cancel changing network settings`, ja: `ネットワーク設定の変更をやめる` },
      body: {
        en:
          `The entered content will not be saved. If you cancel changing, you will need to start over from the beginning.`,
        ja: `入力された内容は保存されません。変更をやめた場合は最初からやり直す必要があります。`,
      },
      cancel: { en: `Back to changing`, ja: `変更に戻る` },
      confirm: { en: `Cancel changing`, ja: `変更をやめる` },
    },
  },
};
