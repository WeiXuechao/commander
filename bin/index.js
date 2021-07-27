#!/usr/bin/env node
'use strict'
const { program } = require('commander')

program
  .version('0.1.0')
  .option('-m, --move <uri>', '移动 tyc-hybird-js 到指定目录')
  .option('-w, --watch', '监听文件变化')
  .parse(process.argv)
  const options = program.opts();
  console.log(options);
  if(options.move){
      console.log('----->move')
  }