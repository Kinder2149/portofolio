# PROJET_CONTEXTE — Portfolio (Keamder)

> Source de vérité absolue. Lire EN ENTIER avant toute action.
> Toute décision qui contredit ce fichier est interdite.
> Si une demande sort de ce cadre : poser UNE question avant d'agir.

**Famille** : Perso
**Dernière mise à jour** : 2026-09-07

---

## STATUT — fait foi pour les statuts (lu par Pilotage)

```
STATUT DU PROJET : En production
MISSION : Remise à jour pour la mise en production (2026-09-07) — Close
MISSION : Capture de Vault Read et rangement du doublon (test de la méthode v2, 2026-11-06) — Plan prêt (plan et 4 critères validés par Kinder le 2026-11-06)
  Étape : 1 — Archiver le doublon du profil — Planifiée — critère : le fichier PROFIL_DEVELOPPEUR_KEAMDER.md n'est plus à la racine du portfolio, il est dans _archives/ avec son contenu intact, et les sections 3 et 7 de ce PROJET_CONTEXTE ne le donnent plus comme présent à la racine
IDÉES PARQUÉES :
  (aucune — les deux idées parquées sont devenues la mission ci-dessus)
```
*(Bloc ajouté le 2026-10-30, validé par Kinder.)*

---

## 1. IDENTITÉ

| Champ | Valeur |
|---|---|
| Nom | Portfolio Keamder |
| Famille | Perso |
| Type | Site statique |
| Objectif (1 phrase) | Portfolio personnel de Kinder présentant ses réalisations (architecture IA, applications & jeux, missions clientes). |
| Statut | Actif — remis à jour le 2026-09-07 pour mise en production (ajout Vault Watch/Vault Read, retrait des projets non pertinents, confirmé après audit croisé des projets sources) |
| Utilisateurs | Visiteurs du portfolio, recruteurs |
| Dernière mise à jour | Session du 2026-09-07 : contenu revu après audit + graphify sur les projets sources (Vault Read, FlashCard_Memory, escape-room, tourbillon-de-la-vigne, Restaurant_Pointe_de_Rêve, TerraNova) |

---

## 2. STACK TECHNIQUE

**Frontend :** HTML/CSS/JS vanilla, un seul fichier par type (`index.html`, `style.css`, `script.js`).

**Backend :** Aucun.

**Base de données :** Aucune.

**Services externes :** Aucun identifié à l'inspection rapide.

---

## 3. ARCHITECTURE

```
portofolio/
├── index.html
├── style.css
├── script.js
├── assets/
└── _archives/
    └── PROFIL_DEVELOPPEUR_KEAMDER.md   ← archivé : profil généré automatiquement, pas un document de projet
```

**Services actifs :** 1 (site unique statique) / 20 maximum

---

## 4. FONCTIONNALITÉS

**✅ Stables**
- Page portfolio avec sections (sites internet, jeu Android)
- Présentation "ClipFactory Empire"

**🚧 En cours**
- (aucune, projet semble terminé — "Final version 1.17")

**❌ Bugs connus**
- Aucun constaté (pas de test fonctionnel dans cet audit doc-only)

**🔒 Hors scope**
- (non documenté)

---

## 5. RÈGLES SPÉCIFIQUES AU PROJET

- Aucune règle spécifique documentée avant cet audit.

---

## 6. DÉCISIONS FIGÉES

| Date | Décision | Raison |
|---|---|---|
| 2026-11-06 | **Critère de fin de la mission « Capture de Vault Read et rangement du doublon »** (écrit et validé par Kinder) : « Sur la page du portfolio ouverte dans un navigateur, la carte Vault Read affiche une vraie capture de l'application (écran bibliothèque, données de démonstration) à la place de l'icône. Le doublon PROFIL_DEVELOPPEUR_KEAMDER.md n'est plus à la racine du portfolio. » | Mission réelle de test de la méthode v2, issue des deux idées parquées du projet |
| 2026-11-06 | La capture utilise des données de démonstration, jamais les vraies lectures de Kinder. Aucune mise en production ; la mission s'arrête à l'envoi de la branche de travail. | Le portfolio est public ; la fusion et la mise en ligne restent à la décision de Kinder |

---

## 7. FICHIERS DE DOCUMENTATION

| Fichier | Statut | Note |
|---|---|---|
| PROJET_CONTEXTE.md | ✅ créé le 2026-08-06 (absent avant) | |
| CHANGELOG.md | ✅ créé le 2026-11-06 pour la mission de test de la méthode v2 (le gardien d'étape en a besoin) | |
| PROFIL_DEVELOPPEUR_KEAMDER.md | Archivé dans `_archives/` (n'est plus à la racine) — généré automatiquement à partir de ce projet, doublon conceptuel avec le profil Kinder global tenu par Claude Code | |

---

## 8. SESSION EN COURS

**Graphify :** ☐ Absent → dispensable vu la taille (3 fichiers de code)
**Objectif de la session :** Audit de reprise (doc uniquement)
**Résultat fin de session :** PROJET_CONTEXTE.md créé

---

## 9. BACKLOG

1. ~~Confirmer avec Kinder si ce portfolio est toujours d'actualité~~ — **Résolu 2026-09-07** : toujours d'actualité, remis à jour pour envoi en production.
2. `PROFIL_DEVELOPPEUR_KEAMDER.md` fait doublon avec le profil Kinder global tenu par Claude Code (`~/.claude/projects/V--DEV/memory/user_kinder.md`) — à archiver ici, ce n'est pas un document de projet.
3. Pas de `CHANGELOG.md` — dispensable vu la taille du projet, l'historique des commits git suffit.
4. Vault Read n'a pas de vraie capture d'écran disponible dans son projet source (seulement des icônes) — carte publiée sans image (fallback icône), à mettre à jour si une capture devient disponible. → **Devenu la mission du 2026-11-06 ci-dessous.**

### Plan de la mission « Capture de Vault Read et rangement du doublon » (2026-11-06) — validé par Kinder le 2026-11-06

Critère de fin de mission : voir section 6, décision du 2026-11-06.

1. **Étape 1 — Archiver le doublon du profil**
   *Critère :* le fichier PROFIL_DEVELOPPEUR_KEAMDER.md n'est plus à la racine du portfolio ; il est dans `_archives/`, contenu intact, et la section 3 (architecture) et la section 7 (documentation) de ce PROJET_CONTEXTE ne le donnent plus comme présent à la racine.

2. **Étape 2 — Capture de l'écran bibliothèque de Vault Read**
   *Critère :* le fichier `assets/projects/vault-read.png` est une vraie capture de l'écran bibliothèque de Vault Read, avec des livres de démonstration (aucune donnée personnelle de Kinder), lisible et au même format que les autres images du dossier `assets/projects/`.

3. **Étape 3 — La carte Vault Read du portfolio affiche la capture**
   *Critère :* page `index.html` ouverte dans un navigateur : la carte Vault Read montre la capture à la place de l'icône, sans image cassée et sans autre carte modifiée.

4. **Étape 4 — Clôture** *(dernière étape du plan)*
   *Critère :* vérification finale par une autre IA, sur Sonnet, dans une conversation neuve : le critère de fin de mission est constaté à l'écran ; PROJET_CONTEXTE et CHANGELOG sont à jour ; la branche de travail est envoyée en ligne, sans fusion dans la branche principale.
