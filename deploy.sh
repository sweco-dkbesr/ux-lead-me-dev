#!/usr/bin/env bash
rm -rf dist
npm run build
cd dist
git init
git add .
git commit -m "Deploy to gh-pages"
git remote add origin https://github.com/sweco-dkbesr/ux-lead-me.git
git push --force origin master:gh-pages
echo "ux-lead.me" >> CNAME
