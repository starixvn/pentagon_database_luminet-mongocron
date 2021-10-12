#!/bin/bash

# Define server infomation
host='L3bLocal/10.18.200.80:47102';
loc='/var/backup/mongodb/l3b';

# Load auth
if [ -f .local.env ]; then
  export $(echo $(cat .local.env | sed 's/#.*//g'| xargs -d '\r\n') | envsubst)
fi

# Run backup
../../scripts/database-backup/run-backup.sh $host $user $pass $loc 2
