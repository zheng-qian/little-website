//判断是否移动端，如果是则跳转到指定的URL地址
function browserRedirect(url) {
    //只读的字符串，声明了浏览器用于 HTTP 请求的用户代理头的值
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM ) {
        window.location.replace(url);
    }else{
        return;
    }
}
browserRedirect("https://zheng-qian.github.io/html/m.cctv.html");


var s=[
		//高清电视测试节点(建议网速流畅观看)
		"http://ivi.bupt.edu.cn/player.html?channel=cctv1hd",//CCTV-1高清
		"http://ivi.bupt.edu.cn/player.html?channel=cctv2hd",//CCTV-2高清
		"http://ivi.bupt.edu.cn/player.html?channel=cctv3hd",//CCTV-3高清
		"http://ivi.bupt.edu.cn/player.html?channel=cctv4hd",//CCTV-4高清
		"http://ivi.bupt.edu.cn/player.html?channel=cctv5hd",//CCTV-5高清
		"http://ivi.bupt.edu.cn/player.html?channel=cctv6hd",//CCTV-6高清
		"http://ivi.bupt.edu.cn/player.html?channel=cctv7hd",//CCTV-7高清
		"http://ivi.bupt.edu.cn/player.html?channel=cctv8hd",//CCTV-8高清
		"http://ivi.bupt.edu.cn/player.html?channel=cctv9hd",//CCTV-9高清
		"http://ivi.bupt.edu.cn/player.html?channel=cctv10hd",//CCTV-10高清
		"http://ivi.bupt.edu.cn/player.html?channel=cctv12hd",//CCTV-12高清
		"http://ivi.bupt.edu.cn/player.html?channel=cctv14hd",//CCTV-14高清
		"http://ivi.bupt.edu.cn/player.html?channel=cctv17hd",//CCTV-17高清
		"http://ivi.bupt.edu.cn/player.html?channel=btv1hd",//北京卫视高清
		"http://ivi.bupt.edu.cn/player.html?channel=btv2hd",//北京文艺高清
		"http://ivi.bupt.edu.cn/player.html?channel=btv4hd",//北京影视高清
		"http://ivi.bupt.edu.cn/player.html?channel=btv9hd",//北京新闻高清
		"http://ivi.bupt.edu.cn/player.html?channel=btv11hd",//北京冬奥高清
		"http://ivi.bupt.edu.cn/player.html?channel=hunanhd",//湖南卫视高清
		"http://ivi.bupt.edu.cn/player.html?channel=zjhd",//浙江卫视高清
		"http://ivi.bupt.edu.cn/player.html?channel=jshd",//江苏卫视高清
		"http://ivi.bupt.edu.cn/player.html?channel=dfhd",//东方卫视高清
		"http://ivi.bupt.edu.cn/player.html?channel=ahhd",//安徽卫视高清
		"http://ivi.bupt.edu.cn/player.html?channel=hljhd",//黑龙江卫视高清
		"http://ivi.bupt.edu.cn/player.html?channel=lnhd",//辽宁卫视高清
		"http://ivi.bupt.edu.cn/player.html?channel=szhd",//深圳卫视高清
		"http://ivi.bupt.edu.cn/player.html?channel=gdhd",//广东卫视高清
		"http://ivi.bupt.edu.cn/player.html?channel=tjhd",//天津卫视高清
		"http://ivi.bupt.edu.cn/player.html?channel=hbhd",//湖北卫视高清
		"http://ivi.bupt.edu.cn/player.html?channel=sdhd",//山东卫视高清
		"http://ivi.bupt.edu.cn/player.html?channel=cqhd",//重庆卫视高清
		"http://ivi.bupt.edu.cn/player.html?channel=dnhd",//福建东南高清
		"http://ivi.bupt.edu.cn/player.html?channel=schd",//四川卫视高清
		"http://ivi.bupt.edu.cn/player.html?channel=hbhd",//河北卫视高清
		"http://ivi.bupt.edu.cn/player.html?channel=jxhd",//江西卫视高清
		"http://ivi.bupt.edu.cn/player.html?channel=hnhd",//河南卫视高清
		"http://ivi.bupt.edu.cn/player.html?channel=gxhd",//广西卫视高清
		"http://ivi.bupt.edu.cn/player.html?channel=jlhd",//吉林卫视高清
		"http://ivi.bupt.edu.cn/player.html?channel=lyhd",//海南卫视高清
		"http://ivi.bupt.edu.cn/player.html?channel=gzhd",//贵州卫视高清
		//普清电视测试节点(建议网速流畅观看)
		"http://ivi.bupt.edu.cn/player.html?channel=cctv1",//CCTV-1综合
		"http://ivi.bupt.edu.cn/player.html?channel=cctv2",//CCTV-2财经
		"http://ivi.bupt.edu.cn/player.html?channel=cctv3",//CCTV-3综艺
		"http://ivi.bupt.edu.cn/player.html?channel=cctv4",//CCTV-4国际
		"http://ivi.bupt.edu.cn/player.html?channel=cctv6",//CCTV-6电影
		"http://ivi.bupt.edu.cn/player.html?channel=cctv7",//CCTV-7军事
		"http://ivi.bupt.edu.cn/player.html?channel=cctv8",//CCTV-8电视剧
		"http://ivi.bupt.edu.cn/player.html?channel=cctv9",//CCTV-9纪录
		"http://ivi.bupt.edu.cn/player.html?channel=cctv10",//CCTV-10科教
		"http://ivi.bupt.edu.cn/player.html?channel=cctv11",//CCTV-11戏曲
		"http://ivi.bupt.edu.cn/player.html?channel=cctv12",//CCTV-12社会
		"http://ivi.bupt.edu.cn/player.html?channel=cctv13",//CCTV-13新闻
		"http://ivi.bupt.edu.cn/player.html?channel=cctv14",//CCTV-14少儿
		"http://ivi.bupt.edu.cn/player.html?channel=cctv15",//CCTV-15音乐
		"http://ivi.bupt.edu.cn/player.html?channel=cctv16",//CGTN
		"http://ivi.bupt.edu.cn/player.html?channel=cctv17",//CCTV-17农业
		"http://ivi.bupt.edu.cn/player.html?channel=btv1",//北京卫视
		"http://ivi.bupt.edu.cn/player.html?channel=btv2",//北京文艺
		"http://ivi.bupt.edu.cn/player.html?channel=btv3",//北京科教
		"http://ivi.bupt.edu.cn/player.html?channel=btv4",//北京影视
		"http://ivi.bupt.edu.cn/player.html?channel=btv5",//北京财经
		"http://ivi.bupt.edu.cn/player.html?channel=btv7",//北京生活
		"http://ivi.bupt.edu.cn/player.html?channel=btv8",//北京青年
		"http://ivi.bupt.edu.cn/player.html?channel=btv9",//北京新闻
		"http://ivi.bupt.edu.cn/player.html?channel=btv10",//北京卡酷少儿
		"http://ivi.bupt.edu.cn/player.html?channel=btv11",//北京冬奥纪实
		"http://ivi.bupt.edu.cn/player.html?channel=zjtv",//浙江卫视
		"http://ivi.bupt.edu.cn/player.html?channel=hunantv",//湖南卫视
		"http://ivi.bupt.edu.cn/player.html?channel=jstv",//江苏卫视
		"http://ivi.bupt.edu.cn/player.html?channel=dftv",//东方卫视
		"http://ivi.bupt.edu.cn/player.html?channel=sztv",//深圳卫视
		"http://ivi.bupt.edu.cn/player.html?channel=ahtv",//安徽卫视
		"http://ivi.bupt.edu.cn/player.html?channel=hntv",//河南卫视
		"http://ivi.bupt.edu.cn/player.html?channel=sxtv",//陕西卫视
		"http://ivi.bupt.edu.cn/player.html?channel=jltv",//吉林卫视
		"http://ivi.bupt.edu.cn/player.html?channel=gdtv",//广东卫视
		"http://ivi.bupt.edu.cn/player.html?channel=sdtv",//山东卫视
		"http://ivi.bupt.edu.cn/player.html?channel=hbtv",//湖北卫视
		"http://ivi.bupt.edu.cn/player.html?channel=hebtv",//河北卫视
		"http://ivi.bupt.edu.cn/player.html?channel=xztv",//西藏卫视
		"http://ivi.bupt.edu.cn/player.html?channel=nmtv",//内蒙古卫视
		"http://ivi.bupt.edu.cn/player.html?channel=qhtv",//青海卫视
		"http://ivi.bupt.edu.cn/player.html?channel=sctv",//四川卫视
		"http://ivi.bupt.edu.cn/player.html?channel=tjtv",//天津卫视
		"http://ivi.bupt.edu.cn/player.html?channel=sxrtv",//山西卫视
		"http://ivi.bupt.edu.cn/player.html?channel=lntv",//辽宁卫视
		"http://ivi.bupt.edu.cn/player.html?channel=xmtv",//厦门卫视
		"http://ivi.bupt.edu.cn/player.html?channel=xjtv",//新疆卫视
		"http://ivi.bupt.edu.cn/player.html?channel=hljtv",//黑龙江卫视
		"http://ivi.bupt.edu.cn/player.html?channel=yntv",//云南卫视
		"http://ivi.bupt.edu.cn/player.html?channel=jxtv",//江西卫视
		"http://ivi.bupt.edu.cn/player.html?channel=dntv",//福建东南卫视
		"http://ivi.bupt.edu.cn/player.html?channel=gztv",//贵州卫视
		"http://ivi.bupt.edu.cn/player.html?channel=nxtv",//宁夏卫视
		"http://ivi.bupt.edu.cn/player.html?channel=gstv",//甘肃卫视
		"http://ivi.bupt.edu.cn/player.html?channel=cqtv",//重庆卫视
		"http://ivi.bupt.edu.cn/player.html?channel=bttv",//兵团卫视
		"http://ivi.bupt.edu.cn/player.html?channel=ybtv",//延边卫视
		"http://ivi.bupt.edu.cn/player.html?channel=sstv",//三沙卫视
		"http://ivi.bupt.edu.cn/player.html?channel=lytv",//海南卫视
		"http://ivi.bupt.edu.cn/player.html?channel=sdetv",//山东教育
		"http://ivi.bupt.edu.cn/player.html?channel=cetv1",//CETV-1
		"http://ivi.bupt.edu.cn/player.html?channel=cetv3",//CETV-3
		"http://ivi.bupt.edu.cn/player.html?channel=cetv4",//CETV-4
		
        ];

function change(t) { 
        document.getElementById("zhengqian").src = s[t];
}


// 引入2D
 L2Dwidget.init();


window.onload = function(){
    document.getElementById("live2dcanvas").style.border = '0px';
}



