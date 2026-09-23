import { ArrowDown, ArrowUpRight, Check, Mail, MapPin, Phone } from 'lucide-react';
import { ProjectCarousel } from '@/components/project-carousel';

const expertise = ['Angular', 'TypeScript', 'RxJS avancé', 'HTML & CSS', 'Angular Material', 'Responsive design'];
const architecture = ['Standalone Components', 'Signals', 'Lazy Loading', 'REST API', 'CI/CD', 'Tests unitaires & E2E', 'Accessibilité RGAA'];
const personalProjects = [
  { number: '01', title: 'Ce portfolio', tag: 'React · TypeScript', description: 'Le site sur lequel vous êtes est l’une de mes réalisations personnelles. Je l’ai créé en React pour consolider mes bases sur cette technologie largement représentée sur le marché — une manière élégante de joindre l’utile à l’auto-démonstration.', images: ['/projet1.png'], imageAlt: 'Aperçu du portfolio React' },
  { number: '02', title: 'Mesure de température dans un poêle de masse', tag: 'Électronique · ESP32-WROOM · Serveur local · HTML · CSS', description: 'ce projet a été réalisé pour l\'association, la maison en paille. Un système équipé de 5 sondes Thermocouple K, suit les températures dans un poêle de masse pouvant aller jusqu\'à 1200 degrés. Une carte ESP32-WROOM héberge un serveur local et propose une interface avec un graphique consultable instantanément via nimporte quel device (PC/Android/IOS). Les données peuvent aussi être exportées au format CSV.', images: ['/projet2-01.jpeg', '/projet2-02.jpeg', '/projet2-03.png'], imageAlt: 'Aperçu du projet de mesure de température' },
];
const interests = [
  { title: 'Voile', image: '/voile.jpeg', description: 'Je pratique la voile, et plus particulièrement les régates. J’apprécie beaucoup la stratégie et l’esprit de camaraderie dans ce sport. Le muscadet est mon bateau de coeur. ' },
  { title: 'Électronique', image: '/electronique.jpeg', description: 'Comme vous avez pu le voir, je suis particulièrement attaché à l’électronique. J’adore automatiser les process et répondre à des problématiques concrètes.' },
  { title: 'Bricolage/Rénovation', image: '/bricolage.jpg', description: ' Le bricolage me suit depuis des années. Cela me permet de faire quelque chose de concret de mes mains et s’équilibre parfaitement avec le code.' },
  { title: 'Palet breton', image: '/palet%20breton.avif', description: 'Je pratique le palet breton sur planche de bois en club depuis maintenant un an. C’est un sport de ma région dont je suis très fier.' },
  { title: 'Disc-golf', image: '/disc-golf.webp', description: 'Je pratique le disc-golf en amateur sur Rennes. C’est un sport qui me permet d’évoluer en pleine nature.' },
];

