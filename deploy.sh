rm -rf dist && npm run build && \
cd dist && git init && git add . \
&& git commit -m "Initial commit" && \
git remote add origin https://github.com/sweco-dkbesr/ux-lead-me.git && \
git push --force origin master:gh-pages
