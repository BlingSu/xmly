/**
 * help message
 * @author angelasubi
 * @date 2018-09-10
 */


const pen = require(`../util/pen.js`)
const CFonts = require(`cfonts`)

const pkg = require(`../../package.json`)

// logo
function logoFn() {
  CFonts.say(`h1Candy=======`, pen.h1Candy)
  CFonts.say(`xmly`, pen.logo)
  CFonts.say(`h1Candy=======`, pen.h1Candy)
}


// base information

function commandsFn() {
  let clis = [
    {
      key: `xmly version: ${pkg.version}`,
      desc: ``
    },
    {
      key: `command introduction`,
      desc: ``
    },
    {
      key: `xmly dev`,
      color: ['magenta'],
      desc: `\n start development env`
    },
    {
      key: `xmly -dv -o=http:xxx.yyy.com:1077/`,
      color: ['magenta'],
      desc: `\n start debugger env to api`
    },
    {
      key: `xmly build`,
      color: ['magenta'],
      desc: `\n start master build \n\n`
    }
  ]


  clis.forEach((item, index) => {
    if (item.color) {
      pen.h1.colors = item.color
    } else {
      pen.h1.colors = ['white']
    }

    CFonts.say(item.key + item.desc, pen.h1)
  })
}

module.exports = function() {
  logoFn()
  commandsFn()
}
