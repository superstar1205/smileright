#!/bin/sh
echo  "Starting the node-server-public" && 
export MASTER_NAME=0&& export MASTER_PASS=0&& export EP_SERVER=0&& 
sudo  nohup  npm --prefix '/home/ubuntu/solution/design/public/main/' run  start-staging  &
