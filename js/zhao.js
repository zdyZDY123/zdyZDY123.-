//鼠标经过导航栏变色
	    var top_show=document.getElementById('#top_select_show');
		
	    var lis=document.querySelectorAll('li');
	    var div_one=document.querySelector('.div_one');
	    var div_two=document.querySelector('.div_two');
	    var div_three=document.querySelector('.div_three');
	    var div_fore=document.querySelector('.div_fore');
	    var fr=document.querySelector('.friend');
	    var fr_sp=fr.querySelector('span')
	    console.log(fr_sp)
	    //点击按钮显示相应的div
	    lis[0].onclick=function (){
           this.style.color='red'
            lis[1].style.color=''
            lis[2].style.color=''
	    	  lis[3].style.color=''
            div_one.style.display='block'
            div_two.style.display='none'
            div_three.style.display='none'
            div_fore.style.display='none'
		}
	    lis[1].onclick=function (){
	    	  lis[0].style.color=''
	    	  lis[2].style.color=''
	    	  lis[3].style.color=''
            this.style.color='red'
            div_two.style.display='block'
            div_one.style.display='none'
            div_three.style.display='none'
           div_fore.style.display='none'
		}
	    lis[2].onclick=function (){
            this.style.color='red'
           lis[1].style.color=''
            lis[0].style.color=''
	    	  lis[3].style.color=''
            div_three.style.display='block'
            div_one.style.display='none'
            div_two.style.display='none'
            div_fore.style.display='none'
		}
	    lis[3].onclick=function (){
            this.style.color='red'
            lis[1].style.color=''
            lis[2].style.color=''
	    	  lis[0].style.color=''
           div_fore.style.display='block'
            div_one.style.display='none'
            div_three.style.display='none'
            div_two.style.display='none'
		}
	  
	   
      //鼠标经过时链接变色
      fr.onmouseover=function(){
      	this.style.color='red'
      }
     fr.onmouseout=function(){
      	this.style.color=''
      }
//我的相册
    var div_fore=document.querySelector('.div_fore');
    var div_fore_li=div_fore.querySelectorAll('li');
    for(var i=0;i<div_fore_li.length;i++){
    	div_fore_li[i].onmouseover=function(){
  		this.style.marginTop='0px'
  		this.style.transitionDuration='300ms'

console.log(div_fore_li)
    	}
    	div_fore_li[i].onmouseout=function(){
  		this.style.marginTop='-10px'
  		this.style.transitionDuration='300ms'

    	}
    }
	//留言板
	//获取inp及提交按钮
	        
	        var oTxt=document.getElementById('txt');
            var oBtn=document.querySelectorAll('input')[1];
            var oUl=document.getElementById('ul');
            var count=document.getElementById('counter')
            var tk=0;
            oBtn.onclick=function(){
                var str=oTxt.value;
                var oLi=document.createElement("li");
                oLi.innerHTML=str;
                
                count.innerHTML++;
                var oBtn2=document.createElement("button");
                console.log(oBtn2)
                oBtn2.style.border='none';
                oBtn2.innerHTML='删除';
                // 把button追加到li中
                oLi.appendChild(oBtn2);
                // 点击事件
                oBtn2.onclick=function(){
                    //删除此button的父节点
                    oUl.removeChild(this.parentNode);
                    count.innerHTML--;
                }
                // ul里是否存在第一个元素节点
                if(oUl.children[0]){
                    // 在第一个节点前插入
                    oUl.insertBefore(oLi,oUl.children[0]);
                }else{
                    oUl.appendChild(oLi);
                }
                oTxt.value=null;//清空文本框
            }
            
            
            
            //
            
    //获取元素
        var play = document.querySelector("#play");//播放按钮
        var audio = document.querySelector("#audio");//音频文件
        var next = document.querySelector(".next");//下一曲
        var prev = document.querySelector(".prev");//上一曲
        var stop = document.querySelector(".stop");//停止
        var playerListLi = playerList.querySelectorAll("li")//播放列表li
        var totalTime = document.querySelector("#totalTime");//总时间
        var presentTime = document.querySelector("#presentTime");//当前时间
 
    //歌曲地址
        var playerMusic = ["../video/1.mp3","../video/2.mp3","../video/3.mp3"];
 
    //1. 点击播放歌曲，再次点击播放暂停
        play.addEventListener("click",startPlay);
    //2.点击切换下一曲
        next.addEventListener("click",theNext);
    //3.点击切换上一曲
        prev.addEventListener("click",thePrev);
    //4.点击停止播放
        stop.addEventListener("click",stopPlay);
 
 
 
    //定义播放函数
        //1.1 定义标杆，判断是否播放歌曲
        var flag = true;
        function startPlay(){
            if(flag){
                play.className="play2";
                play.title = "暂停";
                audio.play();
                //播放进度
                playProgress();
                //播放时间
                playTime();
            }else{
                play.className="play1";
                play.title = "播放";
                audio.pause();
            }
            flag = !flag;
        }
    //定义下一曲
        var n = 0;//定义歌曲索引
        function theNext(){
            n++;
            if(n == playerMusic.length){
                n = 0;
            }
            audio.src = playerMusic[n];
            //歌曲播放
            flag = true;
            startPlay();
            //切换列表
            switchList();
        }
    //定义下一曲
        function thePrev(){
            n--;
            if(n < 0){
                n = playerMusic.length - 1;
            }
            audio.src = playerMusic[n];
            //歌曲播放
            flag = true;
            startPlay();
            //切换列表
            switchList();
        }
    //切换列表
        function switchList(){
            for(var i=0; i<playerListLi.length; i++){
                playerListLi[i].className = "";
            }
            playerListLi[n].className = "";
        }
    //停止播放
        function stopPlay(){
            //设置当前播放时间为0;,并暂停播放
            audio.currentTime = 0;
            flag = false;
            startPlay();
        }
 
    //播放进度
        function playProgress(){
            //定义计时器
            var timer = null;
            if(flag){
                //开启计时器
                timer = setInterval(function(){
                    if(audio.currentTime >= audio.duration){
                        curProgrees.style.width = progrees.offsetWidth + "px";
                        clearInterval(timer);
                        theNext();
                    }else{
                        curProgrees.style.width = (audio.currentTime/audio.duration)*progrees.offsetWidth + "px";
                    }
 
                },30);
            }else{
                //关闭计时器
                clearInterval(timer);
            }
 
        }
    //播放时间
        function playTime(){
            //当前时间
            var timer2 = null;
            if(flag){
                timer2 = setInterval(function(){
                    //总时间
                    setTime(audio.duration,totalTime);
                    setTime(audio.currentTime,presentTime);
                },1000)
            }else{
                clearInterval(timer2)
            }
        }
    //设置时间
        function setTime(audioTime,obj){
            //总时间
            allMinute = Math.floor(audioTime/60);
            if(allMinute<10){
                allMinute = "0" + allMinute;
            }
            allSecond = Math.floor(audioTime%60);
            if(allSecond<10){
                allSecond = "0" + allSecond;
            }
            var allTime = allMinute + " : " + allSecond;
            obj.innerHTML = allTime;
        }

