/**
 * Created  2016/4/13.
 */
$(function () {
	// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	// 	//console.log('http://m.lingnan.ren/');
	// 	window.location.href = "http://m.lingnan.ren/";
	// }
    $("#cide").hover(function(){
    	$(".rightFixed_lCide").animate({ width: 'toggle' });  
    })
    $("#iphone").hover(function(){
    	$(".rightFixed_liphoe").animate({ width: 'toggle' });  
    })



	//  app 开发   精致服务  
    $("http://yuxiit.lingnan.ren/js/ul.head_list .jzfw").mouseover(function(){
    	$("div.head_select").show(); 
    	$(this).addClass("head-activ").css("color", "#fff");
    })
    $("http://yuxiit.lingnan.ren/js/ul.head_list .jzfw").mouseout(function(){
    	$(".head_select").hide(); 
    	$(this).removeClass("head-activ").css("color", "");
    })
    $("div.head_select").mouseover(function(){
    	$(".head_select").show(); 
    	$("http://yuxiit.lingnan.ren/js/ul.head_list .jzfw").addClass("head-activ").css("color", "#fff");
    })
    $("div.head_select").mouseout(function(){
    	$(".head_select").hide();
    	$("http://yuxiit.lingnan.ren/js/ul.head_list .jzfw").removeClass("head-activ").css("color", "");
    })
     
    
    //  程序开发   精致服务  
    $("ul.head_list .jzfwm1").mouseover(function(){
    	$("div.head_select").show(); 
    	$(this).addClass("head-activ");
    })
    $("ul.head_list .jzfwm1").mouseout(function(){
    	$(".head_select").hide(); 
    	$(this).removeClass("head-activ");
    })
    $("div.head_select").mouseover(function(){
    	$(".head_select").show(); 
    	$("ul.head_list .jzfwm1").addClass("head-activ");
    })
    $("div.head_select").mouseout(function(){
    	$(".head_select").hide();
    	$("ul.head_list .jzfwm1").removeClass("head-activ");
    })
    

    
    //  app 开发   产品中心
    $("http://yuxiit.lingnan.ren/js/ul.head_list .cpzx").mouseover(function(){
    	$("div.head_selects_fx").show(); $(this).addClass("head-activ").css("color", "#fff");
    })
    $("http://yuxiit.lingnan.ren/js/ul.head_list .cpzx").mouseout(function(){
    	$("div.head_selects_fx").hide(); $(this).removeClass("head-activ").css("color", "");
    })
    $("div.head_selects_fx").mouseover(function(){
    	$("div.head_selects_fx").show(); $("http://yuxiit.lingnan.ren/js/ul.head_list .cpzx").addClass("head-activ").css("color", "#fff");
    })
    $("div.head_selects_fx").mouseout(function(){
    	$("div.head_selects_fx").hide(); $("http://yuxiit.lingnan.ren/js/ul.head_list .cpzx").removeClass("head-activ").css("color", "");
    })
    
    
    document.onclick=function(e){
    		$(".head_select").hide();
	};
	$(".head_select ul").onclick=function(e){
		e=e||event;stopFunction(e);
	}
	$(".cpzx,.head_selects_fx ul").mouseover(function(){
    	$(".head_selects_fx").show();
    	$(this).addClass("head-activ");
    })
	$(".cpzx,.head_selects_fx ul").mouseout(function(){
		$(".head_selects_fx").hide();
		$(this).removeClass("head-activ");
	})

	$(".head_selects_fx").mouseover(function(){
		$("http://yuxiit.lingnan.ren/js/ul.head_list .cpzx").addClass("head-activ").css("color", "#fff");
	});

	$(".head_selects_fx").mouseout(function(){
		$("http://yuxiit.lingnan.ren/js/ul.head_list .cpzx").removeClass("head-activ").css("color", "");
	});
	
	
	
	
	$("ul.head_list .jzfw2").mouseover(function(){
		$(this).addClass("head-activ").css("color","#fff");
	});
	$("ul.head_list .jzfw2").mouseout(function(){
		$(this).removeClass("head-activ").css("color","#749dd6");
	});

	$(".head_select").mouseout(function(){
			$("ul.head_list .jzfw2").removeClass("head-activ").css("color","#749dd6");
	});
	$(".head_select").mouseover(function(){
			$("ul.head_list .jzfw2").addClass("head-activ").css("color","#fff");
	});


	// $(".head_selects_fx").mouseover(function(){
 //    	$(".cpzx,.head_selects_fx ul").addClass("head-activ").css("color", "#fff");
 //    })
	// $(".head_selects_fx").mouseover(function(){
 //    	$(".cpzx,.head_selects_fx ul").removeClass("head-activ").css("color", "");
 //    })


	$(".cpzx_ue,.headUe_select_fx ul").mouseover(function(){
    	$(".headUe_select_fx").show()
    })
	$(".cpzx_ue,.headUe_select_fx ul").mouseout(function(){
		$(".headUe_select_fx").hide()
	})
	$(".headUe_select_fx").mouseover(function(){
    	$(".cpzx_ue").show().addClass("head-activ").css("color", "#fff")
    })
	$(".headUe_select_fx").mouseout(function(){
    	$(".cpzx_ue").show().removeClass("head-activ").css("color", "")
    })


	$("#totel").hover(function () {
        $(".tellist").animate({ width: 'toggle' });
    });
    $("#erweima").hover(function () {
        $(".erlist").animate({ width: 'toggle' });
    });
  
})
/**
 * Created 产品中心  2016/4/13.
 */
