import { disabled, edit, enabled, refresh } from '../../../../../../libs/i18n/common';

const label = {
  disabled,
  edit,
  enabled,
  trialUsage: {
    en: 'Monthly trial usage',
    ja: '月あたりの試用可能時間',
  },
  refresh,
  unlimitedLiveStreaming: {
    en: 'Unlimited Live Streaming',
    ja: 'ライブ視聴見放題',
  },
  unknownStatusPlaceholder: {
    en: '-',
    ja: '-',
  },
} as const;

const message = {
  trialUsage: {
    en: '{{ consumedSeconds }} of {{ freeTierSeconds }} trial seconds used as of {{ checkedAt }}',
    ja: '{{ freeTierSeconds }} 秒中 {{ consumedSeconds }} 秒消費済み ({{checkedAt}} 時点)',
  },
  loading: {
    en: 'Loading...',
    ja: '読み込み中...',
  },
  notApplicable: {
    en: 'Not applicable',
    ja: 'N/A',
  },
} as const;

export const i18nDefs = {
  label,
  message,
} as const;
