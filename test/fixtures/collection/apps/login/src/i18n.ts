/**
 * These are error messages where we override the some of the backend-provided error messages to be slightly more user-friendly.
 *
 * NOTE: This file was added as part of fix for [sc-98718](https://app.shortcut.com/quoracomm/story/98718/the-sign-in-app-emits-incorrect-error-message-in-some-authentication-failure-scenarios).
 *
 * This app already had its own one-off roll-your-own i18n solution: see language.ts
 *
 * Since this was a bug fix PR, I didn't try to unify the i18n approaches. Part of the bug being fixed in this PR was that ALL error messages were ALWAYS in English.
 */
export const i18n = {
  emailOrPasswordIncorrect: {
    en: 'Email or password incorrect',
    ja: 'メールアドレスまたはパスワードが誤っています。',
  },
  invalidOperatorIdOrUserameOrPassword: {
    en: 'Invalid Operator ID, username, or password',
    ja: 'オペレーター ID、ユーザー名、パスワードのいずれかが誤っています。',
  },
  otpIncorrect: {
    en: 'OTP incorrect',
    ja: 'MFA 認証コードが誤っています。',
  },
  unknownError: {
    en: 'Sorry, an unexpected error has occurred.',
    ja: 'エラーが発生しました。ご不便をおかけし申し訳ございません。',
  },
  /**
   * Special case: no error message required is represented by the empty string. (That's how the existing UI already worked, so...)
   */
  none: {
    en: '',
    ja: '',
  },
};
