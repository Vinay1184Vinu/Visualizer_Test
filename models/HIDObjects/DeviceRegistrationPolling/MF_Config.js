define([],function(){
	var mappings = {
		"deviceId" : "deviceId",
		"deviceStatus" : "deviceStatus",
		"errmsg" : "errmsg",
	};
	Object.freeze(mappings);
	
	var typings = {
		"deviceId" : "string",
		"deviceStatus" : "string",
		"errmsg" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "HIDObjects",
		tableName : "DeviceRegistrationPolling"
	};
	Object.freeze(config);
	
	return config;
})
