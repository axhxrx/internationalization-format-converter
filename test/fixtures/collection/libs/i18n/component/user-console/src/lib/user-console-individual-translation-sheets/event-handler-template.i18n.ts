export const translations = {
  eventHandlerTemplate: {
    title: { en: `Import template`, ja: `テンプレートをインポート` },
    description: {
      en:
        `Create new event handler by importing existing json template. Have a look at <a href="https://developers.example.com/en/docs/air/event-handler/" target="_blank">document</a> for more info about template format.`,
      ja:
        `既存のJSONテンプレートをインポートして新しいイベントハンドラーを作成できます。テンプレートのフォーマットについては<a href="https://users.example.com/ja-jp/docs/event-handler/configure-with-api/" target="_blank">こちら</a>をご確認ください。`,
    },
    selectFileLabel: { en: `Select file`, ja: `ファイルを選択` },
    button: {
      create: { en: `Create Event`, ja: `イベント作成` },
      cancel: { en: `Cancel`, ja: `キャンセル` },
    },
    message: {
      createSuccess: { en: `Event was created successfully.`, ja: `イベントは正常に作成されました` },
      commonError: { en: `There was some error from API.`, ja: `反映時にエラーが発生しました` },
      invalidFileType: { en: `Selected file type must be json`, ja: `ファイルタイプはJSONのみ選択できます` },
    },
    jsonValidationMessage: {
      targetMissing: { en: `One of the target is required`, ja: `ターゲットのいずれかが必要です` },
      targetImsiValueRequired: { en: `Value of targetImsi is required`, ja: `targetImsi が必要です` },
      targetSimIdValueRequired: { en: `Value of targetSimId is required`, ja: `targetSimId が必要です` },
      targetGroupIdValueRequired: { en: `Value of targetGroupId is required`, ja: `targetGroupId が必要です` },
      targetOperatorIdValueRequired: { en: `Value of targetOperatorId is required`, ja: `targetOperatorId が必要です` },
      invalidStatus: { en: `Status must be either active or inactive`,
        ja: `Status の値は 'active' または 'inactive' である必要があります` },
      invalidRuleTypeTargetImsi: { en: `Invalid ruleConfig.type for targetImsi`,
        ja: `ruleConfig.type の値が targetImsi に対応していません` },
      invalidRuleTypeTargetSim: { en: `Invalid ruleConfig.type for targetSimId`,
        ja: `ruleConfig.type の値が targetSimId に対応していません` },
      invalidRuleTypeTargetGroup: { en: `Invalid ruleConfig.type for targetGroupId`,
        ja: `ruleConfig.type の値が targetGroupId に対応していません` },
      invalidRuleTypeTargetOperator: { en: `Invalid ruleConfig.type for targetOperatorId`,
        ja: `ruleConfig.type の値が targetOperatorId に対応していません` },
      ruleConfigPropsRequired: { en: `ruleConfig properties are required`, ja: `ruleConfig に properties が必要です` },
      ruleConfigPropRequired: { en: `Property {{ prop }} is required`, ja: `プロパティ {{ prop }} が必要です` },
      targetStatusInvalid: { en: `Value of property targetStatus is invalid`, ja: `targetStatus の値が無効です` },
      targetSpeedClassInvalid: { en: `Value of property targetSpeedClass is invalid`,
        ja: `targetSpeedClass の値が無効です` },
      targetSessionStatusInvalid: { en: `Value of property targetSessionStatus is invalid`,
        ja: `targetSessionStatus の値が無効です` },
      targetOtaStatusInvalid: { en: `Value of property targetOtaStatus is invalid`,
        ja: `targetOtaStatus の値が無効です` },
      inactiveTimeoutDateConstInvalid: { en: `Value of property inactiveTimeoutDateConst is invalid`,
        ja: `inactiveTimeoutDateConst の値が無効です` },
      actionTypeMissing: { en: `Property "type" is missing from action`, ja: `プロパティ "type" が必要です` },
      inSufficientActions: { en: `At least one action is required`, ja: `1つ以上の Action が必要です` },
      actionTypeInvalid: { en: `Type of action is invalid`, ja: `Action Type が無効です` },
      missingActionConfigProps: { en: `Properties are missing in actionConfig`,
        ja: `actionConfig のプロパティが必要です` },
      missingActionRequiredProp: { en: `Action is missing "{{requiredProp}}" property`,
        ja: `Action には "{{requiredProp}}" プロパティが必要です` },
      invalidSpeedClass: { en: `Action is having invalid value of speedClass`,
        ja: `Action に無効な speedClass が指定されています` },
      invalidExecutionDateTimeConst: { en: `Action is having invalid value of executionDateTimeConst`,
        ja: `Action に無効な executionDateTimeConst が指定されています` },
      bodyNotSupported: { en: `Property "body" is not supported for httpMethod GET/DELETE`,
        ja: `GET/DELETE の httpMethod において、 "body" プロパティはサポートされていません` },
    },
  },
};
