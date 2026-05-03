export default function SolutionSection() {
  return (
    <section id="solution" className="sol-section">
      <div className="s-in">
        <div className="s-hd rv">
          <div className="s-badge">// La solution</div>
          <h2 className="s-title">Marco connaît<br/>les <span className="out">jeunes</span>.</h2>
          <p className="s-sub">Programmes FFF, formats de jeu adaptés, vocabulaire simple. Marco te génère ce qu&apos;il faut, à l&apos;âge qu&apos;il faut, en quelques secondes.</p>
        </div>

        <div className="sol-grid">
          <div className="sol-left rv rv-left">
            <h3>Trois choses,<br/>aussi <span className="or">simples</span> qu&apos;un message.</h3>
            <p>Marco est ton <strong style={{ color: '#fff' }}>éducateur référent virtuel</strong>. Il connaît les programmes FFF U7-U13, les principes pédagogiques, les formats de jeu (4v4, 5v5, 8v8). Il s&apos;adapte à l&apos;âge de tes joueurs, pas l&apos;inverse.</p>
            <ol className="sol-steps">
              <li>
                <div className="sol-n">1</div>
                <div className="sol-txt">
                  <strong>Des séances en 10 secondes</strong>
                  <span>&quot;Une séance U9 sur la conduite de balle.&quot; Marco te sort 3 ateliers progressifs adaptés à l&apos;âge, avec durée, matériel, consignes.</span>
                </div>
              </li>
              <li>
                <div className="sol-n">2</div>
                <div className="sol-txt">
                  <strong>Des schémas tactiques simples</strong>
                  <span>Pour le match du samedi. Marco te dessine la place de chaque joueur, les déplacements, les principes — adaptés au format 5v5 ou 8v8.</span>
                </div>
              </li>
              <li>
                <div className="sol-n">3</div>
                <div className="sol-txt">
                  <strong>Des conseils pédagogiques</strong>
                  <span>&quot;J&apos;ai un U8 qui ne participe pas, comment je fais ?&quot; Marco te conseille avec bienveillance, comme un éducateur expérimenté qui t&apos;aurait pris sous son aile.</span>
                </div>
              </li>
            </ol>
          </div>
          <div className="sol-right rv rv-right d2">
            <div className="sol-terrain">
              <svg viewBox="0 0 780 500" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <defs>
                  <pattern id="grass" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                    <rect width="80" height="80" fill="#0a3318"/>
                    <rect x="40" width="40" height="80" fill="#0c4220"/>
                  </pattern>
                  <marker id="arrA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#e8b94c"/>
                  </marker>
                </defs>
                <rect x="0" y="0" width="780" height="500" fill="#0a3318"/>
                <rect x="0" y="0" width="780" height="500" fill="url(#grass)" opacity="0.2"/>
                <rect x="60" y="60" width="660" height="380" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
                <line x1="390" y1="60" x2="390" y2="440" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
                <circle cx="390" cy="250" r="50" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
                <circle cx="390" cy="250" r="3" fill="rgba(255,255,255,0.5)"/>
                <rect x="60" y="160" width="80" height="180" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
                <rect x="640" y="160" width="80" height="180" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>

                <g>
                  <circle cx="100" cy="250" r="14" fill="white" stroke="#e8b94c" strokeWidth="2.5"/>
                  <text x="100" y="254" textAnchor="middle" fill="#050508" fontSize="11" fontWeight="700">1</text>
                  <circle cx="200" cy="150" r="14" fill="white" stroke="#e8b94c" strokeWidth="2.5"/>
                  <text x="200" y="154" textAnchor="middle" fill="#050508" fontSize="11" fontWeight="700">2</text>
                  <circle cx="200" cy="250" r="14" fill="white" stroke="#e8b94c" strokeWidth="2.5"/>
                  <text x="200" y="254" textAnchor="middle" fill="#050508" fontSize="11" fontWeight="700">3</text>
                  <circle cx="200" cy="350" r="14" fill="white" stroke="#e8b94c" strokeWidth="2.5"/>
                  <text x="200" y="354" textAnchor="middle" fill="#050508" fontSize="11" fontWeight="700">4</text>
                  <circle cx="370" cy="150" r="14" fill="white" stroke="#e8b94c" strokeWidth="2.5"/>
                  <text x="370" y="154" textAnchor="middle" fill="#050508" fontSize="11" fontWeight="700">5</text>
                  <circle cx="370" cy="250" r="14" fill="white" stroke="#e8b94c" strokeWidth="2.5"/>
                  <text x="370" y="254" textAnchor="middle" fill="#050508" fontSize="11" fontWeight="700">6</text>
                  <circle cx="370" cy="350" r="14" fill="white" stroke="#e8b94c" strokeWidth="2.5"/>
                  <text x="370" y="354" textAnchor="middle" fill="#050508" fontSize="11" fontWeight="700">7</text>
                  <circle cx="540" cy="250" r="14" fill="white" stroke="#e8b94c" strokeWidth="2.5"/>
                  <text x="540" y="254" textAnchor="middle" fill="#050508" fontSize="11" fontWeight="700">8</text>
                </g>

                <g fill="#ff8c3c" opacity="0.85">
                  <polygon points="640,140 648,156 632,156"/>
                  <polygon points="640,200 648,216 632,216"/>
                  <polygon points="640,260 648,276 632,276"/>
                  <polygon points="640,320 648,336 632,336"/>
                </g>

                <line x1="540" y1="250" x2="620" y2="250" stroke="#e8b94c" strokeWidth="3" strokeDasharray="6 4" markerEnd="url(#arrA)"/>

                <rect x="500" y="80" width="220" height="32" fill="rgba(0,0,0,0.5)" rx="4"/>
                <text x="610" y="100" textAnchor="middle" fill="#e8b94c" fontSize="11" fontWeight="600" fontFamily="JetBrains Mono">ATELIER 1 · CONDUITE</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
