ListCtrl = function(view, store){

	view.on("itemUpdated", function(action){
		store.update(action);
	});	
	
	store.on("itemAdded", function(item){
			view.addItem(item);
	});
}