FooterCtrl = function(view, store){
	store.on("itemAdded", function(text){
			var itemNumber = store.data.length;
			view.updateItems(itemNumber);
		});
	store.on("itemUpdated", function(it, number){
		view.updateActive(number);
	});
}