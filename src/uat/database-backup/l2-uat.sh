#!/bin/bash

# Define server infomation
host='SabaL2UAT/10.99.99.187:37201';
prefix='L2';
loc='/var/backup/mongodb/uat/l2';

# Load auth
if [ -f .uat.env ]; then
  export $(echo $(cat .uat.env | sed 's/#.*//g'| xargs -d '\r\n') | envsubst)
fi

# Run backup
../../scripts/database-backup/run-backup.sh $host $user $pass $prefix $loc 2
