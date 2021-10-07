#!/bin/bash

# Define server infomation
host='10.99.99.187';
port=37301;
loc='/var/backup/mongodb/sit/l2';

# Load auth
if [ -f .sit.env ]; then
  export $(echo $(cat .sit.env | sed 's/#.*//g'| xargs -d '\r\n') | envsubst)
fi

# Run backup
../../scripts/database-backup/run-backup.sh $host $port $user $pass $loc 2
