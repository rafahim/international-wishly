export type GuideSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type Guide = {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  sections: GuideSection[];
  conclusion: string;
  relatedPath: string;
  relatedLabel: string;
};

export const guides: Guide[] = [
  {
    slug: 'birthday-website-ideas',
    category: 'BIRTHDAYS',
    readTime: '5 MIN READ',
    title: '9 birthday website ideas that feel personal, not predictable',
    seoTitle: '9 Birthday Website Ideas for a Personal Online Surprise',
    description: 'Find thoughtful birthday website ideas, from a shared-memory timeline to a photo-led letter, and learn how to make a page feel like it was made for one person.',
    intro: 'A birthday website does not have to be a giant production. The strongest ones usually begin with one real detail: a favourite place, a running joke, a photograph you both love or a sentence you have been meaning to say. Use these ideas as a starting point, then choose only the parts that fit the person.',
    sections: [
      { heading: '1. Build the page around one shared memory', paragraphs: ['Choose a moment that belongs to the two of you: the day you met, a trip that went slightly wrong, or an ordinary afternoon that became a favourite. Give that memory the opening scene and let the birthday message follow it.', 'A specific detail is more memorable than a generic birthday slogan. It also helps the recipient understand immediately why you made the page.'] },
      { heading: '2. Make a small photo timeline', paragraphs: ['Pick three to six photographs that show a little progression. They might be from different years, different places or different versions of the same friendship. Add a short caption to each one if it adds context.', 'Avoid uploading every photograph you own. A considered sequence invites someone to look; a huge collection can feel like a folder they need to sort through.'] },
      { heading: '3. Add a note that sounds like your voice', paragraphs: ['Write as though you were speaking to the person across a table. Mention what you appreciate about them and one thing you hope the next year brings. Keep the opening line simple and let the personal details carry the message.'] },
      { heading: '4. Choose a visual mood that suits them', bullets: ['Bright and playful for someone who loves a celebration.', 'Minimal and calm for someone who prefers a quieter gesture.', 'Cinematic or story-led for someone who enjoys a reveal.', 'A letter or scrapbook style for someone who saves keepsakes.'], paragraphs: ['The best-looking template is not always the best choice. Think about how the recipient would like to experience the surprise.'] },
      { heading: '5. Add music only when it belongs', paragraphs: ['A favourite song can make a page feel familiar, but it should not compete with the message. Use music where the selected template supports it, and consider that some people open links in public or with their phone muted. The page should still make sense without sound.'] },
      { heading: '6. Include a tiny “next year” promise', paragraphs: ['Close with something to look forward to: a coffee date, a visit, a shared plan or a promise to take more pictures together. It gives the page an ending that points beyond the birthday itself.'] },
      { heading: '7. Make the first screen clear', paragraphs: ['Use the recipient’s name and the reason for the page near the beginning. A beautiful reveal can be fun, but make sure the person knows what they are opening and can find the main message without guessing.'] },
      { heading: '8. Check it on a phone before sending', bullets: ['Read the headings at normal screen size.', 'Check that names and dates are correct.', 'Open every reveal or interactive element once.', 'Make sure the message still works with sound off.'], paragraphs: ['Most people will open a shared page from a phone notification. A quick mobile preview catches small problems before the surprise arrives.'] },
      { heading: '9. Send it with a line of its own', paragraphs: ['Do not let the link arrive without context. A short message such as “I made you a little something” gives the recipient a reason to open it. Send it at a time when they are likely to have a moment, especially when time zones are involved.'] },
    ],
    conclusion: 'Start with one memory and one honest wish. The template can provide the visual structure; the detail that makes the page unforgettable has to come from you.',
    relatedPath: '/templates/birthday/',
    relatedLabel: 'Explore birthday designs',
  },
  {
    slug: 'digital-love-letter',
    category: 'LETTERS',
    readTime: '4 MIN READ',
    title: 'How to write a digital love letter that still feels like a letter',
    seoTitle: 'How to Write a Digital Love Letter That Feels Personal',
    description: 'A practical guide to writing a digital love letter: find one clear idea, use specific memories, choose a calm layout and make the ending feel sincere.',
    intro: 'A digital love letter can have animation, photographs or an envelope that opens on screen. But the design is only the setting. What makes it feel like a letter is the thought behind the words: a voice the recipient recognises, a memory they share and a message that does not sound copied from somewhere else.',
    sections: [
      { heading: 'Decide what the letter is really about', paragraphs: ['Before writing, finish this sentence: “I wanted to write because…” Maybe you want to thank someone, tell them what they mean to you, mark a milestone or say something that is easier to write than to say out loud.', 'Keeping one central idea gives the letter direction. You can include other feelings, but they should support the main reason you started.'] },
      { heading: 'Open with something only they would recognise', paragraphs: ['A small shared detail makes a strong opening: the nickname they pretend to dislike, a place you both remember or the ordinary routine you look forward to. It does not need to be dramatic. It only needs to be true.'] },
      { heading: 'Use examples instead of a list of compliments', paragraphs: ['Rather than writing “you are kind”, describe the time they noticed someone was left out. Instead of “you make me happy”, mention the small thing they do that changes an ordinary day. Examples give affection a shape.', 'You do not need to fill every paragraph with a story. One or two specific moments can carry a short letter.'] },
      { heading: 'Keep the paragraphs short', bullets: ['Give each paragraph one thought.', 'Use familiar words instead of trying to sound poetic.', 'Read the letter aloud and change sentences that do not sound like you.', 'Leave space between ideas so the message is easy to read on a phone.'], paragraphs: ['A digital page is not a printed sheet. Short paragraphs and clear spacing make it more comfortable to read on a small screen.'] },
      { heading: 'Choose a design that supports the tone', paragraphs: ['An envelope or handwritten-style template can suit a quiet message. A photo-led layout may work better when the letter is tied to shared memories. Keep decorative effects secondary to readability, and do not add every option simply because it is available.'] },
      { heading: 'Give the final line room', paragraphs: ['The last sentence should feel like a natural close, not a slogan. You might make a small promise, say what you hope for next or simply sign your name. A little restraint can make the ending more powerful.'] },
    ],
    conclusion: 'A digital letter can look different from an envelope in the post and still feel deeply personal. Write honestly first; choose the visual experience second.',
    relatedPath: '/templates/letter/',
    relatedLabel: 'Browse letter designs',
  },
  {
    slug: 'online-proposal-website',
    category: 'PROPOSALS',
    readTime: '5 MIN READ',
    title: 'Planning an online proposal page? Start with the person, not the effect',
    seoTitle: 'How to Plan an Online Proposal Website: A Thoughtful Guide',
    description: 'Plan an online proposal page with a personal story, a clear question, a design that suits the recipient and a considerate way to share the link.',
    intro: 'A proposal website can be a playful surprise or a quiet digital letter. There is no single correct style. The useful question is not how elaborate the reveal can be, but what would make the other person feel seen and comfortable in that moment.',
    sections: [
      { heading: 'Start by deciding what you are asking', paragraphs: ['A proposal might mean asking someone to be your partner, inviting them to a special date or asking a lifelong question. Make the purpose clear to yourself before you choose a template. The wording and tone should fit the relationship and the question.', 'For a major life decision, a web page should never replace the conversation or the recipient’s freedom to answer honestly. Treat the page as a thoughtful way to express yourself, not as pressure.'] },
      { heading: 'Choose the right emotional pace', bullets: ['A short letter works for a quiet, direct message.', 'A story-led design can revisit how you met before the question appears.', 'A playful template suits a relationship where humour is part of the connection.', 'A cinematic reveal can add anticipation when the recipient enjoys surprises.'], paragraphs: ['The page should feel like something the recipient would enjoy opening. Avoid choosing an elaborate effect just because it looks impressive in a preview.'] },
      { heading: 'Include a detail from your shared history', paragraphs: ['Use a place, a date, a phrase or a small moment that would make sense to the two of you. One recognisable detail can do more than a long introduction full of general romantic language.'] },
      { heading: 'Keep the actual question easy to find', paragraphs: ['Do not bury the question under too many screens or paragraphs. Make it legible, direct and free of confusing wording. If the template has a reveal or final screen, preview it carefully so the important line is not hidden by a button or image.'] },
      { heading: 'Think about when and how to share it', paragraphs: ['Consider the recipient’s time zone, privacy and day. A link sent during a busy meeting or in a public group may not create the moment you intended. Add a simple message that gives them context and lets them open the page when they are ready.'] },
      { heading: 'Preview it as the recipient will see it', bullets: ['Open the page on a phone.', 'Check every name, photograph and message.', 'Test any interactive reveal before sending.', 'Make sure the page still works if the recipient has sound turned off.'], paragraphs: ['A calm final check is more valuable than adding one more animation at the last minute.'] },
    ],
    conclusion: 'A thoughtful proposal page is not measured by how many effects it contains. It works when the words are clear, the tone fits the relationship and the other person has room to respond in their own way.',
    relatedPath: '/templates/proposal/',
    relatedLabel: 'Explore proposal designs',
  },
];

export const guideBySlug = (slug: string) => guides.find((guide) => guide.slug === slug);
