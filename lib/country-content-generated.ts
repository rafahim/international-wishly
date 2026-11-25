import countryFactsJson from './country-content-facts.json';
import type { CountryContent } from './countries';

export type CountryGuideSource = { title: string; url: string; checked: string };

type CountryOccasionFact = { name: string; when: string; detail: string; theme: string };
type CountryFact = {
  context: string;
  language: string;
  occasions: CountryOccasionFact[];
  sensitivities: [string, string, string];
  source: CountryGuideSource[];
};

const countryFacts = countryFactsJson as unknown as Record<string, CountryFact>;
const checkedDate = '2026-11-25';
const relatedGuides = [
  'birthday-website-ideas',
  'how-to-write-birthday-website-message',
  'online-wedding-invitation-website-checklist',
  'anniversary-website-ideas',
  'digital-love-letter-website-ideas',
  'miss-you-website-for-long-distance',
];

const clean = (value: string) => value.replace(/\s+/g, ' ').trim();
const months = 'January|February|March|April|May|June|July|August|September|October|November|December';
function normalizeTiming(value: string) {
  let result = clean(value);
  result = result.replace(/Around the Saturday between 20 and 26 June/i, 'Around Midsummer in June');
  result = result.replace(/From 24 December through the Christmas season/i, 'From late December through the Christmas season');
  result = result.replace(/At the March equinox, usually 20 or 21 March/i, 'Around the March equinox, usually in March');
  result = result.replace(/On the night of the winter solstice, usually 20 or 21 December/i, 'Around the December solstice');
  result = result.replace(/Usually in July, 14 weeks after Easter/i, 'Usually in July, about three months after Easter');
  result = result.replace(/\b(?:On|usually on)\s+\d{1,2}(?:st|nd|rd|th)?\s+(Dhu al-Hijjah|Dhu al-Qadah|Dhu al-Qi'dah|Muharram|Safar|Rabi al-Awwal|Rabi al-Thani|Jumada al-Awwal|Jumada al-Thani|Rajab|Sha'ban|Shawwal)\b/gi, 'During $1');
  result = result.replace(/\b(?:On|usually on)\s+(?:the\s+)?\d{1,2}(?:st|nd|rd|th)?\s+(Nisan|Tishrei|Tishri|Sivan|Elul|Av|Kislev|Adar)\b/gi, 'During $1');
  result = result.replace(/\bOn the first day of (Shawwal|Tishrei|Nisan)\b/gi, 'At the start of $1');
  result = result.replace(/\bOn the 15th day of the eighth lunar month\b/gi, 'During the eighth lunar month');
  result = result.replace(new RegExp(`\\b(?:Usually )?from\\s+\\d{1,2}(?:st|nd|rd|th)?\\s+(?:to|–|-)\\s*\\d{1,2}(?:st|nd|rd|th)?\\s+(${months})\\b`, 'gi'), 'Usually in $1');
  result = result.replace(new RegExp(`\\b(?:On|Usually on|Around|around)\\s+\\d{1,2}(?:st|nd|rd|th)?(?:\\s*(?:-|–|to|and)\\s*\\d{1,2}(?:st|nd|rd|th)?)?\\s+(${months})\\b`, 'gi'), (_match, month) => `In ${month}`);
  result = result.replace(new RegExp(`\\b(?:on|On) the (?:evening|night) of\\s+\\d{1,2}(?:st|nd|rd|th)?(?:\\s*(?:-|–|and)\\s*\\d{1,2}(?:st|nd|rd|th)?)?\\s+(${months})\\b`, 'g'), (_match, month) => `around ${month}`);
  result = result.replace(new RegExp(`\\b(?:on|On) the (?:first|second|third|fourth|last) (?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday) in (${months})\\b`, 'g'), (_match, month) => `in ${month}`);
  result = result.replace(new RegExp(`\\b(?:on|On) the Sunday closest to\\s+\\d{1,2}\\s+(${months})\\b`, 'g'), (_match, month) => `in ${month}`);
  result = result.replace(new RegExp(`\\b(?:On|on)\\s+\\d{1,2}(?:st|nd|rd|th)?\\s+(${months})\\b`, 'g'), (_match, month) => `In ${month}`);
  result = result.replace(new RegExp(`\\b\\d{1,2}(?:st|nd|rd|th)?\\s+(${months})\\b`, 'g'), (_match, month) => `in ${month}`);
  result = result.replace(new RegExp(`\\b(Christmas Eve|Christmas Day) on\\s+\\d{1,2}\\s+(${months})\\b`, 'gi'), '$1 in $2');
  result = result.replace(new RegExp(`\\bChristmas on\\s+\\d{1,2}\\s+(${months})\\b`, 'gi'), 'Christmas in $1');
  result = result.replace(/\b(usually )?on\s+the\s+\d{1,2}(?:st|nd|rd|th)?\s+day of\s+([A-Za-z -]+?)\s+in the (?:Islamic|Hijri) lunar calendar/gi, 'during $2 in the Islamic lunar calendar');
  result = result.replace(/,\s*At the start of/gi, ', at the start of');
  result = result.replace(/following In ([A-Z][a-z]+)/g, 'following later in $1');
  result = result.replace(/\s+/g, ' ').replace(/;\s*;/g, ';').trim();
  return result;
}
const words = (value: string) => clean(value).split(/\s+/).filter(Boolean);
const countWords = (value: string) => words(value).length;

