export default function PricingSection() {
  return (
    <section id="pricing">
      <div className="s-in">
        <div className="s-hd rv">
          <div className="s-badge">// Tarifs</div>
          <h2 className="s-title">Gratuit pour commencer.<br/><span className="or">Pro</span> quand tu veux.</h2>
        </div>

        <div className="price-grid">
          <div className="price-card rv rv-left d1">
            <div className="price-name">Starter</div>
            <div className="price-row">
              <span className="price-num">0€</span>
              <span className="price-per">pour toujours</span>
            </div>
            <div className="price-sub">sans carte bancaire</div>
            <ul className="price-feat">
              <li>Génération de 3 séances / mois</li>
              <li>Schémas tactiques de base</li>
              <li>Export PDF avec watermark</li>
              <li>Conseils pédagogiques limités</li>
              <li className="dim">Séances illimitées</li>
              <li className="dim">Export vidéo &amp; sans watermark</li>
            </ul>
            <a href="#waitlist" className="price-cta">Commencer gratuitement</a>
          </div>
          <div className="price-card feat rv rv-right d2">
            <div className="price-tag">Populaire</div>
            <div className="price-name">Marco Pro</div>
            <div className="price-row">
              <span className="price-num">5,90€</span>
              <span className="price-per">/ mois</span>
            </div>
            <div className="price-sub">ou 49€/an · économise 22€</div>
            <ul className="price-feat">
              <li>Tout du plan Starter</li>
              <li><strong>Séances illimitées</strong></li>
              <li>Schémas tactiques avancés</li>
              <li>Conseils pédagogiques illimités</li>
              <li>Export PDF &amp; vidéo HD sans watermark</li>
              <li>Historique cloud illimité</li>
              <li>Support prioritaire</li>
            </ul>
            <a href="#waitlist" className="price-cta">Essayer Marco Pro</a>
          </div>
        </div>
      </div>
    </section>
  );
}
