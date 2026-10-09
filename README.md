# Winter Arc

Le Winter Arc de Pauline : une page avec une montagne 3D en haut et un suivi des objectifs par onglets en dessous.

Tout le site tient dans `index.html`.

## En ligne (GitHub Pages)

Une fois GitHub Pages activé sur ce dépôt, le site est sur https://paulinea2108-a11y.github.io/Winter-arc/

## Lancer en local

```bash
node server.js
```

Puis ouvrir http://localhost:5180 (pour changer de port : `PORT=3000 node server.js`).

Aucune dépendance à installer, il faut juste Node.js.

## Où sont gardées les données

Hors de Claude, les progrès sont enregistrés dans le navigateur (`localStorage`), donc sur l'appareil utilisé. Publiée comme artefact Claude, la page les synchronise aussi avec le compte, et la coach Lumi fonctionne.
