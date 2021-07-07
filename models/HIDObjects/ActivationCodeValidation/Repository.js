define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function ActivationCodeValidationRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	ActivationCodeValidationRepository.prototype = Object.create(BaseRepository.prototype);
	ActivationCodeValidationRepository.prototype.constructor = ActivationCodeValidationRepository;

	//For Operation 'validateActivationCode' with service id 'ValidateUser9755'
	ActivationCodeValidationRepository.prototype.validateActivationCode = function(params,onCompletion){
		return ActivationCodeValidationRepository.prototype.customVerb('validateActivationCode',params, onCompletion);
	};
	
	
	return ActivationCodeValidationRepository;
})