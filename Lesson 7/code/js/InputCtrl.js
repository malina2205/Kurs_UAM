InputCtrl = function(view, store){
	view.on("addTODO", function(inText){
		if(inText!=""){
			store.add(inText);
			view.validInput(true);
		}
		else{
			console.log("empty input");
			view.validInput(false);
		}
	});
	
	view.on("save", function(){
		var data = JSON.stringify(store.data);
		var callback = function(err, res){
			var x = 0;
			if(err){
				alert("Error " + err);
			}
			else{
				alert("Data saved");
			}
		};
		UAM.Http.request('/api/todos','POST', data, callback.bind(this));
	});
	
		
	view.on("loadingError", function (err) {
		view.lock(err);	
	});
	
}
