//主导航栏，屏幕跟随


var oNav=$('.nav')[0];
    	window.onscroll=function(){
		
		var os_Top = document.documentElement.scrollTop || document.body.scrollTop;
		
		
		if(os_Top>183){
					oNav.style.position='fixed';
					oNav.style.top=0;
					$('.main-banner').css({'margin-top':'52px'});
				}else{
					oNav.style.position='static';
					$('.main-banner').css({'margin-top':'0px'});
				}
		
}