/**
 * @description global config
 * @author: angelasubi
 * @date: 2018/8/30
 */


const path = require(`path`)
const fs = require(`fs`)
const common = require(`../util/common.js`)


// user config
const cwd = process.cwd()
const configPath = `${cwd}/xmly.config.js`
const config = {}

// exists config
try {
  config = require(configPath)
} catch(err) {
  console.log(`Current Environment missing xmly.config.js`)
}

// build dev
global.build_dev = `host`

// init project (default)

const init_config = {}
