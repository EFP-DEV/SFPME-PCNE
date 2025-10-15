Voici une version entièrement textuelle des tableaux que vous avez fournis, organisée par type de menace et groupe, tout en conservant toutes les informations clés :

---

## 🧠 Menaces virtuelles

### 🎭 Ingénierie sociale & usurpation

1. **Phishing** : Tentatives d'usurpation via email ou SMS.

   * Bonne habitude : Toujours vérifier l’expéditeur et ne pas cliquer sans réflexion.
   * Mauvaise habitude : Cliquer sur des liens suspects.
   * Solutions : Antispam, anti-phishing (Google Safe Browsing).
   * Impact : Financier, réputationnel.
   * Cible : Employés, comptabilité.
   * Criticité : 4/5.

2. **Usurpation de compte** : Vol de comptes professionnels (email, CRM...).

   * Bonne habitude : Utiliser 2FA, mots de passe uniques.
   * Mauvaise habitude : Réutiliser les mots de passe.
   * Solutions : Gestionnaire de mots de passe, 2FA obligatoire.
   * Impact : Financier, opérationnel.
   * Cible : Employés, IT.
   * Criticité : 4/5.

3. **Business Email Compromise (BEC)** : Usurpation ciblée dans un contexte professionnel.

   * Bonne habitude : Toujours vérifier par un second canal.
   * Mauvaise habitude : Répondre à une demande urgente sans vérification.
   * Solutions : DMARC, SPF, authentification de domaine.
   * Impact : Financier, juridique.
   * Cible : Direction, comptabilité.
   * Criticité : 5/5.

4. **Partage non sécurisé de documents** : Liens publics mal protégés.

   * Bonne habitude : Liens protégés avec mot de passe et expiration.
   * Mauvaise habitude : Envoyer sans restriction (ex : Google Drive).
   * Solutions : Outils de partage sécurisé (Tresorit, Dropbox Pro).
   * Impact : Réputationnel, juridique.
   * Cible : Employés, RH, commerciaux.
   * Criticité : 3/5.

---

### 🐛 Logiciels malveillants & infections

1. **Malwares** : Logiciels nuisibles installés à l’insu de l’utilisateur.

   * Bonne habitude : Mettre à jour, éviter les sites non sûrs.
   * Mauvaise habitude : Télécharger des logiciels crackés.
   * Solutions : Antivirus, sandboxing, pare-feux.
   * Impact : Opérationnel.
   * Cible : Tous les utilisateurs.
   * Criticité : 4/5.

2. **Ransomwares** : Fichiers chiffrés, rançon exigée.

   * Bonne habitude : Sauvegardes régulières hors-ligne.
   * Mauvaise habitude : Ouvrir fichiers ZIP/EXE suspects.
   * Solutions : Sauvegarde auto, détection comportementale.
   * Impact : Financier, opérationnel.
   * Cible : Tous collaborateurs.
   * Criticité : 5/5.

3. **Spywares / Keyloggers** : Logiciels espions récoltant des données.

   * Bonne habitude : Installer des logiciels vérifiés, compte limité.
   * Mauvaise habitude : Installer sans lire les permissions.
   * Solutions : Antispyware, restriction de permissions.
   * Impact : Financier, réputationnel.
   * Cible : Employés, direction.
   * Criticité : 4/5.

4. **Adwares malveillants** : Publicités cachées dans des logiciels gratuits.

   * Bonne habitude : Utiliser des logiciels open-source vérifiés.
   * Mauvaise habitude : Installer des extensions douteuses.
   * Solutions : Bloqueurs de pub, pare-feux DNS.
   * Impact : Opérationnel.
   * Cible : Tous les utilisateurs.
   * Criticité : 2/5.

5. **Fausse mise à jour logicielle** : Téléchargement de mise à jour corrompue.

   * Bonne habitude : Télécharger depuis l’éditeur officiel.
   * Mauvaise habitude : Chercher des versions modifiées.
   * Solutions : Hash, signature numérique, MDM.
   * Impact : Sécurité, opérationnel.
   * Cible : IT, utilisateurs avancés.
   * Criticité : 3/5.

