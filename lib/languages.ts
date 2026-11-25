export type LanguageDirection = 'ltr' | 'rtl';
export type LanguageDefinition = {
  code: string;
  name: string;
  nativeName: string;
  dir: LanguageDirection;
  ogLocale: string;
};

export const LANGUAGES = {
  en: { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr', ogLocale: 'en_US' },
  bn: { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', dir: 'ltr', ogLocale: 'bn_BD' },
  hi: { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', dir: 'ltr', ogLocale: 'hi_IN' },
  ur: { code: 'ur', name: 'Urdu', nativeName: 'اردو', dir: 'rtl', ogLocale: 'ur_PK' },
  ar: { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl', ogLocale: 'ar_AE' },
  ne: { code: 'ne', name: 'Nepali', nativeName: 'नेपाली', dir: 'ltr', ogLocale: 'ne_NP' },
  si: { code: 'si', name: 'Sinhala', nativeName: 'සිංහල', dir: 'ltr', ogLocale: 'si_LK' },
  ta: { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', dir: 'ltr', ogLocale: 'ta_IN' },
  ms: { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', dir: 'ltr', ogLocale: 'ms_MY' },
  id: { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', dir: 'ltr', ogLocale: 'id_ID' },
  fil: { code: 'fil', name: 'Filipino', nativeName: 'Filipino', dir: 'ltr', ogLocale: 'fil_PH' },
  ja: { code: 'ja', name: 'Japanese', nativeName: '日本語', dir: 'ltr', ogLocale: 'ja_JP' },
  it: { code: 'it', name: 'Italian', nativeName: 'Italiano', dir: 'ltr', ogLocale: 'it_IT' },
  fa: { code: 'fa', name: 'Persian', nativeName: 'فارسی', dir: 'rtl', ogLocale: 'fa_IR' },
} as const satisfies Record<string, LanguageDefinition>;

export type LanguageCode = keyof typeof LANGUAGES;
export type NonEnglishLanguageCode = Exclude<LanguageCode, 'en'>;
export function isNonEnglishLanguage(code: string): code is NonEnglishLanguageCode {
  return code !== 'en' && Object.prototype.hasOwnProperty.call(LANGUAGES, code);
}
