define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "SendOOB", "objectService" : "HIDObjects"};
	
	var setterFunctions = {
		AuthenticationType : function(val, state){
			context["field"]  = "AuthenticationType";
			context["metadata"] = (objectMetadata ? objectMetadata["AuthenticationType"] : null);
			state['AuthenticationType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		OOB_SENT : function(val, state){
			context["field"]  = "OOB_SENT";
			context["metadata"] = (objectMetadata ? objectMetadata["OOB_SENT"] : null);
			state['OOB_SENT'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		password : function(val, state){
			context["field"]  = "password";
			context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
			state['password'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		username : function(val, state){
			context["field"]  = "username";
			context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
			state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function SendOOB(defaultValues){
		var privateState = {};
			context["field"]  = "AuthenticationType";
			context["metadata"] = (objectMetadata ? objectMetadata["AuthenticationType"] : null);
			privateState.AuthenticationType = defaultValues?(defaultValues["AuthenticationType"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AuthenticationType"], context):null):null;
			context["field"]  = "OOB_SENT";
			context["metadata"] = (objectMetadata ? objectMetadata["OOB_SENT"] : null);
			privateState.OOB_SENT = defaultValues?(defaultValues["OOB_SENT"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["OOB_SENT"], context):null):null;
			context["field"]  = "password";
			context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
			privateState.password = defaultValues?(defaultValues["password"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["password"], context):null):null;
			context["field"]  = "username";
			context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
			privateState.username = defaultValues?(defaultValues["username"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context):null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
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
				"OOB_SENT" : {
					get : function(){
						context["field"]  = "OOB_SENT";
			        	context["metadata"] = (objectMetadata ? objectMetadata["OOB_SENT"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.OOB_SENT, context);},
					set : function(val){
						setterFunctions['OOB_SENT'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"password" : {
					get : function(){
						context["field"]  = "password";
			        	context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.password, context);},
					set : function(val){
						setterFunctions['password'].call(this,val,privateState);
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
									privateState.AuthenticationType = value?(value["AuthenticationType"]?value["AuthenticationType"]:null):null;
					privateState.OOB_SENT = value?(value["OOB_SENT"]?value["OOB_SENT"]:null):null;
					privateState.password = value?(value["password"]?value["password"]:null):null;
					privateState.username = value?(value["username"]?value["username"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(SendOOB);
	
	//Create new class level validator object
	BaseModel.Validator.call(SendOOB);
	
	var registerValidatorBackup = SendOOB.registerValidator;
	
	SendOOB.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( SendOOB.isValid(this, propName, val) ){
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
	//For Operation 'sendOOB' with service id 'sendOOB4943'
	SendOOB.sendOOB = function(params, onCompletion){
		return SendOOB.customVerb('sendOOB', params, onCompletion);
	};
	
	var relations = [
	];
	
	SendOOB.relations = relations;
	
	SendOOB.prototype.isValid = function(){
		return SendOOB.isValid(this);
	};
	
	SendOOB.prototype.objModelName = "SendOOB";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	SendOOB.registerProcessors = function(options, successCallback, failureCallback) {
	
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
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "SendOOB", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	SendOOB.clone = function(objectToClone) {
		var clonedObj = new SendOOB();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return SendOOB;
});