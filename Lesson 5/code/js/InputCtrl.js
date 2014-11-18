UAM.InputCtrl = function(view, store){
	view.on("addTODO", function(inText){
		if(inText!="")
			store.add(inText);
		else
			console.log("empty input");
	});

}
