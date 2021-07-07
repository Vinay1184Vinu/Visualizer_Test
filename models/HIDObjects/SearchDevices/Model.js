define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "SearchDevices", "objectService" : "HIDObjects"};
	
	var setterFunctions = {
		active : function(val, state){
			context["field"]  = "active";
			context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
			state['active'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		deviceId : function(val, state){
			context["field"]  = "deviceId";
			context["metadata"] = (objectMetadata ? objectMetadata["deviceId"] : null);
			state['deviceId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		friendlyName : function(val, state){
			context["field"]  = "friendlyName";
			context["metadata"] = (objectMetadata ? objectMetadata["friendlyName"] : null);
			state['friendlyName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		type : function(val, state){
			context["field"]  = "type";
			context["metadata"] = (objectMetadata ? objectMetadata["type"] : null);
			state['type'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		status : function(val, state){
			context["field"]  = "status";
			context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
			state['status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		owner : function(val, state){
			context["field"]  = "owner";
			context["metadata"] = (objectMetadata ? objectMetadata["owner"] : null);
			state['owner'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		username : function(val, state){
			context["field"]  = "username";
			context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
			state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		userId : function(val, state){
			context["field"]  = "userId";
			context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
			state['userId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function SearchDevices(defaultValues){
		var privateState = {};
			context["field"]  = "active";
			context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
			privateState.active = defaultValues?(defaultValues["active"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["active"], context):null):null;
			context["field"]  = "deviceId";
			context["metadata"] = (objectMetadata ? objectMetadata["deviceId"] : null);
			privateState.deviceId = defaultValues?(defaultValues["deviceId"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["deviceId"], context):null):null;
			context["field"]  = "friendlyName";
			context["metadata"] = (objectMetadata ? objectMetadata["friendlyName"] : null);
			privateState.friendlyName = defaultValues?(defaultValues["friendlyName"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["friendlyName"], context):null):null;
			context["field"]  = "type";
			context["metadata"] = (objectMetadata ? objectMetadata["type"] : null);
			privateState.type = defaultValues?(defaultValues["type"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["type"], context):null):null;
			context["field"]  = "status";
			context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
			privateState.status = defaultValues?(defaultValues["status"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["status"], context):null):null;
			context["field"]  = "owner";
			context["metadata"] = (objectMetadata ? objectMetadata["owner"] : null);
			privateState.owner = defaultValues?(defaultValues["owner"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["owner"], context):null):null;
			context["field"]  = "username";
			context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
			privateState.username = defaultValues?(defaultValues["username"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context):null):null;
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
				"deviceId" : {
					get : function(){
						context["field"]  = "deviceId";
			        	context["metadata"] = (objectMetadata ? objectMetadata["deviceId"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.deviceId, context);},
					set : function(val){
						setterFunctions['deviceId'].call(this,val,privateState);
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
				"type" : {
					get : function(){
						context["field"]  = "type";
			        	context["metadata"] = (objectMetadata ? objectMetadata["type"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.type, context);},
					set : function(val){
						setterFunctions['type'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"status" : {
					get : function(){
						context["field"]  = "status";
			        	context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.status, context);},
					set : function(val){
						setterFunctions['status'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"owner" : {
					get : function(){
						context["field"]  = "owner";
			        	context["metadata"] = (objectMetadata ? objectMetadata["owner"] : null);
						return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.owner, context);},
					set : function(val){
						setterFunctions['owner'].call(this,val,privateState);
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
					privateState.deviceId = value?(value["deviceId"]?value["deviceId"]:null):null;
					privateState.friendlyName = value?(value["friendlyName"]?value["friendlyName"]:null):null;
					privateState.type = value?(value["type"]?value["type"]:null):null;
					privateState.status = value?(value["status"]?value["status"]:null):null;
					privateState.owner = value?(value["owner"]?value["owner"]:null):null;
					privateState.username = value?(value["username"]?value["username"]:null):null;
					privateState.userId = value?(value["userId"]?value["userId"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(SearchDevices);
	
	//Create new class level validator object
	BaseModel.Validator.call(SearchDevices);
	
	var registerValidatorBackup = SearchDevices.registerValidator;
	
	SearchDevices.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( SearchDevices.isValid(this, propName, val) ){
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
	//For Operation 'searchDevices' with service id 'searchDevices3904'
	SearchDevices.searchDevices = function(params, onCompletion){
		return SearchDevices.customVerb('searchDevices', params, onCompletion);
	};
	
	var relations = [
	];
	
	SearchDevices.relations = relations;
	
	SearchDevices.prototype.isValid = function(){
		return SearchDevices.isValid(this);
	};
	
	SearchDevices.prototype.objModelName = "SearchDevices";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	SearchDevices.registerProcessors = function(options, successCallback, failureCallback) {
	
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
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "SearchDevices", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	SearchDevices.clone = function(objectToClone) {
		var clonedObj = new SearchDevices();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return SearchDevices;
});