/**
 @fileoverview i18n definitions for ui-conversations

 This file contains ALL of the i18n for the Conversations UI module (ui-conversations) — including Support Bot and  Query Intelligence
 */
// TITLE HEADINGS AND SUBTITLES (used in header at top of conversational chat UI)
export const queryIntelligence = {
  app: {
    /**
     The big heading text on the top of the conversation UI.
    */
    title: {
      en: 'Quoracomm Query Intelligence',
      ja: 'QUORACOMM Query Intelligence',
    },
    subtitle: {
      en: 'Ask questions about your data and get structured data insights.',
      ja: '質問に応じて、データを集計します。',
    },
  },
} as const;

export const support = {
  app: {
    title: {
      en: 'Quoracomm Support Bot',
      ja: 'QUORACOMM Support Bot',
    },
    subtitle: {
      en: 'Get answers on using the Quoracomm platform and services.',
      ja: 'QUORACOMM サービスの仕様や使用方法に関する質問に AI が回答します。',
    },
  },
} as const;

// LABELS, ETC
export const base = {
  tab: {
    chat: {
      en: 'Chat',
      ja: '会話',
    },
    history: {
      en: 'History',
      ja: '履歴',
    },
  },
  label: {
    acknowledgementRequired: {
      en: "Please click 'I acknowledge the above' button to continue.",
      ja: '会話を始めるには「上記の内容を確認しました」ボタンをクリックしてください。',
    },
    confirmAcknowledgement: {
      en: 'I acknowledged the above',
      ja: '上記の内容を確認しました',
    },
    continueConversation: {
      en: 'Continue conversation',
      ja: '送信する',
    },
    close: {
      en: 'Close',
      ja: '閉じる',
    },
    delete: {
      en: 'Delete',
      ja: '削除',
    },
    deleteConversationConfirmation: {
      en: 'Are you sure you want to delete this conversation?',
      ja: 'この会話を削除してもよろしいですか？',
    },
    dontDelete: {
      en: "Don't delete",
      ja: '削除しない',
    },
    error: {
      en: 'Error',
      ja: 'エラー',
    },
    hasReachedMessagesQuota: {
      en: 'Conversations are limited to a maximum of 10 questions each.',
      ja: '1 つの会話で質問できるのは 10 回までです。',
    },
    loadingDotDotDot: {
      en: 'Loading...',
      ja: '読み込み中...',
    },
    startNewChat: {
      en: 'Start new chat',
      ja: '新しい会話を開始',
    },
    startChat: {
      en: 'Start chat',
      ja: '会話を開始する',
    },
    startOver: {
      en: 'Start over',
      ja: '再開',
    },
    noConversationsFound: {
      en: 'No conversations found',
      ja: '会話が見つかりません',
    },
    pleaseEnterYourQuestion: {
      en: 'Please enter your question',
      ja: '質問を入力してください',
    },
    pleaseEnterTheNextQuestion: {
      en: 'Please enter the next question',
      ja: '追加の質問を入力してください',
    },
    references: {
      en: 'References',
      ja: '質問に似たドキュメント',
    },
    seeAlso: {
      en: 'See also',
      ja: '回答に似たドキュメント',
    },
    tryAgain: {
      en: 'Try again.',
      ja: 'リトライ',
    },
    waitingDotDotDot: {
      en: 'Waiting...',
      ja: '待機中...',
    },
    asAiBotIDontHaveAccessToYourPrivateInformation: {
      en: 'As an AI Bot I do not have access to your account data or personal information.',
      ja: 'お客様のアカウントのデータや個人情報に AI はアクセスできません。',
    },
    viewConversation: {
      en: 'View conversation',
      ja: '会話を表示',
    },
    /**
     E.g. `Welcome to Quoracomm Query Intelligence interactive console. Ask me anything about your data!`
     */
    welcomeMessageQueryIntelligence: {
      en: 'Welcome to Quoracomm Query Intelligence interactive console. Ask me anything about your data!',
      ja: 'QUORACOMM Query Intelligence へようこそ。あなたのデータについて何か質問できます。',
    },
    welcomeMessageSupportBot: {
      en:
        'Welcome to Quoracomm Support Bot. Ask me anything about technical specification or usage of Quoracomm platform and services.',
      ja: 'QUORACOMM Support Botへようこそ。QUORACOMM サービスの仕様や使い方についてのご質問にお答えします。',
    },
    acknowledgementsSupportBot: {
      en:
        'The Quoracomm Support Bot utilizes Quazure OpenAI Service to generate responses to the information entered in the input based on Quoracomm documentation.<br>We cannot guarantee the accuracy of the responses. For the conditions of use of this bot and the handling of input data, please see our <a href="https://www.example.com/terms/" rel="nofollow" target="_blank">Terms and Conditions</a> for the Quoracomm Support Services and our <a href="https://www.example.com/privacy-policy/" rel="nofollow" target="_blank">Privacy Policy</a>. For information on how your data is processed by Quazure OpenAI Service, please see <a href="https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy" rel="nofollow" target="_blank">Data, privacy, and security for Quazure OpenAI Service</a>.',
      ja:
        'AI が 24 時間いつでも問い合わせに回答します。回答内容の正確さは保証されません。<br>当機能の利用条件や入力データの取り扱いについては、<a href="https://quoracomm.jp/files/terms/support_terms_ja-jp.pdf" rel="nofollow" target="_blank">QUORACOMM サポートサービス約款</a> および <a href="https://quoracomm.jp/share/privacy/" rel="nofollow" target="_blank">プライバシーポリシー</a> をご覧ください。Quazure OpenAI Service によるお客様のデータの処理方法については、<a href="https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy" rel="nofollow" target="_blank">こちら</a> をご覧ください。',
    },
  },
  /**
   A set of messages (in UI, chosen at random) to update every few seconds and convey to the user that "the system is thinking..."
   */
  waiting: {
    analyzingQuery: {
      en: 'Analyzing query...',
      ja: 'QUORACOMM のウェブサイトを検索中...',
    },
    howToAddQuestion: {
      en: 'Additional questions take over the conversation.',
      ja: '追加の質問は会話の内容を引き継ぎます。',
    },
    howToGetBetterAnswer: {
      en: 'Being specific with your questions will improve the accuracy of the answers you receive.',
      ja: '質問を具体的にすると回答精度があがります。',
    },
    howToGetBetterAnswer2: {
      en: 'In each conversation, try to address  a single issue/question, to the extent possible.',
      ja: '1 つの会話では、できるだけ 1 つの問題・質問を行ってください。',
    },
    howToStartNewConversation: {
      en: "To ask a different question, click 'Start a new conversation'.",
      ja: '別の質問は「新しい会話を開始」をクリック。',
    },
    supportTeamIsStandby: {
      en: "Our AI is here to assist! If you'd like more help, our support team is just a message away.",
      ja: '満足な回答が得られない場合はサポートへお問い合わせください。',
    },
    waitingForBotResponse: {
      en: "Waiting for the bot's response...",
      ja: 'AI の応答を待っています...',
    },
  },
  error: {
    serviceUnavailable: {
      en: 'Service unavailable',
      ja: 'サービスが利用できません',
    },
    supportBotCouldNotBeLoaded: {
      en: 'Quoracomm Support Bot could not be loaded. We apologize for the inconvenience. Please try again later.',
      ja:
        'QUORACOMM Support Bot の読み込みに失敗しました。ご不便をおかけいたします。しばらくしてから再度お試しください。',
    },
    queryIntelligenceCouldNotBeLoaded: {
      en:
        'Quoracomm Query Intelligence service could not be loaded. We apologize for the inconvenience. Please try again later.',
      ja:
        'QUORACOMM Query Intelligence の読み込みに失敗しました。ご不便をおかけいたします。しばらくしてから再度お試しください。',
    },
    conversationHistoryCouldNotBeLoaded: {
      en: 'The conversation history could not be loaded. We apologize for the inconvenience. Please try again later.',
      ja: '会話履歴の読み込みに失敗しました。ご不便をおかけいたします。しばらくしてから再度お試しください。',
    },
    supportBotWasUnableToAnswerThisQuestion: {
      en: 'Quoracomm Support Bot was unable to answer this question.',
      ja: 'QUORACOMM Support Bot はこの質問に答えられません。',
    },
    questionWasCanceled: {
      en: 'The question was canceled. Please ask a new question.',
      ja: '質問がキャンセルされました。改めて質問をどうぞ。',
    },
    pleaseAskANewQuestionOrTryAgainLater: {
      en: 'Please try a different question, or try again later',
      ja: '別の質問を試してみてください。',
    },
    /**
     ` is available when you are logged in with your Quoracomm account.` suffix that can be directly appended to a service name. The leading space is included in the string.
     */
    isAvailableWhenYouAreLoggedIn: {
      en: ' is available when you are logged in with your Quoracomm account.',
      ja: ' を利用するには QUORACOMM アカウントでログインしてください。',
    },
    /**
     FIXME: This should be coming from the lowest level of i18n lib shared definition.
     */
    unknown: {
      en: 'An unexpected error has occurred. Sorry for any inconvenience.',
      ja: 'エラーが発生しました。ご不便をおかけし申し訳ございません。',
    },
  },
} as const;
