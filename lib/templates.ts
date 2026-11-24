import raw from './templates.json';

export type Template = {
  slug: string;
  name: string;
  description: string;
  category: string;
  alsoCategories: string[];
  emoji: string;
  accent: string;
  demoHidden: boolean;
  language: 'English' | 'Bengali';
  premium: boolean;
};

// Clean English names and descriptions for the international audience.
// Templates written in Bengali keep their language tag so visitors know what they get.
const INTL: Record<string, { name?: string; description?: string; language?: 'Bengali' }> = {
  master: { name: 'Master Birthday Template', description: 'A cinematic birthday experience that opens with a 10-second countdown, then plays your photos, music, video and a personal message.' },
  'prem-potro': { name: 'Prem Potro: Bengali Love Letter', description: 'A sweet love letter in Bengali that says what is in your heart and ends with one question: will you be mine?', language: 'Bengali' },
  'wedding-proposal': { name: 'Wedding Proposal', description: 'A romantic wedding proposal page with a story, your photos and a big “Will you marry me?” finale.' },
  'sky-lantern': { name: 'Sky Lantern Proposal', description: 'Release lanterns into a night sky, say what you feel in Bengali and finish with the question that matters.', language: 'Bengali' },
  'prem-kahini': { name: 'Prem Kahini: Envelope Love Letter', description: 'Open an envelope and read a Bengali love letter that ends with a proposal.', language: 'Bengali' },
  'chat-message': { name: 'A Message for You: Chat Proposal', description: 'Messages arrive one by one in a phone chat, and the last one asks the big question. Written in Bengali.', language: 'Bengali' },
  'tumi-ki-amar-bondhu-hobe': { name: 'Will You Be My Friend? Kraft Paper', description: 'A friendship invitation drawn on kraft paper in Bengali. The NO button runs away.', language: 'Bengali' },
  'bati-ghor': { name: 'The Lighthouse: Miss You Story', description: 'A deep Bengali miss-you story built from a storm, the sea and a lighthouse, for someone far away.', language: 'Bengali' },
  'mone-pore': { name: 'Mone Pore: I Miss You', description: 'A premium Bengali miss-you experience made of memories, waiting and the words you could not say.', language: 'Bengali' },
  'lumen-sorry': { name: 'Lumen: Apology Magazine', description: 'An editorial-style apology magazine in Bengali that turns memories and regret into a real sorry.', language: 'Bengali' },
  'amader-chotto-mohabishwo': { name: 'Our Little Universe: Anniversary', description: 'A cinematic Bengali anniversary journey with star messages, small promises and a surprise.', language: 'Bengali' },
  'jonmodiner-chotto-bagan': { name: 'The Little Birthday Garden', description: 'Walk through a flower garden of birthday wishes, petal messages and your own bouquet. Written in Bengali.', language: 'Bengali' },
  'shubho-porinoy-sat-pak': { name: 'Shubho Porinoy: Seven Vows Wedding Story', description: 'An emotional Bengali wedding story with seven lamps, seven vows, personal memories and music.', language: 'Bengali' },
  'bengoli-sorry': { name: 'Golden Sorry (Kintsugi)', description: 'A golden Kintsugi-style apology letter in Bengali about mending what was broken.', language: 'Bengali' },
  'sorry-bengoli-version': { name: 'Golden Sorry Story: Eight Chapters', description: 'An eight-chapter golden apology story in Bengali that ends with a heartfelt question.', language: 'Bengali' },
  'shubho-bibaho': { name: 'Shubho Bibaho: Bengali Wedding Invitation', description: 'A royal maroon-and-gold Bengali wedding invitation with couple names, event details, a venue map and a live countdown.', language: 'Bengali' },
  'shonar-upohar-birthday-invitation': { name: 'Golden Gift: Birthday Invitation', description: 'A birthday invitation with a floating 3D gift box, a golden seal reveal, event details and a live countdown.', language: 'Bengali' },
  'live-bodcast-with-bestu': { name: 'Live Broadcast with Your Bestie', description: 'A glamorous live-broadcast awards night where your best friend is the winner.' },
  'neon-nexus-vip-invitation': { name: 'Neon Nexus: VIP Invitation' },
  sorry: { name: 'Sorry: Rainy Window Letter' },
  'miss-you-1': { name: 'Cherry Blossom Miss You Letter', description: 'A love letter under falling cherry blossoms for the person you miss.' },
  'a-little-birthday-letter': { name: 'The Lavender Birthday Letter' },
};

const PREMIUM = new Set(['the-birthday-experience']);
const BENGALI_RE = /[\u0980-\u09FF]/;

export const templates: Template[] = (raw as any[]).map((t) => {
  const o = INTL[t.slug] || {};
  const language: 'English' | 'Bengali' = o.language || (BENGALI_RE.test(t.name + t.description) ? 'Bengali' : 'English');
  return {
    slug: t.slug,
    name: o.name || t.name,
    description: o.description || t.description,
    category: t.category,
    alsoCategories: t.alsoCategories || [],
    emoji: t.emoji,
    accent: t.accent,
    demoHidden: !!t.demoHidden,
    language,
    premium: PREMIUM.has(t.slug),
  };
});

export const OCCASIONS: Record<string, { label: string; emoji: string }> = {
  birthday: { label: 'Birthday', emoji: '🎂' },
  proposal: { label: 'Proposal', emoji: '💍' },
  wedding: { label: 'Wedding', emoji: '💒' },
  'miss-you': { label: 'Miss You', emoji: '💌' },
  sorry: { label: 'Sorry', emoji: '🥺' },
  letter: { label: 'Letter', emoji: '✉️' },
  anniversary: { label: 'Anniversary', emoji: '💞' },
  'best-friend': { label: 'Best Friend', emoji: '🤝' },
  friendship: { label: 'Friendship', emoji: '🫶' },
  invitation: { label: 'Invitation', emoji: '🎟️' },
  'thank-you': { label: 'Thank You', emoji: '💐' },
};

export const occasionLabel = (c: string) => OCCASIONS[c]?.label || c.replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
export const occasionEmoji = (c: string) => OCCASIONS[c]?.emoji || '✦';

const cats = (t: Template) => [t.category, ...t.alsoCategories];
export const templatesFor = (category: string) => templates.filter((t) => cats(t).includes(category));
export const occasionList = Object.keys(OCCASIONS)
  .map((key) => ({ key, label: occasionLabel(key), emoji: occasionEmoji(key), count: templatesFor(key).length }))
  .filter((o) => o.count > 0);
export const bySlug = (slug: string) => templates.find((t) => t.slug === slug);

export const coverSrc = (slug: string) => `/template-shots/${encodeURIComponent(slug)}.webp`;
export const coverSet = (slug: string) =>
  `/template-shots/sm/${encodeURIComponent(slug)}-480.webp 480w, /template-shots/sm/${encodeURIComponent(slug)}-720.webp 720w, ${coverSrc(slug)} 960w`;
export const COVER_SIZES = '(max-width: 640px) 100vw, (max-width: 1020px) 50vw, 400px';
