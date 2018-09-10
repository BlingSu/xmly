/**
 * command cli
 * @author angelasubi
 * @date 2018-09-10
 */


const help = require(`./help`),
      init = require(`./init`),
      dev = require(`./dev`)

module.exports = function() {
  let cmd = process.argv[2]

  switch(cmd) {
    case 'help':
      help()
      break

    case 'init':
      init()
      break

    case 'dev':
      dev()
      break

    default:
      help()
      break
  }
}
