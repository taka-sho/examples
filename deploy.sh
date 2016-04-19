#!/bin/bash
cd dist
git init
git add -A
msg="[ci skip] auto publish"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"
git push -f git@github.com:uncovertruth/examples.git master:gh-pages
