# Plomberie Plantiveau — site vitrine

Page unique, statique. Pas de framework, pas de dépendance à installer :
un seul fichier HTML avec son CSS et son JS en ligne. Seules ressources
externes : les polices Google (Archivo, Instrument Sans, Azeret Mono).

```
public/index.html          le site
public/photos/             les photos du carrousel (+ CREDITS.md)
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

Par ordre d'impact sur le nombre d'appels :

- [ ] **Les photos.** Remplacer les trois images d'illustration par de
      vrais chantiers, et ajouter un portrait. Point numéro un, loin
      devant tout le reste. Voir la section ci-dessous.
- [ ] Le vrai numéro de portable (il apparaît à six endroits, dont la
      barre d'appel fixe et les liens `tel:`)
- [ ] Vérifier la grille tarifaire — c'est le deuxième argument de la page
- [ ] De vrais avis, avec le vrai score Google
- [ ] Les trois zones et la liste `COM` (script en bas du fichier)
- [ ] L'e-mail, l'adresse de l'atelier, le SIRET, les numéros d'agrément
- [ ] Une image `og:image` pour les partages WhatsApp / Messenger
- [ ] Retirer `<meta name="robots" content="noindex, nofollow">`
- [ ] Retirer le bandeau « Maquette » en pied de page et la note jaune
      de la section Réalisations

## Les photos

Les trois photos du carrousel sont des **images libres de droit**
(Pexels, usage commercial gratuit) — voir `public/photos/CREDITS.md`.
Ce sont les chantiers de quelqu'un d'autre : elles tiennent la place,
elles ne la remplacent pas. Une note le dit sous le carrousel.

Pour mettre les vraies : déposer les fichiers dans `public/photos/` et
changer les trois `src` + les légendes dans la section
`id="realisations"`. Le carrousel s'adapte tout seul au nombre de
`<figure class="slide">` — en ajouter une suffit à ajouter un point.

Ce qu'il faut photographier, par ordre d'utilité :

1. une douche à l'italienne finie, en cadrage large
2. une salle de bain complète, depuis la porte
3. une pompe à chaleur ou une chaudière posée proprement
4. une colonne ou un réseau refait — le détail qui montre le soin
5. **un portrait de Robin en tenue, devant la camionnette**

Lumière du jour, pièce rangée, pas de flash direct, cadrage paysage.

## Contenu fictif

Le nom est réel. Tout le reste — coordonnées, tarifs, avis, numéros
d'agrément, journal d'intervention — est inventé pour la maquette.
