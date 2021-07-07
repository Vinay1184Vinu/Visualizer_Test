define([],function(){
	var mappings = {
		"access_token" : "access_token",
		"AuthenticationType" : "AuthenticationType",
		"errorMsg" : "errorMsg",
		"error_description" : "error_description",
		"OTP" : "OTP",
		"username" : "username",
	};
	Object.freeze(mappings);
	
	var typings = {
		"access_token" : "string",
		"AuthenticationType" : "string",
		"errorMsg" : "string",
		"error_description" : "string",
		"OTP" : "string",
		"username" : "string",
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
		tableName : "ValidateOOB"
	};
	Object.freeze(config);
	
	return config;
})
