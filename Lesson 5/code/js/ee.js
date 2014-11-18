
(function (global) {
	var EE;

	if (!global.UAM) {
		global.UAM = {};
	}

	EE = function () {
		//store the listeners somewhere
		this.listeners = {};
	};

	EE.prototype.on = function (eventName, listener, context) {
	        if(this.listeners[eventName]){
	                this.listeners[eventName].push(listener.bind(context));
	        }
           else{
                   this.listeners[eventName] = [listener.bind(context)];
           }	
           console.log("eventEmiter: added on "+ eventName);	
	};

	EE.prototype.emit = function (eventName /*, other args...*/) {
		var listenersTab = this.listeners[eventName];
		var args = Array.slice(arguments,1);
		for(i in listenersTab){
		        listenersTab[i].apply(this, args);
		}
		console.log("eventEmiter: " + eventName + " emited with args: " + args);
	};        
	global.UAM.EventEmitter = EE;
}(window));
