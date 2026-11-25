import { OCCASIONS } from './templates';
import { guides } from './guides';
import { additionalCountryContent } from './country-content-additional';
import { generateCountryContent, countCountryContentWords } from './country-content-generated';
import { curatedCountrySources } from './country-content-curated-sources';

export type CountryRegion = 'Asia' | 'Europe' | 'Africa' | 'North America' | 'South America' | 'Oceania' | 'Middle East';
export type CountryOccasion = { name: string; whenUsually: string; note: string };
export type CountryGuideSource = { title: string; url: string; checked: string };
export type CountryContent = {
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  occasions: CountryOccasion[];
  greetingCustoms: string[];
  sharingHabits: string;
  sampleWishes: string[];
  sensitivities: string[];
  faqs: [string, string][];
  relatedOccasionKeys: string[];
  relatedGuideSlugs: string[];
  sources?: CountryGuideSource[];
};
export type Country = {
  slug: string;
  name: string;
  isoCode: string;
  region: CountryRegion;
  status: 'ready' | 'draft';
  content?: CountryContent;
};

type CountryRow = [slug: string, name: string, isoCode: string, region: CountryRegion];

// UN member states plus the Holy See (Vatican City) and the State of Palestine.
// A row receives ready status only when its own complete, country-specific content object exists.
const countryRows: CountryRow[] = [
  ['afghanistan', 'Afghanistan', 'AF', 'Asia'],
  ['albania', 'Albania', 'AL', 'Europe'],
  ['algeria', 'Algeria', 'DZ', 'Africa'],
  ['andorra', 'Andorra', 'AD', 'Europe'],
  ['angola', 'Angola', 'AO', 'Africa'],
  ['antigua-and-barbuda', 'Antigua and Barbuda', 'AG', 'North America'],
  ['argentina', 'Argentina', 'AR', 'South America'],
  ['armenia', 'Armenia', 'AM', 'Asia'],
  ['australia', 'Australia', 'AU', 'Oceania'],
  ['austria', 'Austria', 'AT', 'Europe'],
  ['azerbaijan', 'Azerbaijan', 'AZ', 'Asia'],
  ['bahamas', 'Bahamas', 'BS', 'North America'],
  ['bahrain', 'Bahrain', 'BH', 'Middle East'],
  ['bangladesh', 'Bangladesh', 'BD', 'Asia'],
  ['barbados', 'Barbados', 'BB', 'North America'],
  ['belarus', 'Belarus', 'BY', 'Europe'],
  ['belgium', 'Belgium', 'BE', 'Europe'],
  ['belize', 'Belize', 'BZ', 'North America'],
  ['benin', 'Benin', 'BJ', 'Africa'],
  ['bhutan', 'Bhutan', 'BT', 'Asia'],
  ['bolivia', 'Bolivia', 'BO', 'South America'],
  ['bosnia-and-herzegovina', 'Bosnia and Herzegovina', 'BA', 'Europe'],
  ['botswana', 'Botswana', 'BW', 'Africa'],
  ['brazil', 'Brazil', 'BR', 'South America'],
  ['brunei', 'Brunei', 'BN', 'Asia'],
  ['bulgaria', 'Bulgaria', 'BG', 'Europe'],
  ['burkina-faso', 'Burkina Faso', 'BF', 'Africa'],
  ['burundi', 'Burundi', 'BI', 'Africa'],
  ['cabo-verde', 'Cabo Verde', 'CV', 'Africa'],
  ['cambodia', 'Cambodia', 'KH', 'Asia'],
  ['cameroon', 'Cameroon', 'CM', 'Africa'],
  ['canada', 'Canada', 'CA', 'North America'],
  ['central-african-republic', 'Central African Republic', 'CF', 'Africa'],
  ['chad', 'Chad', 'TD', 'Africa'],
  ['chile', 'Chile', 'CL', 'South America'],
  ['china', 'China', 'CN', 'Asia'],
  ['colombia', 'Colombia', 'CO', 'South America'],
  ['comoros', 'Comoros', 'KM', 'Africa'],
  ['costa-rica', 'Costa Rica', 'CR', 'North America'],
  ['cote-divoire', 'Côte d’Ivoire', 'CI', 'Africa'],
  ['croatia', 'Croatia', 'HR', 'Europe'],
  ['cuba', 'Cuba', 'CU', 'North America'],
  ['cyprus', 'Cyprus', 'CY', 'Middle East'],
  ['czechia', 'Czechia', 'CZ', 'Europe'],
  ['democratic-republic-of-the-congo', 'Democratic Republic of the Congo', 'CD', 'Africa'],
  ['denmark', 'Denmark', 'DK', 'Europe'],
  ['djibouti', 'Djibouti', 'DJ', 'Africa'],
  ['dominica', 'Dominica', 'DM', 'North America'],
  ['dominican-republic', 'Dominican Republic', 'DO', 'North America'],
  ['ecuador', 'Ecuador', 'EC', 'South America'],
  ['egypt', 'Egypt', 'EG', 'Middle East'],
  ['el-salvador', 'El Salvador', 'SV', 'North America'],
  ['equatorial-guinea', 'Equatorial Guinea', 'GQ', 'Africa'],
  ['eritrea', 'Eritrea', 'ER', 'Africa'],
  ['estonia', 'Estonia', 'EE', 'Europe'],
  ['eswatini', 'Eswatini', 'SZ', 'Africa'],
  ['ethiopia', 'Ethiopia', 'ET', 'Africa'],
  ['fiji', 'Fiji', 'FJ', 'Oceania'],
  ['finland', 'Finland', 'FI', 'Europe'],
  ['france', 'France', 'FR', 'Europe'],
  ['gabon', 'Gabon', 'GA', 'Africa'],
  ['gambia', 'The Gambia', 'GM', 'Africa'],
  ['georgia', 'Georgia', 'GE', 'Asia'],
  ['germany', 'Germany', 'DE', 'Europe'],
  ['ghana', 'Ghana', 'GH', 'Africa'],
  ['greece', 'Greece', 'GR', 'Europe'],
  ['grenada', 'Grenada', 'GD', 'North America'],
  ['guatemala', 'Guatemala', 'GT', 'North America'],
  ['guinea', 'Guinea', 'GN', 'Africa'],
  ['guinea-bissau', 'Guinea-Bissau', 'GW', 'Africa'],
  ['guyana', 'Guyana', 'GY', 'South America'],
  ['haiti', 'Haiti', 'HT', 'North America'],
  ['honduras', 'Honduras', 'HN', 'North America'],
  ['hungary', 'Hungary', 'HU', 'Europe'],
  ['iceland', 'Iceland', 'IS', 'Europe'],
  ['india', 'India', 'IN', 'Asia'],
  ['indonesia', 'Indonesia', 'ID', 'Asia'],
  ['iran', 'Iran', 'IR', 'Middle East'],
  ['iraq', 'Iraq', 'IQ', 'Middle East'],
  ['ireland', 'Ireland', 'IE', 'Europe'],
  ['israel', 'Israel', 'IL', 'Middle East'],
  ['italy', 'Italy', 'IT', 'Europe'],
  ['jamaica', 'Jamaica', 'JM', 'North America'],
  ['japan', 'Japan', 'JP', 'Asia'],
  ['jordan', 'Jordan', 'JO', 'Middle East'],
  ['kazakhstan', 'Kazakhstan', 'KZ', 'Asia'],
  ['kenya', 'Kenya', 'KE', 'Africa'],
  ['kiribati', 'Kiribati', 'KI', 'Oceania'],
  ['kuwait', 'Kuwait', 'KW', 'Middle East'],
  ['kyrgyzstan', 'Kyrgyzstan', 'KG', 'Asia'],
  ['laos', 'Laos', 'LA', 'Asia'],
  ['latvia', 'Latvia', 'LV', 'Europe'],
  ['lebanon', 'Lebanon', 'LB', 'Middle East'],
  ['lesotho', 'Lesotho', 'LS', 'Africa'],
  ['liberia', 'Liberia', 'LR', 'Africa'],
  ['libya', 'Libya', 'LY', 'Africa'],
  ['liechtenstein', 'Liechtenstein', 'LI', 'Europe'],
  ['lithuania', 'Lithuania', 'LT', 'Europe'],
  ['luxembourg', 'Luxembourg', 'LU', 'Europe'],
  ['madagascar', 'Madagascar', 'MG', 'Africa'],
  ['malawi', 'Malawi', 'MW', 'Africa'],
  ['malaysia', 'Malaysia', 'MY', 'Asia'],
  ['maldives', 'Maldives', 'MV', 'Asia'],
  ['mali', 'Mali', 'ML', 'Africa'],
  ['malta', 'Malta', 'MT', 'Europe'],
  ['marshall-islands', 'Marshall Islands', 'MH', 'Oceania'],
  ['mauritania', 'Mauritania', 'MR', 'Africa'],
  ['mauritius', 'Mauritius', 'MU', 'Africa'],
  ['mexico', 'Mexico', 'MX', 'North America'],
  ['micronesia', 'Micronesia', 'FM', 'Oceania'],
  ['moldova', 'Moldova', 'MD', 'Europe'],
  ['monaco', 'Monaco', 'MC', 'Europe'],
  ['mongolia', 'Mongolia', 'MN', 'Asia'],
  ['montenegro', 'Montenegro', 'ME', 'Europe'],
  ['morocco', 'Morocco', 'MA', 'Africa'],
  ['mozambique', 'Mozambique', 'MZ', 'Africa'],
  ['myanmar', 'Myanmar', 'MM', 'Asia'],
  ['namibia', 'Namibia', 'NA', 'Africa'],
  ['nauru', 'Nauru', 'NR', 'Oceania'],
  ['nepal', 'Nepal', 'NP', 'Asia'],
  ['netherlands', 'Netherlands', 'NL', 'Europe'],
  ['new-zealand', 'New Zealand', 'NZ', 'Oceania'],
  ['nicaragua', 'Nicaragua', 'NI', 'North America'],
  ['niger', 'Niger', 'NE', 'Africa'],
  ['nigeria', 'Nigeria', 'NG', 'Africa'],
  ['north-korea', 'North Korea', 'KP', 'Asia'],
  ['north-macedonia', 'North Macedonia', 'MK', 'Europe'],
  ['norway', 'Norway', 'NO', 'Europe'],
  ['oman', 'Oman', 'OM', 'Middle East'],
  ['pakistan', 'Pakistan', 'PK', 'Asia'],
  ['palau', 'Palau', 'PW', 'Oceania'],
  ['palestine', 'Palestine', 'PS', 'Middle East'],
  ['panama', 'Panama', 'PA', 'North America'],
  ['papua-new-guinea', 'Papua New Guinea', 'PG', 'Oceania'],
  ['paraguay', 'Paraguay', 'PY', 'South America'],
  ['peru', 'Peru', 'PE', 'South America'],
  ['philippines', 'Philippines', 'PH', 'Asia'],
  ['poland', 'Poland', 'PL', 'Europe'],
  ['portugal', 'Portugal', 'PT', 'Europe'],
  ['qatar', 'Qatar', 'QA', 'Middle East'],
  ['republic-of-the-congo', 'Republic of the Congo', 'CG', 'Africa'],
  ['romania', 'Romania', 'RO', 'Europe'],
  ['russia', 'Russia', 'RU', 'Europe'],
  ['rwanda', 'Rwanda', 'RW', 'Africa'],
  ['saint-kitts-and-nevis', 'Saint Kitts and Nevis', 'KN', 'North America'],
  ['saint-lucia', 'Saint Lucia', 'LC', 'North America'],
  ['saint-vincent-and-the-grenadines', 'Saint Vincent and the Grenadines', 'VC', 'North America'],
  ['samoa', 'Samoa', 'WS', 'Oceania'],
  ['san-marino', 'San Marino', 'SM', 'Europe'],
  ['sao-tome-and-principe', 'Sao Tome and Principe', 'ST', 'Africa'],
  ['saudi-arabia', 'Saudi Arabia', 'SA', 'Middle East'],
  ['senegal', 'Senegal', 'SN', 'Africa'],
  ['serbia', 'Serbia', 'RS', 'Europe'],
  ['seychelles', 'Seychelles', 'SC', 'Africa'],
  ['sierra-leone', 'Sierra Leone', 'SL', 'Africa'],
  ['singapore', 'Singapore', 'SG', 'Asia'],
  ['slovakia', 'Slovakia', 'SK', 'Europe'],
  ['slovenia', 'Slovenia', 'SI', 'Europe'],
  ['solomon-islands', 'Solomon Islands', 'SB', 'Oceania'],
  ['somalia', 'Somalia', 'SO', 'Africa'],
  ['south-africa', 'South Africa', 'ZA', 'Africa'],
  ['south-korea', 'South Korea', 'KR', 'Asia'],
  ['south-sudan', 'South Sudan', 'SS', 'Africa'],
  ['spain', 'Spain', 'ES', 'Europe'],
  ['sri-lanka', 'Sri Lanka', 'LK', 'Asia'],
  ['sudan', 'Sudan', 'SD', 'Africa'],
  ['suriname', 'Suriname', 'SR', 'South America'],
  ['sweden', 'Sweden', 'SE', 'Europe'],
  ['switzerland', 'Switzerland', 'CH', 'Europe'],
  ['syria', 'Syria', 'SY', 'Middle East'],
  ['tajikistan', 'Tajikistan', 'TJ', 'Asia'],
  ['tanzania', 'Tanzania', 'TZ', 'Africa'],
  ['thailand', 'Thailand', 'TH', 'Asia'],
  ['timor-leste', 'Timor-Leste', 'TL', 'Asia'],
  ['togo', 'Togo', 'TG', 'Africa'],
  ['tonga', 'Tonga', 'TO', 'Oceania'],
  ['trinidad-and-tobago', 'Trinidad and Tobago', 'TT', 'North America'],
  ['tunisia', 'Tunisia', 'TN', 'Africa'],
  ['turkiye', 'Türkiye', 'TR', 'Middle East'],
  ['turkmenistan', 'Turkmenistan', 'TM', 'Asia'],
  ['tuvalu', 'Tuvalu', 'TV', 'Oceania'],
  ['uganda', 'Uganda', 'UG', 'Africa'],
  ['ukraine', 'Ukraine', 'UA', 'Europe'],
  ['united-arab-emirates', 'United Arab Emirates', 'AE', 'Middle East'],
  ['united-kingdom', 'United Kingdom', 'GB', 'Europe'],
  ['united-states', 'United States', 'US', 'North America'],
  ['uruguay', 'Uruguay', 'UY', 'South America'],
  ['uzbekistan', 'Uzbekistan', 'UZ', 'Asia'],
  ['vanuatu', 'Vanuatu', 'VU', 'Oceania'],
  ['vatican-city', 'Vatican City', 'VA', 'Europe'],
  ['venezuela', 'Venezuela', 'VE', 'South America'],
  ['vietnam', 'Vietnam', 'VN', 'Asia'],
  ['yemen', 'Yemen', 'YE', 'Middle East'],
  ['zambia', 'Zambia', 'ZM', 'Africa'],
  ['zimbabwe', 'Zimbabwe', 'ZW', 'Africa'],
];