---

### 🔓 Failles techniques & piratage réseau

1. **Fuite via applications tierces** : Applications connectées mal maîtrisées.

   * Bonne habitude : Vérifier autorisations et accès.
   * Mauvaise habitude : Connecter sans réviser les permissions.
   * Solutions : Audit API, sécurité Google/Microsoft.
   * Impact : Juridique, réputationnel.
   * Cible : IT, direction.
   * Criticité : 4/5.

2. **Malveillance interne** : Collaborateur malveillant ou ex-employé.

   * Bonne habitude : Désactiver accès après départ.
   * Mauvaise habitude : Laisser des comptes actifs.
   * Solutions : Gestion des droits, journalisation.
   * Impact : Juridique, réputationnel.
   * Cible : RH, IT, managers.
   * Criticité : 5/5.

---

## 🏢 Menaces physiques

### 👀 Accès non autorisé & espionnage direct

1. **Poste non verrouillé** : Session ouverte accessible à tous.

   * Bonne habitude : Verrouiller systématiquement.
   * Mauvaise habitude : Laisser session ouverte.
   * Solutions : Verrouillage automatique, badge, empreinte.
   * Impact : Réputationnel, opérationnel.
   * Cible : Tous les employés.
   * Criticité : 3/5.

2. **Shoulder surfing** : Espionnage visuel dans un lieu public.

   * Bonne habitude : Utiliser un filtre de confidentialité.
   * Mauvaise habitude : Afficher des infos sensibles sans précaution.
   * Solutions : Filtres écran, placement stratégique.
   * Impact : Réputationnel.
   * Cible : Employés nomades.
   * Criticité : 3/5.

3. **Keylogger matériel** : Dispositif espion branché au matériel.

   * Bonne habitude : Contrôler les connectiques régulièrement.
   * Mauvaise habitude : Laisser accès libre aux périphériques.
   * Solutions : Boîtiers sécurisés, alertes de connectique.
   * Impact : Sécurité.
   * Cible : IT, personnel sensible.
   * Criticité : 4/5.

4. **Accès tiers non encadré** : Intervenants accédant sans supervision.

   * Bonne habitude : Avoir une charte/confidentialité.
   * Mauvaise habitude : Accès libre aux prestataires.
   * Solutions : Comptes invités, réseau segmenté.
   * Impact : Juridique, opérationnel.
   * Cible : DSI, services généraux.
   * Criticité : 4/5.

---

### 💾 Supports & périphériques non sécurisés

1. **Objets connectés non sécurisés** : Caméras ou imprimantes mal protégées.

   * Bonne habitude : Changer les mots de passe par défaut.
   * Mauvaise habitude : Laisser les paramètres d'usine.
   * Solutions : Scan réseau, segmentation IoT.
   * Impact : Sécurité, confidentialité.
   * Cible : IT, bureautique.
   * Criticité : 3/5.

2. **Supports non chiffrés** : Clés/disques sans chiffrement.

   * Bonne habitude : Toujours chiffrer les supports.
   * Mauvaise habitude : Prêter des clés contenant des données critiques.
   * Solutions : VeraCrypt, chiffrement matériel.
   * Impact : Juridique, réputationnel.
   * Cible : Nomades, DSI.
   * Criticité : 4/5.

3. **Maintenance non encadrée** : Tiers accédant aux équipements.

   * Bonne habitude : Effacer données, NDA.
   * Mauvaise habitude : Laisser un technicien tout explorer.
   * Solutions : Clés invitées, partition dédiée, logs.
   * Impact : Juridique, réputationnel.
   * Cible : IT, prestataires.
   * Criticité : 3/5.

4. **Documents papier sensibles** : Informations papier visibles.

   * Bonne habitude : Ranger sous clé.
   * Mauvaise habitude : Laisser traîner des documents.
   * Solutions : Classeur sécurisé, coffre numérique.
   * Impact : Juridique, réputationnel.
   * Cible : Tous employés.
   * Criticité : 3/5.

---

### ⚠️ Pannes & manque d’anticipation

