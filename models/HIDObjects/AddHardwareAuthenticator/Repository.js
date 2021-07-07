define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function AddHardwareAuthenticatorRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	AddHardwareAuthenticatorRepository.prototype = Object.create(BaseRepository.prototype);
	AddHardwareAuthenticatorRepository.prototype.constructor = AddHardwareAuthenticatorRepository;

	//For Operation 'addHardwareAuthenticator' with service id 'addHardwareAuthenticator6512'
	AddHardwareAuthenticatorRepository.prototype.addHardwareAuthenticator = function(params,onCompletion){
		return AddHardwareAuthenticatorRepository.prototype.customVerb('addHardwareAuthenticator',params, onCompletion);
	};
	
	
	return AddHardwareAuthenticatorRepository;
})