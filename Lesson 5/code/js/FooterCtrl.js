UAM.FooterCtrl = function(view, store){
	store.on("itemAdded", function(text){
			var itemNumber = store.data.length;
			view.update(itemNumber);
		});
	store.on("itemUpdated", function(number){
		//view.updateActive(number);
	});
}