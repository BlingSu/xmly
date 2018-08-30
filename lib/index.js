/**
 * @description global config
 * @author: angelasubi
 * @date: 2018/8/30
 */

require(`./config/defaults`)
const cli = require(`./commands/cli`)

module.exports = function(){
  cli()
}
