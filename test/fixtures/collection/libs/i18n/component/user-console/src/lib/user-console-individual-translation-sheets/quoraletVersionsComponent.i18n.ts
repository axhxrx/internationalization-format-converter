export const translations = {
  QuoraletVersionsComponent: {
    actions: {
      openCreateVersionModal: { en: `Upload new WASM`, ja: `新しい WASM をアップロード` },
    },
    addModal: {
      title: { en: `Upload a new WASM`, ja: `新しい WASM をアップロード` },
    },
    rescueModal: {
      title: { en: `Too many Quoralet versions`, ja: `アップロード可能なバージョン数の上限に達しました` },
      removeAndUpload: { en: `Delete and retry`, ja: `削除してアップロードする` },
      description: {
        en:
          `The new Quoralet version could not be uploaded, because the maximum number of stored versions has already been reached. Do you want to delete the following oldest unused version, and retry the upload?`,
        ja: `利用されていないバージョンのうち、下記の一番古いバージョンを削除してもう一度アップロードしますか？`,
      },
    },
    versionAdded: { en: `New quoralet version has been created successfully`, ja: `新しいバージョンが作成されました` },
    versionDeleted: { en: `New quoralet version has been deleted successfully`, ja: `バージョンが削除されました` },
  },
  quoralet_versions: {
    columns: {
      version: { en: `Version`, ja: `Version` },
      srn: { en: `SRN`, ja: `SRN` },
      referred_groups: { en: `Referred Groups`, ja: `Referred Groups` },
      created_time: { en: `Created Time`, ja: `Created Time` },
    },
  },
};
