// Extrait de public/index.html la version « artefact Claude » : même page,
// sans le squelette <!doctype>/<html>/<head>/<body>, que la plateforme ajoute
// elle-même au moment de la publication.
//   node tools/make-artifact.mjs  ->  .artifact/page.html
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const src = readFileSync('public/index.html', 'utf8');
const between = (a, b) => {
  const i = src.indexOf(a), j = src.indexOf(b);
  if (i < 0 || j < 0) throw new Error(`marqueur ${a} ou ${b} absent de public/index.html`);
  return src.slice(i + a.length, j).trim();
};

mkdirSync('.artifact', { recursive: true });
writeFileSync('.artifact/page.html', between('<!--A1-->', '<!--/A1-->') + '\n\n' + between('<!--A2-->', '<!--/A2-->') + '\n');
console.log('.artifact/page.html généré');
