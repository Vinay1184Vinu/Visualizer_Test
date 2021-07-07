define([],function(){
	var mappings = {
		"active" : "active",
		"authType" : "authType",
		"detail" : "detail",
		"errorCode" : "errorCode",
		"expDate" : "expDate",
		"password" : "password",
		"scimType_Pwd" : "scimType_Pwd",
		"startDate" : "startDate",
		"status" : "status",
		"userId" : "userId",
		"username" : "username",
	};
	Object.freeze(mappings);
	
	var typings = {
		"active" : "string",
		"authType" : "string",
		"detail" : "string",
		"errorCode" : "string",
		"expDate" : "string",
		"password" : "string",
		"scimType_Pwd" : "string",
		"startDate" : "string",
		"status" : "string",
		"userId" : "string",
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
		tableName : "AddPasswordAuthenticator"
	};
	Object.freeze(config);
	
	return config;
})
