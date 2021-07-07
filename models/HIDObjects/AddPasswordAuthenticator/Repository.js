define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function AddPasswordAuthenticatorRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	AddPasswordAuthenticatorRepository.prototype = Object.create(BaseRepository.prototype);
	AddPasswordAuthenticatorRepository.prototype.constructor = AddPasswordAuthenticatorRepository;

	//For Operation 'addPasswordAuthenticator' with service id 'addPasswordAuthenticatorInt2341'
	AddPasswordAuthenticatorRepository.prototype.addPasswordAuthenticator = function(params,onCompletion){
		return AddPasswordAuthenticatorRepository.prototype.customVerb('addPasswordAuthenticator',params, onCompletion);
	};
	
	
	return AddPasswordAuthenticatorRepository;
})