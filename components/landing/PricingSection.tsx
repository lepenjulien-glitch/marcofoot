export default function PricingSection() {
  return (
    <section id="pricing">
      <div className="s-in">
        <div className="s-hd rv">
          <div className="s-badge">// Tarifs</div>
          <h2 className="s-title">Gratuit pour commencer.<br/><span className="or">Pro</span> quand tu veux.</h2>
        </div>

        <div className="price-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', maxWidth: '1120px' }}>
          {/* Starter */}
          <div className="price-card rv rv-left d1">
            <div className="price-name">Starter</div>
            <div className="price-row">
              <span className="price-num">0€</span>
              <span className="price-per">/ mois</span>
            </div>
            <div className="price-sub">Pour découvrir Marco</div>
            <ul className="price-feat">
              <li>3 séances / mois</li>
              <li>Génération basique</li>
              <li>Catégories U7 à U13</li>
            </ul>
            <a href="#waitlist" className="price-cta">Commencer</a>
          </div>

          {/* Marco Pro */}
          <div className="price-card feat rv d2">
            <div className="price-tag">Le plus populaire</div>
            <div className="price-name">Marco Pro</div>
            <div className="price-row">
              <span className="price-num">14,90€</span>
              <span className="price-per">/ mois</span>
            </div>
            <div className="price-sub">Pour l&apos;éducateur régulier</div>
            <ul className="price-feat">
              <li>30 séances / mois</li>
              <li>5 animations tactiques / mois</li>
              <li>Q&amp;A pédagogique illimité</li>
              <li>Édition de séances</li>
              <li>Export PDF</li>
            </ul>
            <a href="#waitlist" className="price-cta">Choisir Pro</a>
          </div>

          {/* Marco Pro+ */}
          <div className="price-card rv rv-right d3">
            <div className="price-name">Marco Pro+</div>
            <div className="price-row">
              <span className="price-num">24,90€</span>
              <span className="price-per">/ mois</span>
            </div>
            <div className="price-sub">Pour le passionné</div>
            <ul className="price-feat">
              <li>100 séances / mois</li>
              <li>20 animations tactiques / mois</li>
              <li>Q&amp;A pédagogique illimité</li>
              <li>Édition de séances</li>
              <li>Export PDF + partage</li>
              <li>Support prioritaire</li>
            </ul>
            <a href="#waitlist" className="price-cta">Choisir Pro+</a>
          </div>
        </div>
      </div>
    </section>
  );
}
