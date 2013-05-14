#!/bin/sh
# fawkes lives
echo "running..."

until node main.js; do
	echo "Fawkes died. ..."
	echo "$(date)\n---------------------"
	sleep 10
done