'use client';

import { FormEvent } from 'react';

export default function WaitlistSection() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Merci ! On te prévient dès que Marco est prêt.');
  };

  return (
    <section id="waitlist" className="wait-section">
      <div className="wait-in rv">
        <div className="s-badge">// Accès anticipé</div>
        <h2 className="s-title">Rejoins les <span className="or">premiers</span> éducateurs.</h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', marginBottom: '32px', lineHeight: '1.75' }}>
          Marco arrive en mai 2026. Les 500 premiers éducateurs inscrits bénéficient de <strong style={{ color: 'var(--accent)', fontWeight: 600 }}>-50% à vie</strong> sur Marco Pro, et participent à la phase beta privée.
        </p>
        <form className="wait-form" onSubmit={handleSubmit}>
          <input type="email" className="wait-input" placeholder="ton@email.com" required />
          <button type="submit" className="btn-or" style={{ padding: '14px 26px' }}>Rejoindre</button>
        </form>
        <div className="wait-offer">// <strong>-50% à vie</strong> pour les 500 premiers · sans engagement</div>
      </div>
    </section>
  );
}
