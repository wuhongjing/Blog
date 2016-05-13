window.onload=function(){
	var oBox=document.getElementById('box');
	oBox.onmousedown=function(ev){
		var oEvent=ev||event;
		var disX=oEvent.clientX-oBox.offetWidth;
		var disY=oEvent.clientY-oBox.offetHeight;
		document.onmousemove=function(ev){
			var l=oEvent.clientX-disX;
			var l=oEvent.clientY-disY;
		}
	}
};
