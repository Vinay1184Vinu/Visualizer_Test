define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function DeviceRegistrationPollingRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	DeviceRegistrationPollingRepository.prototype = Object.create(BaseRepository.prototype);
	DeviceRegistrationPollingRepository.prototype.constructor = DeviceRegistrationPollingRepository;

	//For Operation 'deviceRegistrationPolling' with service id 'getHIDDeviceRegistrationStatus5867'
	DeviceRegistrationPollingRepository.prototype.deviceRegistrationPolling = function(params,onCompletion){
		return DeviceRegistrationPollingRepository.prototype.customVerb('deviceRegistrationPolling',params, onCompletion);
	};
	
	
	return DeviceRegistrationPollingRepository;
})