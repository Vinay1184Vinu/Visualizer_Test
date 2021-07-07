define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "ValidateOTP", "objectService" : "HIDObjects"};
	
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
		clientId : function(val, state){
			context["field"]  = "clientId";
			context["metadata"] = (objectMetadata ? objectMetadata["clientId"] : null);
			state['clientId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		error : function(val, state){
			context["field"]  = "error";
			context["metadata"] = (objectMetadata ? objectMetadata["error"] : null);
			state['error'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		error_description : function(val, state){
			context["field"]  = "error_description";
			context["metadata"] = (objectMetadata ? objectMetadata["error_description"] : null);
			state['error_description'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		id_token : function(val, state){
			context["field"]  = "id_token";
			context["metadata"] = (objectMetadata ? objectMetadata["id_token"] : null);
			state['id_token'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		OTP : function(val, state){
			context["field"]  = "OTP";
			context["metadata"] = (objectMetadata ? objectMetadata["OTP"] : null);
			state['OTP'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		Username : function(val, state){
			context["field"]  = "Username";
			context["metadata"] = (objectMetadata ? objectMetadata["Username"] : null);
			state['Username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function ValidateOTP(defaultValues){
		var privateState = {};
			context["field"]  = "access_token";
			context["metadata"] = (objectMetadata ? objectMetadata["access_token"] : null);
			privateState.access_token = defaultValues?(defaultValues["access_token"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["access_token"], context):null):null;
			context["field"]  = "AuthenticationType";
			context["metadata"] = (objectMetadata ? objectMetadata["AuthenticationType"] : null);
			privateState.AuthenticationType = defaultValues?(defaultValues["AuthenticationType"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AuthenticationType"], context):null):null;
			context["field"]  = "clientId";
			context["metadata"] = (objectMetadata ? objectMetadata["clientId"] : null);
			privateState.clientId = defaultValues?(defaultValues["clientId"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["clientId"], context):null):null;
			context["field"]  = "error";
			context["metadata"] = (objectMetadata ? objectMetadata["error"] : null);
			privateState.error = defaultValues?(defaultValues["error"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["error"], context):null):null;
			context["field"]  = "error_description";
			context["metadata"] = (objectMetadata ? objectMetadata["error_description"] : null);
			privateState.error_description = defaultValues?(defaultValues["error_description"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["error_description"], context):null):null;
			context["field"]  = "id_token";
			context["metadata"] = (objectMetadata ? objectMetadata["id_token"] : null);
			privateState.id_token = defaultValues?(defaultValues["id_token"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id_token"], context):null):null;
			context["field"]  = "OTP";
			context["metadata"] = (objectMetadata ? objectMetadata["OTP"] : null);
			privateState.OTP = defaultValues?(defaultValues["OTP"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OTP"], context):null):null;
			context["field"]  = "Username";
			context["metadata"] = (objectMetadata ? objectMetadata["Username"] : null);
			privateState.Username = defaultValues?(defaultValues["Username"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Username"], context):null):null;
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
				"clientId" : {
					get : function(){
						context["field"]  = "clientId";
			        	context["metadata"] = (objectMetadata ? objectMetadata["clientId"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.clientId, context);},
					set : function(val){
						setterFunctions['clientId'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"error" : {
					get : function(){
						context["field"]  = "error";
			        	context["metadata"] = (objectMetadata ? objectMetadata["error"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.error, context);},
					set : function(val){
						setterFunctions['error'].call(this,val,privateState);
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
				"id_token" : {
					get : function(){
						context["field"]  = "id_token";
			        	context["metadata"] = (objectMetadata ? objectMetadata["id_token"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.id_token, context);},
					set : function(val){
						setterFunctions['id_token'].call(this,val,privateState);
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
									privateState.access_token = value?(value["access_token"]?value["access_token"]:null):null;
					privateState.AuthenticationType = value?(value["AuthenticationType"]?value["AuthenticationType"]:null):null;
					privateState.clientId = value?(value["clientId"]?value["clientId"]:null):null;
					privateState.error = value?(value["error"]?value["error"]:null):null;
					privateState.error_description = value?(value["error_description"]?value["error_description"]:null):null;
					privateState.id_token = value?(value["id_token"]?value["id_token"]:null):null;
					privateState.OTP = value?(value["OTP"]?value["OTP"]:null):null;
					privateState.Username = value?(value["Username"]?value["Username"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(ValidateOTP);
	
	//Create new class level validator object
	BaseModel.Validator.call(ValidateOTP);
	
	var registerValidatorBackup = ValidateOTP.registerValidator;
	
	ValidateOTP.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( ValidateOTP.isValid(this, propName, val) ){
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
	//For Operation 'validateOTP' with service id 'validateOTP3625'
	ValidateOTP.validateOTP = function(params, onCompletion){
		return ValidateOTP.customVerb('validateOTP', params, onCompletion);
	};
	
	var relations = [
	];
	
	ValidateOTP.relations = relations;
	
	ValidateOTP.prototype.isValid = function(){
		return ValidateOTP.isValid(this);
	};
	
	ValidateOTP.prototype.objModelName = "ValidateOTP";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	ValidateOTP.registerProcessors = function(options, successCallback, failureCallback) {
	
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
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "ValidateOTP", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	ValidateOTP.clone = function(objectToClone) {
		var clonedObj = new ValidateOTP();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return ValidateOTP;
});