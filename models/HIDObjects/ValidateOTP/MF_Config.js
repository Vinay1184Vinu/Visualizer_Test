define([],function(){
	var mappings = {
		"access_token" : "access_token",
		"AuthenticationType" : "AuthenticationType",
		"clientId" : "clientId",
		"error" : "error",
		"error_description" : "error_description",
		"id_token" : "id_token",
		"OTP" : "OTP",
		"Username" : "Username",
	};
	Object.freeze(mappings);
	
	var typings = {
		"access_token" : "string",
		"AuthenticationType" : "string",
		"clientId" : "string",
		"error" : "string",
		"error_description" : "string",
		"id_token" : "string",
		"OTP" : "string",
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
		tableName : "ValidateOTP"
	};
	Object.freeze(config);
	
	return config;
})
