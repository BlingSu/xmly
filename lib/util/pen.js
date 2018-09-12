'use strict'

/**
 * 画笔输出
 * @author angelasubi
 * @date 2018-09-10
 * @README.md https://www.npmjs.com/package/colors
 */

// All params

const fontConfig = {
  font: 'simple',
  align: 'center',
  colors: ['magentaBright'],
  background: 'Black',
  letterSpacing: 1,
  lineHeight: 1,
  space: true,
  maxLength: '0'
}

exports.logo = fontConfig

exports.h1 = Object.assign({}, fontConfig, {
  font: 'console',
  align: 'left',
  space: false,
  colors: ['white']
})

exports.h1Candy = Object.assign({}, fontConfig, {
  font: 'console',
  align: 'left',
  space: false,
  colors: ['candy']
})