// Trims only at sentence boundaries. A long source sentence is kept whole rather than broken.
function keepCompleteSentences(value: string, limit: number) {
  const text = clean(value);
  if (countWords(text) <= limit) return text;
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
  const kept: string[] = [];
  let count = 0;
  for (const sentence of sentences) {
    const next = clean(sentence);
    const nextCount = countWords(next);
    if (kept.length && count + nextCount > limit) break;
    kept.push(next);
    count += nextCount;
    if (count >= limit) break;
  }
  return kept.join(' ');
}

const wordCount = (values: string[]) => values.join(' ').trim().split(/\s+/).filter(Boolean).length;

function metaDescription(countryName: string, occasions: CountryOccasionFact[]) {
  const pairs: Array<readonly [CountryOccasionFact, CountryOccasionFact]> = [
    [occasions[0], occasions[1]],
    [occasions[0], occasions[2]],
    [occasions[1], occasions[2]],
  ];
  // Avoid relying on tuple inference inside Array#sort; this remains type-safe
  // under the project's supported TypeScript 5.7+ compiler versions.
  let shortestPair = pairs[0];
  for (const pair of pairs.slice(1)) {
    if (pair[0].name.length + pair[1].name.length < shortestPair[0].name.length + shortestPair[1].name.length) {
      shortestPair = pair;
    }
  }
  const fullEnding = ' Learn when to send a wish, follow local greeting etiquette and find thoughtful, respectful message ideas for family and friends.';
  for (const [first, second] of pairs) {
    const core = `Find ${countryName} wishes for ${first.name} and ${second.name}.`;
    const available = 158 - core.length;
    if (available < 18) continue;
    let ending = fullEnding;
    if (ending.length > available) {
      const clipped = ending.slice(0, available - 1);
      const boundary = clipped.lastIndexOf(' ');
      ending = `${clipped.slice(0, boundary > 12 ? boundary : clipped.length).replace(/[\s,;:.]+$/, '')}.`;
    }
    if (core.length + ending.length < 140) {
      const extra = ' Use local timing and personal wording.';
      if (core.length + ending.length + extra.length <= 158) ending += extra;
    }
    const candidate = `${core}${ending}`;
    if (candidate.length >= 140 && candidate.length <= 158) return candidate;
  }
  const [first, second] = shortestPair;
  const core = `Find ${countryName} wishes for ${first.name} and ${second.name}.`;
  const ending = ' Learn timing, customs and thoughtful greetings for loved ones near and far.';
  const max = 158 - core.length;
  const clipped = ending.slice(0, max - 1);
  const boundary = clipped.lastIndexOf(' ');
  return `${core}${clipped.slice(0, boundary > 12 ? boundary : clipped.length).replace(/[\s,;:.]+$/, '')}.`;
}

function stableIndex(seed: string, length: number, salt = 0) {
  let hash = 2166136261;
  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return ((hash >>> 0) + salt * 2654435761 >>> 0) % length;
}

function choose<T>(seed: string, options: readonly T[], salt = 0): T {
  return options[stableIndex(seed, options.length, salt)];
}

function intro(countryName: string, fact: CountryFact, slug: string) {
  const [first, second, third] = fact.occasions;
  const options = [
    `A thoughtful greeting for someone connected with ${countryName} starts with the setting behind the date. ${fact.context}. ${first.name}, ${second.name} and ${third.name} bring different themes into view: ${first.theme}, ${second.theme} and ${third.theme}. ${fact.language} Choose the reference that belongs to the person you are writing to, not simply the one that looks most prominent on a calendar.`,
    `There is more than one story in ${countryName}’s annual calendar. ${fact.context}. The occasions covered here—${first.name}, ${second.name} and ${third.name}—are associated with ${first.theme}, ${second.theme} and ${third.theme}, respectively. ${fact.language} A message feels more sincere when it reflects the recipient’s own connection to an observance instead of treating every household as if it follows the same routine.`,
    `Before sending a celebration message to ${countryName}, it helps to know what the occasion means locally. ${fact.context}. This guide looks at ${first.name}, ${second.name} and ${third.name}, whose themes include ${first.theme}, ${second.theme} and ${third.theme}. ${fact.language} Use these notes as context for a personal greeting; the recipient’s own community and preferences should decide the final wording.`,
    `For friends and relatives in ${countryName} or abroad, the right greeting depends on which part of the local calendar matters to them. ${fact.context}. ${first.name}, ${second.name} and ${third.name} are useful reference points, but their meanings are not interchangeable. ${fact.language} A short note grounded in the recipient’s experience is more helpful than a message that assumes one national custom.`,
    `A country name alone cannot tell you which celebration a person observes. In ${countryName}, ${fact.context}. The examples below connect ${first.name} with ${first.theme}, ${second.name} with ${second.theme} and ${third.name} with ${third.theme}. ${fact.language} That distinction matters when writing to a family, colleague or friend whose local identity may be more specific than a national label.`,
    `The calendar in ${countryName} brings together occasions with different histories and audiences: ${fact.context}. This page focuses on ${first.name}, ${second.name} and ${third.name} rather than suggesting that everyone celebrates all three. ${fact.language} It is intended for anyone preparing a personal wish for a resident or someone in the diaspora, with room for the recipient’s own practice.`,
    `When you are writing to someone from ${countryName}, begin by asking what the occasion represents in their life. ${fact.context}. ${first.name}, ${second.name} and ${third.name} each offer a different point of reference, from ${first.theme} to ${second.theme} and ${third.theme}. ${fact.language} The most considerate greeting is specific to the person, not a broad claim about the country.`,
    `The celebrations named for ${countryName} span more than one cultural or civic thread. ${fact.context}. In this guide, ${first.name}, ${second.name} and ${third.name} are treated as distinct occasions, with links to ${first.theme}, ${second.theme} and ${third.theme}. ${fact.language} This context can help you avoid a mismatched greeting when writing to someone whose family observes only some of these dates.`,
    `A greeting that feels natural in ${countryName} should match the occasion and the person. ${fact.context}. The three examples here—${first.name}, ${second.name} and ${third.name}—show different dimensions of the calendar rather than a single shared celebration. ${fact.language} Use the details below to choose an appropriate tone, then adapt it to the relationship you have with the recipient.`,
    `The local background matters as much as the wording of a wish. For ${countryName}, ${fact.context}. ${first.name}, ${second.name} and ${third.name} provide three distinct examples, shaped by ${first.theme}, ${second.theme} and ${third.theme}. ${fact.language} The aim is to make your message informed without assuming that a person’s passport, surname or family history tells you what they celebrate.`,
    `People connected with ${countryName} may relate to different parts of its public and family calendar. ${fact.context}. This guide gives context for ${first.name}, ${second.name} and ${third.name}, while recognising that ${first.theme}, ${second.theme} and ${third.theme} can mean different things to different households. ${fact.language} Ask or follow the recipient’s lead when their observance is not already clear.`,
    `To prepare a personal wish for ${countryName}, look beyond a list of public holidays. ${fact.context}. The occasions selected here are ${first.name}, ${second.name} and ${third.name}; each carries its own association with ${first.theme}, ${second.theme} or ${third.theme}. ${fact.language} A good message respects that variety and leaves room for people who do not mark a particular date.`,
  ];
  const extraOccasion = fact.occasions[3];
  const additionalLocalContext = extraOccasion
    ? ` The page also covers ${extraOccasion.name}, usually ${normalizeTiming(extraOccasion.when).replace(/[.!?]+$/, '').replace(/^([A-Z])/, (letter) => letter.toLowerCase())}: ${extraOccasion.detail}`
    : '';
  return clean(`${choose(slug, options)}${additionalLocalContext}`);
}

