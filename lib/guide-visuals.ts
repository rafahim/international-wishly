import type { Guide } from './guides';

export type GuideVisual = {
  src: string;
  alt: string;
  credit?: string;
  creditUrl?: string;
};

const local = (file: string, alt: string): GuideVisual => ({ src: `/template-shots/${file}.webp`, alt });
const generated = (file: string, alt: string): GuideVisual => ({ src: `/guide-images/${file}.webp`, alt });

// Pexels photos were selected from pages marked "Free" / "Free to use".
// Original creator and source-page links are retained for transparent credit.
const pexels = {
  birthdayFriends: {
    src: 'https://images.pexels.com/photos/7337028/pexels-photo-7337028.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-7337028.jpg&fm=jpg',
    alt: 'Three friends celebrating a birthday with a cake and candles',
    credit: 'Photo by Polina Tankilevitch on Pexels',
    creditUrl: 'https://www.pexels.com/photo/photo-of-a-girl-celebrating-a-birthday-with-her-friends-7337028/',
  },
  birthdayPortrait: {
    src: 'https://images.pexels.com/photos/36211817/pexels-photo-36211817.jpeg?cs=srgb&dl=pexels-rizkysabriansyah-36211817.jpg&fm=jpg',
    alt: 'A woman celebrating her birthday beside a candlelit cake',
    credit: 'Photo by Rizky Sabriansyah on Pexels',
    creditUrl: 'https://www.pexels.com/photo/birthday-celebration-with-candlelit-cake-36211817/',
  },
  birthdayParty: {
    src: 'https://images.pexels.com/photos/33038785/pexels-photo-33038785.jpeg?cs=srgb&dl=pexels-rebornfilmes-33038785.jpg&fm=jpg',
    alt: 'A birthday cake with glowing candles at a celebration',
    credit: 'Photo by Reborn Filmes on Pexels',
    creditUrl: 'https://www.pexels.com/photo/birthday-celebration-with-lit-candles-on-cake-33038785/',
  },
  proposal: {
    src: 'https://images.pexels.com/photos/29411166/pexels-photo-29411166.jpeg?cs=srgb&dl=pexels-ali-jabiyef-3221451-29411166.jpg&fm=jpg',
    alt: 'A proposal moment with a bouquet and engagement ring',
    credit: 'Photo by Ali Jabiyef on Pexels',
    creditUrl: 'https://www.pexels.com/photo/romantic-proposal-with-vibrant-bouquet-in-paris-29411166/',
  },
  wedding: {
    src: 'https://images.pexels.com/photos/34433179/pexels-photo-34433179.jpeg?cs=srgb&dl=pexels-jonathan-walker-1293043732-34433179.jpg&fm=jpg',
    alt: 'Wedding rings and keepsakes arranged for a wedding celebration',
    credit: 'Photo by Jonathan Walker on Pexels',
    creditUrl: 'https://www.pexels.com/photo/elegant-wedding-invitation-flat-lay-with-rings-34433179/',
  },
  friends: {
    src: 'https://images.pexels.com/photos/32454312/pexels-photo-32454312.jpeg?cs=srgb&dl=pexels-natha-soares-queiroz-2001868093-32454312.jpg&fm=jpg',
    alt: 'Two friends laughing together outdoors in a sunny park',
    credit: 'Photo by Nathã Soares Queiroz on Pexels',
    creditUrl: 'https://www.pexels.com/photo/joyful-friends-laughing-outdoors-on-a-sunny-day-32454312/',
  },
  couple: {
    src: 'https://images.pexels.com/photos/36114770/pexels-photo-36114770.jpeg?cs=srgb&dl=pexels-rebornfilmes-36114770.jpg&fm=jpg',
    alt: 'A couple sharing a quiet romantic moment outdoors',
    credit: 'Photo by Alexander Mass on Pexels',
    creditUrl: 'https://www.pexels.com/photo/romantic-couple-embracing-outdoors-at-sunset-36114770/',
  },
  letterWriting: {
    src: 'https://images.pexels.com/photos/6848795/pexels-photo-6848795.jpeg?cs=srgb&dl=pexels-cottonbro-6848795.jpg&fm=jpg',
    alt: 'A handwritten letter being written on elegant stationery',
    credit: 'Photo by cottonbro studio on Pexels',
    creditUrl: 'https://www.pexels.com/photo/a-person-writing-a-letter-6848795/',
  },
};

const birthdayBank: GuideVisual[] = [
  generated('birthday-cake-still-life', 'A pink birthday cake with glowing candles, roses and a wrapped gift'),
  pexels.birthdayFriends,
  pexels.birthdayPortrait,
  pexels.birthdayParty,
  local('the-birthday-experience', 'A birthday website template preview with a festive design'),
  local('birthday-cinema-memory-puzzle', 'A birthday website template designed around memories and photos'),
  local('birthday-letter-just-for-you', 'A personal birthday letter website template preview'),
  local('a-little-birthday-magic', 'A playful birthday website template preview'),
  local('the-birthday-times', 'A birthday newspaper-style website template preview'),
  local('birthday-for-friend', 'A birthday surprise website template for a friend'),
  local('shonar-upohar-birthday-invitation', 'A birthday invitation website template preview'),
];

