#!/bin/bash

# Define server infomation
host='10.10.50.14';
port=27105;
loc='/var/backup/mongodb/l1pp';

# Load auth
set -o allexport; source .local.env; set +o allexport;

# Run backup
../../scripts/database-backup/run-backup.sh $host $port $user $pass $loc 2
