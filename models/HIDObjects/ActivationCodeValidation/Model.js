define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "ActivationCodeValidation", "objectService" : "HIDObjects"};
	
	var setterFunctions = {
		activationAuthStatus : function(val, state){
			context["field"]  = "activationAuthStatus";
			context["metadata"] = (objectMetadata ? objectMetadata["activationAuthStatus"] : null);
			state['activationAuthStatus'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		activationCode : function(val, state){
			context["field"]  = "activationCode";
			context["metadata"] = (objectMetadata ? objectMetadata["activationCode"] : null);
			state['activationCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		ActivationCodeError : function(val, state){
			context["field"]  = "ActivationCodeError";
			context["metadata"] = (objectMetadata ? objectMetadata["ActivationCodeError"] : null);
			state['ActivationCodeError'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		active : function(val, state){
			context["field"]  = "active";
			context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
			state['active'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		authType : function(val, state){
			context["field"]  = "authType";
			context["metadata"] = (objectMetadata ? objectMetadata["authType"] : null);
			state['authType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		consecutiveFailed : function(val, state){
			context["field"]  = "consecutiveFailed";
			context["metadata"] = (objectMetadata ? objectMetadata["consecutiveFailed"] : null);
			state['consecutiveFailed'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		consecutiveSuccess : function(val, state){
			context["field"]  = "consecutiveSuccess";
			context["metadata"] = (objectMetadata ? objectMetadata["consecutiveSuccess"] : null);
			state['consecutiveSuccess'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		expiryDate : function(val, state){
			context["field"]  = "expiryDate";
			context["metadata"] = (objectMetadata ? objectMetadata["expiryDate"] : null);
			state['expiryDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		filter : function(val, state){
			context["field"]  = "filter";
			context["metadata"] = (objectMetadata ? objectMetadata["filter"] : null);
			state['filter'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		ServErrCode : function(val, state){
			context["field"]  = "ServErrCode";
			context["metadata"] = (objectMetadata ? objectMetadata["ServErrCode"] : null);
			state['ServErrCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		ServErrMsg : function(val, state){
			context["field"]  = "ServErrMsg";
			context["metadata"] = (objectMetadata ? objectMetadata["ServErrMsg"] : null);
			state['ServErrMsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		totalResults : function(val, state){
			context["field"]  = "totalResults";
			context["metadata"] = (objectMetadata ? objectMetadata["totalResults"] : null);
			state['totalResults'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		userid : function(val, state){
			context["field"]  = "userid";
			context["metadata"] = (objectMetadata ? objectMetadata["userid"] : null);
			state['userid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		username : function(val, state){
			context["field"]  = "username";
			context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
			state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		validationStatus : function(val, state){
			context["field"]  = "validationStatus";
			context["metadata"] = (objectMetadata ? objectMetadata["validationStatus"] : null);
			state['validationStatus'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function ActivationCodeValidation(defaultValues){
		var privateState = {};
			context["field"]  = "activationAuthStatus";
			context["metadata"] = (objectMetadata ? objectMetadata["activationAuthStatus"] : null);
			privateState.activationAuthStatus = defaultValues?(defaultValues["activationAuthStatus"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["activationAuthStatus"], context):null):null;
			context["field"]  = "activationCode";
			context["metadata"] = (objectMetadata ? objectMetadata["activationCode"] : null);
			privateState.activationCode = defaultValues?(defaultValues["activationCode"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["activationCode"], context):null):null;
			context["field"]  = "ActivationCodeError";
			context["metadata"] = (objectMetadata ? objectMetadata["ActivationCodeError"] : null);
			privateState.ActivationCodeError = defaultValues?(defaultValues["ActivationCodeError"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ActivationCodeError"], context):null):null;
			context["field"]  = "active";
			context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
			privateState.active = defaultValues?(defaultValues["active"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["active"], context):null):null;
			context["field"]  = "authType";
			context["metadata"] = (objectMetadata ? objectMetadata["authType"] : null);
			privateState.authType = defaultValues?(defaultValues["authType"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["authType"], context):null):null;
			context["field"]  = "consecutiveFailed";
			context["metadata"] = (objectMetadata ? objectMetadata["consecutiveFailed"] : null);
			privateState.consecutiveFailed = defaultValues?(defaultValues["consecutiveFailed"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["consecutiveFailed"], context):null):null;
			context["field"]  = "consecutiveSuccess";
			context["metadata"] = (objectMetadata ? objectMetadata["consecutiveSuccess"] : null);
			privateState.consecutiveSuccess = defaultValues?(defaultValues["consecutiveSuccess"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["consecutiveSuccess"], context):null):null;
			context["field"]  = "expiryDate";
			context["metadata"] = (objectMetadata ? objectMetadata["expiryDate"] : null);
			privateState.expiryDate = defaultValues?(defaultValues["expiryDate"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["expiryDate"], context):null):null;
			context["field"]  = "filter";
			context["metadata"] = (objectMetadata ? objectMetadata["filter"] : null);
			privateState.filter = defaultValues?(defaultValues["filter"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["filter"], context):null):null;
			context["field"]  = "ServErrCode";
			context["metadata"] = (objectMetadata ? objectMetadata["ServErrCode"] : null);
			privateState.ServErrCode = defaultValues?(defaultValues["ServErrCode"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ServErrCode"], context):null):null;
			context["field"]  = "ServErrMsg";
			context["metadata"] = (objectMetadata ? objectMetadata["ServErrMsg"] : null);
			privateState.ServErrMsg = defaultValues?(defaultValues["ServErrMsg"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ServErrMsg"], context):null):null;
			context["field"]  = "totalResults";
			context["metadata"] = (objectMetadata ? objectMetadata["totalResults"] : null);
			privateState.totalResults = defaultValues?(defaultValues["totalResults"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["totalResults"], context):null):null;
			context["field"]  = "userid";
			context["metadata"] = (objectMetadata ? objectMetadata["userid"] : null);
			privateState.userid = defaultValues?(defaultValues["userid"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userid"], context):null):null;
			context["field"]  = "username";
			context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
			privateState.username = defaultValues?(defaultValues["username"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context):null):null;
			context["field"]  = "validationStatus";
			context["metadata"] = (objectMetadata ? objectMetadata["validationStatus"] : null);
			privateState.validationStatus = defaultValues?(defaultValues["validationStatus"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["validationStatus"], context):null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"activationAuthStatus" : {
					get : function(){
						context["field"]  = "activationAuthStatus";
			        	context["metadata"] = (objectMetadata ? objectMetadata["activationAuthStatus"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.activationAuthStatus, context);},
					set : function(val){
						setterFunctions['activationAuthStatus'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"activationCode" : {
					get : function(){
						context["field"]  = "activationCode";
			        	context["metadata"] = (objectMetadata ? objectMetadata["activationCode"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.activationCode, context);},
					set : function(val){
						setterFunctions['activationCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ActivationCodeError" : {
					get : function(){
						context["field"]  = "ActivationCodeError";
			        	context["metadata"] = (objectMetadata ? objectMetadata["ActivationCodeError"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ActivationCodeError, context);},
					set : function(val){
						setterFunctions['ActivationCodeError'].call(this,val,privateState);
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
				"authType" : {
					get : function(){
						context["field"]  = "authType";
			        	context["metadata"] = (objectMetadata ? objectMetadata["authType"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.authType, context);},
					set : function(val){
						setterFunctions['authType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"consecutiveFailed" : {
					get : function(){
						context["field"]  = "consecutiveFailed";
			        	context["metadata"] = (objectMetadata ? objectMetadata["consecutiveFailed"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.consecutiveFailed, context);},
					set : function(val){
						setterFunctions['consecutiveFailed'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"consecutiveSuccess" : {
					get : function(){
						context["field"]  = "consecutiveSuccess";
			        	context["metadata"] = (objectMetadata ? objectMetadata["consecutiveSuccess"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.consecutiveSuccess, context);},
					set : function(val){
						setterFunctions['consecutiveSuccess'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"expiryDate" : {
					get : function(){
						context["field"]  = "expiryDate";
			        	context["metadata"] = (objectMetadata ? objectMetadata["expiryDate"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.expiryDate, context);},
					set : function(val){
						setterFunctions['expiryDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"filter" : {
					get : function(){
						context["field"]  = "filter";
			        	context["metadata"] = (objectMetadata ? objectMetadata["filter"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.filter, context);},
					set : function(val){
						setterFunctions['filter'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ServErrCode" : {
					get : function(){
						context["field"]  = "ServErrCode";
			        	context["metadata"] = (objectMetadata ? objectMetadata["ServErrCode"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ServErrCode, context);},
					set : function(val){
						setterFunctions['ServErrCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"ServErrMsg" : {
					get : function(){
						context["field"]  = "ServErrMsg";
			        	context["metadata"] = (objectMetadata ? objectMetadata["ServErrMsg"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ServErrMsg, context);},
					set : function(val){
						setterFunctions['ServErrMsg'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"totalResults" : {
					get : function(){
						context["field"]  = "totalResults";
			        	context["metadata"] = (objectMetadata ? objectMetadata["totalResults"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.totalResults, context);},
					set : function(val){
						setterFunctions['totalResults'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"userid" : {
					get : function(){
						context["field"]  = "userid";
			        	context["metadata"] = (objectMetadata ? objectMetadata["userid"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userid, context);},
					set : function(val){
						setterFunctions['userid'].call(this,val,privateState);
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
				"validationStatus" : {
					get : function(){
						context["field"]  = "validationStatus";
			        	context["metadata"] = (objectMetadata ? objectMetadata["validationStatus"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.validationStatus, context);},
					set : function(val){
						setterFunctions['validationStatus'].call(this,val,privateState);
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
									privateState.activationAuthStatus = value?(value["activationAuthStatus"]?value["activationAuthStatus"]:null):null;
					privateState.activationCode = value?(value["activationCode"]?value["activationCode"]:null):null;
					privateState.ActivationCodeError = value?(value["ActivationCodeError"]?value["ActivationCodeError"]:null):null;
					privateState.active = value?(value["active"]?value["active"]:null):null;
					privateState.authType = value?(value["authType"]?value["authType"]:null):null;
					privateState.consecutiveFailed = value?(value["consecutiveFailed"]?value["consecutiveFailed"]:null):null;
					privateState.consecutiveSuccess = value?(value["consecutiveSuccess"]?value["consecutiveSuccess"]:null):null;
					privateState.expiryDate = value?(value["expiryDate"]?value["expiryDate"]:null):null;
					privateState.filter = value?(value["filter"]?value["filter"]:null):null;
					privateState.ServErrCode = value?(value["ServErrCode"]?value["ServErrCode"]:null):null;
					privateState.ServErrMsg = value?(value["ServErrMsg"]?value["ServErrMsg"]:null):null;
					privateState.totalResults = value?(value["totalResults"]?value["totalResults"]:null):null;
					privateState.userid = value?(value["userid"]?value["userid"]:null):null;
					privateState.username = value?(value["username"]?value["username"]:null):null;
					privateState.validationStatus = value?(value["validationStatus"]?value["validationStatus"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(ActivationCodeValidation);
	
	//Create new class level validator object
	BaseModel.Validator.call(ActivationCodeValidation);
	
	var registerValidatorBackup = ActivationCodeValidation.registerValidator;
	
	ActivationCodeValidation.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( ActivationCodeValidation.isValid(this, propName, val) ){
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
	//For Operation 'validateActivationCode' with service id 'ValidateUser9755'
	ActivationCodeValidation.validateActivationCode = function(params, onCompletion){
		return ActivationCodeValidation.customVerb('validateActivationCode', params, onCompletion);
	};
	
	var relations = [
	];
	
	ActivationCodeValidation.relations = relations;
	
	ActivationCodeValidation.prototype.isValid = function(){
		return ActivationCodeValidation.isValid(this);
	};
	
	ActivationCodeValidation.prototype.objModelName = "ActivationCodeValidation";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	ActivationCodeValidation.registerProcessors = function(options, successCallback, failureCallback) {
	
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
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "ActivationCodeValidation", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	ActivationCodeValidation.clone = function(objectToClone) {
		var clonedObj = new ActivationCodeValidation();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return ActivationCodeValidation;
});