function productCenterLoad(){	
	var totalH=$(document.body).height();
	$(".productCenter_r1").css("padding-top",(totalH-150)/2);
	$(".productCenter_r2").css("margin-top",(totalH-300)/2);
	$(".productCenter_r3").css("margin-top",(totalH-470)/2);
	$(".productCenter_r4").css("margin-top",(totalH-450)/2);
	$(".productCenter_r5").css("margin-top",(totalH-310)/2);
	gundong()
	
	$(".productCenter_r5_r ul li").each(function(i){
		$(this).mouseover(function(){	
			$(".productCenter_r5_r ul li").css("color","")
			$(".productCenter_r5_r ul li").find("p").css("color","");
			$(".productCenter_r5_r ul li").find("p").css("background-color","");
			$(".productCenter_r5_r ul li").find("p").css("border","1px solid #000000");
			
			$(this).css("color","#749DD6")
			$(this).find("p").css("color","white");
			$(this).find("p").css("background-color","#749DD6");
			$(this).find("p").css("border","0");
			
//			$(".productCenter_r5_l ul li").eq(i).fadeIn('slow')
//				                   .siblings('.productCenter_r5_l ul li').fadeOut('slow');
			$(".productCenter_r5_l ul li").eq(i).show()
				                   .siblings('.productCenter_r5_l ul li').hide();
		})
		$(this).mouseout(function(){
			$(this).css("color","")
			$(this).find("p").css("color","");
			$(this).find("p").css("background-color","");
			$(this).find("p").css("border","1px solid #000000");
			
			$(".productCenter_r5_r ul li").eq(0).css("color","#749DD6")
			$(".productCenter_r5_r ul li").eq(0).find("p").css("color","white");
			$(".productCenter_r5_r ul li").eq(0).find("p").css("background-color","#749DD6");
			$(".productCenter_r5_r ul li").eq(0).find("p").css("border","0");
			$(".productCenter_r5_l ul li").hide();
			$(".productCenter_r5_l ul li").eq(0).show();
		})
	})
}

function gundong(){
	$('.main_product').onepage_scroll({
		sectionContainer: '.product_list'
	});
}

function solutionLoad(){
	$(".solution_menu li").each(function(i){
		$(this).click(function(){
			$(".solution_menu li").css("background-color","#c1cad6")
			$(this).css("background-color","#749dd6")
			$(".solution_con2nexts div").hide();
			$(".solution_con2nexts div").eq(i).fadeIn('slow').siblings('.solution_con2nexts div').fadeOut('slow');
		})
	})
}


/**
 * Created UE设计加载  2016/4/26.
 */
