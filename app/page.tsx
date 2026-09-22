import { ArrowDown, ArrowUpRight, Check, Mail, MapPin, Phone } from 'lucide-react';

const expertise = ['Angular', 'TypeScript', 'RxJS avancé', 'HTML & CSS', 'Angular Material', 'Responsive design'];
const architecture = ['Standalone Components', 'Signals', 'Lazy Loading', 'REST API', 'CI/CD', 'Tests unitaires & E2E', 'Accessibilité RGAA'];

const experiences = [
  {
    period: '2022 — 2025',
    role: 'Développeur Front-End Angular',
    company: 'Famileo · Saint-Malo',
    description: 'Conception de composants métiers complexes, modernisation continue de l’application et création d’une bibliothèque Angular mutualisée pour gagner en productivité et en maintenabilité.',
    highlights: ['Players vidéo, formulaires dynamiques et composants sur mesure', 'Migrations Angular et adoption des nouvelles pratiques du framework', 'Revues de code, tests unitaires et end-to-end', 'Internationalisation de l’application avec Poeditor','Mise en place de bonnes pratiques mutualisées à toute l’équipe front'],
  },
  {
    period: '2019 — 2022',
    role: 'Développeur Front-End Angular',
    company: 'OPEN · Rennes',
    description: 'Développement et maintenance d’applications Angular, en collaboration étroite avec les équipes UX/UI pour livrer des interfaces performantes, responsives et accessibles.',
    highlights: ['Conception de composants Angular réutilisables', 'Mise en conformité avec le référentiel RGAA', 'Accompagnement des équipes sur Angular et RxJS','Conception et réalisation d\'une application de A à Z pour le client Orange.','Création d\'API côté back (JAVA/SPRING).'],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Retour à l’accueil"><span className="brand-mark">PT</span><span className="brand-name">Pierre Travers</span></a>
        <nav aria-label="Navigation principale"><a href="#profil">Profil</a><a href="#parcours">Parcours</a><a href="#expertise">Expertise</a></nav>
        <a className="header-contact" href="mailto:pierretravers56@gmail.com">Me contacter <ArrowUpRight size={17} aria-hidden="true" /></a>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Développeur Front-End Angular</p>
          <h1>Je construis des interfaces<span> utiles, solides et accessibles.</span></h1>
          <p className="hero-intro">Je suis Pierre Travers, développeur front-end avec 6 ans d’expérience. J’imagine et réalise des applications Angular complexes, performantes et agréables à utiliser tout en gardant de solides connaissances en back-end.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#parcours">Découvrir mon parcours <ArrowDown size={18} aria-hidden="true" /></a>
            <a className="text-link" href="mailto:pierretravers56@gmail.com">Échanger sur un projet <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
          <div className="hero-meta" aria-label="Informations clés"><div><strong>6 ans</strong><span>d’expérience</span></div><div><strong>C1</strong><span>anglais courant</span></div><div><strong>RGAA</strong><span>accessibilité</span></div></div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame"><img src="/pierre-travers.jpeg" alt="Pierre Travers au bord de la mer" width="1063" height="1021" /></div>
          <p className="portrait-caption">Basé à Guégon · Bretagne</p>
        </div>
      </section>

      <div className="tech-strip" aria-label="Technologies principales"><span>Angular</span><i /><span>TypeScript</span><i /><span>RxJS</span><i /><span>Architecture front-end</span><i /><span>Accessibilité</span></div>

      <section className="profile-section" id="profil">
        <div className="section-label">01 · Profil</div>
        <div className="profile-heading"><p className="kicker">Une expertise technique, une approche humaine.</p><h2>Faire simple pour l’utilisateur, même quand la technique ne l’est pas.</h2></div>
        <div className="profile-body"><p>Spécialisé en Angular, TypeScript et RxJS, j’interviens de l’étude du besoin jusqu’à la livraison. J’aime transformer des problématiques métiers exigeantes en composants clairs, réutilisables et durables.</p><p>Je porte une attention particulière à la qualité du code, à la transmission des connaissances et à l’accessibilité. Mon objectif : aider les équipes à avancer plus vite, avec une base front-end qui reste saine dans le temps.</p></div>
      </section>

      <section className="experience-section" id="parcours">
        <div className="section-topline"><div className="section-label">02 · Parcours</div></div>
        <div className="experience-list">{experiences.map((experience, index) => (
          <article className="experience-card" key={experience.company}>
            <div className="experience-index">0{index + 1}</div><div className="experience-period">{experience.period}</div>
            <div className="experience-main"><p className="company">{experience.company}</p><h3>{experience.role}</h3><p className="experience-description">{experience.description}</p></div>
            <ul>{experience.highlights.map((highlight) => <li key={highlight}><Check size={16} aria-hidden="true" />{highlight}</li>)}</ul>
          </article>
        ))}</div>
      </section>

      <section className="expertise-section" id="expertise">
        <div className="section-label light">03 · Expertise</div>
        <div className="expertise-grid">
          <div className="expertise-intro"><p className="kicker light">Mon terrain de jeu</p><h2>Des fondations techniques pensées pour durer.</h2><p>Architecture, composants, performance, qualité : je prends soin de l’ensemble de la chaîne qui transforme une idée en expérience fiable.</p></div>
          <div className="skills-column"><span className="skills-title">Technologies</span>{expertise.map((skill, index) => <div className="skill-row" key={skill}><span>{String(index + 1).padStart(2, '0')}</span>{skill}</div>)}</div>
          <div className="skills-column"><span className="skills-title">Architecture & qualité</span>{architecture.map((skill, index) => <div className="skill-row" key={skill}><span>{String(index + 1).padStart(2, '0')}</span>{skill}</div>)}</div>
        </div>
      </section>

      <section className="human-section">
        <div className="human-copy"><div className="section-label">04 · Au-delà du code</div><h2>Curieux par nature,<br />engagé dans le collectif.</h2><p>Communication, écoute et transmission font partie de ma manière de travailler. En dehors du code, je rénove du bâti ancien, parcours les sentiers, joue au disc-golf et voyage dès que l’occasion se présente.</p></div>
        <div className="education-card"><span>Formation</span><strong>Diplôme d’ingénieur<br />en informatique</strong><p>ENSEA · Cergy (Paris)</p><small>2015 — 2019</small></div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow light"><span /> Une idée, un besoin, un projet ?</p><h2>Construisons quelque chose<br />de solide ensemble.</h2>
        <a className="contact-email" href="mailto:pierretravers56@gmail.com">pierretravers56@gmail.com <ArrowUpRight aria-hidden="true" /></a>
        <div className="contact-details"><a href="tel:+33649234713"><Phone size={17} aria-hidden="true" />06 49 23 47 13</a><span><MapPin size={17} aria-hidden="true" />56120 Guégon</span><a href="mailto:pierretravers56@gmail.com"><Mail size={17} aria-hidden="true" />Email</a></div>
      </section>

      <footer><a className="brand" href="#accueil" aria-label="Retour à l’accueil"><span className="brand-mark inverse">PT</span></a><p>© 2026 Pierre Travers</p><a href="#accueil">Retour en haut <ArrowUpRight size={16} aria-hidden="true" /></a></footer>
    </main>
  );
}
