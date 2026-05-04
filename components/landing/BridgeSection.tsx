export default function BridgeSection() {
  return (
    <>
      <style>{`
        .bridge-pills-desktop,
        .bridge-right-desktop {
          display: block;
        }
        .bridge-desc-mobile {
          display: none;
        }
        .bridge-desc-desktop {
          display: block;
        }
        @media (max-width: 768px) {
          .bridge-pills-desktop,
          .bridge-right-desktop {
            display: none !important;
          }
          .bridge-desc-desktop {
            display: none;
          }
          .bridge-desc-mobile {
            display: block;
            font-size: 14px;
            color: rgba(255,255,255,0.55);
            line-height: 1.75;
            margin-bottom: 24px;
          }
        }
      `}</style>
      <section className="bridge-section">
        <div className="s-in">
          <div className="bridge-card rv rv-3d">
            <div className="bridge-left">
              <div className="s-badge" style={{ marginBottom: '22px' }}>// Pour les adultes</div>
              <h3>Tu coaches aussi<br/>du <span className="out">foot à 11</span> ?</h3>
              <p className="bridge-desc-desktop">Marco est pensé pour les jeunes. Mais si tu coaches des séniors, des U15, des U17 ou en N3-R1, ne cherche plus : <strong style={{ color: '#fff' }}>MonStaff</strong> est ta suite complète. Marco (tactique), Léo (physique), Sarah (mental), Victor (vidéo) — plus gestion d&apos;effectif, compétition, feuille de match.</p>
              <p className="bridge-desc-mobile">MonStaff, l&apos;assistant tactique pour le foot adulte.</p>
              <div className="bridge-pills bridge-pills-desktop">
                <div className="b-pill on">Foot à 11</div>
                <div className="b-pill">Séniors</div>
                <div className="b-pill">U15-U17</div>
                <div className="b-pill">Semi-pro</div>
              </div>
              <a href="https://monstaff.app" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '12px 22px', fontSize: '13px' }}>Découvrir MonStaff →</a>
            </div>
            <div className="bridge-right bridge-right-desktop">
              <div className="bridge-right-title">// Le staff IA complet</div>
              <div className="staff-grid">
                <div className="staff-item rv rv-flip d1">
                  <div className="staff-av staff-marco">M</div>
                  <div>
                    <div className="staff-name">Marco</div>
                    <div className="staff-role">Tactique</div>
                  </div>
                </div>
                <div className="staff-item rv rv-flip d2">
                  <div className="staff-av staff-leo">L</div>
                  <div>
                    <div className="staff-name">Léo</div>
                    <div className="staff-role">Physique</div>
                  </div>
                </div>
                <div className="staff-item rv rv-flip d3">
                  <div className="staff-av staff-sarah">S</div>
                  <div>
                    <div className="staff-name">Sarah</div>
                    <div className="staff-role">Mental</div>
                  </div>
                </div>
                <div className="staff-item rv rv-flip d4">
                  <div className="staff-av staff-victor">V</div>
                  <div>
                    <div className="staff-name">Victor</div>
                    <div className="staff-role">Vidéo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
