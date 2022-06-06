window.onload=function(){
	//留言
	var oTxt=document.getElementById('message')
    //li库
    var oUl=document.querySelector('.qw')
	//提交
	var oBtn=document.querySelector('.primary')
	oBtn.onclick=function(){
		var str=oTxt.value;
		var oLi=document.createElement('li');
		
		oLi.innerHTML=str;
		
		console.log(str)
		
		var oBtn2=document.createElement("button");
                console.log(oBtn2)
                oBtn2.style.border='none';
                oBtn2.innerHTML='已读';
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
}
