# Fiches par groupe de menaces cybersécurité

## Ingénierie sociale & usurpation

| Groupe                          | Menace                            | Nature du problème                                   | Bonne habitude                                                          | Mauvaise habitude                                                    | Solutions technologiques                                                       | Catégorie   |
|:--------------------------------|:----------------------------------|:-----------------------------------------------------|:------------------------------------------------------------------------|:---------------------------------------------------------------------|:-------------------------------------------------------------------------------|:------------|
| Ingénierie sociale & usurpation | Phishing                          | Tentatives d'usurpation d'identité via email ou SMS. | Toujours vérifier l'expéditeur, ne jamais cliquer sans vérifier.        | Cliquer sur les liens d'emails suspects sans réfléchir.              | Filtres antispam, solutions anti-phishing intégrées (ex. Google Safe Browsing) | nan         |
| Ingénierie sociale & usurpation | Usurpation de compte              | Vol ou piratage de comptes pro (email, CRM...).      | Utiliser 2FA et mots de passe uniques.                                  | Réutiliser le même mot de passe partout.                             | Gestionnaire de mots de passe, 2FA obligatoire.                                | nan         |
| Ingénierie sociale & usurpation | Business Email Compromise         | Usurpation ciblée de mails professionnels.           | Toujours valider toute demande bancaire ou contrat par un second canal. | Exécuter une demande urgente sans vérifier l’émetteur.               | DMARC/SPF, outils d’authentification de domaine.                               | Virtuelle   |
| Ingénierie sociale & usurpation | Partage non sécurisé de documents | Liens publics sans protection ou expiration.         | Utiliser des liens protégés par mot de passe et durée.                  | Envoyer des contrats clients par lien Google Drive sans restriction. | Outils de partage sécurisé (ex: Tresorit, Dropbox Pro).                        | Virtuelle   |

---

## Logiciels malveillants & infections

| Groupe                              | Menace                        | Nature du problème                                        | Bonne habitude                                                         | Mauvaise habitude                                                    | Solutions technologiques                                             | Catégorie   |
|:------------------------------------|:------------------------------|:----------------------------------------------------------|:-----------------------------------------------------------------------|:---------------------------------------------------------------------|:---------------------------------------------------------------------|:------------|
| Logiciels malveillants & infections | Malwares                      | Logiciels nuisibles installés à votre insu.               | Mettre à jour ses logiciels et éviter les téléchargements non sûrs.    | Télécharger des logiciels crackés ou depuis des sites non officiels. | Antivirus/antimalwares, sandboxing, pare-feux.                       | nan         |
| Logiciels malveillants & infections | Ransomwares                   | Chiffrement de fichiers avec demande de rançon.           | Sauvegardes régulières hors-ligne, vigilance sur les pièces jointes.   | Ouvrir des fichiers ZIP ou EXE inconnus.                             | Outils de sauvegarde automatisée, détection comportementale.         | nan         |
| Logiciels malveillants & infections | Spywares / Keyloggers         | Logiciels espions captant frappes ou données.             | Ne pas installer de logiciels non vérifiés, utiliser un compte limité. | Installer tout logiciel gratuit sans lire les permissions.           | Antispyware, permissions restreintes, audit des logiciels installés. | nan         |
| Logiciels malveillants & infections | Adwares malveillants          | Publicités invasives cachées dans des logiciels gratuits. | Utiliser des versions pro ou open-source vérifiées.                    | Installer des extensions douteuses dans son navigateur.              | Bloqueurs de pub, pare-feux DNS.                                     | nan         |
| Logiciels malveillants & infections | Fausse mise à jour logicielle | Mise à jour d’un logiciel via une source corrompue.       | Télécharger uniquement depuis les éditeurs officiels.                  | Chercher une version modifiée ou “optimisée” d’un logiciel.          | Hash de vérification, signature numérique, MDM.                      | Virtuelle   |

---

## Failles techniques & piratage réseau

| Groupe                               | Menace                         | Nature du problème                                          | Bonne habitude                                   | Mauvaise habitude                                        | Solutions technologiques                                        | Catégorie   |
|:-------------------------------------|:-------------------------------|:------------------------------------------------------------|:-------------------------------------------------|:---------------------------------------------------------|:----------------------------------------------------------------|:------------|
| Failles techniques & piratage réseau | Fuite via applications tierces | Applications connectées sans contrôle exposent des données. | Vérifier les autorisations et droits d’accès.    | Connecter tous ses outils sans revoir les permissions.   | Tableau de bord sécurité Google/Microsoft, audit des accès API. | Virtuelle   |
| Failles techniques & piratage réseau | Malveillance interne           | Ex-employé·e ou collaborateur utilisant ses anciens accès.  | Désactiver immédiatement les accès après départ. | Laisser des comptes actifs après une rupture de contrat. | Gestion centralisée des droits, journalisation d’accès.         | Virtuelle   |

