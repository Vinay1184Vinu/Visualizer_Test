define([],function(){
	var mappings = {
		"deviceType" : "deviceType",
		"externalId" : "externalId",
		"friendlyName" : "friendlyName",
		"id" : "id",
	};
	Object.freeze(mappings);
	
	var typings = {
		"deviceType" : "string",
		"externalId" : "string",
		"friendlyName" : "string",
		"id" : "string",
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
		tableName : "resources"
	};
	Object.freeze(config);
	
	return config;
})
