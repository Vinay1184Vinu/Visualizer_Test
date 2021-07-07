define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "UpdateDeviceStatus", "objectService" : "HIDObjects"};
	
	var setterFunctions = {
		detail_updateDevice : function(val, state){
			context["field"]  = "detail_updateDevice";
			context["metadata"] = (objectMetadata ? objectMetadata["detail_updateDevice"] : null);
			state['detail_updateDevice'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		DeviceId : function(val, state){
			context["field"]  = "DeviceId";
			context["metadata"] = (objectMetadata ? objectMetadata["DeviceId"] : null);
			state['DeviceId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		errorCode_updateDevice : function(val, state){
			context["field"]  = "errorCode_updateDevice";
			context["metadata"] = (objectMetadata ? objectMetadata["errorCode_updateDevice"] : null);
			state['errorCode_updateDevice'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		status : function(val, state){
			context["field"]  = "status";
			context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
			state['status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		active : function(val, state){
			context["field"]  = "active";
			context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
			state['active'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		type : function(val, state){
			context["field"]  = "type";
			context["metadata"] = (objectMetadata ? objectMetadata["type"] : null);
			state['type'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function UpdateDeviceStatus(defaultValues){
		var privateState = {};
			context["field"]  = "detail_updateDevice";
			context["metadata"] = (objectMetadata ? objectMetadata["detail_updateDevice"] : null);
			privateState.detail_updateDevice = defaultValues?(defaultValues["detail_updateDevice"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["detail_updateDevice"], context):null):null;
			context["field"]  = "DeviceId";
			context["metadata"] = (objectMetadata ? objectMetadata["DeviceId"] : null);
			privateState.DeviceId = defaultValues?(defaultValues["DeviceId"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DeviceId"], context):null):null;
			context["field"]  = "errorCode_updateDevice";
			context["metadata"] = (objectMetadata ? objectMetadata["errorCode_updateDevice"] : null);
			privateState.errorCode_updateDevice = defaultValues?(defaultValues["errorCode_updateDevice"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errorCode_updateDevice"], context):null):null;
			context["field"]  = "status";
			context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
			privateState.status = defaultValues?(defaultValues["status"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["status"], context):null):null;
			context["field"]  = "active";
			context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
			privateState.active = defaultValues?(defaultValues["active"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["active"], context):null):null;
			context["field"]  = "type";
			context["metadata"] = (objectMetadata ? objectMetadata["type"] : null);
			privateState.type = defaultValues?(defaultValues["type"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["type"], context):null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"detail_updateDevice" : {
					get : function(){
						context["field"]  = "detail_updateDevice";
			        	context["metadata"] = (objectMetadata ? objectMetadata["detail_updateDevice"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.detail_updateDevice, context);},
					set : function(val){
						setterFunctions['detail_updateDevice'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"DeviceId" : {
					get : function(){
						context["field"]  = "DeviceId";
			        	context["metadata"] = (objectMetadata ? objectMetadata["DeviceId"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DeviceId, context);},
					set : function(val){
						setterFunctions['DeviceId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"errorCode_updateDevice" : {
					get : function(){
						context["field"]  = "errorCode_updateDevice";
			        	context["metadata"] = (objectMetadata ? objectMetadata["errorCode_updateDevice"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.errorCode_updateDevice, context);},
					set : function(val){
						setterFunctions['errorCode_updateDevice'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"status" : {
					get : function(){
						context["field"]  = "status";
			        	context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.status, context);},
					set : function(val){
						setterFunctions['status'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"active" : {
					get : function(){
						context["field"]  = "active";
			        	context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.active, context);},
					set : function(val){
						setterFunctions['active'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"type" : {
					get : function(){
						context["field"]  = "type";
			        	context["metadata"] = (objectMetadata ? objectMetadata["type"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.type, context);},
					set : function(val){
						setterFunctions['type'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});
			
			//converts model object to json object.
			this.toJsonInternal = function() {
				return Object.assign({}, privateState);
			};

			//overwrites object state with provided json value in argument.
			this.fromJsonInternal = function(value) {
									privateState.detail_updateDevice = value?(value["detail_updateDevice"]?value["detail_updateDevice"]:null):null;
					privateState.DeviceId = value?(value["DeviceId"]?value["DeviceId"]:null):null;
					privateState.errorCode_updateDevice = value?(value["errorCode_updateDevice"]?value["errorCode_updateDevice"]:null):null;
					privateState.status = value?(value["status"]?value["status"]:null):null;
					privateState.active = value?(value["active"]?value["active"]:null):null;
					privateState.type = value?(value["type"]?value["type"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(UpdateDeviceStatus);
	
	//Create new class level validator object
	BaseModel.Validator.call(UpdateDeviceStatus);
	
	var registerValidatorBackup = UpdateDeviceStatus.registerValidator;
	
	UpdateDeviceStatus.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( UpdateDeviceStatus.isValid(this, propName, val) ){
					return setterBackup.apply(null, arguments);
				}else{
					throw Error("Validation failed for "+ propName +" : "+val);
				}
			}
			setterFunctions[arguments[0]].changed = true;
		}
		return registerValidatorBackup.apply(null, arguments);
	}
	
	//Extending Model for custom operations
	//For Operation 'updateDeviceStatus' with service id 'updateDeviceStatus3078'
	UpdateDeviceStatus.updateDeviceStatus = function(params, onCompletion){
		return UpdateDeviceStatus.customVerb('updateDeviceStatus', params, onCompletion);
	};
	
	var relations = [
	];
	
	UpdateDeviceStatus.relations = relations;
	
	UpdateDeviceStatus.prototype.isValid = function(){
		return UpdateDeviceStatus.isValid(this);
	};
	
	UpdateDeviceStatus.prototype.objModelName = "UpdateDeviceStatus";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	UpdateDeviceStatus.registerProcessors = function(options, successCallback, failureCallback) {
	
		if(!options) {
			options = {};
		}
			
		if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
			preProcessorCallback = options["preProcessor"];
		}
		
		if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])){
			postProcessorCallback = options["postProcessor"];
		}
		
		function metaDataSuccess(res) {
			objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
			successCallback();
		}
		
		function metaDataFailure(err) {
			failureCallback(err);
		}
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "UpdateDeviceStatus", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	UpdateDeviceStatus.clone = function(objectToClone) {
		var clonedObj = new UpdateDeviceStatus();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return UpdateDeviceStatus;
});