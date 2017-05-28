$(".shanchu").click(function(){
	$(this).parent().fadeOut(500).delay(1000);
	$(".sreach,.menu,.comment,.column1,.column2,.column3,.nav_content").css("top","-78px");
	$("#hengtiao").css("top","-78px");
})

$(".myJingdong").mouseover(function(){
	$(".myJingdong .xiajiantou").html("&#xe61f;");
}).mouseout(function(){
	$(".myJingdong .xiajiantou").html("&#xe620;");
})
$("#mobileJingdong").mouseover(function(){
	$("#mobileJingdong .xiajiantou").html("&#xe61f;");
}).mouseout(function(){
	$("#mobileJingdong .xiajiantou").html("&#xe620;");
})

$(".sousuo input").focus(function(){
	this.placeholder=" ";
}).blur(function(){
	this.placeholder="数码相机"
})

var timer;
$("#buy").mouseover(function(){
	$("#buy .gouwuche1").css("color","#B1191A");
	$("#buy_goods").css("display","block");
	$("#kong").css("display","block");
}).mouseout(function(){
	$("#buy .gouwuche1").css("color","");
	$("#buy_goods").css("display","none");
	$("#kong").css("display","none");
})
//banner轮播
var curindex=-1;
var len=$("#banner_img li").length;
var delay=4000;
var timer;
changge();
function init(x){
	$("#banner_img li,.SeriaNumber li").each(function(){
		$("#banner_img li").css("display","none");
		$(".SeriaNumber li").css("background","#464443");
	})
	$("#banner_img li").eq(x).fadeIn(500);
}
function toggle(){
	curindex<len-1 ? curindex++:curindex=0;
	init(curindex);
	$(".SeriaNumber li").eq(curindex).css("background","#B1191A");
}
function changge(){
	toggle();
	timer=setTimeout(changge,delay);
}
$("#banner_img li").each(function(){
	$(this).mouseover(function(){
		clearTimeout(timer);
	}).mouseout(function(){
		timer=setTimeout(changge,delay);
	})
})
$(".banner").mouseover(function(){
	$(".btn-left,.btn-right").css("display","block");
}).mouseout(function(){
	$(".btn-left,.btn-right").css("display","none");
})
$(".btn-right").delay("slow",function(){
	$(".btn-right").click(function(){
		clearTimeout(timer);
		toggle();
	})
})
$(".btn-left").delay("slow",function(){
	$(".btn-left").click(function(){
		clearTimeout(timer);
		curindex>0 ? curindex--:curindex=len-1;
		init(curindex);
		$(".SeriaNumber li").eq(curindex).css("background","#B1191A");
	})
})
$(".SeriaNumber li").each(function(index){
	$(this).mouseover(function(){
		clearTimeout(timer);
		init(index);
		$(".SeriaNumber li").eq(index).css("background","#B1191A");
	})
})
//轮播结束

//.nav_content开始
	$(".tips li").mouseover(function(){
		$(".tips li .kong").eq($(this).index()).css("visibility","visible");
	}).mouseout(function(){
		$(".tips li .kong").eq($(this).index()).css("visibility","hidden");
	})

$("#telephone").focus(function(){
	$(this).attr("placeholder"," ");
}).mouseout(function(){
	$(this).attr("placeholder","全国、移动、电信");
})
//.nav_content结束

//comment 无缝滚动开始
$(".zhengge").mouseover(function(){
	$(".btn-left2,.btn-right2").css("display","block");
}).mouseout(function(){
	$(".btn-left2,.btn-right2").css("display","none");
})

var $left;
var liWidth = $("#ul1 li").eq(0).width();
var model = true;
var $first = $("#ul1 li:eq(0)").clone(true);
var $last = $("#ul1 li:eq(-1)").clone(true);
$first.appendTo($("#ul1"));
$last.prependTo($("#ul1"));

$left=-984;
$(".btn-left2").click(function(){
	if(model==false){
		return;
	}
	model=false;
	$left-=liWidth;
	$("#ul1").animate({
		"left":$left,
		"top":"0"
	},400,function(){
		if($left<=-3936){
			$("#ul1").css("left",-984);
			$left = -984;
		};
		model=true;
	});
	console.log($left)
})

$(".btn-right2").click(function(){
	if(model==false){
		return;
	}
	model=false;
	$left+=liWidth;
	$("#ul1").animate({
		"left":$left,
		"top":"0"
	},400,function(){
		if($left>=0){
			$("#ul1").css("left",-2950);
			$left = -3936;
		};
		model=true;
	});
	console.log($left)
})



//comment结束

//猜你喜欢开始
var b=true;
$(".mt a").mouseover(function(){
	clearTimeout(timer);
	if(b==false){
		return;
	}
	b=false;
	$(".mc .spacer").css("left",0);
	$(".mc .spacer").animate({
		"left":"835",
		"-webkit-animation-delay":"3s"
	},1000,function(){
		$(".mc .spacer").css("left",835);
	})
}).mouseout(function(){
	var timer=setTimeout(function(){
		b=true;
	},5000)
})
var num=0;
$(".extra").click(function(){
	num<$(".mc .mc-change ul").length-1 ? num++:num=0;
//	console.log(num)
	$(".mc .mc-change ul").each(function(){
		$(".mc .mc-change ul").hide();
	})
		$(".mc .mc-change ul").eq(num).show();
})
//猜你喜欢结束
//服装鞋包开始
$(".clothes .inner-slide dl dt").eq(0).css("display","block");
$(".clothes .mt ul li:nth-child(odd)").each(function(){
	$(this).mouseover(function(){
		$(this).css({
			"border":"1px solid #B1191A",
			"border-bottom":"none",
			"background":"white"
		}).siblings().css({
			"border":"none",
			"background":"none"
		});
		$(".mt-kong").css("visibility","hidden");
		$(this).find("div").css("visibility","visible");
		$(this).find("a").css("color","#B1191A");
		$(".clothes .inner-slide dl dt").css("display","none");
		$(".clothes .inner-slide dl dt").eq($(this).index()/2).css("display","block");
	}).mouseout(function(){
		$(this).find("a").css("color","#666");
	})
})
//服装鞋包结束
//个户美妆开始
$(".cosmetics .inner-slide dl dt").eq(0).css("display","block");
$(".cosmetics .mt ul li:nth-child(odd)").each(function(){
	$(this).mouseover(function(){
		$(this).css({
			"border":"1px solid #B1191A",
			"border-bottom":"none",
			"background":"white"
		}).siblings().css({
			"border":"none",
			"background":"none"
		});
		$(".mt-kong").css("visibility","hidden");
		$(this).find("div").css("visibility","visible");
		$(this).find("a").css("color","#B1191A");
		$(".cosmetics .inner-slide dl dt").css("display","none");
		$(".cosmetics .inner-slide dl dt").eq($(this).index()/2).css("display","block");
	}).mouseout(function(){
		$(this).find("a").css("color","#666");
	})
})
//个户美妆结束