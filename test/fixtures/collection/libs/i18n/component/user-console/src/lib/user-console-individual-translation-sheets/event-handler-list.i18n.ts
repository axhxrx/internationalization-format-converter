export const translations = {
  eventHandlerList: {
    title: { en: `Event handler`, ja: `イベントハンドラー` },
    description: {
      en:
        `This event handler UI is full featured, advanced UI for handling events and actions. In this screen you can view all of the events and event details.<br>Create/Update event screen provides advanced UI to create/update events with advanced settings.<br><a href="/watch">Click here</a> to access old UI to set events.`,
      ja:
        `この画面では、<a href="https://users.example.com/ja-jp/docs/event-handler/" target="_blank">イベントハンドラー機能</a>でご利用いただけるすべてのイベントやアクションに関する設定UIを提供しています。<br>従来のUIに比べて詳細な設定が可能です。従来のUIをご利用になりたい場合は<a href="/watch">こちらからご利用いただけます</a>。<br>従来のUIで設定したイベントをこの画面で変更された場合、従来の監視UIでの動作に問題が発生する場合がございますのでご了承ください。`,
    },
    button: {
      createNew: { en: `Create Event`, ja: `イベント作成` },
      deleteEvents: { en: `Delete`, ja: `削除` },
      importTemplate: { en: `Import`, ja: `インポート` },
    },
    filterForm: {
      description: { en: `Filter Target by`, ja: `対象を絞り込む` },
      targetType: {
        imsi: { en: `Subscriber`, ja: `サブスクライバー` },
        sim: { en: `SIM`, ja: `SIM` },
        group: { en: `Group`, ja: `グループ` },
        operator: { en: `Operator`, ja: `オペレーター` },
      },
    },
    message: {
      commonError: { en: `There was some error from API`, ja: `APIからエラー発生しました` },
    },
    tableHeader: {
      eventName: { en: `Event name`, ja: `イベント名` },
      target: { en: `Target`, ja: `監視対象` },
      rule: { en: `Rule`, ja: `ルール` },
      actions: { en: `Action(s)`, ja: `アクション` },
      status: { en: `Status`, ja: `ステータス` },
    },
    deleteConfirmDialog: {
      title: { en: `Confirm`, ja: `削除確認` },
      body: { en: `Are you sure you want to delete selected event(s) ?`,
        ja: `選択したイベントを削除してもよろしいでしょうか？` },
      cancel: { en: `Cancel`, ja: `キャンセル` },
      confirm: { en: `Delete`, ja: `削除する` },
    },
    deleteSuccess: { en: `Selected events removed successfully`, ja: `選択したイベントは正常に削除されました` },
    deleteError: {
      all: { en: `There was some error while deleting events`, ja: `イベントを削除する際にエラーが発生しました` },
      some: {
        en: `Some events removed successfully but {{ count }} event could not be removed due to some error from api`,
        ja: `イベントを削除しましたが、{{ count }} 個のイベントがエラーによって削除できませんでした。`,
      },
    },
  },
};
