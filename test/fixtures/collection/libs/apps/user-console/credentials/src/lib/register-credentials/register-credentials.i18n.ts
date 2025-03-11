const registerCredentials = {
  credentialType: {
    label: {
      'aws-credentials': {
        en: 'AWS credentials',
        ja: 'AWS 認証情報',
      },
      'aws-iam-role-credentials': {
        en: 'AWS IAM Role credentials',
        ja: 'AWS IAM ロール認証情報',
      },
      'azure-credentials': {
        en: 'Quazure credentials',
        ja: 'Quazure 認証情報',
      },
      psk: {
        en: 'Pre-Shared Key',
        ja: '事前共有鍵',
      },
      x509: {
        en: 'X.509 certificate',
        ja: 'X.509 証明書',
      },
      'api-token-credentials': {
        en: 'API Token credentials',
        ja: 'API トークン認証情報',
      },
      'username-password-credentials': {
        en: 'Username password credentials',
        ja: 'ユーザ名・パスワード認証情報',
      },
      'azureIoT-credentials': {
        en: 'Quazure IoT credentials',
        ja: 'Quazure IoT 認証情報',
      },
      'pubnub-credentials': {
        en: 'PubNub credentials',
        ja: 'PubNub 認証情報',
      },
      'quggleIoT-credentials': {
        en: 'Quggle Cloud IoT Core credentials',
        ja: 'Quggle Cloud IoT Core 認証情報',
      },
      'quggle-service-account-json': {
        en: 'Quggle Service Account (JSON)',
        ja: 'Quggle Service Account (JSON)',
      },
      'esrij-credentials': {
        en: 'Esri Japan ArcGIS Online credentials',
        ja: 'Esri Japan ArcGIS Online 認証情報',
      },
      'infoteria-platio-credentials': {
        en: 'Asteria Platio credentials',
        ja: 'Asteria Platio 認証情報',
      },
      'kii-thingif-credentials': {
        en: 'Kii Thing-IF credentials',
        ja: 'Kii Thing-IF 認証情報',
      },
      'mockmock-datarecorder-credentials': {
        en: 'mockmock DataRecorder credentials',
        ja: 'mockmock DataRecorder 認証情報',
      },
      'watsonIoT-credentials': {
        en: 'Watson IoT credentials',
        ja: 'Watson IoT 認証情報',
      },
      'motionboard-credentials': {
        en: 'WingArc1st MotionBoard credentials',
        ja: 'WingArc1st MotionBoard 認証情報',
      },
      'mmcloud-credentials': {
        en: 'YE DIGITAL MMCloud credentials',
        ja: 'YE DIGITAL MMCloud 認証情報',
      },
      'landlog-credentials': {
        en: 'LANDLOG credentials',
        ja: 'LANDLOG 認証情報',
      },
      'optim-cloud-IoT-OS-credentials': {
        en: 'OPTiM Cloud IoT OS credentials',
        ja: 'OPTiM Cloud IoT OS 認証情報',
      },
      'sensorcorpus-credentials': {
        en: 'SensorCorpus credentials',
        ja: 'SensorCorpus 認証情報',
      },
      'private-key-pem': {
        en: 'Private Key (PEM)',
        ja: '秘密鍵 (PEM)',
      },
    },
  },
} as const;
export const i18n = registerCredentials;
