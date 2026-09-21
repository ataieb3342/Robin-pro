# Plomberie Plantiveau — site vitrine

Page unique, statique. Pas de framework, pas de dépendance à installer :
un seul fichier HTML avec son CSS et son JS en ligne. Seules ressources
externes : les polices Google (Archivo, Instrument Sans, Azeret Mono).

```
public/index.html          le site
tools/make-artifact.mjs    génère la version « aperçu Claude » (facultatif)
render.yaml                blueprint de déploiement Render
```

## Voir la page en local

```bash
python3 -m http.server -d public 8000
```

Puis <http://localhost:8000>. La géolocalisation du navigateur ne marche
que sur `https` ou sur `localhost` — pas en ouvrant le fichier directement.

## Déployer sur Render

**Avec le blueprint** — Render > *New* > *Blueprint* > choisir ce dépôt.
`render.yaml` fait le reste.

**À la main** — Render > *New* > *Static Site* > choisir ce dépôt, puis :

| Champ | Valeur |
|---|---|
| Build command | *(laisser vide)* |
| Publish directory | `public` |

## Avant la vraie mise en ligne

- [ ] Retirer `<meta name="robots" content="noindex, nofollow">` dans `public/index.html`
- [ ] Remplacer le téléphone, l'e-mail, l'adresse de l'atelier et le SIRET
- [ ] Remplacer les avis par de vrais avis (et le score Google)
- [ ] Vérifier la grille tarifaire et les trois zones d'intervention
- [ ] Ajuster la liste des communes dans `COM` (script en bas du fichier)
- [ ] Ajouter une image `og:image` pour les partages Messenger / WhatsApp
- [ ] Retirer le bandeau « Maquette » en pied de page

## Contenu fictif

Le nom est réel. Tout le reste — coordonnées, tarifs, avis, numéros
d'agrément, journal d'intervention — est inventé pour la maquette.
