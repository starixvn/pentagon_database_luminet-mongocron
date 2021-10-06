#!/bin/bash

# Define server infomation
host='10.18.200.80';
port=47101;
user='lmn_backup';
pass='LmnBackup';
loc='/var/backup/mongodb/l3a';

# Run backup
./run-backup.sh $host $port $user $pass $loc 2
