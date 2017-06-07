				/*
				 * 菜单下拉列表
				 */
				$(function(){
					$(".nav-menu-item1").hover(function(){
						$(this).find("li").css("display","block");
						},function(){
						$(this).find("li").css("display","none");
					});
				});
				/*
				 *下拉插件 
				 */
				(function($){
					$.fn.pd=function(){
						this.each(function(n){
							$(this).hover(function(){
						$(this).find("li").css("display","block");
						},function(){
						$(this).find("li").css("display","none");
					});
						});
					}
				})(jQuery)
				
				/*
				 * 刷新图标动画
				 */
				$(function(){
				$(".b-list").hover(function(){
					$(".b-re").css({"transform":"rotate(360deg)","transition":"all 0.5s linear 0s"});
				},function(){					
					$(".b-re").css({"transform":"","transition":""});
				});
				});
				/*
				 * 侧边栏自动换页
				 */
					
				$(function(){
						var c=0;//自动滑页下标
						var b=0;//滑页向左百分比
						var t;//循环事件赋值，好控制	
						var lic;									
						/*
						 * 自动换页
						 */
						$(".p-list img").each(function(){//根据图片个数添加滑页点个数
						$(".slider-bar").append("<li class=''><a href='#'></a></li>")
						});
						function timedCount(){
//						$(".p-list").animate({bottom: b+"px"},500)}
						//$(".p-list").css("margin-left","-"+b+"%");
						$(".p-list").animate({marginLeft:"-"+b+"px"});
						lic = $(".slider-bar li").eq(c);
						$(".t-name").html($(".p-list img").eq(c).attr("alt"));
						lic.addClass("open");
						lic.siblings().removeClass("open");
						//b=(c+1)%4*100;
						b=(c+1)%4*240;
						c++;
						if (c==4) {
						c=0;
						t=setTimeout(timedCount,3000);
						}else{
						t=setTimeout(timedCount,3000);
						}					
						}						
						timedCount();//循环开始
						/*
						 * 手动换页
						 */
						var a;//手动换页下标
						$("#list").on("mouseenter","li",function(){
						clearTimeout(t);//鼠标停留，停止循环
						a=($(this).index());
						$(".slider-bar li").removeClass().filter(":eq("+a+")").addClass("open");
						b=a*240;
						c=a;						
						$(".t-name").html($(".p-list img").eq(a).attr("alt"));
						//$(".p-list").css("margin-left","-"+b+"%");
						$(".p-list").animate({marginLeft:"-"+b+"px"});
					}).mouseleave(timedCount);//鼠标离开继续循环					
				});