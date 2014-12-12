UAM.loading = {
	start: function () {
		var target = document.getElementById('loading');
		this.spinner = new Spinner();
		this.spinner.spin(target);
	},
	stop: function () {
		this.spinner.stop();
	},
	spinner: ''
}
