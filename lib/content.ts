// International editorial copy. This content is written for discovery and guidance,
// rather than mirroring the product homepage on wishly.bd.
export const steps: [string, string, string][] = [
  ['1', 'Choose the feeling first', 'Start with the person and the moment. A birthday, a quiet apology and a wedding invitation need different moods, so begin with the occasion that fits.'],
  ['2', 'Add the details only you know', 'Bring in a few photographs, the words you would actually say and a song or video when it adds something. The small personal details do the important work.'],
  ['3', 'Send the page, not another paragraph', 'Publish your page and share its single link in a message, email or printed QR code. The recipient opens it in a browser; there is no app to install.'],
];

export const features: [string, string, string][] = [
  ['pen', 'Edit in context', 'Personalise supported text and page details in the visual editor, so the finished page sounds like you.'],
  ['images', 'Make room for memories', 'Add your own photographs and turn a familiar moment into the centre of the experience.'],
  ['music', 'Set a soundtrack', 'Where a design supports it, add music or a video to give the page its own atmosphere.'],
  ['mail', 'Say more than “happy birthday”', 'Use a letter, a note or a final reveal to give your message the space it deserves.'],
  ['phone', 'Designed for a small screen', 'Create and preview from a phone, then share a page that is easy to open on mobile.'],
  ['link', 'One link to pass along', 'Share the published page directly, or use a QR code when a printed card or invitation makes more sense.'],
];

export const faqs: [string, string][] = [
  ['What is a personal website on Wishly?', 'It is a small, occasion-focused web page you personalise for one person or group. It can bring together a message, photographs and the interactive details supported by the chosen design.'],
  ['Can someone open my page in another country?', 'Yes. A published Wishly page is opened through a regular web browser, so you can send its link to someone in another country. The recipient does not need to install an app.'],
  ['Where are accounts and published pages managed?', 'The account area, editor, dashboard, checkout and published-page tools are on wishly.bd. This international site is the public guide and template showcase; its create, login and demo links take you to the main Wishly app.'],
  ['Do I need to know how to code?', 'No. Choose a template and personalise the parts available in its editor. You do not need to arrange hosting or write HTML or CSS.'],
  ['Can I start without paying?', 'Wishly is free to start. Some designs may be marked as premium, and any applicable price is shown in the main app before you purchase.'],
  ['Can I use my own photographs and words?', 'Yes. You can personalise supported text and upload your own photos. Music, video and other interactive elements depend on the options available in the selected template.'],
  ['Which languages are available?', 'The collection includes English designs and selected Bengali-language designs. Each template card indicates its language.'],
  ['Can I update a page after sharing it?', 'You can return to your Wishly account on wishly.bd, edit a page and publish the changes. Check the editor for the options available to that page.'],
  ['Does Wishly make printed invitations?', 'Wishly creates shareable web pages. You can send the link digitally or use a QR code where available; printing and delivery are not part of the website builder.'],
  ['What if I need a custom design?', 'Use the contact or custom-request options in the main Wishly app to describe the occasion, visual direction and details you need.'],
];