const generatedCountryContent = Object.fromEntries(
  countryRows.flatMap(([slug, name]) => {
    const generated = generateCountryContent(name, slug);
    return generated ? [[slug, generated]] : [];
  }),
) as Record<string, CountryContent>;

const countryContentRaw: Record<string, CountryContent> = {
  ...generatedCountryContent,
  ...additionalCountryContent,
  bangladesh: {
    primaryKeyword: 'Eid and Pohela Boishakh wishes in Bangladesh',
    metaTitle: 'Bangladesh Pohela Boishakh & Eid Wishes',
    metaDescription: 'Find respectful Pohela Boishakh, Eid and Durga Puja wishes for Bangladesh, with local occasion context, greeting guidance and practical messaging advice.',
    intro: 'This guide is for anyone preparing a personal greeting for someone in Bangladesh, or for a Bangladeshi friend or relative living abroad. It covers Pohela Boishakh, Eid al-Fitr, Eid al-Adha, Durga Puja and Victory Day—occasions that reflect different parts of the country’s cultural, religious and national life. Bangladesh is not culturally uniform, and people do not all observe the same festivals. A useful message starts with what you know about the person and the occasion they celebrate. The notes below offer context for choosing a respectful greeting without treating one household’s practice as a rule for everyone.',
    occasions: [
      { name: 'Pohela Boishakh', whenUsually: 'Around mid-April, on the first day of the Bengali calendar year.', note: 'Pohela Boishakh marks the Bengali New Year and is observed through public events, music, traditional food and gatherings. In Dhaka, Mangal Shobhajatra is a public procession organised by teachers and students of the University of Dhaka’s Faculty of Fine Art. UNESCO describes its masks and floats as expressing ideas such as courage, peace and solidarity. A greeting can focus on a hopeful new year without assuming that the recipient attends a particular event.' },
      { name: 'Eid al-Fitr', whenUsually: 'At the end of Ramadan, at the beginning of Shawwal in the Islamic lunar calendar; the local date follows moon-sighting announcements.', note: 'For Muslim families in Bangladesh, Eid al-Fitr follows a month of fasting and is marked by congregational prayers, greetings, festive meals and visits with relatives and friends. Local reporting describes families sharing sweets and exchanging gifts, while people living away from home may travel to reconnect with family. A warm note for peace, health and time together is more useful than assuming every household celebrates in exactly the same way.' },
      { name: 'Eid al-Adha', whenUsually: 'During Dhu al-Hijjah in the Islamic lunar calendar, around the Hajj season.', note: 'Eid al-Adha is observed by Muslims in Bangladesh with special prayers and the practice of qurbani among those who undertake it. Local reporting describes families and communities sharing meat with relatives and people in need. The occasion carries religious meaning as well as practical acts of care and distribution. A greeting can recognise generosity and togetherness without making assumptions about whether a particular family performs a sacrifice.' },
      { name: 'Durga Puja', whenUsually: 'Usually around September or October, during the Hindu month of Ashwin and according to the Hindu calendar.', note: 'Durga Puja is a major Hindu festival in Bangladesh, with worship and public displays at puja mandaps and temples. Bangladesh’s tourism authority describes the festival as both religious and cultural, and notes that visitors from different backgrounds may join public celebrations. A personal greeting should recognise the recipient’s observance and avoid treating a public event as evidence that everyone celebrates the festival.' },
      { name: 'Victory Day', whenUsually: 'In mid-December, commemorating the end of the 1971 Liberation War.', note: 'Victory Day is a national occasion with deep historical significance in Bangladesh. Official sources describe ceremonies, public observances and tributes to those who fought and died during the Liberation War. A thoughtful message can express remembrance, respect and hope for the country. Keep the wording considered: it is a solemn historical day as well as a public holiday, not simply a festive greeting.' },
    ],
    greetingCustoms: [
      'For Pohela Boishakh, a simple Bengali New Year greeting is appropriate. If you know the recipient’s preferred language, write in that language rather than assuming everyone wants a Bengali-only message.',
      '“Eid Mubarak” is a familiar greeting for Eid. Add a personal wish for wellbeing or family time, and use it when you know the recipient observes the occasion.',
      'For Eid al-Adha, keep the message focused on care, generosity and family. Do not assume the recipient personally performs qurbani or wants to discuss it.',
      'For Durga Puja, “Happy Durga Puja” is a clear greeting. If you know the family’s own wording or preferred language, follow their lead rather than guessing at a transliteration.',
      'For Victory Day, respectful language about remembrance, courage and the country’s future is more suitable than a jokey or promotional tone.',
    ],
    sharingHabits: 'Digital messages are a practical way to reach friends and relatives in Bangladesh, including people living abroad. The Asia Foundation and BRAC Institute of Governance and Development’s 2024 Survey of the Bangladeshi People reports that, among respondents with internet access, IMO, Facebook, WhatsApp and Messenger were the leading communication platforms in its survey. Those findings describe respondents rather than guaranteeing what one person uses. Choose the private chat or family group already shared with the recipient. A short note, voice message or family photograph can make a greeting feel personal. Check before posting or forwarding other people’s pictures publicly, and consider time differences when contacting relatives overseas.',
    sampleWishes: [
      'May the new Bengali year bring you fresh hope, good health and many peaceful moments with the people you love.',
      'Wishing you and your family a joyful Eid al-Fitr, with peace, good health and time together.',
      'May Eid al-Adha bring your family closer and inspire kindness, generosity and care for others.',
      'Wishing you and your loved ones a meaningful Durga Puja filled with peace and warmth.',
      'On Victory Day, may remembrance of the past strengthen our hope for a peaceful and compassionate future.',
    ],
    sensitivities: [
      'Bangladesh includes Muslim, Hindu, Buddhist, Christian and Indigenous communities. Do not assume that every person observes Eid, Durga Puja or any other religious occasion. Base a greeting on what you know about the recipient.',
      'Pohela Boishakh has a broad cultural presence, but not everyone attends processions or public events. A general New Year wish is more inclusive than assuming the person takes part in a particular celebration.',
      'Eid al-Adha has specific religious meaning. Do not make jokes about sacrifice, animal welfare or a family’s ability to perform qurbani, and do not assume every Muslim household observes it in the same way.',
      'Victory Day is connected to the Liberation War and the people who suffered and died. Avoid trivialising the history or turning a personal greeting into an argument about politics.',
    ],
    faqs: [
      ['When is Pohela Boishakh usually celebrated in Bangladesh?', 'Pohela Boishakh comes around mid-April and marks the first day of the Bengali calendar year. It is associated with cultural events, music and public gatherings, including Mangal Shobhajatra in Dhaka. For an advance greeting, saying “Bengali New Year” is clear; check local event announcements if you are referring to a particular public programme.'],
      ['What is a respectful Eid greeting to send in Bangladesh?', '“Eid Mubarak” is a familiar greeting for both Eid occasions. You can add a personal wish for health, peace and time with family. Eid dates follow the Islamic lunar calendar and local moon-sighting announcements, so check the current announcement before scheduling a message for the first day.'],
      ['Can I send the same festival greeting to everyone in Bangladesh?', 'It is better to personalise the message. Bangladesh has several religious and cultural communities, and people do not all celebrate the same occasions. Use a festival-specific greeting when you know the recipient observes it; otherwise, a neutral note wishing them well is more considerate.'],
    ],
    relatedOccasionKeys: ['birthday', 'wedding', 'thank-you'],
    relatedGuideSlugs: ['birthday-website-ideas', 'how-to-write-birthday-website-message', 'online-wedding-invitation-website-checklist']
  },
  india: {
    primaryKeyword: 'Diwali and Holi greetings in India',
    metaTitle: 'India Diwali, Holi & Eid Greeting Ideas',
    metaDescription: 'Write thoughtful Diwali, Holi and Eid greetings for friends or family in India, with context on seasonal customs, language choices and respectful sharing.',
    intro: 'This guide is for anyone preparing a personal message for someone in India, or for an Indian friend or relative living abroad. It focuses on occasions that often bring families and friends together—Diwali, Holi and Eid al-Fitr—while recognising that no single calendar describes every household. India’s regions, languages, faith communities and family habits are diverse, so the safest greeting is one that reflects the recipient rather than a general idea of the country. Use the occasion notes below as context, then keep the message in your own voice.',
    occasions: [
      { name: 'Diwali', whenUsually: 'Usually in October or November, according to the Hindu lunisolar calendar.', note: 'Diwali is widely known as the festival of lights. Homes and public spaces may be decorated with lamps, candles and other lights, while families make time for prayer, visits, sweets and wishes for a hopeful year ahead. Customs differ between regions and communities, so a message about light, wellbeing and time with loved ones is safer than assuming one specific ritual.' },
      { name: 'Holi', whenUsually: 'Usually in February or March, around the full moon in the Hindu month of Phalguna.', note: 'Holi is associated with the arrival of spring and is often marked by colour, gatherings, music and festive food. The way people take part varies: some enjoy lively outdoor celebrations, while others prefer a quieter family day or do not celebrate. A thoughtful greeting can focus on renewal, friendship and a joyful spring without assuming that everyone wants to take part in colour play.' },
      { name: 'Eid al-Fitr', whenUsually: 'At the end of Ramadan, on the first day of Shawwal in the Islamic lunar calendar; the local date follows the relevant moon-sighting announcement.', note: 'For Muslim families in India, Eid al-Fitr marks the close of Ramadan and can bring communal prayers, family visits, shared meals and greetings among relatives and friends. Food and visiting customs vary by region and household. A direct wish for a peaceful, happy Eid is usually more personal than trying to name a dish or tradition you do not know is part of the recipient’s celebration.' },
    ],
    greetingCustoms: [
      'Use the occasion name the recipient uses. “Happy Diwali”, “Happy Holi” and “Eid Mubarak” are understandable English-language greetings; there is no need to add a phrase in another language unless you are confident about its spelling and meaning.',
      'India has many languages and forms of address. Ask which language a person prefers rather than assuming that Hindi, English or a single regional language works for everyone.',
      'For a close friend or relative, a warm personal line is often better than a formal greeting copied from a public poster. Mention a shared memory or something you genuinely wish for them.',
      'When writing to an elder, a teacher or someone you do not know well, keep the tone respectful and avoid jokes that rely on age, religion or family roles.',
      'A group message can reach relatives quickly, but a separate note is more considerate when the relationship or the way someone observes a festival is personal.'
    ],
    sharingHabits: 'WhatsApp is a practical option for many personal greetings in India. The Mobile Ecosystem Forum’s 2024 business-messaging survey identified WhatsApp as the leading person-to-person mobile communication channel among the Indian users it surveyed. That makes a private chat or a small family group a sensible route when you already know the recipient uses it. A short note, one relevant photograph or a brief voice message can feel more individual than a forwarded greeting. Keep the wording readable on a phone, and do not assume that every family uses the same app or prefers a group message. Ask before tagging someone or sharing family photographs in a public post.',
    sampleWishes: [
      'May your Diwali be filled with light, comfort and time with the people you love.',
      'Happy Holi! Wishing you a bright spring and a day of laughter, shared at your own pace.',
      'Wishing you and your family a peaceful and joyful Eid al-Fitr.',
    ],
    sensitivities: [
      'India is religiously and culturally diverse. Diwali and Holi are not observances for every Indian, and Eid al-Fitr is especially meaningful to Muslims. Address a greeting to people who celebrate rather than sending a message that assumes the whole country shares one faith or calendar.',
      'Do not describe one regional custom as universal. Food, language, family roles and the way a festival is observed can differ significantly between states, communities and households.',
      'Holi can involve coloured powders and water, but participation should never be presumed. Avoid jokes or images that suggest applying colour to someone without their consent.',
      'A family photograph or a public festival post can include people who have not agreed to be featured. Check before posting, tagging or forwarding personal images.'
    ],
    faqs: [
      ['When is Diwali usually celebrated in India?', 'Diwali usually falls in October or November, but its Gregorian date changes because it follows a Hindu lunisolar calendar. The exact timing can also be described differently across regional traditions. Check the current local calendar before scheduling a time-sensitive greeting, and use the broad season when writing in advance.'],
      ['Is “Happy Diwali” an appropriate greeting?', 'Yes. “Happy Diwali” is a clear, widely understood English greeting. A more personal note can mention light, peace, wellbeing or time with family. Avoid adding unfamiliar words simply to make the message sound local; a sincere sentence in a language you share is more useful.'],
      ['Can I send the same festival wish to everyone in India?', 'It is better not to assume that everyone observes the same occasions. India includes many religious, linguistic and regional communities. Choose the greeting based on what you know about the recipient, or send a neutral note about wishing them well if you are unsure which celebration they observe.']
    ],
    relatedOccasionKeys: ['birthday', 'wedding', 'thank-you'],
    relatedGuideSlugs: ['birthday-website-ideas', 'how-to-write-birthday-website-message', 'online-wedding-invitation-website-checklist']
  },
  nepal: {
    primaryKeyword: 'Dashain and Tihar wishes in Nepal',
    metaTitle: 'Nepal Dashain, Tihar & Teej Wishes',
    metaDescription: 'Find thoughtful Dashain, Tihar and Teej wishes for people in Nepal, with context on tika, family visits, sibling blessings and respectful messages.',
    intro: 'This guide is for people sending a greeting to someone in Nepal, as well as Nepali families and friends celebrating away from home. It focuses on Dashain, Tihar and Teej, three occasions with distinctive family and community traditions. They do not look exactly the same in every household, and the country includes many ethnic, religious and regional communities. A useful message recognises the occasion without assuming that the recipient follows every ritual. Use the calendar notes to choose the right moment, then make the wish personal.',
    occasions: [
      { name: 'Dashain', whenUsually: 'Usually in September or October, following the Nepali Hindu lunar calendar.', note: 'Dashain is one of Nepal’s major Hindu festivals and is especially associated with returning home, visiting relatives and receiving blessings from elders. The Nepal Tourism Board describes tika and jamara as central features of the Vijaya Dashami day, when family members gather and younger relatives receive blessings. Travel and family visits can make the season feel like a reunion as much as a religious observance.' },
      { name: 'Tihar', whenUsually: 'Usually in October or November; the five-day festival follows the lunar calendar.', note: 'Tihar is known as a festival of lights and includes distinct days associated with crows, dogs, cows, Laxmi and the sibling relationship celebrated on Bhai Tika. Homes may be decorated with lamps and garlands, and relatives exchange blessings and gifts. The Nepal Tourism Board describes the five-day sequence, but household customs can differ, especially across communities.' },
      { name: 'Haritalika Teej', whenUsually: 'Usually around August or September, on the Hindu calendar.', note: 'Teej is a three-day festival particularly associated with women’s gatherings, traditional dress, songs and dancing. The Nepal Tourism Board describes a feast before a fasting day and visits to important temples, including Pashupatinath. Practices and personal meanings vary; a message should recognise the celebration without assuming that every woman fasts or observes it in the same way.' },
    ],
    greetingCustoms: [
      'For Dashain, a warm wish about family reunions, good health and blessings fits the season. When you know the recipient’s household tradition, you can refer to tika or jamara without presenting it as something every family does.',
      'During Tihar, wishes can recognise the festival of lights and the family bonds highlighted by Bhai Tika. Keep the message broad if you are unsure which day or ritual matters most to the recipient.',
      'Teej is often a women-centred gathering and observance. Address the person who is celebrating rather than making assumptions about her marital status or religious practice.',
      'Nepali families may use Nepali and other languages at home. A clear message in a language you share is better than a transliteration copied without checking its meaning.',
      'For elders and relatives, use the respectful form of address your family normally uses. Personal knowledge of the relationship matters more than trying to imitate a formal phrase.'
    ],
    sharingHabits: 'Available platform figures for Nepal include advertising-reach estimates, which do not confirm how many people actively use an app to exchange personal messages. For that reason, this guide does not claim that one messaging service is the national favourite. Choose the private chat or family group the recipient already uses. During Dashain, a short message can be paired with a family photograph or a call; for Tihar, a simple image of lamps can be a seasonal touch. Do not forward a large chain message without context. For relatives abroad, check the time difference before calling and ask whether they are free to talk.',
    sampleWishes: [
      'Wishing you a peaceful Dashain, with time to reconnect and many blessings for the year ahead.',
      'May Tihar bring light, warmth and happy moments to your home and family.',
      'Thinking of you this Teej and wishing you health, friendship and a joyful celebration.',
    ],
    sensitivities: [
      'Nepal includes Hindu, Buddhist, Kirat, Muslim, Christian and other communities. Do not assume that a colleague, neighbour or friend celebrates Dashain, Tihar or Teej.',
      'Teej can include fasting. Do not praise prolonged fasting as a requirement or encourage someone to fast; health, personal choice and family practice differ.',
      'Tihar includes days associated with animals. Avoid jokes, distressing images or dismissive language about animals that are being honoured in a household’s observance.',
      'Dashain practices can include ritual elements that some people discuss differently. A simple wish for wellbeing is safer than making assumptions about animal sacrifice or religious practice.'
    ],
    faqs: [
      ['What is the best-known festival greeting in Nepal for Dashain?', '“Happy Dashain” is a clear English greeting. A more personal message can wish the recipient and their family good health, a meaningful reunion and blessings. If your recipient uses Nepali, ask them for the preferred wording rather than relying on a transliteration you have not checked.'],
      ['When do Dashain and Tihar usually happen?', 'Both generally fall in the September-to-November part of the year, but the exact Gregorian dates move with the lunar calendar. Dashain often comes first, followed by Tihar. Check the annual Nepali calendar before arranging travel, a delivery or a message that needs to arrive on a particular festival day.'],
      ['Is Tihar the same as Diwali?', 'Tihar is Nepal’s five-day festival of lights and shares some broad themes with Diwali, including lamps and the worship of Laxmi. It also has its own sequence of days, such as Kukur Tihar and Bhai Tika. It is more accurate to describe it using its Nepali name and customs than to treat the two festivals as identical.']
    ],
    relatedOccasionKeys: ['birthday', 'thank-you', 'wedding'],
    relatedGuideSlugs: ['birthday-website-ideas', 'how-to-write-birthday-website-message', 'online-wedding-invitation-website-checklist']
  },
  'united-arab-emirates': {
    primaryKeyword: 'Eid and Ramadan greetings in the UAE',
    metaTitle: 'United Arab Emirates Ramadan, Eid & National Day',
    metaDescription: 'Write considerate Ramadan, Eid and UAE National Day greetings with lunar-calendar context, local customs and practical advice for sharing wishes.',
    intro: 'This guide is for anyone sending a personal greeting to a friend, relative or colleague in the United Arab Emirates, including people connecting with family from overseas. It covers Ramadan, the two Eids and the UAE’s National Day. The country’s residents come from many backgrounds, so not everyone observes the same religious or national occasions in the same way. A considerate message starts with what you know about the recipient, respects the rhythm of the occasion and avoids treating one household’s custom as a rule for everyone.',
    occasions: [
      { name: 'Ramadan', whenUsually: 'The ninth month of the Islamic Hijri lunar calendar; it shifts earlier through the Gregorian year.', note: 'Ramadan is a month of fasting, prayer, reflection and charity for Muslims. The UAE government explains that fasting takes place from dawn to sunset and that families gather for iftar after the fast is broken. The month also changes daily routines, including work hours and evening activity. A thoughtful wish can recognise reflection, generosity and peaceful time with family.' },
      { name: 'Eid al-Fitr', whenUsually: 'At the beginning of Shawwal, immediately after Ramadan; the date is confirmed through moon sighting.', note: 'Eid al-Fitr marks the end of Ramadan. In the UAE, the holiday can include communal prayers, family visits, children receiving Eidiyah and events in public spaces. It is a time to wish people joy after the month of fasting. Because the exact start follows the lunar calendar, check the local announcement before sending a date-specific message.' },
      { name: 'Eid al-Adha', whenUsually: 'During Dhu al-Hijjah, in the season of Hajj, according to the Islamic lunar calendar.', note: 'Eid al-Adha is associated with the Hajj period and the story of Ibrahim’s devotion. The UAE’s public-holiday guidance places it in Dhu al-Hijjah, while local visitor guidance describes prayer, family gatherings and sharing with others. A message about generosity, care and peace is appropriate; avoid turning a religious observance into a generic party theme.' },
      { name: 'UAE National Day', whenUsually: 'Every year in December, around the anniversary of the federation’s formation in 1971.', note: 'National Day marks the formation of the United Arab Emirates in 1971. Official celebrations may include public events, decorations and activities that highlight the federation. A greeting can focus on the country’s continued wellbeing and the people who call it home, while remembering that residents may relate to the day in different ways depending on their background and length of time in the UAE.' },
    ],
    greetingCustoms: [
      'The UAE government lists “Ramadan Kareem” and “Ramadan Mubarak” as common Ramadan greetings, with the sense of wishing a blessed Ramadan. Use them when you know the recipient observes the month.',
      '“Eid Mubarak” is a widely understood greeting for Eid. Add a short personal sentence for family, health or happiness rather than relying only on a graphic.',
      'Dates for Islamic occasions follow the Hijri lunar calendar and local moon-sighting announcements. Avoid promising an exact Gregorian date months in advance.',
      'For National Day, “Happy UAE National Day” is a straightforward greeting. Use respectful language about the country and the people who live there.',
      'When writing to colleagues or people you do not know well, use a warm but measured tone. Do not assume religious identity from a person’s nationality, name or place of work.'
    ],
    sharingHabits: 'WhatsApp is a practical channel for personal messages in the UAE. A 2025 GWI usage snapshot cited in a regional messaging analysis estimated that 89% of internet users aged 16 and over in the country had used WhatsApp in the previous month. That is a survey estimate rather than a guarantee that every recipient uses it, so choose the channel you already share. During Ramadan, send a note at a considerate time and remember that routines change around iftar and evening prayers. For Eid or National Day, a direct message with a personal line is usually more meaningful than forwarding a mass greeting. Check before sharing photographs of other people publicly.',
    sampleWishes: [
      'May Ramadan bring you peace, reflection and generous moments with the people you love.',
      'Wishing you and your family a blessed Eid al-Fitr, with happiness, good health and time together.',
      'Wishing you a blessed Eid al-Adha, filled with kindness, togetherness and care for others.',
      'Happy UAE National Day. Wishing the country and everyone who calls it home continued peace and wellbeing.'
    ],
    sensitivities: [
      'The UAE is home to residents from many countries and faiths. Do not assume that every person observes Ramadan, Eid or National Day in the same way—or at all.',
      'During Ramadan, be mindful that people who are fasting may be keeping different hours and energy levels. The UAE government notes that non-Muslims are not required to fast, so do not pressure someone to do so.',
      'Keep religious references accurate and respectful. Avoid joking about fasting, prayer, sacred texts or religious figures, and do not mix the two Eids into one undifferentiated occasion.',
      'If you are sharing a public greeting, avoid posting images or personal details of other people without permission. A private message is often the safer choice.'
    ],
    faqs: [
      ['How should I greet someone in the UAE during Ramadan?', '“Ramadan Kareem” and “Ramadan Mubarak” are commonly used greetings. The UAE government explains both as wishes for a blessed Ramadan. You can add a personal line wishing the recipient peace and wellbeing. Use the greeting when you know the person observes Ramadan, rather than assuming it from their nationality.'],
      ['When are Eid dates announced in the UAE?', 'Eid dates follow the Islamic lunar calendar and are confirmed through moon sighting and official announcements. The Gregorian date moves from year to year. For travel, deliveries or time-specific wishes, check the UAE’s current public-holiday announcement rather than relying on a calendar published far in advance.'],
      ['What can I write for UAE National Day?', 'A simple “Happy UAE National Day” is appropriate. You can add a sincere wish for peace, progress and wellbeing for the country and its residents. Keep the tone inclusive: people in the UAE have different national backgrounds and personal connections to the federation’s history.']
    ],
    relatedOccasionKeys: ['birthday', 'thank-you', 'wedding'],
    relatedGuideSlugs: ['birthday-website-ideas', 'how-to-write-birthday-website-message', 'online-wedding-invitation-website-checklist']
  },
  malaysia: {
    primaryKeyword: 'Hari Raya and Deepavali greetings in Malaysia',
    metaTitle: 'Malaysia Hari Raya, CNY & Deepavali Wishes',
    metaDescription: 'Create thoughtful Hari Raya, Chinese New Year and Deepavali wishes for Malaysia, with local open-house context and respectful sharing guidance.',
    intro: 'This guide is for people preparing a message for someone in Malaysia, including friends and relatives living overseas. It covers Hari Raya Aidilfitri, Chinese New Year, Deepavali and Merdeka Day, occasions that reflect several of the communities and histories that shape public life. Malaysia is not culturally uniform: celebrations differ by faith, family, language and state. The best greeting recognises the occasion the recipient actually celebrates, rather than assuming that every Malaysian shares one tradition. It is practical context for writing to one person, not a complete account of every community.',
    occasions: [
      { name: 'Hari Raya Aidilfitri', whenUsually: 'At the end of Ramadan, at the start of Shawwal in the Islamic lunar calendar.', note: 'Known in Malaysia as Hari Raya Aidilfitri or simply Hari Raya, the celebration follows Ramadan and begins with special prayers. Tourism Malaysia describes family gatherings, visits to friends and neighbours, sharing festive food and the open-house tradition, where hosts welcome guests from different backgrounds. A message can wish the recipient and their family a joyful celebration and a peaceful year ahead.' },
      { name: 'Chinese New Year', whenUsually: 'Usually in January or February, on the first day of the lunisolar Chinese calendar.', note: 'Chinese New Year is marked by family visits, festive food, new clothes and greetings for prosperity. Tourism Malaysia describes the exchange of red packets in some family settings and open houses that welcome relatives, friends and neighbours. The greeting can be adapted to the recipient’s language and family custom; Mandarin and Cantonese forms are both encountered, and not every household uses the same wording.' },
      { name: 'Deepavali', whenUsually: 'Usually in October or November, according to the Hindu lunisolar calendar.', note: 'Deepavali is an important festival for many Hindu families in Malaysia. A Ministry of National Unity statement describes traditions such as decorating with kolam, lighting lamps, preparing festive food and visiting one another through open houses. A warm English greeting is enough; if the recipient has a preferred family or language-specific greeting, follow their lead.' },
      { name: 'Merdeka Day', whenUsually: 'Every year in August, commemorating the independence of Malaya in 1957.', note: 'Merdeka Day is Malaysia’s National Day. Tourism Malaysia describes it as an occasion when people across race and religion come together to remember independence. Public celebrations can include gatherings and events, while personal messages often focus on shared hopes for the country. Keep the tone inclusive and avoid suggesting that one community’s experience represents every Malaysian.' },
    ],
    greetingCustoms: [
      '“Selamat Hari Raya” is a familiar greeting for Hari Raya Aidilfitri. For a personal note, wish the recipient and their family a joyful break and safe journeys if they are travelling.',
      'Tourism Malaysia records “Kong Xi Fa Cai” and “Kong Hei Fatt Choi” as Mandarin and Cantonese Chinese New Year greetings. Use the form that matches the recipient’s language or family preference.',
      '“Happy Deepavali” is a clear English greeting. A short wish for light, peace and family wellbeing is more useful than using a phrase you cannot spell or explain.',
      'For Merdeka Day, “Happy Merdeka Day” is direct and recognisable. A line about wellbeing and the country’s future keeps the message warm without turning it into a political statement.',
      'Open-house visits are part of several Malaysian festive contexts. If someone invites you, follow the host’s guidance on timing, food and household etiquette rather than assuming every home follows the same practice.'
    ],
    sharingHabits: 'WhatsApp is a widely used messaging option in Malaysia. Infobip’s 2025 messaging snapshot lists it ahead of other messaging channels in its estimate of Malaysian app use, with Telegram and Messenger also appearing in the country’s mix. Treat that as a guide to likely channels, not a promise about an individual: use the private app or family group your recipient already prefers. Open-house invitations and visits can be an important part of festive connection, so a personal message can complement an in-person greeting rather than replace it. A simple note and one relevant photograph are often enough. Avoid mass-forwarding a greeting that does not fit the person’s faith or celebration.',
    sampleWishes: [
      'Wishing you and your family a joyful Hari Raya Aidilfitri and peaceful days together.',
      'May Chinese New Year bring happiness, good health and prosperity to you and your loved ones.',
      'Happy Deepavali. May your home be filled with light, warmth and meaningful time with family.',
      'Happy Merdeka Day. Wishing Malaysia and all its communities a future of peace and shared opportunity.'
    ],
    sensitivities: [
      'Malaysia is multi-ethnic and multi-religious. Hari Raya, Chinese New Year and Deepavali are not observed by every person, so personalise the greeting to the recipient rather than treating one festival as a national experience for all.',
      'For Islamic occasions, dates depend on the lunar calendar and local announcements. Check the current date before scheduling a time-sensitive greeting or travel plan.',
      'Do not assume that every Chinese Malaysian prefers the same language or transliteration for Chinese New Year greetings. Use the form the recipient or family uses.',
      'Open-house customs are welcoming but remain host-led. Ask about appropriate timing and any household preferences, and do not post photographs of guests without their consent.'
    ],
    faqs: [
      ['What is the usual greeting for Hari Raya in Malaysia?', '“Selamat Hari Raya” is a familiar greeting for Hari Raya Aidilfitri. You can add a personal wish for happiness, health and time with family. The exact date follows the Islamic lunar calendar, so use the official local announcement when the message needs to arrive on the first day.'],
      ['What can I say for Chinese New Year in Malaysia?', '“Kong Xi Fa Cai” and “Kong Hei Fatt Choi” are greetings documented by Tourism Malaysia in Mandarin and Cantonese forms. The best choice depends on the recipient’s language and family preference. A simple English wish for health and prosperity is also clear and avoids guessing at pronunciation.'],
      ['Is it appropriate to wish someone Happy Deepavali in Malaysia?', 'Yes, when you know the person celebrates Deepavali. “Happy Deepavali” is a clear greeting, and a short wish for light, happiness and family wellbeing is appropriate. Malaysia’s public celebrations and open houses can be welcoming across communities, but do not assume that every neighbour or colleague personally observes the festival.']
    ],
    relatedOccasionKeys: ['birthday', 'wedding', 'thank-you'],
    relatedGuideSlugs: ['birthday-website-ideas', 'how-to-write-birthday-website-message', 'online-wedding-invitation-website-checklist']
  }
};

