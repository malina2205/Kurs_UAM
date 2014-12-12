UAM.Http = {
	request: function (url, method, requestData, callback) {
		var httpRequest = new XMLHttpRequest();
		UAM.loading.start();
		httpRequest.onload = function () {
			if (httpRequest.status !== 200) {
				callback(httpRequest.status, '');
				throw new Error('Request failed');
			}
			UAM.loading.stop();
			callback(false, httpRequest.response);
		};
		httpRequest.onprogress = function () {aler("ww")};
		httpRequest.open(method, url);
		httpRequest.responseType="json";
		httpRequest.setRequestHeader('Content-Type', 'application/json');
		httpRequest.send(requestData);	
	}
};
