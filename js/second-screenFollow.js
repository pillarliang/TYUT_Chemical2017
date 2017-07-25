//主导航栏，左侧导航栏屏幕跟随



//jQ对象转jS对象
	
//	var oLeftBar = document.getElementById('main-other-leftbar');
	var oLeftBar = $('.main-other-leftbar')[0];

//	var oNav=document.querySelector('.nav');
    var oNav=$('.nav')[0];
	
//	var oRightBarHeight = document.getElementById('main-other-rightbar').offsetHeight;
	var oRightBarHeight =$('.main-other-rightbar')[0].offsetHeight;
	var oLeftBarHeight = $('.main-other-leftbar')[0].offsetHeight;
	
//	$('.main-other').css({'height':oRightBarHeight+'px'});
	$('.main-other')[0].style.height=oRightBarHeight+'px';
	$('.main-other')[0].style.minHeight=oLeftBarHeight+'px';
	
	
	
	
	
	window.onscroll=function(){
		
		var os_Top = document.documentElement.scrollTop || document.body.scrollTop;
		
		if(os_Top > 390) {
			oLeftBar.style.marginTop = os_Top - 390 + 'px';
			
		} else {	
			oLeftBar.style.marginTop = 0;
		}
		
		if(os_Top>183){
					oNav.style.position='fixed';
					oNav.style.top=0;
					$('.main-banner').css({'margin-top':'52px'});
				}else{
					oNav.style.position='static';
					$('.main-banner').css({'margin-top':'0px'});
				}
		
}