function byid(id){
        return typeof(id)==='string'?document.getElementById(id):id;
        }
        var main = byid('main'),
            pics = byid('banner').getElementsByTagName('div'),
            dots = byid('dots').getElementsByTagName('li'),
            prev = byid('prev'),
            next = byid('next'),
            len = pics.length,
            index = 0,
            timer = null;
    function solide(){
        banner.onmouseover=function(){
            if(timer){
                clearInterval(timer);
            }
        }
        banner.onmouseout = function(){
            timer = setInterval(function(){
                index++;
                if(index>=len){
                    index=0;
                }
                changImg();
            },3000);
        }
        banner.onmouseout();
        for(var j=0;j<len;j++){
            dots[j].index=j;
            dots[j].onclick = function(){
                index = this.index;
                changImg();
            }
        }
        prev.onclick = function(){
            index--;
            if(index<0){
                index=len-1;
            }
            changImg();
        }
        next.onclick = function(){
            index++;
            if(index>=len){
                index=0;
            }
            changImg();
        }
    }
    solide();
    function changImg(){
        for(var i=0;i<len;i++){
            pics[i].style.display='none';
            dots[i].className="";
        }
        pics[index].style.display='block';
        dots[index].className='li1';
    }