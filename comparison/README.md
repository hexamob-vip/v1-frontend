# Comparaison HEXAMOB original vs v1-frontend

Screenshots pris le 18/07/2026 (localhost:8080 vs localhost:3000).

## Hero (haut de page)

| Original | Next.js v1 |
|----------|------------|
| `hexamob-original-hero-top.png` | `v1-nextjs-hero-top-v2.png` |

## Section services + camion 3D (après scroll)

| Original | Next.js v1 (après fix scroll + Three r135) |
|----------|---------------------------------------------|
| `hexamob-original-after-scroll-v2.png` | `v1-nextjs-after-scroll-v4.png` |

## Écarts constatés

1. **Modèle 3D** — visible à droite sur l'original au scroll ; absent sur v1 (erreur Draco corrigée en reprenant Three.js r135 du thème).
2. **Scroll "Scroll Down"** — ne déclenchait pas le scroll fluide (fix `scrollIntoView` en cours).
3. **Header** — nav passe en bleu au scroll sur l'original ; timing/classes GSAP à affiner.
4. **Numéros "01/02/03"** — watermark géant derrière le texte services, mal positionné sur v1.
5. **Vidéo hero Vimeo** — présente mais rendu/opacity différent.
6. **Texte intro `#uno_text`** — chevauchement blanc sur fond clair en bas de hero sur v1.

## Lancer la comparaison

```bash
# Terminal 1 — original
cd HEXAMOB/hexamob-homepage && python3 -m http.server 8080

# Terminal 2 — next
cd v1-frontend && npm run dev
```
