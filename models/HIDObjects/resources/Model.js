define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "resources", "objectService" : "HIDObjects"};
	
	var setterFunctions = {
		deviceType : function(val, state){
			context["field"]  = "deviceType";
			context["metadata"] = (objectMetadata ? objectMetadata["deviceType"] : null);
			state['deviceType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		externalId : function(val, state){
			context["field"]  = "externalId";
			context["metadata"] = (objectMetadata ? objectMetadata["externalId"] : null);
			state['externalId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		friendlyName : function(val, state){
			context["field"]  = "friendlyName";
			context["metadata"] = (objectMetadata ? objectMetadata["friendlyName"] : null);
			state['friendlyName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		id : function(val, state){
			context["field"]  = "id";
			context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
			state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function resources(defaultValues){
		var privateState = {};
			context["field"]  = "deviceType";
			context["metadata"] = (objectMetadata ? objectMetadata["deviceType"] : null);
			privateState.deviceType = defaultValues?(defaultValues["deviceType"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["deviceType"], context):null):null;
			context["field"]  = "externalId";
			context["metadata"] = (objectMetadata ? objectMetadata["externalId"] : null);
			privateState.externalId = defaultValues?(defaultValues["externalId"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["externalId"], context):null):null;
			context["field"]  = "friendlyName";
			context["metadata"] = (objectMetadata ? objectMetadata["friendlyName"] : null);
			privateState.friendlyName = defaultValues?(defaultValues["friendlyName"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["friendlyName"], context):null):null;
			context["field"]  = "id";
			context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
			privateState.id = defaultValues?(defaultValues["id"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context):null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"deviceType" : {
					get : function(){
						context["field"]  = "deviceType";
			        	context["metadata"] = (objectMetadata ? objectMetadata["deviceType"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.deviceType, context);},
					set : function(val){
						setterFunctions['deviceType'].call(this,val,privateState);
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
				"friendlyName" : {
					get : function(){
						context["field"]  = "friendlyName";
			        	context["metadata"] = (objectMetadata ? objectMetadata["friendlyName"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.friendlyName, context);},
					set : function(val){
						setterFunctions['friendlyName'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"id" : {
					get : function(){
						context["field"]  = "id";
			        	context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.id, context);},
					set : function(val){
						setterFunctions['id'].call(this,val,privateState);
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
									privateState.deviceType = value?(value["deviceType"]?value["deviceType"]:null):null;
					privateState.externalId = value?(value["externalId"]?value["externalId"]:null):null;
					privateState.friendlyName = value?(value["friendlyName"]?value["friendlyName"]:null):null;
					privateState.id = value?(value["id"]?value["id"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(resources);
	
	//Create new class level validator object
	BaseModel.Validator.call(resources);
	
	var registerValidatorBackup = resources.registerValidator;
	
	resources.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( resources.isValid(this, propName, val) ){
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
	
	var relations = [
	];
	
	resources.relations = relations;
	
	resources.prototype.isValid = function(){
		return resources.isValid(this);
	};
	
	resources.prototype.objModelName = "resources";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	resources.registerProcessors = function(options, successCallback, failureCallback) {
	
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
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "resources", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	resources.clone = function(objectToClone) {
		var clonedObj = new resources();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return resources;
});