exports.publicScss = function() {
  const content = `@charset 'utf-8';
/* css function */
.fl { float: left; }
.fr { float: right; }
.hide {display: none;}
.show {display: block;}
/* 清除浮动 */
.clearfix:before,.clearfix:after { content: ""; display: table; }
.clearfix:after { clear: both; }
.clearfix { zoom: 1; }
/* 文字溢出虚点显示 */
.ell { text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }
/* 模拟三角形 */
.triangle-t { width: 0;height: 0;border-style: solid;border-width: 0 6px 6px;border-color: transparent transparent #d2d5d8;display: inline-block;}`
  return content
}

exports.styleScss = function() {
  const content = `@charset "utf-8";
@function px( $px ){
  @return $px/100 + rem;
}
@import "icon";
/* style css*/
html{font-size:50px;}
body{font: 400 .24rem '黑体','Microsoft Yahei', Arial;max-width:750px;margin:0 auto;}`
  return content
}

exports.iconScss = function() {
  const content = `// SCSS variables are information about icon's compiled state, stored under its original file name`
  return content
}

// css
exports.resetCss = function() {
  const content = `@charset 'utf-8';
/* css reset */
html, body, div, span, object, iframe,h1, h2, h3, h4, h5, h6, p, a, blockquote, pre,abbr, address, cite, code,del, em, img,small, strong, sub, sup, b, i,dl, dt, dd, ol, ul, li,fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td,article, aside, canvas, footer, header,  menu, nav, section,time, mark, audio, video {margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;}
body {line-height:1;}
article,aside,canvas,details,figcaption,figure,
footer,header,hgroup,menu,nav,section,summary { display:block;}
nav ul {list-style:none;}
img,iframe,input,button{border:0;}
blockquote, q {quotes:none;}
blockquote:before, blockquote:after, q:before, q:after {content:'';content:none;}
table{border-collapse:collapse;border-spacing:0;}
i,em,address{font-style:normal;}
ul,ol,li{list-style:none;}
h1,h2,h3,h4,h5,h6,small{font-size:100%;}
pre,code{font-family:inherit;}
textarea{overflow:auto;resize:none;}
a{cursor:pointer;text-decoration:none;color:#333;background-color: transparent;}
a:active, a:hover { outline: 0; }
a,span,input,div,a:hover,input:hover,div:hover{outline: 0; -webkit-text-size-adjust: none;
-webkit-tap-highlight-color:rgba(255,255,255,0);
-moz-tap-highlight-color:rgba(255,255,255,0);
-ms-tap-highlight-color:rgba(255,255,255,0);
-o-tap-highlight-color:rgba(255,255,255,0);
tap-highlight-color:rgba(255,255,255,0);}
h1,h2,h3,h4,h5,h6,em,strong,b{font-weight:normal;}
body,textarea,input,button,select,keygen,legend{font:12px/1.14 'Microsoft Yahei','宋体';color:#333;outline:0;}
body{background:#fff;-webkit-user-select:none;-webkit-touch-callout: none;}`
  return content
}

exports.handlebars = function() {
  const content = ` {{#extend "scss"}}
  {{#content "sprites"}}
      {{#each sprites}}
          @mixin {{name}} {
              background-position: {{#if offset_x}}{{offset_x}}/({{width}}-{{total_width}})*100%{{else}}0{{/if}} {{#if offset_y}}{{offset_y}}/({{height}}-{{total_height}})*100%;{{else}}0{{/if}};
              width: px({{width}});
              height: px({{height}});
          }
      {{/each}}
  {{/content}}

  {{#content "spritesheet"}}
      %{{spritesheet.name}} {
          background-image: url('{{{spritesheet.escaped_image}}}');
          background-repeat: no-repeat;
          background-size: px({{spritesheet.width}}) px({{spritesheet.height}});
      }
  {{/content}}
{{/extend}}`

return content
}
