#!/bin/bash

# Define server infomation
host='L1Local/10.10.50.13:27101';
loc='/var/backup/mongodb/l1';

# Load auth
if [ -f .local.env ]; then
  export $(echo $(cat .local.env | sed 's/#.*//g'| xargs -d '\r\n') | envsubst)
fi

# Run backup
../../scripts/database-backup/run-backup.sh $host $user $pass $loc 2
