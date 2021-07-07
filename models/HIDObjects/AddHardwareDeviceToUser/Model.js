define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "AddHardwareDeviceToUser", "objectService" : "HIDObjects"};
	
	var setterFunctions = {
		DeviceId : function(val, state){
			context["field"]  = "DeviceId";
			context["metadata"] = (objectMetadata ? objectMetadata["DeviceId"] : null);
			state['DeviceId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		externalId : function(val, state){
			context["field"]  = "externalId";
			context["metadata"] = (objectMetadata ? objectMetadata["externalId"] : null);
			state['externalId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Username : function(val, state){
			context["field"]  = "Username";
			context["metadata"] = (objectMetadata ? objectMetadata["Username"] : null);
			state['Username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function AddHardwareDeviceToUser(defaultValues){
		var privateState = {};
			context["field"]  = "DeviceId";
			context["metadata"] = (objectMetadata ? objectMetadata["DeviceId"] : null);
			privateState.DeviceId = defaultValues?(defaultValues["DeviceId"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DeviceId"], context):null):null;
			context["field"]  = "externalId";
			context["metadata"] = (objectMetadata ? objectMetadata["externalId"] : null);
			privateState.externalId = defaultValues?(defaultValues["externalId"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["externalId"], context):null):null;
			context["field"]  = "Username";
			context["metadata"] = (objectMetadata ? objectMetadata["Username"] : null);
			privateState.Username = defaultValues?(defaultValues["Username"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Username"], context):null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
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
				"externalId" : {
					get : function(){
						context["field"]  = "externalId";
			        	context["metadata"] = (objectMetadata ? objectMetadata["externalId"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.externalId, context);},
					set : function(val){
						setterFunctions['externalId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"Username" : {
					get : function(){
						context["field"]  = "Username";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Username"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Username, context);},
					set : function(val){
						setterFunctions['Username'].call(this,val,privateState);
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
									privateState.DeviceId = value?(value["DeviceId"]?value["DeviceId"]:null):null;
					privateState.externalId = value?(value["externalId"]?value["externalId"]:null):null;
					privateState.Username = value?(value["Username"]?value["Username"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(AddHardwareDeviceToUser);
	
	//Create new class level validator object
	BaseModel.Validator.call(AddHardwareDeviceToUser);
	
	var registerValidatorBackup = AddHardwareDeviceToUser.registerValidator;
	
	AddHardwareDeviceToUser.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( AddHardwareDeviceToUser.isValid(this, propName, val) ){
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
	//For Operation 'addHardwareDeviceToUser' with service id 'addDeviceToUser7865'
	AddHardwareDeviceToUser.addHardwareDeviceToUser = function(params, onCompletion){
		return AddHardwareDeviceToUser.customVerb('addHardwareDeviceToUser', params, onCompletion);
	};
	
	var relations = [
	];
	
	AddHardwareDeviceToUser.relations = relations;
	
	AddHardwareDeviceToUser.prototype.isValid = function(){
		return AddHardwareDeviceToUser.isValid(this);
	};
	
	AddHardwareDeviceToUser.prototype.objModelName = "AddHardwareDeviceToUser";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	AddHardwareDeviceToUser.registerProcessors = function(options, successCallback, failureCallback) {
	
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
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "AddHardwareDeviceToUser", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	AddHardwareDeviceToUser.clone = function(objectToClone) {
		var clonedObj = new AddHardwareDeviceToUser();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return AddHardwareDeviceToUser;
});