module.exports = function xmlyConfig() {
  return `module.exports = {
  'jsconcat': {
    src: [
      '../dev/js/page.js',
      '../dev/js/lib/jquery.min.js',
      '../dev/js/index.js'
    ],
    concatName: 'page.min.js',
    generateUrl: '../release/js/'
  },
  'browserSync': {
    files: [
      '../*.html',
      '../release/css/*.css',
      '../release/js/*.js'
    ]
  }
}`
}