function greetingCustoms(countryName: string, fact: CountryFact, slug: string) {
  const [first, second, third] = fact.occasions;
  const focus = fact.occasions[3] ?? third;
  const languageTip = choose(slug, [
    `Language choice is personal in ${countryName}. ${fact.language}`,
    `For wording, follow the recipient’s language preference rather than guessing from their address. ${fact.language}`,
    `A familiar language is usually more useful than an elaborate phrase; the language picture in ${countryName} is: ${fact.language}`,
    `Do not treat one language as the automatic choice for every household in ${countryName}. ${fact.language}`,
    `The language used in a greeting should come from the relationship you already have. ${fact.language}`,
    `Before adding a local expression, check what language the recipient prefers. ${fact.language}`,
    `Written greetings can cross language communities, so choose words the recipient will recognise. ${fact.language}`,
    `The safest language decision is the one based on the individual, not a country-level assumption. ${fact.language}`,
    `If you are unsure which language to use, ask or continue in the language you normally share. ${fact.language}`,
    `Local language use is varied; do not infer a person’s preference from nationality alone. ${fact.language}`,
    `Keep the message in a language both of you are comfortable reading. ${fact.language}`,
    `A local-language greeting is optional; accuracy and warmth matter more than using an unfamiliar phrase. ${fact.language}`,
  ]);
  const firstTip = choose(slug, [
    `For ${first.name}, a reference to ${first.theme} can make the greeting specific. The local detail matters: ${first.detail} Mention it only when it fits the recipient’s own experience.`,
    `${first.name} offers a locally grounded subject for a wish: ${first.detail} A phrase about ${first.theme} can acknowledge that background without claiming every family observes the occasion identically.`,
    `When the recipient marks ${first.name}, build the note around ${first.theme}. One detail that distinguishes the occasion is this: ${first.detail} Keep the reference proportionate to how closely the person identifies with the event.`,
    `The tone for ${first.name} can follow its association with ${first.theme}. ${first.detail} This is a better starting point than borrowing a ritual from another country where the same occasion may look different.`,
    `A useful reference for ${first.name} is ${first.theme}; the country-specific account describes it this way: ${first.detail} Use that detail as context, not as a script for what the recipient must do.`,
    `If ${first.name} is meaningful to your contact, a wish about ${first.theme} may feel apt. The local account notes that ${first.detail.charAt(0).toLowerCase()}${first.detail.slice(1)} Keep the message aligned with the person’s own plans.`,
    `Do not rely on the name ${first.name} alone. Its local character includes ${first.detail} A line that acknowledges ${first.theme} will be more considered when the recipient actually observes the occasion.`,
    `For a message linked to ${first.name}, use the detail that makes it recognisable in ${countryName}: ${first.detail} That gives you a real subject for the wish—${first.theme}—without overgeneralising.`,
    `The background to ${first.name} is worth preserving in a greeting. ${first.detail} You can draw on ${first.theme}, while avoiding the suggestion that every person in ${countryName} takes part.`,
    `When appropriate, mention ${first.theme} in a note for ${first.name}. The distinct local point is that ${first.detail.charAt(0).toLowerCase()}${first.detail.slice(1)} Let the recipient decide how much of that tradition they want to share.`,
    `A message for ${first.name} can be more than a standard holiday line if it notices ${first.theme}. ${first.detail} Refer to this only when it reflects the recipient’s relationship with the occasion.`,
    `For ${first.name}, take your cue from its local story rather than a generic celebration template: ${first.detail} A personal wish can then centre on ${first.theme}.`,
  ]);
  const secondTip = choose(slug, [
    `Treat ${second.name} separately from the first occasion. ${second.detail} If you know the recipient observes it, reflect ${second.theme}; otherwise a neutral wish is a better fit.`,
    `${second.name} has its own audience and meaning: ${second.detail} Avoid assuming that a person who observes ${first.name} will also mark this occasion.`,
    `For ${second.name}, the specific background is ${second.detail} A message that recognises ${second.theme} should still leave room for differences between regions and families.`,
    `The detail to remember about ${second.name} is not interchangeable with another holiday: ${second.detail} Use ${second.theme} as a theme only when the recipient has a connection to it.`,
    `Some recipients may know ${second.name} through ${second.detail} Others may not observe it at all. Check first, then decide whether ${second.theme} belongs in your greeting.`,
    `If ${second.name} appears in the recipient’s calendar, a short reference to ${second.theme} can work. The local account explains: ${second.detail} Do not turn one community’s practice into a national rule.`,
    `${second.name} should be described on its own terms. ${second.detail} That context can guide the tone, but the relationship—not an assumption about nationality—should determine how personal the message becomes.`,
    `A respectful note for ${second.name} starts with the recipient’s actual observance. ${second.detail} Keep ${second.theme} as a possible theme, not a phrase that must appear in every message.`,
    `There is a distinct local reason to mention ${second.name}: ${second.detail} Where the person recognises the date, a wish centred on ${second.theme} is more accurate than a generic national greeting.`,
    `When writing about ${second.name}, avoid blending its meaning into that of other public holidays. ${second.detail} Acknowledge ${second.theme} only if it is relevant to the recipient.`,
    `${second.name} may be significant for particular families or communities. ${second.detail} Ask what the day means to the person before choosing language around ${second.theme}.`,
    `A message about ${second.name} can recognise ${second.theme} without describing the observance as universal. ${second.detail}`,
  ]);
  const thirdTip = choose(slug, [
    `With ${focus.name}, consider the association with ${focus.theme}. ${focus.detail} For civic or remembrance dates, a measured wish for dignity and wellbeing is often more appropriate than a party-style message.`,
    `${focus.name} calls for its own tone. ${focus.detail} Let the theme of ${focus.theme} guide the wording, especially if the occasion has historical or community significance.`,
    `The third occasion, ${focus.name}, is associated with ${focus.theme}. ${focus.detail} Acknowledge its meaning without turning a personal greeting into a statement about politics or identity.`,
    `If you mention ${focus.name}, keep its local significance in view: ${focus.detail} A line about ${focus.theme} can be thoughtful when it matches the recipient’s relationship to the day.`,
    `${focus.name} is not simply another festive date. ${focus.detail} Where the subject is remembrance or civic history, choose restrained wording and avoid jokes about the event.`,
    `The local story of ${focus.name} is important to the way it should be named. ${focus.detail} Focus on ${focus.theme} only where it is a fair description of the recipient’s own observance.`,
    `For ${focus.name}, a respectful message can draw on ${focus.theme}. ${focus.detail} Leave room for different family views, particularly where the date recalls a difficult period.`,
    `Use care when writing about ${focus.name}. ${focus.detail} If the event is solemn, a wish for peace, safety or remembrance may fit better than a celebratory slogan.`,
    `${focus.name} adds another perspective to the calendar through ${focus.theme}. ${focus.detail} Keep the message precise and avoid implying that all residents share the same view.`,
    `The recipient’s connection to ${focus.name} should decide the tone. ${focus.detail} Where appropriate, refer to ${focus.theme} without turning the occasion into a broad national claim.`,
    `For ${focus.name}, the most useful context is ${focus.detail} A sentence about ${focus.theme} can be enough; an elaborate greeting is not required.`,
    `Consider whether ${focus.name} is festive, commemorative or community-specific before writing. ${focus.detail} Match the tone to that purpose and to the person receiving it.`,
  ]);
  const timingTip = choose(slug, [
    `Timing matters for ${first.name}: it is usually associated with ${normalizeTiming(first.when).replace(/[.!?]+$/, '').replace(/^([A-Z])/, (letter) => letter.toLowerCase())}. Confirm local announcements when the observance follows a lunar or locally set calendar.`,
    `Before scheduling a note for ${first.name}, check the current local calendar. The usual period is ${normalizeTiming(first.when).replace(/[.!?]+$/, '').replace(/^([A-Z])/, (letter) => letter.toLowerCase())}; dates can differ where religious or regional announcements apply.`,
    `The customary timing of ${first.name} is ${normalizeTiming(first.when).replace(/[.!?]+$/, '').replace(/^([A-Z])/, (letter) => letter.toLowerCase())}. For a first-day greeting, verify the date with a source the recipient’s community follows.`,
    `Use ${normalizeTiming(first.when).replace(/[.!?]+$/, '').replace(/^([A-Z])/, (letter) => letter.toLowerCase())} as a general guide to ${first.name}, not an automatic reminder. Local programmes and calendar announcements can affect the best moment to send your message.`,
    `A greeting tied to ${first.name} should follow the recipient’s local schedule. Its normal window is ${normalizeTiming(first.when).replace(/[.!?]+$/, '').replace(/^([A-Z])/, (letter) => letter.toLowerCase())}; check again when the date moves with a lunar calendar.`,
    `For ${first.name}, the guide timing is ${normalizeTiming(first.when).replace(/[.!?]+$/, '').replace(/^([A-Z])/, (letter) => letter.toLowerCase())}. Confirm the date close to the event if the local observance is announced by religious or civic authorities.`,
    `Do not schedule ${first.name} from memory alone. It is generally held ${normalizeTiming(first.when).replace(/[.!?]+$/, '').replace(/^([A-Z])/, (letter) => letter.toLowerCase())}, but a recipient abroad may follow another community calendar or time zone.`,
    `Keep the date flexible for ${first.name}. The customary season is ${normalizeTiming(first.when).replace(/[.!?]+$/, '').replace(/^([A-Z])/, (letter) => letter.toLowerCase())}; confirm the exact local observance before sending a time-sensitive note.`,
    `The calendar reference for ${first.name} is ${normalizeTiming(first.when).replace(/[.!?]+$/, '').replace(/^([A-Z])/, (letter) => letter.toLowerCase())}. If the occasion is lunar, regional or locally announced, use the recipient’s own calendar as the final check.`,
    `A little calendar checking prevents an early or late ${first.name} message. The occasion usually falls ${normalizeTiming(first.when).replace(/[.!?]+$/, '').replace(/^([A-Z])/, (letter) => letter.toLowerCase())}; the local date may be confirmed nearer the time.`,
    `The usual season for ${first.name} is ${normalizeTiming(first.when).replace(/[.!?]+$/, '').replace(/^([A-Z])/, (letter) => letter.toLowerCase())}. Consider local public notices and the recipient’s time zone before setting a reminder.`,
    `When your wish refers to ${first.name}, make sure its timing reflects the calendar actually used by the recipient. The broad window is ${normalizeTiming(first.when).replace(/[.!?]+$/, '').replace(/^([A-Z])/, (letter) => letter.toLowerCase())}.`,
  ]);
  return [languageTip, firstTip, secondTip, thirdTip, timingTip].map(clean);
}