const relationshipBank: GuideVisual[] = [
  pexels.couple,
  local('our-love-map', 'An anniversary website template about shared memories'),
  local('ever-after-cinematic', 'A romantic personal website template preview'),
  local('midnight-love', 'A romantic midnight-themed website template preview'),
  local('a-little-forever', 'A romantic letter website template preview'),
  local('valentine-2026', 'A Valentine personal website template preview'),
  local('miss-you-letter', 'A long-distance message website template preview'),
];

const weddingBank: GuideVisual[] = [
  pexels.wedding,
  local('blue-sky-wedding-invitation', 'A blue-sky digital wedding invitation template preview'),
  local('velvet-royale-wedding-invitation', 'A formal wedding invitation website template preview'),
  local('shubho-bibaho', 'A traditional wedding website template preview'),
  local('shubho-porinoy-sat-pak', 'A wedding story website template preview'),
];

const proposalBank: GuideVisual[] = [
  pexels.proposal,
  local('wedding-proposal', 'A romantic proposal website template preview'),
  local('arcade-propose', 'An interactive proposal website template preview'),
];

const friendshipBank: GuideVisual[] = [
  pexels.friends,
  pexels.birthdayFriends,
  local('best-friend-forever', 'A best-friend website template preview'),
  local('best-friend-arcade', 'An interactive best-friend website template preview'),
  local('a-coffee-with-friend', 'A friendship website template about sharing a coffee'),
  local('arcade-friendship', 'An interactive friendship website template preview'),
  local('best-friend-letter', 'A friendship letter website template preview'),
];

const letterBank: GuideVisual[] = [
  generated('romantic-letter-flatlay', 'A romantic envelope, keepsake photograph and pink ribbon on a dark surface'),
  pexels.letterWriting,
  local('love-letter', 'A digital love letter website template preview'),
  local('normal-letter', 'A simple personal letter website template preview'),
  local('prem-potro', 'A romantic digital letter template preview'),
  local('prem-kahini', 'A personal love-story website template preview'),
  local('a-little-birthday-letter', 'A folded-letter website template preview'),
  local('miss-you-letter', 'A letter website template for a long-distance message'),
];

const apologyBank: GuideVisual[] = [
  local('premium-sorry', 'An apology website template preview'),
  local('sorry', 'A simple apology website template preview'),
  local('sorry-letter-2', 'An apology letter website template preview'),
  local('lumen-sorry', 'A calm apology website template preview'),
  local('bengoli-sorry', 'An apology website template preview'),
];

const gratitudeBank: GuideVisual[] = [
  local('a-note-of-gratitude', 'A thank-you website template preview'),
  local('a-thousand-little-thanks', 'A gratitude message website template preview'),
  pexels.letterWriting,
];

function hash(value: string): number {
  return [...value].reduce((total, char) => (total * 31 + char.charCodeAt(0)) >>> 0, 7);
}
function pick(bank: GuideVisual[], slug: string): GuideVisual {
  return bank[hash(slug) % bank.length];
}

/** Provides a topic-matched cover for every published editorial guide. */
export function guideVisualFor(guide: Pick<Guide, 'slug' | 'category' | 'title'>): GuideVisual {
  const slug = guide.slug.toLowerCase();
  if (slug === 'wishly-international-guide-website') return { src: '/og-wishly-international.jpg', alt: 'Wishly International: website builder templates, ideas and guides on wishly.rafahim.com, with the main Wishly website at wishly.bd' };
  if (slug === 'how-to-write-birthday-website-message' || slug === 'birthday-website-message-examples') return pexels.letterWriting;
  if (slug === 'birthday-website-without-photos') return generated('romantic-letter-flatlay', 'A keepsake envelope and photograph illustrating a birthday message without photos');
  if (slug === 'birthday-photo-collage-website' || slug === 'birthday-memory-timeline-website') return local('birthday-cinema-memory-puzzle', 'A photo-led birthday website template for sharing memories');
  if (slug === 'mobile-friendly-birthday-website') return local('chat-message', 'A mobile phone preview of a personal website message');
  if (slug === 'birthday-quiz-website-ideas') return local('best-friend-arcade', 'An interactive quiz-style friendship website template preview');
  if (/wedding|invitation|rsvp|save-the-date|baby-shower/.test(slug)) return pick(weddingBank, slug);
  if (/proposal|propose/.test(slug)) return pick(proposalBank, slug);
  if (/best-friend|friendship|miss-you-website-for-a-friend/.test(slug) && !slug.includes('long-distance-partner')) return pick(friendshipBank, slug);
  if (/apology|sorry/.test(slug)) return pick(apologyBank, slug);
  if (/thank-you|gratitude|mentor|teacher-appreciation/.test(slug)) return pick(gratitudeBank, slug);
  if (/love-letter|digital-love-letter|letter/.test(slug)) return pick(letterBank, slug);
  if (/anniversary|relationship|valentine|long-distance|monthsary|surprise-website-for-boyfriend|miss-you/.test(slug)) return pick(relationshipBank, slug);
  if (/birthday|milestone|virtual-birthday/.test(slug)) return pick(birthdayBank, slug);
  if (guide.category === 'MESSAGES') return pick(letterBank, slug);
  return pick([generated('romantic-letter-flatlay', 'A romantic envelope and keepsake photograph on a dark surface'), pexels.letterWriting, ...birthdayBank], slug);
}
