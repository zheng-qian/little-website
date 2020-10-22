var sw=20, //一个方块的宽度
	sh=20, //一个方块的高度
	tr=30, //行数
	td=30; //列数

var snake=null,//蛇的实例
    food=null,
    game=null;

//方块函数
function Square(x,y,classname){
	//0,0   0,0
	//20,0  1,0
	//40,0  2,0
	this.x=x*sw;
	this.y=y*sh;
	this.class=classname;
	this.viewContent=document.createElement('div'); //方块对应的dom元素
	this.viewContent.className=this.class;
	this.parent=document.getElementById('snakeWrap');
}

Square.prototype.create=function(){
	this.viewContent.style.position='absolute';
	this.viewContent.style.width=sw+'px';
	this.viewContent.style.height=sh+'px';
	this.viewContent.style.left=this.x+'px';
	this.viewContent.style.top=this.y+'px';
	this.parent.appendChild(this.viewContent);
};

Square.prototype.remove=function(){
	this.parent.removeChild(this.viewContent);
}

//蛇
function Snake(){
	this.head=null; //存蛇头信息
	this.tail=null; //存蛇尾信息
	this.pos=[];  //存蛇身上每一个方块的位置
	this.directionNum={
		left:{
			x:-1,
			y:0,
			rotate:180
		},
		right:{
			x:1,
			y:0,
			rotate:0
		},
		up:{
			x:0,
			y:-1,
			rotate:-90
		},
		down:{
			x:0,
			y:1,
			rotate:90
		},
	};//存储走的方向，用一个对象来表示

}

Snake.prototype.init=function(){
	//创建蛇头
	var snakeHead=new Square(2,0,'snakeHead');
	snakeHead.create();
	this.head =snakeHead; //存储蛇头信息
	this.pos.push([2,0]);  //蛇头位置存起来

	//创建蛇身体
	var snakeBody1=new Square(1,0,'snakeBody');
	snakeBody1.create();
	this.pos.push([1,0]);

	var snakeBody2=new Square(0,0,'snakeBody');
	snakeBody2.create();
	this.tail=snakeBody2; //存蛇尾信息
	this.pos.push([0,0]);

	//形成链表关系
	snakeHead.last=null;
	snakeHead.next=snakeBody1;

	snakeBody1.last=snakeHead;
	snakeBody1.next=snakeBody2;

	snakeBody2.last=snakeBody1;
	snakeBody2.next=null;

	//给蛇添加一条属性，用来表示蛇走的方向
	this.direction=this.directionNum.right; //默认向右
}

//这个方法用来获取蛇头的下一个位置对应的元素，要根据元素做不同的事情
Snake.prototype.getNextPos=function(){
	var nextPos=[  //蛇头要走的下一个点的坐标
	this.head.x/sw+this.direction.x,
	this.head.y/sh+this.direction.y,
	];

	//下个点是自己，代表撞到自己，游戏结束
	var selfCollied=false;
	this.pos.forEach(function(value){
		if(value[0]==nextPos[0]&&value[1]==nextPos[1]){
			selfCollied=true;
		}
	});
	if(selfCollied){
		alert('撞到自己了');
		this.strategies.die.call(this);
		return;
	}
	//下个点是墙，游戏结束
	if(nextPos[0]<0||nextPos[1]<0||nextPos[0]>td-1||nextPos[1]>tr-1){
		alert('撞墙了');
		this.strategies.die.call(this);
		return;
	}

	//下个点是食物，吃
	if(food&&food.pos[0]==nextPos[0]&&food.pos[1]==nextPos[1]){
		this.strategies.eat.call(this);
		return;
	}
	
	//下个点空，走	
	this.strategies.move.call(this);
};


