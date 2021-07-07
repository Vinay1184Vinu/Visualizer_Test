define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchEnd defined for Edit **/
    AS_Label_c2ad9f7986e847c9824ebc811ee59b0b: function AS_Label_c2ad9f7986e847c9824ebc811ee59b0b(eventobject, x, y, context) {
        var self = this;
        return self.onEditTouchEnd.call(this, eventobject);
    },
    /** onTouchEnd defined for imgOk **/
    AS_Image_ca8e1bd2cdd043a1b166b4ec3f068890: function AS_Image_ca8e1bd2cdd043a1b166b4ec3f068890(eventobject, x, y, context) {
        var self = this;
        return self.onEditOkTouchEnd.call(this, eventobject);
    },
    /** onTouchEnd defined for imgCancel **/
    AS_Image_ad6f681115284e759446133933623457: function AS_Image_ad6f681115284e759446133933623457(eventobject, x, y, context) {
        var self = this;
        return self.onCancelTouchEnd.call(this, eventobject);
    },
    /** onClick defined for btnChangeStatus **/
    AS_Button_ed954cf3f048491a94ede533ed1aae64: function AS_Button_ed954cf3f048491a94ede533ed1aae64(eventobject, context) {
        var self = this;
        this.executeOnParent("changeDeviceStatusOnClick", {
            row: eventobject.rowContext.rowIndex,
            section: eventobject.rowContext.sectionIndex
        });
    }
});