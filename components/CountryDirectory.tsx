'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { CountryRegion } from '@/lib/countries';

type DirectoryCountry = { slug: string; name: string; isoCode: string; region: CountryRegion };

const regions: CountryRegion[] = ['Asia', 'Europe', 'Africa', 'North America', 'South America', 'Oceania', 'Middle East'];
const regionId = (region: string) => `country-region-${region.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

export default function CountryDirectory({ countries, readySlugs }: { countries: DirectoryCountry[]; readySlugs: string[] }) {
  const [query, setQuery] = useState('');
  const ready = useMemo(() => new Set(readySlugs), [readySlugs]);
  const filtered = useMemo(() => {
    const search = query.trim().toLocaleLowerCase();
    return search ? countries.filter((country) => country.name.toLocaleLowerCase().includes(search)) : countries;
  }, [countries, query]);

  const grouped = useMemo(() => regions.map((region) => ({
    region,
    countries: filtered
      .filter((country) => country.region === region)
      .sort((a, b) => a.name.localeCompare(b.name)),
  })).filter((group) => group.countries.length > 0), [filtered]);

  const regionCounts = useMemo(() => regions.map((region) => ({
    region,
    count: countries.filter((country) => country.region === region).length,
  })).filter((item) => item.count > 0), [countries]);

  return (
    <div className="country-directory">
      <div className="country-directory-toolbar">
        <div className="country-directory-copy">
          <span className="country-directory-eyebrow">THE WORLD, IN ONE PLACE</span>
          <h2>Find a country</h2>
          <p>Browse every country alphabetically within its region. Each name opens an indexable country page; “Guide ready” marks a complete, researched long-form guide.</p>
        </div>
        <div className="country-search-wrap">
          <label htmlFor="country-search">Search the country list</label>
          <div className="country-search-control">
            <span aria-hidden="true">⌕</span>
            <input
              id="country-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Type a country name"
              autoComplete="off"
              aria-controls="country-directory-results"
            />
            {query && <button type="button" onClick={() => setQuery('')} aria-label="Clear country search">Clear</button>}
          </div>
          <p className="country-search-count" aria-live="polite">Showing <strong>{filtered.length}</strong> of {countries.length} countries</p>
        </div>
      </div>

      <nav className="country-region-jump" aria-label="Browse countries by region">
        {regionCounts.map(({ region, count }) => (
          <a href={`#${regionId(region)}`} key={region}>
            <span>{region}</span><small>{count}</small>
          </a>
        ))}
      </nav>

      <div id="country-directory-results" className="country-directory-results">
        {grouped.map(({ region, countries: regionCountries }) => (
          <section className="country-region" id={regionId(region)} key={region} aria-labelledby={`${regionId(region)}-heading`}>
            <div className="country-region-heading">
              <div><span className="country-region-kicker">EXPLORE BY REGION</span><h2 id={`${regionId(region)}-heading`}>{region}</h2></div>
              <span className="country-region-count">{regionCountries.length} {regionCountries.length === 1 ? 'country' : 'countries'}</span>
            </div>
            <ul className="country-list">
              {regionCountries.map((country) => (
                <li key={country.slug}>
                  <Link href={`/${country.slug}/`}>
                    <span className="country-code" aria-hidden="true">{country.isoCode}</span>
                    <span className="country-name">{country.name}</span>
                    <span className="country-card-arrow" aria-hidden="true">↗</span>
                  </Link>
                  {ready.has(country.slug) && <span className="country-ready-badge">Guide ready</span>}
                </li>
              ))}
            </ul>
          </section>
        ))}
        {filtered.length === 0 && <p className="country-no-results">No country names match “{query}”. Try another spelling.</p>}
      </div>
    </div>
  );
}
