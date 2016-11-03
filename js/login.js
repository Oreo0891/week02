window.addEventListener("load",doValidation,true);

function doValidation(){
		
	//登录页面的组件
	var loginname = document.getElementById("loginname");
	var loginpsw = document.getElementById("loginpsw");
	var sub_btn = document.getElementById("sub_btn");
	
	//进行事件绑定
	//登录时验证账号
	loginname.addEventListener("blur",function(){
		var target1 = loginname.nextSibling;
		if(loginname.value == ""){
			target1.style.display = "block";
		}else{
		target1.removeAttribute("style");
		}
	},true)
	
	//登录时验证密码
	loginpsw.addEventListener("blur",function(){
		var target2 = loginpsw.nextSibling;
		if(loginpsw.value == ""){
			target2.style.display = "block";
		}else{
		target2.removeAttribute("style");
		}
	},true)
}
