'use strict'

const {folderName} = require(`../config/path`)
const fs = require(`fs`)

module.exports = function getConfig() {
  const configPath = `${process.cwd()}/${folderName()}/xmly.config.js`
  const config = {}
  try {
    config = eval(fs.readFileSync(configPath, 'utf-8'))
    console.log(config, 'config')
    // callback&&callback(config)
  } catch (err) {
    console.warn(err)
  }
}