---

## Accès non autorisé & espionnage direct

| Groupe                                 | Menace                  | Nature du problème                                 | Bonne habitude                                       | Mauvaise habitude                                          | Solutions technologiques                                | Catégorie   |
|:---------------------------------------|:------------------------|:---------------------------------------------------|:-----------------------------------------------------|:-----------------------------------------------------------|:--------------------------------------------------------|:------------|
| Accès non autorisé & espionnage direct | Poste non verrouillé    | Session restée ouverte, accessible à tous.         | Verrouiller son poste systématiquement.              | Laisser sa session ouverte au bureau ou en public.         | Verrouillage auto, badge ou empreinte.                  | nan         |
| Accès non autorisé & espionnage direct | Shoulder surfing        | Lecture par-dessus l'épaule dans lieux publics.    | Utiliser un filtre de confidentialité.               | Afficher des données sensibles sans précaution.            | Filtres écran, positionnement stratégique.              | nan         |
| Accès non autorisé & espionnage direct | Keylogger matériel      | Matériel placé sur clavier ou port USB.            | Inspecter régulièrement les connectiques.            | Laisser accès libre à ses périphériques.                   | Boîtiers sécurisés, alerte de connectique non reconnue. | nan         |
| Accès non autorisé & espionnage direct | Accès tiers non encadré | Prestataires non encadrés accédant à vos systèmes. | Établir une charte ou un contrat de confidentialité. | Laisser un prestataire naviguer librement sur vos données. | Comptes invités, segmentation réseau.                   | Physique    |

---

## Supports & périphériques non sécurisés

| Groupe                                 | Menace                         | Nature du problème                                         | Bonne habitude                                                  | Mauvaise habitude                                       | Solutions technologiques                               | Catégorie   |
|:---------------------------------------|:-------------------------------|:-----------------------------------------------------------|:----------------------------------------------------------------|:--------------------------------------------------------|:-------------------------------------------------------|:------------|
| Supports & périphériques non sécurisés | Objets connectés non sécurisés | Caméras, imprimantes accessibles sans restriction.         | Changer les mots de passe par défaut.                           | Utiliser les réglages par défaut.                       | Scan réseau, segmentation IoT.                         | nan         |
| Supports & périphériques non sécurisés | Supports non chiffrés          | Disques et clés contenant données sensibles non protégées. | Toujours chiffrer les supports mobiles.                         | Prêter une clé contenant des infos critiques.           | Veracrypt, chiffrement matériel.                       | nan         |
| Supports & périphériques non sécurisés | Maintenance non encadrée       | Tiers accède à vos équipements sans cadre légal.           | Contrats de confidentialité, effacement temporaire des données. | Donner accès complet à un technicien sans vérification. | Clés invitées, partition de maintenance, logs d’accès. | nan         |
| Supports & périphériques non sécurisés | Documents papier sensibles     | Contrats, données RH ou fiscales laissés visibles.         | Classer dans un meuble verrouillé ou espace confidentiel.       | Laisser traîner des papiers sensibles sur son bureau.   | Coffre numérique, classeur sécurisé.                   | Physique    |

---

## Pannes & manque d’anticipation

| Groupe                         | Menace                   | Nature du problème                                  | Bonne habitude                                  | Mauvaise habitude                                   | Solutions technologiques                                                 | Catégorie   |
|:-------------------------------|:-------------------------|:----------------------------------------------------|:------------------------------------------------|:----------------------------------------------------|:-------------------------------------------------------------------------|:------------|
| Pannes & manque d’anticipation | Vol de matériel          | Perte ou vol d'ordinateur ou téléphone non chiffré. | Chiffrer les disques, sauvegarder les données.  | Stocker toutes les données sensibles sans sécurité. | BitLocker, FileVault, services de localisation et effacement à distance. | nan         |
| Pannes & manque d’anticipation | Conférences et coworking | Wi-Fi ou écrans exposés à des inconnus.             | Utiliser VPN et désactiver les partages réseau. | Se connecter au Wi-Fi sans vérifier sa sécurité.    | VPN pro, écran privé, désactivation du Bluetooth.                        | Physique    |
