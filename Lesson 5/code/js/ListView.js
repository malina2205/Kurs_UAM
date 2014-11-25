UAM.ListView = function (view) {
	UAM.EventEmitter.call(this);
	this.listView = document.querySelector("#listView");
	
	this.itemClicked = function(elem){
		//do zmiany
		var target = elem.target;
		if(target.nodeName == "LI"){
      	if(target.className == "active"){
      		target.className = "unactive";
      		this.emit("itemUpdated", "deactivate");
      	}
      	else {
				target.className = "active";  
				this.emit("itemUpdated", "activate");    
      	}
		}
	};	

	this.listView.addEventListener("click", this.itemClicked.bind(this));
};

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);

UAM.ListView.prototype.addItem = function(item) {
	var listItem = document.createElement('li');
   listItem.innerHTML = item.text;
   listItem.className = "active";
   this.listView.appendChild(listItem);
}

/*
UAM.ListView.prototype.toggleActive(elem){
		var target = elem.target;
      if(target.className == "active"){
      	target.className = "unactive";
      }
      else {
			target.className = "active";      
      }
};*/