const experiences = [
  {
    period: '2022 — 2025',
    role: 'Développeur Front-End Angular',
    company: 'Famileo · Saint-Malo',
    logo: '/Famileo-LOGO-GRANDS-USAGES.jpg',
    logoAlt: 'Logo Famileo',
    description: 'Conception de composants métiers complexes, modernisation continue de l’application et création d’une bibliothèque Angular mutualisée pour gagner en productivité et en maintenabilité.',
    highlights: ['Players vidéo, formulaires dynamiques et composants sur mesure', 'Migrations Angular et adoption des nouvelles pratiques du framework', 'Revues de code, tests unitaires et end-to-end', 'Internationalisation de l’application avec Poeditor','Mise en place de bonnes pratiques mutualisées à toute l’équipe front'],
  },
  {
    period: '2019 — 2022',
    role: 'Développeur Front-End Angular',
    company: 'OPEN · Rennes',
    logo: '/open_2_logo.jpeg',
    logoAlt: 'Logo OPEN',
    description: 'Développement et maintenance d’applications Angular, en collaboration étroite avec les équipes UX/UI pour livrer des interfaces performantes, responsives et accessibles.',
    highlights: ['Conception de composants Angular réutilisables', 'Mise en conformité avec le référentiel RGAA', 'Accompagnement des équipes sur Angular et RxJS','Conception et réalisation d\'une application de A à Z pour le client Orange.','Création d\'API côté back (JAVA/SPRING).'],
  },
  {
    period: '2015 — 2019',
    role: 'Diplôme d’ingénieur en informatique',
    company: 'ENSEA · Cergy (Paris)',
    logo: '/Logo-ENSEA-couleur-1-605x605.jpg',
    logoAlt: 'Logo ENSEA',
    description: 'Formation d’ingénieur généraliste avec une spécialisation en informatique, systèmes et développement logiciel.',
    highlights: ['Formation en informatique et systèmes', 'Projets de développement logiciel'],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Retour à l’accueil"><span className="brand-mark">PT</span><span className="brand-name">Pierre Travers</span></a>
        <nav aria-label="Navigation principale"><a href="#profil">Profil</a><a href="#parcours">Parcours</a><a href="#realisations">Réalisations</a><a href="#expertise">Expertise</a><a href="#ia">Mon rapport à l’IA</a></nav>
        <a className="header-contact" href="#contact">Me contacter <ArrowUpRight size={17} aria-hidden="true" /></a>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Développeur Front-End Angular</p>
          <h1>Je construis des interfaces<span> utiles, solides et accessibles.</span></h1>
          <div className="mobile-portrait"><div className="portrait-frame"><img src="/pierre-travers.jpeg" alt="Pierre Travers au bord de la mer" width="1063" height="1021" /></div><p className="portrait-caption">Basé à Guégon · Bretagne</p></div>
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

      <div className="tech-strip" aria-label="Technologies principales"><span>Angular</span><i /><span>TypeScript</span><i /><span>RxJS</span><i /><span>Architecture front-end</span><i /><span>React</span><i /><span>Accessibilité</span></div>

      <section className="profile-section" id="profil">
        <div className="section-label">01 · Profil</div>
        <div className="profile-heading"><p className="kicker">Une expertise technique, une approche humaine.</p><h2>Faire simple pour l’utilisateur, même quand la technique ne l’est pas.</h2></div>
        <div className="profile-body"><p>Spécialisé en Angular, TypeScript et RxJS, j’interviens de l’étude du besoin jusqu’à la livraison. J’aime transformer des problématiques métiers exigeantes en composants clairs, réutilisables et durables.</p><p>Je porte une attention particulière à la qualité du code, à la transmission des connaissances et à l’accessibilité. Mon objectif : aider les équipes à avancer plus vite, avec une base front-end qui reste saine dans le temps.</p></div>
      </section>

      <section className="experience-section" id="parcours">
        <div className="section-topline"><div className="section-label">02 · Parcours</div></div>
        <div className="experience-list">{experiences.map((experience, index) => (
          <article className="experience-card" key={experience.company}>
            <div className="experience-index">0{index + 1}</div><div className="experience-period"><span>{experience.period}</span><img className="company-logo" src={experience.logo} alt={experience.logoAlt} /></div>
            <div className="experience-main"><p className="company">{experience.company}</p><h3>{experience.role}</h3><p className="experience-description">{experience.description}</p></div>
            <ul>{experience.highlights.map((highlight) => <li key={highlight}><Check size={16} aria-hidden="true" />{highlight}</li>)}</ul>
          </article>
        ))}</div>
      </section>

      <section className="projects-section" id="realisations">
        <div className="section-topline"><div className="section-label">03 · Réalisations personnelles</div></div>
        <div className="projects-grid">
          <article className="projects-panel projects-panel-dark projects-panel-personal">
            <div className="personal-project-list">{personalProjects.map((project) => (
              <article className="personal-project" key={project.number}>
                <ProjectCarousel images={project.images} alt={project.imageAlt} />
                <div className="personal-project-content"><span className="personal-project-number">{project.number}</span><p className="personal-project-tag">{project.tag}</p><h3>{project.title}</h3><p>{project.description}</p></div>
              </article>
            ))}</div>
          </article>
        </div>
      </section>

      <section className="expertise-section" id="expertise">
        <div className="section-label light">04 · Expertise</div>
        <div className="expertise-grid">
          <div className="expertise-intro"><p className="kicker light">Mon terrain de jeu</p><h2>Des fondations techniques pensées pour durer.</h2><p>Architecture, composants, performance, qualité : je prends soin de l’ensemble de la chaîne qui transforme une idée en expérience fiable.</p></div>
          <div className="skills-column"><span className="skills-title">Technologies</span>{expertise.map((skill, index) => <div className="skill-row" key={skill}><span>{String(index + 1).padStart(2, '0')}</span>{skill}</div>)}</div>
          <div className="skills-column"><span className="skills-title">Architecture & qualité</span>{architecture.map((skill, index) => <div className="skill-row" key={skill}><span>{String(index + 1).padStart(2, '0')}</span>{skill}</div>)}</div>
        </div>
      </section>

      <section className="ai-section" id="ia">
        <div className="section-label">05 · Mon rapport à l’IA</div>
        <div className="ai-grid">
          <div className="ai-intro">
            <p className="kicker">Un outil, pas un remplaçant</p>
            <h2>Le monde a changé vite. Ma façon de travailler aussi.</h2>
          </div>
          <div className="ai-copy">
            <p>L’intelligence artificielle a profondément changé le quotidien des développeurs en quelques années. Elle ne m’a pas remplacé : elle m’aide à aller beaucoup plus vite sur les tâches répétitives ou fastidieuses, pour consacrer davantage de temps aux décisions, à la conception et à la qualité.</p>
            <p>J’utilise principalement ChatGPT, Claude Code et GitHub Copilot. Ces outils m’accompagnent pour explorer une piste, reformuler un besoin, générer une première base ou accélérer une recherche. Je les utilise aussi comme des garde-fous : une relecture supplémentaire, capable de repérer une incohérence, un cas limite ou un risque que l’on peut parfois laisser passer après plusieurs heures de travail.</p>
            <p>Ils restent des assistants. Je vérifie leurs propositions, je confronte leurs réponses au contexte du projet et je garde la responsabilité des choix techniques et du code livré. L’objectif n’est pas de déléguer la réflexion, mais de disposer d’un regard supplémentaire et de rendre le travail collectif plus rapide et plus pertinent.</p>
          </div>
        </div>
        <div className="ai-tools" aria-label="Outils d’intelligence artificielle utilisés"><span>ChatGPT</span><span>Claude Code</span><span>GitHub Copilot</span></div>
      </section>

      <section className="human-section">
        <div className="section-label">06 · Au-delà du code</div>
        <div className="bubble-list" aria-label="Centres d’intérêt">
          {interests.map((interest) => <div className="bubble-item" key={interest.title}><div className={`interest-bubble${interest.image ? ' has-image' : ''}`}>{interest.image ? <img src={interest.image} alt={`Illustration : ${interest.title}`} /> : <span>Photo à venir</span>}</div><p className="bubble-title">{interest.title}</p><p className="bubble-description">{interest.description}</p></div>)}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow light"><span /> Une idée, un besoin, un projet ?</p><h2>Construisons quelque chose ensemble.</h2>
        <div className="contact-details"><a href="tel:+33649234713"><Phone size={17} aria-hidden="true" />06 49 23 47 13</a><span><MapPin size={17} aria-hidden="true" />56120 Guégon</span><a href="mailto:pierretravers56@gmail.com"><Mail size={17} aria-hidden="true" />pierretravers56@gmail.com</a></div>
      </section>

      <footer><a className="brand" href="#accueil" aria-label="Retour à l’accueil"><span className="brand-mark inverse">PT</span></a><p>© 2026 Pierre Travers</p><a href="#accueil">Retour en haut <ArrowUpRight size={16} aria-hidden="true" /></a></footer>
    </main>
  );
}
