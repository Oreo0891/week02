window.addEventListener("load",getRdn,true);
window.addEventListener("load",doValidation,true);

function doValidation(){

	//注册页面的组件
	var regname = document.getElementById("regname");
	var regpsw = document.getElementById("regpsw");
	var in_checker = document.getElementById("in_checker");
	var reg_btn = document.getElementById("reg_btn");
		
	//注册时验证账号
	regname.addEventListener("blur",function(){
		var target3 = regname.nextSibling;
		if(regname.value == ""){
			target3.style.display = "block";
		}else{
			target3.removeAttribute("style");
		}
	},true)
	
	//注册时验证密码
	regpsw.addEventListener("blur",function(){
		var target4 = regpsw.nextSibling;
		if(regpsw.value == ""){
			target4.style.display = "block";
		}else{
		target4.removeAttribute("style");
		}
	},true)
	//注册时验证重复密码
	repsw.addEventListener("blur",function(){
		var repsw = document.getElementById("repsw");
		var target5 = repsw.nextSibling;
		if(regpsw.value != repsw.value){
			target5.style.display = "block";
		}else{
		target5.removeAttribute("style");
		}
	},true)
	//注册时验证验证码
	reg_btn.addEventListener("click",function(){
		var check_num = document.getElementById("check_num");
		var target6 = check_num.nextSibling;
		if(check_num.value == check_num.value){
			regform.submit();
		}else{
			target5.style.display = "block";
		}
	},true)
}

//创建验证码
function getRdn(){
	num = document.getElementById("check_num");
	if(num.addEventListener){
		num.addEventListener("click",getRdn,true);
	}else{
		num.attachEvent("onclick",getRdn);
	}
	var key_storege = new Array(1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');
	var rd_num = "";
	
	for (var i = 0;i<4;i++) {
		var idx = Math.floor(Math.random()*57);
		rd_num += key_storege[idx];
		
	}
	num.value = rd_num;
}