# Country Guide Content Prompt and Editorial Rules

Use this brief for every new country guide. A country must remain a draft when there is not enough reliable evidence to produce a genuinely useful, country-specific page. Do not write around missing facts or substitute generic festival descriptions.

## Step A — Research before writing

Use web research before drafting. Prefer reliable, country-specific sources such as tourism boards, government and cultural institutions, encyclopedias, reputable news organisations and established travel publications. Record the source and the date checked in the editorial research notes.

Find and verify:
- The 3–6 occasions most commonly celebrated with personal wishes in that country.
- When each occasion usually happens. Use a month, season or calendar system (for example, lunar, Hijri or Hindu); never publish an exact date as a timeless fact.
- Real greeting customs and any relevant language or formality context.
- Messaging apps actually used in the country. Prefer a national survey, credible industry report or transparent usage research; distinguish active-user figures, survey results and advertising-reach estimates.
- Cultural or legal sensitivities that affect how a person should greet, visit, post, photograph or celebrate.

Leave out anything that cannot be verified. If there is too little reliable information for a useful page, keep the country as `draft` instead of padding it with assumptions.

## Step B — Write the country-specific guide

Write in English, with a warm, practical and respectful tone. Aim for 800–1,200 words of original country-specific text. The intro should be 80–120 words and explain that the guide is for people sending a wish to someone in the country or to someone in its diaspora.

Include:
- 3–6 occasions. Each `note` should be 40–80 words and explain what is distinctive about that occasion in that country.
- 4–6 accurate `greetingCustoms` entries.
- A `sharingHabits` section of 80–120 words. Name messaging apps only when reliable country-specific research supports the statement; do not overstate survey or ad-reach data.
- 3–5 original `sampleWishes`, each for a different local occasion. Use at most one local greeting word per wish, and only when its spelling and meaning are certain (give the meaning in brackets).
- 2–4 honest `sensitivities`. If an occasion is restricted or not publicly celebrated, say so plainly and suggest a respectful alternative. Never encourage anything illegal or unsafe.
- 3 FAQs that people genuinely search for, with 40–80 words per answer.
- 2–4 `relatedOccasionKeys` that really fit and exist in `OCCASIONS` in `lib/templates.ts`.
- `relatedGuideSlugs` containing only slugs that exist in `lib/guides.ts`.

Uniqueness test: if the country name were replaced by another country, the page should stop making sense. Do not reuse boilerplate paragraphs across countries, apart from the standard CTA and the Wishly-support note. Do not use fake statistics, invented traditions, stereotypes, emojis or copied sentences from sources. Paraphrase in your own words.

## Step C — SEO fields

- `primaryKeyword`: a natural search phrase based on the strongest verified local topic, for example “Eid greetings in Malaysia” or “wedding wishes in India”; do not use a generic template phrase.
- `metaTitle`: no more than 50 characters, contains the country name and the real main topic, and does not contain the site name (the layout appends “ | Wishly”).
- `metaDescription`: 140–158 characters, names 2–3 real occasions covered by the page and explains what the reader will get.
- Use the country name and real occasion names naturally. Avoid keyword stuffing.

## Ready-state checks

A country stays `draft` until the full content object is present and `isPublishable(country)` passes: `status === 'ready'`, at least 3 occasions, at least 3 sample wishes, at least 1 sensitivity, non-empty sharing habits, at least 3 FAQs, and both metadata fields. Also check internal links, source quality, unique wording, the page's 800–1,200-word target, and the rendered page before changing its status to `ready`.
