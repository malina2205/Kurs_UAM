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


