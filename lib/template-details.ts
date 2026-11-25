/**
 * Hand-written, template-specific copy for /template/[slug]/ pages.
 * Each entry is based on the template's own description in templates.json / templates.ts
 * so that no two template pages share the same body text.
 *
 *  bestFor : who or which moment this particular design suits
 *  feel    : the tone and visual mood a visitor will notice
 *  prepare : what to gather before editing (words, photos, dates)
 */
export type TemplateDetail = { bestFor: string; feel: string; prepare: string };

export const TEMPLATE_DETAILS: Record<string, TemplateDetail> = {
  'the-birthday-experience': {
    bestFor: 'A milestone birthday where you want a long, scene-by-scene journey rather than a single card, for a partner, a close friend or a family member who deserves the full production.',
    feel: 'Cinematic and immersive. It opens with a countdown and moves through balloons, candles, a bouquet, a galaxy of photos and an interactive garden.',
    prepare: 'With twelve scenes, plan your material first: a dozen or more photos in rough date order, two or three short personal memories, and the letter you want to land near the end.',
  },
  master: {
    bestFor: 'A first-time creator who wants a complete birthday page with the usual pieces already in place: countdown, photos, music, video and a personal message.',
    feel: 'Cinematic and warm. A 10-second countdown builds anticipation before the photos and message play.',
    prepare: 'Pick one song, five to eight photos and a message of a few short paragraphs. If you add a video, keep it short so the page stays light on mobile data.',
  },
  'prem-potro': {
    bestFor: 'A Bengali-speaking partner you want to ask “will you be mine?” in a gentle, old-fashioned way, through a love letter rather than a flashy game.',
    feel: 'Soft, sweet and sincere. The page says what is in your heart and saves the question for the end.',
    prepare: 'Write the letter in Bengali first and read it aloud. The closing question is the centre of the page, so decide how you want it worded before you edit.',
  },
  'wedding-proposal': {
    bestFor: 'A marriage proposal where you want to tell your story first and ask “Will you marry me?” at the finish.',
    feel: 'Romantic and traditional, with a build-up that leads to one big question.',
    prepare: 'Choose photos that show how the two of you got here, and write two or three lines for each chapter of the story. Check names and spelling twice.',
  },
  'bengoli-sorry': {
    bestFor: 'An apology to someone who reads Bengali, when something was truly broken and you want to show you want to repair it, not just say sorry.',
    feel: 'Reflective and dignified. The golden Kintsugi idea of mending broken pottery frames the apology as repair.',
    prepare: 'Be specific about what happened and what you will do differently. A short honest letter works better here than a long dramatic one.',
  },
  'valentine-2026': {
    bestFor: 'A Valentine’s Day proposal or love page for a partner, with more depth than a single card.',
    feel: 'Premium and playful. There is an interactive reveal, a story, a digital garden, a love jar and a final letter.',
    prepare: 'Prepare a handful of short “reasons I love you” for the love jar, a few photos for the story, and one closing letter. Send it a day or two ahead if you want it opened on the day.',
  },
  'sky-lantern': {
    bestFor: 'A romantic Bengali proposal for someone who loves the night sky, quiet moments and gestures that feel like a ritual.',
    feel: 'Dreamy and calm. Lanterns are released into a night sky before the closing question.',
    prepare: 'Write your Bengali message in short lines, since each line reads like a lantern being released. Keep the final question simple and direct.',
  },
  'miss-you-1': {
    bestFor: 'Someone far away, whether a partner, a friend or a parent, who you simply want to tell you are thinking of them.',
    feel: 'Tender and quiet, under falling cherry blossoms.',
    prepare: 'Choose one memory you shared and say it plainly. A single clear thought is enough for this design.',
  },
  'prem-kahini': {
    bestFor: 'A Bengali love letter that arrives as a sealed envelope, for a partner you want to surprise with a proposal.',
    feel: 'Intimate and storybook-like. The visitor opens the envelope and reads the letter before the final question.',
    prepare: 'Draft the full letter in Bengali, then trim it so it reads comfortably on a phone screen.',
  },
  'premium-sorry': {
    bestFor: 'A serious apology where a short note would feel too small, and you want to walk the other person through memories before asking for forgiveness.',
    feel: 'Cinematic and story-driven, with memories and a heartfelt letter ahead of a forgiveness question.',
    prepare: 'Choose two or three memories that mattered to both of you, and write the letter around what you learned, not around excuses.',
  },
  'chat-message': {
    bestFor: 'A Bengali-speaking partner who texts a lot, and a proposal that feels like a conversation you are having on a phone.',
    feel: 'Casual and modern. Messages arrive one by one in a phone chat and the last one asks the question.',
    prepare: 'Write ten to fifteen short messages in the order they should arrive, and keep the last one for the question.',
  },
  'love-letter': {
    bestFor: 'A classic, handwritten-feeling love letter for an anniversary, a birthday or a day with no occasion at all.',
    feel: 'Warm and personal. A sealed envelope opens into a letter with reasons, chapters and a promise.',
    prepare: 'List your reasons first, then group them into two or three chapters. End with one promise you can actually keep.',
  },
  'midnight-love': {
    bestFor: 'An evening confession or a love letter meant to be read at night, by someone who likes a bit of drama.',
    feel: 'Dark, elegant and golden. The letter is sealed behind a golden medallion.',
    prepare: 'Keep the letter short and intense. The design does a lot of the atmosphere work, so the words can be simple.',
  },
  sorry: {
    bestFor: 'A quiet apology after an argument, when you want to say what words did not manage to say in the moment.',
    feel: 'Still and rainy. The letter reads as if seen through a window on a wet day.',
    prepare: 'Write the apology in plain language, name what you did, and avoid “but”. A calm letter fits this design best.',
  },
  'sorry-letter-2': {
    bestFor: 'A gentle apology to someone who is hurt but not angry, where the goal is to mend things softly.',
    feel: 'Delicate and hopeful. The letter blooms open from a wilted flower.',
    prepare: 'Say sorry first, then say what you hope to rebuild. Keep it short enough to read in one breath.',
  },
  'hate-you-letter': {
    bestFor: 'A playful or cathartic message, such as telling a friend or partner you are angry in a way that ends in letting go.',
    feel: 'Dark and ember-lit. The letter says the angry words out loud, then lets go.',
    prepare: 'Decide whether this is a joke between friends or a real emotional release, and write the tone accordingly. Read it once as the recipient before sending.',
  },
  'miss-you-letter': {
    bestFor: 'Long-distance couples and anyone separated by time zones who wants to put the missing into words.',
    feel: 'Moonlit and wistful. It includes a miss-list, a time-apart counter and a memory timeline.',
    prepare: 'Note the date you last saw each other for the counter, five or six things you miss, and a few dated memories for the timeline.',
  },
  'normal-letter': {
    bestFor: 'A plain letter with no special occasion, for a friend, a relative or a partner when you just want to say something kind.',
    feel: 'Calm and paper-like, with an envelope, a wax seal and short notes.',
    prepare: 'Choose one thing you want the person to know. A few short notes and a gentle closing are all this design needs.',
  },
  'arcade-propose': {
    bestFor: 'A playful proposal or “will you go out with me?” for someone who loves games and humour.',
    feel: 'Retro and cheeky. It is an arcade game where YES wins and the NO button runs away.',
    prepare: 'Write the question and a short win message. Because the NO button dodges, make sure the person will find it funny and not pressuring.',
  },
  'best-friend-forever': {
    bestFor: 'A best friend’s birthday, a friendship anniversary or just a “you matter to me” moment.',
    feel: 'Warm and funny. It lists why the friend is special, has a friendship contract to sign and ends in a BFF celebration.',
    prepare: 'Think of three honest reasons you value them and two or three inside-joke clauses for the friendship contract.',
  },
  'best-friend-arcade': {
    bestFor: 'A gamer friend, or two friends who bond over competition and inside jokes.',
    feel: 'Energetic and retro. It is a two-player arcade with a hero pick, bond stats, memories to catch and a final boss.',
    prepare: 'Choose bond stats that are true and funny, a few memories to “catch”, and a closing message for after the final boss.',
  },
  'best-friend-letter': {
    bestFor: 'A heartfelt thank-you or goodbye to a best friend, for example before a move or after a hard year.',
    feel: 'Warm and handwritten-style. The envelope opens and the letter types out line by line, ending with a P.S.',
    prepare: 'Write the letter as you would say it to them, and save something small and personal for the P.S.',
  },
  'tumi-ki-amar-bondhu-hobe': {
    bestFor: 'Starting or renewing a friendship in Bengali, such as a new classmate, a colleague or a childhood friend you drifted from.',
    feel: 'Handmade and playful. It looks like it was drawn on kraft paper, and the NO button runs away.',
    prepare: 'List a few honest reasons you would like to be friends and keep the tone light. Use the informal “tui” or “tumi” form that matches your relationship.',
  },
  'arcade-friendship': {
    bestFor: 'A tech-minded friend, a gaming buddy or a teammate you want to turn into a close friend.',
    feel: 'Neon and terminal-style. It shows a scan log and friendship stats before one big question.',
    prepare: 'Write short, punchy lines for the scan log and a few stats that make the person smile.',
  },
  'a-coffee-with-friend': {
    bestFor: 'Someone you want to invite to coffee or befriend gently, especially a person who likes cafés and slower moments.',
    feel: 'Cosy and café-like. It uses a friendship menu, a coffee question and a friendship receipt, and the NO option runs away.',
    prepare: 'Think of menu items that describe your friendship, like “daily laughs” or “late-night advice”, and decide whether you want to suggest a real coffee date.',
  },
  'be-my-friend': {
    bestFor: 'A simple, low-pressure friend request, for a new neighbour, a classmate or an old friend you want to reconnect with.',
    feel: 'Warm and minimal. A handwritten-style letter asks one question: will you be my friend?',
    prepare: 'Keep the letter to a short paragraph. The simplicity is the point of this design.',
  },
  'live-bodcast-with-bestu': {
    bestFor: 'Celebrating a best friend with humour, for a birthday, a graduation or a win.',
    feel: 'Glamorous and showy, like a live-broadcast awards night where your friend takes the prize.',
    prepare: 'Think of award categories only the two of you would understand, and a short acceptance-speech message at the end.',
  },
  'sorry-bengoli-version': {
    bestFor: 'A long, careful Bengali apology to someone who deserves more than a single page of text.',
    feel: 'Layered and solemn. Eight golden chapters end with a heartfelt question.',
    prepare: 'Outline the eight chapters before writing: what happened, how it felt for them, what you understand now, and what you promise.',
  },
  'bati-ghor': {
    bestFor: 'A Bengali message for someone far away, from a partner overseas or a child abroad to a friend you miss.',
    feel: 'Atmospheric and deep. A storm, the sea and a lighthouse stand for waiting and for light that guides you home.',
    prepare: 'Think about what the lighthouse means between you two and write your message around that image.',
  },
  'mone-pore': {
    bestFor: 'A Bengali miss-you message built around memories and waiting, for a long-distance partner or someone you have lost touch with.',
    feel: 'Premium and emotional. It is built from memories, waiting and the words you could not say.',
    prepare: 'Choose memories with specific places or dates and write one honest line you have been holding back.',
  },
  'lumen-sorry': {
    bestFor: 'A Bengali apology for someone who appreciates design and thoughtful presentation.',
    feel: 'Editorial and polished. It looks like a magazine, with memories, regret and forgiveness set out like articles.',
    prepare: 'Plan a “cover story” headline, a couple of memory features and a closing note. Keep the voice sincere, not theatrical.',
  },
  'the-abyss-deep-sea': {
    bestFor: 'A heavy apology or a deep longing that needs space, for someone who responds to cinematic storytelling.',
    feel: 'Cinematic and immersive. The visitor descends through the deep sea toward an honest letter.',
    prepare: 'Save the real words for the bottom of the dive. Write one honest, unembellished letter and let the descent carry the mood.',
  },
  'birthday-for-friend': {
    bestFor: 'A friend’s birthday when you want something cheerful and personal that takes less preparation than a full journey.',
    feel: 'Bright and friendly, with a cake moment, kind notes and a letter.',
    prepare: 'Gather three or four photos, two or three kind notes and a short letter that mentions something specific from this year.',
  },
  'our-love-map': {
    bestFor: 'A couple with places to remember, such as where you met, first dates and trips, marking an anniversary.',
    feel: 'Antique and adventurous, like old parchment, with a memory map, a relationship counter, love notes, surprise coupons and a letter.',
    prepare: 'List five or six meaningful places with a short caption each, your relationship start date for the counter, and a few coupon ideas you will honour.',
  },
  'a-little-forever': {
    bestFor: 'An anniversary for a couple who like quiet storytelling and want to end with a promise for the future.',
    feel: 'Dreamy and gentle. It moves through memory chapters and keepsakes, asks a love question and closes on a promise for tomorrow.',
    prepare: 'Choose three or four chapters from your time together, one keepsake per chapter and one promise you want to make.',
  },
  'the-little-us-club': {
    bestFor: 'A playful couple who want an anniversary page that feels like joining a private club.',
    feel: 'Playful and editorial, with an interactive love letter, shared memory cards, promises and a final surprise.',
    prepare: 'Write a short note for each memory card, choose two or three promises, and decide what the final surprise will be.',
  },
  'amader-chotto-mohabishwo': {
    bestFor: 'A Bengali wedding anniversary for a spouse, especially a milestone year.',
    feel: 'Cinematic and starry. It gives you star messages, small promises and a surprise of love.',
    prepare: 'Write a few short star messages in Bengali, one for each year or each theme, and one small promise for the year ahead.',
  },
  'a-little-birthday-magic': {
    bestFor: 'A gentle birthday for a friend, partner or sibling who would enjoy small discoveries more than a big show.',
    feel: 'Pastel and joyful. It includes a personal note, three interactive gifts, a personalised wish and a candle-blowing moment.',
    prepare: 'Decide what the three gifts represent (for example a memory, a wish and a joke), and write the personal wish with their name in mind.',
  },
  'the-birthday-times': {
    bestFor: 'A humorous birthday for someone who enjoys newspapers, jokes or teasing, such as a sibling or a witty friend.',
    feel: 'Playful and editorial, set out like a newspaper edition with a mood forecast, expandable notes, photos and a scratch-to-reveal secret.',
    prepare: 'Think of a headline for the day, a funny “mood forecast”, a few short notes and one real secret or surprise to scratch off.',
  },
  'jonmodiner-chotto-bagan': {
    bestFor: 'A Bengali birthday for someone who loves flowers, gardens or a softer celebration.',
    feel: 'Fresh and floral. The visitor walks through a garden of wishes, petal messages and a bouquet they put together.',
    prepare: 'Write several short petal messages in Bengali and think about the bouquet colours that suit the birthday person.',
  },
  'ever-after-cinematic': {
    bestFor: 'A couple telling their story as a wedding page, or a proposal that is framed like a film.',
    feel: 'Cinematic and magical, with golden stardust, interactive love constellations, a soundtrack and a proposal ending.',
    prepare: 'Choose a song that matters, three to five memories that become the constellations, and the final line of the proposal.',
  },
  'shubho-porinoy-sat-pak': {
    bestFor: 'A Bengali wedding story that honours the tradition of the seven vows.',
    feel: 'Emotional and ceremonial, with seven lamps, seven vows, personal memories and music.',
    prepare: 'Write the seven vows in your own words, add a few photos of the couple, and choose a song with meaning to the families.',
  },
  'a-little-birthday-letter': {
    bestFor: 'A short, sincere birthday message when a letter says more than a party page could.',
    feel: 'Soft and lavender-toned. An envelope opens to a heartfelt note and a tiny secret.',
    prepare: 'Write one paragraph that mentions something only you would know about them, and decide what the tiny secret is.',
  },
  'birthday-letter-just-for-you': {
    bestFor: 'A birthday for someone who likes elegant, calm design, with a little play added in.',
    feel: 'Graceful and lavender, with a heartfelt letter, thoughtful wishes, an interactive cake and a hidden secret.',
    prepare: 'Write three or four wishes that are specific to the person, a short letter and one hidden message for the cake.',
  },
  'a-note-of-gratitude': {
    bestFor: 'Thanking a mentor, a teacher, a colleague or a family member when a quick message feels too slight.',
    feel: 'Cinematic and quiet. A sealed envelope opens under floating stardust to a final note.',
    prepare: 'Say what the person did and what difference it made. One specific example is worth more than a general thanks.',
  },
  'a-thousand-little-thanks': {
    bestFor: 'Saying thank you for many small things, for example to parents, a team or a long-time friend.',
    feel: 'Bright and celebratory, with floating lanterns, appreciation cards, a scroll-lit note and a confetti finale.',
    prepare: 'Make a list of small, specific moments, then turn each into one appreciation card. Add a closing note for the scroll.',
  },
  'blue-sky-wedding-invitation': {
    bestFor: 'A daytime or garden wedding, or a couple who prefer light, airy colours.',
    feel: 'Fresh and sky-blue. The invitation opens from a glowing wax seal to the couple’s names, details, a venue map and a live countdown.',
    prepare: 'Have the couple’s names, date, time, venue address and map link ready, and confirm them all before you share the link.',
  },
  'shubho-bibaho': {
    bestFor: 'A traditional Bengali wedding invitation, in maroon and gold.',
    feel: 'Royal and formal, with a sealed cover, editable couple names, event details, a venue map and a live countdown.',
    prepare: 'Prepare the couple’s names, each ceremony’s date and time, the venue and a map link. Ask an elder to proofread the Bengali text.',
  },
  'velvet-royale-wedding-invitation': {
    bestFor: 'An evening or formal wedding where the look should be rich and cinematic.',
    feel: 'Deep wine and gold. A glowing medallion reveals an ivory card with venue details and a live countdown.',
    prepare: 'Keep the card text brief and formal. Confirm the venue, dress code and the countdown date before publishing.',
  },
  'shonar-upohar-birthday-invitation': {
    bestFor: 'Inviting guests to a birthday party in Bengali, for a child or an adult.',
    feel: 'Festive and golden. A floating 3D gift box and a golden seal open to the event information and a live countdown.',
    prepare: 'Have the guest of honour’s name and age, the party date, time and location ready.',
  },
  'midnight-vinyl-birthday-invitation': {
    bestFor: 'A music-loving host planning a stylish birthday evening, such as a lounge night or a house party.',
    feel: 'Moody and cinematic. A spinning vinyl record reveals the celebration card with editable age and event details, plus a live countdown.',
    prepare: 'Pick the age to feature, the date and time, the venue, and a short line about the dress or the playlist.',
  },
  'neon-nexus-vip-invitation': {
    bestFor: 'A launch party, a milestone celebration or any event that should feel exclusive.',
    feel: 'Futuristic and glowing. A holographic pass reveals a luxury event page with a countdown, an ambience gallery and guest RSVP.',
    prepare: 'Gather the event details, three or four atmosphere photos for the gallery, and decide how guests should confirm attendance.',
  },
  'birthday-cinema-memory-puzzle': {
    bestFor: 'A birthday for someone who loves a game as much as a gift, and for photos you want them to rediscover.',
    feel: 'Cinematic and interactive. A ribbon reveal leads to a letter, a cake ritual, a one-photo sliding puzzle, a memory gallery and a final surprise.',
    prepare: 'Choose one meaningful photo for the sliding puzzle, a few more for the gallery, a short letter and the final surprise.',
  },
};
