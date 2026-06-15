export interface Review {
  name: string;
  city: string;
  rating: number;
  text: string;
  date?: string;
}

/**
 * Avis clients — ⚠️ exemples à remplacer par de vrais avis (Google Business Profile)
 * avant la mise en production, pour rester conforme et crédible.
 */
export const reviews: Review[] = [
  {
    name: 'Sandrine L.',
    city: 'Magny-en-Vexin',
    rating: 5,
    date: '2025-09-12',
    text: 'Intervention rapide pour une fuite sous l’évier. Travail propre, explications claires et tarif annoncé respecté. Je recommande vivement.',
  },
  {
    name: 'Thomas R.',
    city: 'Cergy',
    rating: 5,
    date: '2025-07-03',
    text: 'Remplacement de notre chauffe-eau réalisé dans la journée. Artisan sérieux, ponctuel et de bon conseil sur le modèle adapté.',
  },
  {
    name: 'Nadia B.',
    city: 'Pontoise',
    rating: 5,
    date: '2025-05-21',
    text: 'Rénovation de notre salle de bain : un suivi soigné du début à la fin. Le résultat est impeccable et le chantier est resté propre.',
  },
  {
    name: 'Julien M.',
    city: 'Marines',
    rating: 5,
    date: '2025-03-18',
    text: 'Recherche de fuite efficace, sans tout casser. On a enfin identifié l’origine du problème. Très professionnel.',
  },
  {
    name: 'Claire D.',
    city: 'Vigny',
    rating: 5,
    date: '2025-02-09',
    text: 'Entretien de chaudière nickel et conseils utiles pour réduire notre consommation. Un artisan de confiance dans le Vexin.',
  },
  {
    name: 'Patrick V.',
    city: 'Auvers-sur-Oise',
    rating: 5,
    date: '2024-12-14',
    text: 'Dépannage un samedi pour un WC bouché. Réactif, aimable et efficace. Exactement ce qu’on attend d’un bon plombier.',
  },
];

export const aggregateRating = {
  value: 5,
  count: reviews.length,
};
