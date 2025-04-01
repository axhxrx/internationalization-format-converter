export const translations = {
  relay: {
    title: { en: `Quoracomm Relay sessions`, ja: `QUORACOMM Relay セッション一覧` },
    buttons: {
      register: { en: `New`, ja: `新規作成` },
      terminate: { en: `Terminate`, ja: `削除` },
      fetchVideo: { en: `Fetch video stream`, ja: `ビデオストリームを取得する` },
    },
    table: {
      title: { en: `Quoracomm Relay sessions`, ja: `セッション一覧` },
    },
    columns: {
      id: { en: `Id`, ja: `ID` },
      resource_type: { en: `Resource type`, ja: `リソースタイプ` },
      resource_id: { en: `SIM ID`, ja: `SIM ID` },
      service: { en: `Destination service`, ja: `転送先サービス` },
      created_time_epoch_ms: { en: `Created time`, ja: `作成日時` },
      updated_time_epoch_ms: { en: `Updated time`, ja: `更新日時` },
      ttl_epoch_ms: { en: `End time`, ja: `終了日時` },
      status: { en: `Status`, ja: `状態` },
      kinesisVideoStreamsARN: { en: `KVS ARN`, ja: `Kinesis Video Streams ARN` },
      kinesisVideoStreamsAssumeRoleARN: { en: `KVS Assume Role ARN`, ja: `Kinesis Video Streams Assume Role ARN` },
      s3BucketName: { en: `S3 Bucket name`, ja: `S3バケット名` },
      s3AssumeRoleARN: { en: `S3 Assume Role ARN`, ja: `S3 Assume Role ARN` },
      harquestFilesBasePath: { en: `Harquest Files default path`, ja: `Harquest Files デフォルト パス` },
      motionDetectionSensitivity: { en: `Motion detection sensitivity`, ja: `モーション検知の感度` },
      motionDetectionImageUploadWaitTimeSec: { en: `Motion detection image upload wait time (sec)`,
        ja: `モーション検出後の連続検出の時間 (秒)` },
      motionDetectionUploadVideoFile: { en: `Upload video file`, ja: `動画のアップロード` },
    },
    newSession: {
      title: { en: `Create new Relay session`, ja: `新規 QUORACOMM Relay セッションを作成` },
      resourceId: { en: `SIM ID`, ja: `接続先 SIM` },
      rtspServer: { en: `RTSP Server name`, ja: `RTSP サーバー` },
      rtspPort: { en: `RTSP Port`, ja: `ポート番号` },
      rtspUser: { en: `RTSP Username`, ja: `ユーザー名` },
      rtspPassword: { en: `RTSP Password`, ja: `パスワード` },
      rtspPaths: { en: `Path`, ja: `パス` },
      rtspQueryParams: { en: `Query parameters`, ja: `クエリパラメータ` },
      retentionPeriod: { en: `Retention period (in minutes)`, ja: `セッション保持期間 (分)` },
      s3: { en: `S3 Bucket name`, ja: `S3 バケット名` },
      s3Arn: { en: `Assume Role ARN`, ja: `S3 Assume Role ARN` },
      simServiceType: { en: `Connect by Quoracomm Arc`, ja: `QUORACOMM Arc で接続する` },
      simServiceTypeDescription: {
        en: `Quoracomm Arc enabled IoT SIM is selected; check the box to connect using Quoracomm Arc.`,
        ja:
          `QUORACOMM Arc が有効な IoT SIM を選択しています。QUORACOMM Arc を使って接続する場合にチェックを入れてください。`,
      },
      kinesisVideoStreamsARN: { en: `KVS Video Stream ARN`, ja: `Kinesis Video Streams ARN` },
      kinesisVideoStreamsAssumeRoleARN: { en: `KVS Video Stream Assume Role ARN`, ja: `KVS Assume Role ARN` },
      harquest: { en: `Harquest file url`, ja: `Harquest Files URL` },
      harquestDefaultPath: { en: `Default path`, ja: `デフォルト パス` },
      motionDetectionSensitivity: { en: `Motion detection sensitivity`, ja: `モーション検知の感度` },
      motionDetectionHarquestFilesDefaultPath: { en: `Default path`, ja: `デフォルト パス` },
      motionDetectionImageUploadWaitTimeSec: { en: `Motion detection image upload wait time (sec)`,
        ja: `モーション検出後の連続検出の時間 (秒)` },
      motionDetectionUploadVideoFile: { en: `Upload video file`, ja: `動画のアップロード` },
      service: { en: `Service`, ja: `サービス` },
      create: { en: `Create`, ja: `作成` },
      addPath: { en: `Add path`, ja: `パスを追加` },
      deletePath: { en: `Delete path`, ja: `パスを削除` },
      success: { en: `Relay session created successfully.`, ja: `セッションが作成されました` },
      group: {
        source: { en: `Source`, ja: `接続先 RTSP サーバー` },
        destination: { en: `Destination`, ja: `転送先サービス` },
      },
      validation: {
        resourceId: {
          required: { en: `SIM ID is required`, ja: `SIM IDを入力してください` },
        },
        destination: {
          required: { en: `Please select Service`, ja: `転送先サービスを選択してください` },
        },
        rtspPort: {
          required: { en: `RTSP port is required`, ja: `RTSP ポート番号を入力してください` },
        },
        rtspUser: {
          required: { en: `RTSP user name is required`, ja: `RTSP ユーザー名を入力してください` },
        },
        rtspPassword: {
          required: { en: `RTSP password is required`, ja: `RTSP パスワードを入力してください` },
        },
        retentionPeriod: {
          required: { en: `Retention period is required`, ja: `セッション保持期間を入力してください` },
        },
        rtspPath: {
          required: { en: `Path is required`, ja: `パスを入力してください` },
        },
        kinesisVideoStreamsARN: {
          required: { en: `KVS Video Stream ARN is required`, ja: `Kinesis Video Streams ARN を入力してください` },
        },
        kinesisVideoStreamsAssumeRoleARN: {
          required: { en: `KVS Video Stream Assume Role ARN is required`,
            ja: `KVS Video Streams Assume Role ARN を入力してください` },
        },
        motionDetectionHarquestFilesDefaultPath: {
          required: { en: `Harquest files default path is required`, ja: `デフォルト パスを入力してください` },
        },
        motionDetectionImageUploadWaitTimeSec: {
          required: { en: `Motion Detection Image Upload Wait Time is required in range of 1 ~ 600 seconds`,
            ja: `モーション検知の連続検出の時間を 1 秒から 600 秒の間で入力してください。` },
          min: { en: `Minimum 1 second`, ja: `最小 1 秒` },
          max: { en: `Maximum 600 seconds`, ja: `最大 600 秒` },
        },
        bucketName: {
          required: { en: `S3 Bucket name is required`, ja: `S3 バケット名を入力してください` },
        },
        assumeRoleARN: {
          required: { en: `Assume Role ARN is required`, ja: `Assume Role ARN を入力してください` },
        },
        defaultPath: {
          required: { en: `Harquest files default path is required`, ja: `デフォルト パス を入力してください` },
        },
        rtspQueryParams: {
          keyRequired: { en: `Query param name is required`, ja: `クエリパラメータ名を入力してください` },
          valueRequired: { en: `Query param value is required`, ja: `クエリパラメータ値を入力してください` },
        },
      },
    },
    destination: {
      pleaseSelect: { en: `Select destination service`, ja: `転送先サービスを選択` },
      'quora-rtsp-kvs': { en: `Quollabozo KVS (Quoracomm managed)`,
        ja: `Quollabozo Kinesis Video Streams (ソラコム管理)` },
      'rtsp-kvs': { en: `Quollabozo KVS (Customer managed)`, ja: `Quollabozo Kinesis Video Streams` },
      'rtsp-harquest-files': { en: `Quoracomm Harquest Files`, ja: `QUORACOMM Harquest Files` },
      'rtsp-s3': { en: `Quollabozo S3 bucket`, ja: `Quollabozo S3` },
      'rtsp-motion-detection': { en: `Quoracomm Harquest Files (Motion Detection)`,
        ja: `QUORACOMM Harquest Files (モーション検知)` },
    },
    status: {
      provisioning: { en: `Provisioning`, ja: `準備中` },
      active: { en: `Active`, ja: `アクティブ` },
      inactive: { en: `Inactive`, ja: `非アクティブ` },
      terminated: { en: `Terminated`, ja: `終了` },
      failed: { en: `Failed`, ja: `異常終了` },
    },
    sessionDetails: {
      title: { en: `Quoracomm Relay session details`, ja: `QUORACOMM Relay セッション詳細` },
      videoIsNotAvailable: { en: `Video is available only when the status is active.`,
        ja: `ビデオはステータスがアクティブなときにだけ利用できます。` },
      videoIsNotSupported: { en: `Video is not supported in the selected destination service.`,
        ja: `利用中のサービスはユーザーコンソールでの動画再生をサポートしていません。` },
    },
    motionDetectionSensitivityValue: {
      low: { en: `Low`, ja: `低` },
      medium: { en: `Medium`, ja: `中` },
      high: { en: `High`, ja: `高` },
    },
    motionDetectionUploadVideoFileValue: {
      false: { en: `No`, ja: `無` },
      true: { en: `Yes`, ja: `有` },
    },
  },
};
