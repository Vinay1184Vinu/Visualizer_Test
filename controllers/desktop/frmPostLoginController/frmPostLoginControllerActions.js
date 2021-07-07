define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for PowerOff **/
    AS_Label_cda21da6d153493c81e6eac76c42c82a: function AS_Label_cda21da6d153493c81e6eac76c42c82a(eventobject, x, y) {
        var self = this;
        this.cancelTimer();
        this.view.loginComponent.logoutOnClick();
        var ntf = new kony.mvc.Navigation("frmOnBoarding");
        ntf.navigate();
    },
    /** init defined for frmPostLogin **/
    AS_Form_ab2c9e7a4d704430a591d691e7df5934: function AS_Form_ab2c9e7a4d704430a591d691e7df5934(eventobject) {
        var self = this;
        return self.init.call(this);
    }
});