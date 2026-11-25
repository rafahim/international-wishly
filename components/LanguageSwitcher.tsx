import { LANGUAGES, type LanguageCode } from '@/lib/languages';
import { switcherLanguagesFor } from '@/lib/country-translations';

type Props = {
  countrySlug: string;
  currentLang: LanguageCode;
  label: string;
};

/**
 * Server-rendered, link-only language switcher. The active language is shown
 * as text and only the alternate language is a normal navigable link.
 * Unreviewed translations are preview-only and their destinations remain noindex.
 */
export default function LanguageSwitcher({ countrySlug, currentLang, label }: Props) {
  const alternateLanguages = switcherLanguagesFor(countrySlug, currentLang);
  if (alternateLanguages.length === 0) return null;

  const currentLabel = currentLang === 'en' ? 'EN' : LANGUAGES[currentLang].nativeName;

  return (
    <nav className="country-language-switcher" aria-label={label}>
      <ul>
        <li><span aria-current="page">{currentLabel}</span></li>
        {alternateLanguages.map((code) => {
          const language = LANGUAGES[code];
          const href = code === 'en'
            ? `/${countrySlug}/`
            : `/${code}/${countrySlug}/`;
          const title = code === 'en' ? 'Return to the English country guide' : `Read this guide in ${language.name}`;
          return (
            <li key={code}>
              <a href={href} lang={code} hrefLang={code} title={title}>
                {code === 'en' ? 'EN' : language.nativeName}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
