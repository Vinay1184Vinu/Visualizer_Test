define([],function(){
	var mappings = {
		"active" : "active",
		"AuthenticatorType" : "AuthenticatorType",
		"UserId" : "UserId",
	};
	Object.freeze(mappings);
	
	var typings = {
		"active" : "boolean",
		"AuthenticatorType" : "string",
		"UserId" : "string",
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
		tableName : "AddHardwareAuthenticator"
	};
	Object.freeze(config);
	
	return config;
})
