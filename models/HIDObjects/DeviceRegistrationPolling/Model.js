define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "DeviceRegistrationPolling", "objectService" : "HIDObjects"};
	
	var setterFunctions = {
		deviceId : function(val, state){
			context["field"]  = "deviceId";
			context["metadata"] = (objectMetadata ? objectMetadata["deviceId"] : null);
			state['deviceId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		deviceStatus : function(val, state){
			context["field"]  = "deviceStatus";
			context["metadata"] = (objectMetadata ? objectMetadata["deviceStatus"] : null);
			state['deviceStatus'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		errmsg : function(val, state){
			context["field"]  = "errmsg";
			context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
			state['errmsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function DeviceRegistrationPolling(defaultValues){
		var privateState = {};
			context["field"]  = "deviceId";
			context["metadata"] = (objectMetadata ? objectMetadata["deviceId"] : null);
			privateState.deviceId = defaultValues?(defaultValues["deviceId"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["deviceId"], context):null):null;
			context["field"]  = "deviceStatus";
			context["metadata"] = (objectMetadata ? objectMetadata["deviceStatus"] : null);
			privateState.deviceStatus = defaultValues?(defaultValues["deviceStatus"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["deviceStatus"], context):null):null;
			context["field"]  = "errmsg";
			context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context):null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"deviceId" : {
					get : function(){
						context["field"]  = "deviceId";
			        	context["metadata"] = (objectMetadata ? objectMetadata["deviceId"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.deviceId, context);},
					set : function(val){
						setterFunctions['deviceId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"deviceStatus" : {
					get : function(){
						context["field"]  = "deviceStatus";
			        	context["metadata"] = (objectMetadata ? objectMetadata["deviceStatus"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.deviceStatus, context);},
					set : function(val){
						setterFunctions['deviceStatus'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"errmsg" : {
					get : function(){
						context["field"]  = "errmsg";
			        	context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.errmsg, context);},
					set : function(val){
						setterFunctions['errmsg'].call(this,val,privateState);
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
									privateState.deviceId = value?(value["deviceId"]?value["deviceId"]:null):null;
					privateState.deviceStatus = value?(value["deviceStatus"]?value["deviceStatus"]:null):null;
					privateState.errmsg = value?(value["errmsg"]?value["errmsg"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(DeviceRegistrationPolling);
	
	//Create new class level validator object
	BaseModel.Validator.call(DeviceRegistrationPolling);
	
	var registerValidatorBackup = DeviceRegistrationPolling.registerValidator;
	
	DeviceRegistrationPolling.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( DeviceRegistrationPolling.isValid(this, propName, val) ){
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
	//For Operation 'deviceRegistrationPolling' with service id 'getHIDDeviceRegistrationStatus5867'
	DeviceRegistrationPolling.deviceRegistrationPolling = function(params, onCompletion){
		return DeviceRegistrationPolling.customVerb('deviceRegistrationPolling', params, onCompletion);
	};
	
	var relations = [
	];
	
	DeviceRegistrationPolling.relations = relations;
	
	DeviceRegistrationPolling.prototype.isValid = function(){
		return DeviceRegistrationPolling.isValid(this);
	};
	
	DeviceRegistrationPolling.prototype.objModelName = "DeviceRegistrationPolling";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	DeviceRegistrationPolling.registerProcessors = function(options, successCallback, failureCallback) {
	
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
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "DeviceRegistrationPolling", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	DeviceRegistrationPolling.clone = function(objectToClone) {
		var clonedObj = new DeviceRegistrationPolling();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return DeviceRegistrationPolling;
});