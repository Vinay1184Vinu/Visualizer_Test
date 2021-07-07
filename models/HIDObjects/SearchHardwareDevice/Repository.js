define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function SearchHardwareDeviceRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	SearchHardwareDeviceRepository.prototype = Object.create(BaseRepository.prototype);
	SearchHardwareDeviceRepository.prototype.constructor = SearchHardwareDeviceRepository;

	//For Operation 'searchHardwareDevice' with service id 'searchHardwareDevice4903'
	SearchHardwareDeviceRepository.prototype.searchHardwareDevice = function(params,onCompletion){
		return SearchHardwareDeviceRepository.prototype.customVerb('searchHardwareDevice',params, onCompletion);
	};
	
	
	return SearchHardwareDeviceRepository;
})