function ueLoad(){
	$(".jzfw1,.headUe_select ul").mouseover(function(){
    	$(".headUe_select").show();
	})
	$(".headUe_select ul,.jzfw1").mouseout(function(){
		$(".headUe_select").hide()
	})

	$(".headUe_select").mouseover(function(){
		$("div.headUe_left .jzfw1 a").addClass("head-activ").css("color", "#fff");
	})
	$(".headUe_select").mouseout(function(){
		$("div.headUe_left .jzfw1 a").removeClass("head-activ").css("color", "");
	})




	$(".jzfw2,.head_select ul").mouseover(function(){
		$(".head_select").show()
	}) 
	$(".jzfw2,.head_select ul").mouseout(function(){
		$(".head_select").hide()
	})   	
	$(".cpzx_ue2,.head_selects_fx ul").mouseover(function(){
		$(".head_selects_fx").show();
    })	
    $(".cpzx_ue2,.head_selects_fx ul").mouseout(function(){
		$(".head_selects_fx").hide();
    })
//  	document.onclick=function(e){
//  		$(".headUe_select").hide();
//  	};
//  	$(".headUe_select ul").onclick=function(e){
//  		e=e||event;stopFunction(e);
//  	}
		
}
function stopFunction(e){
	e.stopPropagation ? e.stopPropagetion():e.cancelBubble=true;
}

/**
 * Created 首页  2016/4/13.
 */
function indexLoad(){	
	$(".content3_center ul li").hover(
		function () {
		    $(this).find(".dask").stop().delay(50).animate({ "bottom": 64, opacity: 0.9 }, 300)
		},
		function () {
		    $(this).find(".dask").stop().animate({ "bottom": -400, opacity: 0 }, 300)
		}
	);
    $(".picScroll li img").each(function(i){
    	$(this).mouseover(function(){
    		$(this).attr("src","img/lshz"+i+".png");
    	})
    	$(this).mouseout(function(){
    		$(this).attr("src","img/hz"+i+".png")
    	})
    });
    $(".rightFixed_r ul li").each(function(i){
    	$(this).mouseover(function(){
    		$(this).removeClass("cl");
    		$(this).addClass("r_addClass");
    	})
    	$(this).mouseout(function(){
    		$(this).addClass("cl");
    		$(this).removeClass("r_addClass");
    	})	
    })    
    stepSlide();
}
/**
 * Created 案例  2016/4/18.
 */
function caseLoad(){
	var totalH=	$(document).height()
	var totalW=	$(document).width()
	
	$(".caseCenterC_next ul").mouseover(function(){
		$(this).children("li").hide();
//		$(this).children("abbr").show()
		$(this).children("abbr").show()
	})
	$(".caseCenterC_next ul").mouseout(function(){
		$(this).children("abbr").hide();
		$(this).children("li").show()
	})
	$(".caseInfoBackg").height(totalH);
//网站
	$(".case_jdwy").click(function(){
		$("#caseInfo_jdwy").fadeIn("slow")
		
	})
	$(".case_tckd").click(function(){
		$("#caseInfo_tckd").fadeIn("slow")
//		$(".caseInfoCenter").css("top",(totalH-625)/2)
//		$(".caseInfoCenter").css("left",(totalW-1210)/2)
	})
	$(".case_bsd").click(function(){
		$("#caseInfo_bsd").fadeIn("slow")
	})
	$(".case_ydkz").click(function(){
		$("#caseInfo_ydkz").fadeIn("slow")
	})
	$(".case_kmg").click(function(){
		$("#caseInfo_kmg").fadeIn("slow")
	})
	$(".case_gohw").click(function(){
		$("#caseInfo_gohw").fadeIn("slow")
	})
	$(".case_gfkg").click(function(){
		$("#caseInfo_gfkg").fadeIn("slow")
	})
//APP	
	$(".caseApp_tckd").click(function(){
		$("#caseInfoApp_tckd").fadeIn("slow")
	})
	$(".caseApp_hm").click(function(){
		$("#caseInfoApp_hm").fadeIn("slow")
	})
	$(".caseApp_laqx").click(function(){
		$("#caseInfoApp_laqx").fadeIn("slow")
	})
	$(".caseApp_mlmz").click(function(){
		$("#caseInfoApp_mlmz").fadeIn("slow")
	})
	$(".caseApp_qgw").click(function(){
		$("#caseInfoApp_qgw").fadeIn("slow")
	})
	$(".caseApp_drw").click(function(){
		$("#caseInfoApp_drw").fadeIn("slow")
	})
//微信
	$(".caseWx_jdwy").click(function(){
		$("#caseInfoWx_jdwy").fadeIn("slow")
	})
	$(".caseWx_gohw").click(function(){
		$("#caseInfoWx_gohw").fadeIn("slow")
	})
	$(".caseWx_escf").click(function(){
		$("#caseInfoWx_escf").fadeIn("slow")
	})
	$(".caseWx_td").click(function(){
		$("#caseInfoWx_td").fadeIn("slow")
	})
	$(".caseWx_fhl").click(function(){
		$("#caseInfoWx_fhl").fadeIn("slow")
	})
	$(".caseWx_laqx").click(function(){
		$("#caseInfoWx_laqx").fadeIn("slow")
	})
				
	
	$(".caseInfoClose img").click(function(){
		$(this).parents(".caseInfo").fadeOut()
	})
		
	caseInfoOnload();	
}
function productCase(i){
	if(i==3){
		location.href="default.html#case";
	}
	
}

