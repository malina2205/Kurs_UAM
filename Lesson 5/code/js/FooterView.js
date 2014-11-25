UAM.FooterView = function(view){
	UAM.EventEmitter.call(this);
	this.footer = document.getElementById("footerView");
	this.total = document.getElementById("totalItems");
	this.active = document.getElementById("activeItems");
	
};
UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);

UAM.FooterView.prototype.updateItems = function(number) {
	this.total.innerHTML = number;
}

UAM.FooterView.prototype.updateActive = function(number) {
	this.active.innerHTML = number;
}

