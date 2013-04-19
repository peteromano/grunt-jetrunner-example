#!/bin/bash

date -j -f "%a %b %d %T %Z %Y" "`date`" "+%s" >> TRIGGER_EXAMPLE
git add TRIGGER_EXAMPLE
git commit -m"Triggering example build..."
git push origin master
