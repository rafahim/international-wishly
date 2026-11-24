'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const HEART = 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';
const STEPS = ['Pick a design', 'Write your words', 'Add your photos', 'Add music', 'Every screen', 'Little surprises', 'Publish', 'Share one link'];
const DURATION = 3600;

const Icon = ({ d, size = 20 }: { d: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
);

export default function HeroShowcase() {
  const [scene, setScene] = useState(0);
  const [run, setRun] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const visible = useRef(true);

  const particles = useMemo(() => Array.from({ length: 140 }, (_, i) => {
    const t = (i / 140) * Math.PI * 2;
    const r = 0.55 + 0.45 * Math.sqrt(((i * 37) % 100) / 100);
    const x = 16 * Math.pow(Math.sin(t), 3) * r;
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * r;
    const a = (i * 2.399) % (Math.PI * 2);
    const d = 20 + ((i * 13) % 14);
    return { x: +x.toFixed(2), y: +y.toFixed(2), s: 0.45 + (i % 3) * 0.2, sx: +(Math.cos(a) * d).toFixed(1), sy: +(Math.sin(a) * d).toFixed(1), d: +((i % 30) * 0.03).toFixed(2) };
  }), []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(([e]) => { visible.current = e.isIntersecting; }, { threshold: 0.2 });
    io.observe(el);
    const id = window.setInterval(() => {
      if (visible.current && !document.hidden) setScene((s) => (s + 1) % STEPS.length);
    }, DURATION);
    return () => { io.disconnect(); window.clearInterval(id); };
  }, [run]);

  const go = (i: number) => { setScene(i); setRun((r) => r + 1); };
  const on = (i: number) => (scene === i ? 'hs-scene is-on' : 'hs-scene');

  return (
    <div className="hs" ref={rootRef} role="group" aria-label="Animated tour of how Wishly works">
      {/* 1. pick a design */}
      <section className={on(0)}><div className="hs-stars" /><div className="hs-in">
        <p className="hs-eyebrow hs-pop">Step 1</p>
        <h3 className="hs-h hs-pop" style={{ ['--d' as string]: '.1s' }}>Pick a <em>design</em></h3>
        <div className="hs-tiles">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`hs-tile hs-pop t${i}`} style={{ ['--d' as string]: `${0.3 + i * 0.15}s` }}>
              <i /><b /><u />
              {i === 1 && <span className="hs-tick"><Icon d="M5 12.5l4.5 4.5L19 7.5" size={14} /></span>}
            </div>
          ))}
        </div>
      </div></section>

      {/* 2. write */}
      <section className={on(1)}><div className="hs-stars" /><div className="hs-in">
        <p className="hs-eyebrow hs-pop">Step 2</p>
        <h3 className="hs-h hs-pop" style={{ ['--d' as string]: '.1s' }}>Write it in <em>your words</em></h3>
        <div className="hs-paper hs-pop" style={{ ['--d' as string]: '.3s' }}>
          <small>Dear you,</small>
          {[92, 76, 86, 52].map((w, k) => <u key={k} style={{ ['--w' as string]: `${w}%`, ['--k' as string]: k }} />)}
          <span className="hs-caret" />
        </div>
      </div></section>

      {/* 3. photos */}
      <section className={on(2)}><div className="hs-stars" /><div className="hs-in">
        <p className="hs-eyebrow hs-pop">Step 3</p>
        <div className="hs-orbit hs-pop" style={{ ['--d' as string]: '.1s' }}>
          <div className="ring" /><div className="ring r2" />
          <div className="spin"><i className="ph" /><i className="ph" /><i className="ph" /><i className="ph" /></div>
          <div className="spin rev"><i className="ph" /><i className="ph" /><i className="ph" /><i className="ph" /></div>
          <svg className="core" viewBox="0 0 24 24" fill="currentColor"><path d={HEART} /></svg>
        </div>
        <h3 className="hs-h hs-pop" style={{ ['--d' as string]: '.5s' }}>Add your <em>memories</em></h3>
      </div></section>

      {/* 4. music */}
      <section className={on(3)}><div className="hs-stars" /><div className="hs-in">
        <p className="hs-eyebrow hs-pop">Step 4</p>
        <div className="hs-eq hs-pop" style={{ ['--d' as string]: '.1s' }}>
          {Array.from({ length: 17 }, (_, i) => <i key={i} style={{ ['--i' as string]: i }} />)}
        </div>
        <h3 className="hs-h hs-pop" style={{ ['--d' as string]: '.5s' }}>Set the <em>soundtrack</em></h3>
      </div></section>

      {/* 5. every screen */}
      <section className={on(4)}><div className="hs-stars" /><div className="hs-in">
        <p className="hs-eyebrow hs-pop">Step 5</p>
        <div className="hs-devices">
          <div className="hs-laptop hs-pop" style={{ ['--d' as string]: '.1s' }}><i /><b /><u /></div>
          <div className="hs-phone hs-pop" style={{ ['--d' as string]: '.5s' }}><i /><b /></div>
        </div>
        <h3 className="hs-h hs-pop" style={{ ['--d' as string]: '.9s' }}>Looks right on <em>every screen</em></h3>
      </div></section>

      {/* 6. surprises */}
      <section className={on(5)}><div className="hs-stars" /><div className="hs-in">
        <p className="hs-eyebrow hs-pop">Step 6</p>
        <div className="hs-pz"><i /><i /><i /><i /></div>
        <h3 className="hs-h hs-pop" style={{ ['--d' as string]: '1.2s' }}>Add little <em>surprises</em></h3>
        <p className="hs-sub hs-pop" style={{ ['--d' as string]: '1.5s' }}>Puzzles, quizzes, countdowns and letters</p>
      </div></section>

      {/* 7. publish */}
      <section className={on(6)}><div className="hs-stars" /><div className="hs-in">
        <p className="hs-eyebrow hs-pop">Step 7</p>
        <h3 className="hs-h hs-pop" style={{ ['--d' as string]: '.1s' }}>Publish in <em>one click</em></h3>
        <div className="hs-link hs-pop" style={{ ['--d' as string]: '.4s' }}>
          <span className="hs-link-dot" />
          <b>wishly.bd/<em>your-name</em></b>
          <span className="hs-link-ok"><Icon d="M5 12.5l4.5 4.5L19 7.5" size={16} /></span>
        </div>
        <p className="hs-sub hs-pop" style={{ ['--d' as string]: '1.1s' }}>Live in a browser, no coding</p>
      </div></section>

      {/* 8. share */}
      <section className={on(7)}><div className="hs-stars" />
        <div className="hs-in">
          <svg className="hs-pc" viewBox="-18 -17 36 34" aria-hidden="true">
            {particles.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r={p.s} style={{ ['--sx' as string]: `${p.sx}px`, ['--sy' as string]: `${p.sy}px`, ['--d' as string]: `${p.d}s` }} />
            ))}
          </svg>
          <h3 className="hs-h hs-pop" style={{ ['--d' as string]: '1.4s' }}>One link, <em>endless love</em></h3>
        </div>
      </section>

      <div className="hs-label" aria-live="off"><b>{String(scene + 1).padStart(2, '0')}</b> / {STEPS.length} &middot; {STEPS[scene]}</div>
      <div className="hs-dots" role="tablist" aria-label="Tour steps">
        {STEPS.map((s, i) => (
          <button key={s} type="button" aria-label={`${i + 1}: ${s}`} aria-selected={scene === i} className={scene === i ? 'on' : ''} onClick={() => go(i)} />
        ))}
      </div>
      <div className="hs-progress"><i key={`${scene}-${run}`} style={{ animationDuration: `${DURATION}ms` }} /></div>
    </div>
  );
}
