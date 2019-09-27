    $(function(){
        if($(window).scrollTop()>10){
            a()
        }else{
            b();
        }
        $(window).scroll(function () {
            if($(window).scrollTop()>10){
                a()
            }else{
                b();
            }
            if($(window).scrollTop()>300&&$(window).scrollTop()<400){
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('canvas'));

                // 指定图表的配置项和数据
                option = {
                    title: {
                        text: '折线图堆叠'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['微信开发','微信开发','微信开发','微信开发']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage:{show:false}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['2013','2014','2015','2016']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            // name:'微信开发',
                            type:'line',
                            symbol:'circle',
                            symbolSize:12,
                            stack: '总量',
                            itemStyle : {  
                                normal : { 
                                    color:'#4b5a77', 
                                    lineStyle:{  
                                        color:'#4b5a77'  
                                    }
                                }  
                            },  
                            data:[350, 460, 470, 549]
                        }
                    ]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        })
    })
    function a(){
                $(".head").css({
                    "background":"#fff",
                    "border-bottom":"1px solid #cfcfcf"
                });
                $(".head_left ul li a").css({
                    "color":"#717171"
                });
               $(".head_right ul li").css({
                    "color":"#749dd6"
               })              
                $(".head_right ul li span").css({
                    "color":"#749dd6"
               })
               $(".jzfw").css({"color":"#749dd6"})
               $(".head_list a").hover(
                    function () {
                        $(this).css({"color":"#fff"});
                      },
                      function () {
                        $(this).css({"color":"#999"});
                        $(".jzfw").css("color","rgb(116, 157, 214)")
                    }
                );
               $(".head_select").addClass("a");
               $(".head_select a").css("color","#fff");
               $("http://yuxiit.lingnan.ren/js/.head_select .app").css("color","#749DD6");
               $(".head_selects_fx").addClass("a");
               $(".head_select li").hover(
//                  function () {
//                      $(this).find("a").css({"color":"rgb(116, 157, 214)"});
//                    },
                      function () {
                        $(this).find("a").css({"color":"#fff"});
                        $(".app").css({"color":"rgb(116, 157, 214)"});
                    }
                );
    }
    function b(){
                $(".head").css({
                    "background":"transparent",
                    "border-bottom":"0"
                });
                $(".head_left ul li a").css({
                    "color":"#c4ddff"
                });
               $(".head_right ul li").css({
                    "color":"#fff"
               })              
                $(".head_right ul li span").css({
                    "color":"#fff"
               }) 
               $(".jzfw").css({"color":"#fff"});

                $(".head_list a").hover(
                    function () {
                        $(this).css({"color":"#fff"});
                      },
                      function () {
                        $(this).css({"color":"#c4ddff"});
                        $(".jzfw").css("color","#fff")
                    }
                );
                 $(".head_select").removeClass("a");
                 $(".head_select a").css("color","rgb(196, 221, 255)");
                 $("http://yuxiit.lingnan.ren/js/.head_select .app").css("color","#fff");
                 $(".head_selects_fx").removeClass("a");
//               $(".head_select li").hover(
//                  function () {
//                      $(this).find("a").css({"color":"#fff"});
//                    },
//                    function () {
//                      // $(this).find("a").css({"color":"#C4DDFF"});
//                      // $(".app").css({"color":"#fff"});
//                  }
//              );
    }