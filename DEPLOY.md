# Deploy to Vercel

This portfolio is a static HTML/CSS/JavaScript site and has no build dependencies.

## Option 1: GitHub + Vercel

1. Push the folder contents to a GitHub repository
2. In Vercel, choose **Add New > Project**
3. Import the repository
4. Framework preset: **Other**
5. Build command: leave empty
6. Output directory: leave empty / repository root
7. Deploy

`vercel.json` is already included.

## Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts and use the current folder as the project root.

## Before final public launch

- verify every live-demo URL
- keep project GitHub repositories public if you want README links to work for recruiters
- test keyboard navigation, project search, demo video playback, and mobile layout
