define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function ApproveStatusPollingRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	ApproveStatusPollingRepository.prototype = Object.create(BaseRepository.prototype);
	ApproveStatusPollingRepository.prototype.constructor = ApproveStatusPollingRepository;

	//For Operation 'approveStatusPolling' with service id 'getHIDApprovalStatus5447'
	ApproveStatusPollingRepository.prototype.approveStatusPolling = function(params,onCompletion){
		return ApproveStatusPollingRepository.prototype.customVerb('approveStatusPolling',params, onCompletion);
	};
	
	
	return ApproveStatusPollingRepository;
})