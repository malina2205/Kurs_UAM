window.addEventListener('DOMContentLoaded', function () {
	//After the page structure is loaded

	var store = new UAM.Store();

	var inputView = new UAM.InputView(document.querySelector('#inputview'));
	var listView = new UAM.ListView(document.querySelector('#listview'));
	var footerView = new UAM.FooterView(document.querySelector('#footerview'));

	new InputCtrl(inputView, store);
	new ListCtrl(listView, store);
	new FooterCtrl(footerView, store);	
		
	this.load = function (err, res){
		if(err){
			inputView.emit('loadingError', err);
			listView.emit('loadingError', err);		
		}
		else{
			res.forEach(function(element) {
				store.add(element);
			});
		}	
	}

	UAM.Http.request('/api/todos','GET', '', this.load.bind(this));
});
