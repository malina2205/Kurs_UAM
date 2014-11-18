UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
	this.i = 0;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Item = function(id, inText){
		this.id = id;
		this.text = inText;
		this.status = "active";
	}


UAM.Store.prototype.add = function (data) {
	this.data.push(data);
	console.log("----" + data);
	var item = new UAM.Item(i, data);
	i = i + 1;
	console.log("----" + item);
	this.emit("itemAdded", item);
	console.log("data: [" + this.data + "]");
};

UAM.Store.prototype.update = function (id, data) {
	//this.data[id] = data;
	//var n = 0;
	//for(item in this.data){
	//	if(this.data[item].status=="active"){
	//		n=n+1;
	//	}	
	//}
	//this.emit("itemUpdated", n);
};




