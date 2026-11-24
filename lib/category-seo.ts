export type CategorySeo = {
  keyword: string;
  supporting: string[];
  title: string;
  description: string;
  introHeading: string;
  paragraphs: string[];
  checklistHeading: string;
  checklist: string[];
  faqs: [string, string][];
};

/** International category-page copy is intentionally distinct from the Bangladesh-focused Wishly.bd product homepage. */
export const ALSO_SEARCHED_AS: Record<string, string[]> = {'birthday': ['birthday website builder', 'birthday wishes website', 'birthday wish website', 'birthday surprise website', 'birthday invitation website', 'digital birthday card', 'interactive birthday card online'], 'proposal': ['proposal website maker', 'online marriage proposal page', 'date proposal website', 'be my valentine website', 'will you be my girlfriend page', 'digital proposal', 'interactive proposal with yes button'], 'wedding': ['wedding invitation website', 'digital wedding invitation with RSVP', 'online save the date', 'wedding website template', 'interactive wedding invitation'], 'miss-you': ['long distance gift website', 'digital gift for long distance relationship', 'miss you page for boyfriend or girlfriend', 'virtual love letter'], 'sorry': ['online apology page', 'sorry website for girlfriend', 'digital apology letter', 'say sorry with a website'], 'letter': ['digital love letter website', 'animated digital love letter', 'interactive love letter with envelope', 'personalised website gift for partner', 'online letter with photos and music'], 'anniversary': ['anniversary website', 'relationship website', 'anniversary page for couple', 'digital anniversary gift', 'time together counter page', 'relationship timeline website'], 'best-friend': ['best friend birthday website', 'funny surprise page for best friend', 'friendship website', 'digital gift for best friend'], 'friendship': ['friendship website', 'friendship day wish page', 'digital friendship card', 'invite a friend online page'], 'invitation': ['digital invitation website', 'online invitation with RSVP and countdown', 'birthday invitation website', 'interactive invitation link', 'e-invite website'], 'thank-you': ['thank you website', 'digital thank you card online', 'online gratitude page', 'appreciation page for teacher or mentor']};

