export default function PricingSection() {
  return (
    <>
      <style>{`
        .price-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          max-width: 1120px;
          margin: 0 auto;
        }
        .price-grid-3 .price-row {
          gap: 12px;
        }
        @media (max-width: 1024px) {
          .price-grid-3 {
            grid-template-columns: 1fr;
            max-width: 520px;
            padding: 0 24px;
            gap: 24px;
          }
        }
      `}</style>
      <section id="pricing">
        <div className="s-in">
          <div className="s-hd rv">
            <div className="s-badge">// Tarifs</div>
            <h2 className="s-title" style={{ fontSize: 'clamp(32px, 5.5vw, 78px)', lineHeight: 1.05 }}>Gratuit pour commencer.<br/><span className="or">Pro</span> quand tu veux.</h2>
          </div>

          <div className="price-grid-3">
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
            <div className="price-card feat rv d2" style={{ position: 'relative', overflow: 'visible' }}>
              <div className="price-tag" style={{ position: 'absolute', top: '-1px', right: '26px' }}>Le plus populaire</div>
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
    </>
  );
}
