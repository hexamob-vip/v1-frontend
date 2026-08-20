# HEXAMOB v1-frontend

Migration Next.js + Tailwind du site HEXAMOB (page d'accueil).

## Lancer

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4** — couleurs brand dans `src/app/globals.css` (`rojo`, `azul`, `gris`)
- **GSAP + ScrollTrigger** — animations scroll (portées depuis le thème WordPress)
- **Three.js** — modèle 3D Volvo (`public/models/Volvo FH_opt.glb`)
- **smooth-scrollbar** — scroll fluide
- **Vimeo** — vidéo hero (nécessite Internet)

## Structure

```
src/
  app/                    # layout + page
  components/
    layout/               # Header, Footer, Logo, LanguageSwitcher
    home/                 # HomePage + sections
    three/                # LexusCanvas (Three.js)
  lib/hexamob/
    navigation.ts         # liens menu/footer
    animations/           # GSAP, smooth scroll
public/
  assets/                 # fonts, images, seals
  models/                 # GLB camion
  textures/               # HDR environnement
  draco/                  # décodeur Draco
```

## Couleurs Tailwind

Définies dans `@theme inline` (`globals.css`) :

| Token   | Hex       |
|---------|-----------|
| `rojo`  | `#f32735` |
| `azul`  | `#011c4d` |
| `gris`  | `#d5d5d5` |
| `page`  | `#f2f2f2` |

Usage : `className="bg-azul text-rojo"`

## Notes

- Le modèle 3D apparaît au scroll (comme sur le site original).
- Les liens internes pointent encore vers hexamob.com (autres pages non migrées).
- Les plugins GSAP Club (SplitText, DrawSVG) proviennent du thème original.

