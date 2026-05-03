export default function WhoSection() {
  return (
    <section>
      <div className="s-in">
        <div className="s-hd rv">
          <div className="s-badge">// Pour qui</div>
          <h2 className="s-title">Marco, <span className="or">c&apos;est pour toi</span>.</h2>
          <p className="s-sub">Du foot à 5 au foot à 8. Que tu sois éducateur, parent bénévole ou responsable école de foot — Marco s&apos;adapte à ton format.</p>
        </div>

        <div className="who-grid">
          <div className="who-card who-1 rv rv-zoom d1">
            <div className="who-num">01 / FOOT À 5</div>
            <div className="who-title">Éducateur U7-U9</div>
            <p className="who-desc">Tu coaches du foot à 4 ou 5 le mercredi et le samedi. Marco te génère séances de motricité, conduite, prise d&apos;info — adaptées aux 5-8 ans.</p>
            <div className="who-tags">
              <div className="who-tag">U7-U9</div>
              <div className="who-tag">4v4 / 5v5</div>
              <div className="who-tag">Mercredi</div>
            </div>
          </div>
          <div className="who-card who-2 rv rv-zoom d2">
            <div className="who-num">02 / FOOT À 8</div>
            <div className="who-title">Éducateur U10-U13</div>
            <p className="who-desc">Tu prépares la transition vers le foot à 11. Marco te sort schémas tactiques simples, jeu collectif, animation par poste — adaptés aux 9-12 ans.</p>
            <div className="who-tags">
              <div className="who-tag">U10-U13</div>
              <div className="who-tag">8v8</div>
              <div className="who-tag">Pré-formation</div>
            </div>
          </div>
          <div className="who-card who-3 rv rv-zoom d3">
            <div className="who-num">03 / ÉCOLE DE FOOT</div>
            <div className="who-title">Responsable école</div>
            <p className="who-desc">Tu coordonnes 10 à 30 éducateurs bénévoles. Marco devient leur référent commun — cohérence pédagogique entre les catégories, gain de temps pour tous.</p>
            <div className="who-tags">
              <div className="who-tag">Club</div>
              <div className="who-tag">Coordination</div>
              <div className="who-tag">Formation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
