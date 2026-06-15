# COURTIN BAT — Site vitrine premium

Site vitrine **Astro** pour **COURTIN BAT**, artisan plombier chauffagiste diplômé
dans le **Vexin**, le **Val-d’Oise** et **Cergy-Pontoise**.

Site statique, rapide, optimisé pour le **référencement local**, avec une animation
signature (robinet + goutte d’eau + filet d’eau au scroll) en **GSAP / SVG**.

---

## 🚀 Stack technique

- [Astro](https://astro.build) (output statique) + TypeScript
- CSS moderne avec design tokens (`src/styles/variables.css`)
- [GSAP](https://gsap.com) + ScrollTrigger (chargé dynamiquement, désactivé si `prefers-reduced-motion`)
- SVG animé pour le logo / la goutte / le filet d’eau
- [@astrojs/netlify](https://docs.astro.build/en/guides/integrations-guide/netlify/) (déploiement + Forms)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) (sitemap automatique)
- Données structurées Schema.org (LocalBusiness / Plumber / HVACBusiness / Service / FAQPage / BreadcrumbList / Review)

## 📦 Installation

```bash
npm install
```

## 🧑‍💻 Commandes

| Commande            | Action                                        |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Serveur de développement (`localhost:4321`)   |
| `npm run build`     | Build de production dans `dist/`              |
| `npm run preview`   | Prévisualisation du build local               |
| `npm run astro ...` | Commandes Astro (ex: `astro check`)           |

## 🌐 Déploiement Netlify

Le projet est prêt pour Netlify (`netlify.toml` + adapter).

1. Connecter le dépôt Git à Netlify.
2. Build command : `npm run build` — Publish directory : `dist` (déjà configurés).
3. **Netlify Forms** est détecté automatiquement (formulaire `quote` dans `QuoteForm.astro`).
4. Définir la variable d’environnement **`SITE_URL`** avec le domaine final
   (ex: `https://www.courtin-bat.fr`) pour des URLs canoniques et un sitemap corrects.

> Le formulaire est en HTML statique avec `data-netlify="true"`, `netlify-honeypot="bot-field"`
> et un champ caché `form-name`. Aucune configuration supplémentaire n’est nécessaire.

## 🗂️ Structure

```
src/
├── components/   Composants UI + animations + schemas
├── data/         site.ts, services.ts, cities.ts, faq.ts, reviews.ts, qualifications.ts, nav.ts
├── layouts/      Layout.astro (head, header, footer, scripts)
├── pages/        Pages statiques + /villes/[slug] (génération dynamique)
├── scripts/      interactions.js (header, menu, reveals, GSAP, tracking)
└── styles/       variables.css (design tokens) + globals.css
```

### Pages locales SEO

- Pages dédiées : `/plombier-vexin`, `/plombier-val-doise`, `/plombier-chauffagiste-val-doise`,
  `/plombier-cergy-pontoise`, `/plombier-cergy`, `/plombier-pontoise`,
  `/plombier-magny-en-vexin`, `/plombier-marines`, `/plombier-vigny`, `/plombier-ableiges`.
- Génération dynamique : `/villes/[slug]` pour **toutes** les communes de `src/data/cities.ts`.
- Les villes ayant une page courte (`/plombier-cergy`…) voient leur version `/villes/<slug>`
  pointer son `canonical` vers la page courte (pas de contenu dupliqué).

## ✏️ Données à compléter (`src/data/`)

| Fichier        | À renseigner                                                        |
| -------------- | ------------------------------------------------------------------- |
| `site.ts`      | **Adresse exacte**, **SIRET**, **Google Business Profile**, GPS, réseaux sociaux |
| `reviews.ts`   | Avis réels (les avis fournis sont des **exemples**)                 |
| `qualifications.ts` | Intitulés / dates réels des diplômes et du parcours            |
| `services.ts`  | Ajustements de contenu si besoin                                    |
| `cities.ts`    | Ajout / retrait de communes, voisinages                             |

### Coordonnées actuelles

- **Téléphone** : 06 37 11 73 92 — `tel:+33637117392`
- **Email** : contact@courtin-bat.fr *(provisoire)*
- **Horaires** : Lun–Ven 8h–19h · Sam 9h–18h · Dim urgences
- **SIRET / Adresse** : *à compléter*

## 📊 Analytics

Le tracking est prêt mais neutre : `src/scripts/interactions.js` appelle `window.plausible`
et `window.gtag` s’ils existent. Les éléments à suivre portent un attribut `data-track`
(`call_*`, `quote_*`, `qualif_*`, soumission de formulaire `quote_submit`).

**Pour activer GA4 ou Plausible** : ajouter le script du fournisseur dans le `slot="head"`
d’une page ou directement dans `src/layouts/Layout.astro`.

## ✅ Checklist avant mise en production

- [ ] Vrai **logo** ajouté (`public/assets/logo-courtin-bat.svg` + `courtin-bat-icon.png` + `favicon.ico`)
- [ ] Image **Open Graph** ajoutée (`public/assets/og-courtin-bat.jpg`, 1200×630)
- [ ] **Photos réelles** ajoutées (artisan, réalisations) — `public/assets/images/`
- [ ] **Vidéo hero** ajoutée si disponible (décommenter le bloc dans `HeroPremium.astro`)
- [ ] **Vrais diplômes** et dates dans `qualifications.ts`
- [ ] **Vrai SIRET** et **adresse** dans `site.ts`
- [ ] **Avis réels** dans `reviews.ts`
- [ ] `SITE_URL` configurée sur Netlify
- [ ] **Formulaire testé** (réception des leads Netlify Forms)
- [ ] **Netlify Forms** actif et notifications configurées
- [ ] Sitemap généré (`/sitemap-index.xml`) et `robots.txt` corrects
- [ ] **Google Analytics / Plausible** ajouté
- [ ] **Google Search Console** connectée + sitemap soumis
- [ ] Fiche **Google Business Profile** cohérente (NAP : nom, adresse, téléphone)
- [ ] Test **mobile** + barre CTA fixe
- [ ] Test **Lighthouse** (objectif > 90)
- [ ] Test des **liens téléphone** (`tel:`)
- [ ] Test des **pages locales** et du maillage interne

## ♿ Accessibilité & performance

- Skip link, focus visibles, navigation clavier, contrastes soignés.
- `prefers-reduced-motion` respecté (animations désactivées).
- GSAP chargé dynamiquement et uniquement si les animations sont actives.
- Fallback complet sans JavaScript (reveals et goutte en CSS).
- Polices préchargées, CSS minifié, images en lazy loading (à ajouter avec les vraies photos).
```

---

🤖 Généré avec [Claude Code](https://claude.com/claude-code)