function sharingHabits(countryName: string, fact: CountryFact, slug: string) {
  const [first, second, third] = fact.occasions;
  const focus = fact.occasions[3] ?? third;
  const options = [
    `For a private greeting, use the conversation you already share with the recipient; the sources used here do not establish one messaging app as a country-wide favourite in ${countryName}. A note about ${first.name} can mention ${first.theme}, while a message for ${second.name} should follow the recipient’s own observance. Keep public posts optional. In particular, remember: ${fact.sensitivities[0]}`,
    `Choose a familiar one-to-one channel rather than guessing which platform people in ${countryName} prefer. No verified country-specific source in this guide supports naming a universal messaging app. You can make a ${first.name} message more personal by referring to ${first.theme}; for ${focus.name}, match the tone to its character. Ask before sharing names, photographs or family news publicly.`,
    `A personal message does not need a new app or a public post. Send it where you and the recipient normally talk, and let their habits decide whether a link or a short text is better. For ${countryName}, this guide has no reliable evidence for a single national app preference. A reference to ${first.theme} or ${second.theme} can add local meaning without assuming every family takes part.`,
    `Think first about the relationship, then the delivery method. A private message is a sensible default when you are unsure whether a person wants a public mention; this research does not verify one dominant messenger for ${countryName}. If the occasion is ${first.name}, connect your words to ${first.theme}. If it is ${second.name}, use the event’s own context: ${second.detail}`,
    `People connected with ${countryName} may use different services, devices and languages, so avoid presenting any app as the national standard. The sources gathered for this page do not substantiate a country-wide platform ranking. Send a concise greeting through a channel the recipient already checks, and make the content distinct: ${first.name} is linked with ${first.theme}, whereas ${focus.name} has a different emphasis.`,
    `When you are sending from abroad, the recipient’s local time and the channel they already use matter more than choosing a fashionable platform. No dependable country-specific source here identifies one app as universal in ${countryName}. A message can refer to ${first.name} through ${first.theme}; for ${second.name}, avoid making assumptions that go beyond what the person has told you.`,
    `A thoughtful greeting can arrive as a private note, an email or a shared page; choose the method that fits your existing contact with the person. We do not claim a leading messaging app for ${countryName}, because the sources used for this page do not establish one. Keep the message tied to the occasion—${first.name} or ${second.name}—and avoid reposting private family material without permission.`,
    `Use a platform only because it is familiar to the recipient, not because you assume it is preferred across ${countryName}. The evidence reviewed for this guide does not justify a national messaging-app claim. For a ${first.name} greeting, ${first.theme} is a useful subject; for ${focus.name}, a reflective tone may be more suitable. Check whether the person is comfortable with a public tag or photograph.`,
    `The safest sharing habit is relational rather than country-wide: send the greeting through a private channel that is already normal between you. This research does not support ranking messaging platforms for ${countryName}. Make the note distinctive by using the recipient’s connection to ${first.name} or ${second.name}, and do not assume that the date is equally meaningful to every member of a family.`,
    `If the recipient lives in ${countryName}, there is no need to guess their preferred app. Ask or use the same channel you have used before; the sources reviewed here do not document one universal service. A brief reference to ${first.theme} can make ${first.name} feel specific, while ${focus.name} may call for a quieter or more reflective message. Respect privacy before posting anything beyond the private conversation.`,
    `Choose delivery around access and privacy: a direct message is usually easier to personalise than a public post, while a shareable page can hold longer notes or photographs. No source reviewed for ${countryName} demonstrates one messaging service as a national preference. Use the occasion’s own details—such as ${first.theme} for ${first.name}—and ask before including another person’s image or words.`,
    `The way a wish is sent should suit the recipient’s routines. A short private note may be enough; a longer page is useful only when the person will enjoy opening it. This guide does not infer app popularity in ${countryName}. For ${second.name}, refer to ${second.theme}; for ${focus.name}, be attentive to the event’s local and historical meaning.`,
  ];
  return clean(choose(slug, options));
}

