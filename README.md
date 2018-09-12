# 前端h5脚手架 🚌

## 安装
需要 Npm 和 Node 环境

```bash
npm install xmly -g
```

## 使用

```js
// 生成h5脚手架
xmly init
```

## 案例

* dev
  * css
    * public.css
    * reset.css
    * style.css
  * js
    * lib
      * jquery.min.js
      * jquerySuperSlide.js
    * page.js
    * index.js
  * scss
    * icon.scss
    * public.scss
    * style.scss
  * images
    * sprite
* release
  * css
    * style.min.css
  * js
    * page.min.js
  * images
    * ...
* tool
  * gulpfile.js
  * package.json
  * scss.handlebars
* index.html
* xmly.config.js

### 解析

#### dev 和 release
> 区分为两个环境:
1. dev 环境
  * css文件夹不管，包含reset.css
  * scss文件主要是开发时候用的（style为自定义，public为公共，icon为图标）
  * js文件（lib下为默认的jquery和superslide插件，page为默认的计算rem，可以根据设计稿自定义，index为自定义交互文件）
2. release 环境
  * 构建为3个文件 （css，js，images）

#### tool
> 基于gulp打包构建的文件

```bash
cd tool
npm install
npm run start
```
执行以上即可开启3000端口服务器，修改dev相关文件会触发热加载

#### index.html
初始化的页面，引入release打包压缩的文件（直接生产目录获取）

#### xmly.config.js
> gulp的配置文件

[gulp参考文档](https://gulpjs.com)

##### imagemin

> image图片压缩处理任务

[参考文档](https://www.npmjs.com/package/gulp.spritesmith)

##### sass

> sass编译

[参考文档](https://www.npmjs.com/package/gulp-sass)

##### jsconcat

> js压缩合并

[参考文档](https://www.npmjs.com/package/gulp-uglify)

##### spritesmith

> 自动化雪碧图任务

[参考文档](https://www.npmjs.com/package/gulp-spritesmith)


##### cssmin

> css压缩任务处理

[参考文档](https://www.npmjs.com/package/gulp-cssmin)

##### browserSync

> 同步测试助手

[参考文档](https://www.npmjs.com/package/browser-sync)


### License
MIT


## 写在后面
找个时间重构... 😂
