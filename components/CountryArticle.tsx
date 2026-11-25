import Link from 'next/link';
import PageShell from '@/components/PageShell';
import JsonLd from '@/components/JsonLd';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { SITE, abs, appLink } from '@/lib/site';
import { crumbs, faqLd } from '@/lib/seo';
import { OCCASIONS } from '@/lib/templates';
import { guides } from '@/lib/guides';
import { LANGUAGES, type LanguageCode } from '@/lib/languages';
import { nearbyCountries, type Country, type CountryContent } from '@/lib/countries';
import type { CountryTranslation } from '@/lib/country-translations';
import type { CountryUiStrings } from '@/lib/i18n/ui-strings';

export type CountryArticleContent = Pick<
  CountryContent,
  'primaryKeyword' | 'metaTitle' | 'metaDescription' | 'intro' | 'occasions' | 'greetingCustoms' | 'sharingHabits' | 'sampleWishes' | 'sensitivities' | 'faqs' | 'sources'
>;

type CountryArticleProps = {
  country: Country;
  content: CountryArticleContent | CountryTranslation;
  lang: LanguageCode;
  ui: CountryUiStrings;
};

const wordCount = (values: string[]) => values.join(' ').trim().split(/\s+/).filter(Boolean).length;

export default function CountryArticle({ country, content, lang, ui }: CountryArticleProps) {
  const localizedCountryName = ui.countryNames[country.slug] || country.name;
  const localizedRegionName = ui.regionNames[country.region] || country.region;
  const pagePath = lang === 'en'
    ? `/${country.slug}/`
    : `/${lang}/${country.slug}/`;
  const relatedContent = country.content;
  const sources = 'sources' in content ? content.sources : undefined;
  const relatedGuides = (relatedContent?.relatedGuideSlugs || [])
    .map((guideSlug) => guides.find((guide) => guide.slug === guideSlug))
    .filter((guide): guide is (typeof guides)[number] => !!guide);

  const articleWordCount = wordCount([
    content.intro,
    ...content.occasions.flatMap((occasion) => [occasion.name, occasion.whenUsually, occasion.note]),
    ...content.greetingCustoms,
    content.sharingHabits,
    ...content.sampleWishes,
    ...content.sensitivities,
    ...content.faqs.flat(),
  ]);

  const organizationId = `${SITE.url}/#organization`;
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.metaTitle,
    name: ui.pageTitle(localizedCountryName),
    description: content.metaDescription,
    inLanguage: lang,
    articleSection: ui.countryGuideKicker,
    keywords: content.primaryKeyword,
    wordCount: articleWordCount,
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(pagePath) },
    isPartOf: { '@id': organizationId },
    publisher: { '@id': organizationId },
    author: { '@id': organizationId },
  };
  const translatedFaqLd = { ...faqLd(content.faqs), inLanguage: lang };

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={crumbs([
        [ui.homeBreadcrumb, '/'],
        [ui.countriesBreadcrumb, '/countries/'],
        [localizedCountryName, pagePath],
      ])} />
      <JsonLd data={translatedFaqLd} />
      <PageShell
        kicker={`${localizedRegionName.toUpperCase()} · ${ui.countryGuideKicker}`}
        title={ui.pageTitle(localizedCountryName)}
        lead={content.intro}
        path={pagePath}
        name={localizedCountryName}
        showCrumbs={false}
        cta={false}
        contentLang={lang}
        contentDir={LANGUAGES[lang].dir}
        className="country-article-page"
        aside={<LanguageSwitcher countrySlug={country.slug} currentLang={lang} label={ui.languageSwitcherLabel} />}
      >
        <article className="country-article-content">
          <section className="global-wrap country-content-section" aria-labelledby="country-occasions-heading">
            <h2 id="country-occasions-heading">{ui.occasionsHeading(localizedCountryName)}</h2>
            {content.occasions.map((occasion) => (
              <div key={occasion.name}>
                <h3>{occasion.name}</h3>
                <p><strong>{ui.whenUsuallyLabel}</strong> {occasion.whenUsually}</p>
                <p>{occasion.note}</p>
              </div>
            ))}
          </section>

          <section className="global-wrap country-content-section" aria-labelledby="country-greetings-heading">
            <h2 id="country-greetings-heading">{ui.greetingCustomsHeading}</h2>
            <ul>{content.greetingCustoms.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          <section className="global-wrap country-content-section" aria-labelledby="country-sharing-heading">
            <h2 id="country-sharing-heading">{ui.sharingHabitsHeading}</h2>
            <p>{content.sharingHabits}</p>
          </section>

          <section className="global-wrap country-content-section" aria-labelledby="country-samples-heading">
            <h2 id="country-samples-heading">{ui.sampleWishesHeading}</h2>
            <ul>{content.sampleWishes.map((wish, index) => <li key={`${index}-${wish}`}>{wish}</li>)}</ul>
          </section>

          <section className="global-wrap country-content-section" aria-labelledby="country-sensitivities-heading">
            <h2 id="country-sensitivities-heading">{ui.sensitivitiesHeading}</h2>
            <ul>{content.sensitivities.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          <section className="global-wrap country-content-section" aria-labelledby="country-faq-heading">
            <h2 id="country-faq-heading">{ui.faqHeading}</h2>
            {content.faqs.map(([question, answer]) => (
              <div key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </div>
            ))}
          </section>

          {sources?.length ? (
            <section className="global-wrap country-content-section country-source-list" aria-labelledby="country-sources-heading">
              <h2 id="country-sources-heading">Sources and further reading</h2>
              <ul>
                {sources.map((source) => (
                  <li key={`${source.url}-${source.title}`}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a>
                    <span> · Checked {source.checked}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="global-wrap country-content-section" aria-labelledby="country-nearby-heading">
            <h2 id="country-nearby-heading">{ui.otherCountriesHeading(localizedRegionName)}</h2>
            <ul className="country-link-list">
              {nearbyCountries(country.slug).map((nearby) => (
                <li key={nearby.slug}>
                  <Link href={`/${nearby.slug}/`}>{ui.countryNames[nearby.slug] || nearby.name}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="global-wrap country-content-section country-related-block" aria-labelledby="country-related-occasions-heading">
            <h2 id="country-related-occasions-heading">{ui.relatedOccasionsHeading}</h2>
            <ul className="country-link-list">
              {(relatedContent?.relatedOccasionKeys || []).map((key) => (
                <li key={key}>
                  <Link href={`/templates/${key}/`}>
                    {ui.occasionLinkLabel(OCCASIONS[key]?.label || key, key)}
                  </Link>
                </li>
              ))}
            </ul>
            <h2>{ui.moreGuidesHeading}</h2>
            <ul className="country-link-list">
              {relatedGuides.map((guide) => <li key={guide.slug}><Link href={`/insights/${guide.slug}/`}>{guide.title}</Link></li>)}
            </ul>
          </section>

          <section className="global-wrap country-custom-cta">
            <a className="global-button global-button-primary" href={appLink('/signup')}>
              {ui.createPageCta} <span aria-hidden="true">↗</span>
            </a>
            <p>{ui.wishlySupportNote}</p>
          </section>
        </article>
      </PageShell>
    </>
  );
}
