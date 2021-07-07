define([],function(){
	var mappings = {
		"activationAuthStatus" : "activationAuthStatus",
		"activationCode" : "activationCode",
		"ActivationCodeError" : "ActivationCodeError",
		"active" : "active",
		"authType" : "authType",
		"consecutiveFailed" : "consecutiveFailed",
		"consecutiveSuccess" : "consecutiveSuccess",
		"expiryDate" : "expiryDate",
		"filter" : "filter",
		"ServErrCode" : "ServErrCode",
		"ServErrMsg" : "ServErrMsg",
		"totalResults" : "totalResults",
		"userid" : "userid",
		"username" : "username",
		"validationStatus" : "validationStatus",
	};
	Object.freeze(mappings);
	
	var typings = {
		"activationAuthStatus" : "string",
		"activationCode" : "string",
		"ActivationCodeError" : "string",
		"active" : "string",
		"authType" : "string",
		"consecutiveFailed" : "number",
		"consecutiveSuccess" : "number",
		"expiryDate" : "string",
		"filter" : "string",
		"ServErrCode" : "string",
		"ServErrMsg" : "string",
		"totalResults" : "string",
		"userid" : "string",
		"username" : "string",
		"validationStatus" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"username",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "HIDObjects",
		tableName : "ActivationCodeValidation"
	};
	Object.freeze(config);
	
	return config;
})
