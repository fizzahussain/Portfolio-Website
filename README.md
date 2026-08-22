# FIZZA//PLAYABLE PORTFOLIO v12

A dependency-free, Vercel-ready portfolio built as a navigable retro game / old-OS world.

## What changed in v12

- Uses the new supplied pixel avatar as the playable character
- Player world is now the navigation hub with seven clear destinations
- Removed the live-project strip from the main hero
- Added a complete 14-project Quest Directory with filters and search
- Every project detail links to its GitHub README for deeper technical context
- Live demo buttons include a clear deployment disclaimer
- Islamabad House Price Prediction and PUBG analysis include both Live Demo and GitHub README actions
- Rebuilt Experience + Leadership into aligned, matching windows instead of scattered sticky notes
- Keeps RAG and Personal Finance video demos
- Keeps the verified art archive and removes unused incorrect wall-art crop files

## Navigation

In `PLAYER_WORLD.EXE`:

- `WASD` or arrow keys move the avatar
- click inside the world to walk
- walk near a location and press `Enter`
- or click any location directly

The HUD and `WORLD_MAP.EXE` remain available at all times, so the game interaction never blocks normal navigation.

## Projects

The Quest Directory contains all 14 projects in one searchable list. Use category filters or type a project name.

Live deployments are labeled as demos. The portfolio shows this disclaimer:

> Live demos are adapted web versions created for demonstration and deployment purposes and may differ from the original project implementation.

For architecture, implementation notes, setup, limitations, algorithms, and deeper technical details, use the `READ GITHUB README` button on each project.

## Run locally

No npm install is required.

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

## Deploy

This is a static site and can be deployed directly to Vercel. See `DEPLOY.md`.
