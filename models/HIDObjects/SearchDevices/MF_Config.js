define([],function(){
	var mappings = {
		"active" : "active",
		"deviceId" : "deviceId",
		"friendlyName" : "friendlyName",
		"type" : "type",
		"status" : "status",
		"owner" : "owner",
		"username" : "username",
		"userId" : "userId",
	};
	Object.freeze(mappings);
	
	var typings = {
		"active" : "string",
		"deviceId" : "string",
		"friendlyName" : "string",
		"type" : "string",
		"status" : "string",
		"owner" : "string",
		"username" : "string",
		"userId" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"deviceId",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "HIDObjects",
		tableName : "SearchDevices"
	};
	Object.freeze(config);
	
	return config;
})
