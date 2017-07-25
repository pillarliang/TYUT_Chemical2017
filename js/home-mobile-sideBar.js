//移动端顶栏侧滑

//window.onload=function(){
	

			var section=document.querySelector('section');
			var label=document.querySelector('label a:last-of-type');
			var lis=document.querySelectorAll('.sidenav li');
			var lis_a=document.querySelectorAll('.sidenav a');
			
			//移动侧滑展开函数
			function label_show(){
				section.style.transform="translateX(200px)";
				for(var i=0;i<lis_a.length;i++)
				{
					lis_a[i].style.opacity=1;
					lis_a[i].style.transform="translateX(10px)";
					lis[i].onclick=function(){
						//点击侧滑栏中任一项后调用移动侧滑收起函数
						label_hide();
//						section.style.transform="translateX(0px)";
//						for(var i=0;i<lis_a.length;i++)
//						{
//							lis_a[i].style.opacity=0;
//							lis_a[i].style.transform="translateX(100px)";
//						}
//						label.href="javascript:label_show();";
					}
				}
				$('.sidenav li:nth-child(1) a').css({'transition-delay':'0.02s'});
				$('.sidenav li:nth-child(2) a').css({'transition-delay':'0.04s'});
				$('.sidenav li:nth-child(3) a').css({'transition-delay':'0.06s'});
				$('.sidenav li:nth-child(4) a').css({'transition-delay':'0.08s'});
				$('.sidenav li:nth-child(5) a').css({'transition-delay':'0.10s'});
				$('.sidenav li:nth-child(6) a').css({'transition-delay':'0.12s'});
				$('.sidenav li:nth-child(7) a').css({'transition-delay':'0.14s'});
				$('.sidenav li:nth-child(8) a').css({'transition-delay':'0.16s'});
				
				label.href="javascript:label_hide();";
				
				
				$('.section-lock').css({'width':'100%','height':'100%'});
			}
			//移动侧滑收起函数
			function label_hide(){
				section.style.transform="translateX(0px)";
				for(var i=0;i<lis_a.length;i++)
				{
					lis_a[i].style.opacity=0;
					lis_a[i].style.transform="translateX(100px)";
				}
				label.href="javascript:label_show();";
				
				$('.section-lock').css({'width':'0','height':'0'});
			}
			
			
			
			
			/*侧滑返回*/
			document.querySelector('.section-lock').onmousedown=function(){
				if($('.sidenav a').css('opacity')=='1'){
						
							section.style.transform="translateX(0px)";
							for(var i=0;i<lis_a.length;i++)
							{
								lis_a[i].style.opacity=0;
								lis_a[i].style.transform="translateX(100px)";
							}
							label.href="javascript:label_show();";
							
							$('.section-lock').css({'width':'0','height':'0'});
					}
			
			}
			
			
			
//			
//}		