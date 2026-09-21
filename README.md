# Portfolio de Pierre Travers

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

Pour GitHub Pages, publier **tout le contenu** de `dist/client/`, y compris
`.nojekyll` et `_next/`, à la racine de la branche choisie comme source Pages.
Le dossier généré est ignoré par Git : lancer la génération ne publie pas le site.
Cette configuration cible le site racine `404PathNotnound.github.io`.

Pour consulter le résultat localement, depuis la racine du projet :

```sh
python3 -m http.server 8080 --directory dist/client
```

Ouvrir ensuite http://localhost:8080. Utiliser un serveur HTTP plutôt que
d'ouvrir `index.html` par double-clic, car les ressources utilisent des chemins
depuis la racine du site.
