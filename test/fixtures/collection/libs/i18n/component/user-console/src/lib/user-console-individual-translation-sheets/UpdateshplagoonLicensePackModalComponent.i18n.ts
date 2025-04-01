export const translations = {
  UpdateShplagoonLicensePackModalComponent: {
    heading: { en: `Manage license packs`, ja: `ライセンスパック管理` },
    text: { en: `Increase or decrease license packs to get the desired quotas`,
      ja: `希望するライセンスパックの個数を指定してください` },
    user_packs: { en: `User packs`, ja: `ユーザー追加パック` },
    user_packs_desc: { en: `Each pack adds 1 Editor and 4 Viewers`,
      ja: `このパックは 1 人の編集ユーザーと 4 人の閲覧ユーザーを追加します` },
    dashboard_packs: { en: `Dashboard packs`, ja: `ダッシュボード追加パック` },
    dashboard_packs_desc: { en: `Each dashboard pack adds 1 dashboard and 4 alerts`,
      ja: `このパックは 1 つのダッシュボードと 4 つのアラートを追加します` },
    confirm: { en: `Update`, ja: `更新` },
    cancel: { en: `Cancel`, ja: `キャンセル` },
    quotas: { en: `Effective quotas including PRO plans inclusions`, ja: `ライセンスパック変更後の利用可能リソース数` },
    editor_quota: { en: `Editors`, ja: `編集ユーザー` },
    viewer_quota: { en: `Viewers`, ja: `閲覧ユーザー` },
    dashboard_quota: { en: `Dashboards`, ja: `ダッシュボード` },
    alert_quota: { en: `Alerts`, ja: `アラート` },
    confirmation: {
      body: {
        en:
          `<p>New quotas are applied immediately. Please confirm the <a href="{{url}}" target="_blank">shplagoon license packs pricing</a> before proceeding. If you are going to downgrade your plan, you need to delete resources (dashboards, shplagoon users and alerts) in order to not to exceed the new quotas.</p>`,
        ja:
          `<p>ライセンスパックの個数を変更します。</p><ul><li>変更は即座に適用され、取り消せません。</li><li>新しい料金が即座に適用されます。料金計算の詳細については<a href="{{url}}" target="_blank">こちら</a>を確認してください。</li><li>購読数を減らす場合、あらかじめShplagoon ユーザー、ダッシュボード、アラートの数が変更後の上限を越えないように削除しておく必要があります。</li></ul>`,
      },
      cancel: { en: `Cancel`, ja: `キャンセル` },
      confirm: { en: `Update`, ja: `変更する` },
      title: { en: `Confirmation: Update license packs`, ja: `確認：ライセンスパックの個数変更` },
    },
  },
};
