# PROJET_CONTEXTE — Portfolio (Keamder)

> Source de vérité absolue. Lire EN ENTIER avant toute action.
> Toute décision qui contredit ce fichier est interdite.
> Si une demande sort de ce cadre : poser UNE question avant d'agir.

**Version** : 1.0
**Famille** : Perso
**Dernière mise à jour** : 2026-08-06

---

## 1. IDENTITÉ

| Champ | Valeur |
|---|---|
| Nom | Portfolio Keamder |
| Famille | Perso |
| Type | Site statique |
| Objectif (1 phrase) | Portfolio personnel de Kinder présentant ses réalisations (sites internet, jeu Android "ClipFactory Empire"). |
| Statut | Construit — "Final version 1.17" au dernier commit, semble terminé |
| Utilisateurs | Visiteurs du portfolio |
| Dernière mise à jour | Dernier commit git : "Ajout .gitignore et profil développeur" |

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
└── PROFIL_DEVELOPPEUR_KEAMDER.md   ← profil généré automatiquement, pas un document de projet
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
| | (aucune décision figée documentée) | |

---

## 7. FICHIERS DE DOCUMENTATION

| Fichier | Statut | Note |
|---|---|---|
| PROJET_CONTEXTE.md | ✅ créé le 2026-08-06 (absent avant) | |
| CHANGELOG.md | ❌ absent — l'historique vit dans les messages de commit git ("Final version 1.x") | |
| PROFIL_DEVELOPPEUR_KEAMDER.md | Présent — généré automatiquement à partir de ce projet, doublon conceptuel avec le profil Kinder global tenu par Claude Code | |

---

## 8. SESSION EN COURS

**Graphify :** ☐ Absent → dispensable vu la taille (3 fichiers de code)
**Objectif de la session :** Audit de reprise (doc uniquement)
**Résultat fin de session :** PROJET_CONTEXTE.md créé

---

## 9. BACKLOG

1. Confirmer avec Kinder si ce portfolio est toujours d'actualité (dernier commit ancien, "Final version 1.17" suggère un projet clos) — sinon, le marquer explicitement comme archivé.
2. `PROFIL_DEVELOPPEUR_KEAMDER.md` fait doublon avec le profil Kinder global tenu par Claude Code (`~/.claude/projects/C--DEV/memory/user_kinder.md`) — à archiver ici, ce n'est pas un document de projet.
3. Pas de `CHANGELOG.md` — dispensable vu la taille du projet, l'historique des commits git suffit.
