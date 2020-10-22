//模拟数据
var data = [{
	"src":"https://zheng-qian.github.io/img/1.gif",
	"title":"郑乾啊来"
},{
	"src":"https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1603198006&t=fa1a1335aaf4ea7902d02cf327caf057",
	"title":"郑乾啊来"
},{
	"src":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=327401547,2831874020&fm=26&gp=0.jpg",
	"title":"郑乾啊来"
},{
	"src":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3780198741,2827075290&fm=26&gp=0.jpg",
	"title":"郑乾啊来"
},{
	"src":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3361982384,2150093669&fm=26&gp=0.jpg",
	"title":"郑乾啊来"
},{
	"src":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2946751544,680274729&fm=26&gp=0.jpg",
	"title":"郑乾啊来"
},{
	"src":"https://zheng-qian.github.io/img/1.gif",
	"title":"郑乾啊来"
},{
	"src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3776982967,2302857549&fm=26&gp=0.jpg",
	"title":"郑乾啊来"
},{
	"src":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1882750841,2729854807&fm=26&gp=0.jpg",
	"title":"郑乾啊来"
},{
	"src":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2020112179,3320810825&fm=26&gp=0.jpg",
	"title":"郑乾啊来"
},{
	"src":"https://zheng-qian.github.io/img/1.gif",
	"title":"郑乾啊来"
},{
	"src":"http://p1.music.126.net/-gN03C1jWCByIe1H9lf3Sw==/46179488379894.jpg?param=130y130",
	"title":"郑乾啊来"
},{
	"src":"https://img-blog.csdnimg.cn/20201012212842468.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0NjgyMDE5,size_16,color_FFFFFF,t_70#pic_center",
	"title":"郑乾啊来"
},{
	"src":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3667038352,2822115225&fm=26&gp=0.jpg",
	"title":"郑乾啊来"
},{
	"src":"https://zheng-qian.github.io/img/1.gif",
	"title":"郑乾啊来"
},{
	"src":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1723297203,2220285652&fm=15&gp=0.jpg",
	"title":"郑乾啊来"
},{
	"src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2321594885,4241494695&fm=11&gp=0.jpg",
	"title":"郑乾啊来"
},{
	"src":"https://img-blog.csdnimg.cn/20201012212842468.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ0NjgyMDE5,size_16,color_FFFFFF,t_70#pic_center",
	"title":"郑乾啊来"
},
]

var waterfall = function(wrap,boxes){
	//获取屏幕可以显示的列数
	var boxWidth = boxes.eq(0).width() + 40; //width()是盒子的内容宽度
	var windowWidth = $(window).width();
	var colsNumber = Math.floor(windowWidth / boxWidth);

	//设置容器的宽度
	wrap.width(boxWidth * colsNumber);

	//定义一个数组并存储每一列的高度
	var everyHeight = new Array();
	for (var i = 0; i < boxes.length; i++) {
		if(i < colsNumber){
			console.log(boxes.eq(i).height() + 40);
			everyHeight[i] = boxes.eq(i).height() + 40;
		}else{
			var minHeight = Math.min.apply(null,everyHeight);
			var minIndex = getIndex(minHeight,everyHeight);
			var leftValue = boxes.eq(minIndex).position().left;
			setStyle(boxes.eq(i),minHeight,boxes.eq(minIndex).position().left,i);
			everyHeight[minIndex] += boxes.eq(i).height() + 40;
			
		};
		boxes.eq(i).hover(function() {
			$(this).stop().animate({
				'opacity':'0.5'
			}, 500);
		},function() {
			$(this).stop().animate({
				'opacity':'1'
			}, 500);
		});
	}

};

//获取最小列的索引
function getIndex(minHeight,everyHeight){
	for(index in everyHeight){
		if(everyHeight[index] == minHeight){
			return index;
		};

	};
};


//设置追加盒子的样式
var getStartNumber = 0;
var setStyle =function(box,top,left,index){
	if(getStartNumber >= index){
		return false;
	};
	box.css({
		'position':'absolute',
		'top': top,
		'left':left,
		'opacity':'0'
	}).stop().animate({
		'opacity': '1',
	},1000);
	getStartNumber = index;
}


//数据请求检验
var getCheck = function(wrap){
	//获取文档高度
	var documentHeight = $(window).height();
	//获取文档向上滚动的高度
	var scrollHeight = $(window).scrollTop();
	//获取最后一个盒子所在列的总高度
	var boxes = wrap.children('div');
	var lastBoxTop = boxes.eq(boxes.length-1).offset().top;
	var lastHeight = boxes.eq(boxes.length-1).height() + 20;
	var lastColHeight = lastBoxTop + lastHeight;
	return documentHeight + scrollHeight >= lastColHeight ? true : false;
};


//追加盒子函数
var appendBox = function(wrap,boxes){
	if(getCheck(wrap)){
		for (i in data) {
		var innerString = '<div><img src="'+data[i].src +'" alt=""><a href="#" target="_blank">'+data[i].title+i+'</a></div>';
		wrap.append(innerString);
		};
	}else{
		return false
	};
	waterfall(wrap,wrap.children('div'));

};
// 用到模拟数据，JSON是js对象表示法，是轻量级的文本数据交换格式。
//属性与属性之间用逗号分开，属性与属性值之间用冒号分开。

$(window).load(function() {
	var wrap = $('#wrap');
	var boxes = $('#wrap').children('div');
	waterfall(wrap,boxes);
	

	$(this).scroll(function(event) {
		appendBox(wrap,boxes);
	});
});

// $(window).on('load',function(){
// 	var wrap = $('#wrap');
// 	var boxes = $('#wrap').children('div');
// 	waterfall(wrap,boxes);
// });


// jQuery在写法上比js简洁，开发速度也快




// 大概意思：$(window).load(function(){})在高版本中已经废弃，

// 请用：$(window).on('load',function(){});替代

// jquery-3.5.1.min.js:2 Uncaught TypeError: e.indexOf is not a function
//     at S.fn.init.S.fn.load (jquery-3.5.1.min.js:2)
//     at jquery.js:45




//追加条件：最后一个盒子的top值+其高度 < document 高度值 + 滚动条滚动的值










