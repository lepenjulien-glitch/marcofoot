export default function ProblemSection() {
  return (
    <section id="problem">
      <div className="s-in">
        <div className="s-hd rv">
          <div className="s-badge">// Le constat</div>
          <h2 className="s-title">Les éducateurs U7-U13<br/>méritent <span className="out">mieux</span>.</h2>
          <p className="s-sub">Les outils tactiques pensent foot à 11 et coachs séniors. Toi tu coaches des U7, des U9, des U11 — et tu prépares ta séance du mercredi à 22h, après le boulot, sans aide, sans formation.</p>
        </div>
        <div className="prob-grid">
          <div className="prob-card rv rv-flip d1">
            <div className="prob-num">01 / Les outils existants</div>
            <div className="prob-title">Pensés pour le foot adulte</div>
            <p className="prob-desc">TacticalPad, CoachPad, MyCoach — tous parlent 4-3-3, pressing haut, transitions. Toi tu joues à 5v5 avec auto-passe et zone de but. Aucun outil ne te parle ta réalité.</p>
          </div>
          <div className="prob-card rv rv-flip d2">
            <div className="prob-num">02 / La page blanche</div>
            <div className="prob-title">&quot;Cette semaine, je travaille quoi ?&quot;</div>
            <p className="prob-desc">Tu veux faire progresser tes joueurs sur la conduite, la passe, la prise d&apos;info. Mais le mercredi soir, à 22h, tu ne sais plus quel exercice proposer. Tu reprends ce que tu as déjà fait, encore.</p>
          </div>
          <div className="prob-card rv rv-flip d3">
            <div className="prob-num">03 / La formation</div>
            <div className="prob-title">Pas de CFF, pas de temps</div>
            <p className="prob-desc">Tu es bénévole, parent, passionné. Pas titulaire d&apos;un diplôme FFF. Tu apprends sur le tas, en regardant YouTube ou en demandant aux autres éducateurs du club. Marco te transmet ce que tu n&apos;as pas eu le temps d&apos;apprendre.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
