#!/bin/bash

# Define server infomation
host='10.10.50.13';
port=27101;
user='lmn_backup';
pass='LmnBackup';
loc='/var/backup/mongodb/l1';

# Run backup
./run-backup.sh
