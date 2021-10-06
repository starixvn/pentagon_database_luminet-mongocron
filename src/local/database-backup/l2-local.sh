#!/bin/bash

# Define server infomation
host='10.10.50.13';
port=37101;
loc='/var/backup/mongodb/l2';

# Load auth
set -o allexport; source .local.env; set +o allexport;

# Run backup
../../scripts/database-backup/run-backup.sh $host $port $user $pass $loc 2
