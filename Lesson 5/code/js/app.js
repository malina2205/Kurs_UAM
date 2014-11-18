window.addEventListener('DOMContentLoaded', function () {
	//After the page structure is loaded

	var store = new UAM.Store();

	var inputView = new UAM.InputView();
	var listView = new UAM.ListView();
	var footerView = new UAM.FooterView();	
	
	new UAM.InputCtrl(inputView, store);
	new UAM.ListCtrl(listView, store);
	new UAM.FooterCtrl(footerView, store);
	
	
});
