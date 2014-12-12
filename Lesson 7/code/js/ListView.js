UAM.ListView = function (view) {
	UAM.EventEmitter.call(this);
	this.listView = document.querySelector("#listView");
	this.itemClicked = function(elem){
		//do zmiany
		var target = elem.target;
		if(target.nodeName == "LI"){
      	/*
      	if(target.className == "active"){
      		target.className = "unactive";
      		this.emit("itemUpdated", "deactivate");
      	}
      	else {
				target.className = "active";  
				this.emit("itemUpdated", "activate");    
      	}
      	*/
      	this.emit("itemUpdated", target.id);
		}
	};	

	this.listView.addEventListener("click", this.itemClicked.bind(this));
	
   //this.startLoading();
};

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);

UAM.ListView.prototype.addItem = function(item) {

	var listItem = document.createElement('li');
   listItem.innerHTML = item.value;
   listItem.className = "active";
   listItem.id = item.id;
   this.listView.appendChild(listItem);
}

UAM.ListView.prototype.displayError = function(err){
		var listItem = document.createElement('li');
   	listItem.innerHTML = "błąd " + err;
   	listItem.className = "error";
   	this.listView.appendChild(listItem);
}	

UAM.ListView.prototype.update = function (item) {
	var target = document.getElementById(item.id);
	target.className = item.status;
}