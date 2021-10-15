#!/bin/bash

# Define server infomation
host='L2Local/10.10.50.13:37101';
prefix='L2';
loc='/var/backup/mongodb/l2';

# Load auth
if [ -f .local.env ]; then
  export $(echo $(cat .local.env | sed 's/#.*//g'| xargs -d '\r\n') | envsubst)
fi

# Run backup
../../scripts/database-backup/run-backup.sh $host $user $pass $prefix $loc 2