function wishes(fact: CountryFact, slug: string) {
  const patterns = [
    (name: string, theme: string) => `For ${name}: May ${theme} be part of the days ahead, and may you enjoy the occasion in the way that feels right to you.`,
    (name: string, theme: string) => `Thinking of you on ${name}. I hope ${theme} brings a welcome moment to share with the people who matter to you.`,
    (name: string, theme: string) => `As ${name} comes around, I am wishing you ${theme}, good health and a little time for what matters most.`,
    (name: string, theme: string) => `May this ${name} give you a reason to appreciate ${theme} and to make memories that feel true to your own traditions.`,
    (name: string, theme: string) => `Sending warm thoughts for ${name}; may ${theme} guide the day and leave you with something meaningful to remember.`,
    (name: string, theme: string) => `For your ${name} observance, I hope there is room for ${theme}, kind company and a peaceful time at home.`,
    (name: string, theme: string) => `I hope ${name} brings ${theme} to you and your loved ones, wherever you are marking the occasion this year.`,
    (name: string, theme: string) => `Wishing you a meaningful ${name}. May ${theme} be close, and may the days that follow bring fresh reasons for hope.`,
    (name: string, theme: string) => `On ${name}, I am thinking of you and wishing that ${theme} is reflected in the moments you share with others.`,
    (name: string, theme: string) => `May your ${name} be shaped by ${theme}; I hope the occasion meets you in a way that feels personal and uplifting.`,
    (name: string, theme: string) => `A warm wish for ${name}: may ${theme} find its way into your home, your conversations and the season ahead.`,
    (name: string, theme: string) => `I hope you can mark ${name} with ${theme} and with the people, memories or community that make it important to you.`,
    (name: string, theme: string) => `For ${name}, I am wishing you a day with ${theme}, a calm moment to enjoy it and good things beyond the celebration.`,
    (name: string, theme: string) => `May ${name} bring a little more ${theme} into your life and give you something kind to carry into the weeks ahead.`,
    (name: string, theme: string) => `As you observe ${name}, I hope ${theme} is present in the small moments that make the day yours.`,
    (name: string, theme: string) => `Sending a personal thought for ${name}; may ${theme} meet you and your loved ones wherever you are.`,
    (name: string, theme: string) => `I hope this ${name} gives you space for ${theme}, meaningful conversation and a memory worth keeping.`,
    (name: string, theme: string) => `For the occasion of ${name}, may ${theme} be close to you and may the next season feel bright and steady.`,
    (name: string, theme: string) => `Wishing you well as you mark ${name}. May ${theme} shape the day in a way that feels genuine to you.`,
    (name: string, theme: string) => `May the spirit of ${name} bring ${theme} to your family and encouragement for whatever lies ahead.`,
    (name: string, theme: string) => `On this ${name}, I hope you find ${theme} in the company, traditions or quiet moments you value.`,
    (name: string, theme: string) => `A thoughtful ${name} to you: may ${theme} accompany you today and remain with you after the occasion has passed.`,
    (name: string, theme: string) => `I am sending good wishes for ${name}, with hopes for ${theme} and a season filled with worthwhile moments.`,
    (name: string, theme: string) => `May your celebration of ${name} reflect ${theme} and the people or memories that give it meaning.`,
    (name: string, theme: string) => `For ${name}, I hope the day offers ${theme} and a chance to reconnect with what matters most to you.`,
    (name: string, theme: string) => `Thinking of your ${name} observance and wishing you ${theme}, a generous heart and a hopeful beginning after today.`,
    (name: string, theme: string) => `I hope ${name} feels meaningful this year, with ${theme} and time for the people you want close.`,
    (name: string, theme: string) => `May you carry ${theme} beyond ${name} and find reasons for optimism in the days ahead.`,
  ];
  return fact.occasions.map((occasion, index) => choose(slug, patterns, index + 1)(occasion.name, occasion.theme));
}

