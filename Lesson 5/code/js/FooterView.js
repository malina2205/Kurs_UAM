UAM.FooterView = function(){
	UAM.EventEmitter.call(this);
	this.footer = document.getElementById("footerView");
	this.active = document.getElementById("active");
	
};
UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);

UAM.FooterView.prototype.update = function(number) {
	this.footer.innerHTML = "Total number of items: " + number;
}

UAM.FooterView.prototype.updateActive = function(number) {
	this.active.innerHTML = "Number of active items: " + number;
}

