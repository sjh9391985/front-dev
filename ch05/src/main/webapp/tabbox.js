var tabBox = {
	init: function() {
		var t = this;
		window.addEventListener("load", t.onWindowLoad.bind(t));
	},
	onWindowLoad: function(){
		console.log("!!");
		var divTabBox = document.getElementsByClassName("tab-box")[0];
		var ul = divTabBox.childNodes[1];
		var liTabs = ul.getElementsByTagName("li");
			
		for(var i = 0; i < liTabs.length; i++){
			liTabs[i].addEventListener("click", this.onTabClicked);
		}
	},
	 onTabClicked = function() {
	// unselected
	var lisSelected = document.getElementsByClassName("selected");
	(lisSelected.length == 1) && (lisSelected[0].className = "");
	
	// selected
	this.className = "selected";
	}
}