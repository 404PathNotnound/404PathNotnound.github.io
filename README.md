# Portfolio de Pierre Travers

Site : https://404PathNotnound.github.io/

## Publication automatique

Dans les paramètres du dépôt GitHub, ouvrir **Settings → Pages** et choisir
**GitHub Actions** comme source de publication. Ce réglage est nécessaire une fois.

Chaque push sur `main` déclenche ensuite le workflow **Publier le portfolio** :
il installe les dépendances, génère le site React et publie `dist/client/`.
Son état apparaît dans l'onglet **Actions** du dépôt.

Pousser les sources et `.github/workflows/pages.yml`. Le dossier `dist/` reste
ignoré : GitHub le génère automatiquement et publie son contenu compilé.

## Développement

Après installation des dépendances (`npx --yes pnpm install`), lancer
`npm run dev`, ou sélectionner **Dev** puis ▶ dans WebStorm.

## Générer le site pour GitHub Pages

Dans WebStorm, sélectionner **Build GitHub Pages**, puis ▶.
La même opération est disponible dans le terminal :

```sh
npm run build:pages
```

Le site statique est généré dans `dist/client/`, avec `index.html`, les
styles, les scripts, les polices et les images. La génération utilise les
composants React existants ; ne pas modifier le HTML généré directement.

Le workflow GitHub Pages publie **tout le contenu** de `dist/client/`, y compris
`.nojekyll` et `_next/`. Lancer la génération locale seule ne publie pas le site.
Cette configuration cible le site racine `404PathNotnound.github.io`.

Pour consulter le résultat localement, depuis la racine du projet :

```sh
python3 -m http.server 8080 --directory dist/client
```

Ouvrir ensuite http://localhost:8080. Utiliser un serveur HTTP plutôt que
d'ouvrir `index.html` par double-clic, car les ressources utilisent des chemins
depuis la racine du site.
