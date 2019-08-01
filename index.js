#!/usr/bin/env node
var sh = require('shelljs');
 
if (sh.exec("yarn add eslint eslint-plugin-react eslint-plugin-import eslint-import-resolver-webpack eslint-config-airbnb eslint-plugin-prettier eslint-config-prettier eslint-plugin-jsx-a11y -D").code !== 0) {
  sh.echo('wow done');
 } 
