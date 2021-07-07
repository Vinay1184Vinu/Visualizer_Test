define([],function(){
	var mappings = {
		"DeviceId" : "DeviceId",
		"externalId" : "externalId",
		"Username" : "Username",
	};
	Object.freeze(mappings);
	
	var typings = {
		"DeviceId" : "string",
		"externalId" : "string",
		"Username" : "string",
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
		tableName : "AddHardwareDeviceToUser"
	};
	Object.freeze(config);
	
	return config;
})
