define({ 
  contexts : ["DashBoard","Transfer","Settings"],
  init : function(){
     this.view.preShow = this.preShow;
     this.view.btnNavDashBoard.onClick = this.btnNavDashBoard_onClick;
     this.view.btnNavTransfer.onClick = this.btnNavTransfer_onClick;
     this.view.btnNavSettings.onClick = this.btnNavSettings_onClick;
     this.view.transactionSigning.showLoading = this.showLoading;
     this.view.transactionSigning.dismissLoading = this.dismissLoading;
     this.view.userManagement.showLoading = this.showLoading;
     this.view.userManagement.dismissLoading = this.dismissLoading;
     this.view.transactionSigning.onTSSuccess = this.onTSSuccess;
     this.view.btnReset.onClick = this.resetUser;
     this.view.btnModeApprove.onClick = source => this.changeTSMode("Approve");
     this.view.btnModeChallenge.onClick = source => this.changeTSMode("Challenge");
     this.view.btnModeOffline.onClick = source => this.changeTSMode("Offline");
  },
  username : "",
  userId : "",
  gblTimer : null,
  onNavigate : function(intent){
      this.view.transactionSigning.username = intent.username;
      this.username = intent.username;
      this.view.lblName.text = this.username;
  },
  startTimer:function(){
     let timer = setTimeout(this.sessionExpired,300000);
     this.gblTimer = timer;
  },
  resetTimer : function(){
      if(this.gblTimer){
          clearTimeout(this.gblTimer);
      }
      this.startTimer();
  },
  cancelTimer : function(){
     if(this.gblTimer){
         clearTimeout(this.gblTimer);
         this.gblTimer = null;
     }
  },
  sessionExpired : function(){
    alert("Session Expired! Please Login again");
    this.view.loginComponent.logoutOnClick();
    var ntf = new kony.mvc.Navigation("frmOnBoarding");
    ntf.navigate();
  },
  preShow : function(){
     this.contextSwitch("DashBoard");
     this.view.flxTSSuccess.setVisibility(false);
     this.resetTimer();
     this.view.transactionSigning.changeTSMode("Approve");
     this.switchButtons("Approve");
  },
  btnNavDashBoard_onClick : function(){
     this.resetTimer();
     this.contextSwitch("DashBoard");
  },
  btnNavTransfer_onClick : function(){
     this.resetTimer();
     //this.view.transactionSigning.resetUIFieldsPublic();
     this.contextSwitch("Transfer");
     this.view.transactionSigning.changeTSMode("Approve");
     this.switchButtons("Approve");
  },
  btnNavSettings_onClick : function(){
     //this.resetTimer();
     this.view.userManagement.Username = this.username;
     this.view.userManagement.loadUserManagement();
     this.contextSwitch("Settings");
  },
  showLoading : function(){
     this.resetTimer();
     this.view.flxLoading.setVisibility(true);
     this.view.forceLayout();
  }, 
  dismissLoading : function(){
     this.resetTimer();
     this.view.flxLoading.setVisibility(false);
     this.view.forceLayout();
  },
  onTSSuccess : function(){
//       this.view.flxTSSuccess.setVisibility(true);
//       this.view.imgSuccess.setVisibility(true);
//       setTimeout(()=>{
//          this.view.flxTSSuccess.setVisibility(false);
//          this.view.imgSuccess.setVisibility(false);
//          this.contextSwitch("DashBoard");
//       },3000);
  },
  resetUser: function(){
   alert("Account is being reset, Onbaord the user again");
    if(this.username === ""){
      alert("failure");
      return;
    }
    var serviceName = "ResetUserOrch";
    var operationName = "reset";
    var client = kony.sdk.getCurrentInstance();
    var integrationSvc = KNYMobileFabric.getIntegrationService(serviceName);
    var params = {
        "username": this.username,
        "userId" : this.userId
    };
    integrationSvc.invokeOperation(operationName, {}, params, success => {
      var frmAccounts = new kony.mvc.Navigation("frmOnBoarding");
      frmAccounts.navigate();
    }, error => {
      alert("failure");
      if(error.opstatus_CreateUser == 0 && error.opstatus_AddActivationCodeAuthenticator == 0){
        
      }
    });
  },
  contextSwitch: function(context) {
      for (let i of this.contexts) {
        this.view[`flx${i}`].setVisibility(i === context);
        this.view[`btnNav${i}`].setEnabled(i !== context);
      }
      this.view.forceLayout();
  },
  switchButtons : function(button){
    let buttons = ["Approve","Offline","Challenge"];
    for(let i of buttons){
      this.view[`btnMode${i}`].setVisibility(i!==button);
    }
  },
  changeTSMode : function(mode){
    this.resetTimer();
    this.switchButtons(mode);
    this.view.transactionSigning.changeTSMode(mode);
  }
 });