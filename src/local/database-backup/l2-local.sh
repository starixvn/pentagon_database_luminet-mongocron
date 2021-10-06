#!/bin/bash

# Define server infomation
host='10.10.50.13';
port=37101;
user='lmn_backup';
pass='LmnBackup';
loc='/var/backup/mongodb/l2';

# Run backup
./run-backup.sh $host $port $user $pass $loc 3
