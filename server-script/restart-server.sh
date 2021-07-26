#!/bin/sh

echo  "Stoping the  node-server-public" && 
sudo systemctl stop node-server-public &&
echo  "Starting the  node-server-public" && 
sudo systemctl start node-server-public &&
echo "done"


