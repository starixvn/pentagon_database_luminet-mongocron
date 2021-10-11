#!/bin/bash

# Define server infomation
host='L3_SabaMain/10.99.99.53:47101,10.99.99.54:47102,10.99.99.187:47103';
loc='/var/backup/mongodb/pro/l3';

# Load auth
if [ -f .l3.env ]; then
  export $(echo $(cat .l3.env | sed 's/#.*//g'| xargs -d '\r\n') | envsubst)
fi

# Run backup
../../scripts/database-backup/run-backup.sh $host $user $pass $loc
