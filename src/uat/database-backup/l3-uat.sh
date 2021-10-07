#!/bin/bash

# Define server infomation
host='10.99.99.187';
port=47201;
loc='/var/backup/mongodb/uat/l3';

# Load auth
if [ -f .uat.env ]; then
  export $(echo $(cat .uat.env | sed 's/#.*//g'| xargs -d '\r\n') | envsubst)
fi

# Run backup
../../scripts/database-backup/run-backup.sh $host $port $user $pass $loc 2
