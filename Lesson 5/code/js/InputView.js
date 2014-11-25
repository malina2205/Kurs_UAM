UAM.InputView = function (inputView) {
	UAM.EventEmitter.call(this);
	this.inputText = document.querySelector("#inputText");
	this.addButton = document.querySelector("#addButton");
	
	this.addTODO = function() {
		var inText = this.inputText.value;
		this.emit("addTODO", inText);
		this.inputText.value = "";
	};
	
	this.addButton.addEventListener("click", this.addTODO.bind(this));
};

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);

UAM.InputView.prototype.validInput = function(valid){
		if(valid){
			this.inputText.className = "valid";		
		}
		else{
			this.inputText.className = "invalid";
		}
}
