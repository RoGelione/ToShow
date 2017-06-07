$(function(){
	var a;
	$(".b-body").load("./data.html .b-show0");
	$(".b-header li").on("click",function(){
		a=$(this).index();
		switch (a){
				case 0:$(".b-body").load("./data.html .b-show0");
				break;
				case 1:$(".b-body").load("./data.html .b-show1");
				break;
				case 2:$(".b-body").load("./data.html .b-show2");
				break;
				case 3:$(".b-body").load("./data.html .b-show3");
				break;
				case 4:$(".b-body").load("./data.html .b-show4");
				break;
				case 5:$(".b-body").load("./data.html .b-show5");
				break;				
				case 6:$(".b-body").load("./data.html .b-show6");
				break;
				case 7:$(".b-body").load("./data.html .b-show7");
				break;
			default:
				break;
		}
		
	});
});
