'use client';

import { useEffect, useRef, useState } from 'react';

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const fbRef = useRef<HTMLAnchorElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 480);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const y = window.scrollY;
      navRef.current?.classList.toggle('scrolled', y > 40);

      const waitSection = document.getElementById('waitlist');
      if (fbRef.current && waitSection) {
        const waitTop = waitSection.getBoundingClientRect().top;
        const vh = window.innerHeight;
        const show = y > 600 && waitTop > vh * 0.5;
        fbRef.current.classList.toggle('show', show);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <>
      <nav id="nav" ref={navRef}>
        <a href="#" className="logo">
          <span className="logo-top">MAR<span className="or">CO</span></span>
          <span className="logo-sub">IA Football Animation</span>
        </a>
        <ul className="nav-links">
          <li><a href="#solution">Comment ça marche</a></li>
          <li><a href="#features">Fonctionnalités</a></li>
          <li><a href="#pricing">Tarifs</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li>
            <a
              href="#waitlist"
              className="nav-cta"
              style={{
                whiteSpace: 'nowrap',
                padding: isMobile ? '10px 14px' : undefined,
                fontSize: isMobile ? '12px' : undefined,
              }}
            >
              {isMobile ? 'Rejoindre →' : 'Accès anticipé →'}
            </a>
          </li>
        </ul>
      </nav>
      <a href="#waitlist" className="fb" ref={fbRef}>Rejoindre la beta →</a>
    </>
  );
}
