define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function ValidateOTPRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	ValidateOTPRepository.prototype = Object.create(BaseRepository.prototype);
	ValidateOTPRepository.prototype.constructor = ValidateOTPRepository;

	//For Operation 'validateOTP' with service id 'validateOTP3625'
	ValidateOTPRepository.prototype.validateOTP = function(params,onCompletion){
		return ValidateOTPRepository.prototype.customVerb('validateOTP',params, onCompletion);
	};
	
	
	return ValidateOTPRepository;
})