define([],function(){
	var mappings = {
		"active" : "active",
		"status" : "status",
	};
	Object.freeze(mappings);
	
	var typings = {
		"active" : "boolean",
		"status" : "string",
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
		tableName : "status"
	};
	Object.freeze(config);
	
	return config;
})
