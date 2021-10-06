#!/bin/bash

# Define server infomation
host='10.10.50.14';
port=27104;
user='lmn_backup';
pass='LmnBackup';
loc='/var/backup/mongodb/l1p';

# Run backup
./run-backup.sh $host $port $user $pass $loc 2
