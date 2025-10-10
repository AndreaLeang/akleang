#!/bin/bash

# Build and deploy to GitHub Pages
echo "Building React application..."
npm run build

echo "Deploying to GitHub Pages..."
npm run deploy

echo "Deployment complete!"
