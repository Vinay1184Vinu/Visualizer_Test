define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "status", "objectService" : "HIDObjects"};
	
	var setterFunctions = {
		active : function(val, state){
			context["field"]  = "active";
			context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
			state['active'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
		status : function(val, state){
			context["field"]  = "status";
			context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
			state['status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
		},
	};
	
	
	//Create the Model Class
	function status(defaultValues){
		var privateState = {};
			context["field"]  = "active";
			context["metadata"] = (objectMetadata ? objectMetadata["active"] : null);
			privateState.active = defaultValues?(defaultValues["active"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["active"], context):null):null;
			context["field"]  = "status";
			context["metadata"] = (objectMetadata ? objectMetadata["status"] : null);
			privateState.status = defaultValues?(defaultValues["status"]?kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["status"], context):null):null;
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
			});
			
			//converts model object to json object.
			this.toJsonInternal = function() {
				return Object.assign({}, privateState);
			};

			//overwrites object state with provided json value in argument.
			this.fromJsonInternal = function(value) {
									privateState.active = value?(value["active"]?value["active"]:null):null;
					privateState.status = value?(value["status"]?value["status"]:null):null;
			};

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(status);
	
	//Create new class level validator object
	BaseModel.Validator.call(status);
	
	var registerValidatorBackup = status.registerValidator;
	
	status.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( status.isValid(this, propName, val) ){
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
	
	status.relations = relations;
	
	status.prototype.isValid = function(){
		return status.isValid(this);
	};
	
	status.prototype.objModelName = "status";
	
	/*This API allows registration of preprocessors and postprocessors for model.
	 *It also fetches object metadata for object. 
	 *Options Supported
	 *preProcessor  - preprocessor function for use with setters.
	 *postProcessor - post processor callback for use with getters.
	 *getFromServer - value set to true will fetch metadata from network else from cache.
	 */
	status.registerProcessors = function(options, successCallback, failureCallback) {
	
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
		
		kony.mvc.util.ProcessorUtils.getMetadataForObject("HIDObjects", "status", options, metaDataSuccess, metaDataFailure);
	};
	
	//clone the object provided in argument.
	status.clone = function(objectToClone) {
		var clonedObj = new status();
		clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
		return clonedObj;
	};
	
	return status;
});