function detailExcerpt(value: string, limit = 46) {
  const sentences = value.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [value];
  const kept: string[] = [];
  let count = 0;
  for (const sentence of sentences) {
    const next = clean(sentence);
    const size = countWords(next);
    if (kept.length && count + size > limit) break;
    if (!kept.length && size > limit) {
      const clipped = words(next).slice(0, limit).join(' ').replace(/[,;:]$/, '');
      return `${clipped}.`;
    }
    kept.push(next);
    count += size;
    if (count >= limit) break;
  }
  return kept.join(' ');
}

function faqs(countryName: string, fact: CountryFact, slug: string): [string, string][] {
  const [first, second, third] = fact.occasions;
  const focus = fact.occasions[3] ?? third;
  const timing = normalizeTiming(first.when).replace(/[.!?]+$/, '').replace(/^([A-Z])/, (letter) => letter.toLowerCase());
  const firstQuestions = [
    `When does ${first.name} usually take place in ${countryName}?`,
    `What part of the year is associated with ${first.name}?`,
    `How should I plan the timing of a ${first.name} greeting?`,
    `Does ${first.name} follow a fixed date in ${countryName}?`,
    `What calendar period is relevant to ${first.name}?`,
    `When might a recipient in ${countryName} expect ${first.name}?`,
    `How can I avoid sending a ${first.name} wish too early?`,
    `What should I check before scheduling a ${first.name} message?`,
    `When is the customary season for ${first.name}?`,
    `Can the date of ${first.name} change each year?`,
    `When is a good time to send a greeting for ${first.name}?`,
    `Which local calendar should I check for ${first.name}?`,
  ];
  const firstAnswers = [
    `${first.name} is usually observed ${timing}. ${detailExcerpt(first.detail, 46)} Check the local calendar again when the date is tied to a religious or community announcement.`,
    `The customary timing is ${timing}. One detail that helps explain the occasion is this: ${detailExcerpt(first.detail, 44)} For a first-day greeting, confirm the date followed by the recipient’s family or community.`,
    `Use ${timing} as the broad guide. ${detailExcerpt(first.detail, 47)} Local schedules may vary, so check the recipient’s plans if your message is meant to arrive before a particular gathering.`,
    `${first.name} is associated with ${timing}. ${detailExcerpt(first.detail, 46)} If the observance follows a lunar calendar or a local announcement, do not rely on a fixed Gregorian reminder.`,
    `The usual window for ${first.name} is ${timing}. ${detailExcerpt(first.detail, 44)} People may celebrate or attend events on different schedules, so a personal check is useful when timing matters.`,
    `For planning, place ${first.name} ${timing}. Its local character includes this point: ${detailExcerpt(first.detail, 45)} Confirm the current date before arranging a timed surprise or group greeting.`,
    `A general calendar reference is ${timing}. ${detailExcerpt(first.detail, 46)} A recipient abroad may follow a diaspora or community calendar, which is worth checking before you schedule the message.`,
    `${first.name} generally falls ${timing}. ${detailExcerpt(first.detail, 45)} Use this as a seasonal reference and verify the current observance window when a local announcement determines the date.`,
    `The customary season is ${timing}. ${detailExcerpt(first.detail, 46)} If you are unsure about the day itself, ask the recipient or check the calendar used by their local community.`,
    `Plan around ${timing}, while allowing for local variation. ${detailExcerpt(first.detail, 45)} This matters most when the date changes with a lunar calendar or official announcement.`,
    `The guide timing for ${first.name} is ${timing}. ${detailExcerpt(first.detail, 46)} If the recipient lives abroad, take their time zone and the calendar they follow into account.`,
    `Look for ${timing} on the local calendar. ${detailExcerpt(first.detail, 46)} A quick check close to the occasion is more reliable than copying a date from an earlier year.`,
  ];
  const secondQuestions = [
    `Who observes ${second.name} in ${countryName}?`,
    `What makes ${second.name} distinctive locally?`,
    `Do all people in ${countryName} celebrate ${second.name}?`,
    `What should I know before greeting someone for ${second.name}?`,
    `How is ${second.name} understood in the country’s calendar?`,
    `Is ${second.name} mainly a civic, religious or community observance?`,
    `What local detail matters most about ${second.name}?`,
    `How can I mention ${second.name} without making assumptions?`,
    `Does the meaning of ${second.name} vary between communities?`,
    `Would a personal wish for ${second.name} suit every recipient?`,
    `What is a respectful way to refer to ${second.name}?`,
    `How do I know whether someone observes ${second.name}?`,
  ];
  const secondAnswers = [
    `${detailExcerpt(second.detail, 55)} This does not mean that every resident takes part. Check the recipient’s own connection before sending a strongly occasion-specific greeting.`,
    `The local account is specific: ${detailExcerpt(second.detail, 55)} Its importance can differ by household, region or belief, so do not infer participation from nationality alone.`,
    `${second.name} is described through this local detail: ${detailExcerpt(second.detail, 54)} People may relate to it differently; a neutral wish is better when you do not know the recipient’s practice.`,
    `One useful point is that ${detailExcerpt(second.detail, 56)} That background helps explain the observance, but it cannot tell you whether a particular person celebrates it.`,
    `The occasion is connected with ${second.theme}. ${detailExcerpt(second.detail, 54)} Before using a specific holiday greeting, follow what the person has said about their own observance.`,
    `In ${countryName}, the available description notes that ${detailExcerpt(second.detail, 54)} It is safer to treat this as a community or calendar reference than as a rule for every household.`,
    `A distinctive feature is ${detailExcerpt(second.detail, 56)} The scale and style of observance are not identical for everyone, so let the recipient’s own plans guide your wording.`,
    `Describe the event through its documented local setting: ${detailExcerpt(second.detail, 55)} Avoid turning one community’s custom into a statement about all people in ${countryName}.`,
    `The country-specific note explains that ${detailExcerpt(second.detail, 55)} That is useful context, but the recipient may have a different regional, family or personal relationship with the day.`,
    `${second.name} can be meaningful for people connected with ${second.theme}. ${detailExcerpt(second.detail, 53)} Ask or follow the person’s lead before assuming they welcome a greeting for it.`,
    `A respectful reference starts with the occasion’s actual character: ${detailExcerpt(second.detail, 55)} A short message is enough; there is no need to claim that the same custom applies to everyone.`,
    `The local account says: ${detailExcerpt(second.detail, 57)} Whether your contact participates is an individual matter, so avoid guessing based only on their home country or family name.`,
  ];
  const thirdQuestions = [
    `What is a considerate greeting for someone from ${countryName}?`,
    `Which language should I use in a message to someone in ${countryName}?`,
    `How can I make a country-related wish sound personal?`,
    `What assumptions should I avoid about a recipient in ${countryName}?`,
    `What tone is appropriate for ${focus.name}?`,
    `Can I include a local-language phrase if I am not fluent?`,
    `How do I keep a greeting respectful across communities?`,
    `What should diaspora family members consider when sending a wish?`,
    `How can I acknowledge ${focus.name} without sounding political?`,
    `What can I write if I do not know the recipient’s observance?`,
    `How do I personalise a message for a friend in ${countryName}?`,
    `Should a message for ${focus.name} be festive or reflective?`,
  ];
  const thirdAnswers = [
    `Start with the language the recipient prefers. ${fact.language} For ${focus.name}, a possible theme is ${focus.theme}; ${detailExcerpt(focus.detail, 25)} Keep the tone aligned with the person’s own connection to the occasion.`,
    `${fact.language} A simple message in a shared language is usually safer than an unfamiliar expression. If you mention ${focus.name}, its local theme is ${focus.theme}; ${detailExcerpt(focus.detail, 25)} Avoid assuming a shared religious or political view.`,
    `Choose one detail you know matters to the person, then write in a language you both understand. ${fact.language} ${focus.name} may be associated with ${focus.theme}; ${detailExcerpt(focus.detail, 25)} Do not use a local phrase unless you are certain of its spelling and meaning.`,
    `Do not infer language, faith or personal observance from nationality. ${fact.language} Where relevant, ${focus.name} can be acknowledged through ${focus.theme}; ${detailExcerpt(focus.detail, 25)} A neutral wish for wellbeing is appropriate when you are unsure.`,
    `${fact.language} For ${focus.name}, consider whether ${focus.theme} calls for a celebratory or more measured tone. ${detailExcerpt(focus.detail, 25)} A clear sentence in a familiar language is preferable to an expression you cannot verify.`,
    `Use words that are natural in your relationship and easy for the recipient to understand. ${fact.language} The local background to ${focus.name} is ${detailExcerpt(focus.detail, 25)} Let that context guide the tone rather than assuming everyone marks the day in one way.`,
    `A warm, direct message is enough. ${fact.language} If the occasion is ${focus.name}, recognise ${focus.theme} only where it reflects the recipient’s experience; ${detailExcerpt(focus.detail, 25)} Leave out uncertain local phrases.`,
    `Someone in the diaspora may follow a family or community calendar that differs from a public schedule. ${fact.language} For ${focus.name}, the local connection is ${focus.theme}; ${detailExcerpt(focus.detail, 25)} Ask if you are unsure which wording feels right.`,
    `${fact.language} A message about ${focus.name} can be reflective when its context calls for it: ${detailExcerpt(focus.detail, 25)} Focus on the recipient’s wellbeing instead of making a political statement or assuming a single national viewpoint.`,
    `When the person’s observance is unknown, avoid a religious or highly specific greeting. ${fact.language} You can still send a personal wish for health and peace; ${focus.name} is associated with ${focus.theme}, and ${detailExcerpt(focus.detail, 25)}`, 
    `Keep the language familiar and the reference relevant. ${fact.language} ${focus.name} has a local association with ${focus.theme}; ${detailExcerpt(focus.detail, 25)} Add a shared memory or a sincere hope instead of relying on a stock phrase.`,
    `The tone should follow the purpose of the date. ${fact.language} ${focus.name} is connected with ${focus.theme}; ${detailExcerpt(focus.detail, 25)} If it is solemn for the recipient, a wish for peace or remembrance is more suitable than a festive slogan.`,
  ];
  const firstIndex = stableIndex(slug, firstQuestions.length, 1);
  const secondIndex = stableIndex(slug, secondQuestions.length, 5);
  const thirdIndex = stableIndex(slug, thirdQuestions.length, 9);
  return [
    [firstQuestions[firstIndex], firstAnswers[firstIndex]],
    [secondQuestions[secondIndex], secondAnswers[secondIndex]],
    [thirdQuestions[thirdIndex], thirdAnswers[thirdIndex]],
  ];
}

