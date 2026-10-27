/* ==========================================================================
   JEU DE DONNÉES DE DÉMONSTRATION – LNPCA (100 % fictif)
   --------------------------------------------------------------------------
   Modifier ce fichier puis relancer :  python build.py
   (ou éditer directement le bloc DEMO_DATA dans chaque fichier HTML généré,
   puis cliquer sur « Réinitialiser » pour recharger les données d'origine).

   Dates au format ISO (AAAA-MM-JJ) ; affichées en JJ/MM/AAAA.
   Champs non renseignés d'une opération => valeurs par défaut (voir normOp du gabarit).
   liv = [livrables échus, remis à temps, livrables contrôlés, livrables conformes]
   v1  = "accepté" | "reprise" | "en attente" | "sans objet"
   statut = "à produire" | "V1 remise" | "validé" | "reprise"
   phase  = "AVP" | "PRO" | "PRO-REA" | "REA"
   type   = "B" | "C"
   ATTENTION : libellés d'opérations et MOA à aligner sur les CCTP des missions test.
   ========================================================================== */
const DEMO_DATA = {
  dateActualisation: "2026-09-15",          // date fictive d'actualisation
  objectifs: { v1: 90, delais: 100, conformite: 90 },   // cibles d'offre (≠ résultats simulés)
  lots: {
    1: {
      titre: "Lot 1 – Bouches-du-Rhône (13)",
      notification: "2026-08-03",
      ops: [
        // ---- Bloc A
        { id: "L1-A1", nom: "Libération Abeilles", dept: "13", bloc: "A", phase: "PRO-REA", type: "C", opc: "OPC référent / CP", planif: "Planificatrice A+C", version: "V2", dateVersion: "2026-08-28", statut: "validé", v1: "reprise", maj: "2026-09-10", echeance: "2026-10-09", echeanceLib: "Remise planning REA", avancement: 72, liv: [8, 7, 8, 7],
          moaCoord: "SNCF Réseau (à confirmer CCTP)", moaContrib: "Gares & Connexions (à confirmer)",
          actions: [
            { desc: "Consolider le planning REA avec les entreprises", resp: "OPC référent / CP", ech: "2026-09-25", prio: "Haute", statut: "en cours" },
            { desc: "Recaler les phasages travaux de nuit", resp: "Planificatrice A+C", ech: "2026-09-10", prio: "Moyenne", statut: "ouverte" }
          ],
          ecarts: [
            { lib: "Livraison zone sud", prevu: "2026-07-01", realise: "2026-07-24", cause: "Libération foncière tardive", impact: "+3 semaines sur chemin critique", decision: "Réorganisation des tâches en parallèle", statut: "ouvert" }
          ],
          jalons: [ { lib: "Fin PRO", date: "2026-06-30", fait: true }, { lib: "Planning REA V1", date: "2026-10-09", fait: false }, { lib: "Démarrage REA", date: "2027-01-15", fait: false } ],
          reunions: [ { date: "2026-09-02", titre: "Réunion de suivi planning – Abeilles", cr: "CR_suivi_planning_Abeilles_2026-09-02.pdf", crStatut: "diffusé" }, { date: "2026-09-16", titre: "Coordination LNPCA-HPMV", cr: "", crStatut: "attendu" } ] },
        { id: "L1-A2", nom: "Bloc Est", dept: "13", bloc: "A", phase: "PRO", type: "B", opc: "OPC adjoint A", planif: "Planificatrice A+C", version: "V1", dateVersion: "2026-09-04", statut: "V1 remise", v1: "en attente", maj: "2026-09-08", echeance: "2026-09-30", echeanceLib: "Retour sur V1", avancement: 55, liv: [5, 5, 4, 4],
          actions: [ { desc: "Intégrer les remarques MOE sur la V1", resp: "OPC adjoint A", ech: "2026-09-22", prio: "Haute", statut: "en cours" } ] },
        { id: "L1-A3", nom: "Gare souterraine de Marseille", dept: "13", bloc: "A", phase: "AVP", type: "B", opc: "OPC référent / CP", planif: "Planificatrice A+C", version: "V1", dateVersion: "2026-07-20", statut: "reprise", v1: "reprise", maj: "2026-09-01", echeance: "2026-09-12", echeanceLib: "Remise V2 après reprise", avancement: 40, liv: [6, 4, 5, 3],
          ecarts: [ { lib: "Planning V1 non conforme (interfaces G&C)", prevu: "2026-07-20", realise: "2026-07-20", cause: "Interfaces gares incomplètes", impact: "Reprise complète du planning", decision: "Atelier de reprise avec G&C", statut: "ouvert" } ] },
        { id: "L1-A4", nom: "Accès métro – Liaison métro", dept: "13", bloc: "A", phase: "AVP", type: "C", opc: "OPC adjoint A", planif: "Planificatrice A+C", version: "—", dateVersion: "", statut: "à produire", v1: "sans objet", maj: "2026-08-20", echeance: "2026-10-30", echeanceLib: "Remise V1", avancement: 10, liv: [1, 1, 1, 1],
          interfaces: [ { org: "Autorité de transport métro (à confirmer)", contact: "À renseigner" }, { org: "Réseau", contact: "À renseigner" } ] },
        // ---- Bloc B
        { id: "L1-B1", nom: "Corridor Ouest", dept: "13", bloc: "B", phase: "AVP", type: "B", opc: "OPC référent / CP (cadrage B)", planif: "Planificatrice B", version: "V1", dateVersion: "2026-09-09", statut: "V1 remise", v1: "en attente", maj: "2026-09-09", echeance: "2026-09-28", echeanceLib: "Validation V1", avancement: 35, liv: [3, 3, 2, 2] },
        { id: "L1-B2", nom: "Plateau Ouest", dept: "13", bloc: "B", phase: "AVP", type: "B", opc: "OPC référent / CP (cadrage B)", planif: "Planificatrice B", version: "—", dateVersion: "", statut: "à produire", v1: "sans objet", maj: "2026-08-14", echeance: "2026-09-18", echeanceLib: "Remise V1", avancement: 15, liv: [2, 1, 1, 1] },
        { id: "L1-B3", nom: "Galerie de Crimée", dept: "13", bloc: "B", phase: "PRO", type: "C", opc: "OPC bloc B (montée en charge)", planif: "Planificatrice B", version: "V1", dateVersion: "2026-08-12", statut: "validé", v1: "accepté", maj: "2026-08-25", echeance: "2026-11-20", echeanceLib: "Mise à jour trimestrielle", avancement: 62, liv: [4, 4, 4, 4] },
        // ---- Bloc C
        { id: "L1-C1", nom: "Raccordement Marseille Nord", dept: "13", bloc: "C", phase: "AVP", type: "C", opc: "OPC référent / CP", planif: "Planificatrice A+C", version: "V1", dateVersion: "2026-08-05", statut: "validé", v1: "accepté", maj: "2026-08-18", echeance: "2026-12-04", echeanceLib: "Passage en PRO", avancement: 48, liv: [5, 5, 5, 5] },
        { id: "L1-C2", nom: "Tunnels de Marseille", dept: "13", bloc: "C", phase: "AVP", type: "B", opc: "OPC référent / CP", planif: "Planificatrice A+C", version: "V1", dateVersion: "2026-09-01", statut: "V1 remise", v1: "en attente", maj: "2026-09-05", echeance: "2026-09-24", echeanceLib: "Retour sur V1", avancement: 38, liv: [4, 3, 3, 3] },
        { id: "L1-C3", nom: "Doublement tunnel Saint-Louis", dept: "13", bloc: "C", phase: "PRO", type: "B", opc: "OPC référent / CP", planif: "Planificatrice A+C", version: "V2", dateVersion: "2026-07-30", statut: "validé", v1: "reprise", maj: "2026-08-10", echeance: "2026-10-15", echeanceLib: "Revue d'intégration", avancement: 66, liv: [7, 6, 7, 6] },
        { id: "L1-C4", nom: "Raccordement Marseille Parette", dept: "13", bloc: "C", phase: "AVP", type: "C", opc: "OPC référent / CP", planif: "Planificatrice A+C", version: "—", dateVersion: "", statut: "à produire", v1: "sans objet", maj: "2026-08-01", echeance: "2026-11-06", echeanceLib: "Remise V1", avancement: 5, liv: [0, 0, 0, 0] },
        { id: "L1-C5", nom: "Blancarde Étape 2", dept: "13", bloc: "C", phase: "PRO", type: "C", opc: "OPC référent / CP", planif: "Planificatrice A+C", version: "V1", dateVersion: "2026-08-20", statut: "validé", v1: "accepté", maj: "2026-09-03", echeance: "2026-10-23", echeanceLib: "Mise à jour planning", avancement: 58, liv: [6, 6, 6, 6] },
        { id: "L1-C6", nom: "ITE Marseille", dept: "13", bloc: "C", phase: "REA", type: "C", opc: "OPC référent / CP", planif: "Planificatrice A+C", version: "V3", dateVersion: "2026-09-07", statut: "validé", v1: "accepté", maj: "2026-09-07", echeance: "2026-09-21", echeanceLib: "Point d'avancement REA", avancement: 81, liv: [10, 10, 10, 9] }
      ],
      equipe: [
        { id: "t1", profil: "Direction", lib: "Direction de mission (pilotage, qualité, arbitrages)", perim: "Tous blocs", debut: "2026-01", fin: "2029-12", etp: 0.3, actif: true },
        { id: "t2", profil: "Intégrateur", lib: "Intégrateur chef de projet (consolidation, gouvernance)", perim: "Multi-opérations", debut: "2026-01", fin: "2029-12", etp: 0.6, actif: true },
        { id: "t3", profil: "OPC", lib: "OPC référent / chef de projet (coordination A, cadrage initial B)", perim: "Bloc A + cadrage B", debut: "2026-01", fin: "2029-12", etp: 1.0, actif: true },
        { id: "t4", profil: "OPC", lib: "OPC confirmé adjoint", perim: "Bloc A", debut: "2026-01", fin: "2029-12", etp: 1.0, actif: true },
        { id: "t5", profil: "OPC", lib: "OPC bloc B (montée en charge différée)", perim: "Bloc B", debut: "2026-09", fin: "2029-12", etp: 0.5, actif: true },
        { id: "t6", profil: "OPC", lib: "Renfort OPC bloc C (à partir de 2028)", perim: "Bloc C", debut: "2028-01", fin: "2029-12", etp: 1.0, actif: true },
        { id: "t7", profil: "Planificateur", lib: "Planificatrice blocs A + C", perim: "Blocs A + C", debut: "2026-01", fin: "2029-12", etp: 1.0, actif: true },
        { id: "t8", profil: "Planificateur", lib: "Planificatrice bloc B", perim: "Bloc B", debut: "2026-01", fin: "2029-12", etp: 0.8, actif: true },
        { id: "t9", profil: "Planificateur", lib: "Renfort planificateur bloc B (activable selon charge)", perim: "Bloc B", debut: "2027-06", fin: "2028-12", etp: 0.5, actif: false }
      ],
      jalons: [
        { lib: "Réunion de lancement planning – Lot 1", type: "Réunion de lancement", date: "2026-08-10", statut: "fait", pilote: "OPC référent / CP" },
        { lib: "Rapport d'étonnement (≤ 2 mois après notification)", type: "Rapport d'étonnement", date: "2026-10-02", statut: "en cours", pilote: "Direction de mission" },
        { lib: "Coordination LNPCA-HPMV n°3", type: "Coordination LNPCA-HPMV", date: "2026-09-16", statut: "à venir", pilote: "Intégrateur CP" },
        { lib: "Réunion de suivi planning – bloc A", type: "Suivi planning", date: "2026-09-22", statut: "à venir", pilote: "OPC adjoint A" },
        { lib: "Remise V1 – Plateau Ouest", type: "Remise", date: "2026-09-18", statut: "à venir", pilote: "Planificatrice B" },
        { lib: "Revue d'intégration n°2", type: "Revue d'intégration", date: "2026-10-15", statut: "à venir", pilote: "Intégrateur CP" },
        { lib: "Compte rendu COPIL attendu", type: "Compte rendu", date: "2026-10-21", statut: "à venir", pilote: "Direction de mission" },
        { lib: "COPIL Lot 1", type: "COPIL", date: "2026-10-28", statut: "à venir", pilote: "Direction de mission" }
      ]
    },
    2: {
      titre: "Lot 2 – Var (83) et Alpes-Maritimes (06)",
      notification: "2026-08-03",
      ops: [
        // ---- Var (83)
        { id: "L2-V1", nom: "Saint-Cyr", dept: "83", bloc: "Var", phase: "AVP", type: "B", opc: "OPC sénior Var", planif: "Planificatrice sénior Var", version: "V1", dateVersion: "2026-08-31", statut: "validé", v1: "accepté", maj: "2026-09-09", echeance: "2026-10-16", echeanceLib: "Passage en PRO", avancement: 52, liv: [5, 5, 5, 5],
          moaCoord: "SNCF Réseau (à confirmer CCTP)", moaContrib: "À renseigner (CCTP)",
          actions: [ { desc: "Valider les hypothèses de phasage avec l'exploitation", resp: "OPC sénior Var", ech: "2026-09-30", prio: "Moyenne", statut: "en cours" } ] },
        { id: "L2-V2", nom: "Toulon", dept: "83", bloc: "Var", phase: "PRO", type: "B", opc: "OPC sénior Var", planif: "Planificatrice sénior Var", version: "V2", dateVersion: "2026-09-02", statut: "V1 remise", v1: "reprise", maj: "2026-09-02", echeance: "2026-09-25", echeanceLib: "Validation V2", avancement: 60, liv: [8, 7, 8, 6],
          ecarts: [ { lib: "Réserves sur la V1 (jalons travaux)", prevu: "2026-08-15", realise: "2026-08-29", cause: "Hypothèses d'interface incomplètes", impact: "V2 nécessaire", decision: "Reprise des jalons interfaces", statut: "traité" } ] },
        { id: "L2-V3", nom: "La Pauline", dept: "83", bloc: "Var", phase: "AVP", type: "C", opc: "OPC sénior Var", planif: "Planificatrice sénior Var", version: "V1", dateVersion: "2026-08-17", statut: "validé", v1: "accepté", maj: "2026-08-26", echeance: "2026-11-13", echeanceLib: "Mise à jour planning", avancement: 45, liv: [3, 3, 3, 3] },
        { id: "L2-V4", nom: "Carnoules", dept: "83", bloc: "Var", phase: "AVP", type: "C", opc: "OPC sénior Var", planif: "Planificatrice sénior Var", version: "—", dateVersion: "", statut: "à produire", v1: "sans objet", maj: "2026-08-12", echeance: "2026-09-14", echeanceLib: "Remise V1", avancement: 12, liv: [1, 0, 0, 0] },
        { id: "L2-V5", nom: "Traversées de voies piétonnes (TVP)", dept: "83", bloc: "Var", phase: "PRO-REA", type: "C", opc: "OPC sénior Var", planif: "Planificatrice sénior Var", version: "V2", dateVersion: "2026-08-24", statut: "validé", v1: "accepté", maj: "2026-09-04", echeance: "2026-10-02", echeanceLib: "Revue REA", avancement: 70, liv: [6, 6, 6, 6] },
        { id: "L2-V6", nom: "Les Arcs", dept: "83", bloc: "Var", phase: "REA", type: "B", opc: "OPC sénior Var", planif: "Planificatrice sénior Var", version: "V3", dateVersion: "2026-09-08", statut: "validé", v1: "accepté", maj: "2026-09-08", echeance: "2026-09-29", echeanceLib: "Point d'avancement REA", avancement: 84, liv: [9, 9, 9, 9] },
        // ---- Alpes-Maritimes (06)
        { id: "L2-A1", nom: "Cannes Marchandises", dept: "06", bloc: "Alpes-Maritimes", phase: "PRO", type: "B", opc: "OPC sénior Alpes-Maritimes", planif: "Planificateur expérimenté AM", version: "V1", dateVersion: "2026-08-27", statut: "V1 remise", v1: "en attente", maj: "2026-08-27", echeance: "2026-09-20", echeanceLib: "Retour sur V1", avancement: 50, liv: [4, 4, 3, 3],
          actions: [ { desc: "Planifier l'atelier phasage avec G&C", resp: "OPC sénior Alpes-Maritimes", ech: "2026-09-18", prio: "Haute", statut: "ouverte" } ] },
        { id: "L2-A2", nom: "Bifurcation Cannes–Grasse", dept: "06", bloc: "Alpes-Maritimes", phase: "AVP", type: "B", opc: "OPC sénior Alpes-Maritimes", planif: "Planificateur expérimenté AM", version: "V1", dateVersion: "2026-07-24", statut: "reprise", v1: "reprise", maj: "2026-09-03", echeance: "2026-09-11", echeanceLib: "Remise V2", avancement: 33, liv: [5, 3, 4, 2],
          ecarts: [ { lib: "V1 non conforme au référentiel", prevu: "2026-07-24", realise: "2026-07-24", cause: "Référentiel planning mal appliqué", impact: "Reprise du planning", decision: "Rappel du référentiel + relecture croisée", statut: "ouvert" } ] },
        { id: "L2-A3", nom: "Cannes Centre", dept: "06", bloc: "Alpes-Maritimes", phase: "AVP", type: "C", opc: "OPC sénior Alpes-Maritimes", planif: "Planificateur expérimenté AM", version: "V1", dateVersion: "2026-08-19", statut: "validé", v1: "accepté", maj: "2026-08-30", echeance: "2026-11-27", echeanceLib: "Mise à jour planning", avancement: 42, liv: [3, 3, 3, 3] },
        { id: "L2-A4", nom: "Nice Ville", dept: "06", bloc: "Alpes-Maritimes", phase: "PRO", type: "B", opc: "OPC sénior Alpes-Maritimes", planif: "Planificateur expérimenté AM", version: "V2", dateVersion: "2026-09-01", statut: "validé", v1: "accepté", maj: "2026-09-05", echeance: "2026-10-09", echeanceLib: "Revue d'intégration", avancement: 64, liv: [7, 7, 7, 7] },
        { id: "L2-A5", nom: "Nice Saint-Roch", dept: "06", bloc: "Alpes-Maritimes", phase: "AVP", type: "C", opc: "OPC sénior Alpes-Maritimes", planif: "Planificateur expérimenté AM", version: "—", dateVersion: "", statut: "à produire", v1: "sans objet", maj: "2026-08-05", echeance: "2026-10-23", echeanceLib: "Remise V1", avancement: 8, liv: [0, 0, 0, 0] },
        { id: "L2-A6", nom: "Nice Aéroport", dept: "06", bloc: "Alpes-Maritimes", phase: "PRO", type: "C", opc: "OPC sénior Alpes-Maritimes", planif: "Planificateur expérimenté AM", version: "V1", dateVersion: "2026-08-21", statut: "validé", v1: "accepté", maj: "2026-09-01", echeance: "2026-10-30", echeanceLib: "Mise à jour planning", avancement: 57, liv: [4, 4, 4, 4] },
        { id: "L2-A7", nom: "IFTE/CSS 06", dept: "06", bloc: "Alpes-Maritimes", phase: "REA", type: "C", opc: "OPC sénior Alpes-Maritimes", planif: "Planificateur expérimenté AM", version: "V2", dateVersion: "2026-09-10", statut: "V1 remise", v1: "en attente", maj: "2026-09-10", echeance: "2026-09-26", echeanceLib: "Validation V2", avancement: 77, liv: [6, 5, 5, 5] }
      ],
      equipe: [
        { id: "u1", profil: "Direction", lib: "Directeur de mission également intégrateur", perim: "Lot 2", debut: "2026-01", fin: "2029-12", etp: 0.8, actif: true },
        { id: "u2", profil: "Intégrateur", lib: "Relais intégration", perim: "Lot 2", debut: "2026-01", fin: "2029-12", etp: 0.4, actif: true },
        { id: "u3", profil: "Planificateur", lib: "Planificatrice sénior pôle Var", perim: "Var (83)", debut: "2026-01", fin: "2029-12", etp: 1.0, actif: true },
        { id: "u4", profil: "Planificateur", lib: "Planificateur expérimenté pôle Alpes-Maritimes", perim: "Alpes-Maritimes (06)", debut: "2026-01", fin: "2029-12", etp: 1.0, actif: true },
        { id: "u5", profil: "OPC", lib: "OPC sénior pôle Var", perim: "Var (83)", debut: "2026-01", fin: "2029-12", etp: 1.0, actif: true },
        { id: "u6", profil: "OPC", lib: "OPC sénior pôle Alpes-Maritimes", perim: "Alpes-Maritimes (06)", debut: "2026-01", fin: "2029-12", etp: 1.0, actif: true },
        { id: "u7", profil: "OPC", lib: "Renfort OPC confirmé (prévu en 2029)", perim: "À affecter", debut: "2029-01", fin: "2029-12", etp: 1.0, actif: true }
      ],
      jalons: [
        { lib: "Réunion de lancement planning – Lot 2", type: "Réunion de lancement", date: "2026-08-11", statut: "fait", pilote: "Directeur de mission" },
        { lib: "Rapport d'étonnement (≤ 2 mois après notification)", type: "Rapport d'étonnement", date: "2026-10-02", statut: "en cours", pilote: "Directeur de mission" },
        { lib: "Coordination LNPCA-HPMV n°3", type: "Coordination LNPCA-HPMV", date: "2026-09-17", statut: "à venir", pilote: "Relais intégration" },
        { lib: "Réunion de suivi planning – pôle Var", type: "Suivi planning", date: "2026-09-23", statut: "à venir", pilote: "OPC sénior Var" },
        { lib: "Remise V1 – Carnoules", type: "Remise", date: "2026-09-14", statut: "retard", pilote: "Planificatrice sénior Var" },
        { lib: "Revue d'intégration n°2", type: "Revue d'intégration", date: "2026-10-09", statut: "à venir", pilote: "Relais intégration" },
        { lib: "Compte rendu COPIL attendu", type: "Compte rendu", date: "2026-10-22", statut: "à venir", pilote: "Directeur de mission" },
        { lib: "COPIL Lot 2", type: "COPIL", date: "2026-10-29", statut: "à venir", pilote: "Directeur de mission" }
      ]
    }
  }
};
