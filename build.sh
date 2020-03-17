#!/usr/bin/env bash
node index.js
git add -A
git commit -m 'generate website on `date +%y%m%d`'
git push
