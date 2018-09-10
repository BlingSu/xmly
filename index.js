#!/usr/bin/env node

/**
 * Module dependencies.
 */

const program = require('commander')
const pkg = require(`./package.json`)

program
  .command('init')
  .version(pkg.version)
  .description(`创建html5结构目录...🐲`)
  .action(options => {
    console.log(options)
  })
  .parse(process.argv)
