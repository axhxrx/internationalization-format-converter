export const translations = {
  harquest_files: {
    actions_menu: {
      title: { en: `Actions`, ja: `操作` },
    },
    actions: {
      clear_path: { en: `Clear path`, ja: `パスをクリア` },
      copy_harquest_file_url_for_air: { en: `Copy URL for Quoracomm Air to clipboard`,
        ja: `QUORACOMM Air 用 URL をクリップボードにコピーする` },
      create_folder: { en: `Create folder`, ja: `フォルダを作成` },
      delete: { en: `Delete File`, ja: `ファイルを削除` },
      download: { en: `Download`, ja: `ダウンロード` },
      open_directory: { en: `Open`, ja: `開く` },
      upload_file: { en: `Upload`, ja: `アップロード` },
    },
    columns: {
      content_length: { en: `File size`, ja: `ファイルサイズ` },
      content_type: { en: `Content Type`, ja: `コンテンツタイプ` },
      created_time: { en: `Created time`, ja: `作成日時` },
      etag: { en: `eTag`, ja: `eTag` },
      expiry_time: { en: `Expiry time`, ja: `有効期限` },
      filename: { en: `Name`, ja: `ファイル名` },
      last_modified_time: { en: `Last modified time`, ja: `最終更新日時` },
      url_for_air: { en: `File URL for Quoracomm Air`, ja: `QUORACOMM Air用 URL` },
    },
    context_menu: {
      header: { en: `Actions for selected files`, ja: `操作しているファイル` },
    },
    delete_harquest_file_action_modal: {
      body: { en: `This action can't be undone. Are you sure you want to delete?`,
        ja: `この操作は取り消せません。選択したファイルを削除しますか？中身のあるディレクトリは削除されません。` },
      cancel: { en: `Cancel`, ja: `キャンセル` },
      confirm: { en: `Delete`, ja: `削除する` },
      error: { en: `Unable to delete {{failure}} of {{all}} records`,
        ja: `{{all}}件中、{{failure}}件のファイル削除に失敗しました。` },
      succeed: { en: `Successfully deleted {{success}} of {{all}} records`,
        ja: `{{all}}件中、{{success}}件のファイルを削除しました` },
      title: { en: `Delete files`, ja: `ファイルの削除` },
    },
    legends: {
      expiry_time: {
        description: { en: `Files will be deleted automatically after expiry time`,
          ja: `有効期限を過ぎたファイルは自動的に削除されます。` },
      },
    },
    modals: {
      upload_harquest_file: {
        back: { en: `Remove`, ja: `削除` },
        close: { en: `Close`, ja: `キャンセル` },
        header: { en: `Upload file`, ja: `ファイルをアップロード` },
        path: { en: `File path`, ja: `アップロード先のフルパス` },
        upload: { en: `Upload`, ja: `アップロード` },
      },
    },
    table: {
      no_data: { en: `This directory is empty.`, ja: `フォルダは空です` },
    },
    title: { en: `Quoracomm Harquest Files`, ja: `QUORACOMM Harquest Files` },
    tooltip: {
      url_for_air: { en: `This URL is only for access via Quoracomm Air.`,
        ja: `こちらのURLは QUORACOMM Air 経由でのアクセス専用となります。` },
    },
  },
};
