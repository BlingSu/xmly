module.exports = function xmlyConfig() {
  return `module.exports = {
  jsconcat: {
    src: [
      '../dev/js/page.js',
      '../dev/js/lib/jquery.min.js',
      '../dev/js/index.js'
    ],
    concatName: 'page.min.js',
    dest: '../release/js/'
  },
  browserSync: {
    files: [
      '../*.html',
      '../release/css/*.css',
      '../release/js/*.js'
    ],
    baseDir: '../'
  },
  cssmin: {
    src: [
      '../dev/css/public.css',
      '../dev/css/reset.css',
      '../dev/css/style.css'
    ],
    concatName: 'style.min.css',
    config: {
      advanced: false,
      compatibility: 'ie7',
      keepBreaks: false,
      keepSpecialComments: '*'
    },
    dest: '../release/css'
  },
  imagemin: {
    src: '../dev/images/*.{png,jpg,gif,ico}',
    config: {
      optimizationLevel: 5,
      progressive: true,
      interlaced: true,
      multipass: true
    }
  },
  sass: {
    src: '../dev/scss/style.scss',
    dest: '../dev/css/'
  },
  sprite: {
    src: '../dev/images/sprite/*',
    config: {
      padding: 2,
      imgName: '../dev/images/icon.png',
      cssName: '../dev/scss/icon.scss',
      algorithm: 'binary-tree',
      cssFormat: 'scss',
      cssTemplate: 'scss.handlebars'
    },
    dest: '../dev/'
  }
}`
}
