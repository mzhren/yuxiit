function timesw(_time){
		var date = new Date(_time * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
		var Y = date.getFullYear() + '-';
		var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
		var D = date.getDate() + ' ';
		var h = date.getHours() + ':';
		var m = date.getMinutes();
		var s = date.getSeconds();
		return Y + M + D + h + m;
}

$(function(){
	var datas;
	$.post("http://article.lingnan.ren/Home/Article/articleList.html",{p1_Num: 10}).done(function(res){
		if(res.code == '10000'){
			datas = res.data;
		}
	});

	setTimeout(function(){
		// console.log(datas);
		for (var i = 0; i < datas.length; i++) {
			$('.firstPageBox3Li  .cBlue').eq(i).html(datas[i].name);
			for ( var j = 0; j < 4; j++) {
				// datas[i].articleList.length
				var _html = '<li>' +
				'<a rel="nofollow" target="_blank"><span class="pull-right "></span></a>' +
				'<a target="_blank" href="http://lingnan.ren/news/news_' + datas[i].articleList[j].id +  '.html' + '"title="' +datas[i].articleList[j].title+ '"class="cGray f_14">' +
				'<span class="pull-right">' + timesw(datas[i].articleList[j].time) + '</span>' +
				'<span class="oneIn oneIn_1">' + datas[i].articleList[j].title + '</span>'+
				'<div class="blank20"></div>' +
				'</a>' +
				'</li>'
				$('.firstPageBox3Li').eq(i).children('ul').append(_html);
			}
		};
	},1000)
});

// http://yuxiit.lingnan.ren/news/news_60.html
// 	'<a target="_blank" href="http://article.lingnan.ren/home/article/newsdetails/id/' + datas[i].articleList[j].id +  '.html' + '"title="' +datas[i].articleList[j].title+ '"class="cGray f_14">' +
// http://article.lingnan.ren/?id=41.html