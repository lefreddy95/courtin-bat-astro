export interface NavLink {
  label: string;
  href: string;
}

/** Navigation principale (épurée). Les services détaillés restent
 *  accessibles depuis la page Services et le menu mobile. */
export const navLinks: NavLink[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Qualifications', href: '/qualifications' },
  { label: 'Zone d’intervention', href: '/zone-intervention' },
  { label: 'Contact', href: '/contact' },
];
