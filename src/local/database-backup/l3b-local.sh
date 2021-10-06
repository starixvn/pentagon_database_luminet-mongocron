#!/bin/bash

# Define server infomation
host='10.18.200.80';
port=47102;
user='lmn_backup';
pass='LmnBackup';
loc='/var/backup/mongodb/l3b';

# Run backup
./run-backup.sh
