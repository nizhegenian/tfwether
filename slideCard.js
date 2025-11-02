//引入css
var link = document.createElement('link');
link.rel = "stylesheet";
link.type = "text/css";
link.href = "slideCard.css";
document.head.appendChild(link);

// 本功能主要是实现鼠标界面滑动,卡片从下到上滑动的效果
function scrollwindow(img){
	let imgTop = $(img).offset().top;//图片位置
	let scrollBottom = $(window).scrollTop()+$(window).height();//窗口底部
	
	if(scrollBottom > imgTop + 500){
		$(img).addClass("show");
	}
};
$(window).scroll(function(){//界面滚动时，出现特效
	$(".slide-img").each(function(){
		scrollwindow(this);
	});
	// 慢一点的动画
	$(".slide-img-2").each(function(){
		scrollwindow(this);
	});
	$(".people-right").each(function(){
		scrollwindow(this);
	})
	$(".people-left").each(function(){
		scrollwindow(this);
	})
});

//页面加载好就滑动
$(window).ready(function(){
	//添加滑动动画
	$(".slide-right-left").addClass('show');
	$(".slide-to-top").addClass("show");
	$(".slide-to-top-2").addClass("show");
	
});