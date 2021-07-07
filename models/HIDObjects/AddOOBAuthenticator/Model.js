define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "AddOOBAuthenticator", "objectService" : "HIDObjects"};
	
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
		AuthenticatorValue : function(val, state){
			context["field"]  = "AuthenticatorValue";
			context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorValue"] : null);
			state['AuthenticatorValue'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		id : function(val, state){
			context["field"]  = "id";
			context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
			state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		scimType_OTP : function(val, state){
			context["field"]  = "scimType_OTP";
			context["metadata"] = (objectMetadata ? objectMetadata["scimType_OTP"] : null);
			state['scimType_OTP'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		userId : function(val, state){
			context["field"]  = "userId";
			context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
			state['userId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function AddOOBAuthenticator(defaultValues){
		var privateState = {};
			context["field"]  = "active";
			context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
			privateState.active = defaultValues?(defaultValues["active"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["active"], context):null):null;
			context["field"]  = "AuthenticatorType";
			context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorType"] : null);
			privateState.AuthenticatorType = defaultValues?(defaultValues["AuthenticatorType"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AuthenticatorType"], context):null):null;
			context["field"]  = "AuthenticatorValue";
			context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorValue"] : null);
			privateState.AuthenticatorValue = defaultValues?(defaultValues["AuthenticatorValue"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AuthenticatorValue"], context):null):null;
			context["field"]  = "id";
			context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
			privateState.id = defaultValues?(defaultValues["id"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context):null):null;
			context["field"]  = "scimType_OTP";
			context["metadata"] = (objectMetadata ? objectMetadata["scimType_OTP"] : null);
			privateState.scimType_OTP = defaultValues?(defaultValues["scimType_OTP"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["scimType_OTP"], context):null):null;
			context["field"]  = "userId";
			context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
			privateState.userId = defaultValues?(defaultValues["userId"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userId"], context):null):null;
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
				"AuthenticatorValue" : {
					get : function(){
						context["field"]  = "AuthenticatorValue";
			        	context["metadata"] = (objectMetadata ? objectMetadata["AuthenticatorValue"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AuthenticatorValue, context);},
					set : function(val){
						setterFunctions['AuthenticatorValue'].call(this,val,privateState);
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
				"scimType_OTP" : {
					get : function(){
						context["field"]  = "scimType_OTP";
			        	context["metadata"] = (objectMetadata ? objectMetadata["scimType_OTP"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.scimType_OTP, context);},
					set : function(val){
						setterFunctions['scimType_OTP'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"userId" : {
					get : function(){
						context["field"]  = "userId";
			        	context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userId, context);},
					set : function(val){
						setterFunctions['userId'].call(this,val,privateState);
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
					privateState.AuthenticatorValue = value?(value["AuthenticatorValue"]?value["AuthenticatorValue"]:null):null;
					privateState.id = value?(value["id"]?value["id"]:null):null;
					privateState.scimType_OTP = value?(value["scimType_OTP"]?value["scimType_OTP"]:null):null;
					privateState.userId = value?(value["userId"]?value["userId"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(AddOOBAuthenticator);
	
	//Create new class level validator object
	BaseModel.Validator.call(AddOOBAuthenticator);
	
	var registerValidatorBackup = AddOOBAuthenticator.registerValidator;
	
	AddOOBAuthenticator.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( AddOOBAuthenticator.isValid(this, propName, val) ){
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
	//For Operation 'addOOBAuthenticator' with service id 'addOOBAuthenticator5338'
	AddOOBAuthenticator.addOOBAuthenticator = function(params, onCompletion){
		return AddOOBAuthenticator.customVerb('addOOBAuthenticator', params, onCompletion);
	};
	
	var relations = [
	];
	
	AddOOBAuthenticator.relations = relations;
	
	AddOOBAuthenticator.prototype.isValid = function(){
		return AddOOBAuthenticator.isValid(this);
	};
	
	AddOOBAuthenticator.prototype.objModelName = "AddOOBAuthenticator";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	AddOOBAuthenticator.registerProcessors = function(options, successCallback, failureCallback) {
	
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
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "AddOOBAuthenticator", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	AddOOBAuthenticator.clone = function(objectToClone) {
		var clonedObj = new AddOOBAuthenticator();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return AddOOBAuthenticator;
});