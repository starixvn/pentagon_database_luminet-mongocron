#!/bin/bash

# Define server infomation
host='SabaMain/10.99.99.54:27101,10.99.99.53:27102,10.99.99.187:27103';
prefix='SC1';
loc='/var/backup/mongodb/pro/l1';

# Load auth
if [ -f .l1.env ]; then
  export $(echo $(cat .l1.env | sed 's/#.*//g'| xargs -d '\r\n') | envsubst)
fi

# Run backup
../../scripts/database-backup/run-backup.sh $host $user $pass $prefix $loc
