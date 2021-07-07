define([],function(){
	var mappings = {
		"detail_updateDevice" : "detail_updateDevice",
		"DeviceId" : "DeviceId",
		"errorCode_updateDevice" : "errorCode_updateDevice",
		"status" : "status",
		"active" : "active",
		"type" : "type",
	};
	Object.freeze(mappings);
	
	var typings = {
		"detail_updateDevice" : "string",
		"DeviceId" : "string",
		"errorCode_updateDevice" : "string",
		"status" : "string",
		"active" : "string",
		"type" : "string",
	}
	Object.freeze(typings);
	
	var primaryKeys = [
					"DeviceId",
	];
	Object.freeze(primaryKeys);
	
	var config = {
		mappings : mappings,
		typings : typings,
		primaryKeys : primaryKeys,
		serviceName : "HIDObjects",
		tableName : "UpdateDeviceStatus"
	};
	Object.freeze(config);
	
	return config;
})
