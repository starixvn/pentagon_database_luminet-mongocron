#!/bin/bash

# Define server infomation
host='L2_SabaMain/10.99.99.53:37101,10.99.99.54:37102,10.99.99.187:37103';
prefix='SC2';
loc='/var/backup/mongodb/pro/l2';

# Load auth
if [ -f .l2.env ]; then
  export $(echo $(cat .l2.env | sed 's/#.*//g'| xargs -d '\r\n') | envsubst)
fi

# Run backup
../../scripts/database-backup/run-backup.sh $host $user $pass $prefix $loc
