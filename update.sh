#!/bin/bash -e

rm -rf target
mkdir target

cd target
#git clone https://github.com/Famous/polyfills.git

git clone https://github.com/aelr/famous-commonjs.git
cd famous-commonjs

cp ../../bundler.js .
cp core/famous.css ../../

browserify bundler.js -o ../../famous.js

cd -
cd -