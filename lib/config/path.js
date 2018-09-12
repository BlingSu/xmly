exports.folder = function() {
  return ['dev', 'tool', 'release']
}

exports.folderName = function() {
  return `my-project`
}

exports.scssFolder = function() {
  return [`icon.scss`, `style.scss`, `public.scss`, ]
}


exports.pageRem = function() {
  const content = `(function () {
  //初始化html字体大小
  function remReSize() {
    var w = window.innerWidth;
    //var w = document.documentElement.clientWidth;
    if (w > 640) {
        w = 640;
    };
    //html元素字体大小 = document根节点(html)宽度 * 100 / 设计图宽度
    document.getElementsByTagName("html")[0].setAttribute("style", "font-size:"+100 / 720 * w + 'px'+"");
  };
  remReSize();
  //当窗体大小变化时，html字体大小随着变化
  window.onresize=function(){
    remReSize();
  };
  window.onload=function () {
    remReSize();
  };
  //避免页面js延迟加载
  for (var i = 0; i < 3; i++) {
    setTimeout(remReSize, 100 * i);
  };
})();`
return content
}
