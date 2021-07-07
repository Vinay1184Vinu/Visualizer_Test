define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchEnd defined for Edit **/
    AS_Label_a7453581bbd8440fb7b3eb15d9287a9a: function AS_Label_a7453581bbd8440fb7b3eb15d9287a9a(eventobject, x, y, context) {
        var self = this;
        return self.onEditTouchEnd.call(this, eventobject);
    },
    /** onTouchEnd defined for imgOk **/
    AS_Image_aed1033be59e4401b52395fdf60ae3d0: function AS_Image_aed1033be59e4401b52395fdf60ae3d0(eventobject, x, y, context) {
        var self = this;
        return self.onEditOkTouchEnd.call(this, eventobject);
    },
    /** onTouchEnd defined for imgCancel **/
    AS_Image_f0acb80737ed494c9c720d0eea74c216: function AS_Image_f0acb80737ed494c9c720d0eea74c216(eventobject, x, y, context) {
        var self = this;
        return self.onCancelTouchEnd.call(this, eventobject);
    },
    /** onClick defined for btnChangeStatus **/
    AS_Button_ff8890cdccb844069013b08a490a020a: function AS_Button_ff8890cdccb844069013b08a490a020a(eventobject, context) {
        var self = this;
        this.executeOnParent("changeDeviceStatusOnClick", {
            row: eventobject.rowContext.rowIndex,
            section: eventobject.rowContext.sectionIndex
        });
    }
});