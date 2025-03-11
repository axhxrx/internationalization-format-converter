export const UI_SUPPORTED_FLUX_ACTION_TYPES: string[] = [
  'ai',
  'quoracomm-api',
  'weathernews',
  'republish',
  'object-detection',
  'webhook',
  'slack-notification',
  'line-notification',
  'email-notification',
] as const;

export type UISupportedQuuxActionType = (typeof UI_SUPPORTED_FLUX_ACTION_TYPES)[number];
