#!/bin/bash

# Define server infomation
host='10.10.50.13';
port=37104;
user='lmn_backup';
pass='LmnBackup';
loc='/var/backup/mongodb/l2p';

# Run backup
./run-backup.sh
