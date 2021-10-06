#!/bin/bash

# Define server infomation
host='10.10.50.13';
port=27101;
user='lmn_backup';
pass='LmnBackup';
loc='/var/backup/mongodb/l1';

# Run backup
../../scripts/database-backup/run-backup.sh $host $port $user $pass $loc 2
