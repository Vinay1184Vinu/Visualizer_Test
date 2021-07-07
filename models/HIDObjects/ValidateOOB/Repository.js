define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function ValidateOOBRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	ValidateOOBRepository.prototype = Object.create(BaseRepository.prototype);
	ValidateOOBRepository.prototype.constructor = ValidateOOBRepository;

	//For Operation 'validateOOB' with service id 'validateOOB1305'
	ValidateOOBRepository.prototype.validateOOB = function(params,onCompletion){
		return ValidateOOBRepository.prototype.customVerb('validateOOB',params, onCompletion);
	};
	
	
	return ValidateOOBRepository;
})