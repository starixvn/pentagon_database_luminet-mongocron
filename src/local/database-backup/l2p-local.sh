#!/bin/bash

# Define server infomation
host='L2pLocal/10.10.50.13:37104';
prefix='L2p';
loc='/var/backup/mongodb/l2p';

# Load auth
if [ -f .local.env ]; then
  export $(echo $(cat .local.env | sed 's/#.*//g'| xargs -d '\r\n') | envsubst)
fi

# Run backup
../../scripts/database-backup/run-backup.sh $host $user $pass $prefix $loc 2
