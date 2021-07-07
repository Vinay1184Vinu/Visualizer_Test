define({ 
  resend:false,
  gblTimer : null,
  gblCredInfo : "",
  contexts:["Login","OTP","Approve","OTPFail","MFA"],
  mfa_images : {
    "Password" : "password.jpg",
    "SMS" : "smsotp.png",
    "Approve":"approveph1.png",
    "Secure":"otpimg.png",
    "Email" : "emailotp.png"
  },
  counter:3,
  MFA : "Approve",
  username : "",
  password : "", 
  mfa_key : "",
  approveFactor:"second",
  firstFactor:"Password",
  otpAuthType : "OTP_EML",
  otpCancel : "second",
  init:function(){
    this.view.postShow = this.postShow;
    this.view.preShow = this.preShow;
    this.view.btnSignUp.onClick = this.btnSignUp_OnClick;
    this.view.lblRememberMe.onTouchEnd = this.lblRememberMe_onTouchEnd;
    this.view.SquareLight.onTouchEnd = this.lblRememberMe_onTouchEnd;
    this.view.CheckSquareLight.onTouchEnd = this.lblRememberMe_onTouchEnd;
    this.view.lblResendNot.onTouchEnd = this.lblResendNot_onTouchEnd;
    this.view.btnConfirmOTP.onClick = this.validateOTP;
    this.view.tbxOTP.onDone = this.validateOTP;
    this.view.btnLogin.onClick = this.btnLogin_OnClick;
    this.view.imgApprove.onTouchStart = source => this.selectMFA(source);
    this.view.imgSMS.onTouchStart = source => this.selectMFA(source);
    this.view.imgEmail.onTouchStart = source => this.selectMFA(source);
    this.view.imgPassword.onTouchStart = source => this.selectMFA(source);
    this.view.imgSecure.onTouchStart = source => this.selectMFA(source);
    this.view.imgHW.onTouchStart = source => this.selectMFA(source);
    this.view.icoApprove.onTouchEnd = source => this.altFirstFactor(source);
    this.view.icoSecure.onTouchEnd = source => this.altFirstFactor(source);
    this.view.icoSMS.onTouchEnd = source => this.altFirstFactor(source);
    this.view.icoEmail.onTouchEnd = source => this.altFirstFactor(source);
    this.view.icoHW.onTouchEnd = source => this.altFirstFactor(source);
    this.view.btnContMFA.onClick = this.btnContMFA_onClick;
    this.view.btnCancelMFA.onClick = () => this.contextSwitch("Login");
    this.view.btnCancelOTP.onClick =  this.btnCancelOTP_onClick;
    this.view.btnTryOTP.onClick = this.btnTryOTP_onClick;
    //this.view.tbxPassword.onDone = this.btnLogin_OnClick;
  },
  preShow:function(){
      this.view.lblSigntoAcc.text = "Login to your account";
      this.view.flxUserName.setVisibility(true);
      this.view.flxChoose.setVisibility(true);
      this.view.btnLogin.width="48%";
      this.view.flxPassword.top = "3%";
      this.view.flxButtons.top = "3%";
      this.showLoadingIndicator(false);
      this.firstFactor = "Password";
  },
  postShow:function(){
    this.view.tbxUser.text = this.username;
    this.contextSwitch("Login"); 
  },
  btnSignUp_OnClick:function(){
    if(this.view.tbxUser.text === ""){
      this.view.lblErrorLogin.text = "Please enter UserID";
      return;
    }
    if(this.view.tbxPassword.text === ""){
      this.view.lblErrorLogin.text = "Please enter Password";
      return;
    }
    if((this.view.tbxUser.text.toLowerCase() !== "hidglobal" || this.view.tbxPassword.text !== "HID")){
      //this.CIBAAuthentication({"userid":this.view.tbxUser.text ,"password":this.view.tbxPassword.text});
      // this.contextSwitch("OTP");
      this.showLoadingIndicator(true);
      this.username = this.view.tbxUser.text;
      this.view.onboarding.validateActivationcode(this.view.tbxUser.text,this.view.tbxPassword.text);
      this.view.onboarding.onActivationCodeSuccess = 
        success => {
        this.showLoadingIndicator(false);
        this.navigateToOnboarding(success);
      };
      this.view.onboarding.onActivationCodeFailure = 
        error => {
        this.showLoadingIndicator(false);
        this.view.lblErrorLogin.text = error.errmsg;
      };
      this.username = this.view.tbxUser.text;
    }
    //this.navigateToOnboarding();
    this.view.lblErrorLogin.text = "";
  },  
  btnLogin_OnClick:function(){
    if(this.view.tbxUser.text === ""){
      this.view.lblErrorLogin.text = "Please enter UserID";
      return;
    }
    if(this.view.tbxPassword.text === ""){
      this.view.lblErrorLogin.text = "Please enter Password";
      return;
    }
    this.username = this.view.tbxUser.text;
    //this.view.authentication.firstFactor = "STATIC_PWD";
    let factor = this.firstFactor == "Password" ? "first" : "second";
    this.passwordAuth(factor);
  },
  loginUserIdentity:function(info){
    this.username = info.userid;
    this.password = info.password;
    this.showLoadingIndicator(true);
    var serviceName = "UserCredentialsIdentity";
    var identitySvc = KNYMobileFabric.getIdentityService(serviceName);
    var self = this;
    identitySvc.login(info, 
      response => {
      this.contextSwitch("MFA");
      this.showLoadingIndicator(false);
    }, 
       error => {
      //alert(JSON.stringify(error));
      this.view.lblErrorLogin.text = "Invalid Credentials Please check Username or Password";
      this.showLoadingIndicator(false);
    });
  },
  CIBAAuthentication:function(credentialInfo){
    this.gblCredInfo = credentialInfo;
    this.view.btnLogin.setEnabled(false);
    kony.print("CIBAAuthentication Request ---> " + JSON.stringify(credentialInfo));
    //kony.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, {});
    this.view.ciba.login(credentialInfo);
    this.view.ciba.onSuccessCIBAInitiationCallback = response => this.onAuthSuccess(response);
    this.view.ciba.onFailureCIBAInitiationCallback = response => this.onAuthFailure(response);
  },
  onAuthSuccess:function(response){
    //alert("onAuthSuccess");
    this.approveView(true);
    var self = this;
    kony.print("onAuthSuccess response ---> " + JSON.stringify(response));
    this.view.ciba.pollForCIBAAuthStatus(response);
    this.view.ciba.onCIBAFailureCallback = function(error){
      kony.print("Error Object == "+ JSON.stringify(error));
      self.view.lblErrorLogin.text= error.message;
      //alert("failed");
      this.approveView(false);
    }.bind(this);   
    this.view.ciba.onCIBACompletionStatusCallback = function(response){
      //alert("success")
      kony.print("CIBA Logon Response == "+ JSON.stringify(response));
      if(response.ciba_logon_status === 'accept'){
        var frmAccounts = new kony.mvc.Navigation("frmOnSuccesAnthenticate");
        frmAccounts.navigate();
      }else if(response.ciba_logon_status === 'deny'){
        self.view.lblErrorLogin.text= "CIBA Logon denied ...";
        //self.view.lblErrorLogin.setVisibility(true);
        //self.view.forceLayout();
      }
      this.approveView(false);
    }.bind(this);
    kony.application.dismissLoadingScreen();
  },
  approveView:function(visible,context){
    if(visible){
      this.timerNot();
    }else{
      if(this.gblTimer){
        clearTimeout(this.gblTimer);
      }
    }
    let skin = visible ? "sknHIDTransparentWhite"  : "sknHIDTransparentBlue";
    this.view.flxImg.skin = skin;
    //alert("here " + context);
    this.contextSwitch(context);
  },
  btnTryOTP_onClick : function(){
      this.view.authentication.cancelApprovePolling();
      if(this.approveFactor == "first"){
        this.approveView(false , "Login");
        this.firstFactor = "Password";
      }else{
        this.approveView(false , "MFA");
      }
  },
  btnCancelOTP_onClick : function(){
    if(this.otpCancel == "first"){
      this.contextSwitch("Login");
      this.firstFactor = "Password";
    }else{
      this.contextSwitch("MFA");
    }
  },
  onAuthFailure:function(response){
    kony.print("onAuthFailure ---> " + JSON.stringify(response));
    alert("Server down please try again later");
    this.view.lblErrorLogin.text= "Entered Username and Password does'nt match please try again";
    this.view.lblErrorLogin.setVisibility(true);
    this.view.tbxUser.text = "";
    this.view.tbxPassword.text = "";
    this.view.btnLogin.setEnabled(true);
    kony.application.dismissLoadingScreen();
  },
  lblRememberMe_onTouchEnd:function(){
    this.view.SquareLight.setVisibility(!this.view.SquareLight.isVisible);
    this.view.CheckSquareLight.setVisibility(!this.view.CheckSquareLight.isVisible);
    this.view.CheckSquareLight.centerY = "50%";
    this.view.flxRM.forceLayout();
  },
  contextSwitch:function(visible){
    for(let i=0; i<this.contexts.length; i++){
      this.view["sider" + this.contexts[i]].setVisibility(this.contexts[i]===visible);
      this.view["flx" + this.contexts[i]].setVisibility(this.contexts[i]===visible);
    }
    this.view.tbxPassword.text ="";
    var name = this.view.tbxUser.text;
    this.view.flxImg.skin = "sknHIDTransparentBlue";
    if(visible === "OTP"){
      this.view.flxImg.skin = "sknHIDTransparentWhite";
      this.view.imgOTP.setVisibility(true);
      this.view.flxWrongAttemps.setVisibility(false);  
      this.view.lblAttmt2.skin = "lblRoundWhite";
      this.view.lblAttmt3.skin = "lblRoundWhite";
      this.view.lblErrorOTP.setVisibility(false);
    }
    if(visible == "MFA"){
      this.view.flxImg.skin = "sknHIDTransparentWhite";
      this.setMFAOption();
    }
    if(visible == "OTPFail" || visible == "OTP"){
      this.counter = 3;
    }
    this.view.tbxOTP.text = "";
    this.view.lblErrorApprove.text = "";
    this.view.flxMain.forceLayout();
  },

  timerNot:function(){
    var a = 150;
    var self = this;
    self.view.lblTimerNot.text = "";
    var timer =null;
    this.gblTimer = timer = setInterval(timerFun,1000);
    function timerFun(){
      if(a === 0){
        //alert("timer canceled");
        clearTimeout(timer);
        self.view.authentication.cancelApprovePolling();
        self.view.lblErrorApprove.text = `Approve timeout please try resend or try another factor`;
      }
      let min = Math.floor(a/60);
      let sec = a%60;
      var text = sec < 10 ? `0${min}:0${sec}`:`0${min}:${sec}`;
      self.view.lblTimerNot.text = text;
      self.view.flxTimer.forceLayout();
      a--;
    }
  },
  lblResendNot_onTouchEnd:function(){
    if(this.gblTimer !== null){
      this.view.lblTimerNot.text = "";
      clearTimeout(this.gblTimer);
    }
    this.view.authentication.cancelApprovePolling();
    this.approveAuth(this.approveFactor);
    
  },
  selectMFA:function(source){
    source.skin = "imgFocus"
    let flow = source.id.substring(3);
    let opts = ["Approve","SMS","Email","Secure","Password","HW"];
    let hide = opts.filter((i) => i!=flow);
    for(let i=0;i<hide.length;i++){
       this.view["img"+hide[i]].skin = "slImage";
    }
   this.view.flxImg.skin =  "sknHIDTransparentWhite";
    //let imgs = flow == "Approve" ? "approveph1.png" : "otpimg.png";
    //this.view.imgMFA.src = imgs;
    switch(flow){
      case "Approve":
        this.view.lblMFAOptions.text = `On Selecting Approve the Notification will be sent to the Approve app for Authorization`;
        this.view.imgMFA.src = "approveph1.png";
        this.MFA = "Approve";
        break;
      case "SMS":
        this.MFA = "OTP_SMS";
        this.view.lblMFAOptions.text = `On Selecting SMS OTP an One Time Password will be sent to your registered mobile number`;
        this.view.lblWelcome6.text = "HID Out Of Band SMS OTP";
        this.view.imgMFA.src="smsotp.png";
        this.view.imgOTP.src ="smsotp.png";
        this.otpCancel = "second";
        break;
      case "Email":
        this.MFA = "OTP_EML";
        this.view.lblMFAOptions.text = `On Selecting Email OTP an One Time Password will be sent to your registered Email`;
        this.view.lblWelcome6.text = "HID Out of Band Email OTP";
        this.view.imgMFA.src="emailotp.png";
        this.view.imgOTP.src="emailotp.png";
        this.otpCancel = "second";
        break;
      case "Secure":
        this.view.lblMFAOptions.text = `On Selecting Secure Code You can authenticate with the Secure Code from HID Approve App`;
        this.view.imgMFA.src = "otpimg.png";
        this.view.imgOTP.src = "otpimg.png";
        this.view.lblWelcome6.text = "HID Approve Secure Code";
        this.MFA = "Secure";
        this.otpCancel = "second";
        break;
      case "Password":
        this.view.lblMFAOptions.text = `On Selecting Password You can authenticate with the registered Password`;
        this.view.imgMFA.src = "password.jpg";
        this.MFA = "Password";
        this.view.flxImg.skin = "sknBgWhite";
        break;
      case "HW":
        this.view.lblMFAOptions.text = `On Selecting Hardware Token You can authenticate with HardWare Token associated to your Device`;
        this.view.imgMFA.src = "password.jpg";
        this.view.imgOTP.src = "password.jpg";
        this.view.lblWelcome6.text = "HID Hardware Token";
        this.MFA = "HW";
        this.otpCancel = "second";
        break;
      default:
        this.MFA = "Approve";
    }
  },
  altFirstFactor : function(source){
    let flow = source.id.substring(3);
    if(this.view.tbxUser.text == ""){
        this.view.lblErrorLogin.text = "Please Enter Username";
        return;
    }
    this.username = this.view.tbxUser.text;
    switch(flow){
      case "Approve":
        this.firstFactor = "Approve";
        this.approveAuth("first");
        break;
      case "SMS":
        this.firstFactor = "SMS";
        this.view.imgOTP.src ="smsotp.png";
        this.otpCancel = "first";
        this.sendOTP("OTP_SMS");
        this.view.lblWelcome6.text = "HID Out Of Band SMS OTP";
        break;
      case "Email":
        this.firstFactor = "Email";
        this.sendOTP("OTP_EML");
        this.view.lblWelcome6.text = "HID Out of Band Email OTP";
        this.view.imgOTP.src="emailotp.png";
        this.otpCancel = "first";
        break;
      case "Secure":
        this.firstFactor = "Secure";
        this.view.btnConfirmOTP.onClick = this.secureCode_onClick;
        this.view.tbxOTP.onDone = this.secureCode_onClick;
        this.view.imgOTP.src = "otpimg.png";
        this.contextSwitch("OTP");
        this.otpCancel = "first";
        this.view.lblWelcome6.text = "HID Approve Secure Code";
        break;
      case "HW":  
        this.firstFactor = "HW";
        this.view.btnConfirmOTP.onClick = this.HW_onClick;
        this.view.tbxOTP.onDone = this.HW_onClick;
        this.view.imgOTP.src = "password.jpg";
        this.contextSwitch("OTP");
        this.otpCancel = "first";
        this.view.lblWelcome6.text = "HID Hardware Token";
        break;  
      default:
        return;
    }
  },
  approveAuth : function(factor){
     this.approveFactor = factor;
     this.showLoadingIndicator(true);
     var self = this;
     function SCB_ApproveS(success){
        this.approveView(false,"Login");
        this.navigateToAccounts();
        this.showLoadingIndicator(false);
     }
     function FCB_ApproveS(error){
        //alert(JSON.stringify(error));
        this.approveView(false,"Approve"); 
        let text = error.auth_req_id !== undefined ? "Approve has been declined, please try again" : "Approve timeout please try resend or try another factor";
        this.view.lblErrorApprove.text = text;
        this.showLoadingIndicator(false);
     }
     function SCB_ApproveF(success){
        this.mfa_key = success.mfa_meta.auth_id;
        //this.contextSwitch("MFA");
       // alert(self.mfa_key);
        this.approveView(false,"MFA");
        this.showLoadingIndicator(false);
     }
     function FCB_ApproveF(error){
        this.approveView(false,"Approve"); 
        let text = error.auth_req_id !== undefined ? "Approve has been declined, please try again" : "Approve timeout please try resend or try another factor";
        this.view.lblErrorApprove.text = text;
        this.showLoadingIndicator(false);
     }
     if(factor == "second"){
       this.view.authentication.secondFactor = "APPROVE";
       this.view.authentication.initiateApproveSuccess = 
         success => {  
              this.approveView(true, "Approve");
              this.showLoadingIndicator(false);
         };
       this.view.authentication.secondFactorAuthSuccess = SCB_ApproveS;
       this.view.authentication.secondFactorAuthFailure = FCB_ApproveS;
       this.authenticateSecondFactor("",this.mfa_key,SCB_ApproveS.bind(this),FCB_ApproveS.bind(this));
     }
    if(factor == "first"){
      this.view.authentication.firstFactor = "APPROVE";
      //this.showLoadingIndicator(true);
      this.view.authentication.initiateApproveSuccess = 
        success => {  
            this.approveView(true, "Approve");
            this.showLoadingIndicator(false);
        };
      this.view.authentication.firstFactorAuthSuccess = SCB_ApproveF;
      this.view.authentication.firstFactorAuthFailure = FCB_ApproveF;
      this.authenticateFirstFactor(this.username,"",SCB_ApproveF.bind(this),FCB_ApproveF.bind(this));
    }
  },
  passwordAuth: function(factor){
     this.showLoadingIndicator(true);
     var self = this;
     function SCB_PwdS(success){
        this.navigateToAccounts();
     }
     function FCB_PwdS(error){
        this.view.lblErrorLogin.text = "Password is Incorrect! Please try again";
        this.showLoadingIndicator(false);
       
     }
     function SCB_PwdF(success){
        this.mfa_key = success.mfa_meta.auth_id;
        this.contextSwitch("MFA");
        this.showLoadingIndicator(false);
     }
     function FCB_PwdF(error){
       // alert(JSON.stringify(error));
        this.view.lblErrorLogin.text = "Username or Password is Incorrect";
        this.showLoadingIndicator(false);
     }
     if(factor == "second"){
       this.view.authentication.secondFactor = "STATIC_PWD";
       this.authenticateSecondFactor(this.view.tbxPassword.text,this.mfa_key,SCB_PwdS.bind(this),FCB_PwdS.bind(this));
     }
    if(factor == "first"){
      this.view.authentication.firstFactor = "STATIC_PWD";
      this.authenticateFirstFactor(this.username,this.view.tbxPassword.text,SCB_PwdF.bind(this),FCB_PwdF.bind(this));
    }
  },
  secureCodeAuth: function(factor){
    this.showLoadingIndicator(true);
    var self = this;
    function SCB_scS(success){
      this.navigateToAccounts();
    }
    function FCB_scS(error){
      this.OTPFailure("invalid_grant");
      this.showLoadingIndicator(false);

    }
    function SCB_scF(success){
      this.mfa_key = success.mfa_meta.auth_id;
      this.contextSwitch("MFA");
      this.showLoadingIndicator(false);
    }
    function FCB_scF(error){
       this.OTPFailure("invalid_grant");
      this.showLoadingIndicator(false);
    }
    if(factor == "second"){
      this.view.authentication.secondFactor = "SECURE_CODE";
      this.authenticateSecondFactor(this.view.tbxOTP.text,this.mfa_key,SCB_scS.bind(this),FCB_scS.bind(this));
    }
    if(factor == "first"){
      this.view.authentication.firstFactor = "SECURE_CODE";
      this.authenticateFirstFactor(this.username,this.view.tbxOTP.text,SCB_scF.bind(this),FCB_scF.bind(this));
    }

  }, 
  HWOTPAuth: function(factor){
    this.showLoadingIndicator(true);
    var self = this;
    function SCB_HWS(success){
      this.navigateToAccounts();
      //this.showLoadingIndicator(false);
    }
    function FCB_HWS(error){
      //alert(JSON.stringify(error));
      this.OTPFailure("invalid_grant");
      this.showLoadingIndicator(false);

    }
    function SCB_HWF(success){
      this.mfa_key = success.mfa_meta.auth_id;
      this.contextSwitch("MFA");
      this.showLoadingIndicator(false);
    }
    function FCB_HWF(error){
      //alert(JSON.stringify(error));
      this.OTPFailure("invalid_grant");
      this.showLoadingIndicator(false);
    }
    if(factor == "second"){
      this.view.authentication.secondFactor = "OTP_HWT";
      this.authenticateSecondFactor(this.view.tbxOTP.text,this.mfa_key,SCB_HWS.bind(this),FCB_HWS.bind(this));
    }
    if(factor == "first"){
      this.view.authentication.firstFactor = "OTP_HWT";
      this.authenticateFirstFactor(this.username,this.view.tbxOTP.text,SCB_HWF.bind(this),FCB_HWF.bind(this));
    }

  },
  OTPAuth: function(authType,factor){
    this.showLoadingIndicator(true);
    var self = this;
    function SCB_OTPS(success){
      this.navigateToAccounts();
    }
    function FCB_OTPS(error){
      this.OTPFailure("invalid_grant");
      this.showLoadingIndicator(false);
    }
    function SCB_OTPF(success){
      this.mfa_key = success.mfa_meta.auth_id;
      this.contextSwitch("MFA");
      this.showLoadingIndicator(false);
    }
    function FCB_OTPF(error){
      this.OTPFailure("invalid_grant");
      this.showLoadingIndicator(false);
    }
    if(factor == "second"){
      this.view.authentication.secondFactor = authType;
      this.authenticateSecondFactor(this.view.tbxOTP.text,this.mfa_key,SCB_OTPS.bind(this),FCB_OTPS.bind(this));
    }
    if(factor == "first"){
      this.view.authentication.firstFactor = authType;
      this.authenticateFirstFactor(this.username,this.view.tbxOTP.text,SCB_OTPF.bind(this),FCB_OTPF.bind(this));
    }

  },
  btnContMFA_onClick:function(){
    if(this.MFA == "Approve"){
       this.approveAuth("second");
    }else if(this.MFA == "Password"){
       this.view.lblSigntoAcc.text = "Please enter your Password to Complete the Authentication process";
       this.view.flxUserName.setVisibility(false);
       this.view.flxPassword.top = "10%";
       this.view.flxButtons.top = "10%";
       this.view.flxChoose.setVisibility(false);
       this.view.btnLogin.width="100%";
       this.contextSwitch("Login");
    }else if(this.MFA == "Secure"){
       this.view.btnConfirmOTP.onClick = this.secureCode_onClick;
       this.view.tbxOTP.onDone = this.secureCode_onClick;
       this.contextSwitch("OTP");
    }else if(this.MFA == "HW"){
       this.view.btnConfirmOTP.onClick = this.HW_onClick;
       this.view.tbxOTP.onDone = this.HW_onClick;
       this.contextSwitch("OTP");
    }else if(this.MFA == "OTP_SMS")  {
       this.sendOTP("OTP_SMS");
    }else if(this.MFA == "OTP_EML"){
       this.sendOTP("OTP_EML");
    }
  },
  secureCode_onClick : function(){
      let factor = this.firstFactor == "Secure" ? "first" : "second";
      this.secureCodeAuth(factor);
  },
  HW_onClick : function(){
      let factor = this.firstFactor == "HW" ? "first" : "second";
      this.HWOTPAuth(factor);
  },
  setMFAOption : function(){
    let arr = ["Approve","Secure","SMS","Email","Password","HW"];
    for(let i=0;i<arr.length;i++){
       this.view[`img${arr[i]}`].setVisibility(this.firstFactor !== arr[i]);
       this.view[`img${arr[i]}`].skin = "slImage"
    }
    if(this.firstFactor == "Approve"){
       this.view.imgSecure.skin = "imgFocus";
       this.view.imgMFA.src = "otpimg.png"
       this.MFA = "Secure";
    }else{
       this.view.imgApprove.skin = "imgFocus";
       this.view.imgMFA.src = "approveph1.png";
       this.MFA = "Approve";
    }
    this.view.flxMain.forceLayout();
  },
  sendOTP:function(authType){
     this.otpAuthType = authType;
     this.showLoadingIndicator(true);
     this.view.authentication.sendOTP(authType,this.username);
     this.view.authentication.sendOTPSuccess = 
       success=>{
          this.view.btnConfirmOTP.onClick = this.validateOTP;
          this.view.tbxOTP.onDone = this.validateOTP;
          this.contextSwitch("OTP");
          this.showLoadingIndicator(false);
     };
     this.view.authentication.sendOTPFailure = 
       error=>{
         //alert(JSON.stringify(error));
         this.showLoadingIndicator(false);
     };
  },
  validateOTP:function(){
     this.showLoadingIndicator(true);
     let otpForm = this.otpAuthType == "OTP_EML" ? "Email" : "SMS";
     let factor = this.firstFactor == otpForm ? "first" : "second";
     this.OTPAuth(this.otpAuthType, factor)
  },
   OTPFailure : function(error){
    if(error == "invalid_grant"){
      this.counter--;
      if(this.counter === -1){
        this.contextSwitch("OTPFail");
        return;
      }
      let reverse = 3 - this.counter;
      this.view.imgOTP.setVisibility(false);
      this.view.flxWrongAttemps.setVisibility(true);
      this.view[`lblAttmt${reverse}`].skin = "lblRoundRed";
      this.view.lblErrorOTP.text = `invalid OTP entered You have ${this.counter} attempts before account is blocked`;
      this.view.lblErrorOTP.setVisibility(true);
      reverse++;
      this.view.flxOTP.forceLayout();
      this.view.flxImg.forceLayout();
    }else{
      //alert(JSON.stringify(error));
    }
  },
  btnConfirmOTP_onClick : function(){
    this.counter--;
    if(this.counter === -1){
      //this.contextSwitch("OTPFail");
      return;
    }
    let reverse = 3 - this.counter;
    this.view.imgOTP.setVisibility(false);
    this.view.flxWrongAttemps.setVisibility(true);
    this.view[`lblAttmt${reverse}`].skin = "lblRoundRed";
    this.view.lblErrorOTP.text = `invalid OTP entered \n You have ${this.counter} attempts before account is blocked`;
    this.view.lblErrorOTP.setVisibility(true);
    reverse++;
    this.view.flxImg.forceLayout();
  },
  authenticateFirstFactor: function(username,pwd,S_CB,F_CB) {
    this.view.authentication.firstFactorAuthFailure = F_CB;
    this.view.authentication.firstFactorAuthSuccess =  S_CB;
    this.view.authentication.authenticateFirstFactor(username,pwd);
  },   
  authenticateSecondFactor: function(pwd , mfa_key , S_CB , F_CB) {
   this.view.authentication.secondFactorAuthSuccess = S_CB;
   this.view.authentication.secondFactorAuthFailure = F_CB;
   this.view.authentication.authenticateSecondFactor(pwd, mfa_key);
  },
  navigateToOnboarding:function(){
    //alert("Navigating");
    var frmLogin = new kony.mvc.Navigation("frmOnBoarding");
    frmLogin.navigate("frmOnBoarding");
  },
  navigateToAccounts:function(){
    var frmAccounts = new kony.mvc.Navigation("frmOnSuccesAnthenticate");
    frmAccounts.navigate();
  },
  showLoadingIndicator : function(show){
    this.view.flxLoading.setVisibility(show);
    this.view.forceLayout();
  }
});