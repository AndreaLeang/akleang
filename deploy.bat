@echo off
echo Building React application...
call npm run build

echo Deploying to GitHub Pages...
call npm run deploy

echo Deployment complete!
pause
