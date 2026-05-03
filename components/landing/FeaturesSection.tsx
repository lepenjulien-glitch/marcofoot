export default function FeaturesSection() {
  return (
    <section id="features" className="feat-section">
      <div className="s-in">
        <div className="s-hd rv">
          <div className="s-badge">// Fonctionnalités</div>
          <h2 className="s-title">Tout ce qu&apos;il faut.<br/><span className="out">Rien</span> de plus.</h2>
        </div>

        <div className="feat-grid">
          <div className="feat-card rv rv-3d d1">
            <div className="feat-num">01</div>
            <svg className="feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            <div className="feat-title">Séances clé en main</div>
            <div className="feat-desc">3 ateliers progressifs adaptés à l&apos;âge, avec durée, matériel et consignes. Du préparé prêt à imprimer.</div>
          </div>
          <div className="feat-card rv rv-3d d2">
            <div className="feat-num">02</div>
            <svg className="feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6 L12 12 L16 14"/></svg>
            <div className="feat-title">Programmes FFF</div>
            <div className="feat-desc">Marco connaît les contenus de référence par catégorie. Conduite, passe, prise d&apos;info, jeu collectif — au bon âge.</div>
          </div>
          <div className="feat-card rv rv-3d d3">
            <div className="feat-num">03</div>
            <svg className="feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15 a2 2 0 0 1 -2 2 H7 l-4 4 V5 a2 2 0 0 1 2 -2 h14 a2 2 0 0 1 2 2 z"/></svg>
            <div className="feat-title">Conseils pédago</div>
            <div className="feat-desc">&quot;Comment gérer un U8 qui ne participe pas ?&quot; Marco te répond avec bienveillance et expérience.</div>
          </div>
          <div className="feat-card rv rv-3d d4">
            <div className="feat-num">04</div>
            <svg className="feat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9 L15 12 L10 15 Z" fill="currentColor"/></svg>
            <div className="feat-title">Export &amp; partage</div>
            <div className="feat-desc">PDF prêt à imprimer, vidéo HD pour partager au staff via WhatsApp ou au club. En un clic.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
