import { additionalGuides } from './additional-guides';
import { seoGuides } from './seo-guides';
import { seoGuides2 } from './seo-guides-2';
import { internationalWishesInsight } from './global-insight';
export type GuideSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type Guide = {
  slug: string;
  primaryKeyword?: string;
  supportingKeywords?: string[];
  faqs?: [string, string][];
  relatedGuides?: string[];
  publishedAt?: string;
  updatedAt?: string;
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
  internationalWishesInsight,
  {
    slug: 'wishly-international-guide-website',
    primaryKeyword: 'Wishly international insights website',
    supportingKeywords: ['wishly.rafahim.com', 'Wishly.bd main website', 'what is Wishly international', 'Wishly insights and templates', 'Wishly worldwide'],
    relatedGuides: ['how-to-make-a-birthday-website', 'birthday-website-ideas', 'digital-love-letter', 'online-proposal-website'],
    faqs: [
      ['Is wishly.rafahim.com the official Wishly website?', 'It is the international Insights and template-discovery website for Wishly. The main Wishly product website is wishly.bd, where accounts, the editor, publishing and checkout live.'],
      ['Do I create my page on wishly.rafahim.com?', 'No. Browse designs and read practical insights on wishly.rafahim.com, then continue to wishly.bd to sign up, personalise a template and publish your page.'],
      ['Will my existing Wishly pages or account change?', 'No. Your account, pages and links stay on wishly.bd. This international website provides insights, template previews and occasion collections in English.'],
      ['Which language is the international site in?', 'English first. Some templates in the catalogue are Bengali-language experiences, and each template card shows its language label so you can choose the right one for the recipient.'],
    ],
    publishedAt: '2026-11-25', updatedAt: '2026-11-25',
    category: 'ANNOUNCEMENT',
    readTime: '4 MIN READ',
    title: 'Wishly is now international: explore insights on wishly.rafahim.com and create on wishly.bd',
    seoTitle: 'Wishly Insights and Wishly.bd',
    description: 'Explore Wishly Insights for international ideas and template previews, then visit wishly.bd to create an account, edit your page and publish it.',
    intro: 'Wishly now has two websites with two clear jobs. wishly.bd is the main Wishly website, where you create an account, personalise a template and publish your page. wishly.rafahim.com is the international insights website, written in English for people anywhere who want ideas, template previews and practical advice before they start.',
    sections: [
      { heading: 'The short version', paragraphs: ['If you want to make a page, go to wishly.bd. If you want to explore, compare and get inspired first, use wishly.rafahim.com.'], bullets: ['wishly.bd: main product website. Sign-up, login, visual editor, dashboard, checkout, publishing and page management.', 'wishly.rafahim.com: international insights website. English-first articles, occasion collections, template previews and answers to common questions.'] },
      { heading: 'Why Wishly needed an international Insights website', paragraphs: ['People who send a wish online are not all in one country. Someone planning a birthday surprise for a friend overseas, a proposal page for a partner in another time zone or an invitation for guests in several countries searches in English and wants clear answers before signing up for anything.', 'The main website is built for people who are ready to create. The Insights section is built for the step before that: choosing an occasion, understanding what a personal page can include and picking a design that suits the recipient.'] },
      { heading: 'What you will find on wishly.rafahim.com', bullets: ['Practical articles for birthdays, proposals, weddings, anniversaries, apologies, thank-you notes and letters.', 'Occasion collections that group templates by moment, so you can start from a feeling rather than a catalogue.', 'Template pages with previews, descriptions and a language label for every design.', 'A step-by-step walkthrough of how a personal page is made, and an FAQ for first-time visitors.', 'A plain-language page explaining what Wishly is, for anyone who has only heard the name.'], paragraphs: ['Every page links onward to wishly.bd when you are ready to create, so there is never a dead end.'] },
      { heading: 'What stays on wishly.bd', paragraphs: ['Nothing about your account or your pages moves. Wishly.bd remains the place for everything that needs you to be signed in or to pay: creating an account, opening the visual editor, personalising text and photos, adding music or video where a template supports it, publishing a link and managing the pages you have already made.'], bullets: ['Account, login and dashboard', 'Visual editor and template personalisation', 'Publishing, sharing links and page management', 'Checkout and payments'] },
      { heading: 'How to use the two websites together', paragraphs: ['A simple flow works well for most people.'], bullets: ['Start on wishly.rafahim.com with an insight for your occasion, such as birthday website ideas or how to write a digital love letter.', 'Open an occasion collection and preview two or three designs. Check the language label so the recipient can read it comfortably.', 'Choose a template and continue to wishly.bd with its “Use template” button.', 'Personalise it in the editor, preview it on a phone, publish and share the link.'] },
      { heading: 'A note on languages and regions', paragraphs: ['The Insights section is English-first so that it is useful worldwide. The template library includes English designs and some Bengali-language experiences. We do not promise region-specific pricing, payment methods or feature availability here; those details are decided on the main website and may differ by template.'] },
      { heading: 'Where to start today', paragraphs: ['Read the overview on the “What is Wishly?” page if you are new to the name, browse Insights if you want ideas, or go straight to the template library if you already know the occasion. When you have found a design you like, wishly.bd is one click away.'] },
    ],
    conclusion: 'Think of wishly.rafahim.com as the place to explore and wishly.bd as the place to create. Together they take you from a first idea to a published page you can share with one link, wherever the recipient lives.',
    relatedPath: '/what-is-wishly/',
    relatedLabel: 'Read what Wishly is',
  },
  {
    slug: 'birthday-website-ideas',
    primaryKeyword: 'birthday website ideas',
    supportingKeywords: ['birthday website inspiration', 'personal online birthday surprise', 'birthday page design ideas'],
    relatedGuides: ['how-to-make-a-birthday-website', 'birthday-website-for-girlfriend', 'birthday-surprise-website-for-best-friend'],
    faqs: [
      ['What makes a birthday website feel personal?', 'Build the page around a real memory, choose a few meaningful photographs and write a message that sounds like you.'],
      ['How many sections should a birthday website have?', 'There is no fixed number. A short page with a clear opening, a few memories and one closing wish is often enough.'],
      ['Can I share a birthday website with someone overseas?', 'Yes. Share the published link and consider the recipient’s time zone, language and mobile connection.'],
    ],
    publishedAt: '2026-11-24', updatedAt: '2026-11-24',
    category: 'BIRTHDAYS',
    readTime: '5 MIN READ',
    title: '9 birthday website ideas that feel personal, not predictable',
    seoTitle: '9 Birthday Website Ideas for a Personal Online',
    description: 'Find thoughtful birthday website ideas, from a shared-memory timeline to a photo-led letter, and learn how to make a page feel like it was made for one.',
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
    primaryKeyword: 'how to write a digital love letter',
    supportingKeywords: ['digital love letter message', 'online love letter', 'personal romantic letter'],
    relatedGuides: ['digital-love-letter-website-ideas', 'miss-you-website-for-long-distance', 'anniversary-website-ideas'],
    faqs: [
      ['How do you start a digital love letter?', 'Begin with one honest reason for writing and a shared detail the recipient will recognise.'],
      ['What should a digital love letter include?', 'A clear central idea, one or two specific memories, sincere examples and a natural closing line.'],
      ['Should a digital love letter have music?', 'Only when it supports the message. Make sure the letter still works when the recipient has sound turned off.'],
    ],
    publishedAt: '2026-11-24', updatedAt: '2026-11-24',
    category: 'LETTERS',
    readTime: '4 MIN READ',
    title: 'How to write a digital love letter that still feels like a letter',
    seoTitle: 'How to Write a Digital Love Letter That Feels',
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
    primaryKeyword: 'private proposal website ideas',
    supportingKeywords: ['private online proposal page', 'proposal website privacy', 'share a proposal page thoughtfully'],
    relatedGuides: ['proposal-website-ideas', 'digital-love-letter-website-ideas', 'anniversary-website-ideas'],
    faqs: [
      ['What is an online proposal website?', 'It is a personal webpage that uses a short story, photos or a letter to express a proposal or relationship question.'],
      ['What should I consider before sending a proposal page?', 'Think about the recipient’s preferences, privacy and timing. Keep the question clear and give the person room to respond freely.'],
      ['Can a proposal page replace an important conversation?', 'A page can help express your feelings, but an important relationship decision should leave space for a real conversation.'],
    ],
    publishedAt: '2026-11-24', updatedAt: '2026-11-24',
    category: 'PROPOSALS',
    readTime: '5 MIN READ',
    title: 'Private proposal website ideas: make the moment feel comfortable',
    seoTitle: 'How to Plan an Online Proposal Website: A',
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
  {
    slug: 'birthday-website-for-girlfriend',
    primaryKeyword: 'birthday website for girlfriend',
    supportingKeywords: ['birthday website for her', 'online birthday surprise for girlfriend', 'romantic birthday webpage', 'personalized birthday page for girlfriend'],
    category: 'BIRTHDAYS', readTime: '6 MIN READ',
    title: 'How to make a birthday website for your girlfriend feel like her',
    seoTitle: 'Birthday Website for Girlfriend: Ideas for a',
    description: 'Plan a thoughtful birthday website for your girlfriend with shared memories, a personal note, a photo sequence and a design that matches her personality.',
    intro: 'A birthday website for your girlfriend can be romantic without feeling copied from a movie. The details that make it special are usually familiar ones: a place you both remember, a phrase she uses, a photograph that makes you laugh or something you have wanted to thank her for. Build the page around her, not around a list of effects.',
    sections: [
      { heading: 'Start with the kind of surprise she would actually enjoy', paragraphs: ['Think about how she likes to celebrate. Does she enjoy a playful reveal, a quiet handwritten note, a photo album or a page that tells a story? Choose the experience first. A simple letter can feel more intimate than a complicated animation when that is what suits her.', 'If she prefers private moments, send the link directly rather than posting it publicly. A personal birthday page should make her feel considered, not put on display.'] },
      { heading: 'Choose three memories instead of every photograph', paragraphs: ['Pick a small sequence: one early memory, one ordinary moment you both love and one recent photograph. Give each image a short caption only when it adds context. The goal is to help her remember why the moment matters, not to make her scroll through your entire camera roll.', 'Use photographs you have permission to share and check that they look clear on a phone. A well-chosen image with a one-line story is often enough.'] },
      { heading: 'Write a birthday note in your own voice', bullets: ['Open with her name or a familiar phrase.', 'Mention one specific thing you appreciate about her.', 'Include a memory that only the two of you understand.', 'End with a sincere wish for the year ahead.'], paragraphs: ['Avoid writing what you think a romantic birthday message is supposed to sound like. Read the note out loud. If a sentence would feel unnatural in a real conversation, rewrite it.'] },
      { heading: 'Use music and visual effects with a light touch', paragraphs: ['A favourite song can create a strong association, but it should be optional. Some people open links in public, at work or with their phone muted. Make sure the main message is understandable without sound, and use motion only where it helps the page unfold.', 'Check the exact features available in the template you choose. Designs can support different combinations of text, images, audio and interactive elements.'] },
      { heading: 'Preview it as she will open it', bullets: ['Open the finished page on a phone.', 'Check the spelling of her name and any dates.', 'Test every button, reveal and media element.', 'Make sure the first screen explains what the page is.'], paragraphs: ['Send the link with a short personal message so she knows it is from you. If you are in different time zones, think about when she will have time to enjoy it.'] },
    ],
    conclusion: 'A good birthday website for your girlfriend is not a performance. It is a small collection of details that show you paid attention. Start with one real memory, write what you mean and let the design support the message.',
    relatedPath: '/templates/birthday/', relatedLabel: 'Browse birthday website templates',
    relatedGuides: ['birthday-website-for-boyfriend', 'how-to-write-birthday-website-message', 'birthday-website-ideas'],
    faqs: [
      ['What should I put on a birthday website for my girlfriend?', 'Use her name, a personal birthday message, a few meaningful photos and one or two shared memories. Add music or an interactive reveal only if she would enjoy it.'],
      ['How do I make a romantic birthday website feel personal?', 'Use details that belong to your relationship rather than generic romantic quotes: a familiar place, a shared joke, a small habit or a moment you appreciate.'],
      ['Can I send a birthday website to my girlfriend in another country?', 'Yes. Share the published page link and consider her local time, mobile connection and preferred language when you send it.'],
    ],
    publishedAt: '2026-11-24', updatedAt: '2026-11-24',
  },
  {
    slug: 'birthday-website-for-boyfriend',
    primaryKeyword: 'birthday website for boyfriend',
    supportingKeywords: ['birthday website for him', 'birthday surprise website for boyfriend', 'online birthday gift for boyfriend', 'personal birthday webpage for him'],
    category: 'BIRTHDAYS', readTime: '5 MIN READ',
    title: 'Birthday website for your boyfriend: make the surprise sound like you',
    seoTitle: 'Birthday Website for Boyfriend: Personal Surprise',
    description: 'Create a birthday website for your boyfriend with inside jokes, favourite photos, a sincere message and a visual style that fits his personality.',
    intro: 'The best birthday website for your boyfriend is the one he recognises as yours. It might be funny, understated, romantic or full of little references that would mean nothing to anyone else. Decide what kind of reaction you hope to create, then build a short page around the details that make your relationship yours.',
    sections: [
      { heading: 'Choose a tone that fits his personality', paragraphs: ['A playful page can work well if teasing and humour are part of your relationship. A minimal photo story might suit someone who prefers quieter gestures. A letter-style layout can be right when you have something sincere to say. Do not choose a dramatic design just because it looks impressive in a preview.', 'Think about what he would enjoy opening on his phone. The best template is the one that fits the recipient, not simply the one with the most animation.'] },
      { heading: 'Use an inside joke as the opening', paragraphs: ['A nickname, a favourite snack, a travel mishap or a line you repeat to each other can make the first screen feel unmistakably personal. Add a short explanation if a memory needs context, but leave some room for the reference to speak for itself.', 'A small detail can be more memorable than a long list of generic compliments.'] },
      { heading: 'Build a short story with photos', bullets: ['Choose two or three images from different moments.', 'Put them in an order that makes sense: then, a favourite memory, now.', 'Add short captions that explain why each image matters.', 'Use recent, clear images that crop well on mobile.'], paragraphs: ['You do not need a large gallery. A few pictures that carry a story can make the page easier to explore and more meaningful to revisit.'] },
      { heading: 'Write a message that balances fun and affection', paragraphs: ['Start with the way you normally speak to him. Mention a quality you admire and one moment when you saw it. If you want to include humour, keep the joke kind and make sure the final message still communicates what you want him to know.', 'Close with something concrete to look forward to: a meal, a day out, a trip or another ordinary plan you are excited to share.'] },
      { heading: 'Check the link before the birthday', paragraphs: ['Preview every section on a phone, check names and dates, and test any music or interactive features. Send the link with a line of context instead of dropping an unfamiliar URL into the chat. For a long-distance birthday, choose a time that works for his local day.'] },
    ],
    conclusion: 'Make the page feel like a small piece of your relationship. A clear message, a few photographs and one detail only he will recognise are enough to turn a template into a personal birthday surprise.',
    relatedPath: '/templates/birthday/', relatedLabel: 'Explore birthday page designs',
    relatedGuides: ['birthday-website-for-girlfriend', 'birthday-surprise-website-for-best-friend', 'how-to-write-birthday-website-message'],
    faqs: [
      ['What can I write on my boyfriend’s birthday website?', 'Write in your normal voice. Mention something you admire, a shared memory and one thing you look forward to doing together.'],
      ['Should a birthday website for him be funny or romantic?', 'Choose the tone he would enjoy. A playful opening with a sincere closing often works, but a calm letter may fit him better.'],
      ['Can a birthday website work as a digital gift?', 'It can be a thoughtful digital gesture, especially when you personalise it with your own words and photographs. It does not need to replace a physical gift.'],
    ],
    publishedAt: '2026-11-24', updatedAt: '2026-11-24',
  },
  {
    slug: 'birthday-surprise-website-for-best-friend',
    primaryKeyword: 'best friend birthday page ideas with inside jokes',
    supportingKeywords: ['best friend birthday page inside jokes', 'friendship memory page', 'birthday website for close friend'],
    category: 'FRIENDSHIP', readTime: '5 MIN READ',
    title: 'A birthday website for your best friend: funny, specific and full of memories',
    seoTitle: 'Best Friend Birthday Page Ideas Built on Inside Jokes',
    description: 'Plan a best-friend birthday page around shared jokes, favourite photos and a friendship timeline. Use details only your friend will recognise.',
    intro: 'A best friend birthday surprise works best when it could only be for that person. You do not need a grand speech or a perfect collection of photographs. Use the moments that define your friendship: the joke that never gets old, the plan that went wrong, the small ritual you still keep or the reason you trust them.',
    sections: [
      { heading: 'Turn an inside joke into the first screen', paragraphs: ['Start with a phrase, nickname or reference your friend will recognise immediately. It gives the page a warm, funny opening and makes it feel different from a generic birthday card. If the joke needs a little explanation, add it as a caption later in the page.', 'Keep humour affectionate. The aim is to make your friend laugh and feel appreciated, not to embarrass them.'] },
      { heading: 'Make a friendship timeline', paragraphs: ['Choose a few points in your history: how you met, a favourite shared day, a difficult moment you got through and something you are planning next. Three or four moments are enough to create a story without turning the page into a biography.', 'Use images that both of you would be comfortable sharing. If a photograph includes other people, think about their privacy too.'] },
      { heading: 'Invite other friends to contribute outside the page', paragraphs: ['If this is a group surprise, collect short notes or photos from friends before you finish the page. Ask everyone for one specific memory or one sentence about what they appreciate. Edit lightly for length so the final experience remains easy to read.', 'Only include contributions that people have agreed to share. A private group chat is often the easiest place to gather them.'] },
      { heading: 'End with the sincere part', paragraphs: ['After the jokes and photographs, say what your friend means to you. Be specific: perhaps they show up when plans change, make ordinary days lighter or have encouraged you through a difficult season. A few honest lines can give the whole page a satisfying ending.', 'A birthday wish can also point towards the next shared plan, such as a meal, a trip or a new tradition.'] },
      { heading: 'Send it in a way that feels natural', bullets: ['Preview the page on a phone.', 'Check that inside jokes are kind and understandable.', 'Confirm everyone is comfortable with shared photos.', 'Send the link privately or in the group where your friend will see it.'], paragraphs: ['A short note such as “We made a little something for you” is enough to introduce the link.'] },
    ],
    conclusion: 'Friendship is full of small references that no template can invent. Use those details, keep the page light enough to enjoy and give your friend one clear reason to feel celebrated.',
    relatedPath: '/templates/best-friend/', relatedLabel: 'Browse best-friend designs',
    relatedGuides: ['birthday-website-for-girlfriend', 'birthday-website-for-boyfriend', 'birthday-website-ideas'],
    faqs: [
      ['What are good ideas for a best friend birthday website?', 'Try an inside-joke opening, a short friendship timeline, a few favourite photos and a closing message that says what you appreciate about them.'],
      ['Can several friends help make one birthday page?', 'Yes. You can collect short notes or photos from friends and add the contributions that the selected template supports. Ask permission before publishing anyone’s content.'],
      ['How do I make a funny birthday website without being mean?', 'Use jokes that are already part of your friendship and avoid private or sensitive subjects. Balance the humour with a sincere note.'],
    ],
    publishedAt: '2026-11-24', updatedAt: '2026-11-24',
  },
  {
    slug: 'how-to-make-a-birthday-website',
    primaryKeyword: 'birthday website layout checklist',
    supportingKeywords: ['birthday website sections', 'birthday page layout checklist', 'what to include on a birthday website'],
    category: 'HOW TO', readTime: '7 MIN READ',
    title: 'Birthday website layout checklist: what to include and where',
    seoTitle: 'How to Make a Birthday Website: Step-by-Step',
    description: 'Use this birthday website layout checklist to plan a clear opening, memory section, message and closing. See what to prepare before choosing a design.',
    intro: 'You do not need to know web design to make a birthday website. A template-led builder can give you the layout; your part is choosing the right experience and adding the details that make it personal. This guide walks through the decisions in the order that makes the process easier.',
    sections: [
      { heading: '1. Decide who the page is for and what it should do', paragraphs: ['A birthday page for a partner may be a romantic note; a page for a friend may be funny; a family page may focus on memories and gratitude. Write down the recipient, the tone and the one thing you most want them to remember. This small brief will help you choose a design.', 'Decide whether the page is a private surprise for one person or an invitation that several guests need to read. The audience changes what information belongs near the top.'] },
      { heading: '2. Choose a birthday website template', paragraphs: ['Browse by occasion and look at the full preview, not only the thumbnail. Check whether the design supports the elements you want, such as editable text, photographs, video, music or a reveal. Template features can vary, so confirm the available controls before planning around them.', 'Choose readability over decoration. A simple design that suits the recipient is usually easier to personalise than one that needs lots of extra content to make sense.'] },
      { heading: '3. Prepare your message and media', bullets: ['Write a short opening that names the recipient.', 'Choose a few photographs with a clear story.', 'Draft the main birthday wish in your own voice.', 'Prepare captions and any supported media before editing.'], paragraphs: ['Gathering the content first helps you avoid adding images simply to fill space. Use photos you have permission to share and keep private details out of a public link.'] },
      { heading: '4. Personalise the page in the editor', paragraphs: ['Replace sample text with your own words and check that every heading still makes sense. Add photographs where the design supports them, then adjust the text length so it fits comfortably. If a template offers music or animation, use it only when it improves the message.', 'Do not assume every template has the same controls. Use the editing options shown for the design you selected.'] },
      { heading: '5. Preview, test and publish', bullets: ['Open the preview on a phone and a desktop browser.', 'Check the recipient’s name, dates, spelling and image crops.', 'Test links, buttons, reveals and media.', 'Read the page once with sound off.'], paragraphs: ['Publish only after the preview feels complete. If the service allows edits after publishing, keep the account details somewhere you can find them.'] },
      { heading: '6. Share the link with the right context', paragraphs: ['Send the link through a channel the recipient uses, with a short line explaining that you made something for them. If the person lives in another time zone, check their local time and avoid sending it when they are likely to be busy.', 'For an invitation-style birthday page, make sure guests can quickly find the date, location and response instructions.'] },
    ],
    conclusion: 'Making a birthday website is a sequence of small choices: know the recipient, choose a fitting template, write a genuine message, add only useful media and test the finished page. The personal details matter more than the number of effects.',
    relatedPath: '/templates/birthday/', relatedLabel: 'Choose a birthday website template',
    relatedGuides: ['birthday-website-ideas', 'birthday-website-for-girlfriend', 'birthday-website-vs-digital-birthday-card'],
    faqs: [
      ['Can I make a birthday website without coding?', 'Yes. With a template-based builder, you choose a design and edit the supported content instead of writing code or arranging hosting yourself.'],
      ['What should a birthday website include?', 'A clear greeting, the recipient’s name, a personal message and a small number of meaningful photos are a useful starting point. Other features depend on the template.'],
      ['Can I make a birthday website on my phone?', 'You can use a mobile browser to explore and edit where the builder supports it. Always preview the published page on a phone before sharing.'],
    ],
    publishedAt: '2026-11-24', updatedAt: '2026-11-24',
  },
  {
    slug: 'birthday-website-vs-digital-birthday-card',
    primaryKeyword: 'birthday website vs digital birthday card',
    supportingKeywords: ['online birthday card maker', 'birthday ecard vs website', 'personalized birthday page', 'digital birthday greeting'],
    category: 'IDEAS', readTime: '5 MIN READ',
    title: 'Birthday website or digital birthday card: which suits the moment?',
    seoTitle: 'Birthday Website vs Digital Birthday Card: What to',
    description: 'Compare a personal birthday website with a digital birthday card and choose based on the message, photos, interaction, audience and how you plan to.',
    intro: 'A digital birthday card and a birthday website both let you send a greeting online, but they solve slightly different problems. A card is usually a compact message with a design. A personal website can give the message more room, bring together several sections and create a small experience the recipient explores. Neither is automatically better.',
    sections: [
      { heading: 'Choose a digital birthday card for a quick greeting', paragraphs: ['An e-card is useful when you want to send a short message in a familiar format. It can be a good fit for colleagues, acquaintances, relatives or a large list of recipients, especially when you want one greeting that is easy to send by email or message.', 'Cards are often quicker to choose and may be easier to reuse for different people. The trade-off is that the experience is usually more compact, with less room for a longer story or several memories.'] },
      { heading: 'Choose a birthday website when the story matters', paragraphs: ['A birthday website can hold a letter, a small photo timeline, event information or a sequence of sections, depending on the design. It is a useful format when the recipient is one particular person and you want to make the act of opening the message part of the gift.', 'A webpage is not automatically more personal. It still needs your own words, thoughtful photographs and a reason for each element.'] },
      { heading: 'Compare the practical details before deciding', bullets: ['Time: a card is usually faster; a website may need more editing and previewing.', 'Content: a card suits a short greeting; a page can support a longer sequence where the template allows it.', 'Sharing: both can be sent as a link, while some invitation tools also support email delivery or RSVP features.', 'Accessibility: both should be readable on a phone and make sense without sound.', 'Privacy: check who can open the link and avoid sharing sensitive details.'], paragraphs: ['Features and costs vary by provider. Check the current plan and the exact capabilities of the product before you commit.'] },
      { heading: 'A simple decision rule', paragraphs: ['Send a card when the main goal is to say happy birthday clearly and quickly. Make a website when you have enough personal material to create a small story or an experience for one recipient. For a group greeting, consider whether a shared card or a page collecting several notes is easier for everyone.', 'You can also pair formats: send a short message with the link to a birthday page, or add a QR code to a printed card if your chosen service supports it.'] },
    ],
    conclusion: 'Choose the format that matches the amount of meaning you want to share. A thoughtful card can be perfect; a personal birthday website is useful when you want a message to unfold with more space and context.',
    relatedPath: '/templates/birthday/', relatedLabel: 'See birthday page designs',
    relatedGuides: ['how-to-make-a-birthday-website', 'birthday-website-ideas', 'online-wedding-invitation-website-checklist'],
    faqs: [
      ['Is a birthday website better than an e-card?', 'It depends on the message. An e-card is convenient for a short greeting, while a website can support a longer personal story or multiple sections.'],
      ['Can I send a birthday website like a digital card?', 'Yes. Once published, a personal birthday page can be shared as a link in a message or email.'],
      ['Which is better for a long-distance birthday?', 'Either can work. A card is quick; a website can include photos and a longer note. Choose based on what the recipient would enjoy opening.'],
    ],
    publishedAt: '2026-11-24', updatedAt: '2026-11-24',
  },
  {
    slug: 'long-distance-birthday-surprise-ideas',
    primaryKeyword: 'long distance birthday page planning',
    supportingKeywords: ['birthday website across time zones', 'long distance birthday page', 'when to send a digital birthday gift'],
    category: 'LONG DISTANCE', readTime: '6 MIN READ',
    title: 'Planning a long-distance birthday page across time zones',
    seoTitle: 'Long-Distance Birthday Surprise Ideas for Someone',
    description: 'Plan a long-distance birthday surprise with a personal website, shared photos, voice notes, coordinated messages and considerate timing across time zones.',
    intro: 'When someone you care about lives far away, the hardest part of a birthday surprise is often not distance itself but timing. You want the message to arrive when they can enjoy it, the link to work on their phone and the gesture to feel personal rather than like a calendar notification. These ideas are designed to travel well.',
    sections: [
      { heading: 'Make a personal birthday page they can open anywhere', paragraphs: ['A birthday website can bring a message, a few photographs and a short memory sequence into one link. It is useful when you want to create something before the birthday and send it privately when the moment feels right. Choose a design that stays readable on a mobile screen and does not rely on sound to make sense.', 'Use a personal detail as the opening. It could be a shared trip, a running joke or the ordinary routine you miss.'] },
      { heading: 'Coordinate a small group across countries', paragraphs: ['Ask friends or relatives for one short note, photo or memory. Give everyone a clear deadline and ask them to keep contributions concise. If the group is spread across time zones, use one agreed time for the surprise rather than assuming everyone is awake at the same moment.', 'Check with contributors before publishing their names, faces or messages on a page that can be opened by anyone with the link.'] },
      { heading: 'Pair the online message with a local gesture', bullets: ['Arrange a delivery from a local shop when it is practical.', 'Plan a video call at a time that works for both people.', 'Send a playlist or shared photo collection alongside the page.', 'Choose a future date for a visit or a shared activity.'], paragraphs: ['You do not have to coordinate all of these. One well-timed gesture is usually better than several rushed ones.'] },
      { heading: 'Work out the timing before the surprise', paragraphs: ['Check the recipient’s local date and time, not only your own. Think about work, school, sleep and family plans. A message sent at midnight in your city may arrive during their afternoon—or in the middle of the night.', 'If the page is intended to be opened at a specific moment, send a short context message so the recipient knows what the link is and can choose when to open it.'] },
      { heading: 'Keep the experience reliable on mobile', bullets: ['Use compressed, clear images where possible.', 'Preview the page using mobile data as well as Wi-Fi.', 'Make sure text is legible at a normal phone size.', 'Avoid adding media that is essential to understanding the message.'], paragraphs: ['A simple page that loads reliably can be more considerate than a heavy experience that struggles on a slow connection.'] },
    ],
    conclusion: 'Distance changes the logistics, not the meaning. A personal page, one thoughtful contribution from friends and a message timed for the recipient’s day can make a birthday feel shared across countries.',
    relatedPath: '/templates/birthday/', relatedLabel: 'Explore birthday surprise templates',
    relatedGuides: ['how-to-make-a-birthday-website', 'birthday-website-for-girlfriend', 'miss-you-website-for-long-distance'],
    faqs: [
      ['How can I surprise someone on their birthday from another country?', 'Create a personal digital message, coordinate a video call or local delivery, and schedule your greeting around the recipient’s time zone.'],
      ['What is a good virtual birthday gift for a long-distance friend?', 'A personal birthday page with photographs and a note can be meaningful, especially when it includes a memory or contribution from mutual friends.'],
      ['What time should I send a birthday surprise internationally?', 'Use the recipient’s local time and consider their routine. Midnight in your location may not be midnight where they live.'],
    ],
    publishedAt: '2026-11-24', updatedAt: '2026-11-24',
  },
  {
    slug: 'how-to-write-birthday-website-message',
    primaryKeyword: 'birthday website message structure',
    supportingKeywords: ['birthday website opening line', 'birthday page message format', 'personal birthday website copy'],
    category: 'WRITING IDEAS', readTime: '6 MIN READ',
    title: 'Birthday website message structure: open, remember and close',
    seoTitle: 'Birthday Website Message Structure: What to Write',
    description: 'Use a simple structure for a birthday website message: a warm opening, one shared memory, a specific appreciation and a closing wish that sounds like you.',
    intro: 'A blank message box can be harder than choosing a template. The easiest way to write a birthday website message is to stop trying to sound impressive and start with what you know about the person. A clear structure can help you turn those thoughts into a note that feels natural.',
    sections: [
      { heading: 'Use a four-part message structure', bullets: ['Opening: say their name and why the page exists.', 'Memory: mention one moment you both remember.', 'Appreciation: name something you genuinely value about them.', 'Wish: close with a hope or plan for the year ahead.'], paragraphs: ['You can write this in four short paragraphs or combine it into one note. The structure is a starting point, not a formula you have to follow exactly.'] },
      { heading: 'Replace generic compliments with real examples', paragraphs: ['Instead of saying “you are amazing”, explain what the person does that makes you feel that way. Instead of “thanks for everything”, name one time they helped or made an ordinary day easier. Specific examples make a message feel like it belongs to one person.', 'Choose a detail the recipient will recognise. It does not have to be dramatic; a small routine can carry a lot of affection.'] },
      { heading: 'Choose the right length for the design', paragraphs: ['A first-screen message should be short enough to read without scrolling. If the template has multiple sections, you can spread the story across them. Do not paste a long paragraph into a small text area if the result becomes difficult to read.', 'Use line breaks and short sentences. A message that sounds good aloud may need a little editing to read comfortably on a phone.'] },
      { heading: 'Try these prompts when you feel stuck', bullets: ['“One thing I hope you never forget is…”', '“I still laugh when I think about the time we…”', '“I admire the way you…”', '“This year, I hope you get more chances to…”', '“The next thing I would love for us to do is…”'], paragraphs: ['Treat these as prompts, not ready-made lines. Finish them with a detail only you could supply.'] },
      { heading: 'Edit for honesty before you edit for style', paragraphs: ['Read the message aloud and remove anything you would not normally say. Check the recipient’s name, pronouns, dates and any private references. Avoid jokes that might be misunderstood without your tone of voice.', 'If several people contributed, keep each note distinct rather than editing everyone into the same voice.'] },
    ],
    conclusion: 'Write one true thing before you search for the perfect phrase. A birthday message becomes personal when it includes a real memory, a specific reason you appreciate someone and a wish that sounds like it came from you.',
    relatedPath: '/templates/birthday/', relatedLabel: 'Choose a birthday message page',
    relatedGuides: ['birthday-website-ideas', 'birthday-website-for-girlfriend', 'birthday-website-for-boyfriend'],
    faqs: [
      ['What should I write on a birthday website?', 'Start with the person’s name, add one shared memory, say what you appreciate about them and close with a wish for the year ahead.'],
      ['How long should a birthday website message be?', 'Keep the opening concise and divide longer thoughts into short sections. The right length depends on the design and how much the recipient will enjoy reading.'],
      ['How do I make a birthday wish sound less generic?', 'Use one real example, a specific memory or a future plan. Avoid relying only on broad compliments and familiar greeting-card phrases.'],
    ],
    publishedAt: '2026-11-24', updatedAt: '2026-11-24',
  },
  {
    slug: 'anniversary-website-ideas',
    primaryKeyword: 'anniversary website timeline ideas',
    supportingKeywords: ['anniversary photo timeline page', 'relationship milestone website', 'anniversary memory page layout'],
    category: 'ANNIVERSARIES', readTime: '6 MIN READ',
    title: 'Anniversary website timeline ideas for shared memories',
    seoTitle: 'Anniversary Website Timeline Ideas for Shared Memories',
    description: 'Plan an anniversary website timeline with meaningful milestones, a small photo sequence and a note about the memories you want to carry forward.',
    intro: 'An anniversary website can be a small celebration of how a relationship has grown. Rather than trying to document every year, choose a few moments that explain what you value about the time you have shared. A page works best when it looks back with warmth and also gives the next chapter somewhere to begin.',
    sections: [
      { heading: 'Create a short timeline of meaningful moments', paragraphs: ['Choose three to five milestones: the first meeting, a favourite trip, a difficult season you navigated together or a day that became a family story. Add a date only when it helps the memory make sense. A timeline should feel like a path, not a complete archive.', 'Mix major milestones with everyday photographs. The ordinary moments can be the ones that feel most recognisable.'] },
      { heading: 'Make a map of places that matter', paragraphs: ['If place is part of your story, include a few locations: where you met, a favourite café, the city where you took a trip or a place you hope to visit. Add a one-line note about what happened there. Avoid sharing a private home address or a location that could compromise someone’s safety.', 'A map can be a visual idea even if the chosen template does not include an interactive map feature. You can use captions or a sequence of photos instead.'] },
      { heading: 'Write a letter about the present, not only the past', paragraphs: ['Mention one thing you have learned about each other and one small habit you still appreciate. Then write about what you are looking forward to. This helps the page feel like a message for the person you are with now, rather than a list of old photographs.', 'Keep the language natural. You do not have to make every sentence poetic for it to matter.'] },
      { heading: 'Choose a design that suits the relationship', bullets: ['Scrapbook style for a memory-led page.', 'Minimal letter style for a quieter anniversary note.', 'Photo-led design for a relationship with many favourite images.', 'Playful style for couples who enjoy humour and lightness.'], paragraphs: ['Preview the page on mobile and check that the order of the memories feels clear.'] },
      { heading: 'Close with a next-chapter detail', paragraphs: ['Finish with a future plan: a trip, a meal, a promise to make more time or a small tradition you want to keep. The next chapter does not need to be grand. It only needs to feel real for the two of you.', 'If you are celebrating from different countries, consider the recipient’s time zone and choose a moment when they can enjoy reading the page.'] },
    ],
    conclusion: 'The most thoughtful anniversary page is selective. Let a few meaningful memories show the shape of your story, then give the final words to what you want to keep building together.',
    relatedPath: '/templates/anniversary/', relatedLabel: 'Browse anniversary templates',
    relatedGuides: ['digital-love-letter-website-ideas', 'long-distance-birthday-surprise-ideas', 'digital-love-letter'],
    faqs: [
      ['What should an anniversary website include?', 'A small timeline, a few photographs, a personal note and a future plan are useful elements. Choose only what the design supports and what the recipient will enjoy.'],
      ['How many photos should I add to an anniversary page?', 'Start with a handful of meaningful images. A clear sequence of three to five photographs can tell a story without overwhelming the page.'],
      ['Can an anniversary website work for a long-distance couple?', 'Yes. A shared page can bring together memories and a message, and the link can be sent across countries. Consider time zones and privacy when sharing it.'],
    ],
    publishedAt: '2026-11-24', updatedAt: '2026-11-24',
  },
  {
    slug: 'digital-love-letter-website-ideas',
    primaryKeyword: 'digital love letter page layout ideas',
    supportingKeywords: ['digital love letter page design', 'online love letter layout', 'romantic letter page structure'],
    category: 'LOVE LETTERS', readTime: '6 MIN READ',
    title: 'Digital love letter layout ideas: six ways to frame your words',
    seoTitle: 'Digital Love Letter Page Layout Ideas',
    description: 'Compare digital love letter layouts, from an envelope reveal to a photo journal. Choose a structure that gives the message room and stays easy to read.',
    intro: 'A digital love letter is more than a message typed onto a pretty background. It gives your words a setting and can bring together photographs, a sequence of memories or a small reveal. The strongest idea is the one that supports what you want to say without making the recipient work to find the message.',
    sections: [
      { heading: '1. An envelope that opens into a letter', paragraphs: ['Use an envelope or note-inspired visual as the first moment, then let the main message appear in a calm, readable section. This format suits a short letter, a thank-you or a message you have wanted to write for a while.', 'Keep the reveal simple. The recipient should be able to understand how to open it, and the letter should remain accessible if animation is unavailable.'] },
      { heading: '2. A small timeline of how you met', paragraphs: ['Choose a few moments that show how the relationship began and what changed along the way. Use a date, image or short caption for each one. You do not need every milestone; a few specific scenes often make a stronger story.', 'If the memory is meaningful but the date is uncertain, describe the moment rather than guessing a date.'] },
      { heading: '3. A photo journal with handwritten-style notes', paragraphs: ['Pair each photograph with a line about what you remember. It might be a place, a conversation or a small detail from the day. Choose images that are clear and that both people are comfortable sharing.', 'The notes should add meaning rather than describe what is already obvious in the photo.'] },
      { heading: '4. A page built around a song', paragraphs: ['If a particular song is important to both of you, make it a supporting detail. Explain why you chose it and what memory it brings back. Do not rely on audio alone: autoplay may be blocked, the phone may be muted or the recipient may be somewhere they cannot listen.', 'Use only media you have the right to share and check what the selected template supports.'] },
      { heading: '5. A letter for a long-distance relationship', paragraphs: ['Write about one thing you miss, one thing you appreciate about the way you stay connected and one plan you are looking forward to. Keep the tone warm rather than making the distance the only subject. A small everyday memory can make the page feel close.', 'Send the link at a time when the other person has space to read it.'] },
      { heading: '6. A quiet page with one important sentence', paragraphs: ['Sometimes the right format is a clean page with one photograph and a short note. It gives the words space and can be easier to read than a long sequence of effects. Choose this when the message itself is the main event.'] },
    ],
    conclusion: 'Choose one visual idea, then write the letter around a real memory or feeling. A digital love letter works when the design makes it easier to receive the words, not when it competes with them.',
    relatedPath: '/templates/letter/', relatedLabel: 'Explore digital letter templates',
    relatedGuides: ['digital-love-letter', 'anniversary-website-ideas', 'miss-you-website-for-long-distance'],
    faqs: [
      ['What is a digital love letter website?', 'It is a personal webpage for a romantic message. Depending on the design, it can include text, photographs, a visual reveal and supported media, then be shared as one link.'],
      ['How do I make a romantic website for my partner?', 'Choose a design that matches their personality, write a message in your own voice and add a small number of photographs or memories that belong to your relationship.'],
      ['Can a digital love letter be private?', 'Check the publishing and privacy settings of the service you use. Do not assume an unlisted link is password-protected, and avoid adding sensitive personal information.'],
    ],
    publishedAt: '2026-11-24', updatedAt: '2026-11-24',
  },
  {
    slug: 'proposal-website-ideas',
    primaryKeyword: 'proposal website reveal ideas',
    supportingKeywords: ['romantic proposal webpage', 'proposal website for girlfriend', 'proposal website for boyfriend', 'online proposal page'],
    category: 'PROPOSALS', readTime: '6 MIN READ',
    title: 'Seven proposal website ideas, from a quiet letter to a story-led reveal',
    seoTitle: '7 Proposal Website Ideas for a Personal',
    description: 'Explore proposal website ideas including a memory timeline, a letter, a photo journey and a simple final question, with tips for keeping the moment.',
    intro: 'A proposal page can be playful, romantic or understated. The format should reflect the person receiving it and the meaning of the question. Treat the webpage as a way to express yourself—not as a device that creates pressure or makes the other person feel they have to answer a certain way.',
    sections: [
      { heading: '1. A story of how it began', paragraphs: ['Use a few moments from the relationship to create a short sequence: the first conversation, a day you remember and something you have learned together. Keep the story accurate and avoid turning it into a long biography.', 'The final question should be easy to find. The story is context, not a maze the recipient has to complete.'] },
      { heading: '2. A letter with one clear question', paragraphs: ['A letter-style page is a good choice when your words matter more than visual effects. Write a short introduction, say what you value about the person and ask the question plainly. A direct message can be more moving than an elaborate reveal.'] },
      { heading: '3. A photo journey with short captions', paragraphs: ['Choose a small set of images that each represent a moment. Add captions that explain what you remember, then lead naturally into the question. Make sure you have permission to use the images and that the recipient would be comfortable seeing them.'] },
      { heading: '4. A playful question page', paragraphs: ['If humour is part of your relationship, a light opening can make the page feel familiar. Keep the actual question respectful and clear. Avoid designs or wording that imply the recipient has no choice or that a particular answer is expected.'] },
      { heading: '5. A map of places that matter', paragraphs: ['Use locations that tell a story—where you met, a memorable trip or a place you hope to visit. Add brief captions rather than publishing precise private addresses. A static sequence of place names can work even if the template has no map feature.'] },
      { heading: '6. A future-plans page', paragraphs: ['Focus on the things you hope to experience together: trips, small traditions, Sunday breakfasts or shared projects. Keep future plans open rather than presenting them as promises the other person has already made.'] },
      { heading: '7. A simple page with a single final line', paragraphs: ['A clean page, one meaningful image and a clear question may be the most suitable option for someone who dislikes elaborate surprises. Let the message carry the moment and leave space for a genuine response.'] },
      { heading: 'Share the page with care', paragraphs: ['Think about privacy, timing and whether the other person enjoys surprises. A private link sent directly may be better than a public post. For a major life decision, a webpage should complement honest conversation and leave the recipient free to answer in their own time.'] },
    ],
    conclusion: 'The best proposal website idea is not the most elaborate one. It is the format that feels true to the relationship, makes the question clear and gives the other person room to respond freely.',
    relatedPath: '/templates/proposal/', relatedLabel: 'Explore proposal page designs',
    relatedGuides: ['online-proposal-website', 'digital-love-letter-website-ideas', 'anniversary-website-ideas'],
    faqs: [
      ['What should a proposal website include?', 'It can include a short relationship story, a few photographs, a personal message and a clear question. Choose elements that suit the recipient and the template.'],
      ['How can I make a proposal website without being too dramatic?', 'Choose a simple letter or photo layout, use natural language and keep the question direct. Consider whether the recipient enjoys surprises.'],
      ['Should I ask an important relationship question only through a website?', 'A webpage can express your feelings, but it should not replace an honest conversation for a major decision. Give the other person time and freedom to respond.'],
    ],
    publishedAt: '2026-11-24', updatedAt: '2026-11-24',
  },
  {
    slug: 'online-wedding-invitation-website-checklist',
    primaryKeyword: 'online wedding invitation website',
    supportingKeywords: ['digital wedding invitation website', 'wedding invitation webpage', 'wedding website invitation ideas', 'shareable wedding invitation link'],
    category: 'WEDDINGS', readTime: '7 MIN READ',
    title: 'Online wedding invitation website checklist: details guests need first',
    seoTitle: 'Online Wedding Invitation Website Checklist for',
    description: 'Plan an online wedding invitation website with the essential event details, schedule, location, RSVP instructions, accessibility checks and a clear.',
    intro: 'An online wedding invitation website can give guests one place to find the details of your celebration. The design matters, but clarity matters more: guests should be able to confirm the date, understand where to go and know how to respond without searching through several messages.',
    sections: [
      { heading: 'Put the essential details near the top', bullets: ['Names of the couple or hosts.', 'Event date and local start time, including the time zone when relevant.', 'Venue name and full address.', 'Dress code or important arrival notes, if any.', 'A clear RSVP deadline and response method.'], paragraphs: ['Do not hide practical information behind decorative sections. Guests may open the invitation on a small phone screen while making plans.'] },
      { heading: 'Add a schedule only when it helps', paragraphs: ['If the celebration includes multiple events, list them in chronological order with the correct dates and locations. Separate ceremony, reception and any additional gathering so guests can understand which parts they are invited to attend.', 'Avoid adding a detailed timetable that may change before the event. If plans do change, update the page and send guests a clear notice.'] },
      { heading: 'Make the location easy to use', paragraphs: ['Include the venue’s full name and a reliable map link where possible. For guests travelling from another city or country, add practical notes such as the nearest transport hub or recommended arrival window if those details are confirmed.', 'Do not publish a private residential address unless the hosts are comfortable sharing it with everyone who receives the link.'] },
      { heading: 'Explain how guests should respond', paragraphs: ['State whether guests should reply through a form, message, email or another method. If dietary preferences or accessibility requirements matter, explain where guests can share them securely. Do not imply that an RSVP feature exists unless your chosen service provides it.', 'Set a deadline that gives you enough time to confirm arrangements. Keep the instructions short and easy to follow.'] },
      { heading: 'Check the page before sending it widely', bullets: ['Test the invitation on phones and desktop browsers.', 'Check names, dates, time zones and spelling.', 'Open every map, RSVP and contact link.', 'Ask someone who was not involved in building it to find the key details.', 'Confirm who can access the link and what information is public.'], paragraphs: ['A second reader can quickly reveal missing context that the couple and hosts may overlook.'] },
      { heading: 'Use the link consistently', paragraphs: ['Share the same canonical invitation link in messages and printed QR codes where supported. If details are updated, direct guests back to that same page rather than circulating multiple versions. A short message with the link helps guests recognise the invitation.', 'If you are inviting people across countries, write dates in an unambiguous format and include a time zone for online events.'] },
    ],
    conclusion: 'A useful wedding invitation website combines a warm welcome with practical clarity. Put the date, location and response instructions first, then use photographs and design to make the page feel like your celebration.',
    relatedPath: '/templates/wedding/', relatedLabel: 'Browse wedding website templates',
    relatedGuides: ['birthday-website-vs-digital-birthday-card', 'how-to-make-a-birthday-website', 'anniversary-website-ideas'],
    faqs: [
      ['What should an online wedding invitation website include?', 'Include the hosts or couple’s names, event date and time, venue and address, RSVP instructions and any essential guest information.'],
      ['Can guests RSVP through a wedding invitation website?', 'Only if the service or template you choose provides an RSVP function. Otherwise, give guests a clear alternative response method.'],
      ['How do I share a digital wedding invitation?', 'Send the page link by email or messaging app. You can also use a QR code on printed stationery if your chosen service supports it.'],
    ],
    publishedAt: '2026-11-24', updatedAt: '2026-11-24',
  },
  {
    slug: 'miss-you-website-for-long-distance',
    primaryKeyword: 'miss you website for long distance',
    supportingKeywords: ['miss you webpage', 'long distance relationship website', 'online message for someone far away', 'digital miss you letter'],
    category: 'LONG DISTANCE', readTime: '5 MIN READ',
    title: 'A miss-you website for a long-distance relationship: what to include',
    seoTitle: 'Miss-You Website for Long Distance: Personal Page',
    description: 'Create a thoughtful miss-you website for someone far away with a shared memory, a short letter, photographs and a future plan that feels hopeful.',
    intro: 'When someone is far away, “I miss you” can feel too small for everything you want to say. A dedicated page can hold a photograph, a memory and a short letter in one place. Keep the experience gentle and honest: the goal is to help the other person feel close, not to make the distance feel heavier.',
    sections: [
      { heading: 'Start with one detail you both remember', paragraphs: ['Choose a place, meal, routine or ordinary moment that you can both picture. Describe what you remember about it and why it came to mind. Specific memories often feel more comforting than repeating the same general statement about missing someone.', 'If the memory includes other people, be thoughtful about which photos and details you share.'] },
      { heading: 'Write about the present as well as the distance', paragraphs: ['Mention something you appreciate about how you stay connected: a regular call, a message that arrives at the right time or a small habit you have kept. This helps the page celebrate the relationship as it is now, not only what you cannot do together.', 'Use a calm tone and keep the wording in your own voice.'] },
      { heading: 'Add a few photographs with captions', paragraphs: ['Choose two or three images that carry context. A caption can explain what happened that day or what you would like to do again. Avoid uploading a large album when a small selection tells the story more clearly.', 'Make sure the images are clear on mobile and that both people are comfortable with them being shared by link.'] },
      { heading: 'End with something to look forward to', paragraphs: ['A future plan can make the page feel hopeful: a visit, a shared film night, a restaurant you want to try or a date for the next call. It does not need to be a firm promise if plans are uncertain. You can simply write what you are looking forward to.', 'If you live in different time zones, mention the next moment that works for both of you.'] },
      { heading: 'Keep the page personal and private', paragraphs: ['Send the link directly and check the service’s privacy settings. A link that is not listed in a directory may still be accessible to anyone who has it, so do not add addresses, travel plans or sensitive information you would not want forwarded.', 'Preview the page with sound off and on a phone connection before sending it.'] },
    ],
    conclusion: 'A miss-you page works when it turns a familiar memory into a present-day message. Keep it small, thoughtful and focused on the person you want to reach.',
    relatedPath: '/templates/miss-you/', relatedLabel: 'Explore miss-you page designs',
    relatedGuides: ['long-distance-birthday-surprise-ideas', 'digital-love-letter-website-ideas', 'digital-love-letter'],
    faqs: [
      ['What should I put on a miss-you website?', 'Include one shared memory, a short note about what you miss, a few photographs and something you look forward to doing together.'],
      ['Can I make a miss-you page for a friend or family member?', 'Yes. A personal page can be for a partner, friend or family member. Adjust the tone and memories to fit the relationship.'],
      ['How do I send a miss-you message across time zones?', 'Share the link in a direct message and consider the other person’s local time so they can open it when they have a quiet moment.'],
    ],
    publishedAt: '2026-11-24', updatedAt: '2026-11-24',
  },
  {
    slug: 'personal-website-for-someone-you-love',
    primaryKeyword: 'personal website gift planning ideas',
    supportingKeywords: ['personal website gift idea', 'digital gift page planning', 'website as a personal gift'],
    category: 'HOW TO', readTime: '6 MIN READ',
    title: 'How to make a small personal website for someone you love',
    seoTitle: 'Personal Website Gift Planning Ideas',
    description: 'Plan a personal website as a digital gift with meaningful memories, photos and a message. Learn how to shape the page around someone you love.',
    intro: 'A personal website can be a digital gift: a small place for a birthday wish, a letter, a thank-you or a shared memory. It does not need to be a full portfolio or a complicated project. Start with one person and one reason for making the page, then keep the experience focused on what you want them to receive.',
    sections: [
      { heading: 'Give the website one clear purpose', paragraphs: ['Decide whether you are making a birthday surprise, a romantic note, an anniversary page, an apology or an invitation. A clear purpose helps you decide what belongs on the page and what can be left out.', 'Write a one-sentence description of the page before you start. If you cannot explain what the recipient should take away, simplify the idea.'] },
      { heading: 'Choose a template or a simple page structure', paragraphs: ['A template-based tool gives you an existing visual structure and editing controls. A from-scratch website builder gives you more freedom but may require more design decisions. If your priority is a personal message rather than learning web development, a ready-made template can be a practical starting point.', 'Check the features included in the exact design. Do not promise yourself a video, music player or interactive section until you confirm it is available.'] },
      { heading: 'Gather your words and media first', bullets: ['A short opening that explains why you made the page.', 'One main message or letter.', 'A few photographs with personal context.', 'Optional media only when it supports the message.', 'A closing line or next-step idea.'], paragraphs: ['Use original words and media you have permission to share. Keep private details and other people’s information out of the page unless you have a good reason and consent.'] },
      { heading: 'Make the page easy to read and navigate', paragraphs: ['Use clear headings, short paragraphs and images that work on a phone. Put the main message where the recipient can find it quickly. Decorative elements should guide the experience rather than obscure the content.', 'Check colour contrast and avoid relying on colour or sound alone to communicate important information.'] },
      { heading: 'Review privacy before sharing', paragraphs: ['Find out whether the page is public, unlisted or password-protected. Those settings are not interchangeable. An unlisted URL can still be forwarded, so avoid including sensitive information or anything the recipient would not want others to see.', 'Ask permission before using other people’s photographs, messages or personal details.'] },
      { heading: 'Send one clear link', paragraphs: ['When the page is ready, share it with a short personal message. Tell the recipient what it is and why you made it. A direct link is easy to open from a phone, email or messaging app, but preview it first on the devices people are likely to use.', 'If the occasion is time-sensitive, consider the recipient’s time zone and daily routine.'] },
    ],
    conclusion: 'A personal website becomes meaningful through its purpose and details, not its technical complexity. Keep the page small, readable and made for the person who will open it.',
    relatedPath: '/templates/', relatedLabel: 'Explore personal page templates',
    relatedGuides: ['how-to-make-a-birthday-website', 'digital-love-letter-website-ideas', 'birthday-website-vs-digital-birthday-card'],
    faqs: [
      ['Do I need coding skills to make a personal website for someone?', 'No. A template-based tool can provide the layout and editing controls, so you can focus on the words, photos and details.'],
      ['What can I use a personal website for?', 'Common uses include birthdays, anniversaries, letters, proposals, apologies, thank-you messages, friendship surprises and invitations.'],
      ['Is a personal website a good digital gift?', 'It can be a thoughtful digital gift when the page includes original content and details chosen specifically for the recipient.'],
    ],
    publishedAt: '2026-11-24', updatedAt: '2026-11-24',
  },
  {
    slug: 'apology-website-how-to-say-sorry',
    primaryKeyword: 'apology website page structure',
    supportingKeywords: ['apology page structure', 'online apology page sections', 'accountability message website'],
    category: 'APOLOGIES', readTime: '6 MIN READ',
    title: 'Apology website message examples built around accountability',
    seoTitle: 'Apology Website Page Structure for an Honest Message',
    description: 'Structure an apology page around responsibility, the impact of your actions, what you intend to change and room for the other person to respond.',
    intro: 'A designed apology can give your words a little more space, but the design cannot do the difficult part for you. A sincere apology names what happened, recognises its effect and explains what you intend to change. It should not ask the other person to forgive you on a deadline or make them responsible for reassuring you.',
    sections: [
      { heading: 'Check whether a message is welcome', paragraphs: ['Before sending a link, consider whether the person has asked for space or requested no contact. Respect that boundary. A carefully designed page is still an unwanted message if the recipient has made it clear they do not want to hear from you.', 'If contact is appropriate, use the channel the person is comfortable with and keep the introduction brief.'] },
      { heading: 'Name your action without making excuses', paragraphs: ['Be specific about what you did or said. Avoid vague wording such as “mistakes were made” or language that shifts responsibility to the other person. You can add context when it genuinely helps, but do not use it to minimise the impact.', 'A useful test is whether the person could understand what you are taking responsibility for after reading the first few lines.'] },
      { heading: 'Acknowledge the impact and say what will change', paragraphs: ['You cannot dictate how the other person feels. Acknowledge that your action may have caused hurt, inconvenience or loss of trust, and avoid telling them they should be over it. Then state the specific action you will take to avoid repeating the behaviour.', 'Only promise changes you can sustain. A realistic commitment is more meaningful than a dramatic statement.'] },
      { heading: 'Choose a calm design and keep it readable', bullets: ['Use a simple, low-distraction layout.', 'Keep the apology near the beginning.', 'Avoid autoplay music, countdowns or manipulative reveal effects.', 'Do not use public comments or pressure buttons to request forgiveness.'], paragraphs: ['A visual format should make the message easier to read. It should never turn an apology into a performance or make the recipient feel watched.'] },
      { heading: 'Give the other person time and choice', paragraphs: ['Close by making it clear that they do not need to respond immediately. Do not send repeated reminders if they do not reply. The point of an apology is to take responsibility, not to obtain a particular reaction.', 'If the person wants to talk, listen without interrupting or defending every detail.'] },
    ],
    conclusion: 'The most important part of an apology is not the page—it is accountability after the message is sent. Keep the design quiet, the wording specific and the recipient’s boundaries at the centre.',
    relatedPath: '/templates/sorry/', relatedLabel: 'Browse apology page designs',
    relatedGuides: ['digital-love-letter-website-ideas', 'personal-website-for-someone-you-love', 'digital-love-letter'],
    faqs: [
      ['What should an apology website say?', 'Name what happened, acknowledge the impact, take responsibility, explain what you will do differently and leave the recipient free to respond in their own time.'],
      ['Is an online apology better than a direct conversation?', 'It depends on the situation and the recipient’s preferences. A written page can help you organise your thoughts, but it should not replace a conversation when one is wanted and appropriate.'],
      ['Should I send an apology website if someone asked for space?', 'Respect the person’s request. A webpage does not make unwanted contact acceptable.'],
    ],
    publishedAt: '2026-11-24', updatedAt: '2026-11-24',
  },
  {
    slug: 'thank-you-website-ideas',
    primaryKeyword: 'digital appreciation page ideas',
    supportingKeywords: ['online appreciation page layout', 'personal gratitude page', 'thank-you message page ideas'],
    category: 'GRATITUDE', readTime: '5 MIN READ',
    title: 'Digital appreciation page ideas for a meaningful thank-you',
    seoTitle: 'Thank-You Website Ideas: A Personal Way to Show',
    description: 'Make a personal thank-you website with a specific message, a meaningful photograph and a clear explanation of why someone’s kindness mattered.',
    intro: 'A thank-you page can be a small keepsake for a person whose help mattered. It might be for a friend who showed up, a teacher who encouraged you, a colleague who made work easier or a family member who did something thoughtful. The page does not need to be elaborate; gratitude feels genuine when it is specific.',
    sections: [
      { heading: 'Start with the action you are grateful for', paragraphs: ['Name what the person did. A clear detail—helping you prepare, checking in at the right time, teaching you something or making room for you—shows that you remember the action rather than sending a generic phrase.', 'If the gesture was private, keep the page private too. Do not publish someone’s personal story without permission.'] },
      { heading: 'Explain why it mattered', paragraphs: ['Describe the effect it had on you. Perhaps it saved time, made a difficult day easier or gave you confidence to try something new. One honest sentence can make the gratitude more meaningful than a long list of compliments.', 'Avoid exaggerating. A sincere description is enough.'] },
      { heading: 'Choose a photo or small visual detail', paragraphs: ['A photograph from the moment can help, but it is not essential. You could use a simple note, a meaningful object or a colour palette that suits the person. Use images only when you have permission and they add context.', 'Keep the design readable and let the thank-you message remain the main point.'] },
      { heading: 'Make the note appropriate for the relationship', bullets: ['For a teacher or mentor: be respectful and explain what you learned.', 'For a friend: use a familiar voice and a shared memory.', 'For a colleague: be clear about the action and its impact.', 'For family: mention the care or effort you noticed.'], paragraphs: ['The tone should sound like you and fit the relationship.'] },
      { heading: 'Deliver it with a personal introduction', paragraphs: ['Send the page with one sentence explaining why you made it. A direct message or email is usually enough. If the person is in another country, check their time zone and make sure the link opens comfortably on a phone.', 'You do not need to ask for a response. Let the thank-you be a gift in itself.'] },
    ],
    conclusion: 'A thank-you page works when it answers two simple questions: what did the person do, and why did it matter? Write those answers honestly and the design can stay beautifully simple.',
    relatedPath: '/templates/thank-you/', relatedLabel: 'Explore thank-you page templates',
    relatedGuides: ['personal-website-for-someone-you-love', 'birthday-website-ideas', 'digital-love-letter-website-ideas'],
    faqs: [
      ['What should I put on a thank-you website?', 'Explain what you are grateful for, why it mattered and include a personal note. Add a photo or design detail only if it supports the message.'],
      ['Who can I make a thank-you page for?', 'You can make one for a friend, teacher, mentor, colleague, family member or anyone whose help you want to acknowledge.'],
      ['Should a thank-you message be long?', 'No. A specific and sincere note can be short. Choose a length that fits the design and the relationship.'],
    ],
    publishedAt: '2026-11-24', updatedAt: '2026-11-24',
  },
  {
    slug: 'monthsary-website-ideas',
    primaryKeyword: 'monthsary website',
    supportingKeywords: ['monthsary page maker', 'monthly anniversary website', 'monthsary message website', 'love page for monthsary'],
    category: 'ANNIVERSARIES', readTime: '5 MIN READ',
    title: 'Monthsary website ideas: mark the small milestones with a personal page',
    seoTitle: 'Monthsary Website Ideas for a Monthly Anniversary',
    description: 'Plan a monthsary website with a short letter, favourite photo and shared memory. Find simple ways to make the page personal and easy to share.',
    intro: 'A monthsary is a small relationship milestone that some couples enjoy celebrating each month. A dedicated page can be a simple way to mark it without making every month feel like a major event. Keep the gesture light: one memory, one message and a little thought about the month ahead.',
    sections: [
      { heading: 'Choose one moment from the month', paragraphs: ['Rather than summarising everything that happened, choose one moment you want to remember. It could be a conversation, a meal, a walk, a video call or a small way the other person made you feel supported.', 'A specific moment helps the page feel connected to this month instead of repeating the same greeting every time.'] },
      { heading: 'Write a short monthsary note', paragraphs: ['Mention what you appreciated and one thing you are looking forward to. If you have a nickname or phrase you use together, include it naturally. Keep the note short enough to read comfortably on a phone.', 'Avoid comparing your relationship to other couples. The page only needs to make sense to the two of you.'] },
      { heading: 'Add a photo, song or visual theme', paragraphs: ['Use a photo that reminds you of the month or a design that matches the mood. A song can be a nice extra if the selected template supports it, but the message should still work when audio is muted.', 'If you celebrate every month, vary the detail rather than adding more effects each time. A small tradition can be more meaningful than constant novelty.'] },
      { heading: 'Make it fit a long-distance routine', paragraphs: ['For couples in different countries, plan around local times and connection quality. A link can be opened when the other person has time, so the surprise does not have to arrive at exactly the same clock time for both people.', 'If the page includes personal photographs or private notes, check the privacy settings before sharing it.'] },
      { heading: 'Keep the celebration comfortable for both people', paragraphs: ['Not everyone enjoys marking every month. Treat the page as a gesture, not an expectation. A short note or a shared plan can be enough, and it is fine to choose a different way to celebrate when life is busy.', 'The point is to recognise the relationship in a way that feels mutual and natural.'] },
    ],
    conclusion: 'A monthsary page does not need to be elaborate or expensive in time. One memory from this month and a note about what you appreciate can make a small milestone feel considered.',
    relatedPath: '/templates/anniversary/', relatedLabel: 'Browse anniversary page designs',
    relatedGuides: ['anniversary-website-ideas', 'digital-love-letter-website-ideas', 'miss-you-website-for-long-distance'],
    faqs: [
      ['What is a monthsary website?', 'It is a personal webpage made to mark a monthly relationship milestone, often with a short note, photos or a shared memory.'],
      ['What should I write for a monthsary?', 'Mention one moment from the month, something you appreciated and a small thing you look forward to doing together.'],
      ['Can I make a monthsary page for a long-distance partner?', 'Yes. A shareable page can be sent across countries. Consider time zones, privacy and mobile access when you prepare it.'],
    ],
    publishedAt: '2026-11-24', updatedAt: '2026-11-24',
  },
  {
    "slug": "birthday-website-for-mom",
    "primaryKeyword": "birthday website for mom",
    "supportingKeywords": [
      "birthday website for mom ideas",
      "birthday website for mom website",
      "birthday website for mom message",
      "personalized digital page"
    ],
    "relatedGuides": [
      "birthday-website-ideas",
      "how-to-make-a-birthday-website",
      "digital-love-letter-website-ideas"
    ],
    "faqs": [
      [
        "What should I include?",
        "Start with a personal opening, a few relevant photos or memories, and a clear message. Add music or video only if it improves the experience."
      ],
      [
        "Can I share the page with someone in another country?",
        "Yes. Send the published link and make sure the page is easy to read on a phone and convenient for the recipient’s time zone."
      ],
      [
        "How do I make it feel personal?",
        "Use real details, specific memories and words you would naturally say. A few thoughtful choices are more meaningful than a crowded page."
      ]
    ],
    "publishedAt": "2026-11-24",
    "updatedAt": "2026-11-24",
    "category": "BIRTHDAYS",
    "readTime": "4 MIN READ",
    "title": "Birthday Website for Mom: Thoughtful Ideas She’ll Remember",
    "seoTitle": "Birthday Website for Mom: Thoughtful Ideas She’ll",
    "description": "Create a birthday website for your mom with family photos, a heartfelt letter, favourite memories and a personal birthday message. A simple guide to.",
    "intro": "A birthday website for your mom can be a thoughtful way to gather family memories in one place. It does not need elaborate effects. Start with a warm welcome, choose photographs that tell a story, and write a message in your own voice.",
    "sections": [
      {
        "heading": "Start with the person, not the design",
        "paragraphs": [
          "A birthday website for your mom can be a thoughtful way to gather family memories in one place. It does not need elaborate effects. Start with a warm welcome, choose photographs that tell a story, and write a message in your own voice.",
          "Before choosing colours or effects, write down three details that make this person or moment unique. Those details should guide the page."
        ],
        "bullets": [
          "Choose a clear opening message",
          "Use a small selection of meaningful photos",
          "Keep the main message easy to find"
        ]
      },
      {
        "heading": "Build a simple story",
        "paragraphs": [
          "A personal page is easier to follow when it has a beginning, a middle and a closing thought. Introduce the reason for the page, add memories or useful details, then finish with a direct message.",
          "Avoid adding sections just because a template offers them. Every element should help the recipient understand why you made the page."
        ]
      },
      {
        "heading": "Make it easy to open and share",
        "paragraphs": [
          "Preview the page on a phone before sharing. Check that text is readable, images load correctly and any music or video controls are clear.",
          "When you are ready, publish the page and send its link in the conversation where the recipient is most likely to see it."
        ]
      },
      {
        "heading": "A quick checklist before you send it",
        "paragraphs": [
          "Read the message once out loud, check names and dates, and open the published link in a private browser window. If the page is for someone overseas, consider when they are likely to be online."
        ]
      }
    ],
    "conclusion": "The most memorable personal pages are built from real details. Keep the design simple, make the message specific and share the link when the moment feels right.",
    "relatedPath": "/insights/",
    "relatedLabel": "Explore more personal page ideas"
  },
  {
    "slug": "birthday-website-for-dad",
    "primaryKeyword": "birthday website for dad",
    "supportingKeywords": [
      "birthday website for dad ideas",
      "birthday website for dad website",
      "birthday website for dad message",
      "personalized digital page"
    ],
    "relatedGuides": [
      "birthday-website-ideas",
      "how-to-make-a-birthday-website",
      "digital-love-letter-website-ideas"
    ],
    "faqs": [
      [
        "What should I include?",
        "Start with a personal opening, a few relevant photos or memories, and a clear message. Add music or video only if it improves the experience."
      ],
      [
        "Can I share the page with someone in another country?",
        "Yes. Send the published link and make sure the page is easy to read on a phone and convenient for the recipient’s time zone."
      ],
      [
        "How do I make it feel personal?",
        "Use real details, specific memories and words you would naturally say. A few thoughtful choices are more meaningful than a crowded page."
      ]
    ],
    "publishedAt": "2026-11-24",
    "updatedAt": "2026-11-24",
    "category": "BIRTHDAYS",
    "readTime": "4 MIN READ",
    "title": "Birthday Website for Dad: Personal Ideas and Message Inspiration",
    "seoTitle": "Birthday Website for Dad: Personal Ideas and",
    "description": "Make a birthday website for dad with family photos, stories, a favourite song and a message that feels genuine. Explore a simple planning guide.",
    "intro": "A birthday page for your dad works best when it reflects the details that make him himself. Collect family photographs, a few stories and one sincere message before choosing the design.",
    "sections": [
      {
        "heading": "Start with the person, not the design",
        "paragraphs": [
          "A birthday page for your dad works best when it reflects the details that make him himself. Collect family photographs, a few stories and one sincere message before choosing the design.",
          "Before choosing colours or effects, write down three details that make this person or moment unique. Those details should guide the page."
        ],
        "bullets": [
          "Choose a clear opening message",
          "Use a small selection of meaningful photos",
          "Keep the main message easy to find"
        ]
      },
      {
        "heading": "Build a simple story",
        "paragraphs": [
          "A personal page is easier to follow when it has a beginning, a middle and a closing thought. Introduce the reason for the page, add memories or useful details, then finish with a direct message.",
          "Avoid adding sections just because a template offers them. Every element should help the recipient understand why you made the page."
        ]
      },
      {
        "heading": "Make it easy to open and share",
        "paragraphs": [
          "Preview the page on a phone before sharing. Check that text is readable, images load correctly and any music or video controls are clear.",
          "When you are ready, publish the page and send its link in the conversation where the recipient is most likely to see it."
        ]
      },
      {
        "heading": "A quick checklist before you send it",
        "paragraphs": [
          "Read the message once out loud, check names and dates, and open the published link in a private browser window. If the page is for someone overseas, consider when they are likely to be online."
        ]
      }
    ],
    "conclusion": "The most memorable personal pages are built from real details. Keep the design simple, make the message specific and share the link when the moment feels right.",
    "relatedPath": "/insights/",
    "relatedLabel": "Explore more personal page ideas"
  },
  {
    "slug": "long-distance-anniversary-ideas",
    "primaryKeyword": "long distance anniversary ideas",
    "supportingKeywords": [
      "long distance anniversary ideas ideas",
      "long distance anniversary ideas website",
      "long distance anniversary ideas message",
      "personalized digital page"
    ],
    "relatedGuides": [
      "birthday-website-ideas",
      "how-to-make-a-birthday-website",
      "digital-love-letter-website-ideas"
    ],
    "faqs": [
      [
        "What should I include?",
        "Start with a personal opening, a few relevant photos or memories, and a clear message. Add music or video only if it improves the experience."
      ],
      [
        "Can I share the page with someone in another country?",
        "Yes. Send the published link and make sure the page is easy to read on a phone and convenient for the recipient’s time zone."
      ],
      [
        "How do I make it feel personal?",
        "Use real details, specific memories and words you would naturally say. A few thoughtful choices are more meaningful than a crowded page."
      ]
    ],
    "publishedAt": "2026-11-24",
    "updatedAt": "2026-11-24",
    "category": "ANNIVERSARIES",
    "readTime": "4 MIN READ",
    "title": "Long-Distance Anniversary Ideas: Make the Day Feel Close",
    "seoTitle": "Long-Distance Anniversary Ideas: Make the Day Feel",
    "description": "Discover thoughtful long-distance anniversary ideas, including a shared digital memory page, video message, online date and personal letter.",
    "intro": "Distance changes how you celebrate, but it does not have to make the day feel ordinary. Plan one shared moment across time zones and give your partner something personal to revisit.",
    "sections": [
      {
        "heading": "Start with the person, not the design",
        "paragraphs": [
          "Distance changes how you celebrate, but it does not have to make the day feel ordinary. Plan one shared moment across time zones and give your partner something personal to revisit.",
          "Before choosing colours or effects, write down three details that make this person or moment unique. Those details should guide the page."
        ],
        "bullets": [
          "Choose a clear opening message",
          "Use a small selection of meaningful photos",
          "Keep the main message easy to find"
        ]
      },
      {
        "heading": "Build a simple story",
        "paragraphs": [
          "A personal page is easier to follow when it has a beginning, a middle and a closing thought. Introduce the reason for the page, add memories or useful details, then finish with a direct message.",
          "Avoid adding sections just because a template offers them. Every element should help the recipient understand why you made the page."
        ]
      },
      {
        "heading": "Make it easy to open and share",
        "paragraphs": [
          "Preview the page on a phone before sharing. Check that text is readable, images load correctly and any music or video controls are clear.",
          "When you are ready, publish the page and send its link in the conversation where the recipient is most likely to see it."
        ]
      },
      {
        "heading": "A quick checklist before you send it",
        "paragraphs": [
          "Read the message once out loud, check names and dates, and open the published link in a private browser window. If the page is for someone overseas, consider when they are likely to be online."
        ]
      }
    ],
    "conclusion": "The most memorable personal pages are built from real details. Keep the design simple, make the message specific and share the link when the moment feels right.",
    "relatedPath": "/insights/",
    "relatedLabel": "Explore more personal page ideas"
  },
  {
    "slug": "digital-love-letter-examples",
    "primaryKeyword": "digital love letter examples",
    "supportingKeywords": [
      "digital love letter examples ideas",
      "digital love letter examples website",
      "digital love letter examples message",
      "personalized digital page"
    ],
    "relatedGuides": [
      "birthday-website-ideas",
      "how-to-make-a-birthday-website",
      "digital-love-letter-website-ideas"
    ],
    "faqs": [
      [
        "What should I include?",
        "Start with a personal opening, a few relevant photos or memories, and a clear message. Add music or video only if it improves the experience."
      ],
      [
        "Can I share the page with someone in another country?",
        "Yes. Send the published link and make sure the page is easy to read on a phone and convenient for the recipient’s time zone."
      ],
      [
        "How do I make it feel personal?",
        "Use real details, specific memories and words you would naturally say. A few thoughtful choices are more meaningful than a crowded page."
      ]
    ],
    "publishedAt": "2026-11-24",
    "updatedAt": "2026-11-24",
    "category": "LOVE LETTERS",
    "readTime": "4 MIN READ",
    "title": "Digital Love Letter Examples and Ideas for a Personal Page",
    "seoTitle": "Digital Love Letter Examples and Ideas for a",
    "description": "Find digital love letter examples, writing prompts and ideas for turning meaningful words, photos and memories into a shareable personal page.",
    "intro": "A digital love letter can be more than a block of text. Combine a clear opening, a few specific memories and a closing thought that sounds like you.",
    "sections": [
      {
        "heading": "Start with the person, not the design",
        "paragraphs": [
          "A digital love letter can be more than a block of text. Combine a clear opening, a few specific memories and a closing thought that sounds like you.",
          "Before choosing colours or effects, write down three details that make this person or moment unique. Those details should guide the page."
        ],
        "bullets": [
          "Choose a clear opening message",
          "Use a small selection of meaningful photos",
          "Keep the main message easy to find"
        ]
      },
      {
        "heading": "Build a simple story",
        "paragraphs": [
          "A personal page is easier to follow when it has a beginning, a middle and a closing thought. Introduce the reason for the page, add memories or useful details, then finish with a direct message.",
          "Avoid adding sections just because a template offers them. Every element should help the recipient understand why you made the page."
        ]
      },
      {
        "heading": "Make it easy to open and share",
        "paragraphs": [
          "Preview the page on a phone before sharing. Check that text is readable, images load correctly and any music or video controls are clear.",
          "When you are ready, publish the page and send its link in the conversation where the recipient is most likely to see it."
        ]
      },
      {
        "heading": "A quick checklist before you send it",
        "paragraphs": [
          "Read the message once out loud, check names and dates, and open the published link in a private browser window. If the page is for someone overseas, consider when they are likely to be online."
        ]
      }
    ],
    "conclusion": "The most memorable personal pages are built from real details. Keep the design simple, make the message specific and share the link when the moment feels right.",
    "relatedPath": "/insights/",
    "relatedLabel": "Explore more personal page ideas"
  },
  {
    "slug": "surprise-website-for-boyfriend",
    "primaryKeyword": "surprise website for boyfriend",
    "supportingKeywords": [
      "surprise website for boyfriend ideas",
      "surprise website for boyfriend website",
      "surprise website for boyfriend message",
      "personalized digital page"
    ],
    "relatedGuides": [
      "birthday-website-ideas",
      "how-to-make-a-birthday-website",
      "digital-love-letter-website-ideas"
    ],
    "faqs": [
      [
        "What should I include?",
        "Start with a personal opening, a few relevant photos or memories, and a clear message. Add music or video only if it improves the experience."
      ],
      [
        "Can I share the page with someone in another country?",
        "Yes. Send the published link and make sure the page is easy to read on a phone and convenient for the recipient’s time zone."
      ],
      [
        "How do I make it feel personal?",
        "Use real details, specific memories and words you would naturally say. A few thoughtful choices are more meaningful than a crowded page."
      ]
    ],
    "publishedAt": "2026-11-24",
    "updatedAt": "2026-11-24",
    "category": "SURPRISES",
    "readTime": "4 MIN READ",
    "title": "Surprise Website for Boyfriend: Ideas to Make It Personal",
    "seoTitle": "Surprise Website for Boyfriend: Ideas to Make It",
    "description": "Plan a surprise website for your boyfriend with a personal note, favourite photos, music and shared memories. Learn what to include and how to share it.",
    "intro": "A surprise website for your boyfriend gives you a place to collect details that matter to both of you. Keep the experience focused and make the first screen feel personal.",
    "sections": [
      {
        "heading": "Start with the person, not the design",
        "paragraphs": [
          "A surprise website for your boyfriend gives you a place to collect details that matter to both of you. Keep the experience focused and make the first screen feel personal.",
          "Before choosing colours or effects, write down three details that make this person or moment unique. Those details should guide the page."
        ],
        "bullets": [
          "Choose a clear opening message",
          "Use a small selection of meaningful photos",
          "Keep the main message easy to find"
        ]
      },
      {
        "heading": "Build a simple story",
        "paragraphs": [
          "A personal page is easier to follow when it has a beginning, a middle and a closing thought. Introduce the reason for the page, add memories or useful details, then finish with a direct message.",
          "Avoid adding sections just because a template offers them. Every element should help the recipient understand why you made the page."
        ]
      },
      {
        "heading": "Make it easy to open and share",
        "paragraphs": [
          "Preview the page on a phone before sharing. Check that text is readable, images load correctly and any music or video controls are clear.",
          "When you are ready, publish the page and send its link in the conversation where the recipient is most likely to see it."
        ]
      },
      {
        "heading": "A quick checklist before you send it",
        "paragraphs": [
          "Read the message once out loud, check names and dates, and open the published link in a private browser window. If the page is for someone overseas, consider when they are likely to be online."
        ]
      }
    ],
    "conclusion": "The most memorable personal pages are built from real details. Keep the design simple, make the message specific and share the link when the moment feels right.",
    "relatedPath": "/insights/",
    "relatedLabel": "Explore more personal page ideas"
  },
  {
    "slug": "online-proposal-ideas",
    "primaryKeyword": "online proposal ideas",
    "supportingKeywords": [
      "online proposal ideas ideas",
      "online proposal ideas website",
      "online proposal ideas message",
      "personalized digital page"
    ],
    "relatedGuides": [
      "birthday-website-ideas",
      "how-to-make-a-birthday-website",
      "digital-love-letter-website-ideas"
    ],
    "faqs": [
      [
        "What should I include?",
        "Start with a personal opening, a few relevant photos or memories, and a clear message. Add music or video only if it improves the experience."
      ],
      [
        "Can I share the page with someone in another country?",
        "Yes. Send the published link and make sure the page is easy to read on a phone and convenient for the recipient’s time zone."
      ],
      [
        "How do I make it feel personal?",
        "Use real details, specific memories and words you would naturally say. A few thoughtful choices are more meaningful than a crowded page."
      ]
    ],
    "publishedAt": "2026-11-24",
    "updatedAt": "2026-11-24",
    "category": "PROPOSALS",
    "readTime": "4 MIN READ",
    "title": "Online Proposal Ideas: Create a Meaningful Digital Moment",
    "seoTitle": "Online Proposal Ideas: Create a Meaningful Digital",
    "description": "Explore online proposal ideas, from a personal webpage and photo timeline to a video message. Plan a thoughtful digital proposal with care and meaning.",
    "intro": "An online proposal can feel intimate when it reflects your relationship rather than relying on a dramatic effect. Think about the story you want the page to tell.",
    "sections": [
      {
        "heading": "Start with the person, not the design",
        "paragraphs": [
          "An online proposal can feel intimate when it reflects your relationship rather than relying on a dramatic effect. Think about the story you want the page to tell.",
          "Before choosing colours or effects, write down three details that make this person or moment unique. Those details should guide the page."
        ],
        "bullets": [
          "Choose a clear opening message",
          "Use a small selection of meaningful photos",
          "Keep the main message easy to find"
        ]
      },
      {
        "heading": "Build a simple story",
        "paragraphs": [
          "A personal page is easier to follow when it has a beginning, a middle and a closing thought. Introduce the reason for the page, add memories or useful details, then finish with a direct message.",
          "Avoid adding sections just because a template offers them. Every element should help the recipient understand why you made the page."
        ]
      },
      {
        "heading": "Make it easy to open and share",
        "paragraphs": [
          "Preview the page on a phone before sharing. Check that text is readable, images load correctly and any music or video controls are clear.",
          "When you are ready, publish the page and send its link in the conversation where the recipient is most likely to see it."
        ]
      },
      {
        "heading": "A quick checklist before you send it",
        "paragraphs": [
          "Read the message once out loud, check names and dates, and open the published link in a private browser window. If the page is for someone overseas, consider when they are likely to be online."
        ]
      }
    ],
    "conclusion": "The most memorable personal pages are built from real details. Keep the design simple, make the message specific and share the link when the moment feels right.",
    "relatedPath": "/insights/",
    "relatedLabel": "Explore more personal page ideas"
  },
  {
    "slug": "digital-wedding-invitation-wording",
    "primaryKeyword": "digital wedding invitation wording",
    "supportingKeywords": [
      "digital wedding invitation wording ideas",
      "digital wedding invitation wording website",
      "digital wedding invitation wording message",
      "personalized digital page"
    ],
    "relatedGuides": [
      "birthday-website-ideas",
      "how-to-make-a-birthday-website",
      "digital-love-letter-website-ideas"
    ],
    "faqs": [
      [
        "What should I include?",
        "Start with a personal opening, a few relevant photos or memories, and a clear message. Add music or video only if it improves the experience."
      ],
      [
        "Can I share the page with someone in another country?",
        "Yes. Send the published link and make sure the page is easy to read on a phone and convenient for the recipient’s time zone."
      ],
      [
        "How do I make it feel personal?",
        "Use real details, specific memories and words you would naturally say. A few thoughtful choices are more meaningful than a crowded page."
      ]
    ],
    "publishedAt": "2026-11-24",
    "updatedAt": "2026-11-24",
    "category": "WEDDINGS",
    "readTime": "4 MIN READ",
    "title": "Digital Wedding Invitation Wording: Examples and Tips",
    "seoTitle": "Digital Wedding Invitation Wording: Examples and",
    "description": "Write clear digital wedding invitation wording with the essential details, a warm welcome, RSVP instructions and a mobile-friendly link for guests.",
    "intro": "A good digital wedding invitation helps guests understand the celebration quickly. Put the names, date, venue and RSVP information where people can find them.",
    "sections": [
      {
        "heading": "Start with the person, not the design",
        "paragraphs": [
          "A good digital wedding invitation helps guests understand the celebration quickly. Put the names, date, venue and RSVP information where people can find them.",
          "Before choosing colours or effects, write down three details that make this person or moment unique. Those details should guide the page."
        ],
        "bullets": [
          "Choose a clear opening message",
          "Use a small selection of meaningful photos",
          "Keep the main message easy to find"
        ]
      },
      {
        "heading": "Build a simple story",
        "paragraphs": [
          "A personal page is easier to follow when it has a beginning, a middle and a closing thought. Introduce the reason for the page, add memories or useful details, then finish with a direct message.",
          "Avoid adding sections just because a template offers them. Every element should help the recipient understand why you made the page."
        ]
      },
      {
        "heading": "Make it easy to open and share",
        "paragraphs": [
          "Preview the page on a phone before sharing. Check that text is readable, images load correctly and any music or video controls are clear.",
          "When you are ready, publish the page and send its link in the conversation where the recipient is most likely to see it."
        ]
      },
      {
        "heading": "A quick checklist before you send it",
        "paragraphs": [
          "Read the message once out loud, check names and dates, and open the published link in a private browser window. If the page is for someone overseas, consider when they are likely to be online."
        ]
      }
    ],
    "conclusion": "The most memorable personal pages are built from real details. Keep the design simple, make the message specific and share the link when the moment feels right.",
    "relatedPath": "/insights/",
    "relatedLabel": "Explore more personal page ideas"
  },
  {
    "slug": "personalized-thank-you-page",
    "primaryKeyword": "personalized thank you page",
    "supportingKeywords": [
      "personalized thank you page ideas",
      "personalized thank you page website",
      "personalized thank you page message",
      "personalized digital page"
    ],
    "relatedGuides": [
      "birthday-website-ideas",
      "how-to-make-a-birthday-website",
      "digital-love-letter-website-ideas"
    ],
    "faqs": [
      [
        "What should I include?",
        "Start with a personal opening, a few relevant photos or memories, and a clear message. Add music or video only if it improves the experience."
      ],
      [
        "Can I share the page with someone in another country?",
        "Yes. Send the published link and make sure the page is easy to read on a phone and convenient for the recipient’s time zone."
      ],
      [
        "How do I make it feel personal?",
        "Use real details, specific memories and words you would naturally say. A few thoughtful choices are more meaningful than a crowded page."
      ]
    ],
    "publishedAt": "2026-11-24",
    "updatedAt": "2026-11-24",
    "category": "MESSAGES",
    "readTime": "4 MIN READ",
    "title": "Personalized Thank You Page: Ideas for a Memorable Message",
    "seoTitle": "Personalized Thank You Page: Ideas for a Memorable",
    "description": "Create a personalized thank you page for a friend, partner, guest or colleague. Add a sincere note, meaningful photos and one easy-to-share link.",
    "intro": "A personalized thank-you page turns a quick note into something someone can revisit. Keep the message specific: mention what the person did and why it mattered.",
    "sections": [
      {
        "heading": "Start with the person, not the design",
        "paragraphs": [
          "A personalized thank-you page turns a quick note into something someone can revisit. Keep the message specific: mention what the person did and why it mattered.",
          "Before choosing colours or effects, write down three details that make this person or moment unique. Those details should guide the page."
        ],
        "bullets": [
          "Choose a clear opening message",
          "Use a small selection of meaningful photos",
          "Keep the main message easy to find"
        ]
      },
      {
        "heading": "Build a simple story",
        "paragraphs": [
          "A personal page is easier to follow when it has a beginning, a middle and a closing thought. Introduce the reason for the page, add memories or useful details, then finish with a direct message.",
          "Avoid adding sections just because a template offers them. Every element should help the recipient understand why you made the page."
        ]
      },
      {
        "heading": "Make it easy to open and share",
        "paragraphs": [
          "Preview the page on a phone before sharing. Check that text is readable, images load correctly and any music or video controls are clear.",
          "When you are ready, publish the page and send its link in the conversation where the recipient is most likely to see it."
        ]
      },
      {
        "heading": "A quick checklist before you send it",
        "paragraphs": [
          "Read the message once out loud, check names and dates, and open the published link in a private browser window. If the page is for someone overseas, consider when they are likely to be online."
        ]
      }
    ],
    "conclusion": "The most memorable personal pages are built from real details. Keep the design simple, make the message specific and share the link when the moment feels right.",
    "relatedPath": "/insights/",
    "relatedLabel": "Explore more personal page ideas"
  },
  ...additionalGuides,
  ...seoGuides,
  ...seoGuides2,
];

export const guideBySlug = (slug: string) => guides.find((guide) => guide.slug === slug);
