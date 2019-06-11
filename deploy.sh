#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build the project.
rm -fr dist/iotajapan/*
npm run build

# Go To Public folder
cd dist/iotajapan
# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin HEAD:master

# Come Back up to the Project Root
cd ../..

git submodule update
git add .
git commit -m 'update'
git push origin master
