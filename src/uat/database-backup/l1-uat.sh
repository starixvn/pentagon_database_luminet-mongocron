#!/bin/bash

# Define server infomation
host='SabaUAT/10.99.99.187:27201';
loc='/var/backup/mongodb/uat/l1';

# Load auth
if [ -f .uat.env ]; then
  export $(echo $(cat .uat.env | sed 's/#.*//g'| xargs -d '\r\n') | envsubst)
fi

# Run backup
../../scripts/database-backup/run-backup.sh $host $user $pass $loc 2
