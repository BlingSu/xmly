#! /usr/bin/env node
const program = require('commander')
const defaults = require(`./lib/config/defaults`)


program
  .command('init')
  .description('create html5 project...')
  .action(option => {
      console.log(option)
  })
