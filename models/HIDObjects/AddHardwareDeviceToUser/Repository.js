define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function AddHardwareDeviceToUserRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	AddHardwareDeviceToUserRepository.prototype = Object.create(BaseRepository.prototype);
	AddHardwareDeviceToUserRepository.prototype.constructor = AddHardwareDeviceToUserRepository;

	//For Operation 'addHardwareDeviceToUser' with service id 'addDeviceToUser7865'
	AddHardwareDeviceToUserRepository.prototype.addHardwareDeviceToUser = function(params,onCompletion){
		return AddHardwareDeviceToUserRepository.prototype.customVerb('addHardwareDeviceToUser',params, onCompletion);
	};
	
	
	return AddHardwareDeviceToUserRepository;
})