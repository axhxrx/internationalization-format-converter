/*
  The stateLabels should map the technical state names to a generic label that can be used in the UI. Most of them only show for a brief moment, such as when a table that doesn't specify better i18n is loading.
 */
const stateLabels = {
  initializing: {
    en: 'Loading...',
    ja: 'Loading...', // FIXME Japanese
  },
  creating: {
    en: 'Creating...',
    ja: '日本語creating',
  },
  reading: {
    en: 'Loading...',
    ja: 'Loading...', // FIXME Japanese
  },
  updating: {
    en: 'Loading...',
    ja: 'Loading...', // FIXME Japanese
  },
  deleting: {
    en: 'Deleting...',
    ja: 'Deleting...', // FIXME Japanese
  },
  ready: {
    en: 'Ready.',
    ja: 'Ready.', // FIXME Japanese
  },
  error: {
    en: 'Error',
    ja: 'Error', // FIXME Japanese
  },
} as const;

export const i18n = { stateLabels };
