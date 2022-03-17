#!/bin/bash

# Define server infomation
host='L1pppLocal/10.10.50.14:27106';
prefix='L1ppp';
loc='/var/backup/mongodb/l1ppp';

# Load auth
if [ -f .local.env ]; then
  export $(echo $(cat .local.env | sed 's/#.*//g'| xargs -d '\r\n') | envsubst)
fi

# Run backup
../../scripts/database-backup/run-backup.sh $host $user $pass $prefix $loc 2
