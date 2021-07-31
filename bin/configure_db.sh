#!/bin/bash

echo "configuring dstackdb"
dropdb -U node_user dstackdb
echo "droped db"

createdb -U node_user dstackdb
echo "created db"

psql -U node_user dstackdb < ./bin/sql/generation.sql

psql -U node_user dstackdb < ./bin/sql/dragon.sql

echo "dstackdb was configured"
