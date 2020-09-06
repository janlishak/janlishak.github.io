#!/bin/bash
#cd $(pwd)
rm -r ./docs/*
cp -r ./public/* ./docs/
cp ./favicon/favicon.ico ./docs/
cp -r ./extra/* ./docs/
#rm -r /srv/http/public/
#cp -r ./public/* /srv/http/
