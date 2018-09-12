/**
 * gulp config
 * @author angelasubi
 * @date 2018-09-11
 */

const gulp = require('gulp')
const spritesmith = require('gulp.spritesmith')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const replace = require('gulp-replace')
const watch = require('gulp-watch')
const imagemin = require('gulp-imagemin')
const cache = require('gulp-cache')
const cssmin = require('gulp-minify-css')
const browserSync = require('browser-sync').create()

const config = require('../xmly.config.js')


let xmly = {
  init: function() {
    var _this = this
    // gulp.watch('../dev/js/*.js', function(){
    //     gulp.run(_this.jsconcat())
    // })
    gulp.task('default', function() {
      gulp.run(_this.browserSync())
    })
  },
  imagemin: function() {
    return gulp.src('../dev/images/*.{png,jpg,gif,ico}')
      .pipe(cache(imagemin({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true,
        multipass: true
      })))
  },
  sass: function() {
    return gulp.src('../dev/scss/style.scss')
      .pipe(sass())
      .pipe(gulp.dest('../dev/css/'))
  },
  jsconcat: function() {
    return gulp.src(config.jsconcat.src)
    .pipe(concat(config.jsconcat.concatName))
    .pipe(uglify())
    .pipe(gulp.dest(config.jsconcat.generateUrl))
  },
  sprite: function() {
    return gulp.src('../dev/images/sprite/*')
    .pepe(spritesmith({
      padding: 2,
      imgName: '../dev/images/icon.png',
      cssName: '../dev/scss/icon.scss',
      algorithm: 'binary-tree',
      cssFormat: 'scss',
      cssTemplate: 'scss.handlebars'
    }))
    .pipe(gulp.dest('../dev/'))
  },
  cssmin: function() {
    return gulp.src([
        '../dev/css/public.css',
        '../dev/css/reset.css',
        '../dev/css/style.css'
      ])
      .pipe(concat('style.min.css'))
      .pipe(cssmin({
        advanced: false,
        compatibility: 'ie7',
        keepBreaks: false,
        keepSpecialComments: '*'
      }))
      .pipe(gulp.dest('../release/css'))
  },
  browserSync: function() {
    browserSync.init(config.browserSync.files, {
      server: {
        baseDir: "../"
      }
    })
  }
}

module.exports = xmly
