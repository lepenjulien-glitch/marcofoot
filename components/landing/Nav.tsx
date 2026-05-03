'use client';

import { useEffect, useRef } from 'react';

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const fbRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      navRef.current?.classList.toggle('scrolled', y > 40);

      const waitSection = document.getElementById('waitlist');
      if (fbRef.current && waitSection) {
        const waitTop = waitSection.getBoundingClientRect().top;
        const vh = window.innerHeight;
        const show = y > vh * 3.5 && waitTop > vh * 0.3;
        fbRef.current.classList.toggle('show', show);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
          <li><a href="#waitlist" className="nav-cta">Accès anticipé →</a></li>
        </ul>
      </nav>
      <a href="#waitlist" className="fb" ref={fbRef}>Rejoindre la beta →</a>
    </>
  );
}
