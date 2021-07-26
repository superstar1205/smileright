#!/bin/sh

cp "/home/ubuntu/solution/design/public/main/server-script/node-server-public-design.service" "/lib/systemd/system/" &&
systemctl daemon-reload
