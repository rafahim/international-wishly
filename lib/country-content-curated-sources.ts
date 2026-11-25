import type { CountryGuideSource } from './countries';

const checked = '2026-11-25';
const source = (title: string, url: string): CountryGuideSource => ({ title, url, checked });

export const curatedCountrySources: Record<string, CountryGuideSource[]> = {
  bangladesh: [
    source('Bangladesh Tourism Board — Culture and festivals', 'https://tourismboard.gov.bd/pages/static-pages/6922e0d4933eb65569e28c18'),
    source('UNESCO — Mangal Shobhajatra on Pahela Baishakh', 'https://ich.unesco.org/en/RL/mangal-shobhajatra-on-pahela-baishakh-01091'),
    source('Bangladesh Ministry of Foreign Affairs — Culture and festivals', 'https://oicpm.mofa.gov.bd/pages/static-pages/culture-of-bangladesh-p51h0k-6a0c4dc15d40ccedfd8f0156'),
    source('The Asia Foundation — 2024 Survey of the Bangladeshi People', 'https://asiafoundation.org/wp-content/uploads/2024/12/Bangladesh_The-State-of-Bangladeshs-Political-Governance-Development-and-Society-According-to-its-Citizens-2024_Survey-of-the-Bangladeshi-People.pdf'),
  ],
  india: [
    source('Incredible India — Fairs and festivals', 'https://www.prod.incredibleindia.gov.in/content/incredible-india-v2/en/experiences/art/fairs-and-festivals.html'),
    source('Incredible India — Eid ul-Fitr', 'https://www.incredibleindia.gov.in/en/festivals-and-events/eid-ul-fitr'),
    source('Mobile Ecosystem Forum — Business Messaging Customer Survey 2024', 'https://mobileecosystemforum.com/wp-content/uploads/2024/05/Business-Messaging-Costumer-Survey-2024.pdf'),
  ],
  nepal: [
    source('Nepal Tourism Board — Dashain', 'https://ntb.gov.np/dashain'),
    source('Nepal Tourism Board — Tihar', 'https://ntb.gov.np/en/tihar'),
    source('Nepal Tourism Board — Haritalika Teej', 'https://ntb.gov.np/haritalika-teej'),
  ],
  'united-arab-emirates': [
    source('UAE Government — Ramadan', 'https://u.ae/en/information-and-services/public-holidays-and-religious-affairs/ramadan'),
    source('UAE Government — Public holidays', 'https://u.ae/information-and-services/public-holidays-and-religious-affairs/public-holidays'),
    source('Experience Abu Dhabi — Your Eid questions answered', 'https://visitabudhabi.ae/en/plan-your-trip/article-hub/eid-questions'),
  ],
  malaysia: [
    source('Tourism Malaysia — Hari Raya Aidilfitri', 'https://www.tourism.gov.my/media/view/hari-raya-aidilfitri-with-the-prime-minister-of-malaysia'),
    source('Tourism Malaysia — Chinese New Year', 'https://www.tourism.gov.my/media/view/chinese-new-year'),
    source('Malaysia Ministry of National Unity — Deepavali 2026 media statement', 'https://dmedia.penerangan.gov.my/upload/km/06112026.894152302.pdf'),
    source('Malaysia Tourism — National Day', 'https://www.malaysia.travel/index.php/events/national-day'),
  ],
  pakistan: [
    source('Pakistan Press Information Department — Eid-ul-Fitr message', 'https://pid.gov.pk/site/press_detail/32194'),
    source('Radio Pakistan — Eid al-Adha coverage', 'https://www.radio.gov.pk/27-05-2026/nation-celebrates-eid-ul-azha-today-with-religious-zeal'),
    source('Mosaica / The Cultural Atlas — Pakistani greetings', 'https://theculturalatlas.org/pakistani-culture/pakistani-culture-greetings'),
    source('Gallup & Gilani Pakistan — Messaging and social-networking survey', 'https://gallup.com.pk/wp/wp-content/uploads/2024/08/09.08.2024.Daily-poll-English-1.pdf'),
  ],
  japan: [
    source('Japan National Tourism Organization — Japanese manners and etiquette', 'https://www.japan.travel/en/guide/understanding-and-mastering-japanese-manners-and-etiquette/'),
    source('Embassy of Japan in Bangladesh — Annual events', 'https://www.bd.emb-japan.go.jp/en/japanInfo/annualEvent.html'),
    source('Embassy of Japan in Bangladesh — National holidays', 'https://www.bd.emb-japan.go.jp/en/japanInfo/nationalHolidays.html'),
    source('LY Corporation — New Year greeting survey', 'https://www.lycorp.co.jp/ja/news/release/019979/'),
  ],
  singapore: [
    source('Singapore Ministry of Culture, Community and Youth — Festival names and forms of greeting', 'https://www.mccy.gov.sg/about-us/news-and-resources/naming-of-festivals-and-forms-of-greeting/'),
    source('Singapore Chinese Cultural Centre — Chinese New Year', 'https://culturepaedia.singaporeccc.org.sg/social-practices/chinese-new-year/'),
    source('National Heritage Board — Chinese New Year', 'https://www.roots.gov.sg/ich-landing/ich/chinese-new-year'),
  ],
  philippines: [
    source('Philippines Office of Civil Defense / NDRRMC — Year-End Celebration Monitoring', 'https://ndrrmc.gov.ph/attachments/article/4278/SitRep_No_1_Year_End_Celebration_2024.pdf'),
    source('Cultural Atlas — Filipino greetings', 'https://culturalatlas.sbs.com.au/filipino-culture/filipino-culture-greetings'),
    source('British Council Philippines — Visitor notes', 'https://www.britishcouncil.ph/sites/default/files/making_futures_philippines_-_philippines_visitors_notes.pdf'),
  ],
  'sri-lanka': [
    source('Registrar General’s Department — Sinhala and Tamil New Year', 'https://www.rgd.gov.lk/web/index.php/en/media-1/latest-articles/sinhala-and-tamil-new-year-2027'),
    source('Central Bank of Sri Lanka — Official holiday calendar', 'https://www.cbsl.gov.lk/en/node/19362'),
    source('Sri Lanka Ministry of Foreign Affairs — Vesak observance', 'https://www.mfa.gov.lk/en/news/ministry-foreign-affairs-and-foreign-employment-hosts-vesak-day-festival-2026'),
    source('Department of Official Languages — Sinhala, Tamil and English phrase guide', 'https://languagesdept.gov.lk/web/images/PDF/e_publication/lets_learn_sinhala_tamil_english.pdf'),
  ],
};
