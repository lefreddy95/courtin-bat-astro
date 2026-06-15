/**
 * Données centrales de l'entreprise COURTIN BAT.
 * ⚠️  Les champs marqués "À COMPLÉTER" doivent être renseignés avant mise en production.
 */
export const site = {
  name: 'COURTIN BAT',
  legalName: 'COURTIN BAT',
  tagline: 'Artisan plombier chauffagiste dans le Vexin et le Val-d’Oise',
  description:
    'Courtin Bat, artisan plombier chauffagiste diplômé. Dépannage, installation, rénovation sanitaire et chauffage dans le Vexin, le Val-d’Oise et Cergy-Pontoise. Travail propre, durable et réalisé dans les règles de l’art.',

  // Coordonnées
  phone: '06 37 11 73 92',
  phoneHref: 'tel:+33637117392',
  email: 'contact@courtin-bat.fr',

  // Adresse — À COMPLÉTER (secteur indicatif)
  address: {
    street: 'Adresse exacte à compléter',
    locality: 'Vexin / Val-d’Oise',
    region: 'Île-de-France',
    postalCode: '95000',
    country: 'FR',
  },

  // Coordonnées GPS indicatives (centre du Vexin / Val-d'Oise) — À AFFINER
  geo: {
    latitude: 49.0833,
    longitude: 1.9667,
  },

  // Identifiants — À COMPLÉTER
  siret: 'À compléter',
  googleBusinessProfile: '', // URL fiche Google Business Profile — À COMPLÉTER

  // Horaires
  hours: [
    { days: 'Lundi au vendredi', time: '8h – 19h' },
    { days: 'Samedi', time: '9h – 18h' },
    { days: 'Dimanche', time: 'Urgences selon disponibilité' },
  ],

  // Format Schema.org openingHoursSpecification
  openingHoursSpec: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '19:00' },
    { days: ['Saturday'], opens: '09:00', closes: '18:00' },
  ],

  // Zone d'intervention principale
  areaServed: ['Vexin', 'Val-d’Oise', 'Cergy-Pontoise', 'Vexin français', 'Vexin parisien'],

  // Réseaux sociaux — À COMPLÉTER si disponibles
  social: {
    facebook: '',
    instagram: '',
  },
} as const;

export const SITE_URL = (import.meta.env.SITE as string) || 'https://www.courtin-bat.fr';

export type SiteData = typeof site;
