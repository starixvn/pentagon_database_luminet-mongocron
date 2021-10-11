#!/bin/bash

# Get parameters
host=$1;
user=$2;
pass=$3;
loc=$4;
limit=$5;

# Prepare time related variables
date=$(date +'%Y%m%d-%H%M00');
min=$(date +'%M');

# Navigate to the backup folder
if [ ! -d "$loc" ]
then
    mkdir $loc -p;
fi
cd $loc;


# First, run the backup.
# The backup file format is 'databaseName-YYYYMMDD-hhmm00.zip.bak'

# Backup minigame database - twice per hour
mongodump   --host=$host \
            --username=$user \
            --password=$pass \
            --authenticationDatabase='admin' \
            --db='minigame' \
            --gzip \
            --archive="minigame-$date.zip.bak"

# Backup log database - once per hour
if [ "$min" -lt "10" ]
then
    mongodump   --host=$host \
                --username=$user \
                --password=$pass \
                --authenticationDatabase='admin' \
                --db='log' \
                --gzip \
                --archive="log-$date.zip.bak"
fi

# Second, clean up old backup files
#   - We will keep full files for 1 day
#   - After 1 day, we will keep 1 backup file per database per hour
#   - After 3 days, we will only keep 1 backup file per database per 3 hours
#   - No backup older than 7 days will be kept

for i in {2..3}
do
  find . -name "*$(date +%Y%m%d -d "$i days ago")-[0-9][0-9][1-9][0-9]00.zip.bak" -exec rm {} +;
done

for i in {4..7}
do
  find . -name "*$(date +%Y%m%d -d "$i days ago")-[0-9][0-9][1-9][0-9]00.zip.bak" -exec rm {} +;
  find . -name "*$(date +%Y%m%d -d "$i days ago")-0[^0369][0-9][0-9]00.zip.bak" -exec rm {} +;
  find . -name "*$(date +%Y%m%d -d "$i days ago")-1[^258][0-9][0-9]00.zip.bak" -exec rm {} +;
  find . -name "*$(date +%Y%m%d -d "$i days ago")-2[^1][0-9][0-9]00.zip.bak" -exec rm {} +;
done

for i in {8..14}
do
  find . -name "*$(date +%Y%m%d -d "$i days ago")-[0-9][0-9][0-9][0-9]00.zip.bak" -exec rm {} +;
done

regex='^[0-9]+$';
if [[ $limit =~ $regex ]]
then
  for (( i=$limit; i<=14; i++ ))
  do
    find . -name "*$(date +%Y%m%d -d "$i days ago")-[0-9][0-9][0-9][0-9]00.zip.bak" -exec rm {} +;
  done
fi
