
$(document).ready(function(){
	var num=$('.banner_span span').length;
	var i_mun=0;
	var timer_banner=null;
	$('.banner_ul li:gt(0)').hide();//页面加载隐藏所有的li 除了第一个
	
//底下小图标点击切换
	$('.banner_span span').click(function(){
		$(this).addClass('banner_span_one')
			   .siblings('span').removeClass('banner_span_one');
		var i_mun1=$('.banner_span span').index(this);
		$('.banner_ul li').eq(i_mun1).fadeIn('slow')
			                   .siblings('li').fadeOut('slow');

		i_mun=i_mun1;
	});
	
	//自动播放函数
	function bannerMoveks(){
		timer_banner=setInterval(function(){
			move_banner()
		},4000)//(毫秒为单位，这是3秒)
	};
	bannerMoveks();//开始自动播放

	//鼠标移动到banner上时停止播放
	$('.banner').mouseover(function(){
		clearInterval(timer_banner);
	});

	//鼠标离开 banner 开启定时播放
	$('.banner').mouseout(function(){
		bannerMoveks();
	})

//banner 右边点击执行函数
   function move_banner(){
			if(i_mun==num-1){
				i_mun=-1
			}
			//大图切换
			$('.banner_ul li').eq(i_mun+1).fadeIn('slow')
									   .siblings('li').fadeOut('slow');
			//小图切换
			$('.banner_span span').eq(i_mun+1).addClass('banner_span_one')
					   .siblings('span').removeClass('banner_span_one');
			i_mun++		
		}
})















