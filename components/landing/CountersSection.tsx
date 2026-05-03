'use client';

import { useEffect, useRef } from 'react';

export default function CountersSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const counters = sectionRef.current?.querySelectorAll<HTMLDivElement>('[data-cnt]');
    if (!counters) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLDivElement;
            const target = parseInt(el.dataset.cnt || '0');
            const sfx = el.dataset.sfx || '';
            let cur = 0;
            const step = Math.max(1, Math.ceil(target / 50));
            const iv = setInterval(() => {
              cur += step;
              if (cur >= target) {
                cur = target;
                clearInterval(iv);
              }
              el.textContent = cur + sfx;
            }, 30);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="count-section" ref={sectionRef}>
      <div className="count-grid">
        <div className="c-col rv">
          <span className="c-lbl">Temps par séance</span>
          <div className="c-n" data-cnt="10" data-sfx="s">0s</div>
          <div className="c-d">Pour générer 3 ateliers complets</div>
        </div>
        <div className="c-col rv d1">
          <span className="c-lbl">Catégories</span>
          <div className="c-n" data-cnt="4" data-sfx="">0</div>
          <div className="c-d">U7 · U9 · U11 · U13</div>
        </div>
        <div className="c-col rv d2">
          <span className="c-lbl">Formats de jeu</span>
          <div className="c-n" data-cnt="3" data-sfx="">0</div>
          <div className="c-d">Foot à 5 · à 8 · à 11</div>
        </div>
        <div className="c-col rv d3">
          <span className="c-lbl">Modèle IA</span>
          <div className="c-n" style={{ fontSize: 'clamp(34px,4.5vw,54px)', letterSpacing: '0px' }}>Opus</div>
          <div className="c-d">Claude, le plus avancé du marché</div>
        </div>
      </div>
    </section>
  );
}
