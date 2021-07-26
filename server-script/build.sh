#!/bin/sh



echo "reset --hard HEAD  main" &&
git reset --hard HEAD  && 


echo  "Git Pull source branche main" && 
sudo git pull origin main &&



echo "NPM install" &&
sudo npm install ||  echo "Skip Npm install" &&



echo "building the application for Envirement main" &&
sudo npm run build-staging &&


echo  "Pushing change to main" && 

git add .  &&
git commit -m "building: $date"  ||  echo "Skip Commit"  &&
git push origin main  &&


echo "done"


