define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function SearchDevicesRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	SearchDevicesRepository.prototype = Object.create(BaseRepository.prototype);
	SearchDevicesRepository.prototype.constructor = SearchDevicesRepository;

	//For Operation 'searchDevices' with service id 'searchDevices3904'
	SearchDevicesRepository.prototype.searchDevices = function(params,onCompletion){
		return SearchDevicesRepository.prototype.customVerb('searchDevices',params, onCompletion);
	};
	
	
	return SearchDevicesRepository;
})