//处理碰撞后要做的事
Snake.prototype.strategies={
	move:function(format){ //这个参数决定要不要删除蛇尾,传了这个参数表示吃
		//创建新身体，在旧蛇头位置
		var newBody=new Square(this.head.x/sw,this.head.y/sh,'snakeBody');
		
		newBody.next=this.head.next;
		newBody.next.last=newBody;
		newBody.last=null;

		this.head.remove();//把旧蛇头从原来的位置删除
		newBody.create();	
		//创建一个新蛇头
		var newHead=new Square(this.head.x/sw+this.direction.x,this.head.y/sh+this.direction.y,'snakeHead');
		newHead.next=newBody;
		newHead.last=null;
		newBody.last=newHead;
		newHead.viewContent.style.transform='rotate('+this.direction.rotate+'deg)';
		newHead.create();

		this.pos.splice(0,0,[this.head.x/sw+this.direction.x,this.head.y/sh+this.direction.y])
		this.head=newHead;

		if(!format){  //如果format的值为false，表需要删除(除了吃之外的操作)
			this.tail.remove();
			this.tail=this.tail.last;
			this.pos.pop();
		}

		
	},
	eat:function(){
		this.strategies.move.call(this,true);
		createFood();
		game.score++;
	},
	die:function(){
		game.over();
	}
};




snake=new Snake();

//创建食物
function createFood(){
	//食物小方块的随机坐标
	var x=null;
	var y=null;
	var include=true;  //循环跳出的条件，true表示食物的坐标在蛇身上(表示需要持续循环)，false表示不再蛇身上不要循环
	while(include){
		x=Math.round(Math.random()*(td-1));
		y=Math.round(Math.random()*(tr-1));

		snake.pos.forEach(function(value){
			if(x!=value[0] && y!=value[1]){
				//这个条件成立说明现在随机出现这个坐标，在蛇身上并没有找到
				include=false;
			}
		});
	}
		//生成食物
		food=new Square(x,y,'food');
		food.pos=[x,y];//存储一下生成食物的坐标，用于跟蛇头要走的下一个点做对比
		var foodDom=document.querySelector('.food');
		if(foodDom){
			foodDom.style.left=x*sw+'px';
			foodDom.style.top=y*sh+'px';
		}else{
			food.create();
		}
}

//创建游戏逻辑
function Game(){
	this.timer=null;
	this.score=0;
} 

Game.prototype.init=function(){
	snake.init();
	createFood();
	document.onkeydown=function(ev){
		if(ev.which==37 && snake.direction != snake.directionNum.right){
			snake.direction=snake.directionNum.left;
		}else if(ev.which==38 && snake.direction != snake.directionNum.down){
			snake.direction=snake.directionNum.up;
		}else if(ev.which==39 && snake.direction != snake.directionNum.left){
			snake.direction=snake.directionNum.right;
		}else if(ev.which==40 && snake.direction != snake.directionNum.up){
			snake.direction=snake.directionNum.down;
		}
	}
	this.start();
}
Game.prototype.start=function(){
	this.timer=setInterval(function(){
		snake.getNextPos();
	},200);
};

Game.prototype.pause=function(){
	clearInterval(this.timer);
};

Game.prototype.over=function(){
	clearInterval(this.timer);
	alert('得分为:'+this.score);

	//回到初始状态
	var snakeWrap=document.getElementById('snakeWrap');
	snakeWrap.innerHTML='';
	snake = new Snake();
	game = new Game;
	var startBtnWrap=document.querySelector('.startBtn');
	startBtnWrap.style.display='block';
};

//开启游戏
game=new Game();
var audio= new Audio("../images/1.wav");//这里的路径写上mp3文件在项目中的绝对路径
var startBtn=document.querySelector('.startBtn button');
startBtn.onclick=function(){
	startBtn.parentNode.style.display='none';
	game.init();
 	audio.play();
 	
};

//暂停
var snakeWrap=document.getElementById('snakeWrap');
var pauseBtn=document.querySelector('.pauseBtn button');
snakeWrap.onclick=function(){
	game.pause();
	pauseBtn.parentNode.style.display='block';
	audio.pause();
};

pauseBtn.onclick=function(){
	game.start();
	pauseBtn.parentNode.style.display='none';
	audio.play();
}









































































