#!/bin/bash

# Define server infomation
host='10.10.50.14';
port=27105;
loc='/var/backup/mongodb/l1pp';

# Load auth
if [ -f .local.env ]; then
  export $(echo $(cat .local.env | sed 's/#.*//g'| xargs -d '\r\n') | envsubst)
fi

# Run backup
../../scripts/database-backup/run-backup.sh $host $port $user $pass $loc 2
