UAM.ListCtrl = function(view, store){

	view.on("itemClicked", function(elem){
		store.update()
	});	
	
	store.on("itemAdded", function(item){
			view.addItem(item);
	});
}