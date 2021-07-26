#!/bin/sh

echo  "Stoping the  node-server-public-design" && 
sudo systemctl stop node-server-public-design &&
echo  "Starting the  nodejsservice" && 
sudo systemctl start node-server-public-design &&
echo "done"

 
