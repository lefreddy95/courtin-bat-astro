/**
 * Villes desservies par COURTIN BAT (Vexin, Val-d'Oise, Cergy-Pontoise et alentours).
 *
 * Les champs SEO (title, description, intro) sont générés automatiquement à partir
 * d'un gabarit afin de rester maintenables sur l'ensemble des communes, tout en
 * autorisant un override manuel pour les villes prioritaires.
 */

export interface City {
  slug: string;
  name: string;
  /** Secteur géographique / département */
  secteur: string;
  title: string;
  description: string;
  intro: string;
  /** Villes proches (slugs) pour le maillage interne */
  nearby: string[];
  /** Services mis en avant (slugs de services.ts) */
  featuredServices: string[];
}

interface CitySeed {
  name: string;
  secteur?: string;
  nearby?: string[]; // noms (pas slugs) — convertis automatiquement
}

const DEFAULT_SECTEUR = 'Vexin / Val-d’Oise';
const DEFAULT_SERVICES = ['depannage-plomberie', 'chauffage', 'chauffe-eau', 'recherche-de-fuite'];

/** Normalise un nom de ville en slug URL-safe. */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // accents
    .replace(/['’]/g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Liste brute des communes. L'ordre détermine le voisinage par défaut. */
const SEEDS: CitySeed[] = [
  { name: 'Ableiges' },
  { name: 'Vigny' },
  { name: 'Marines' },
  { name: 'Magny-en-Vexin' },
  { name: 'Cergy', secteur: 'Cergy-Pontoise / Val-d’Oise' },
  { name: 'Pontoise', secteur: 'Cergy-Pontoise / Val-d’Oise' },
  { name: 'Cergy-Pontoise', secteur: 'Val-d’Oise' },
  { name: 'Osny', secteur: 'Cergy-Pontoise / Val-d’Oise' },
  { name: 'Ennery' },
  { name: 'Boissy-l’Aillerie' },
  { name: 'Puiseux-Pontoise' },
  { name: 'Courdimanche', secteur: 'Cergy-Pontoise / Val-d’Oise' },
  { name: 'Menucourt' },
  { name: 'Sagy' },
  { name: 'Us' },
  { name: 'Le Perchay' },
  { name: 'Gouzangrez' },
  { name: 'Commeny' },
  { name: 'Théméricourt' },
  { name: 'Avernes' },
  { name: 'Longuesse' },
  { name: 'Frémainville' },
  { name: 'Seraincourt' },
  { name: 'Frémécourt' },
  { name: 'Brignancourt' },
  { name: 'Grisy-les-Plâtres' },
  { name: 'Épiais-Rhus' },
  { name: 'Theuville' },
  { name: 'Haravilliers' },
  { name: 'Chars' },
  { name: 'Nucourt' },
  { name: 'Cléry-en-Vexin' },
  { name: 'Banthelu' },
  { name: 'Wy-dit-Joli-Village' },
  { name: 'Arthies' },
  { name: 'Maudétour-en-Vexin' },
  { name: 'Genainville' },
  { name: 'Omerville' },
  { name: 'Villers-en-Arthies' },
  { name: 'Vétheuil' },
  { name: 'La Roche-Guyon' },
  { name: 'Haute-Isle' },
  { name: 'Saint-Clair-sur-Epte' },
  { name: 'Bray-et-Lû' },
  { name: 'Buhy' },
  { name: 'Montreuil-sur-Epte' },
  { name: 'Charmont' },
  { name: 'Hodent' },
  { name: 'Aincourt' },
  { name: 'Amenucourt' },
  { name: 'Chaussy' },
  { name: 'Saint-Gervais' },
  { name: 'La Chapelle-en-Vexin' },
  { name: 'Montgeroult' },
  { name: 'Courcelles-sur-Viosne' },
  { name: 'Livilliers' },
  { name: 'Hérouville-en-Vexin' },
  { name: 'Auvers-sur-Oise', secteur: 'Val-d’Oise' },
  { name: 'Méry-sur-Oise', secteur: 'Val-d’Oise' },
  { name: 'Frépillon', secteur: 'Val-d’Oise' },
  { name: 'Saint-Ouen-l’Aumône', secteur: 'Cergy-Pontoise / Val-d’Oise' },
  { name: 'Éragny', secteur: 'Cergy-Pontoise / Val-d’Oise' },
  { name: 'Jouy-le-Moutier', secteur: 'Cergy-Pontoise / Val-d’Oise' },
  { name: 'Neuville-sur-Oise', secteur: 'Cergy-Pontoise / Val-d’Oise' },
  { name: 'Vauréal', secteur: 'Cergy-Pontoise / Val-d’Oise' },
  { name: 'Maurecourt', secteur: 'Val-d’Oise / Yvelines' },
  { name: 'Andrésy', secteur: 'Yvelines' },
  { name: 'Conflans-Sainte-Honorine', secteur: 'Yvelines' },
  { name: 'Pierrelaye', secteur: 'Val-d’Oise' },
  { name: 'Herblay-sur-Seine', secteur: 'Val-d’Oise' },
  { name: 'Taverny', secteur: 'Val-d’Oise' },
  { name: 'Beauchamp', secteur: 'Val-d’Oise' },
  { name: 'Bessancourt', secteur: 'Val-d’Oise' },
  { name: 'Montigny-lès-Cormeilles', secteur: 'Val-d’Oise' },
  { name: 'Franconville', secteur: 'Val-d’Oise' },
  { name: 'Sannois', secteur: 'Val-d’Oise' },
  { name: 'L’Isle-Adam', secteur: 'Val-d’Oise' },
  { name: 'Parmain', secteur: 'Val-d’Oise' },
  { name: 'Valmondois', secteur: 'Val-d’Oise' },
  { name: 'Butry-sur-Oise', secteur: 'Val-d’Oise' },
  { name: 'Champagne-sur-Oise', secteur: 'Val-d’Oise' },
  { name: 'Persan', secteur: 'Val-d’Oise' },
  { name: 'Beaumont-sur-Oise', secteur: 'Val-d’Oise' },
  { name: 'Nesles-la-Vallée', secteur: 'Val-d’Oise' },
  { name: 'Labbeville' },
  { name: 'Vallangoujard' },
  { name: 'Arronville' },
  { name: 'Frouville' },
  { name: 'Hédouville' },
  { name: 'Menouville' },
  { name: 'Ronquerolles' },
  { name: 'Amblainville', secteur: 'Oise (60)' },
  { name: 'Méru', secteur: 'Oise (60)' },
  { name: 'Chambly', secteur: 'Oise (60)' },
  { name: 'Gisors', secteur: 'Eure (27) / Vexin' },
  { name: 'Trie-Château', secteur: 'Oise (60) / Vexin' },
  { name: 'Chaumont-en-Vexin', secteur: 'Oise (60) / Vexin' },
  { name: 'Limay', secteur: 'Yvelines' },
  { name: 'Mantes-la-Jolie', secteur: 'Yvelines' },
  { name: 'Meulan-en-Yvelines', secteur: 'Yvelines' },
  { name: 'Les Mureaux', secteur: 'Yvelines' },
];

const NAME_TO_SLUG = new Map<string, string>(SEEDS.map((s) => [s.name, slugify(s.name)]));

function buildIntro(name: string): string {
  return `Vous recherchez un plombier chauffagiste à ${name} ou dans les environs ? Courtin Bat accompagne les particuliers pour les dépannages, installations et rénovations avec un travail propre, durable et conforme aux règles de l’art.`;
}

/** Détermine les villes proches : explicites si fournies, sinon voisins de la liste. */
function buildNearby(index: number, seed: CitySeed): string[] {
  if (seed.nearby && seed.nearby.length) {
    return seed.nearby.map((n) => NAME_TO_SLUG.get(n) || slugify(n));
  }
  const result: string[] = [];
  const offsets = [-2, -1, 1, 2, 3];
  for (const off of offsets) {
    const i = index + off;
    if (i >= 0 && i < SEEDS.length && i !== index) {
      result.push(slugify(SEEDS[i].name));
    }
    if (result.length >= 4) break;
  }
  return result;
}

export const cities: City[] = SEEDS.map((seed, index) => {
  const slug = slugify(seed.name);
  const secteur = seed.secteur || DEFAULT_SECTEUR;
  return {
    slug,
    name: seed.name,
    secteur,
    title: `Plombier chauffagiste à ${seed.name} | Courtin Bat`,
    description: `Courtin Bat intervient à ${seed.name} et dans les alentours pour vos dépannages plomberie, chauffage, chauffe-eau, rénovation sanitaire et installations réalisées avec soin.`,
    intro: buildIntro(seed.name),
    nearby: buildNearby(index, seed),
    featuredServices: DEFAULT_SERVICES,
  };
});

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCityByName(name: string): City | undefined {
  return cities.find((c) => c.name === name);
}

/**
 * Villes disposant d'une page dédiée à URL courte (ex: /plombier-cergy).
 * Pour ces villes, /villes/<slug> pointe son canonical vers la page dédiée.
 */
export const NAMED_CITY_PAGES: Record<string, string> = {
  cergy: '/plombier-cergy',
  pontoise: '/plombier-pontoise',
  'magny-en-vexin': '/plombier-magny-en-vexin',
  marines: '/plombier-marines',
  vigny: '/plombier-vigny',
  ableiges: '/plombier-ableiges',
};

/** Villes mises en avant dans le footer et le maillage principal. */
export const PRIMARY_CITY_SLUGS = [
  'magny-en-vexin',
  'marines',
  'vigny',
  'ableiges',
  'cergy',
  'pontoise',
  'osny',
  'auvers-sur-oise',
];
