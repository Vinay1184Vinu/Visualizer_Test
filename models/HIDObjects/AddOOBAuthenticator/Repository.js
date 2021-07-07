define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function AddOOBAuthenticatorRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	AddOOBAuthenticatorRepository.prototype = Object.create(BaseRepository.prototype);
	AddOOBAuthenticatorRepository.prototype.constructor = AddOOBAuthenticatorRepository;

	//For Operation 'addOOBAuthenticator' with service id 'addOOBAuthenticator5338'
	AddOOBAuthenticatorRepository.prototype.addOOBAuthenticator = function(params,onCompletion){
		return AddOOBAuthenticatorRepository.prototype.customVerb('addOOBAuthenticator',params, onCompletion);
	};
	
	
	return AddOOBAuthenticatorRepository;
})