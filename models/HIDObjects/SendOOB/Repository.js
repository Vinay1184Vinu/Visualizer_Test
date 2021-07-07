define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function SendOOBRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	SendOOBRepository.prototype = Object.create(BaseRepository.prototype);
	SendOOBRepository.prototype.constructor = SendOOBRepository;

	//For Operation 'sendOOB' with service id 'sendOOB4943'
	SendOOBRepository.prototype.sendOOB = function(params,onCompletion){
		return SendOOBRepository.prototype.customVerb('sendOOB',params, onCompletion);
	};
	
	
	return SendOOBRepository;
})