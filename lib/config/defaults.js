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

const init_config = {
  app: 'app',
  html: 'html',
  src: 'src',
  styles: 'css',
  scripts: 'js',

  // zip
  zip: 'zip',
  static: 'static',
  cpPath: '',
  filePath: []
}

// default config
const defaults = {
  port: '3000',
  mock: {
    drectory: 'mock',
    type: 'json',
    urlRule: '/api|ajax|vgift/'
  },
  proxy: {
    host: 'http://www.longye.xyz'
  },
  init: init_config,
  webpack: {
    hash: false,
    entryJsRule: `${init_config.src}/**/**_entry.js`,
    htmlRule: `${init_config.html}/**/**.html`,
    assetsRoot: cwd,
    assetsPublicPath: `/${init_config.static}`,
    assetsSubDirectory: init_config.static,
    filename: '[name].js',
    resolve: {
      extentions: ['', '.js', '.json', '.html'],
      alias: {}
    },
    devtool: '#eval-source-map',
    dev: {
      cssSourceMap: true,
      extract: false,
      output: {
        path: path.resolve(cwd, init_config.static),
        filename: '[name.js]',
        publicPath: `/${init_config.static}/init_config.scripts/`
      }
    },
    build: {
      cssname: 'static/css/[name].css',
      htmlminify: false,
      productionGzip: false,
      productionGzipExtensions: '',
      extract: true,
      sourcemap: false,
      assetsRoot: cwd,
      assetsSubDirectory:init_config.static,
      output: {
        path: path.resolve(cwd, init_config.zip),
        publicPath: './',
        filename: path.posix.join(init_config.static, init_config.scripts, '/[name.js]')
      }
    }
  }
}

global.xmly_config = commonMethod.extend(true, {}, defaults, config)
