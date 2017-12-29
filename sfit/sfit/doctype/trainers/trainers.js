// Copyright (c) 2017, Valiant Systems and contributors
// For license information, please see license.txt

frappe.ui.form.on('Trainers', {
	refresh: function(frm) {

	}
});

frappe.ui.form.on("Trainers", "onload", function(frm) {
  cur_frm.fields_dict.mobile_number.$input.on("keypress", function(evt) {
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

// frappe.ui.form.on("Trainers", "validate", function(frm) {
//         frappe.throw(__(doc.__islocal));

// });

frappe.ui.form.on("Trainers", "mobile_number", function(frm) {
    if (frm.doc.mobile_number.length != 10 ) {
        frappe.throw(__("Mobile number must be exactly 10 digits"));
        validated = false;
    }
});
frappe.ui.form.on("Trainers", "validate", function(frm) {
    if (frm.doc.mobile_number.length != 10 ) {
        frappe.throw(__("Mobile number must be exactly 10 digits"));
        validated = false;
    }
});


frappe.ui.form.on("Trainers", "give_permission_to_trainer", function(frm) {
if (!frm.doc.__islocal) {
	  $.ajax({
	  url : window.location.origin+"/api/resource/User Permission",
	  dataType: 'text',
	  type: 'POST',
	  contentType: 'application/json',
	  data : JSON.stringify( {
	  "user" : frm.doc.linked_userid,
	  "allow" : "Trainers",
	  "for_value" : frm.doc.name
	  }
	  ),
	  beforeSend: function(xhr){
	  xhr.setRequestHeader(
	  'X-Frappe-CSRF-Token', frappe.csrf_token
	  );
	  },success: function(data){
	  console.log(data);
	  frappe.msgprint(__("Done!"));  
	  }, error: function(error){
	  console.log(error);
	  }
	  });
	}
	else
	{
		frappe.throw(__("Save the Document first"));
	}
});


frappe.ui.form.on("Trainers", "onload", function(frm) {
	if (!frm.doc.__islocal){
		          frappe.call({
          method: "sfit.sfit.doctype.trainers.trainers.get_members",
          args:   {
                      trainer: frm.doc.trainer_name
                  },
                  callback: function (r) {
                      console.log(r.message)
                      for(var i=0; i<parseInt(r.message.length); i++)
                      {
                        if (r.message[i][44] == "Personal training."){
                          var training_type = 1
                        }
                        else {
                          var training_type = 0
                        }
                        frappe.model.add_child(cur_frm.doc, "Trainers Students", "trainer_students");  
                        $.each(frm.doc.trainer_students || [], function(i, v) {
                          frappe.model.set_value(v.doctype, v.name, "students", r.message[i][0])
                          frappe.model.set_value(v.doctype, v.name, "personal_training", training_type)                   
                        })
                        frm.refresh_field("trainer_students");
                      }
                  }
        });
	}

    });