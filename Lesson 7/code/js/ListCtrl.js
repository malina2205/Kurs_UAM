ListCtrl = function(view, store){

	view.on("itemUpdated", function(id){
		store.update(id);
	});	
	
	store.on("itemAdded", function(item){
			view.addItem(item);
	});
	
	view.on("loadingError", function (err) {	
		view.displayError(err);	
	});
	
	store.on("itemUpdated", function(item){
		view.update(item);
	});
}