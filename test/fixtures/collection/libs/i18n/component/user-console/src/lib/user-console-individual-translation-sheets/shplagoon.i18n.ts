export const translations = {
  shplagoon_users: {
    columns: {
      name: { en: `Username`, ja: `ユーザー名` },
      email: { en: `Email address`, ja: `メールアドレス` },
      role: { en: `Role`, ja: `ユーザーの種類` },
      permission: { en: `Permission`, ja: `権限` },
    },
    values: {
      role: {
        Admin: { en: `Admin (only for internal)`, ja: `管理者（内部アカウント）` },
        Editor: { en: `Editor`, ja: `編集ユーザー` },
        Viewer: { en: `Viewer`, ja: `閲覧ユーザー` },
      },
    },
  },
  shplagoon_dashboards: {
    columns: {
      name: { en: `Name`, ja: `名前` },
      role: { en: `Role`, ja: `権限` },
      url: { en: `URL`, ja: `URL` },
    },
    values: {
      permissions: {
        Edit: { en: `Edit`, ja: `編集` },
        View: { en: `View`, ja: `閲覧` },
        None: { en: `No access`, ja: `権限なし` },
      },
      role: {
        Editor: { en: `Editor`, ja: `編集ユーザー` },
        Viewer: { en: `Viewer`, ja: `閲覧ユーザー` },
      },
    },
  },
};
