# ux-lead-me-dev

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Deploy to gh pages

```
#!/usr/bin/env bash
rm -rf dist
npm run build
cd dist
git init
git add .
git commit -m "Deploy to gh-pages"
git remote add origin https://github.com/sweco-dkbesr/ux-lead-me.git
git push --force origin master:gh-pages
```
