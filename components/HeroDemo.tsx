import { Cake, Check, Gem, Heart, ImageIcon, Link2, Music, QrCode, Type } from 'lucide-react';

/**
 * Looping, CSS-only product demo for the home hero: pick -> edit -> share.
 * No JS, no images, no layout shift. One 12s loop drives every scene
 * (see .hd-* rules in app/home.css). Decorative, so it is aria-hidden.
 */
export default function HeroDemo() {
  return (
    <div className="hd" aria-hidden="true">
      <div className="hd-stage">
        {/* scene 1 : pick */}
        <div className="hd-scene hd-s1">
          <p className="hd-cap">Choose a template</p>
          <div className="hd-tiles">
            <span className="hd-tile t1"><Cake size={20} strokeWidth={1.75} /><b>Birthday</b></span>
            <span className="hd-tile t2"><Heart size={20} strokeWidth={1.75} /><b>Miss you</b><i><Check size={11} strokeWidth={3} /></i></span>
            <span className="hd-tile t3"><Gem size={20} strokeWidth={1.75} /><b>Proposal</b></span>
          </div>
        </div>

        {/* scene 2 : edit */}
        <div className="hd-scene hd-s2">
          <div className="hd-page">
            <span className="hd-photo"><Heart size={26} strokeWidth={1.75} /></span>
            <span className="hd-title"><span className="hd-type">Happy Birthday, Anarkoli</span></span>
            <span className="hd-sub" />
          </div>
          <div className="hd-tools">
            <span><Type size={14} strokeWidth={1.75} /></span>
            <span className="hd-tool-hot"><ImageIcon size={14} strokeWidth={1.75} /></span>
            <span><Music size={14} strokeWidth={1.75} /></span>
          </div>
        </div>

        {/* scene 3 : share */}
        <div className="hd-scene hd-s3">
          <p className="hd-live"><Check size={12} strokeWidth={3} /> Published</p>
          <div className="hd-url"><Link2 size={14} strokeWidth={1.75} /><span>…/link/<b>for-anarkoli</b></span>
            <em><u>Copy</u><s><Check size={11} strokeWidth={3} /> Copied</s></em>
          </div>
          <div className="hd-chips"><span>WhatsApp</span><span>Messenger</span><span><QrCode size={12} strokeWidth={1.75} /> QR</span></div>
        </div>

        <svg className="hd-cursor" width="22" height="22" viewBox="0 0 24 24"><path d="M5 3l14 7.5-6.2 1.9L9.8 19z" fill="#fff" stroke="#0b0b12" strokeWidth="1.5" strokeLinejoin="round" /></svg>
      </div>

      <div className="hd-steps">
        <span className="hd-st a"><b>1</b>Pick</span>
        <span className="hd-st b"><b>2</b>Edit</span>
        <span className="hd-st c"><b>3</b>Share</span>
      </div>
      <div className="hd-progress"><i /></div>
    </div>
  );
}
