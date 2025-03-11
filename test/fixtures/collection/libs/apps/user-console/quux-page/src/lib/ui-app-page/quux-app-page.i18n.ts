export const FLUX_APP_PAGE_I18N = {
  studio: {
    en: 'Studio',
    ja: 'Studio',
  },
  events: {
    en: 'History',
    ja: '実行履歴',
  },
  analytics: {
    en: 'Analytics',
    ja: '分析',
  },
  descriptionPlaceholder: {
    en: 'Add description...',
    ja: '説明を追加する...',
  },
  settings: {
    en: 'Settings',
    ja: '設定',
  },
  edit: {
    en: 'Edit App name and description',
    ja: 'App の名前と概要を編集する',
  },
  delete: {
    en: 'Delete Quux App',
    ja: 'Quux アプリ を削除',
  },
  empty: {
    en: 'Welcome to Quoracomm Quux Studio',
    ja: 'QUORACOMM Quux Studio へようこそ',
  },
  emptyDescription: {
    ja: `
    <p class="ds-text --large">QUORACOMM Quux アプリ は３つのコンポーネントで構成されています。</p>
    <p class="ds-text --large"><strong>イベントソース</strong>: Quux アプリを起動するトリガーを定義するコンポーネント。次のようなイベントソースが用意されています：IoT デバイスからのデータを送信、QUORACOMM Harquest Files へのファイルのアップロード・更新・削除、タイマー、QUORACOMM API を使用したデータ送信。イベントソースからメッセージが送信されることにより、Quux アプリの処理が実行されます。</p>
    <p class="ds-text --large"><strong>チャネル</strong>: イベントソースからアクションまでデータを橋渡しするコンポーネント。</p>
    <p class="ds-text --large"><strong>アクション</strong>: データを分析/判断して特定の操作を実行するするコンポーネント。チャネルに送信されたメッセージをもとに、様々なアクションを実行します。例えば、送信されたメッセージを AI アクションを用いて分析したり、メールを送信できます。また、メッセージの内容に応じてアクションの実行をコントロールしたり、メッセージの一部を取り出してアクションの設定を動的に変更できます。さらに、アクションの実行結果をメッセージとして新たにチャネルに送信することによって、複数のアクションを繋げて実行することもできます。</p>
    <p><strong>まずはイベントソースに接続したチャネルを作成してみましょう。</strong></p>
    `,
    en: `
    <p class="ds-text --large">A Quoracomm Quux app consists of three kinds of components.</p>
    <p class="ds-text --large"><strong>Event Source</strong>: The component defining the trigger that starts the execution of a Quux app. The following kind of event sources are provided: data received from an IoT device, upload/update/deletion of a file in Quoracomm Harquest Files, timers, or data received by manually calling the Quoracomm API. The Quux app is executed each time an event source is triggered.</p>
    <p class="ds-text --large"><strong>Channel</strong>: The component that transmits messages from event sources to actions.</p>
    <p class="ds-text --large"><strong>Action</strong>: The component that analyzes the data and then executes user-defined actions. Based on the message sent to the Channel, various actions can be executed. For example, the sent message can be analyzed using AI actions or emails can be sent. Additionally, actions can be controlled based on the content of the message, and parts of the message can be extracted to dynamically change the settings of the action. Furthermore, by sending the execution results of an action as messages to new channels, multiple actions can be linked and executed in sequence.</p>
    <p><strong>First, let's create a channel by connecting it to an event source.</strong></p>
    `,
  },
  createEventChannel: {
    en: 'Create a channel',
    ja: 'チャネルを作成する',
  },
  addEventChannel: {
    en: 'Add a channel',
    ja: 'チャネルを追加する',
  },
} as const;
