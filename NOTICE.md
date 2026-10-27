# Prototype de pilotage LNPCA

## Lancement hors ligne

Ouvrir `index.html` directement dans un navigateur récent (double-clic ou `Ctrl+O`). Aucune installation, authentification ou connexion réseau n'est nécessaire.

## Démonstration

- Utiliser le sélecteur **Périmètre** pour passer du Lot 1 au Lot 2.
- **Synthèse planning** propose les KPI simulés, les filtres et les prochains jalons.
- Cliquer sur une opération puis ouvrir **Suivi des opérations** pour modifier phase, type B/C, statut, conformité, échéance, responsables et champs MOA.
- Ajouter une action ou un écart ; clôturer une action avec son sélecteur de statut.
- Les boutons de compte-rendu ouvrent un message simulé et n'appellent aucun lien SNCF.
- **Réinitialiser** restaure le jeu de données initial de la session.

## Limites et préparation

Le jeu de données est l'objet `seed` commenté au début du script de `index.html`. Les données sont fictives et conservées en mémoire uniquement pendant l'ouverture de la page. Les libellés, périmètres, équipes, responsabilités MOA et KPI doivent être validés contre les CCTP et les mémoires avant soutenance. Les chiffres affichent des résultats simulés et des objectifs séparés ; ils ne constituent pas une mesure réelle.
