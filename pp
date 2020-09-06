#!/bin/bash
#cd $(pwd)
rm -r ./docs/*
cp -r ./public/* ./docs/
cp ./favicon/favicon.ico ./docs/
cp ./extra/jan-lishak-cv.pdf ./docs/
#rm -r /srv/http/public/
#cp -r ./public/* /srv/http/
