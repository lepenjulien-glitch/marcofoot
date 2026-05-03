'use client';

import { useState } from 'react';

export default function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage('Merci ! On te prévient dès que Marco est prêt.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Une erreur est survenue, réessaie.');
      }
    } catch {
      setStatus('error');
      setMessage('Erreur réseau, réessaie.');
    }
  };

  return (
    <section id="waitlist" className="wait-section">
      <div className="wait-in rv">
        <div className="s-badge">// Accès anticipé</div>
        <h2 className="s-title">Rejoins les <span className="or">premiers</span> éducateurs.</h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', marginBottom: '32px', lineHeight: '1.75' }}>
          Marco arrive en mai 2026. Les 100 premiers éducateurs inscrits bénéficient de <strong style={{ color: 'var(--accent)', fontWeight: 600 }}>-25% pendant 1 an</strong> sur Marco Pro, et participent à la phase beta privée.
        </p>
        <form className="wait-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="wait-input"
            placeholder="ton@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="btn-or"
            style={{ padding: '14px 26px' }}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Envoi...' : 'Rejoindre'}
          </button>
        </form>
        {status === 'success' && (
          <div style={{ marginTop: '20px', color: 'var(--accent)', fontSize: '14px', fontWeight: 600 }}>{message}</div>
        )}
        {status === 'error' && (
          <div style={{ marginTop: '20px', color: '#ff6b6b', fontSize: '14px' }}>{message}</div>
        )}
        <div className="wait-offer">// <strong>-25% pendant 1 an</strong> pour les 100 premiers · sans engagement</div>
      </div>
    </section>
  );
}
