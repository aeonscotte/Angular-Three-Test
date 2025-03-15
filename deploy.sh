#!/bin/bash

# Exit immediately if a command fails
set -e

# Build the project
ng build

# Define the path to the second repository
DEPLOY_TARGET="../aeonscotte.github.io"

# Copy the build to the second repository
cp -r dist/angular-three-test/browser/* "$DEPLOY_TARGET"

# Move to the second repository
cd "$DEPLOY_TARGET"

# Check if there are changes
if ! git diff --quiet; then
  git add .
  git commit -m "Deploy latest build"
  git push
else
  echo "No changes to commit."
fi