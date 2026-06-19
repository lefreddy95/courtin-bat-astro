/**
 * Génère l'image Open Graph (1200×630) partagée sur WhatsApp, iMessage,
 * Facebook, LinkedIn, Telegram, etc.
 *
 * Composite le vrai logo Courtin Bat sur un fond premium dégradé acier/cuivre.
 * Sortie : public/assets/og-courtin-bat.jpg (+ .png en secours).
 *
 *   node scripts/generate-og.mjs
 */
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const logoPath = resolve(root, 'public/assets/logo-courtin-bat.svg');
const outJpg = resolve(root, 'public/assets/og-courtin-bat.jpg');
const outPng = resolve(root, 'public/assets/og-courtin-bat.png');

const W = 1200;
const H = 630;

// --- Fond + typographie (les apostrophes typographiques évitent les soucis d'échappement) ---
const bg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="steel" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#16293a"/>
      <stop offset="0.55" stop-color="#213a51"/>
      <stop offset="1" stop-color="#2f4d68"/>
    </linearGradient>
    <radialGradient id="copperGlow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#b06a3c" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#b06a3c" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="steelGlow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#4f7da3" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#4f7da3" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#steel)"/>
  <circle cx="1010" cy="120" r="420" fill="url(#copperGlow)"/>
  <circle cx="120" cy="600" r="360" fill="url(#steelGlow)"/>

  <!-- liseré cuivre en bas -->
  <rect x="0" y="${H - 8}" width="${W}" height="8" fill="#b06a3c"/>

  <!-- barre d'accent verticale -->
  <rect x="80" y="196" width="6" height="232" rx="3" fill="#b06a3c"/>

  <!-- Eyebrow -->
  <text x="110" y="180" font-family="'Segoe UI', Arial, sans-serif" font-size="26"
        letter-spacing="6" font-weight="700" fill="#d99a6c">PLOMBERIE &#183; CHAUFFAGE</text>

  <!-- Titre -->
  <text x="108" y="288" font-family="'Segoe UI', Arial, sans-serif" font-size="96"
        font-weight="800" fill="#ffffff" letter-spacing="1">COURTIN BAT</text>

  <!-- Sous-titre -->
  <text x="110" y="350" font-family="'Segoe UI', Arial, sans-serif" font-size="36"
        font-weight="600" fill="#e9eef3">Artisan plombier chauffagiste dipl&#244;m&#233;</text>

  <!-- Zone -->
  <text x="110" y="404" font-family="'Segoe UI', Arial, sans-serif" font-size="30"
        font-weight="400" fill="#b8c6d4">Vexin &#183; Val-d&#8217;Oise &#183; Cergy-Pontoise</text>

  <!-- Badge téléphone -->
  <rect x="110" y="452" width="320" height="64" rx="32" fill="#b06a3c"/>
  <text x="270" y="493" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif"
        font-size="32" font-weight="800" fill="#ffffff">06 37 11 73 92</text>

  <!-- Pastille blanche du logo -->
  <circle cx="980" cy="300" r="188" fill="#ffffff"/>
  <circle cx="980" cy="300" r="188" fill="none" stroke="#b06a3c" stroke-opacity="0.35" stroke-width="3"/>
</svg>`;

const LOGO = 300; // taille de rendu du logo
const logoCx = 980;
const logoCy = 300;

const bgBuf = await sharp(Buffer.from(bg)).png().toBuffer();
const logoBuf = await sharp(readFileSync(logoPath), { density: 300 })
  .resize(LOGO, LOGO, { fit: 'inside', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

const composed = sharp(bgBuf).composite([
  { input: logoBuf, left: Math.round(logoCx - LOGO / 2), top: Math.round(logoCy - LOGO / 2) },
]);

await composed.clone().jpeg({ quality: 88, mozjpeg: true }).toFile(outJpg);
await composed.clone().png().toFile(outPng);

console.log('OG image generated:');
console.log(' -', outJpg);
console.log(' -', outPng);
