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
	};

	EE.prototype.emit = function (eventName /*, other args...*/) {
		var listenersTab = this.listeners[eventName];
		var args = Array.slice(arguments,1);
		for(i in listenersTab){
		        listenersTab[i].apply(this, args);
		}

		
	};

//	var ee = new EE();
        
//	var removeListener = ee.on('test', function (arg1, arg2) {
//		console.log(arg1, arg2, this.key);
//	}, { key: 'value' });

//	ee.emit('test', 1, 2); // 1, 2 value
//
//	removeListener(); //removes my listener from the event emitter;
//
//	ee.emit('test'); //nothing will execute
        
	global.UAM.EventEmitter = EE;

}(window));
