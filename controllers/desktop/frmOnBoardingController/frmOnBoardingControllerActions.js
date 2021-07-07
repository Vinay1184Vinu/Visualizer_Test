define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onSuccessCallback defined for loginComponent **/
    AS_UWI_i382330ac1fb4f00beab0800a7102109: function AS_UWI_i382330ac1fb4f00beab0800a7102109(userprofileJSON) {
        var self = this;
        return self.onLogin.call(this);
    },
    /** onFailureCallback defined for loginComponent **/
    AS_UWI_fb246ac10a9a42d081168c3c74c73a59: function AS_UWI_fb246ac10a9a42d081168c3c74c73a59() {
        var self = this;
        alert("Login Failed");
    },
    /** init defined for frmOnBoarding **/
    AS_Form_b106db361d7a4cd58ee94ae70e695dd3: function AS_Form_b106db361d7a4cd58ee94ae70e695dd3(eventobject) {
        var self = this;
        return self.init.call(this);
    }
});