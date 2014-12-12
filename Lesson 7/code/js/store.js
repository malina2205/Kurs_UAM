UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
	this.items = 0;
	this.inactiveItems = 0;
	

};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Item = function(id, value, status){
		this.id = id;
		this.value = value;
		this.status = status;
	}


UAM.Store.prototype.add = function (data) {
	//this.data.push(data);
	if(data.id>-1){
		var item = new UAM.Item(data.id, data.value, data.status);
		if(data.status == "inactive"){
			this.inactiveItems++;
		}
	}
	else {
		var item = new UAM.Item(this.items, data, "active");
	}
	this.data.push(item);
	this.items++;
	//this.activeItems++;
	console.log("----" + item);
	this.emit("itemAdded", item);
	//this.emit("itemUpdated", this.activeItems);
	this.emit("itemUpdated", item, this.items - this.inactiveItems);
	console.log("data: [" + this.data + "]");
	
	//this.postTodo([{id: item.id, value: item.text}]);
};

UAM.Store.prototype.update = function (id) {
	/*if(action == "activate"){
		this.activeItems++;
	}
	if(action == "deactivate"){
		this.activeItems--;
	}*/
		
	var item;
	for(var i in this.data){
		if (this.data[i].id == id) {
			item = this.data[i];
			if(item.status == "active"){
				item.status = "inactive";
				this.inactiveItems++;
			}
			else {
				item.status = "active";
				this.inactiveItems--;			
			}
			break;
		}
	};
	this.emit("itemUpdated", item, this.items - this.inactiveItems);
	
};





