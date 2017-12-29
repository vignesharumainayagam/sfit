// Copyright (c) 2017, Valiant Systems and contributors
// For license information, please see license.txt

frappe.ui.form.on('Breakfast Diet', {
	refresh: function(frm) {

	}
});
 
frappe.ui.form.on("Breakfast Diet", "onload", function(frm) {
  cur_frm.fields_dict.quantity.$input.on("keypress", function(evt) {
      var theEvent = evt || window.event;
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode( key );
      var regex = /[0-9]|\./;
      if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
      }

  });

});