1. **Vol de matériel** : Ordinateurs ou téléphones non chiffrés volés.

   * Bonne habitude : Chiffrer et sauvegarder.
   * Mauvaise habitude : Tout stocker sans sécurité.
   * Solutions : BitLocker, FileVault, localisation/effacement.
   * Impact : Juridique, financier.
   * Cible : Tous les utilisateurs.
   * Criticité : 4/5.

2. **Conférences & coworking** : Wi-Fi public, écrans exposés.

   * Bonne habitude : VPN, désactivation partage.
   * Mauvaise habitude : Se connecter sans vérifier la sécurité.
   * Solutions : VPN, écran privé, Bluetooth désactivé.
   * Impact : Réputationnel.
   * Cible : Employés nomades.
   * Criticité : 3/5.

3. **Pas de verrouillage automatique** : Appareil accessible après inactivité.

   * Bonne habitude : Verrouillage rapide automatique.
   * Mauvaise habitude : Appareil actif sans surveillance.
   * Solutions : Politiques OS, mot de passe.
   * Impact : Sécurité, opérationnel.
   * Cible : Tous utilisateurs.
   * Criticité : 3/5.

4. **Poste public non protégé** : Traces laissées après utilisation.

   * Bonne habitude : Navigation privée, pas d’enregistrement.
   * Mauvaise habitude : Se connecter à ses comptes personnels.
   * Solutions : Session invité, déconnexion systématique.
   * Impact : Sécurité, confidentialité.
   * Cible : Utilisateurs occasionnels.
   * Criticité : 3/5.

5. **Panne sans PCA** : Blocage d’activité sans plan de secours.

   * Bonne habitude : Sauvegarde externe, plan B.
   * Mauvaise habitude : Tout stocker localement.
   * Solutions : NAS, PCA, cloud auto-sync.
   * Impact : Opérationnel.
   * Cible : DSI, métiers.
   * Criticité : 4/5.



---

Idees pedagogiques pour chaque menace :

