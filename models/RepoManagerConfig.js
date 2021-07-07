define([],function(){
	var repoMapping = {
		AddPasswordAuthenticator  : {
			model : "HIDObjects/AddPasswordAuthenticator/Model",
			config : "HIDObjects/AddPasswordAuthenticator/MF_Config",
			repository : "HIDObjects/AddPasswordAuthenticator/Repository",
		},
		ApproveDeviceRegistration  : {
			model : "HIDObjects/ApproveDeviceRegistration/Model",
			config : "HIDObjects/ApproveDeviceRegistration/MF_Config",
			repository : "HIDObjects/ApproveDeviceRegistration/Repository",
		},
		DeviceRegistrationPolling  : {
			model : "HIDObjects/DeviceRegistrationPolling/Model",
			config : "HIDObjects/DeviceRegistrationPolling/MF_Config",
			repository : "HIDObjects/DeviceRegistrationPolling/Repository",
		},
		SendOOB  : {
			model : "HIDObjects/SendOOB/Model",
			config : "HIDObjects/SendOOB/MF_Config",
			repository : "HIDObjects/SendOOB/Repository",
		},
		AddHardwareDeviceToUser  : {
			model : "HIDObjects/AddHardwareDeviceToUser/Model",
			config : "HIDObjects/AddHardwareDeviceToUser/MF_Config",
			repository : "HIDObjects/AddHardwareDeviceToUser/Repository",
		},
		UpdateDeviceStatus  : {
			model : "HIDObjects/UpdateDeviceStatus/Model",
			config : "HIDObjects/UpdateDeviceStatus/MF_Config",
			repository : "HIDObjects/UpdateDeviceStatus/Repository",
		},
		HIDApproveInitiation  : {
			model : "HIDObjects/HIDApproveInitiation/Model",
			config : "HIDObjects/HIDApproveInitiation/MF_Config",
			repository : "HIDObjects/HIDApproveInitiation/Repository",
		},
		ApproveStatus  : {
			model : "HIDAuthService/ApproveStatus/Model",
			config : "HIDAuthService/ApproveStatus/MF_Config",
			repository : "HIDAuthService/ApproveStatus/Repository",
		},
		status  : {
			model : "HIDObjects/status/Model",
			config : "HIDObjects/status/MF_Config",
			repository : "",
		},
		ValidateOTP  : {
			model : "HIDObjects/ValidateOTP/Model",
			config : "HIDObjects/ValidateOTP/MF_Config",
			repository : "HIDObjects/ValidateOTP/Repository",
		},
		SearchDevices  : {
			model : "HIDObjects/SearchDevices/Model",
			config : "HIDObjects/SearchDevices/MF_Config",
			repository : "HIDObjects/SearchDevices/Repository",
		},
		AddHardwareAuthenticator  : {
			model : "HIDObjects/AddHardwareAuthenticator/Model",
			config : "HIDObjects/AddHardwareAuthenticator/MF_Config",
			repository : "HIDObjects/AddHardwareAuthenticator/Repository",
		},
		ApproveRequest  : {
			model : "HIDAuthService/ApproveRequest/Model",
			config : "HIDAuthService/ApproveRequest/MF_Config",
			repository : "HIDAuthService/ApproveRequest/Repository",
		},
		OTPRequest  : {
			model : "HIDAuthService/OTPRequest/Model",
			config : "HIDAuthService/OTPRequest/MF_Config",
			repository : "HIDAuthService/OTPRequest/Repository",
		},
		Devices  : {
			model : "HIDAuthService/Devices/Model",
			config : "HIDAuthService/Devices/MF_Config",
			repository : "HIDAuthService/Devices/Repository",
		},
		SearchHardwareDevice  : {
			model : "HIDObjects/SearchHardwareDevice/Model",
			config : "HIDObjects/SearchHardwareDevice/MF_Config",
			repository : "HIDObjects/SearchHardwareDevice/Repository",
		},
		ApproveStatusPolling  : {
			model : "HIDObjects/ApproveStatusPolling/Model",
			config : "HIDObjects/ApproveStatusPolling/MF_Config",
			repository : "HIDObjects/ApproveStatusPolling/Repository",
		},
		AddOOBAuthenticator  : {
			model : "HIDObjects/AddOOBAuthenticator/Model",
			config : "HIDObjects/AddOOBAuthenticator/MF_Config",
			repository : "HIDObjects/AddOOBAuthenticator/Repository",
		},
		ValidateOOB  : {
			model : "HIDObjects/ValidateOOB/Model",
			config : "HIDObjects/ValidateOOB/MF_Config",
			repository : "HIDObjects/ValidateOOB/Repository",
		},
		ActivationCodeValidation  : {
			model : "HIDObjects/ActivationCodeValidation/Model",
			config : "HIDObjects/ActivationCodeValidation/MF_Config",
			repository : "HIDObjects/ActivationCodeValidation/Repository",
		},
		resources  : {
			model : "HIDObjects/resources/Model",
			config : "HIDObjects/resources/MF_Config",
			repository : "",
		},
	};
	
	return repoMapping;
})