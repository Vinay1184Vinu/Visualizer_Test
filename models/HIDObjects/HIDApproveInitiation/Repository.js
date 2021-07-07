define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function HIDApproveInitiationRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	HIDApproveInitiationRepository.prototype = Object.create(BaseRepository.prototype);
	HIDApproveInitiationRepository.prototype.constructor = HIDApproveInitiationRepository;

	//For Operation 'initiateApprove' with service id 'initiate1703'
	HIDApproveInitiationRepository.prototype.initiateApprove = function(params,onCompletion){
		return HIDApproveInitiationRepository.prototype.customVerb('initiateApprove',params, onCompletion);
	};
	
	
	return HIDApproveInitiationRepository;
})