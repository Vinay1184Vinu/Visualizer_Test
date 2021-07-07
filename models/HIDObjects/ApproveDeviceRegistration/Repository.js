define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function ApproveDeviceRegistrationRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	ApproveDeviceRegistrationRepository.prototype = Object.create(BaseRepository.prototype);
	ApproveDeviceRegistrationRepository.prototype.constructor = ApproveDeviceRegistrationRepository;

	//For Operation 'getInviteCode' with service id 'getInviteCode5496'
	ApproveDeviceRegistrationRepository.prototype.getInviteCode = function(params,onCompletion){
		return ApproveDeviceRegistrationRepository.prototype.customVerb('getInviteCode',params, onCompletion);
	};
	
	
	return ApproveDeviceRegistrationRepository;
})