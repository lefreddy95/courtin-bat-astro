export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  /** Nom court pour navigation / cartes */
  name: string;
  /** Titre H1 de la page */
  h1: string;
  /** Title SEO (balise <title>) */
  title: string;
  /** Meta description unique */
  description: string;
  /** Accroche affichée en intro de carte */
  excerpt: string;
  /** Icône SVG (clé de l'icône) */
  icon: string;
  /** Paragraphe(s) d'introduction de la page service */
  intro: string;
  /** Bénéfices client */
  benefits: string[];
  /** Prestations détaillées associées */
  details: string[];
  /** Services liés (slugs) */
  related: string[];
  /** FAQ spécifique au service */
  faq: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: 'depannage-plomberie',
    name: 'Dépannage plomberie',
    h1: 'Dépannage plomberie dans le Vexin et le Val-d’Oise',
    title: 'Dépannage plomberie Vexin & Val-d’Oise | Courtin Bat',
    description:
      'Fuite, canalisation bouchée, robinetterie ou WC en panne ? Courtin Bat assure votre dépannage plomberie dans le Vexin et le Val-d’Oise, avec un diagnostic clair et un travail soigné.',
    excerpt: 'Fuites, engorgements, robinetterie, WC : une intervention rapide et propre.',
    icon: 'wrench',
    intro:
      'Une fuite d’eau, une canalisation bouchée ou un robinet hors service peuvent vite devenir un problème. Courtin Bat intervient pour diagnostiquer la panne, vous expliquer clairement la situation et réaliser une réparation durable, dans le respect des règles de l’art.',
    benefits: [
      'Diagnostic clair et devis transparent avant intervention',
      'Réparation durable plutôt que rustine provisoire',
      'Chantier protégé et nettoyé en fin d’intervention',
      'Conseils d’entretien pour éviter la récidive',
    ],
    details: [
      'Recherche et réparation de fuites',
      'Débouchage de canalisations',
      'Réparation et remplacement de robinetterie',
      'Réparation de WC, chasses d’eau et mécanismes',
      'Remplacement de joints, flexibles et raccords',
      'Mise en sécurité d’une installation défectueuse',
    ],
    related: ['recherche-de-fuite', 'chauffe-eau', 'renovation-salle-de-bain'],
    faq: [
      {
        q: 'Intervenez-vous rapidement en cas de fuite ?',
        a: 'Oui. Selon les disponibilités, Courtin Bat s’organise pour intervenir dans les meilleurs délais dans le Vexin et le Val-d’Oise afin de limiter les dégâts.',
      },
      {
        q: 'Donnez-vous un prix avant de commencer ?',
        a: 'Toujours. Après diagnostic, vous recevez une estimation claire avant le début des travaux, sans mauvaise surprise.',
      },
      {
        q: 'Réparez-vous tous types de robinetterie ?',
        a: 'Oui, robinets de cuisine, de salle de bain, mitigeurs thermostatiques et raccordements sont pris en charge.',
      },
    ],
  },
  {
    slug: 'chauffage',
    name: 'Chauffage',
    h1: 'Installation et entretien de chauffage dans le Val-d’Oise',
    title: 'Chauffagiste Vexin & Val-d’Oise — installation & entretien | Courtin Bat',
    description:
      'Installation, remplacement et entretien de chauffage dans le Vexin et le Val-d’Oise. Courtin Bat, chauffagiste diplômé, vous accompagne pour un confort durable et économe.',
    excerpt: 'Installation, remplacement et entretien de votre système de chauffage.',
    icon: 'flame',
    intro:
      'Le chauffage est au cœur du confort de votre logement. Courtin Bat, chauffagiste formé au génie climatique, vous conseille et installe des solutions fiables, performantes et adaptées à votre habitation.',
    benefits: [
      'Conseil sur la solution la plus adaptée à votre logement',
      'Installations conformes et sécurisées',
      'Optimisation de la consommation et du confort',
      'Entretien régulier pour prolonger la durée de vie',
    ],
    details: [
      'Installation de chaudières et systèmes de chauffage',
      'Remplacement d’équipements vétustes',
      'Pose et remplacement de radiateurs',
      'Entretien et réglage des installations',
      'Désembouage de circuit de chauffage',
      'Mise en conformité et sécurisation',
    ],
    related: ['chauffe-eau', 'climatisation-genie-climatique', 'depannage-plomberie'],
    faq: [
      {
        q: 'Assurez-vous l’entretien annuel du chauffage ?',
        a: 'Oui. L’entretien régulier garantit la sécurité, prolonge la durée de vie de l’installation et optimise votre consommation.',
      },
      {
        q: 'Pouvez-vous remplacer une vieille chaudière ?',
        a: 'Absolument. Courtin Bat vous conseille sur l’équipement le plus adapté puis réalise le remplacement dans les règles de l’art.',
      },
    ],
  },
  {
    slug: 'chauffe-eau',
    name: 'Chauffe-eau',
    h1: 'Installation et dépannage de chauffe-eau dans le Val-d’Oise',
    title: 'Chauffe-eau Vexin & Val-d’Oise — pose & dépannage | Courtin Bat',
    description:
      'Plus d’eau chaude ? Courtin Bat installe, remplace et dépanne votre chauffe-eau dans le Vexin et le Val-d’Oise. Conseil, pose soignée et mise en conformité.',
    excerpt: 'Pose, remplacement et dépannage de chauffe-eau et ballons d’eau chaude.',
    icon: 'water-heater',
    intro:
      'Un chauffe-eau qui faiblit ou tombe en panne perturbe tout le quotidien. Courtin Bat vous accompagne pour choisir, installer ou réparer votre ballon d’eau chaude, avec une pose soignée et conforme.',
    benefits: [
      'Conseil sur la capacité et le modèle adaptés à votre foyer',
      'Installation conforme et raccordements soignés',
      'Dépannage et diagnostic des pannes courantes',
      'Détartrage et entretien pour prolonger la durée de vie',
    ],
    details: [
      'Installation de chauffe-eau électriques',
      'Remplacement de ballon d’eau chaude',
      'Dépannage (plus d’eau chaude, fuite, disjonction)',
      'Détartrage et remplacement de résistance / anode',
      'Mise en conformité du raccordement',
    ],
    related: ['depannage-plomberie', 'chauffage', 'recherche-de-fuite'],
    faq: [
      {
        q: 'Mon chauffe-eau ne chauffe plus, pouvez-vous intervenir ?',
        a: 'Oui. Courtin Bat diagnostique la panne (thermostat, résistance, raccordement) et vous propose la réparation ou le remplacement le plus pertinent.',
      },
      {
        q: 'Quelle capacité de chauffe-eau choisir ?',
        a: 'Cela dépend du nombre de personnes et de vos habitudes. Nous vous conseillons le volume adapté pour éviter le gaspillage comme le manque d’eau chaude.',
      },
    ],
  },
  {
    slug: 'recherche-de-fuite',
    name: 'Recherche de fuite',
    h1: 'Recherche de fuite dans le Vexin et le Val-d’Oise',
    title: 'Recherche de fuite Vexin & Val-d’Oise | Courtin Bat',
    description:
      'Traces d’humidité, surconsommation d’eau ? Courtin Bat réalise la recherche de fuite dans le Vexin et le Val-d’Oise avec des méthodes non destructives et un rapport clair.',
    excerpt: 'Localisation précise des fuites avant réparation, sans tout casser.',
    icon: 'droplet-search',
    intro:
      'Une fuite invisible peut causer d’importants dégâts et faire grimper votre facture d’eau. Courtin Bat localise précisément l’origine de la fuite afin d’intervenir au bon endroit, en limitant au maximum les dégâts.',
    benefits: [
      'Localisation précise pour éviter de casser inutilement',
      'Limitation des dégâts des eaux et de la surconsommation',
      'Rapport clair pour votre assurance si besoin',
      'Réparation réalisée dans la foulée si possible',
    ],
    details: [
      'Recherche de fuite sur canalisations encastrées',
      'Détection sur réseau d’eau et de chauffage',
      'Identification des fuites en sous-sol et vide sanitaire',
      'Réparation après localisation',
    ],
    related: ['depannage-plomberie', 'chauffe-eau', 'chauffage'],
    faq: [
      {
        q: 'Faut-il tout casser pour trouver une fuite ?',
        a: 'Non. L’objectif est justement de localiser précisément la fuite afin d’intervenir de façon ciblée et de limiter les travaux.',
      },
      {
        q: 'Fournissez-vous un document pour l’assurance ?',
        a: 'Oui, un compte rendu clair de l’intervention peut être remis pour appuyer votre déclaration.',
      },
    ],
  },
  {
    slug: 'renovation-salle-de-bain',
    name: 'Rénovation salle de bain',
    h1: 'Rénovation de salle de bain dans le Vexin et le Val-d’Oise',
    title: 'Rénovation salle de bain Vexin & Val-d’Oise | Courtin Bat',
    description:
      'Courtin Bat rénove votre salle de bain dans le Vexin et le Val-d’Oise : douche, baignoire, sanitaires, robinetterie. Un travail propre, durable et coordonné du début à la fin.',
    excerpt: 'Douche, baignoire, sanitaires : une rénovation soignée du début à la fin.',
    icon: 'shower',
    intro:
      'La salle de bain doit allier confort, esthétique et fiabilité. Courtin Bat vous accompagne sur la partie plomberie et sanitaire de votre rénovation, avec une exécution soignée du diagnostic à la finition.',
    benefits: [
      'Accompagnement du projet, du conseil à la finition',
      'Travail propre, ordonné et respectueux de votre logement',
      'Installations durables et conformes',
      'Coordination des différentes étapes de plomberie',
    ],
    details: [
      'Remplacement de baignoire par une douche',
      'Installation de douche à l’italienne',
      'Pose de sanitaires (WC, lavabo, meuble vasque)',
      'Robinetterie et raccordements',
      'Reprise et création de réseaux d’alimentation et d’évacuation',
    ],
    related: ['depannage-plomberie', 'chauffe-eau', 'recherche-de-fuite'],
    faq: [
      {
        q: 'Remplacez-vous une baignoire par une douche ?',
        a: 'Oui, c’est une demande fréquente. Courtin Bat réalise la dépose, les reprises de réseaux et la pose de la nouvelle douche.',
      },
      {
        q: 'Gérez-vous toute la rénovation ?',
        a: 'Courtin Bat prend en charge la partie plomberie et sanitaire avec soin. Pour les autres lots, nous vous orientons vers des artisans de confiance si nécessaire.',
      },
    ],
  },
  {
    slug: 'climatisation-genie-climatique',
    name: 'Climatisation & génie climatique',
    h1: 'Climatisation et génie climatique dans le Val-d’Oise',
    title: 'Climatisation & génie climatique Val-d’Oise | Courtin Bat',
    description:
      'Courtin Bat met son expertise en génie climatique au service de votre confort dans le Vexin et le Val-d’Oise : conseil, installation et solutions adaptées à votre logement.',
    excerpt: 'Confort thermique et solutions climatiques étudiées pour votre logement.',
    icon: 'climate',
    intro:
      'Formé au génie climatique, Courtin Bat vous conseille sur les solutions de confort thermique adaptées à votre habitation. Une approche sérieuse, soucieuse de la performance et de la conformité des installations.',
    benefits: [
      'Conseil basé sur une vraie formation en génie climatique',
      'Solutions dimensionnées pour votre logement',
      'Installations soignées et conformes',
      'Approche durable et économe en énergie',
    ],
    details: [
      'Conseil et étude de votre projet de confort thermique',
      'Solutions de climatisation adaptées',
      'Accompagnement sur la performance énergétique',
      'Entretien des équipements',
    ],
    related: ['chauffage', 'chauffe-eau', 'depannage-plomberie'],
    faq: [
      {
        q: 'Êtes-vous formé au génie climatique ?',
        a: 'Oui. Courtin Bat a suivi une formation approfondie en chauffage et génie climatique dans un centre d’État spécialisé.',
      },
      {
        q: 'Pouvez-vous me conseiller avant tout achat ?',
        a: 'Bien sûr. Un bon conseil en amont évite les erreurs de dimensionnement et garantit confort et économies.',
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
