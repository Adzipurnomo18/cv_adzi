# Adzi Purnomo Portfolio

React + Vite portfolio deployed to GitHub Pages from the `docs` folder.

## Local Development

```bash
npm install
npm run dev
```

## Update GitHub Pages

Run these commands after making portfolio changes:

```bash
npm run build:docs
git add .
git commit -m "Update portfolio"
git push origin main
```

GitHub Pages is configured to deploy from:

```text
Branch: main
Folder: /docs
```
