define([],function(){
	var mappings = {
		"acr_values" : "acr_values",
		"auth_req_id" : "auth_req_id",
		"client_notification_token" : "client_notification_token",
		"deviceId" : "deviceId",
		"error" : "error",
		"error_description" : "error_description",
		"expires_in" : "expires_in",
		"interval" : "interval",
		"login_hint_token" : "login_hint_token",
		"scope" : "scope",
		"username" : "username",
	};
	Object.freeze(mappings);
	
	var typings = {
		"acr_values" : "string",
		"auth_req_id" : "string",
		"client_notification_token" : "string",
		"deviceId" : "string",
		"error" : "string",
		"error_description" : "string",
		"expires_in" : "number",
		"interval" : "number",
		"login_hint_token" : "string",
		"scope" : "string",
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
		tableName : "HIDApproveInitiation"
	};
	Object.freeze(config);
	
	return config;
})
