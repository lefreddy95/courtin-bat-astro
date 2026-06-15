export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Dépannage', href: '/depannage-plomberie' },
  { label: 'Chauffage', href: '/chauffage' },
  { label: 'Salle de bain', href: '/renovation-salle-de-bain' },
  { label: 'Qualifications', href: '/qualifications' },
  { label: 'Zone d’intervention', href: '/zone-intervention' },
  { label: 'Contact', href: '/contact' },
];