// Preserve the complete editorial copy. Guides may exceed 600 words when the
// country-specific detail warrants it; never truncate useful content to hit a ceiling.
const countryContent: Record<string, CountryContent> = Object.fromEntries(
  Object.entries(countryContentRaw).map(([slug, content]) => [
    slug,
    { ...content, sources: content.sources || curatedCountrySources[slug] },
  ]),
) as Record<string, CountryContent>;


export const countries: Country[] = countryRows.map(([slug, name, isoCode, region]) => ({
  slug,
  name,
  isoCode,
  region,
  status: countryContent[slug] ? 'ready' : 'draft',
  ...(countryContent[slug] ? { content: countryContent[slug] } : {}),
}));

export function isPublishable(country: Country): boolean {
  const content = country.content;
  return country.status === 'ready'
    && !!content
    && content.occasions.length >= 3
    && content.sampleWishes.length >= 3
    && content.sensitivities.length >= 1
    && content.sharingHabits.trim().length > 0
    && content.faqs.length >= 3
    && !!content.metaTitle.trim()
    && !!content.metaDescription.trim()
    && content.metaTitle.length <= 50
    && content.metaDescription.length >= 140
    && content.metaDescription.length <= 158
    && content.greetingCustoms.length >= 4
    && content.faqs.every(([, answer]) => {
      const words = answer.trim().split(/\s+/).filter(Boolean).length;
      return words >= 35 && words <= 90;
    })
    && countCountryContentWords(content) >= 500
    && (content.sources?.length || 0) >= 2
    && content.sources!.every((source) => /^https:\/\//.test(source.url) && /^\d{4}-\d{2}-\d{2}$/.test(source.checked));
}

export const readyCountries = countries.filter(isPublishable);
export const countryBySlug = Object.fromEntries(countries.map((country) => [country.slug, country])) as Record<string, Country>;

export const countriesByRegion = countries.reduce<Record<CountryRegion, Country[]>>((groups, country) => {
  groups[country.region].push(country);
  return groups;
}, {
  Asia: [],
  Europe: [],
  Africa: [],
  'North America': [],
  'South America': [],
  Oceania: [],
  'Middle East': [],
});

export const countryRegions: CountryRegion[] = ['Asia', 'Europe', 'Africa', 'North America', 'South America', 'Oceania', 'Middle East'];

// Land-border neighbours compiled from country border reference data. Countries without five
// land neighbours are supplemented with other countries in their assigned region below.
const borderNeighbours: Record<string, string[]> = {
  'afghanistan': ['iran', 'pakistan', 'turkmenistan', 'uzbekistan', 'tajikistan', 'china'],
  'albania': ['montenegro', 'greece', 'north-macedonia'],
  'algeria': ['tunisia', 'libya', 'niger', 'mauritania', 'mali', 'morocco'],
  'angola': ['republic-of-the-congo', 'democratic-republic-of-the-congo', 'zambia', 'namibia'],
  'argentina': ['bolivia', 'brazil', 'chile', 'paraguay', 'uruguay'],
  'armenia': ['azerbaijan', 'georgia', 'iran', 'turkiye'],
  'austria': ['czechia', 'germany', 'hungary', 'italy', 'liechtenstein', 'slovakia', 'slovenia', 'switzerland'],
  'azerbaijan': ['armenia', 'georgia', 'iran', 'russia', 'turkiye'],
  'bangladesh': ['myanmar', 'india'],
  'belarus': ['latvia', 'lithuania', 'poland', 'russia', 'ukraine'],
  'belgium': ['france', 'germany', 'luxembourg', 'netherlands'],
  'belize': ['guatemala', 'mexico'],
  'benin': ['burkina-faso', 'niger', 'nigeria', 'togo'],
  'bhutan': ['china', 'india'],
  'bolivia': ['argentina', 'brazil', 'chile', 'paraguay', 'peru'],
  'bosnia-and-herzegovina': ['croatia', 'montenegro', 'serbia'],
  'botswana': ['namibia', 'south-africa', 'zambia', 'zimbabwe'],
  'brazil': ['argentina', 'bolivia', 'colombia', 'guyana', 'paraguay', 'peru', 'suriname', 'uruguay', 'venezuela'],
  'brunei': ['malaysia'],
  'bulgaria': ['greece', 'north-macedonia', 'romania', 'serbia', 'turkiye'],
  'burkina-faso': ['benin', 'cote-divoire', 'ghana', 'mali', 'niger', 'togo'],
  'burundi': ['democratic-republic-of-the-congo', 'rwanda', 'tanzania'],
  'cambodia': ['laos', 'thailand', 'vietnam'],
  'cameroon': ['central-african-republic', 'chad', 'republic-of-the-congo', 'equatorial-guinea', 'gabon', 'nigeria'],
  'canada': ['united-states'],
  'central-african-republic': ['cameroon', 'chad', 'democratic-republic-of-the-congo', 'republic-of-the-congo', 'south-sudan', 'sudan'],
  'chad': ['cameroon', 'central-african-republic', 'libya', 'niger', 'nigeria', 'south-sudan'],
  'chile': ['argentina', 'bolivia', 'peru'],
  'china': ['afghanistan', 'bhutan', 'myanmar', 'india', 'kazakhstan', 'north-korea', 'kyrgyzstan', 'laos', 'mongolia', 'pakistan', 'russia', 'tajikistan', 'vietnam'],
  'colombia': ['brazil', 'ecuador', 'panama', 'peru', 'venezuela'],
  'costa-rica': ['nicaragua', 'panama'],
  'croatia': ['bosnia-and-herzegovina', 'hungary', 'montenegro', 'serbia', 'slovenia'],
  'cyprus': ['united-kingdom'],
  'democratic-republic-of-the-congo': ['angola', 'burundi', 'central-african-republic', 'republic-of-the-congo', 'rwanda', 'south-sudan', 'tanzania', 'uganda', 'zambia'],
  'denmark': ['germany'],
  'djibouti': ['eritrea', 'ethiopia', 'somalia'],
  'dominican-republic': ['haiti'],
  'ecuador': ['colombia', 'peru'],
  'egypt': ['israel', 'libya', 'sudan'],
  'el-salvador': ['guatemala', 'honduras'],
  'equatorial-guinea': ['cameroon', 'gabon'],
  'eritrea': ['djibouti', 'ethiopia', 'sudan'],
  'estonia': ['latvia', 'russia'],
  'ethiopia': ['djibouti', 'eritrea', 'kenya', 'somalia', 'south-sudan', 'sudan'],
  'finland': ['norway', 'sweden', 'russia'],
  'france': ['andorra', 'belgium', 'germany', 'italy', 'luxembourg', 'monaco', 'spain', 'switzerland'],
  'gabon': ['cameroon', 'republic-of-the-congo', 'equatorial-guinea'],
  'gambia': ['senegal'],
  'georgia': ['armenia', 'azerbaijan', 'russia', 'turkiye'],
  'germany': ['austria', 'belgium', 'czechia', 'denmark', 'france', 'luxembourg', 'netherlands', 'poland', 'switzerland'],
  'ghana': ['burkina-faso', 'cote-divoire', 'togo'],
  'greece': ['albania', 'bulgaria', 'turkiye', 'north-macedonia'],
  'guatemala': ['belize', 'el-salvador', 'honduras', 'mexico'],
  'guinea': ['cote-divoire', 'guinea-bissau', 'liberia', 'mali', 'senegal', 'sierra-leone'],
  'guinea-bissau': ['guinea', 'senegal'],
  'guyana': ['brazil', 'suriname', 'venezuela'],
  'haiti': ['dominican-republic'],
  'honduras': ['guatemala', 'el-salvador', 'nicaragua'],
  'hungary': ['austria', 'croatia', 'romania', 'serbia', 'slovakia', 'slovenia', 'ukraine'],
  'india': ['afghanistan', 'bangladesh', 'bhutan', 'myanmar', 'china', 'nepal', 'pakistan', 'sri-lanka'],
  'indonesia': ['timor-leste', 'malaysia', 'papua-new-guinea'],
  'iran': ['afghanistan', 'armenia', 'azerbaijan', 'iraq', 'pakistan', 'turkiye', 'turkmenistan'],
  'iraq': ['iran', 'jordan', 'kuwait', 'saudi-arabia', 'syria', 'turkiye'],
  'ireland': ['united-kingdom'],
  'israel': ['egypt', 'jordan', 'lebanon', 'syria'],
  'italy': ['austria', 'france', 'san-marino', 'slovenia', 'switzerland', 'vatican-city'],
  'jordan': ['iraq', 'israel', 'saudi-arabia', 'syria'],
  'kazakhstan': ['china', 'kyrgyzstan', 'russia', 'turkmenistan', 'uzbekistan'],
  'kenya': ['ethiopia', 'somalia', 'south-sudan', 'tanzania', 'uganda'],
  'kuwait': ['iran', 'saudi-arabia'],
  'kyrgyzstan': ['china', 'kazakhstan', 'tajikistan', 'uzbekistan'],
  'laos': ['myanmar', 'cambodia', 'china', 'thailand', 'vietnam'],
  'latvia': ['belarus', 'estonia', 'lithuania', 'russia'],
  'lebanon': ['israel', 'syria'],
  'lesotho': ['south-africa'],
  'liberia': ['guinea', 'cote-divoire', 'sierra-leone'],
  'libya': ['algeria', 'chad', 'egypt', 'niger', 'sudan', 'tunisia'],
  'liechtenstein': ['austria', 'switzerland'],
  'lithuania': ['belarus', 'latvia', 'poland', 'russia'],
  'luxembourg': ['belgium', 'france', 'germany'],
  'malawi': ['mozambique', 'tanzania', 'zambia'],
  'malaysia': ['brunei', 'indonesia', 'thailand'],
  'mali': ['algeria', 'burkina-faso', 'guinea', 'cote-divoire', 'mauritania', 'niger', 'senegal'],
  'mauritania': ['algeria', 'mali', 'senegal'],
  'mexico': ['belize', 'guatemala', 'united-states'],
  'moldova': ['romania', 'ukraine'],
  'monaco': ['france'],
  'mongolia': ['china', 'russia'],
  'morocco': ['algeria', 'spain'],
  'mozambique': ['malawi', 'south-africa', 'eswatini', 'tanzania', 'zambia', 'zimbabwe'],
  'namibia': ['angola', 'botswana', 'south-africa', 'zambia'],
  'nepal': ['china', 'india'],
  'netherlands': ['belgium', 'germany'],
  'nicaragua': ['costa-rica', 'honduras'],
  'niger': ['algeria', 'benin', 'burkina-faso', 'chad', 'libya', 'mali', 'nigeria'],
  'nigeria': ['benin', 'cameroon', 'chad', 'niger'],
  'north-korea': ['china', 'south-korea', 'russia'],
  'norway': ['finland', 'sweden', 'russia'],
  'oman': ['saudi-arabia', 'united-arab-emirates', 'yemen'],
  'pakistan': ['afghanistan', 'china', 'india', 'iran'],
  'panama': ['colombia', 'costa-rica'],
  'papua-new-guinea': ['indonesia'],
  'paraguay': ['argentina', 'bolivia', 'brazil'],
  'peru': ['bolivia', 'brazil', 'chile', 'colombia', 'ecuador'],
  'poland': ['belarus', 'czechia', 'germany', 'lithuania', 'russia', 'slovakia', 'ukraine'],
  'portugal': ['spain'],
  'qatar': ['saudi-arabia'],
  'republic-of-the-congo': ['angola', 'cameroon', 'central-african-republic', 'democratic-republic-of-the-congo', 'gabon'],
  'romania': ['bulgaria', 'hungary', 'moldova', 'serbia', 'ukraine'],
  'russia': ['azerbaijan', 'belarus', 'china', 'estonia', 'finland', 'georgia', 'kazakhstan', 'north-korea', 'latvia', 'lithuania', 'mongolia', 'norway', 'poland', 'ukraine'],
  'rwanda': ['burundi', 'democratic-republic-of-the-congo', 'tanzania', 'uganda'],
  'san-marino': ['italy'],
  'saudi-arabia': ['iraq', 'jordan', 'kuwait', 'oman', 'qatar', 'united-arab-emirates', 'yemen'],
  'senegal': ['gambia', 'guinea', 'guinea-bissau', 'mali', 'mauritania'],
  'serbia': ['hungary', 'romania', 'bulgaria', 'north-macedonia', 'croatia', 'bosnia-and-herzegovina', 'montenegro', 'albania'],
  'sierra-leone': ['guinea', 'liberia'],
  'slovakia': ['austria', 'czechia', 'hungary', 'poland', 'ukraine'],
  'slovenia': ['austria', 'croatia', 'italy', 'hungary'],
  'somalia': ['djibouti', 'ethiopia', 'kenya'],
  'south-africa': ['botswana', 'lesotho', 'mozambique', 'namibia', 'eswatini', 'zimbabwe'],
  'south-korea': ['north-korea'],
  'south-sudan': ['central-african-republic', 'democratic-republic-of-the-congo', 'ethiopia', 'kenya', 'sudan', 'uganda'],
  'spain': ['andorra', 'france', 'portugal', 'morocco'],
  'sri-lanka': ['india'],
  'sudan': ['central-african-republic', 'chad', 'egypt', 'eritrea', 'ethiopia', 'libya', 'south-sudan'],
  'suriname': ['brazil', 'france', 'guyana'],
  'sweden': ['finland', 'norway'],
  'switzerland': ['austria', 'france', 'italy', 'liechtenstein', 'germany'],
  'syria': ['iraq', 'israel', 'jordan', 'lebanon', 'turkiye'],
  'tajikistan': ['afghanistan', 'china', 'kyrgyzstan', 'uzbekistan'],
  'tanzania': ['burundi', 'democratic-republic-of-the-congo', 'kenya', 'malawi', 'mozambique', 'rwanda', 'uganda', 'zambia'],
  'thailand': ['myanmar', 'cambodia', 'laos', 'malaysia'],
  'togo': ['benin', 'burkina-faso', 'ghana'],
  'tunisia': ['algeria', 'libya'],
  'turkmenistan': ['afghanistan', 'iran', 'kazakhstan', 'uzbekistan'],
  'uganda': ['democratic-republic-of-the-congo', 'kenya', 'rwanda', 'south-sudan', 'tanzania'],
  'ukraine': ['belarus', 'hungary', 'moldova', 'poland', 'romania', 'russia', 'slovakia'],
  'united-arab-emirates': ['oman', 'saudi-arabia'],
  'united-kingdom': ['ireland'],
  'united-states': ['canada', 'mexico'],
  'uruguay': ['argentina', 'brazil'],
  'uzbekistan': ['afghanistan', 'kazakhstan', 'kyrgyzstan', 'tajikistan', 'turkmenistan'],
  'venezuela': ['brazil', 'colombia', 'guyana'],
  'vietnam': ['cambodia', 'china', 'laos'],
  'yemen': ['oman', 'saudi-arabia'],
  'zambia': ['angola', 'botswana', 'democratic-republic-of-the-congo', 'malawi', 'mozambique', 'namibia', 'tanzania', 'zimbabwe'],
  'zimbabwe': ['botswana', 'mozambique', 'south-africa', 'zambia'],
};

// Approximate country reference points used only to suggest geographically nearby draft pages.
const countryCoordinates: Record<string, [number, number]> = {
  'afghanistan': [33.0, 65.0],
  'albania': [41.0, 20.0],
  'algeria': [28.0, 3.0],
  'andorra': [42.5, 1.6],
  'angola': [-12.5, 18.5],
  'antigua-and-barbuda': [17.05, -61.8],
  'argentina': [-34.0, -64.0],
  'armenia': [40.0, 45.0],
  'australia': [-27.0, 133.0],
  'austria': [47.33333333, 13.33333333],
  'azerbaijan': [40.5, 47.5],
  'bahamas': [25.0, -77.4],
  'bahrain': [26.0, 50.55],
  'bangladesh': [24.0, 90.0],
  'barbados': [13.16666666, -59.53333333],
  'belarus': [53.0, 28.0],
  'belgium': [50.83333333, 4.0],
  'belize': [17.25, -88.75],
  'benin': [9.5, 2.25],
  'bhutan': [27.5, 90.5],
  'bolivia': [-17.0, -65.0],
  'bosnia-and-herzegovina': [44.0, 18.0],
  'botswana': [-22.0, 24.0],
  'brazil': [-10.0, -55.0],
  'brunei': [4.5, 114.66666666],
  'bulgaria': [43.0, 25.0],
  'burkina-faso': [13.0, -2.0],
  'burundi': [-3.5, 30.0],
  'cabo-verde': [15.1, -23.6],
  'cambodia': [13.0, 105.0],
  'cameroon': [6.0, 12.0],
  'canada': [60.0, -95.0],
  'central-african-republic': [7.0, 21.0],
  'chad': [15.0, 19.0],
  'chile': [-30.0, -71.0],
  'china': [35.0, 105.0],
  'colombia': [4.0, -72.0],
  'comoros': [-12.16666666, 44.25],
  'costa-rica': [10.0, -84.0],
  'cote-divoire': [7.5, -5.5],
  'croatia': [45.16666666, 15.5],
  'cuba': [21.5, -80.0],
  'cyprus': [35.0, 33.0],
  'czechia': [49.8, 15.5],
  'democratic-republic-of-the-congo': [0.0, 25.0],
  'denmark': [56.0, 10.0],
  'djibouti': [11.5, 43.0],
  'dominica': [15.41666666, -61.33333333],
  'dominican-republic': [19.0, -70.66666666],
  'ecuador': [-2.0, -77.5],
  'egypt': [27.0, 30.0],
  'el-salvador': [13.83333333, -88.91666666],
  'equatorial-guinea': [2.0, 10.0],
  'eritrea': [15.0, 39.0],
  'estonia': [59.0, 26.0],
  'eswatini': [-26.5, 31.5],
  'ethiopia': [8.0, 38.0],
  'fiji': [-18.0, 175.0],
  'finland': [64.0, 26.0],
  'france': [46.0, 2.0],
  'gabon': [-1.0, 11.75],
  'gambia': [13.46666666, -16.56666666],
  'georgia': [42.0, 43.5],
  'germany': [51.0, 9.0],
  'ghana': [8.0, -2.0],
  'greece': [39.0, 22.0],
  'grenada': [12.11666666, -61.66666666],
  'guatemala': [15.5, -90.25],
  'guinea': [11.0, -10.0],
  'guinea-bissau': [12.0, -15.0],
  'guyana': [5.0, -59.0],
  'haiti': [19.0, -72.41666666],
  'honduras': [15.0, -86.5],
  'hungary': [47.0, 20.0],
  'iceland': [65.0, -18.0],
  'india': [20.0, 77.0],
  'indonesia': [-5.0, 120.0],
  'iran': [32.0, 53.0],
  'iraq': [33.0, 44.0],
  'ireland': [53.0, -8.0],
  'israel': [31.5, 34.75],
  'italy': [42.83333333, 12.83333333],
  'jamaica': [18.25, -77.5],
  'japan': [36.0, 138.0],
  'jordan': [31.0, 36.0],
  'kazakhstan': [48.0, 68.0],
  'kenya': [1.0, 38.0],
  'kiribati': [1.41666666, 173.0],
  'kuwait': [29.5, 45.75],
  'kyrgyzstan': [41.0, 75.0],
  'laos': [18.0, 105.0],
  'latvia': [57.0, 25.0],
  'lebanon': [33.83333333, 35.83333333],
  'lesotho': [-29.5, 28.5],
  'liberia': [6.5, -9.5],
  'libya': [25.0, 17.0],
  'liechtenstein': [47.26666666, 9.53333333],
  'lithuania': [56.0, 24.0],
  'luxembourg': [49.75, 6.16666666],
  'madagascar': [-20.0, 47.0],
  'malawi': [-13.5, 34.0],
  'malaysia': [2.5, 112.5],
  'maldives': [3.25, 73.0],
  'mali': [17.0, -4.0],
  'malta': [35.83333333, 14.58333333],
  'marshall-islands': [9.0, 168.0],
  'mauritania': [20.0, -12.0],
  'mauritius': [-20.28333333, 57.55],
  'mexico': [23.0, -102.0],
  'micronesia': [6.9, 158.2],
  'moldova': [47.0, 29.0],
  'monaco': [43.73333333, 7.4],
  'mongolia': [46.0, 105.0],
  'montenegro': [42.7, 19.4],
  'morocco': [32.0, -5.0],
  'mozambique': [-18.25, 35.0],
  'myanmar': [21.9, 95.9],
  'namibia': [-22.0, 17.0],
  'nauru': [-0.53333333, 166.91666666],
  'nepal': [28.0, 84.0],
  'netherlands': [52.5, 5.75],
  'new-zealand': [-41.0, 174.0],
  'nicaragua': [13.0, -85.0],
  'niger': [16.0, 8.0],
  'nigeria': [10.0, 8.0],
  'north-korea': [40.0, 127.0],
  'north-macedonia': [41.6, 21.7],
  'norway': [62.0, 10.0],
  'oman': [21.0, 57.0],
  'pakistan': [30.0, 70.0],
  'palau': [7.5, 134.5],
  'palestine': [31.9, 35.2],
  'panama': [9.0, -80.0],
  'papua-new-guinea': [-6.0, 147.0],
  'paraguay': [-23.0, -58.0],
  'peru': [-10.0, -76.0],
  'philippines': [13.0, 122.0],
  'poland': [52.0, 20.0],
  'portugal': [39.5, -8.0],
  'qatar': [25.5, 51.25],
  'republic-of-the-congo': [-1.0, 15.0],
  'romania': [46.0, 25.0],
  'russia': [60.0, 100.0],
  'rwanda': [-2.0, 30.0],
  'saint-kitts-and-nevis': [17.33333333, -62.75],
  'saint-lucia': [13.88333333, -60.96666666],
  'saint-vincent-and-the-grenadines': [13.25, -61.2],
  'samoa': [-13.58333333, -172.33333333],
  'san-marino': [43.76666666, 12.41666666],
  'sao-tome-and-principe': [0.2, 6.6],
  'saudi-arabia': [25.0, 45.0],
  'senegal': [14.0, -14.0],
  'serbia': [44.1305021, 16.4284181],
  'seychelles': [-4.58333333, 55.66666666],
  'sierra-leone': [8.5, -11.5],
  'singapore': [1.36666666, 103.8],
  'slovakia': [48.66666666, 19.5],
  'slovenia': [46.11666666, 14.81666666],
  'solomon-islands': [-8.0, 159.0],
  'somalia': [10.0, 49.0],
  'south-africa': [-29.0, 24.0],
  'south-korea': [37.0, 127.5],
  'south-sudan': [7.0, 30.0],
  'spain': [40.0, -4.0],
  'sri-lanka': [7.0, 81.0],
  'sudan': [15.0, 30.0],
  'suriname': [4.0, -56.0],
  'sweden': [62.0, 15.0],
  'switzerland': [47.0, 8.0],
  'syria': [35.0, 38.0],
  'tajikistan': [39.0, 71.0],
  'tanzania': [-6.0, 35.0],
  'thailand': [15.0, 100.0],
  'timor-leste': [-8.8, 125.7],
  'togo': [8.0, 1.16666666],
  'tonga': [-20.0, -175.0],
  'trinidad-and-tobago': [11.0, -61.0],
  'tunisia': [34.0, 9.0],
  'turkiye': [39.0, 35.0],
  'turkmenistan': [40.0, 60.0],
  'tuvalu': [-8.0, 178.0],
  'uganda': [1.0, 32.0],
  'ukraine': [49.0, 32.0],
  'united-arab-emirates': [24.0, 54.0],
  'united-kingdom': [54.0, -2.0],
  'united-states': [38.0, -97.0],
  'uruguay': [-33.0, -56.0],
  'uzbekistan': [41.0, 64.0],
  'vanuatu': [-16.0, 167.0],
  'vatican-city': [41.9, 12.45],
  'venezuela': [8.0, -66.0],
  'vietnam': [16.16666666, 107.83333333],
  'yemen': [15.0, 48.0],
  'zambia': [-15.0, 30.0],
  'zimbabwe': [-20.0, 30.0],
};

export function nearbyCountries(slug: string): Country[] {
  const country = countryBySlug[slug];
  if (!country) return [];

  const borderSlugs = borderNeighbours[slug] || [];
  const regionalSlugs = countries
    .filter((other) => other.region === country.region && other.slug !== slug)
    .map((other) => other.slug);
  const selected = [...new Set([...borderSlugs, ...regionalSlugs])].slice(0, 6);
  return selected.map((nearbySlug) => countryBySlug[nearbySlug]).filter((item): item is Country => !!item);
}

export function neighbouringCountries(slug: string): Country[] {
  const origin = countryCoordinates[slug];
  if (!origin) return nearbyCountries(slug);
  const radians = (value: number) => value * Math.PI / 180;
  const distance = (point: [number, number]) => {
    const [lat1, lon1] = origin;
    const [lat2, lon2] = point;
    const dLat = radians(lat2 - lat1);
    const dLon = radians(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2
      + Math.cos(radians(lat1)) * Math.cos(radians(lat2)) * Math.sin(dLon / 2) ** 2;
    return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };
  return countries
    .filter((country) => country.slug !== slug && countryCoordinates[country.slug])
    .sort((a, b) => distance(countryCoordinates[a.slug]) - distance(countryCoordinates[b.slug]))
    .slice(0, 6);
}

// Guard the content object against stale or misspelled links as the template and guide library evolves.
export const invalidRelatedLinks = readyCountries.flatMap((country) => {
  const content = country.content!;
  return [
    ...content.relatedOccasionKeys.filter((key) => !OCCASIONS[key]).map((key) => `${country.slug}: occasion ${key}`),
    ...content.relatedGuideSlugs.filter((slug) => !guides.some((guide) => guide.slug === slug)).map((slug) => `${country.slug}: guide ${slug}`),
  ];
});
