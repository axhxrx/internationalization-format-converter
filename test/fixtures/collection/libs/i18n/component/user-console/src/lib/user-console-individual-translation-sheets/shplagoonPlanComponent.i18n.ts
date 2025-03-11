export const translations = {
  ShplagoonPlanComponent: {
    title: { en: `Shplagoon Plan`, ja: `Shplagoon プラン` },
    free: {
      text: { en: `Free`, ja: `Free` },
      description: { en: `1 Dashboard<br>1 Editor User<br><br>1 Alert<br>60 second refresh<br><br><br><br><br>`,
        ja:
          `1 ダッシュボード<br>1 編集ユーザー<br><br>1 アラート<br>60秒のデータリフレッシュ間隔<br><br><br><br><br>` },
    },
    maker: {
      text: { en: `Maker`, ja: `Maker` },
      description: {
        en: `3 Dashboards<br>1 Editor User<br>2 Viewer Users<br>10 Alerts<br>30 second refresh<br><br><br><br><br>`,
        ja:
          `3 ダッシュボード<br>1 編集ユーザー<br>2 閲覧ユーザー<br>10 アラート<br>30秒のデータリフレッシュ間隔<br><br><br><br><br>`,
      },
    },
    pro: {
      text: { en: `Pro`, ja: `Pro` },
      description: {
        en:
          `5 Dashboards<br>1 Editor User<br>9 Viewer Users<br>20 Alerts<br>5 second refresh<br>License packs<br>Dashboard permissions<br>Dashboard snapshots<br>Custom logo`,
        ja:
          `5 ダッシュボード<br>1 編集ユーザー<br>9 閲覧ユーザー<br>20 アラート<br>5秒のデータリフレッシュ間隔<br>ライセンスパックの購入<br>ダッシュボード権限管理機能<br>スナップショット機能<br>ロゴの変更`,
      },
    },
    active: {
      shplagoon_maker: { en: `Current plan: Maker`, ja: `Maker プランをご契約中です` },
      shplagoon_pro: { en: `Current plan: Pro`, ja: `Pro プランをご契約中です` },
      shplagoon_free: { en: `Current plan: Free`, ja: `Free プランをご契約中です` },
    },
    submit: { en: `Update`, ja: `決定` },
    cancel: { en: `Cancel`, ja: `キャンセル` },
    currently_selected: { en: `Active`, ja: `選択中` },
    switch: { en: `Select`, ja: `選択する` },
    upgrade: { en: `Update plan`, ja: `プラン変更` },
    unavailable: { en: `Unavailable`, ja: `ご利用になれません` },
    terminate: { en: `Unsubscribe`, ja: `利用を終了する` },
    subscribe: { en: `Continue`, ja: `続行する` },
    change_success_message: { en: `Plan successfully changed`, ja: `プラン変更が完了しました` },
    confirmation: {
      body: {
        en:
          `<p>Please confirm the points below before updating your plan.</p><ul><li>This action can't be undone for the current month.</li><li>New pricing is applied immediately after update. Please check the <a href="{{url}}" target="_blank">pricing page</a>.</li><li>If you want to to downgrade your plan later, you first need to delete resources (dashboards, shplagoon users, and alerts) not to exceed the new quotas.</li></ul>`,
        ja:
          `<p>プランを変更します。</p><ul><li>変更は即座に適用され、取り消せません。</li><li>新しい料金が即座に適用されます。料金計算の詳細については<a href="{{url}}" target="_blank">こちら</a>を確認してください。</li><li>プランをProからMakerに変更する場合、あらかじめShplagoon ユーザー、ダッシュボード、アラートの数が変更後の上限を越えないように削除しておく必要があります。</li></ul>`,
      },
      cancel: { en: `Cancel`, ja: `キャンセル` },
      confirm: { en: `Update plan`, ja: `変更する` },
      title: { en: `Confirmation: Update plan`, ja: `確認：プラン変更` },
    },
    termination_modal: {
      title: { en: `Unsubscribe from Quoracomm Shplagoon`, ja: `QUORACOMM Shplagoon 利用終了` },
      body: {
        en:
          `I wish to terminate usage of Quoracomm Shplagoon. All registered Shplagoon users, dashboards and alerts will be deleted.<br/> (Quoracomm Harquest data will not be deleted.)`,
        ja:
          `QUORACOMM Shplagoon の利用を終了します。<br/>登録されているすべての Shplagoon ユーザー、ダッシュボード、アラートが削除されます。<br/>QUORACOMM Harquest のデータは削除されません。`,
      },
      confirm: { en: `Unsubscribe`, ja: `利用終了` },
      cancel: { en: `Cancel`, ja: `キャンセル` },
    },
  },
};
