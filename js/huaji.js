$(function(){
	$("#h-huaji li").mouseover(function(){
		
		$(this).addClass("huaji");
	
	}).mouseleave(function(){
		a=$(this).index();
		setInterval(function(){
			$("#h-huaji li").eq(a).removeClass();
		},2000);
		
//		setTimeout(function(){
//		$("#h-huaji li").eq(a).removeClass();
//		},2000);
	});
	
});
$(function(){
	var tx;//当前选取的字符
	var stx;//当前选取的兄弟节点的字符
	var i;//循环计数
	$(".b-header li").on("click",function(){
		
//		$(this).find("i:first-child").setbackgound($(this).index());
				/*
				 * 设置图标显示
				 */
		$(this).siblings().find("i:first-child").css("display","none");	
		$(this).find("i:first-child").css("display","block");	//时快时慢，暂时没想到好方法
		tx=$(this).find("span").text();
		stx=$(this).siblings().find("span");
		for (i=0;i<stx.length;i++) {		
			if (stx[i].innerHTML.length>1) {	//数组是javascript的对象，要用js的方法innerhtml
				$(stx[i]).text(stx[i].innerHTML.replace(/周/,""));
			} 
		}
		
		if(tx.length<2){
			$(this).find("span").text("周"+tx);
		}
		/*
		 * 设置颜色变化
		 */
		$(this).find("span").css("color","white");
		$(this).siblings().find("span").css("color","black");
	})
});
/*(function(){
	var a;
	$.fn.setbackgound=function(){		
//		alert(a);
//		this.css({"background":"url(img/z"+a+".png)","display":"block"});//这种方法切换速度好像速度变慢了，，
		this.css("display","block");
		return this;
	}
})()*/