| Menace                         | Exercice 1                                                                                     | Exercice 2                                                                                           | Exercice 3                                                                                          |
|-------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| Phishing                      | Quizz interactif avec exemples d'emails à classer : légitime ou phishing ?                    | Jeu de rôle : simuler une attaque et une réponse (email suspect à traiter en équipe).               | Démo : analyse en direct d'un email avec entête, lien et pièces jointes.                           |
| Usurpation de compte          | Atelier création de mots de passe robustes et usage d’un gestionnaire.                        | Mini-jeu : deviner le mot de passe le plus faible parmi plusieurs choix.                            | Simulation : activer 2FA sur différents services connus.                                            |
| Business Email Compromise     | Cas pratique : repérer les signaux faibles dans un email urgent et financier.                 | Jeu d’enquête : suivre le chemin d’un faux mail depuis son envoi jusqu’à sa réception.              | Démonstration : mise en place de SPF/DMARC et impact sur un mail usurpé.                           |
| Partage non sécurisé de documents | Démo : créer et partager un lien avec expiration et mot de passe.                        | Quizz : repérer les erreurs dans différents scénarios de partage.                                   | Atelier : sécuriser un dossier partagé dans un outil cloud.                                        |
| Malwares                      | Jeu : identifier les indices d’un fichier ou site malveillant.                                | Démonstration : infection contrôlée dans une sandbox.                                               | Quizz : bon ou mauvais réflexe face à une alerte antivirus ?                                       |
| Ransomwares                   | Escape game cybersécurité : reconstituer le chemin de l’infection.                            | Démo : effet d’un ransomware sur des fichiers non sauvegardés.                                      | Exercice : configurer une sauvegarde automatique hors-ligne.                                       |
| Spywares / Keyloggers         | Atelier : détecter les permissions abusives d’un logiciel.                                    | Quizz : repérer les comportements typiques d’un spyware.                                            | Démonstration : capture de frappe par un keylogger (en environnement simulé).                      |
| Adwares malveillants          | Jeu visuel : trouver les faux boutons de téléchargement sur un site piégé.                    | Quizz : extension navigateur sécurisée ou douteuse ?                                                | Exercice : nettoyer un navigateur infesté.                                                          |
| Fausse mise à jour logicielle | Démonstration : comparaison entre site officiel et site frauduleux.                           | Exercice : vérifier une signature numérique ou hash.                                                | Quizz : bon ou mauvais réflexe lors d’une mise à jour ?                                             |
| Fuite via applications tierces| Atelier : audit des applications connectées à un compte Google/Microsoft.                     | Jeu : retrouver les autorisations excessives dans une app.                                          | Simulation : effet d’une fuite via API mal sécurisée.                                              |
| Malveillance interne          | Étude de cas : incident interne et identification des failles humaines.                        | Jeu de rôle : gestion d’un départ d’employé à risque.                                               | Exercice : créer une checklist de désactivation d’accès.                                           |
| Poste non verrouillé          | Jeu : ‘Capture the flag’ dans un bureau avec postes non verrouillés.                          | Quizz : combien de secondes suffisent pour accéder à des infos sensibles ?                          | Exercice : paramétrer un verrouillage automatique sur PC/smartphone.                               |
| Shoulder surfing              | Démonstration : capture d’écran vue de côté avec et sans filtre.                              | Jeu : où se cacher dans un espace public pour protéger ses données ?                                | Quizz : bon ou mauvais placement d’écran ?                                                          |
| Keylogger matériel            | Démonstration : installation d’un keylogger physique simulé.                                  | Jeu d’identification : repérer l’intrus sur différents ports USB.                                   | Exercice : checklist d’inspection physique d’un poste sensible.                                    |
| Accès tiers non encadré       | Cas pratique : rédiger une clause de confidentialité adaptée.                                 | Simulation : filtrer les accès d’un prestataire via segmentation.                                   | Jeu : identifier les failles dans un scénario de maintenance externe.                              |
| Objets connectés non sécurisés| Quizz : identifier les objets IoT à haut risque dans un bureau.                               | Exercice : modifier un mot de passe par défaut sur une imprimante.                                  | Jeu de rôle : sécuriser un parc d’objets connectés avec budget limité.                             |
| Supports non chiffrés         | Démonstration : copier des données d’une clé non chiffrée.                                    | Atelier : chiffrer une clé USB avec VeraCrypt.                                                      | Quizz : reconnaître les bonnes pratiques de transport de données sensibles.                        |
| Maintenance non encadrée      | Simulation : audit d’un technicien tiers (ce qu’il peut voir ou non).                         | Exercice : créer un compte invité avec accès restreint.                                             | Jeu : trier les bonnes pratiques avant/pendant/après maintenance.                                  |
| Documents papier sensibles    | Quizz visuel : trouver les fuites potentielles dans un bureau.                                | Atelier : organiser un espace papier conforme RGPD.                                                 | Jeu de rôle : situation d’urgence, où ranger rapidement des documents sensibles ?                  |
| Vol de matériel               | Exercice : activer le chiffrement et la localisation sur un portable.                         | Cas pratique : scénario de vol et réaction immédiate.                                               | Quizz : identifier les erreurs de configuration sur un appareil mobile.                            |
| Conférences et coworking      | Jeu : sécuriser un environnement de travail nomade (poste, réseau, affichage).                | Démonstration : écoute réseau sur Wi-Fi public non sécurisé.                                       | Atelier : configurer un VPN et désactiver partages automatiques.                                  |
| Pas de verrouillage automatique| Quizz : combien de temps avant verrouillage idéal selon situation ?                         | Exercice : paramétrer les options de veille/écran de verrouillage.                                 | Démo : intrusion simulée sur poste resté actif.                                                    |
| Poste public non protégé      | Simulation : retrouver les traces d’un utilisateur précédent sur un PC public.                | Quizz : quels services ne jamais utiliser sur un poste partagé ?                                   | Exercice : utiliser un navigateur en mode privé et se déconnecter.                                |
| Panne sans PCA                | Atelier : créer une ébauche de PCA pour un service critique.                                  | Jeu : reconstituer les étapes de reprise d’activité après panne.                                   | Démonstration : test de restauration depuis une sauvegarde.                                        |
