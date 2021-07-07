define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "ApproveDeviceRegistration", "objectService" : "HIDObjects"};
	
	var setterFunctions = {
		Authorization : function(val, state){
			context["field"]  = "Authorization";
			context["metadata"] = (objectMetadata ? objectMetadata["Authorization"] : null);
			state['Authorization'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		detail_CreateDevice : function(val, state){
			context["field"]  = "detail_CreateDevice";
			context["metadata"] = (objectMetadata ? objectMetadata["detail_CreateDevice"] : null);
			state['detail_CreateDevice'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		detail_updateDevice : function(val, state){
			context["field"]  = "detail_updateDevice";
			context["metadata"] = (objectMetadata ? objectMetadata["detail_updateDevice"] : null);
			state['detail_updateDevice'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		DeviceId : function(val, state){
			context["field"]  = "DeviceId";
			context["metadata"] = (objectMetadata ? objectMetadata["DeviceId"] : null);
			state['DeviceId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		deviceIdOrch : function(val, state){
			context["field"]  = "deviceIdOrch";
			context["metadata"] = (objectMetadata ? objectMetadata["deviceIdOrch"] : null);
			state['deviceIdOrch'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		deviceType : function(val, state){
			context["field"]  = "deviceType";
			context["metadata"] = (objectMetadata ? objectMetadata["deviceType"] : null);
			state['deviceType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		errorCode : function(val, state){
			context["field"]  = "errorCode";
			context["metadata"] = (objectMetadata ? objectMetadata["errorCode"] : null);
			state['errorCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		errorCode_updateDevice : function(val, state){
			context["field"]  = "errorCode_updateDevice";
			context["metadata"] = (objectMetadata ? objectMetadata["errorCode_updateDevice"] : null);
			state['errorCode_updateDevice'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		expiryDate : function(val, state){
			context["field"]  = "expiryDate";
			context["metadata"] = (objectMetadata ? objectMetadata["expiryDate"] : null);
			state['expiryDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		provisionMsg : function(val, state){
			context["field"]  = "provisionMsg";
			context["metadata"] = (objectMetadata ? objectMetadata["provisionMsg"] : null);
			state['provisionMsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		scimType : function(val, state){
			context["field"]  = "scimType";
			context["metadata"] = (objectMetadata ? objectMetadata["scimType"] : null);
			state['scimType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		startDate : function(val, state){
			context["field"]  = "startDate";
			context["metadata"] = (objectMetadata ? objectMetadata["startDate"] : null);
			state['startDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		URL : function(val, state){
			context["field"]  = "URL";
			context["metadata"] = (objectMetadata ? objectMetadata["URL"] : null);
			state['URL'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		UserId : function(val, state){
			context["field"]  = "UserId";
			context["metadata"] = (objectMetadata ? objectMetadata["UserId"] : null);
			state['UserId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		username : function(val, state){
			context["field"]  = "username";
			context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
			state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		usernameWithRandomNo : function(val, state){
			context["field"]  = "usernameWithRandomNo";
			context["metadata"] = (objectMetadata ? objectMetadata["usernameWithRandomNo"] : null);
			state['usernameWithRandomNo'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function ApproveDeviceRegistration(defaultValues){
		var privateState = {};
			context["field"]  = "Authorization";
			context["metadata"] = (objectMetadata ? objectMetadata["Authorization"] : null);
			privateState.Authorization = defaultValues?(defaultValues["Authorization"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Authorization"], context):null):null;
			context["field"]  = "detail_CreateDevice";
			context["metadata"] = (objectMetadata ? objectMetadata["detail_CreateDevice"] : null);
			privateState.detail_CreateDevice = defaultValues?(defaultValues["detail_CreateDevice"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["detail_CreateDevice"], context):null):null;
			context["field"]  = "detail_updateDevice";
			context["metadata"] = (objectMetadata ? objectMetadata["detail_updateDevice"] : null);
			privateState.detail_updateDevice = defaultValues?(defaultValues["detail_updateDevice"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["detail_updateDevice"], context):null):null;
			context["field"]  = "DeviceId";
			context["metadata"] = (objectMetadata ? objectMetadata["DeviceId"] : null);
			privateState.DeviceId = defaultValues?(defaultValues["DeviceId"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DeviceId"], context):null):null;
			context["field"]  = "deviceIdOrch";
			context["metadata"] = (objectMetadata ? objectMetadata["deviceIdOrch"] : null);
			privateState.deviceIdOrch = defaultValues?(defaultValues["deviceIdOrch"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["deviceIdOrch"], context):null):null;
			context["field"]  = "deviceType";
			context["metadata"] = (objectMetadata ? objectMetadata["deviceType"] : null);
			privateState.deviceType = defaultValues?(defaultValues["deviceType"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["deviceType"], context):null):null;
			context["field"]  = "errorCode";
			context["metadata"] = (objectMetadata ? objectMetadata["errorCode"] : null);
			privateState.errorCode = defaultValues?(defaultValues["errorCode"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errorCode"], context):null):null;
			context["field"]  = "errorCode_updateDevice";
			context["metadata"] = (objectMetadata ? objectMetadata["errorCode_updateDevice"] : null);
			privateState.errorCode_updateDevice = defaultValues?(defaultValues["errorCode_updateDevice"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errorCode_updateDevice"], context):null):null;
			context["field"]  = "expiryDate";
			context["metadata"] = (objectMetadata ? objectMetadata["expiryDate"] : null);
			privateState.expiryDate = defaultValues?(defaultValues["expiryDate"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["expiryDate"], context):null):null;
			context["field"]  = "provisionMsg";
			context["metadata"] = (objectMetadata ? objectMetadata["provisionMsg"] : null);
			privateState.provisionMsg = defaultValues?(defaultValues["provisionMsg"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["provisionMsg"], context):null):null;
			context["field"]  = "scimType";
			context["metadata"] = (objectMetadata ? objectMetadata["scimType"] : null);
			privateState.scimType = defaultValues?(defaultValues["scimType"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["scimType"], context):null):null;
			context["field"]  = "startDate";
			context["metadata"] = (objectMetadata ? objectMetadata["startDate"] : null);
			privateState.startDate = defaultValues?(defaultValues["startDate"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["startDate"], context):null):null;
			context["field"]  = "URL";
			context["metadata"] = (objectMetadata ? objectMetadata["URL"] : null);
			privateState.URL = defaultValues?(defaultValues["URL"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["URL"], context):null):null;
			context["field"]  = "UserId";
			context["metadata"] = (objectMetadata ? objectMetadata["UserId"] : null);
			privateState.UserId = defaultValues?(defaultValues["UserId"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["UserId"], context):null):null;
			context["field"]  = "username";
			context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
			privateState.username = defaultValues?(defaultValues["username"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context):null):null;
			context["field"]  = "usernameWithRandomNo";
			context["metadata"] = (objectMetadata ? objectMetadata["usernameWithRandomNo"] : null);
			privateState.usernameWithRandomNo = defaultValues?(defaultValues["usernameWithRandomNo"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["usernameWithRandomNo"], context):null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"Authorization" : {
					get : function(){
						context["field"]  = "Authorization";
			        	context["metadata"] = (objectMetadata ? objectMetadata["Authorization"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Authorization, context);},
					set : function(val){
						setterFunctions['Authorization'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"detail_CreateDevice" : {
					get : function(){
						context["field"]  = "detail_CreateDevice";
			        	context["metadata"] = (objectMetadata ? objectMetadata["detail_CreateDevice"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.detail_CreateDevice, context);},
					set : function(val){
						setterFunctions['detail_CreateDevice'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"detail_updateDevice" : {
					get : function(){
						context["field"]  = "detail_updateDevice";
			        	context["metadata"] = (objectMetadata ? objectMetadata["detail_updateDevice"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.detail_updateDevice, context);},
					set : function(val){
						setterFunctions['detail_updateDevice'].call(this,val,privateState);
					},
					enumerable : true,
				},
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
				"deviceIdOrch" : {
					get : function(){
						context["field"]  = "deviceIdOrch";
			        	context["metadata"] = (objectMetadata ? objectMetadata["deviceIdOrch"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.deviceIdOrch, context);},
					set : function(val){
						setterFunctions['deviceIdOrch'].call(this,val,privateState);
					},
					enumerable : true,
				},
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
				"errorCode" : {
					get : function(){
						context["field"]  = "errorCode";
			        	context["metadata"] = (objectMetadata ? objectMetadata["errorCode"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.errorCode, context);},
					set : function(val){
						setterFunctions['errorCode'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"errorCode_updateDevice" : {
					get : function(){
						context["field"]  = "errorCode_updateDevice";
			        	context["metadata"] = (objectMetadata ? objectMetadata["errorCode_updateDevice"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.errorCode_updateDevice, context);},
					set : function(val){
						setterFunctions['errorCode_updateDevice'].call(this,val,privateState);
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
				"provisionMsg" : {
					get : function(){
						context["field"]  = "provisionMsg";
			        	context["metadata"] = (objectMetadata ? objectMetadata["provisionMsg"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.provisionMsg, context);},
					set : function(val){
						setterFunctions['provisionMsg'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"scimType" : {
					get : function(){
						context["field"]  = "scimType";
			        	context["metadata"] = (objectMetadata ? objectMetadata["scimType"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.scimType, context);},
					set : function(val){
						setterFunctions['scimType'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"startDate" : {
					get : function(){
						context["field"]  = "startDate";
			        	context["metadata"] = (objectMetadata ? objectMetadata["startDate"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.startDate, context);},
					set : function(val){
						setterFunctions['startDate'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"URL" : {
					get : function(){
						context["field"]  = "URL";
			        	context["metadata"] = (objectMetadata ? objectMetadata["URL"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.URL, context);},
					set : function(val){
						setterFunctions['URL'].call(this,val,privateState);
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
				"usernameWithRandomNo" : {
					get : function(){
						context["field"]  = "usernameWithRandomNo";
			        	context["metadata"] = (objectMetadata ? objectMetadata["usernameWithRandomNo"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.usernameWithRandomNo, context);},
					set : function(val){
						setterFunctions['usernameWithRandomNo'].call(this,val,privateState);
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
									privateState.Authorization = value?(value["Authorization"]?value["Authorization"]:null):null;
					privateState.detail_CreateDevice = value?(value["detail_CreateDevice"]?value["detail_CreateDevice"]:null):null;
					privateState.detail_updateDevice = value?(value["detail_updateDevice"]?value["detail_updateDevice"]:null):null;
					privateState.DeviceId = value?(value["DeviceId"]?value["DeviceId"]:null):null;
					privateState.deviceIdOrch = value?(value["deviceIdOrch"]?value["deviceIdOrch"]:null):null;
					privateState.deviceType = value?(value["deviceType"]?value["deviceType"]:null):null;
					privateState.errorCode = value?(value["errorCode"]?value["errorCode"]:null):null;
					privateState.errorCode_updateDevice = value?(value["errorCode_updateDevice"]?value["errorCode_updateDevice"]:null):null;
					privateState.expiryDate = value?(value["expiryDate"]?value["expiryDate"]:null):null;
					privateState.provisionMsg = value?(value["provisionMsg"]?value["provisionMsg"]:null):null;
					privateState.scimType = value?(value["scimType"]?value["scimType"]:null):null;
					privateState.startDate = value?(value["startDate"]?value["startDate"]:null):null;
					privateState.URL = value?(value["URL"]?value["URL"]:null):null;
					privateState.UserId = value?(value["UserId"]?value["UserId"]:null):null;
					privateState.username = value?(value["username"]?value["username"]:null):null;
					privateState.usernameWithRandomNo = value?(value["usernameWithRandomNo"]?value["usernameWithRandomNo"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(ApproveDeviceRegistration);
	
	//Create new class level validator object
	BaseModel.Validator.call(ApproveDeviceRegistration);
	
	var registerValidatorBackup = ApproveDeviceRegistration.registerValidator;
	
	ApproveDeviceRegistration.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( ApproveDeviceRegistration.isValid(this, propName, val) ){
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
	//For Operation 'getInviteCode' with service id 'getInviteCode5496'
	ApproveDeviceRegistration.getInviteCode = function(params, onCompletion){
		return ApproveDeviceRegistration.customVerb('getInviteCode', params, onCompletion);
	};
	
	var relations = [
	];
	
	ApproveDeviceRegistration.relations = relations;
	
	ApproveDeviceRegistration.prototype.isValid = function(){
		return ApproveDeviceRegistration.isValid(this);
	};
	
	ApproveDeviceRegistration.prototype.objModelName = "ApproveDeviceRegistration";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	ApproveDeviceRegistration.registerProcessors = function(options, successCallback, failureCallback) {
	
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
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "ApproveDeviceRegistration", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	ApproveDeviceRegistration.clone = function(objectToClone) {
		var clonedObj = new ApproveDeviceRegistration();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return ApproveDeviceRegistration;
});