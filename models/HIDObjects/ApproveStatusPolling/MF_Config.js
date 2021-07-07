define([],function(){
	var mappings = {
		"access_token" : "access_token",
		"auth_status" : "auth_status",
		"mfa_key" : "mfa_key",
	};
	Object.freeze(mappings);
	
	var typings = {
		"access_token" : "string",
		"auth_status" : "string",
		"mfa_key" : "string",
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
		tableName : "ApproveStatusPolling"
	};
	Object.freeze(config);
	
	return config;
})
