export const translations = {
  ShplagoonUsersComponent: {
    attributes: {
      name: { en: `Username`, ja: `ユーザー名` },
      email: { en: `Email address`, ja: `メールアドレス` },
      role: { en: `Role`, ja: `ユーザー種類` },
      permission: { en: `Permission`, ja: `ロール` },
    },
    title: { en: `Shplagoon user management`, ja: `Shplagoon ユーザー管理` },
    actions: {
      change_email: { en: `Update email address`, ja: `メールアドレス変更` },
      change_password: { en: `Update password`, ja: `パスワード変更` },
      change_permission: { en: `Update permissions`, ja: `権限変更` },
      delete: { en: `Delete`, ja: `ユーザー削除` },
      register: { en: `Add a Shplagoon user`, ja: `ユーザー追加` },
    },
    actions_menu: {
      title: { en: `Actions`, ja: `操作` },
    },
    confirm: {
      user_count_reached_quota: {
        heading: { en: `The maximum number of Shplagoon users has been reached.`,
          ja: `Shplagoon ユーザーの数が上限に達しています` },
        body: {
          en:
            `By upgrading your plan, you can increase the number of Shplagoon users that can view. <br>To increase the number of editor Shplagoon users, you need to upgrade to a Pro plan and purchase a license pack.`,
          ja:
            `編集ユーザーを追加するには、プランのアップグレードが必要です。<br>編集ユーザーを追加するには、Pro プランにアップグレードしたうえで、ライセンスパックの購入が必要です。`,
        },
      },
    },
    context_menu: {
      header: { en: `Actions for selected users`, ja: `選択されたユーザーの操作` },
    },
    columns: {
      name: { en: `Username`, ja: `ユーザー名` },
      email: { en: `Email address`, ja: `メールアドレス` },
      role: { en: `Role`, ja: `ユーザー種類` },
      permission: { en: `Permission`, ja: `ロール` },
    },
    legends: {
      email: {
        description: { en: `Required to log into the Shplagoon console`,
          ja: `QUORACOMM Shplagoon コンソールにログインするために必要です。` },
      },
      role: {
        description: { en: `Permission to edit dashboards & alerts`,
          ja: `契約内容に応じて、作成できるユーザー数に上限があります。` },
      },
    },
    quota: {
      en:
        `The maximum number of users you can create with your subscription plan is as follows (current/limit): <ul><li>Editor : {{ editorCount }} / {{ editorQuota }}</li><li>Viewer: {{ viewerCount }} / {{ viewerQuota }}</li></ul> You can increase the viewer limit by upgrading your plan.`,
      ja:
        `契約中のプランで作成できるユーザー数の上限は以下の通りです。<ul><li>編集ユーザー： {{ editorQuota }} 件（利用中： {{ editorCount }} 件）</li><li>閲覧ユーザー： {{ viewerQuota }} 件（利用中： {{ viewerCount }} 件）</li></ul>プランをアップグレードいただくことで閲覧ユーザー数の上限を緩和できます。`,
    },
    quota_pro: {
      en:
        `The maximum number of users you can create with your subscription plan is as follows (current/limit): <ul><li>Editor : {{ editorCount }} / {{ editorQuota }}</li><li>Viewer: {{ viewerCount }} / {{ viewerQuota }}</li></ul> You can increase these limits by purchasing a license pack.`,
      ja:
        `契約中のプランで作成できるユーザー数の上限は以下の通りです。<ul><li>編集ユーザー： {{ editorQuota }} 件（利用中： {{ editorCount }} 件）</li><li>閲覧ユーザー： {{ viewerQuota }} 件（利用中： {{ viewerCount }} 件）</li></ul>ライセンスパックを購入いただくことで Shplagoon ユーザー数の上限を緩和できます。`,
    },
    migration_info: {
      en: `Shplagoon user information is shared between the Shplagoon console and the Shplagoon 2 console.`,
      ja: `Shplagoon ユーザーの情報は Shplagoon 3 コンソールと Shplagoon 2 コンソールで共有されます。`,
    },
    values: {
      role: {
        Admin: { en: `Admin (only for internal)`, ja: `管理者` },
        Editor: { en: `Editor`, ja: `編集ユーザー` },
        Viewer: { en: `Viewer`, ja: `閲覧ユーザー` },
      },
    },
    creation_success_message: { en: `Created a Quoracomm Shplagoon user`, ja: `Shplagoon ユーザーを作成しました` },
    deletion_success_message: { en: `Deleted a Quoracomm Shplagoon user`, ja: `Shplagoon ユーザーを削除しました` },
    update_email_success_message: { en: `Email address has been updated successfully`,
      ja: `メールアドレスを変更しました` },
    update_password_success_message: { en: `Password has been updated successfully`, ja: `パスワードを更新しました` },
    update_permission_success_message: { en: `Role has been updated successfully`, ja: `権限を変更しました` },
  },
};
