export const profileData = {
  firstName: "Mohamed",
  lastName: "BEN IZZA",
  jobTitle: "Développeur Web Full-Stack",
  opportunity: "CDI (Présentiel: Béni Mellal, Casablanca / Remote)",
  location: "Béni Mellal, Maroc",
  email: "mohamed.benizza3@gmail.com",
  phone: "+212 764455643",
  linkedinUrl: "https://www.linkedin.com/in/mohamed-ben-izza/",
  githubUrl: "https://github.com/SimoBnz1",
  cvUrl: "/CV_Mohamed_BENIZZA.pdf",
  bio: "Développeur Web Full-Stack passionné par la création d'applications web modernes et performantes. Maîtrisant JavaScript, React.js, PHP, Laravel et MySQL, je développe des solutions complètes du front-end au back-end.",
  valueProposition: "Développement de solutions web robustes, scalables et centrées sur l'expérience utilisateur."
};

export const skillsData = [
  {
    category: "Front-End",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "Back-End & Base de données",
    skills: ["PHP (POO)", "Laravel", "MySQL", "Eloquent ORM", "REST API"]
  },
  {
    category: "Outils & Méthodologies",
    skills: ["Git", "GitHub", "Agile / Scrum", "Jira", "Trello", "UML"]
  },
  {
    category: "Design / UX & UI",
    skills: ["Figma", "Adobe Illustrator"]
  }
];

export const projectsData = [
  {
    id: "PRJ-001",
    name: "LinkUp",
    featured: true,
    tagline: "Réseau Social Professionnel",
    description: "Développement d'un réseau social professionnel permettant aux utilisateurs de créer des publications, interagir avec la communauté, gérer leurs profils et sécuriser les accès.",
    technologies: ["Laravel 12", "PHP", "MySQL", "Blade", "Tailwind CSS", "Eloquent ORM"],
    personalContribution: [
      "Conception et modélisation de la base de données relationnelle sous MySQL",
      "Développement de l'architecture Back-End avec Laravel 12 et Eloquent ORM",
      "Mise en place du système d'authentification et de gestion des droits d'accès",
      "Intégration d'une interface utilisateur dynamique et responsive avec Tailwind CSS"
    ],
    githubUrl: "https://github.com/SimoBnz1/LinkUp.git"
  },
  {
    id: "PRJ-002",
    name: "Sport-Quiz Master",
    featured: false,
    tagline: "Application Interactive de Quiz Sportif",
    description: "Application web interactive de quiz sportif consommant une API externe, avec gestion du score en temps réel, d'un chrono et de la progression de l'utilisateur.",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Fetch API"],
    personalContribution: [
      "Développement de l'interface Front-End réactive avec React.js",
      "Consommation et gestion des données dynamiques via Fetch API",
      "Implémentation du système de timer et de calcul de score en direct"
    ],
    githubUrl: "https://github.com/AITABBOUyoussef/SportQuiz-Master.git"
  },
  {
    id: "PRJ-003",
    name: "Creator-Hub",
    featured: false,
    tagline: "Plateforme de Gestion des Créateurs de Contenu",
    description: "Plateforme web permettant aux créateurs de publier leurs réalisations et de gérer des projets collaboratifs au sein d'un espace centralisé.",
    technologies: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS"],
    personalContribution: [
      "Implémentation du système CRUD pour la publication des réalisations créatives",
      "Création des vues Blade modulaires avec styles Tailwind CSS",
      "Gestion de la persistance des données et des relations complexes sous MySQL"
    ],
    githubUrl: "https://github.com/kaoutarouissa/CREATORHUB.git"
  },
  {
    id: "PRJ-004",
    name: "E-Attestation",
    featured: false,
    tagline: "Gestionnaire Automatisé d'Attestations de Travail",
    description: "Plateforme web développée pour l'ISTA NTIC Béni Mellal permettant la génération et la gestion automatisée des attestations de travail.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "HTML"],
    personalContribution: [
      "Développement du module de génération automatique des attestations",
      "Mise en place du back-office d'administration et de validation des demandes"
    ],
    githubUrl: null
  }
];