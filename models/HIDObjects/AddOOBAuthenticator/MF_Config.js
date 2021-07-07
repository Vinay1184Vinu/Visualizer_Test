define([],function(){
	var mappings = {
		"active" : "active",
		"AuthenticatorType" : "AuthenticatorType",
		"AuthenticatorValue" : "AuthenticatorValue",
		"id" : "id",
		"scimType_OTP" : "scimType_OTP",
		"userId" : "userId",
	};
	Object.freeze(mappings);
	
	var typings = {
		"active" : "string",
		"AuthenticatorType" : "string",
		"AuthenticatorValue" : "string",
		"id" : "string",
		"scimType_OTP" : "string",
		"userId" : "string",
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
		tableName : "AddOOBAuthenticator"
	};
	Object.freeze(config);
	
	return config;
})