/*步骤滑动*/
/*****/
function stepSlide() {
    var $t2, leftX2, newWidth2;
    $('http://yuxiit.lingnan.ren/js/.content5 .ul2').append('<div class="block2"></div>');
    var $block2 = $('.block2');
    $block2.width($(".current2").width()).css('left', $('.current2 img').position().left).data('rightLeft', $block2.position().left).data('rightWidth', $block2.width());

    $('.content5 .ul2 li').find('img').hover(function () {
        $t2 = $(this);
        leftX2 = $t2.position().left;
        newWidth2 = $t2.parent().width();

        $block2.stop().animate({
            left: leftX2,
            width: newWidth2
        }, 300);
    }, function () {
        $block2.stop().animate({
            left: $block2.data('rightLeft'),
            width: $block.data('rightWidth')
        }, 300)
    })
}

/** 
* 回到页面顶部 
* @param acceleration 加速度 
* @param time 时间间隔 (毫秒) 
**/
function goTop(acceleration, time) {
    acceleration = acceleration || 0.1;
    time = time || 20;

    var x1 = 0;
    var y1 = 0;
    var x2 = 0;
    var y2 = 0;
    var x3 = 0;
    var y3 = 0;

    if (document.documentElement) {
        x1 = document.documentElement.scrollLeft || 0;
        y1 = document.documentElement.scrollTop || 0;
    }
    if (document.body) {
        x2 = document.body.scrollLeft || 0;
        y2 = document.body.scrollTop || 0;
    }
    var x3 = window.scrollX || 0;
    var y3 = window.scrollY || 0;

    // 滚动条到页面顶部的水平距离 
    var x = Math.max(x1, Math.max(x2, x3));
    // 滚动条到页面顶部的垂直距离 
    var y = Math.max(y1, Math.max(y2, y3));

    // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小 
    var speed = 1 + acceleration;
    window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));

    // 如果距离不为零, 继续调用迭代本函数 
    if (x > 0 || y > 0) {
        var invokeFunction = "goTop(" + acceleration + ", " + time + ")";
        window.setTimeout(invokeFunction, time);
    }
	
};



//首页合作伙伴随机旋转&&滑动
$('.index-heZuo li').on('mouseenter',function(){
$(this).removeClass('rotate');
}).on('mouseleave',function(){
$(this).addClass('rotate');
})

setInterval(function(){
var random=Math.floor(Math.random()*(35));//0-34
// console.log(random);
var rotate_li=$('.index-heZuo .rotate').eq(random);
if(rotate_li){
rotate_li.addClass('ro_cur');
}else{
return;
}
var remove_timear=setTimeout(function(){
rotate_li.removeClass('ro_cur');
},1000,function(){
clearTimeout(remove_timear);
})
},1500)
var app_old_hover_i=0;
$('.app-img li').on('mouseenter',function(){
var i=$(this).index();
var li_left=$(this)[0].offsetLeft+43;
if(i-app_old_hover_i>=0){
$('.app-item .app-item-txt').eq(i).siblings('.active').animate({'left': '100%','opacity':0}, 1000);
}else{
$('.app-item .app-item-txt').eq(i).siblings('.active').animate({'left': '-100%','opacity':0}, 1000);
}
var app_timer=setTimeout(function(){
$('.app-item .app-item-txt').eq(i).addClass('active').siblings('.active').removeClass('active').animate({'left':0,'opacity':1});
},800,function(){
clearTimeout(app_timer);
})
// $('.app-item .app-item-txt').eq(i).addClass('active').siblings('.active').removeClass('active');
$('.min-curBg').css('left',li_left+'px');
app_old_hover_i=i;
})