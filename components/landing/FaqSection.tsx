'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Marco remplace-t-il un vrai éducateur ?',
    a: "Non. Marco est un outil de préparation qui te fait gagner du temps et te propose des séances et conseils. Il ne remplace pas la relation directe avec tes joueurs sur le terrain. C'est un éducateur référent virtuel, pas un coach de remplacement.",
  },
  {
    q: 'Marco respecte-t-il les programmes FFF ?',
    a: "Oui. Marco a été nourri avec les contenus officiels FFF par catégorie d'âge (U7 à U13), les principes de l'École Française de Football, et les meilleures pratiques pédagogiques. Tout est aligné avec ce que tu apprends en formation CFF.",
  },
  {
    q: 'Je suis bénévole, est-ce que c\'est pour moi ?',
    a: "Marco a été conçu en pensant à toi en priorité — parents bénévoles, éducateurs débutants, papa coach du mercredi. Pas besoin de diplôme, pas besoin de connaissances techniques. Tu écris, Marco te répond. Plan Starter gratuit pour démarrer.",
  },
  {
    q: 'Mon club peut-il payer pour ses éducateurs ?',
    a: "On travaille sur un plan Club qui permettra aux écoles de foot d'équiper tous leurs éducateurs. Si ça t'intéresse, indique-le à l'inscription beta — on te recontactera en priorité.",
  },
  {
    q: 'Mes données sont-elles protégées ?',
    a: 'Oui, hébergement européen (Supabase EU), aucune revente à des tiers. Tu peux supprimer ton compte à tout moment.',
  },
  {
    q: 'Et pour le foot à 11 / les séniors ?',
    a: "Marco est pensé pour le football animation (U7-U13). Pour le foot à 11, les séniors et le semi-pro, on a une suite complète qui s'appelle MonStaff (monstaff.app) — avec Marco tactique, prépa physique, mental, vidéo, et toute la gestion d'équipe.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq">
      <div className="s-in">
        <div className="s-hd rv">
          <div className="s-badge">// Questions</div>
          <h2 className="s-title">On répond à <span className="or">tout</span>.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
              <div className="faq-q" onClick={() => toggle(i)}>
                {faq.q}
                <span className="faq-ic">+</span>
              </div>
              <div className="faq-a">
                <div className="faq-a-in">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
