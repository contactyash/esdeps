#!/usr/bin/env node
var shell = require('shelljs');
const fs = require("fs");
fs.copyFile("eslintrc.js", ".eslintrc", err => {
  if (err) console.log(err);
  console.log("SourceFile.txt was copied to DestinationFile.txt");
});
if (shell.cp("./eslintrc","/src").code !== 0) {
  shell.echo('wow done');
 } 
if (shell.exec("yarn add eslint eslint-plugin-react eslint-plugin-import eslint-import-resolver-webpack eslint-config-airbnb eslint-plugin-prettier eslint-config-prettier eslint-plugin-jsx-a11y -D").code !== 0) {
  shell.echo('wow done');
 } 
