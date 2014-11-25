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

}
