export const translations = {
  vpgPacketCaptureSessions: {
    title: { en: `Packet capture sessions`, ja: `パケットキャプチャセッション` },
    table: {
      columns: {
        action: { en: `Action`, ja: `操作` },
        startedTime: { en: `Started time`, ja: `開始日時` },
        status: { en: `Status`, ja: `ステータス` },
        capturedFile: { en: `Captured file`, ja: `パケットキャプチャファイル` },
        createdTime: { en: `Created time`, ja: `作成日時` },
        prefix: { en: `Prefix`, ja: `ファイル名 (prefix)` },
        duration: { en: `Duration (sec.)`, ja: `キャプチャ時間 (秒)` },
      },
    },
    getLink: { en: `Get link`, ja: `リンクを取得` },
    downloadFile: { en: `Download file`, ja: `ダウンロード` },
    gettingLink: { en: `Getting ...`, ja: `待機中` },
    noData: { en: `No data`, ja: `データなし` },
    sessionInfoCommonError: { en: `There was some error from API while fetching link`,
      ja: `リンクを取得する際に API エラーが発生しました` },
    deleteCommonError: { en: `There was some error from API while deleting packet session`,
      ja: `パケットキャプチャセッションを削除する際に API エラーが発生しました` },
    fetchSessions: {
      commonApiError: { en: `There was some error from API while fetching packet capture sessions`,
        ja: `セッション一覧を取得する際に API エラーが発生しました` },
    },
    button: {
      requestSession: { en: `Start capturing`, ja: `キャプチャを開始` },
      loadMore: { en: `Load more ...`, ja: `さらに読み込む` },
    },
    deleteCaptureModal: {
      title: { en: `Delete packet capture session`, ja: `パケットキャプチャセッションを削除` },
      confirmMessage: { en: `Are you sure you want to delete this capture session ?`,
        ja: `削除してもよろしいでしょうか？` },
      button: {
        cancel: { en: `Cancel`, ja: `キャンセル` },
        delete: { en: `Delete`, ja: `削除` },
      },
    },
    requestCaptureModal: {
      title: { en: `Start capturing session`, ja: `パケットキャプチャセッションを開始` },
      pricingInfo: {
        en:
          `By enabling VPG packet capture session, your account will be charged fee for this VPG. Please refer to <a href="https://developers.example.com/en/docs/reference/fees/#quoracomm-peek">the pricing information for details.</a>`,
        ja:
          `VPGのパケットキャプチャセッションを有効にすると料金が発生します。詳細は<a href="https://quoracomm.jp/services/peek/price/#peek-for-vpg">こちら</a>をご確認ください。`,
      },
      validation: {
        prefix: {
          maxlength: { en: `Prefix must be less then or equal to 100 characters`,
            ja: `プレフィックスは100文字を超えてはいけません` },
          pattern: { en: `Prefix should contain only alphanumeric characters including - and _`,
            ja: `プレフィックスには英数字および “-” と “_” のみ使用することができます` },
        },
        duration: {
          required: { en: `Duration is required`, ja: `キャプチャ時間は必要です` },
          pattern: { en: `Duration must be number`, ja: `キャプチャ時間は数値である必要があります` },
          min: { en: `Minimum duration required is 60 seconds`,
            ja: `最小のキャプチャ時間は 60 秒以上である必要があります` },
          max: { en: `Maximum 86,400 seconds (24 hours) can be set as duration`,
            ja: `最大のキャプチャ時間は 86,400 秒 (24 時間) です` },
        },
      },
      label: {
        prefix: { en: `Prefix`, ja: `ファイル名 (prefix)` },
        duration: { en: `Duration (in seconds)`, ja: `キャプチャ時間 (秒)` },
      },
      button: {
        cancel: { en: `Cancel`, ja: `キャンセル` },
        start: { en: `Start capturing`, ja: `キャプチャを開始` },
      },
      commonApiError: { en: `There was some error from API while requesting capture`,
        ja: `API へのリクエスト中にエラーが発生しました` },
    },
    stopCaptureModal: {
      title: { en: `Stop packet capture session`, ja: `パケットキャプチャセッションを停止` },
      confirmMessage: { en: `Are you sure you want to stop this capture session ?`,
        ja: `停止してもよろしいでしょうか？` },
      button: {
        cancel: { en: `Cancel`, ja: `キャンセル` },
        stop: { en: `Stop`, ja: `停止` },
      },
    },
  },
};
