define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function UpdateDeviceStatusRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	UpdateDeviceStatusRepository.prototype = Object.create(BaseRepository.prototype);
	UpdateDeviceStatusRepository.prototype.constructor = UpdateDeviceStatusRepository;

	//For Operation 'updateDeviceStatus' with service id 'updateDeviceStatus3078'
	UpdateDeviceStatusRepository.prototype.updateDeviceStatus = function(params,onCompletion){
		return UpdateDeviceStatusRepository.prototype.customVerb('updateDeviceStatus',params, onCompletion);
	};
	
	
	return UpdateDeviceStatusRepository;
})