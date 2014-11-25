UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
	this.items = 0;
	this.activeItems = 0;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Item = function(id, inText){
		this.id = id;
		this.text = inText;
		//this.status = "active";
	}


UAM.Store.prototype.add = function (data) {
	this.data.push(data);
	console.log("----" + data);
	var item = new UAM.Item(i, data);
	this.items++;
	this.activeItems++;
	console.log("----" + item);
	this.emit("itemAdded", item);
	this.emit("itemUpdated", this.activeItems);
	console.log("data: [" + this.data + "]");
};

UAM.Store.prototype.update = function (action) {
	//this.data[id] = data;
	//var n = 0;
	//for(item in this.data){
	//	if(this.data[item].status=="active"){
	//		n=n+1;
	//	}	
	//}
	if(action == "activate"){
		this.activeItems++;
	}
	if(action == "deactivate"){
		this.activeItems--;
	}
	this.emit("itemUpdated", this.activeItems);
	
};




