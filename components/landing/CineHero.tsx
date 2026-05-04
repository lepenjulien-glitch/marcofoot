'use client';

import { useEffect, useRef } from 'react';

export default function CineHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const tabletRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const phaseRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

    function updateCine() {
      if (window.innerWidth <= 960) return;
      const hero = heroRef.current;
      const tablet = tabletRef.current;
      const text = textRef.current;
      const chat = chatRef.current;
      const phase = phaseRef.current;
      const scroll = scrollRef.current;
      if (!hero || !tablet || !text || !chat || !phase || !scroll) return;

      const rect = hero.getBoundingClientRect();
      const total = hero.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = clamp(scrolled / total, 0, 1);

      // Text fade
      const textFadeStart = 0.15;
      const textFadeEnd = 0.30;
      const textHide = clamp((progress - textFadeStart) / (textFadeEnd - textFadeStart), 0, 1);
      text.style.opacity = String(1 - textHide);
      text.style.transform = `translateY(-50%) translateX(${-60 * textHide}px)`;
      text.style.pointerEvents = textHide < 0.5 ? 'auto' : 'none';

      // Tablet movement
      const stageW = window.innerWidth;
      const tabletW = tablet.offsetWidth;
      const rightOffset = Math.max(80, stageW * 0.08);
      const tabletNativeCenterX = stageW - rightOffset - tabletW / 2;
      const screenCenterX = stageW / 2;
      const xToCenter = screenCenterX - tabletNativeCenterX;

      const tApproach = clamp(progress / 0.40, 0, 1);
      const easedApproach = 1 - Math.pow(1 - tApproach, 3);

      const tabletScale = lerp(1.0, 1.20, easedApproach);
      const tabletTX = lerp(0, xToCenter, easedApproach);
      const tabletRotateX = lerp(6, 0, easedApproach);
      const tabletRotateY = lerp(-3, 0, easedApproach);

      const tOut = clamp((progress - 0.85) / 0.15, 0, 1);
      const finalScale = tabletScale - tOut * 0.05;
      const finalRotateX = tabletRotateX + tOut * 6;

      tablet.style.transform = `translateY(-50%) translateX(${tabletTX}px) scale(${finalScale}) rotateX(${finalRotateX}deg) rotateY(${tabletRotateY}deg)`;

      // Chat fade
      const chatHide = clamp((progress - 0.42) / 0.08, 0, 1);
      chat.style.opacity = String(1 - chatHide);
      chat.style.maxHeight = `${(1 - chatHide) * 200}px`;
      chat.style.padding = `${(1 - chatHide) * 14}px ${(1 - chatHide) * 16}px`;

      // Phase indicator
      const phaseShow = clamp((progress - 0.42) / 0.08, 0, 1);
      phase.style.opacity = String(phaseShow);

      // Scroll indicator
      scroll.style.opacity = String(1 - clamp(progress / 0.10, 0, 1));
    }

    updateCine();
    window.addEventListener('scroll', updateCine, { passive: true });
    window.addEventListener('resize', updateCine);
    return () => {
      window.removeEventListener('scroll', updateCine);
      window.removeEventListener('resize', updateCine);
    };
  }, []);

  return (
    <>
    <style>{`
      @media (max-width: 768px) {
        .cine-tablet {
          width: calc(100% - 32px) !important;
          max-width: 100% !important;
          margin: 0 auto !important;
        }
        .cine-text {
          margin-bottom: 40px !important;
        }
        .cine-bubble {
          font-size: 14px !important;
        }
        .cine-pitch-wrap {
          aspect-ratio: 16 / 10;
        }
      }
    `}</style>
    <div className="cine-hero" id="cine-hero" ref={heroRef}>
      <div className="cine-stage">
        <div className="cine-bg"></div>
        <div className="cine-orb cine-orb-1"></div>
        <div className="cine-orb cine-orb-2"></div>
        <div className="cine-grain"></div>

        <div className="cine-tablet" id="cine-tablet" ref={tabletRef}>
          <div className="cine-tablet-frame">
            <div className="cine-tablet-head">
              <div className="cine-dots"><span></span><span></span><span></span></div>
              <div className="cine-url">marco.coach</div>
              <div className="cine-live">EN DIRECT</div>
            </div>
            <div className="cine-chat" id="cine-chat" ref={chatRef}>
              <div className="cine-msg cine-msg-user">
                <div className="cine-av">J</div>
                <div className="cine-bubble">Une séance U9 sur la conduite de balle ?</div>
              </div>
              <div className="cine-msg cine-msg-marco">
                <div className="cine-av cine-av-marco">M</div>
                <div className="cine-bubble">Je te prépare ça. 3 ateliers progressifs adaptés à l&apos;âge, format 5v5.</div>
              </div>
            </div>
            <div className="cine-pitch-wrap">
              <svg className="cine-pitch" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <pattern id="cine-grass" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                    <rect width="80" height="80" fill="#0a3318"/>
                    <rect x="40" width="40" height="80" fill="#0c4220"/>
                  </pattern>
                  <radialGradient id="cine-grass-fade" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0)"/>
                    <stop offset="100%" stopColor="rgba(0,0,0,0.4)"/>
                  </radialGradient>
                  <marker id="cine-arr-amber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#e8b94c"/>
                  </marker>
                </defs>
                <rect x="0" y="0" width="800" height="500" fill="#0a3318"/>
                <rect x="0" y="0" width="800" height="500" fill="url(#cine-grass)" opacity="0.25"/>
                <rect x="0" y="0" width="800" height="500" fill="url(#cine-grass-fade)"/>

                <g stroke="rgba(255,255,255,0.45)" strokeWidth="2" fill="none">
                  <rect x="60" y="80" width="680" height="340"/>
                  <line x1="400" y1="80" x2="400" y2="420" strokeDasharray="6 6"/>
                </g>

                <g>
                  <rect x="290" y="30" width="220" height="32" rx="4" fill="rgba(0,0,0,0.55)" stroke="rgba(232,185,76,0.4)" strokeWidth="1"/>
                  <text x="400" y="50" textAnchor="middle" fill="#e8b94c" fontSize="11" fontWeight="600" fontFamily="JetBrains Mono" letterSpacing="2">ATELIER 1 · CONDUITE U9</text>
                </g>

                <text x="130" y="270" textAnchor="middle" fill="rgba(232,185,76,0.6)" fontSize="9" fontWeight="600" fontFamily="JetBrains Mono" letterSpacing="1.5">START</text>
                <text x="670" y="270" textAnchor="middle" fill="rgba(232,185,76,0.6)" fontSize="9" fontWeight="600" fontFamily="JetBrains Mono" letterSpacing="1.5">BUT</text>

                <g>
                  <polygon points="240,235 252,265 228,265" fill="#ff8c3c" stroke="#fff" strokeWidth="1" opacity="0.95"/>
                  <polygon points="350,235 362,265 338,265" fill="#ff8c3c" stroke="#fff" strokeWidth="1" opacity="0.95"/>
                  <polygon points="460,235 472,265 448,265" fill="#ff8c3c" stroke="#fff" strokeWidth="1" opacity="0.95"/>
                  <polygon points="570,235 582,265 558,265" fill="#ff8c3c" stroke="#fff" strokeWidth="1" opacity="0.95"/>
                </g>

                <g>
                  <rect x="700" y="220" width="36" height="60" fill="rgba(232,185,76,0.1)" stroke="#e8b94c" strokeWidth="2" strokeDasharray="4 4"/>
                </g>

                <path id="cine-path" d="M 170 250 Q 200 200 240 220 Q 280 280 350 280 Q 400 200 460 220 Q 510 290 570 280 Q 620 250 690 250"
                      stroke="#e8b94c" strokeWidth="2" strokeDasharray="6 4" fill="none" opacity="0.45"/>

                <g transform="translate(150,400)">
                  <circle r="16" fill="#e8b94c" stroke="#fff" strokeWidth="2"/>
                  <text textAnchor="middle" dy="4" fill="#050508" fontSize="11" fontWeight="700" fontFamily="Anton, sans-serif">C</text>
                </g>
                <text x="150" y="438" textAnchor="middle" fill="rgba(232,185,76,0.7)" fontSize="9" fontWeight="600" fontFamily="JetBrains Mono" letterSpacing="2">COACH</text>

                <g transform="translate(100,180)">
                  <circle r="13" fill="white" stroke="#e8b94c" strokeWidth="2.5"/>
                </g>
                <g transform="translate(100,140)">
                  <circle r="13" fill="white" stroke="#e8b94c" strokeWidth="2.5"/>
                </g>
                <g transform="translate(100,100)">
                  <circle r="13" fill="white" stroke="#e8b94c" strokeWidth="2.5"/>
                </g>

                <g transform="translate(690,330)">
                  <circle r="13" fill="white" stroke="#e8b94c" strokeWidth="2.5" opacity="0.5"/>
                </g>
                <g transform="translate(690,370)">
                  <circle r="13" fill="white" stroke="#e8b94c" strokeWidth="2.5" opacity="0.5"/>
                </g>

                {/* Joueur actif avec animation SMIL */}
                <g>
                  <circle r="14" fill="white" stroke="#e8b94c" strokeWidth="3">
                    <animateMotion dur="6s" repeatCount="indefinite" rotate="0">
                      <mpath href="#cine-path"/>
                    </animateMotion>
                  </circle>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="cine-text" id="cine-text" ref={textRef}>
          <div className="cine-eyebrow">
            <span className="cine-brand">Marco</span>
            <span className="cine-sep"></span>
            <span className="cine-tag">Beta · Mai 2026</span>
          </div>
          <h1 className="cine-title" style={{ fontSize: 'clamp(38px, 10vw, 96px)' }}>
            L&apos;assistant des<br/>
            <span className="cine-out">éducateurs</span><br/>
            U7 — <span className="cine-or">U13</span>.
          </h1>
          <p className="cine-sub">Le premier assistant IA pensé pour le football animation. Marco te génère séances, schémas tactiques et conseils pédagogiques — adaptés à l&apos;âge, en moins de 10 secondes.</p>
          <div className="cine-ctas">
            <a href="#waitlist" className="cine-btn-or">Rejoindre la beta →</a>
            <a href="#problem" className="cine-btn-out">Voir comment ça marche</a>
          </div>
        </div>

        <div className="cine-phase" id="cine-phase" ref={phaseRef}>
          <div className="cine-phase-num">SÉANCE U9</div>
          <div className="cine-phase-lbl">Conduite de balle</div>
        </div>

        <div className="cine-scroll" id="cine-scroll" ref={scrollRef}>
          <div className="cine-scroll-line"></div>
          <span>Scroll</span>
        </div>
      </div>
    </div>
    </>
  );
}
