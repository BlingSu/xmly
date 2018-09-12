'use strict'

module.exports = function outputHelp(argv) {
  let helpInfo = 'Usage: xmly [options]\n\n' +
  'Help: https://www.npmjs.com/package/xmly\n\n' +
  '  前端架构工具，html5，pc脚手架一键生成 🚌\n\n' +
  '  Options:\n\n' +
  '    -V, --version        output the version number\n' +
  '    -h, --help           output usage information\n\n' +
  'Commands:\n\n' +
  '  init                   create project cli\n' +
  '  run                    start project\n'

  console.log(helpInfo)
  process.exit(0)
}
