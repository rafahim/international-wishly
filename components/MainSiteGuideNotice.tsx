import { ArrowUpRight, Globe2, LayoutDashboard, PenLine, Upload } from 'lucide-react';
import { appLink } from '@/lib/site';

/** Clear signpost on every insight: this domain is for discovery; product actions live on wishly.bd. */
export default function MainSiteGuideNotice() {
  return (
    <section className="global-wrap global-guide-main-site" aria-labelledby="guide-main-site-title">
      <div className="global-guide-main-site-copy">
        <p className="global-overline"><Globe2 size={14} aria-hidden="true" /> THE MAIN WISHLY WEBSITE</p>
        <h2 id="guide-main-site-title">Ready to turn this idea into a real page?</h2>
        <p>This international site is where you discover ideas, templates and practical insights. <strong>Wishly.bd is the main Wishly website</strong>—use it to create your account, customise your page in the editor, publish it and manage it later.</p>
        <a className="global-button global-button-primary" href={appLink('/signup')}>Create your page on Wishly.bd <ArrowUpRight size={17} /></a>
        <a className="global-guide-main-site-plain" href={appLink('/')}>Visit the main website <ArrowUpRight size={14} /></a>
      </div>
      <div className="global-guide-main-site-points" aria-label="Main website tools">
        <div><span><LayoutDashboard size={18} /></span><b>Account & dashboard</b><small>Keep your projects in one place.</small></div>
        <div><span><PenLine size={18} /></span><b>Visual page editor</b><small>Personalise the options supported by your template.</small></div>
        <div><span><Upload size={18} /></span><b>Publish & manage</b><small>Make your page available and return to update it.</small></div>
      </div>
    </section>
  );
}
