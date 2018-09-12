module.exports = function pkg() {
  const content = `{
  "name": "xmly",
  "version": "1.0.3",
  "description": "前端构架工具，h5和pc脚手架",
  "main": "gulpfile.js",
  "dependencies": {},
  "devDependencies": {
    "gulp": "^3.9.1",
    "browser-sync": "^2.24.6",
    "gulp-cache": "^0.4.5",
    "gulp-concat": "^2.6.0",
    "gulp-if": "^2.0.1",
    "gulp-imagemin": "^3.0.3",
    "gulp-minify-css": "^1.2.4",
    "gulp-replace": "^0.5.4",
    "gulp-sass": "^3.1.0",
    "gulp-sequence": "^0.4.6",
    "gulp-uglify": "^2.0.0",
    "gulp-watch": "^4.3.10",
    "gulp.spritesmith": "^6.2.1",
    "vconsole": "^2.5.1",
    "yargs": "^6.2.0"
  },
  "scripts": {
    "start": "gulp"
  },
  "author": "angelasubi",
  "license": "ISC"
}`
return content
}
