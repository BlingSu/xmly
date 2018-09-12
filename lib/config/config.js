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
  imagemin: function() {
    return gulp.src(config.imagemin.src)
      .pipe(cache(imagemin(config.imagemin.config)))
  },
  sass: function() {
    return gulp.src(config.sass.src)
      .pipe(sass())
      .pipe(gulp.dest(config.sass.dest))
  },
  jsconcat: function() {
    return gulp.src(config.jsconcat.src)
    .pipe(concat(config.jsconcat.concatName))
    .pipe(uglify())
    .pipe(gulp.dest(config.jsconcat.dest))
  },
  sprite: function() {
    return gulp.src(config.sprite.src)
    .pepe(spritesmith(config.sprite.config))
    .pipe(gulp.dest(config.sprite.dest))
  },
  cssmin: function() {
    return gulp.src(config.cssmin.src)
      .pipe(concat(config.cssmin.concatName))
      .pipe(cssmin(config.cssmin.config))
      .pipe(gulp.dest(config.cssmin.dest))
  },
  browserSync: function() {
    browserSync.init(config.browserSync.files, {
      server: {
        baseDir: config.browserSync.baseDir
      }
    })
  }
}


gulp.task('imagemin', function() {
  xmly.imagemin()
})

gulp.task('sass', function() {
  xmly.sass()
})

gulp.task('jsconcat', function() {
  xmly.jsconcat()
})

gulp.task('sprite', function() {
  xmly.sprite()
})

gulp.task('cssmin', function() {
  xmly.cssmin()
})

gulp.task('browser-sync', function() {
  xmly.browserSync()
})

gulp.task('default', function() {
  gulp.watch('../dev/images/*.{png,jpg,gif,ico}', function(){
    gulp.run('imagemin')
  })
  gulp.watch('../dev/css/*.css', function(){
    gulp.run('cssmin')
  })
  gulp.watch('../dev/js/*.js', function(){
    gulp.run('jsconcat')
  })
  gulp.watch('../dev/scss/style.scss', function(){
    gulp.run('sass')
  })
  gulp.run('browser-sync')
})
