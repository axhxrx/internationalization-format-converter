import { batchGroupList } from './batchGroupListUi.i18n';
import { batchJobListUi } from './batchJobListUi';
import { batchJobsUi } from './batchJobsUi.i18n';

const heading = {
  createBatchGroup: {
    en: 'Create Batch Group',
    ja: 'バッチグループ作成',
  },
  editBatchGroup: {
    en: 'Edit Batch Group',
    ja: 'バッチグループ編集',
  },
  deleteBatchGroup: {
    en: 'Delete Batch Group',
    ja: 'バッチグループ削除',
  },
} as const;

const label = {
  edit: {
    en: 'Edit',
    ja: '編集',
  },
  delete: {
    en: 'Delete',
    ja: '削除',
  },
  /**
   The Japanese word for "Settings" is "設定" but it doesn't get the ... at the end because that does not translate well
   */
  settingsDotDotDot: {
    en: 'Settings...',
    ja: '設定',
  },
  batchProcessingFunction: {
    en: 'Batch processing function',
    ja: 'バッチ処理機能',
  },
  downloadCsv: {
    en: 'Download CSV',
    ja: 'CSV ダウンロード',
  },
  refresh: {
    en: 'Refresh',
    ja: '更新',
  },
  /**
   Remove added thing, e.g. a filter condition
   */
  remove: {
    en: 'Remove',
    ja: '削除',
  },
  upload: {
    en: 'Upload',
    ja: 'アップロード',
  },
  csvUploadHelpText: {
    en: 'Upload a CSV file using the following format:',
    ja: '次の形式で作成された CSV ファイルをアップロードしてください：',
  },
  csvUploadIsNotValid: {
    en: 'The CSV file does not match the format specified above. Please check the file contents and try again.',
    ja: 'CSV ファイルの形式に誤りがあります。ファイルの内容を確認してもう一度お試しください。',
  },
  notValidAllCaps: {
    en: 'NOT VALID',
    ja: '無効な形式',
  },
  validAllCaps: {
    en: 'VALID',
    ja: '有効な形式',
  },
  dropFileHere: {
    en: 'Drop file here',
    ja: 'ファイルをここにドロップ',
  },
  replaceFile: {
    en: 'Replace file',
    ja: 'ファイルを置き換える',
  },
  or: {
    en: 'or',
    ja: 'または',
  },
  chooseFile: {
    en: 'Choose file',
    ja: 'ファイルを選択',
  },
  noFileChosen: {
    en: 'No file chosen',
    ja: 'ファイルが選択されていません',
  },
  errorHandling: {
    en: 'Error handling',
    ja: 'エラー発生時の処理',
  },
  continueProcessingErrHandling: {
    en: 'Continue processing if an error occurs',
    ja: 'エラーが発生した場合でもジョブの実行を継続する',
  },
  stopProcessingErrHandling: {
    en: 'Stop processing immediately if an error occurs',
    ja: 'エラーが発生した場合はジョブの実行を終了する',
  },
  jobName: {
    en: 'Name',
    ja: 'ジョブ名',
  },
  batchGroupName: {
    en: 'Batch Group Name',
    ja: 'バッチグループ',
  },
  status: {
    en: 'Status',
    ja: 'ステータス',
  },
  // created: {
  //   en: 'Created',
  //   ja: '作成日時 FIXME',
  // },

  // the list jobs api returns an attribute 'createdTime', but show it as 'Started' in the UI
  started: {
    en: 'Started',
    ja: '開始日時',
  },
  finished: {
    en: 'Finished',
    ja: '終了日時',
  },
  /**
   This label is for dates where it isn't clear if it's the start or end date
   */
  when: {
    en: 'When',
    ja: '日時', // FIXME: Japanese
  },
  vpgId: {
    en: 'VPG ID',
    ja: 'VPG ID',
  },
  ipAddress: {
    en: 'IP address',
    ja: 'IP アドレス',
  },
  /**
     This may be changed to IMSI
     */
  key: {
    en: 'Key (Primary IMSI)',
    ja: 'キー(プライマリ IMSI)',
  },
  description: {
    en: 'Description',
    ja: '説明',
  },
  noTasksFound: {
    en: 'No tasks found.',
    ja: 'データがありません', // FIXME Japanese
  },
  /**
   This is a default message for e.g. when a table has no data (but there is no more specific message to show instead)
   */
  noDataGeneric: {
    en: 'No data found.',
    ja: 'データがありません', // FIXME Japanese
  },
  errorMessage: {
    en: 'Error message',
    ja: 'エラーメッセージ',
  },
  taskResults: {
    en: 'Task results',
    ja: 'タスク結果', // FIXME Japanese
  },
} as const;

const placeholder = {
  filter: {
    en: 'Filter',
    ja: 'フィルタ',
  },
} as const;

const action = {
  newJob: {
    en: 'Create Job',
    ja: 'ジョブ作成',
  },
  refresh: {
    en: 'Refresh',
    ja: '更新',
  },
  startJob: {
    en: 'Start Job',
    ja: 'ジョブを開始',
  },
  save: {
    en: 'Save',
    ja: '保存',
  },

  cancel: {
    en: 'Cancel',
    ja: 'キャンセル',
  },

  deleteBatchGroup: {
    en: 'Delete Batch Group',
    ja: 'バッチグループ削除',
  },
} as const;

/**
 Help text for the search filter.
 */
const filterUi = {
  /**
     Filtering by {{field}}... where {{field}} might be IMSI, or Status, etc.
       */
  filteringByField: {
    en: 'Filtering by {{field}}...',
    ja: '{{field}} でフィルタ処理中...',
  },
  filteredByField: {
    en: 'Filtered by {{field}}.',
    ja: '{{field}} でフィルタしています。',
  },
  showingXofY: {
    en: 'Showing {{shown}}/{{total}}.',
    ja: '表示件数 {{shown}}/{{total}}',
  },
  zeroMatches: {
    en: '0 matches.',
    ja: '一致するものがありません。',
  },
  showingAllXJobs: {
    en: 'Showing all {{total}} jobs.',
    ja: '全 {{total}} 件を表示中。', // FIXME Japanese
  },
} as const;

export const i18n = {
  label,
  action,
  batchJobsUi,
  batchJobListUi,
  filterUi,
  batchGroupList,
  placeholder,
  heading,
};
