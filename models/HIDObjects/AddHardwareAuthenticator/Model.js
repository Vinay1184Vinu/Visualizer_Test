define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "AddHardwareAuthenticator", "objectService" : "HIDObjects"};
	
	var setterFunctions = {
		active : function(val, state){
			context["field"]  = "active";
			context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
			state['active'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		AuthenticatorType : function(val, state){
			context["field"]  = "AuthenticatorType";
			context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorType"] : null);
			state['AuthenticatorType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		UserId : function(val, state){
			context["field"]  = "UserId";
			context["metadata"] = (objectMetadata ? objectMetadata["UserId"] : null);
			state['UserId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function AddHardwareAuthenticator(defaultValues){
		var privateState = {};
			context["field"]  = "active";
			context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
			privateState.active = defaultValues?(defaultValues["active"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["active"], context):null):null;
			context["field"]  = "AuthenticatorType";
			context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorType"] : null);
			privateState.AuthenticatorType = defaultValues?(defaultValues["AuthenticatorType"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AuthenticatorType"], context):null):null;
			context["field"]  = "UserId";
			context["metadata"] = (objectMetadata ? objectMetadata["UserId"] : null);
			privateState.UserId = defaultValues?(defaultValues["UserId"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["UserId"], context):null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
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
				"AuthenticatorType" : {
					get : function(){
						context["field"]  = "AuthenticatorType";
			        	context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorType"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AuthenticatorType, context);},
					set : function(val){
						setterFunctions['AuthenticatorType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"UserId" : {
					get : function(){
						context["field"]  = "UserId";
			        	context["metadata"] = (objectMetadata ? objectMetadata["UserId"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.UserId, context);},
					set : function(val){
						setterFunctions['UserId'].call(this,val,privateState);
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
									privateState.active = value?(value["active"]?value["active"]:null):null;
					privateState.AuthenticatorType = value?(value["AuthenticatorType"]?value["AuthenticatorType"]:null):null;
					privateState.UserId = value?(value["UserId"]?value["UserId"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(AddHardwareAuthenticator);
	
	//Create new class level validator object
	BaseModel.Validator.call(AddHardwareAuthenticator);
	
	var registerValidatorBackup = AddHardwareAuthenticator.registerValidator;
	
	AddHardwareAuthenticator.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( AddHardwareAuthenticator.isValid(this, propName, val) ){
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
	//For Operation 'addHardwareAuthenticator' with service id 'addHardwareAuthenticator6512'
	AddHardwareAuthenticator.addHardwareAuthenticator = function(params, onCompletion){
		return AddHardwareAuthenticator.customVerb('addHardwareAuthenticator', params, onCompletion);
	};
	
	var relations = [
	];
	
	AddHardwareAuthenticator.relations = relations;
	
	AddHardwareAuthenticator.prototype.isValid = function(){
		return AddHardwareAuthenticator.isValid(this);
	};
	
	AddHardwareAuthenticator.prototype.objModelName = "AddHardwareAuthenticator";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	AddHardwareAuthenticator.registerProcessors = function(options, successCallback, failureCallback) {
	
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
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "AddHardwareAuthenticator", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	AddHardwareAuthenticator.clone = function(objectToClone) {
		var clonedObj = new AddHardwareAuthenticator();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return AddHardwareAuthenticator;
});