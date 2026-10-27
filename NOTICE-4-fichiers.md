# Prototype HTML LNPCA (4 fichiers) – notice

**Toutes les données sont fictives** (bandeau « DONNÉES DE DÉMONSTRATION » + date d'actualisation fictive modifiable).

## Lancement (hors ligne)
Double-cliquer sur l'un des 4 fichiers (Chrome / Edge recommandés), sans serveur ni connexion :
`lot1-synthese.html`, `lot1-suivi.html`, `lot2-synthese.html`, `lot2-suivi.html`.
Navigation Lot 1 / Lot 2 et Synthèse / Opération dans la barre sous l'en-tête. L'état est partagé entre les 4 fichiers (localStorage, avec repli `window.name` dans le même onglet).

Logo : déposer le fichier officiel `assets/logo-sncf-reseau.svg` ; à défaut, un libellé texte s'affiche.

## Interactions démontrables
- **Synthèse** : filtres (département, phase, statut, responsable), tri par en-tête, modification directe de version / statut / échéance dans le tableau, clic sur une ligne → fiche opération. Indicateurs (conformité V1, délais, conformité livrables : numérateur/dénominateur affichés, cibles d'offre distinctes) recalculés à chaque changement. Charge par profil et par mois (année au choix ; renfort activable, ETP modifiable). Jalons : statut, ajout, édition, lien simulé.
- **Opération** : champs éditables (phase, type B/C, version, date, statut, avancement, échéance, responsable, OPC, planificateur, MOA coordinatrice/contributrice, département, bloc/pôle) ; ajout/édition/clôture/suppression d'actions, écarts, jalons, réunions (compte rendu = message « lien à connecter »), interfaces ; historique automatique.
- Règle statut → conformité V1 : « V1 remise » → en attente ; « validé » (si en attente) → accepté ; « reprise » (si en attente) → reprise ; « à produire » → sans objet. Alertes : reprise, échéance dépassée ou ≤ 14 j (date fictive), écarts ouverts, actions en retard.
- **Réinitialiser** : recharge les données d'origine des deux lots.

## Modifier le jeu de données
Éditer `src/data.js` (objet JS commenté) puis lancer `python build.py` pour régénérer les 4 HTML. Sans Python : modifier le bloc `DEMO_DATA` en tête du script de chaque HTML puis cliquer sur Réinitialiser.

## Limites
Pas d'authentification ni de réseau ; mono-utilisateur ; données stockées dans le navigateur. Libellés d'opérations, périmètres, MOA et équipes **à valider** vs CCTP et mémoires ; ETP et indicateurs simulés ; aucun URL SNCF réel.
