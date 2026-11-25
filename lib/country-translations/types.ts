import type { CountryContent } from '../countries';
import type { NonEnglishLanguageCode } from '../languages';

export type CountryTranslation = {
  lang: NonEnglishLanguageCode;
  slug: string;
  reviewed: boolean;
  reviewedBy?: string;
  reviewedAt?: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
} & Pick<CountryContent, 'intro' | 'occasions' | 'greetingCustoms' | 'sharingHabits' | 'sampleWishes' | 'sensitivities' | 'faqs'>;
