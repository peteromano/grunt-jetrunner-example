#!/bin/bash

date -j -f "%a %b %d %T %Z %Y" "`date`" "+%s" >> TRIGGER_EXAMPLE