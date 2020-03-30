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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```
rm -rf dist && npm run build && \
cd dist && git init && git add . \
&& git commit -m "Initial commit" && \
git remote add origin git@github.com:Bloomca/equalizer.git && \
git push --force origin master:gh-pages
```
