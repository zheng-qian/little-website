(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=750){
              docEl.style.fontSize = '100px'
            }else{
              docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
 
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

window.onfocus = function () {
  $('title').html("夸克级别的网页");
};
window.onblur = function () {
  $('title').html('&euro;&nbsp;&bull;&omega;&bull;&nbsp;&int;&Delta;&nbsp;&nbsp;嘿！来看我嘛！');
};
console.info('%c很高兴你对我的网页感兴趣！哈哈哈！',"color:red;font-weight:bold;");
console.info('1.这个网页是我花费了一些时间做的，所以想看就看！');
console.info('2.如果要学习，嘻嘻嘻！请自行改变具体模块！');
console.info('3.网页使用了一些开源代码，所有的大佬都是先模仿优秀的作品而产生的！所以请记得学习！记得叫上我啊！');
console.info('4.网页还存在许多不足！欢迎提出建议或直接与我讨论。%c郑乾 qq：1446178451',"color:red;font-weight:bold;");
