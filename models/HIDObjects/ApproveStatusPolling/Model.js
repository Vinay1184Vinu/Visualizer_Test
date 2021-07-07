define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "ApproveStatusPolling", "objectService" : "HIDObjects"};
	
	var setterFunctions = {
		access_token : function(val, state){
			context["field"]  = "access_token";
			context["metadata"] = (objectMetadata ? objectMetadata["access_token"] : null);
			state['access_token'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		auth_status : function(val, state){
			context["field"]  = "auth_status";
			context["metadata"] = (objectMetadata ? objectMetadata["auth_status"] : null);
			state['auth_status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		mfa_key : function(val, state){
			context["field"]  = "mfa_key";
			context["metadata"] = (objectMetadata ? objectMetadata["mfa_key"] : null);
			state['mfa_key'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function ApproveStatusPolling(defaultValues){
		var privateState = {};
			context["field"]  = "access_token";
			context["metadata"] = (objectMetadata ? objectMetadata["access_token"] : null);
			privateState.access_token = defaultValues?(defaultValues["access_token"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["access_token"], context):null):null;
			context["field"]  = "auth_status";
			context["metadata"] = (objectMetadata ? objectMetadata["auth_status"] : null);
			privateState.auth_status = defaultValues?(defaultValues["auth_status"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["auth_status"], context):null):null;
			context["field"]  = "mfa_key";
			context["metadata"] = (objectMetadata ? objectMetadata["mfa_key"] : null);
			privateState.mfa_key = defaultValues?(defaultValues["mfa_key"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["mfa_key"], context):null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"access_token" : {
					get : function(){
						context["field"]  = "access_token";
			        	context["metadata"] = (objectMetadata ? objectMetadata["access_token"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.access_token, context);},
					set : function(val){
						setterFunctions['access_token'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"auth_status" : {
					get : function(){
						context["field"]  = "auth_status";
			        	context["metadata"] = (objectMetadata ? objectMetadata["auth_status"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.auth_status, context);},
					set : function(val){
						setterFunctions['auth_status'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"mfa_key" : {
					get : function(){
						context["field"]  = "mfa_key";
			        	context["metadata"] = (objectMetadata ? objectMetadata["mfa_key"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.mfa_key, context);},
					set : function(val){
						setterFunctions['mfa_key'].call(this,val,privateState);
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
									privateState.access_token = value?(value["access_token"]?value["access_token"]:null):null;
					privateState.auth_status = value?(value["auth_status"]?value["auth_status"]:null):null;
					privateState.mfa_key = value?(value["mfa_key"]?value["mfa_key"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(ApproveStatusPolling);
	
	//Create new class level validator object
	BaseModel.Validator.call(ApproveStatusPolling);
	
	var registerValidatorBackup = ApproveStatusPolling.registerValidator;
	
	ApproveStatusPolling.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( ApproveStatusPolling.isValid(this, propName, val) ){
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
	//For Operation 'approveStatusPolling' with service id 'getHIDApprovalStatus5447'
	ApproveStatusPolling.approveStatusPolling = function(params, onCompletion){
		return ApproveStatusPolling.customVerb('approveStatusPolling', params, onCompletion);
	};
	
	var relations = [
	];
	
	ApproveStatusPolling.relations = relations;
	
	ApproveStatusPolling.prototype.isValid = function(){
		return ApproveStatusPolling.isValid(this);
	};
	
	ApproveStatusPolling.prototype.objModelName = "ApproveStatusPolling";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	ApproveStatusPolling.registerProcessors = function(options, successCallback, failureCallback) {
	
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
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "ApproveStatusPolling", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	ApproveStatusPolling.clone = function(objectToClone) {
		var clonedObj = new ApproveStatusPolling();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return ApproveStatusPolling;
});