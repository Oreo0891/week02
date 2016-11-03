//页面加载时 要调用的函数调用
if(window.addEventListener){
	window.addEventListener("load",getSecondMenu,true);
	window.addEventListener("load",getTeamPages,true);
//	window.addEventListener("load",getFirstMenu,true);
	
	
}else{
	window.attachEvent("onload",getSecondMenu);
	window.attachEvent("onload",getTeamPages);
//	window.attachEvent("onload",getFirstMenu);
	
	
}

//获取球队名称 将球队名称与球队首页挂钩(绑定事件)
function getTeamPages(){
	var teams = document.getElementsByClassName("teams");
	for (var i = 0;i<teams.length;i++) {
		teams[i].value = i;
		if(teams[i].addEventListener){
			teams[i].addEventListener("click",showTeamPages,true);
		}else{
			teams[i].attachEvent("onclick",showTeamPages);
		}
		
	}
}

//点击球队名称 显示球队首页的事件
function showTeamPages(){
	var pages = document.getElementsByClassName("teampages");
	var nowpage = document.getElementsByClassName("show_page");
	var def_page = document.getElementById("def_page");
	for (var j = 0;j<nowpage.length;j++) {
		nowpage[j].className = "teampages";
	}
	def_page.style.display = "none";
	pages[this.value].className = "show_page";
}

////获取一级节点 并给其绑定事件
//function getFirstMenu(){
//	var nodes = document.getElementsByClassName("btn");
//	for (var i = 0;i<nodes.length;i++) {
//		if(nodes[i].addEventListener){
//			nodes[i].addEventListener("click",showNext,true);
//		}
//	}
//}
//
////显示二级菜单
//function showNext(){
//	var target = this.nextSibling.nextSibling;
//	var list = document.getElementsByClassName("show_team");
//	if(target == list[0]){
//		target.className = "node";
//	}else{
//		for (var n = 0;n<list.length;n++) {
//			list[n].className = "node";
//		}
//		target.className = "show_team";
//	}
//}

//获取二级节点 并给其绑定事件
function getSecondMenu(){
	var nodes1 = document.getElementsByClassName("second");
	for (var m = 0 ;m<nodes1.length;m++) {
		if(nodes1[m].addEventListener){
			nodes1[m].addEventListener("click",showMenu,true);
		}else{
			nodes1[m].attachEvent("onclick",showMenu);
		}

	}
}

//点击二级菜单 展示三级菜单的事件
function showMenu(){
	var target = this.nextSibling.nextSibling;
	var list = document.getElementsByClassName("show_team");
	if(target == list[0]){
		target.className = "node2";
	}else{
		for (var n = 0;n<list.length;n++) {
			list[n].className = "node2";
		}
		target.className = "show_team";
	}
}

// Created by guoqy
// 图片轮播效果
//用于标识当前轮播到第几幅图片
var sign = 2;
//显示轮播图片
function showPic(index) {
	//轮播效果，中当前显示的图片
	var focusImg = document.getElementById("focusImg");
	//图片路径
	var imgSrc = "img/pic";
	imgSrc =imgSrc+ index + ".jpg";
	//更换轮播图片
	focusImg.src = imgSrc;
	//获取圆点列表
	var lis = document.getElementsByClassName("focusBox")[0].getElementsByTagName("li");
	//移除所有轮播按钮的css样式
	for (var i = 0; i < lis.length; i++) {
		lis[i].className = "";
	}
	//设置轮播图片对应的轮播按钮样式
	lis[index - 1].className = "cur";
}
//对轮播图片进行计算处理
function setCurrentPic() {
	showPic(sign);
	sign++;
	if (sign == 4) {
		sign = 1;
	}
		}
// 窗体加载时，指定显示的图片
window.onload = function () {
	showPic(1);
}
//设置定时器
window.setInterval("setCurrentPic()",1000);