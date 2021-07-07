define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "ValidateOOB", "objectService" : "HIDObjects"};
	
	var setterFunctions = {
		access_token : function(val, state){
			context["field"]  = "access_token";
			context["metadata"] = (objectMetadata ? objectMetadata["access_token"] : null);
			state['access_token'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		AuthenticationType : function(val, state){
			context["field"]  = "AuthenticationType";
			context["metadata"] = (objectMetadata ? objectMetadata["AuthenticationType"] : null);
			state['AuthenticationType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		errorMsg : function(val, state){
			context["field"]  = "errorMsg";
			context["metadata"] = (objectMetadata ? objectMetadata["errorMsg"] : null);
			state['errorMsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		error_description : function(val, state){
			context["field"]  = "error_description";
			context["metadata"] = (objectMetadata ? objectMetadata["error_description"] : null);
			state['error_description'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		OTP : function(val, state){
			context["field"]  = "OTP";
			context["metadata"] = (objectMetadata ? objectMetadata["OTP"] : null);
			state['OTP'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		username : function(val, state){
			context["field"]  = "username";
			context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
			state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function ValidateOOB(defaultValues){
		var privateState = {};
			context["field"]  = "access_token";
			context["metadata"] = (objectMetadata ? objectMetadata["access_token"] : null);
			privateState.access_token = defaultValues?(defaultValues["access_token"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["access_token"], context):null):null;
			context["field"]  = "AuthenticationType";
			context["metadata"] = (objectMetadata ? objectMetadata["AuthenticationType"] : null);
			privateState.AuthenticationType = defaultValues?(defaultValues["AuthenticationType"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AuthenticationType"], context):null):null;
			context["field"]  = "errorMsg";
			context["metadata"] = (objectMetadata ? objectMetadata["errorMsg"] : null);
			privateState.errorMsg = defaultValues?(defaultValues["errorMsg"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errorMsg"], context):null):null;
			context["field"]  = "error_description";
			context["metadata"] = (objectMetadata ? objectMetadata["error_description"] : null);
			privateState.error_description = defaultValues?(defaultValues["error_description"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["error_description"], context):null):null;
			context["field"]  = "OTP";
			context["metadata"] = (objectMetadata ? objectMetadata["OTP"] : null);
			privateState.OTP = defaultValues?(defaultValues["OTP"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OTP"], context):null):null;
			context["field"]  = "username";
			context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
			privateState.username = defaultValues?(defaultValues["username"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context):null):null;
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
				"AuthenticationType" : {
					get : function(){
						context["field"]  = "AuthenticationType";
			        	context["metadata"] = (objectMetadata ? objectMetadata["AuthenticationType"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AuthenticationType, context);},
					set : function(val){
						setterFunctions['AuthenticationType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"errorMsg" : {
					get : function(){
						context["field"]  = "errorMsg";
			        	context["metadata"] = (objectMetadata ? objectMetadata["errorMsg"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.errorMsg, context);},
					set : function(val){
						setterFunctions['errorMsg'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"error_description" : {
					get : function(){
						context["field"]  = "error_description";
			        	context["metadata"] = (objectMetadata ? objectMetadata["error_description"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.error_description, context);},
					set : function(val){
						setterFunctions['error_description'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"OTP" : {
					get : function(){
						context["field"]  = "OTP";
			        	context["metadata"] = (objectMetadata ? objectMetadata["OTP"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.OTP, context);},
					set : function(val){
						setterFunctions['OTP'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"username" : {
					get : function(){
						context["field"]  = "username";
			        	context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.username, context);},
					set : function(val){
						setterFunctions['username'].call(this,val,privateState);
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
					privateState.AuthenticationType = value?(value["AuthenticationType"]?value["AuthenticationType"]:null):null;
					privateState.errorMsg = value?(value["errorMsg"]?value["errorMsg"]:null):null;
					privateState.error_description = value?(value["error_description"]?value["error_description"]:null):null;
					privateState.OTP = value?(value["OTP"]?value["OTP"]:null):null;
					privateState.username = value?(value["username"]?value["username"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(ValidateOOB);
	
	//Create new class level validator object
	BaseModel.Validator.call(ValidateOOB);
	
	var registerValidatorBackup = ValidateOOB.registerValidator;
	
	ValidateOOB.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( ValidateOOB.isValid(this, propName, val) ){
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
	//For Operation 'validateOOB' with service id 'validateOOB1305'
	ValidateOOB.validateOOB = function(params, onCompletion){
		return ValidateOOB.customVerb('validateOOB', params, onCompletion);
	};
	
	var relations = [
	];
	
	ValidateOOB.relations = relations;
	
	ValidateOOB.prototype.isValid = function(){
		return ValidateOOB.isValid(this);
	};
	
	ValidateOOB.prototype.objModelName = "ValidateOOB";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	ValidateOOB.registerProcessors = function(options, successCallback, failureCallback) {
	
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
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "ValidateOOB", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	ValidateOOB.clone = function(objectToClone) {
		var clonedObj = new ValidateOOB();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return ValidateOOB;
});