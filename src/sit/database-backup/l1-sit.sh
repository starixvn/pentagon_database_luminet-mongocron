#!/bin/bash

# Define server infomation
host='SabaSIT/10.99.99.187:27301';
prefix='L1';
loc='/var/backup/mongodb/sit/l1';

# Load auth
if [ -f .sit.env ]; then
  export $(echo $(cat .sit.env | sed 's/#.*//g'| xargs -d '\r\n') | envsubst)
fi

# Run backup
../../scripts/database-backup/run-backup.sh $host $user $pass $prefix $loc 2