export const CATEGORY_SEO: Record<string, CategorySeo> = {
  birthday: {
    keyword: 'birthday website templates',
    supporting: ['personal birthday website', 'birthday website for a friend', 'online birthday surprise page', 'birthday page design'],
    title: 'Birthday Website Templates for Personal Surprises',
    description: 'Explore birthday website templates for friends, partners and family. Preview personal page designs, add your own memories and choose a birthday surprise that feels like them.',
    introHeading: 'A birthday page should feel like it belongs to one person',
    paragraphs: [
      'A birthday website is more than a digital greeting when it gives the recipient something to discover. A familiar photograph, a short message, a favourite song or a sequence of memories can turn one shareable page into a small experience. Start by thinking about the person: do they enjoy a playful reveal, a calm letter, a photo-led story or a page full of celebration?',
      'Wishly’s birthday collection includes different visual styles and template experiences. The editing options are template-specific, so preview a design before choosing it. Check its language, opening, available media and interactive sections, then replace sample details with content you have permission to share.'
    ],
    checklistHeading: 'What to prepare for a birthday website',
    checklist: ['The recipient’s name and the tone you want: funny, warm, romantic or understated', 'Three to six photographs that tell a small story rather than an entire archive', 'A message with one specific memory and one sincere wish for the year ahead', 'Any song, video or interactive detail supported by the selected template'],
    faqs: [
      ['What should a birthday website include?', 'A clear birthday opening, a personal message and a few meaningful details are a strong starting point. Add photos, music or interactive scenes only when the selected template supports them and they suit the recipient.'],
      ['Can I make a birthday website for someone in another country?', 'Yes. The published page opens in a browser through its link. Consider the recipient’s time zone, language and mobile connection when you decide when to send it.'],
      ['Are all birthday templates the same?', 'No. Designs have different layouts, languages and editing options. Preview the exact design and check its details before you start personalising it.']
    ]
  },
  proposal: {
    keyword: 'proposal website templates',
    supporting: ['online proposal page', 'romantic proposal website', 'will you marry me website', 'digital proposal idea'],
    title: 'Proposal Website Templates for a Personal Question',
    description: 'Browse proposal website templates for a romantic, playful or story-led moment. Compare designs, plan your message and preview the experience before sharing it privately.',
    introHeading: 'Make the question clear, personal and comfortable',
    paragraphs: [
      'An online proposal page can create a thoughtful lead-in to an important question. It might begin with a photograph, recall a shared moment, build towards a letter or reveal the words you want to ask. The most effective design is not necessarily the most elaborate; it is the one that feels natural to the person receiving it.',
      'Before choosing a proposal template, consider whether your partner enjoys surprises, whether they would prefer a private moment and whether the page should be romantic, funny or understated. Keep the question easy to understand and avoid using an online reveal to pressure someone into an answer.'
    ],
    checklistHeading: 'Before you share a proposal page',
    checklist: ['Choose a setting and tone your partner would genuinely enjoy', 'Use one or two shared memories rather than a long public relationship history', 'Make the question readable without requiring visitors to solve a puzzle', 'Test the link and any interactive reveal before sending it'],
    faqs: [
      ['What makes a good proposal website?', 'A clear question, a personal reason for asking and a design that suits your relationship. Visual effects should support the message instead of hiding it.'],
      ['Should an online proposal be public?', 'That depends on the person and your relationship. A private link may be more comfortable than a public post, especially for an important personal question.'],
      ['Can I use photos and a letter?', 'You can personalise supported text and media. The available options depend on the proposal template you choose.']
    ]
  },
  wedding: {
    keyword: 'wedding website templates',
    supporting: ['online wedding invitation website', 'digital wedding invitation page', 'wedding story website', 'shareable wedding invitation'],
    title: 'Wedding Website Templates for Invites & Stories',
    description: 'Find wedding website templates for digital invitations and personal wedding stories. See what event details to prepare and choose a design guests can open from one link.',
    introHeading: 'A wedding page can welcome guests or tell your story',
    paragraphs: [
      'Wedding website templates can serve different purposes. An invitation page needs to make the event details easy to find; a couple’s story page can give photographs and memories more room. Decide which job matters most before you choose a design, because the right layout for guests is not always the same as the right layout for a personal story.',
      'For an invitation, put names, date, time, venue and the next step near the top. Add a map link or travel note when useful. RSVP, countdowns and other interactive features are available only where the selected design supports them, so check the preview and its language before sharing the link with guests.'
    ],
    checklistHeading: 'Event details guests may need',
    checklist: ['Names of the couple or hosts and the type of celebration', 'Date, local start time, venue name and a clear address or map link', 'Dress guidance, schedule, travel or accessibility notes where relevant', 'A clear response method and RSVP deadline if your chosen design supports it'],
    faqs: [
      ['What should a digital wedding invitation website include?', 'At minimum, make the hosts or couple, date, time and venue clear. Add schedule, travel notes and response details when they are relevant to your guests.'],
      ['Can I use one link for all wedding guests?', 'A published page can be shared by link. Check whether the information is suitable for everyone who receives it and avoid putting sensitive personal details on a broadly shared page.'],
      ['Does every wedding template include RSVP?', 'No. Interactive options vary by template. Preview the design and check its listed features before relying on a response form.']
    ]
  },
  'miss-you': {
    keyword: 'miss you website for long distance',
    supporting: ['long distance message page', 'digital miss you letter', 'long distance relationship surprise', 'miss you page for a friend'],
    title: 'Miss You Website Ideas for Long Distance',
    description: 'Explore miss-you website designs for partners, friends and family living far apart. Plan a personal message, shared memories and a link that is easy to open anywhere.',
    introHeading: 'Give a long-distance message a place of its own',
    paragraphs: [
      'Distance changes the rhythm of ordinary communication. A dedicated miss-you page can gather a photograph, a remembered place, a short letter and a note about the next time you hope to meet. It does not replace a conversation; it gives one message a little more context and care.',
      'Think about what the recipient can comfortably open. A simple page with readable text may be better than a large media-heavy experience on a slow connection. If you include music or video, make sure the message still makes sense when sound is off or the recipient opens it at a different time.'
    ],
    checklistHeading: 'Details that help a miss-you page feel real',
    checklist: ['A place, routine or small memory you both recognise', 'A short note that sounds like your usual voice', 'Photos that are appropriate for the recipient and the link’s privacy', 'A send time that considers the other person’s local time'],
    faqs: [
      ['What can I put on a miss-you website?', 'Use a personal note, a shared memory and a few photographs. Add supported music or video only when it helps the recipient feel connected.'],
      ['Can someone overseas open a Wishly page?', 'The published page opens in a browser through its link. Check the page on a phone and consider connection quality before adding large media.'],
      ['Is a miss-you page only for couples?', 'No. A thoughtful page can be for a friend, parent, sibling or anyone you miss. Adjust the tone to the relationship.']
    ]
  },
  sorry: {
    keyword: 'apology website templates',
    supporting: ['online apology page', 'sorry message website', 'digital apology letter', 'how to say sorry online'],
    title: 'Apology Website Templates for a Sincere Message',
    description: 'Explore apology website templates for a thoughtful sorry message. Learn how to write with accountability, choose a respectful design and give the recipient space to respond.',
    introHeading: 'Design should support an apology, never apply pressure',
    paragraphs: [
      'An apology page can give you room to explain what you understand, acknowledge the effect of your actions and state what you intend to change. A visual design may help organise the message, but it cannot make an apology sincere. That comes from taking responsibility and respecting the other person’s response.',
      'Choose a calm design and keep the message direct. Avoid framing the recipient as responsible for forgiving you, and do not use a public reveal or repeated notifications to force a reply. A link should make it easier for someone to read your words when they choose to.'
    ],
    checklistHeading: 'A respectful apology message checklist',
    checklist: ['Name the action clearly without minimising or making excuses', 'Acknowledge the impact instead of telling the other person how to feel', 'Say what you will do differently in concrete terms', 'Let the recipient decide whether and when to respond'],
    faqs: [
      ['What should an apology website say?', 'Explain what you are apologising for, acknowledge the impact and state what you plan to change. Keep it sincere and avoid asking for immediate forgiveness.'],
      ['Should I include photos or music?', 'Only if they genuinely support the message and the recipient would welcome them. A simple text-led page is often more appropriate.'],
      ['Can a website fix a disagreement?', 'A page can deliver your words, but it cannot replace listening, changed behaviour or a conversation when the other person is ready.']
    ]
  },
  letter: {
    keyword: 'digital love letter website',
    supporting: ['online love letter maker', 'interactive digital letter', 'personal love letter page', 'share a love letter online'],
    title: 'Digital Love Letter Website Templates and Ideas',
    description: 'Explore digital love letter website designs and learn how to shape a personal online letter with photographs, thoughtful wording and a shareable page.',
    introHeading: 'A digital letter can feel considered without losing its voice',
    paragraphs: [
      'A digital love letter can be quiet and minimal, or it can open like an envelope and reveal a sequence of memories. The format is flexible, but the writing still matters most. Begin with one honest reason for writing, then choose the layout that gives those words enough space.',
      'Use familiar language, a detail only the recipient will recognise and a natural closing. If you add images, music or an animated reveal, make sure those elements do not interrupt the reading flow. The exact editing tools vary across templates.'
    ],
    checklistHeading: 'A simple structure for an online love letter',
    checklist: ['An opening line that explains why you wanted to write', 'One or two specific memories or examples', 'A clear expression of what you appreciate', 'A closing line that sounds natural rather than promotional'],
    faqs: [
      ['How do I make a digital love letter?', 'Choose a letter-style design, write your message in your own voice, add a few relevant memories and preview the page on a phone before sharing.'],
      ['Can a digital love letter include music?', 'Some templates support music or video. Check the selected template and ensure the letter remains readable when sound is disabled.'],
      ['Is a digital letter the same as an e-card?', 'A letter usually gives more room to a personal message and story. An e-card is often a shorter greeting. The best format depends on what you want to say.']
    ]
  },
  anniversary: {
    keyword: 'anniversary website templates',
    supporting: ['anniversary surprise website', 'couple memory page', 'anniversary digital gift', 'relationship story website'],
    title: 'Anniversary Website Templates for Shared Memories',
    description: 'Discover anniversary website templates for couples and meaningful milestones. Plan a small memory story, add a personal note and preview your page before sharing.',
    introHeading: 'Celebrate the details that make your time together yours',
    paragraphs: [
      'An anniversary page can look back at a relationship without becoming a complete archive. Choose a few moments that show how your story has grown: a first meeting, an ordinary ritual, a trip or a day that changed something. A short sequence can be easier to revisit than a long list of dates.',
      'Mix photographs with captions and a message about what you value now. If you are making the page for a long-distance partner, consider the time zone and the best moment to send it. Preview the design and confirm which editing options it supports.'
    ],
    checklistHeading: 'What to include in an anniversary page',
    checklist: ['A milestone or theme that gives the page a clear beginning', 'A small, varied selection of photographs with context', 'One note about what you appreciate in the present', 'A future plan, hope or simple promise to close the page'],
    faqs: [
      ['What should an anniversary website include?', 'A few shared memories, photographs, a personal message and a thought about the future. Choose details that reflect your relationship rather than filling every available section.'],
      ['Can I make an anniversary page for a long-distance partner?', 'Yes. Share the published link and choose a send time that makes sense in both time zones.'],
      ['Do anniversary templates have a timeline?', 'Template layouts vary. Use the preview to see whether a design has a timeline, gallery, letter or another interaction.']
    ]
  },
  'best-friend': {
    keyword: 'best friend birthday website',
    supporting: ['birthday website for best friend', 'best friend surprise page', 'funny birthday website', 'friendship memory page'],
    title: 'Best Friend Birthday Website Ideas and Templates',
    description: 'Find best friend birthday website ideas that balance inside jokes, shared photos and a sincere message. Preview playful page designs for a personal surprise.',
    introHeading: 'Build the page around the details only your friend knows',
    paragraphs: [
      'A best-friend birthday website works when it feels recognisable. A running joke, a favourite phrase, a trip story or a collection of small memories can give the page a personality that a generic birthday greeting cannot. Let the friendship set the tone: silly, sentimental, understated or a little of each.',
      'Use a design that is comfortable for your friend to open and keep the message readable on a phone. If the surprise is shared in a group chat, check that any photos or private jokes are appropriate for everyone who may see the link.'
    ],
    checklistHeading: 'Personal details worth adding',
    checklist: ['An inside joke or phrase that will make your friend smile', 'A few photographs from different chapters of the friendship', 'One sincere line that says what you value about them', 'A final plan or invitation to make another memory together'],
    faqs: [
      ['How do I make a birthday website for my best friend?', 'Choose a birthday design, add a few shared memories and write a message that sounds like your friendship. Preview it on a phone before sending the link.'],
      ['Can the page be funny rather than sentimental?', 'Yes. Choose a playful design and use humour your friend will understand. A short sincere closing can balance the joke.'],
      ['What if my friend does not like attention?', 'Keep the page private and understated. A simple note sent directly may feel better than a public post or a large group reveal.']
    ]
  },
  friendship: {
    keyword: 'friendship website ideas',
    supporting: ['friendship invitation page', 'website for a new friend', 'friend appreciation page', 'friendship digital gift'],
    title: 'Friendship Website Ideas for Notes and Memories',
    description: 'Explore friendship website ideas for a new connection, an old friend or a thoughtful thank-you. Choose a comfortable design and write a message that feels genuine.',
    introHeading: 'A friendship page can be playful, welcoming or quietly grateful',
    paragraphs: [
      'Not every personal website needs a birthday or anniversary. You might want to thank a friend, mark a shared achievement, invite someone to an event or simply remind a person that you appreciate them. The page works best when its purpose is clear and the invitation feels easy to accept or decline.',
      'Choose wording that respects the relationship and the recipient’s comfort. For a new friendship, keep the tone light and low-pressure. For a long-standing friend, shared memories can take the lead. Use the template preview to check that the design fits the message.'
    ],
    checklistHeading: 'Ideas for a friendship page',
    checklist: ['A thank-you note for a specific act of kindness', 'A shared memory or photo from a time you both remember', 'A low-pressure invitation to meet or do something together', 'A short message that makes it clear why you created the page'],
    faqs: [
      ['What can a friendship website be used for?', 'It can hold a thank-you note, birthday greeting, shared memory, event invitation or an unexpected message of appreciation.'],
      ['Can I make a friendship website for a new friend?', 'Yes. Keep the invitation friendly, clear and low-pressure so the other person can respond comfortably.'],
      ['Does a friendship page have to be for a special occasion?', 'No. A personal note can be shared simply because you want to recognise someone or stay connected.']
    ]
  },
  invitation: {
    keyword: 'digital invitation website templates',
    supporting: ['online invitation website', 'shareable event invitation link', 'birthday party invitation website', 'digital event page'],
    title: 'Digital Invitation Website Templates for Events',
    description: 'Browse digital invitation website templates for celebrations and gatherings. See which event details to prepare and make the invitation easy for guests to open and understand.',
    introHeading: 'An online invitation should make the next step obvious',
    paragraphs: [
      'An invitation page has two jobs: make the event feel welcoming and help guests understand what to do next. The visual style creates the mood, while the practical information should remain easy to find. Decide whether you need a birthday party invitation, a wedding announcement or a general event page before choosing a design.',
      'Check names, date, local time, venue and response instructions carefully. Some templates include interactive options such as RSVP or a countdown, but not every design does. Use the preview to confirm the exact layout and avoid sharing details that should remain private.'
    ],
    checklistHeading: 'Invitation details to check before sending',
    checklist: ['Event name, host and the people being invited', 'Date, start time and time zone when guests are in different places', 'Venue address, map link, dress note or useful arrival information', 'How guests should respond and by what date, if responses are required'],
    faqs: [
      ['What is a digital invitation website?', 'It is an event page that gathers invitation wording and key details in a link guests can open in a browser.'],
      ['Can guests RSVP through a Wishly invitation?', 'Some designs may support RSVP or reply features. Check the selected template’s details and preview before relying on an online response.'],
      ['Can I share an invitation internationally?', 'Yes. A link can be sent across countries. Include the local time zone and any travel details guests need to understand the event.']
    ]
  },
  'thank-you': {
    keyword: 'thank you website templates',
    supporting: ['digital thank you page', 'personal gratitude website', 'thank you page for a mentor', 'appreciation page online'],
    title: 'Thank-You Website Templates for Gratitude',
    description: 'Find thank-you website templates for friends, teachers, mentors and family. Turn a specific act of kindness into a thoughtful message with a page you can share by link.',
    introHeading: 'Make gratitude specific enough to be remembered',
    paragraphs: [
      'A thank-you page is most meaningful when it explains what happened and why it mattered. It might recognise a teacher who encouraged you, a mentor who gave useful advice, a friend who showed up or a family member who made an ordinary day easier. Start with the action rather than a broad compliment.',
      'Keep the focus on the person you are thanking. A photograph or short memory can add context, but the message should remain easy to read and sincere. Choose a simple template if the gesture is personal, and make sure the page does not expose private details without permission.'
    ],
    checklistHeading: 'A thoughtful thank-you page can include',
    checklist: ['The specific action, support or gesture you remember', 'A sentence explaining the difference it made', 'A photograph or small shared detail where appropriate', 'A closing note that expresses appreciation without expecting anything in return'],
    faqs: [
      ['Who can I make a thank-you website for?', 'A friend, teacher, mentor, colleague, family member or anyone whose help or kindness you want to recognise.'],
      ['What should I write on a thank-you page?', 'Name the action, explain why it mattered and say what you appreciate. Specific examples make the message more meaningful than a generic thank-you.'],
      ['Should a thank-you page include photos?', 'Only if the photograph is relevant and you have permission to share it. A clear written note can be enough on its own.']
    ]
  }
};
