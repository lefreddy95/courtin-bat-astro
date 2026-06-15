export interface FaqItem {
  q: string;
  a: string;
}

/** FAQ générale affichée sur la page d'accueil (orientée SEO local). */
export const homeFaq: FaqItem[] = [
  {
    q: 'Dans quelles villes Courtin Bat intervient-il ?',
    a: 'Courtin Bat intervient dans tout le Vexin, le Val-d’Oise et le secteur de Cergy-Pontoise : Magny-en-Vexin, Marines, Vigny, Ableiges, Cergy, Pontoise, Osny, Auvers-sur-Oise et de nombreuses communes alentours.',
  },
  {
    q: 'Êtes-vous un plombier chauffagiste diplômé ?',
    a: 'Oui. Courtin Bat est dirigé par un plombier chauffagiste diplômé, formé dans un centre d’État spécialisé en plomberie, chauffage, climatisation et génie climatique.',
  },
  {
    q: 'Proposez-vous un devis avant intervention ?',
    a: 'Oui, un devis clair et transparent vous est proposé avant le début des travaux, afin que vous sachiez précisément à quoi vous attendre.',
  },
  {
    q: 'Faites-vous du dépannage en urgence ?',
    a: 'Selon les disponibilités, Courtin Bat s’organise pour intervenir dans les meilleurs délais en cas de fuite, de panne de chauffage ou de chauffe-eau.',
  },
  {
    q: 'Quels types de travaux réalisez-vous ?',
    a: 'Dépannage plomberie, recherche de fuite, installation et entretien de chauffage, pose et dépannage de chauffe-eau, rénovation de salle de bain et solutions de génie climatique.',
  },
  {
    q: 'Le chantier est-il laissé propre ?',
    a: 'Oui. Le soin et la propreté font partie de notre engagement : les zones de travail sont protégées et nettoyées en fin d’intervention.',
  },
];

/** Génère la FAQ locale d'une page ville. */
export function cityFaq(cityName: string): FaqItem[] {
  return [
    {
      q: `Intervenez-vous à ${cityName} ?`,
      a: `Oui, Courtin Bat intervient à ${cityName} ainsi que dans les communes environnantes pour vos travaux de plomberie et de chauffage.`,
    },
    {
      q: `Faites-vous du dépannage plomberie à ${cityName} ?`,
      a: `Bien sûr. Fuite, canalisation bouchée, robinetterie ou WC en panne : Courtin Bat assure le dépannage plomberie à ${cityName} avec un diagnostic clair et un travail soigné.`,
    },
    {
      q: `Installez-vous des chauffe-eau à ${cityName} ?`,
      a: `Oui. Installation, remplacement et dépannage de chauffe-eau et ballons d’eau chaude font partie de nos prestations à ${cityName}.`,
    },
    {
      q: `Intervenez-vous autour de ${cityName} ?`,
      a: `Courtin Bat couvre ${cityName} et l’ensemble du secteur du Vexin et du Val-d’Oise, ainsi que la région de Cergy-Pontoise.`,
    },
    {
      q: 'Peut-on demander un devis ?',
      a: 'Oui, un devis clair et gratuit vous est proposé avant toute intervention. Contactez Courtin Bat par téléphone ou via le formulaire de devis.',
    },
    {
      q: 'Êtes-vous plombier chauffagiste diplômé ?',
      a: 'Oui. Courtin Bat est dirigé par un plombier chauffagiste diplômé, formé en plomberie, chauffage et génie climatique dans un centre d’État spécialisé.',
    },
  ];
}
