/**
 * create cli
 * @author angelasubi
 * @date 2018-09-10
 */


const fs = require(`fs`)
require(`shelljs/global`)


// global config

const init_config = global.xmly_config.init

// create babelrc

const createBabelrc = function() {
  let name = `.babelrc`,
      jsonStr = JSON.stringify({
        "presets": ["es2015", "stage-0"],
        "plugins": ["transform-runtime"],
        "comments": false
      })

  fs.writeFile(name, jsonStr, (err => {
    if (err) return
  }))
  console.log(`success: 😁 create file .babelrc`)
}


module.exports = function() {
  let html = init_config.html,
      app = init_config.app,
      src = init_config.src,
      css = init_config.styles,
      js = init_config.scripts

  let createDir = function(dir) {
    mkdir(`-p`, dir)
    console.log(`【create folder】 dir`)
  }

  // generate folder array

  let dirArr = [
    app,
    `${app}/${src}`,
    `${app}/${src}/${css}`,
    `${app}/${src}/${js}`,
    `${app}/${html}`
  ]

  dirArr.forEach(item => {
    createDir(item)
  })

  console.log(`success: create project cli!!!`)
}
