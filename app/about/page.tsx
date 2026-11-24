import PageShell from '@/components/PageShell';
import { pageMeta } from '@/lib/seo';
import { occasionList, templates } from '@/lib/templates';
import { appLink } from '@/lib/site';

export const metadata = pageMeta({
  title: 'About: A Small Website for a Personal Moment',
  description: 'Learn why Wishly makes occasion-focused personal websites, how the international template library works and where accounts and page creation are managed.',
  path: '/about/',
});

export default function Page() {
  return (
    <PageShell kicker="A LITTLE ABOUT US" title="A place online for the things you want to say." lead="Wishly is built around a simple idea: some messages deserve more than a notification. Give them a page, a little space and a link that is easy to send." path="/about/" name="About">
      <section className="premium-container hp-sec" style={{ maxWidth: 860 }}>
        <div className="section-heading"><p className="section-kicker">THE THINKING</p><h2>Keep the technology quiet. Let the feeling do the talking.</h2></div>
        <p>Most of our important messages travel through the same small chat window. A personal website gives a birthday wish, proposal, thank-you note or invitation another kind of arrival: it can open with a visual moment, make room for photographs and lead into words written for one particular person.</p>
        <p style={{ marginTop: 18 }}>The international collection brings together {templates.length} designs across {occasionList.length} occasions. It includes English templates and selected Bengali-language experiences. Each design has its own character; choose one that suits the recipient rather than trying to make every occasion look the same.</p>
        <p style={{ marginTop: 18 }}>This site is the editorial and template-discovery side of Wishly. It is designed for people searching for ideas, examples and practical guidance from anywhere in the world. The actual account, editor, dashboard, payments and published-page tools are kept on the main Wishly service at <a className="text-link" href={appLink('/')} >wishly.bd</a>.</p>
        <p style={{ marginTop: 18 }}>Wishly is built in Bangladesh, with the intention that a page can be shared across countries, devices and time zones. The recipient only needs a browser to open a published link.</p>
      </section>
    </PageShell>
  );
}
