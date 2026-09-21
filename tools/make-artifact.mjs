// Extrait de public/index.html la version « artefact Claude » : même page,
// sans le squelette <!doctype>/<html>/<head>/<body>, que la plateforme ajoute
// elle-même au moment de la publication.
//   node tools/make-artifact.mjs  ->  .artifact/page.html
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { extname, join } from 'node:path';

const src = readFileSync('public/index.html', 'utf8');
const between = (a, b) => {
  const i = src.indexOf(a), j = src.indexOf(b);
  if (i < 0 || j < 0) throw new Error(`marqueur ${a} ou ${b} absent de public/index.html`);
  return src.slice(i + a.length, j).trim();
};

// La CSP des artefacts bloque toute image externe ET les fichiers voisins :
// on embarque donc les photos en data: URI dans cette copie-là uniquement.
const MIME = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' };
const inline = (html) => html.replace(/src="(photos\/[^"]+)"/g, (_, rel) => {
  const type = MIME[extname(rel).toLowerCase()];
  if (!type) throw new Error(`type d'image non géré : ${rel}`);
  return `src="data:${type};base64,${readFileSync(join('public', rel)).toString('base64')}"`;
});

mkdirSync('.artifact', { recursive: true });
const out = between('<!--A1-->', '<!--/A1-->') + '\n\n' + inline(between('<!--A2-->', '<!--/A2-->')) + '\n';
writeFileSync('.artifact/page.html', out);
console.log(`.artifact/page.html généré — ${(out.length / 1024 / 1024).toFixed(2)} Mo`);
