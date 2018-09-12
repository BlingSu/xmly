'use strict'

const program = require(`commander`),
      co = require(`co`)

const appInfo = require(`../package.json`),
      asyncFunc = require(`./common/asyncfunc`),
      help = require(`./util/help`)


program.allowUnknownOption()
       .version(appInfo.version)

program
  .command(`init`)
  .description(`初始化h5脚手架 🚌～`)
  .action(() => co(asyncFunc.initAction))

program
  .command(`run`)
  .description(`启动程序 🐲～`)
  .action(() => co(asyncFunc.runAction))

program
  .command(`*`)
  .action(env => {
    console.error(help())
  })


program.on(`--help`, () => {
  console.log(`.  Examples:`)
  console.log(``)
  console.log(`    $ xmly --help`)
  console.log(`    $ xmly --h`)
  console.log(`    $ xmly run`)
  console.log(``)
})

program.parse(process.argv)
if (!program.args.length) help()
