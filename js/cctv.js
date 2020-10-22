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


var s=["https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=https://cctvalih5ca.v.myalicdn.com/live/cctv1_2/index.m3u8&amp;autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://cctvalih5ca.v.myalicdn.com/live/cctv2_2/index.m3u8&amp;autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://cctvalih5ca.v.myalicdn.com/live/cctv3_2/index.m3u8&amp;autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://cctvalih5ca.v.myalicdn.com/live/cctv4_2/index.m3u8&amp;autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://cctvalih5ca.v.myalicdn.com/live/cctv5_2/index.m3u8&amp;autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://cctvalih5ca.v.myalicdn.com/live/cctv6_2/index.m3u8&amp;autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://cctvalih5ca.v.myalicdn.com/live/cctv7_2/index.m3u8&amp;autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://cctvalih5ca.v.myalicdn.com/live/cctv8_2/index.m3u8&amp;autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://cctvtxyh5ca.liveplay.myqcloud.com/live/cctvjilu_2/index.m3u8&amp;autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://cctvalih5ca.v.myalicdn.com/live/cctv10_2/index.m3u8&amp;autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://cctvalih5ca.v.myalicdn.com/live/cctv11_2/index.m3u8&amp;autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://cctvalih5ca.v.myalicdn.com/live/cctv12_2/index.m3u8&amp;autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://cctvalih5ca.v.myalicdn.com/live/cctv13_2/index.m3u8&amp;&autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://cctvtxyh5ca.liveplay.myqcloud.com/live/cctvchild_2/index.m3u8&amp;autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://cctvalih5ca.v.myalicdn.com/live/cctv15_2/index.m3u8&amp;autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://39.134.65.162/PLTV/88888888/224/3221225510/index.m3u8&amp;autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://cctvalih5ca.v.myalicdn.com/live/cctv17_2/index.m3u8&amp;autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://39.134.65.162/PLTV/88888888/224/3221225509/index.m3u8&amp;autoPlay=true",
// cctv完

        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://tx2play1.douyucdn.cn/live/288016rlols5_4000p.flv&amp;autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://tx2play1.douyucdn.cn/live/100rPCLP_4000p.flv&amp;autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://tx2play1.douyucdn.cn/live/1863767rkpl_4000p.flv&amp;autoPlay=true",
        
// 江苏
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http%3A%2F%2Focs2.xjitv.cn%3A5000%2Fjiangsu_hdcq.m3u8%3F%26sid%3Djiangsu_hd%26user%3Dyoongoo%26tid%3DWEB-91AE097F0DED319B%26token%3Dguoziyun&autoPlay=true",

        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://223.110.245.165/ott.js.chinamobile.com/PLTV/3/224/3221225854/index.m3u8&autoPlay=true&amp;autoPlay=true",

        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://39.134.65.162/PLTV/88888888/224/3221225506/index.m3u8&autoPlay=true&amp;autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=rtmp://58.200.131.2:1935/livetv/fhzw&autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://hw-m-l.cztv.com/channels/lantian/channel01/360p.m3u8&autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://219.153.252.50/PLTV/88888888/224/3221225549/chunklist.m3u8&amp;autoPlay=true",
        "https://g.alicdn.com/de/prismplayer-flash/1.2.16/PrismPlayer.swf?vurl=http://live5.plus.hebtv.com/hbwssl/hd/live.m3u8&amp;autoPlay=true", 
        ];

function change(t) { 
        document.getElementById("gPlayer").src = s[t];
}


// 引入2D
 L2Dwidget.init();


window.onload = function(){
    document.getElementById("live2dcanvas").style.border = '0px';
}



