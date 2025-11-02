//添加css文件
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'choseCard.css';
//添加到document中
document.head.appendChild(link);

//衣服的卡池
const cardPool=[
	{
		img:"./img/衣服/咖色冬日.png",
		grade:"A",
		season:"冬季",
		color:"黑咖",
		buy:"https://ads.taobao.com/?bc_fl_src=tbsite_rYE1atXY&channelSrp=tbsy-weiruan&msclkid=aace8885d61c194d0794e182d60d4ef1"
	},
	{
		img:"./img/衣服/咖色牛仔秋日.png",
		grade:"B",
		season:"秋季",
		color:"咖色牛仔",
		buy:"https://ads.taobao.com/?bc_fl_src=tbsite_rYE1atXY&channelSrp=tbsy-weiruan&msclkid=aace8885d61c194d0794e182d60d4ef1"
	},
	{
		img:"./img/衣服/粉色秋日.png",
		grade:"C",
		season:"秋季",
		color:"粉色",
		buy:"https://ads.taobao.com/?bc_fl_src=tbsite_rYE1atXY&channelSrp=tbsy-weiruan&msclkid=aace8885d61c194d0794e182d60d4ef1"
	},
	{
		img:"./img/衣服/白色牛仔冬日.png",
		grade:"S",
		season:"冬季",
		color:"白色",
		text:"🎉🎉恭喜你！！抽到当前最最最好的衣服啦！",
		buy:"https://ads.taobao.com/?bc_fl_src=tbsite_rYE1atXY&channelSrp=tbsy-weiruan&msclkid=aace8885d61c194d0794e182d60d4ef1"
	}
];
//cardPoll创建完成
cardPool.forEach(card=>{
	if(!card.text){
		card.text = `当前卡池有${cardPool.length}套，别气馁，再试试说不定就出啦。`;
	}
});
//随机抽取函数
function getRandomCard(){
	const index = Math.floor(Math.random()*cardPool.length);
	return cardPool[index];
};
//显示卡片
function displayCard(card){
	//模糊背景
	$(".all").addClass("blur-background");
	
	//显示遮罩
	$(".overlay").show();
	
	//弹出卡片
	$(".jump-card").addClass("jump-in");
	console.log('显示卡片，添加动画类');
	//添加服装
	$(".clothes-content").append(`
	    <img src="${card.img}" class="clothes-winter"/>
	    <div class="clothes-right">
	        <div class="clothes-title">
	            <div class="title-img">
	                <img src="./img/衣服/推荐标志.png"/>
	            </div>
	            <div class="clothes-right-p">
	                恭喜抽中<span class="clothes-grade">${card.grade}等级</span>套装
	                <p class="clothes-right-text"><span>适合季节：</span>${card.season}</p>
	                <p class="clothes-right-text"><span>颜色搭配：</span>${card.color}</p>
					<p class="red-color clothes-right-text">${card.text}</p>
	                <div class="under-button">
						<button  class="clothes-buy">
							<a href="${card.buy}" target="_blank" class="clothes-buy-a">
								<div class="clothes-a-text">购买</div>
							</a>
						</button>
						<button class="button-again clothes-buy">再抽一次</button>
					</div>
					<div class="feedback">
						<button class="clothes-feedback">联系，反馈一下</button>
					</div>
	            </div>
	        </div>
	    </div>
	`);
	
	console.log("成功添加动画类");
	
	// 调试：检查元素状态
	console.log('卡片display:', $(".jump-card"));
	console.log('卡片visibility:', $(".jump-card").css('visibility'));
};
function showCard(card){
	//如果是s级的卡片
	if(card.grade==="S"){
		console.log("S卡，播放特效");
		
		$(".ssr-flash")
		.show()	//显示闪光层
		.addClass("play")	//添加动画
		.one("animationend",function(){
			$(this).removeClass("play").hide();//移除动画
			console.log("显示卡片");
			displayCard(card);//显示卡片
			console.log("完成显示卡片");
		});
	}
	else{
		//显示卡片
		displayCard(card);
	}
};

$(document).ready(function(){
	$(".chose-card").click(function(){
		//调用随机抽取函数
		const card = getRandomCard();
		//展示卡片
		showCard(card);
	});
	
	$(document).on('click','.button-again',function(){
		// 移除原来的卡片
		//移除原来添加的服装
		$(".jump-card").find(".clothes-winter, .clothes-right").remove();
		//调用随机抽取函数
		const card = getRandomCard();
		//抽卡
		showCard(card);
	});
	
	$(".close-card").click(function(){
		console.log("点击关闭");
		// 移除卡片动画
		$(".jump-card").removeClass("jump-in");
		// 移除遮罩层
		$(".overlay").hide();
		//移除原来添加的服装
		$(".jump-card").find(".clothes-winter, .clothes-right").remove();
		
		//移除模糊背景
		$(".all").removeClass("blur-background");
	});
})