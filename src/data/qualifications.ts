/**
 * Données de la page Diplômes & Qualifications.
 * ⚠️ Dates et intitulés à ajuster selon le parcours réel de l'artisan.
 */

export interface TimelineStep {
  year: string;
  title: string;
  body: string;
}

export const timeline: TimelineStep[] = [
  {
    year: 'Formation',
    title: 'Apprentissage en centre d’État spécialisé',
    body: 'Formation professionnelle en plomberie, chauffage, climatisation et génie climatique au sein d’un centre de formation d’État reconnu.',
  },
  {
    year: 'Diplômes',
    title: 'Obtention des diplômes du métier',
    body: 'Validation des diplômes requis pour exercer la plomberie et le chauffage, gage de sérieux et de compétence.',
  },
  {
    year: 'Expérience terrain',
    title: 'Interventions et perfectionnement',
    body: 'Mise en pratique sur le terrain : dépannages, installations et rénovations, dans le respect des règles de l’art.',
  },
  {
    year: 'Aujourd’hui',
    title: 'Artisan professionnel à votre service',
    body: 'Courtin Bat met son savoir-faire au service des particuliers du Vexin, du Val-d’Oise et de Cergy-Pontoise.',
  },
];

export interface DiplomaCard {
  icon: string;
  title: string;
  body: string;
}

export const diplomas: DiplomaCard[] = [
  {
    icon: 'graduation',
    title: 'Formation professionnelle reconnue',
    body: 'Un cursus structuré en centre d’État, garantissant des bases techniques solides et conformes.',
  },
  {
    icon: 'award',
    title: 'Diplômes requis pour le métier',
    body: 'Les qualifications nécessaires pour exercer la plomberie et le chauffage en toute légitimité.',
  },
  {
    icon: 'flame',
    title: 'Spécialisation chauffage',
    body: 'Un apprentissage approfondi du chauffage : chaudières, radiateurs, réseaux et réglages.',
  },
  {
    icon: 'climate',
    title: 'Génie climatique',
    body: 'Des compétences en génie climatique pour des solutions de confort thermique maîtrisées.',
  },
  {
    icon: 'wrench',
    title: 'Compétences en plomberie',
    body: 'Maîtrise des réseaux d’alimentation et d’évacuation, sanitaires et robinetterie.',
  },
  {
    icon: 'shield',
    title: 'Sécurité & conformité',
    body: 'Des installations sécurisées et conformes, pensées pour durer dans le temps.',
  },
];

export interface ReassuranceBlock {
  icon: string;
  title: string;
  body: string;
}

export const reassurance: ReassuranceBlock[] = [
  {
    icon: 'check',
    title: 'Un gage de sécurité',
    body: 'Faire appel à un artisan formé, c’est s’assurer d’installations conformes qui protègent votre logement.',
  },
  {
    icon: 'sparkle',
    title: 'Un gage de qualité',
    body: 'La formation et l’expérience se ressentent dans le soin apporté à chaque détail de l’intervention.',
  },
  {
    icon: 'shield',
    title: 'Un gage de sérénité',
    body: 'Un travail durable, une approche transparente : vous avancez l’esprit tranquille.',
  },
];
