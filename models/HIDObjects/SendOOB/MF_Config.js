define([],function(){
	var mappings = {
		"AuthenticationType" : "AuthenticationType",
		"OOB_SENT" : "OOB_SENT",
		"password" : "password",
		"username" : "username",
	};
	Object.freeze(mappings);
	
	var typings = {
		"AuthenticationType" : "string",
		"OOB_SENT" : "string",
		"password" : "string",
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
		tableName : "SendOOB"
	};
	Object.freeze(config);
	
	return config;
})
