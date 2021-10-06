#!/bin/bash

# Define server infomation
host='10.10.50.13';
port=37104;
loc='/var/backup/mongodb/l2p';

# Load auth
if [ -f .local.env ]; then
  export $(echo $(cat .local.env | sed 's/#.*//g'| xargs) | envsubst)
fi

# Run backup
../../scripts/database-backup/run-backup.sh $host $port $user $pass $loc 2
