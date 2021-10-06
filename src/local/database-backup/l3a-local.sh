#!/bin/bash

# Define server infomation
host='10.18.200.80';
port=47101;
loc='/var/backup/mongodb/l3a';

# Load auth
set -o allexport; source .local.env; set +o allexport;

# Run backup
../../scripts/database-backup/run-backup.sh $host $port $user $pass $loc 2
