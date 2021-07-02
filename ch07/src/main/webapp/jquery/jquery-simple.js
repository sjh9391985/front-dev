// 간단 jquery 만들어 보기
var jquery = function(param){
	
	if(typeof(param) === "function"){
		window.addEventListener("load", param);
		return;
	}

	if(typeof(param) === "string"){
		var elements = document.querySelectorAll(selector);
    	return new __jQuery(elements);
		return null;
	}
}

var __jQuery = function(elements){
	this.length = elements.length;

	for(var i = 0; i<elements.length; i++){
		this["" + i] = elements[i];
	}
}

__jQuery.prototype.css = function(name, value){
	for()
}

var $ = jquery;
