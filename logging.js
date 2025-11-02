$(document).ready(function(){	//ready完成页面加载之后调用
			setInterval(function(){
				//创建花瓣元素
				var $flower = $('<div class="flower"></div>');
				//随机水平位置
				var location = Math.random() * 35;
				//花瓣位置
				$flower.css({
					left: location+'%',
					top: 500
				});
				
				//添加到页面
				$('section').append($flower);
				
				//花瓣掉落动画 
				$flower.animate({
					top:'100vh',
					rotate: '360deg'
				},3000,function(){//速度3秒
					//清除原来的花瓣
					$(this).remove();
				});
				
			},2000);
		});
		// 接收用户名和密码
		$(".logging").click(function(e){
			//阻止表单默认提交
			e.preventDefault();
			// 获取用户名
			var username = $("#username").val();
			// 获取密码
			var password = $("#password").val();
			//判断账号密码是否正确
			if( (username=="cyy" && password=="n119" )|| ( username=="mpe" && password=="n33" )||( username=="sxm" && password=="g118" )){
				console.log("账号密码正确");
				
				//保存用户信息到浏览器
				sessionStorage.setItem("isLoggedIn","true");
				sessionStorage.setItem("username",username);
				sessionStorage.setItem("password",password);
				
				//跳转到其他页面
				window.location.href="index.html";
			}
			else{
				console.log("账号密码错误。");
				
				alert("账号密码错误，请重新输入");
			}
			console.log("信息保存成功，即将跳转");
			
		});
		//接收注册的信息
		$(".register").click(function(e){
			e.preventDefault();//阻止表单默认提交
			
			window.location.href="register.html";
		})