export function generateCountryContent(countryName: string, slug: string): CountryContent | undefined {
  const fact = countryFacts[slug];
  if (!fact) return undefined;
  const occasions = fact.occasions.map((occasion) => ({
    name: occasion.name,
    whenUsually: normalizeTiming(occasion.when),
    note: clean(occasion.detail),
  }));
  const titleCandidate = `Wishes in ${countryName}: ${fact.occasions[0].name}`;
  const content: CountryContent = {
    primaryKeyword: `${fact.occasions[0].name} wishes in ${countryName}`,
    metaTitle: titleCandidate.length <= 50 ? titleCandidate : `Wishes in ${countryName}`,
    metaDescription: metaDescription(countryName, fact.occasions),
    intro: intro(countryName, fact, slug),
    occasions,
    greetingCustoms: greetingCustoms(countryName, fact, slug),
    sharingHabits: sharingHabits(countryName, fact, slug),
    sampleWishes: wishes(fact, slug),
    sensitivities: fact.sensitivities.map(clean),
    faqs: faqs(countryName, fact, slug),
    relatedOccasionKeys: ['birthday', 'wedding', 'thank-you'],
    relatedGuideSlugs: relatedGuides.slice(stableIndex(slug, 2), stableIndex(slug, 2) + 5),
    sources: fact.source.map((source) => ({ ...source, checked: source.checked || checkedDate })),
  };
  return content;
}

export function countCountryContentWords(content: CountryContent) {
  return wordCount([
    content.intro,
    ...content.occasions.flatMap((occasion) => [occasion.name, occasion.whenUsually, occasion.note]),
    ...content.greetingCustoms,
    content.sharingHabits,
    ...content.sampleWishes,
    ...content.sensitivities,
    ...content.faqs.flat(),
  ]);
}

export const generatedFactSlugs = Object.keys(countryFacts);
