'use strict'

const fs = Promise.promisifyAll(require(`fs`))
const ora = require(`ora`)

const h5Template = require(`../config/h5Template`)
const getConfig = require(`../util/method`)
const xmlyConfig = require(`../config/xmly`)
const pkg = require(`../config/pkg`)

const {
  folder,
  folderName,
  scssFolder,
  pageRem
} = require(`../config/path`)
const {
  publicScss,
  styleScss,
  iconScss,
  resetCss,
  handlebars
} = require(`../config/css`)

let devScss = `${process.cwd()}/${folderName()}/dev/scss`
let devCss = `${process.cwd()}/${folderName()}/dev/css`
let devJs = `${process.cwd()}/${folderName()}/dev/js`

const exists = (file) => {
  return new Promise((resolve, reject) => {
    fs.exists(file, (exists) => {
      if (!exists) resolve(exists);
      resolve(exists);
    })
  })
}

const mkdir = (path) => {
  return new Promise((resolve, reject) => {
    mkdirp(path, (err) => {
      if (err) reject(err)
        else resolve()
    })
  })
}

const write = (path, result) => {
  return new Promise((resolve, reject) => {
    fs.writeFileSync(path, result)
  })
}

const read = (path, flag) => {
  return new Promise((resolve, reject) => {
    let data = fs.readFileSync(path).toString()
    if (flag === 'tpl') {
      write(`${process.cwd()}/${folderName()}/dev/js/lib/jquery.min.js`, data)
    } else if (flag === 'super') {
      write(`${process.cwd()}/${folderName()}/dev/js/lib/jquery.SuperSlide.js`, data)
    } else if (flag === 'gulp') {
      write(`${process.cwd()}/${folderName()}/tool/gulpfile.js`, data)
    }
  })
}

exports.initAction = function* () {
  try {
    const spinner = ora(`正在生成项目模板，🚌    滴，滴滴！\n`)
    spinner.start()
    setTimeout(() => {
      spinner.color = 'yellow'
      spinner.text = '模版已成功生成～ 👌'

      spinner.stop()
      spinner.succeed()
    }, 3000)
    mkdirp(`${process.cwd()}/${folderName()}`)
    write(`${process.cwd()}/${folderName()}/xmly.config.js`, xmlyConfig())

    for (let i = 0; i < folder().length; i++) {
      mkdirp(`${process.cwd()}/${folderName()}/${folder()[i]}`)
    }
    write(`${process.cwd()}/${folderName()}/tool/scss.handlebars`, handlebars())
    write(`${process.cwd()}/${folderName()}/index.html`, h5Template())

    let devArr = ['scss', 'js', 'css']
    for (let i of devArr) {
      mkdirp(`${process.cwd()}/${folderName()}/dev/${i}`)
    }
    mkdirp(`${process.cwd()}/${folderName()}/dev/images/sprite`)

    write(`${devScss}/public.scss`, publicScss())
    write(`${devScss}/icon.scss`, iconScss())
    write(`${devScss}/style.scss`, styleScss())
    write(`${devCss}/reset.css`, resetCss())

    mkdirp(`${devJs}/lib`)
    write(`${devJs}/page.js`, pageRem())
    write(`${devJs}/index.js`, `(function() {})();`)

    read(path.resolve(__dirname, '../config/jqueryTemplate.js'), 'tpl')
    read(path.resolve(__dirname, '../config/jquerySuperSlide.js'), 'super')

    let releaseArr = ['css', 'images', 'js']
    for (let i of releaseArr) {
      mkdirp(`${process.cwd()}/${folderName()}/release/${i}`)
    }

    read(path.resolve(__dirname, '../config/config.js'), 'gulp')
    write(`${process.cwd()}/${folderName()}/tool/package.json`, pkg())

  } catch (err) {
    console.warn(err)
    spinner.fail()
  }
}


exports.runAction = function* () {
  try {
    console.log(`暂未开发... 以后有时间再重构  👩‍ ❤️‍👩`)
  } catch (err) {
    console.warn(err)
  }
}