type Occasion = { title: string; h1: string; intro: string; tips: [string, string][]; audience: string; closing: string };
export const OCCASION_COPY: Record<string, Occasion> = {
  birthday: {
    title: 'Birthday Website Ideas & Templates for a Personal Online Surprise',
    h1: 'Birthday pages with a personal touch',
    audience: 'a friend, partner or family member',
    intro: 'A birthday page gives your greeting somewhere to unfold. Instead of sending one line and a string of photos, bring together a memory, a little anticipation and a note written for the person celebrating. Explore designs for different personalities, from playful surprises to quieter letters.',
    tips: [['Choose a moment to build around', 'A shared trip, the first time you met or an ordinary afternoon can make a stronger opening than a generic birthday quote.'], ['Keep the photo selection deliberate', 'Pick a small set of pictures that tell a story. A few meaningful frames are easier to revisit than a crowded gallery.'], ['Give the ending a little care', 'Close with the message you most want them to remember, rather than adding another list of wishes.']],
    closing: 'A thoughtful birthday website does not need to be complicated. One good memory, a design that suits them and a sincere note are a strong place to begin.',
  },
  proposal: {
    title: 'Romantic Proposal Website Templates for an Online Question',
    h1: 'A proposal that feels like your story',
    audience: 'someone you hope to build a future with',
    intro: 'A proposal page can turn a question into a sequence: a little context, a shared memory and the words you have been working up to say. Browse romantic, playful and cinematic designs, then choose the tone that feels true to your relationship.',
    tips: [['Start with your own story', 'Mention a detail only the two of you would recognise. It makes the page feel personal before the question appears.'], ['Make the question unmistakable', 'Keep the main line clear and easy to read. The design should support the moment, not hide it.'], ['Think about the recipient', 'A funny reveal may suit one person; a quiet letter may suit another. Choose the experience they would enjoy.']],
    closing: 'The best proposal design is the one that sounds like the two of you. Use the template as a frame, not as a script.',
  },
  wedding: {
    title: 'Wedding Website Templates for Invitations and Love Stories',
    h1: 'Wedding pages for invitations and stories',
    audience: 'your partner, family and guests',
    intro: 'A wedding-related page might announce a date, invite guests or tell the story behind the celebration. These designs offer different ways to share names, photographs and event details in one link. Choose the template according to what the visitor needs to know first.',
    tips: [['Put practical details where guests can find them', 'Names, date, time and location should be easy to spot before the decorative elements.'], ['Use photographs with a purpose', 'Choose an image that helps guests recognise the couple or understand the tone of the event.'], ['Make the link easy to share', 'Send the same page to guests and consider a QR code for printed stationery where supported.']],
    closing: 'For an invitation, clarity comes first. For a love story, the memories can take the lead. Pick the design that matches the job.',
  },
  'miss-you': {
    title: 'Miss You Website Templates for Long-Distance Relationships',
    h1: 'For the person you wish was closer',
    audience: 'someone you miss',
    intro: 'When distance makes a normal message feel too small, a dedicated page can hold a few memories and the words you want to send. Explore gentle letter-style experiences and designs made for long-distance affection and friendship.',
    tips: [['Choose a memory you can both picture', 'A place, a meal or a familiar routine often carries more feeling than a broad statement about missing someone.'], ['Write in your own voice', 'Keep the wording natural. The page should sound like a message from you, not a greeting-card catalogue.'], ['Send it at a considerate time', 'Think about the other person’s time zone and whether they will have a moment to read it.']],
    closing: 'A shared memory can make a long distance feel a little shorter, even when the miles are still there.',
  },
  sorry: {
    title: 'Apology Website Templates for a Thoughtful Sorry Message',
    h1: 'Make room for a sincere apology',
    audience: 'someone you owe an honest conversation',
    intro: 'An apology should be clear, accountable and free of pressure. A quiet page can give you room to explain what you understand, acknowledge the impact and say what you intend to do differently. Browse designs, but let the words remain yours.',
    tips: [['Name what happened', 'Be specific about your action and avoid turning the apology into a defence.'], ['Acknowledge the effect', 'Show that you have considered how the other person may have felt, without telling them how they should feel now.'], ['Leave room for their response', 'A page can deliver your message, but it cannot demand forgiveness. Give the other person time and choice.']],
    closing: 'Design can make a message easier to read, but sincerity comes from taking responsibility and respecting the other person’s response.',
  },
  letter: {
    title: 'Digital Love Letter Templates for Personal Online Notes',
    h1: 'A digital letter, with a little ceremony',
    audience: 'someone you want to write to',
    intro: 'A digital letter can feel more considered than a quick chat message. Choose an envelope, journal or minimal page, then give your words room to breathe. These designs can work for love notes, gratitude, apologies and messages sent across a distance.',
    tips: [['Write a first draft without the design', 'Decide what you want to say before choosing colours, animation or a reveal.'], ['Use details rather than grand claims', 'A small habit, a remembered conversation or a shared joke makes the note recognisably yours.'], ['Read it once on a phone', 'Short paragraphs and clear spacing help the letter feel comfortable on a small screen.']],
    closing: 'You do not need perfect prose. A sincere note with a few specific details is often enough.',
  },
  anniversary: {
    title: 'Anniversary Website Templates to Celebrate Shared Memories',
    h1: 'Celebrate the chapters you have shared',
    audience: 'your partner or someone close to you',
    intro: 'An anniversary is a chance to look back without getting stuck in the past. Build a page around a handful of moments, the things you have learned together and something you are looking forward to next.',
    tips: [['Choose a small timeline', 'Three to five milestones can tell a story without turning the page into a full archive.'], ['Mix meaningful and ordinary moments', 'The everyday photograph may be the one that brings back the clearest memory.'], ['Finish with what comes next', 'A future plan or a small promise gives the page somewhere to go after the memories.']],
    closing: 'A shared history is made of ordinary days as much as big milestones. Let the page reflect both.',
  },
  'best-friend': {
    title: 'Best Friend Website Templates for a Funny Personal Surprise',
    h1: 'A page for your favourite person to laugh with',
    audience: 'your best friend',
    intro: 'The strongest friendship surprises usually include the details nobody else would understand. Explore playful designs and turn an inside joke, a long-running tradition or a shared memory into a page made for one person.',
    tips: [['Use the joke only they will get', 'A tiny reference can make the whole experience feel like it belongs to your friendship.'], ['Balance humour with appreciation', 'A funny opening and one sincere line at the end can work beautifully together.'], ['Do not wait for a birthday', 'A random Wednesday can be a perfectly good reason to remind someone they matter.']],
    closing: 'The best friend page should feel like the two of you: specific, warm and a little bit ridiculous.',
  },
  friendship: {
    title: 'Friendship Website Templates for Invitations and New Connections',
    h1: 'A friendly way to start a connection',
    audience: 'a new friend or someone you would like to know better',
    intro: 'Some designs are made for asking a simple question or inviting someone into a new friendship. Keep the message light, respectful and easy to answer, and let the page add a playful introduction.',
    tips: [['Keep the invitation low-pressure', 'Be clear about what you are asking and make it comfortable for the other person to decide.'], ['Add one reason you would enjoy their company', 'A shared interest or a good conversation is a genuine starting point.'], ['Let the design stay light', 'A friendly page works best when the message is easy to understand.']],
    closing: 'A good invitation opens a door; it does not push anyone through it.',
  },
  invitation: {
    title: 'Digital Invitation Website Templates for Events and Celebrations',
    h1: 'Event invitations made to share as a link',
    audience: 'the people you are inviting',
    intro: 'A digital invitation can gather the information guests need in one place. Browse styles for birthdays, weddings and other celebrations, then make the date, location and host easy to recognise.',
    tips: [['Lead with the event essentials', 'Put the occasion, date and venue near the beginning so guests can check them quickly.'], ['Include a useful location detail', 'A map link or clear address can save guests an extra message when they are planning the journey.'], ['Make the next step obvious', 'Tell guests how to respond or where to find any further information.']],
    closing: 'An invitation is both a welcome and a practical guide. Make it attractive, but keep the important details clear.',
  },
  'thank-you': {
    title: 'Thank You Website Templates for Personal Gratitude Notes',
    h1: 'A more personal way to say thank you',
    audience: 'someone whose kindness mattered',
    intro: 'A thank-you page can be a small keepsake for a teacher, friend, colleague or family member. Rather than relying on a generic phrase, use it to describe what the person did and why you remember it.',
    tips: [['Be specific about the help', 'Name the action, gesture or moment you are grateful for.'], ['Explain why it mattered', 'One honest sentence about its effect makes gratitude feel real.'], ['Keep the focus on them', 'A thank-you is strongest when it recognises the other person rather than trying to impress them.']],
    closing: 'A specific thank-you can stay with someone long after the occasion has passed.',
  },
};
