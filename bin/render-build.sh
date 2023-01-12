#!/usr/bin/env bash
# exit on error
set -o errexit

# build commands for react front end
rm -rf public
npm install --prefix client && npm run build --prefix client
cp -a client/build/. public/

# build commands for rails back end
bundle install
# bundle exec rake assets:precompile
# bundle exec rake assets:clean
bundle exec rails db:migrate
bundle exec rails db:seed

