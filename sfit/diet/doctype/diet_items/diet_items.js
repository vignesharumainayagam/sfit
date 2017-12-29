// Copyright (c) 2017, Valiant Systems and contributors
// For license information, please see license.txt

frappe.ui.form.on('Diet Items', {
	refresh: function(frm) {

	}
});


frappe.ui.form.on("Diet Items", "onload", function(frm) {
  cur_frm.fields_dict.proteins.$input.on("keypress", function(evt) {
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


frappe.ui.form.on("Diet Items", "onload", function(frm) {
  cur_frm.fields_dict.calories.$input.on("keypress", function(evt) {
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

frappe.ui.form.on("Diet Items", "onload", function(frm) {
  cur_frm.fields_dict.fats.$input.on("keypress", function(evt) {
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

frappe.ui.form.on("Diet Items", "onload", function(frm) {
  cur_frm.fields_dict.carbs.$input.on("keypress", function(evt) {
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
