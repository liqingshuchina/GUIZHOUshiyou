window.onload=function(){
	var vbaocun=document.getElementById("vbaocun");
	var vxm=document.getElementById("vxm");
	vbaocun.onclick=function(){
		this.classList.add("mui-action-back");
		atip("修改成功");
		this.innerHTML="返回";
	}
	function atip(info){
		mui.toast(info)
	}
	}
	
	
	