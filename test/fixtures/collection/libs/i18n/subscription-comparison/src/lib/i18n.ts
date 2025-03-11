// NOTE: The i18n.ts file is for programmers; the i18n.translations.ts file is for translators.
//
// I am not sure if this is a best practice in general, but it makes sense to give the translators the simplest-possible file to work with.

import { I18nItem } from '@i18n/core';
import { asiaPacific, asiaPacificESim, bundleSameAsPlanUs, confirmation, fiveMB, help, japanAuLMNOP, japanAuLMNOPESim,
  japanAuLmnopSoftbank, japanAuLmnopSoftbankESim, label, mtSmsOnly, no, oneMbToTenMb, payAsYouGo,
  payAsYouGoWithBundledData, plan01sGlobal, plan01sGlobalESim, planM1Coverage, planUsCoverage, planUsCoverageEsim,
  planV1Coverage, planX3Global, usaAttTmobileVerizon, usaCaMexTmobile, usaTmobileVerizon,
  yes } from './i18n.translations';

export type PlanComparisonTableFields = {
  pricing: string;
  bundledData: string;
  coverage: string;
  connectivity: string;
  data: string | boolean;
  sms: string | boolean;
  ussd: string | boolean;
  voice: string | boolean;
};

export type yesOrNo = typeof yes | typeof no;

export type PlanComparisonTableI18n = {
  pricing: I18nItem<'ja' | 'en'>;
  bundledData: I18nItem<'ja' | 'en'>;
  coverage: I18nItem<'ja' | 'en'>;
  // connectivity: never;
  data: yesOrNo;
  sms: I18nItem<'ja' | 'en'>;
  ussd: yesOrNo;
  voice: yesOrNo;
};

export const plan01s: PlanComparisonTableI18n = {
  pricing: payAsYouGo,
  bundledData: no,
  coverage: plan01sGlobal,
  data: yes,
  sms: yes,
  ussd: yes,
  voice: no,
};

export const planUsMaxForPlan01s: PlanComparisonTableI18n = {
  pricing: payAsYouGo,
  bundledData: no,
  coverage: usaAttTmobileVerizon,
  data: yes,
  sms: mtSmsOnly,
  ussd: no,
  voice: no,
};

export const planUs: PlanComparisonTableI18n = {
  pricing: payAsYouGoWithBundledData,
  bundledData: oneMbToTenMb,
  coverage: planUsCoverage,
  data: yes,
  sms: yes,
  ussd: no,
  voice: no,
};

export const planUsMaxForPlanUs: PlanComparisonTableI18n = {
  pricing: payAsYouGoWithBundledData,
  bundledData: bundleSameAsPlanUs,
  coverage: usaTmobileVerizon,
  data: yes,
  sms: mtSmsOnly,
  ussd: no,
  voice: no,
};

export const planUsNa: PlanComparisonTableI18n = {
  pricing: payAsYouGoWithBundledData,
  bundledData: bundleSameAsPlanUs,
  coverage: usaCaMexTmobile,
  data: yes,
  sms: mtSmsOnly,
  ussd: no,
  voice: no,
};

export const planP1: PlanComparisonTableI18n = {
  pricing: payAsYouGo,
  bundledData: no,
  coverage: asiaPacific,
  data: yes,
  sms: mtSmsOnly,
  ussd: no,
  voice: no,
};

export const planX1: PlanComparisonTableI18n = {
  pricing: payAsYouGo,
  bundledData: no,
  coverage: japanAuLmnopSoftbank,
  data: yes,
  sms: yes,
  ussd: no,
  voice: no,
};

export const planX2: PlanComparisonTableI18n = {
  pricing: payAsYouGo,
  bundledData: no,
  coverage: japanAuLMNOP,
  data: yes,
  sms: yes,
  ussd: no,
  voice: no,
};

export const planX3: PlanComparisonTableI18n = {
  pricing: payAsYouGoWithBundledData,
  bundledData: fiveMB,
  coverage: planX3Global,
  data: yes,
  sms: yes,
  ussd: yes,
  voice: no,
};

export const planM1: PlanComparisonTableI18n = {
  pricing: payAsYouGo,
  bundledData: no,
  coverage: planM1Coverage,
  data: yes,
  sms: yes,
  ussd: no,
  voice: no,
};

export const planV1: PlanComparisonTableI18n = {
  pricing: payAsYouGo,
  bundledData: no,
  coverage: planV1Coverage,
  data: yes,
  sms: yes,
  ussd: no,
  voice: no,
};

// eSim variations, the coverage links are different
export const plan01sESim: PlanComparisonTableI18n = {
  ...plan01s,
  coverage: plan01sGlobalESim,
};

export const planP1ESim: PlanComparisonTableI18n = {
  ...planP1,
  coverage: asiaPacificESim,
};

export const planX1ESim: PlanComparisonTableI18n = {
  ...planX1,
  coverage: japanAuLmnopSoftbankESim,
};

export const planUsEsim: PlanComparisonTableI18n = {
  ...planUs,
  coverage: planUsCoverageEsim,
};

export const planX2Esim: PlanComparisonTableI18n = {
  ...planX2,
  coverage: japanAuLMNOPESim,
};

export const planComparisonI18n = {
  pricing: {
    payAsYouGo,
    payAsYouGoWithBundledData,
  },
  bundledData: {
    fiveMB,
  },
  coverage: {
    plan01sGlobal: plan01sGlobal,
    usaAttTmobileVerizon,
    asiaPacific,
    japanAuLmnopSoftbank,
    japanAuLMNOP,
    planX3Global: planX3Global,
  },
  sms: {
    mtSmsOnly,
  },
} as const;

/**
 * This is the main i18n object for the entire `feature-manage-subscriptions` library.
 */
export const i18n = {
  label,
  help,
  fields: planComparisonI18n,
  plans: {
    plan01s,
    'plan-US-max': planUsMaxForPlan01s, // Keep plan01s as default, but if you need to generate a variation, use generateI18n function
    planP1,
    planX1,
    planX2,
    planX3,
    'plan-US': planUs,
    'plan-US-NA': planUsNa,
    planM1: planM1,
    planV1: planV1,
  },
  confirmation,
};

export const i18nESim = {
  ...i18n,
  plans: {
    plan01s: plan01sESim,
    'plan-US': planUsEsim,
    planP1: planP1ESim,
    planX1: planX1ESim,
    planX2: planX2Esim,
    planX3: planX3,
  },
};
