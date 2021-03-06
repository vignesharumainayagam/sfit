// Copyright (c) 2017, Valiant Systems and contributors
// For license information, please see license.txt

frappe.ui.form.on("Appointments", {
	onload: function(frm) {
		frm.set_query("ref_type", function(txt) {
			return {
				"filters": {
					"issingle": 0,
				}
			};
		});
	},
	refresh: function(frm) {
		if(frm.doc.ref_type && frm.doc.ref_name) {
			frm.add_custom_button(__(frm.doc.ref_name), function() {
				frappe.set_route("Form", frm.doc.ref_type, frm.doc.ref_name);
			});
		}
	},
	repeat_on: function(frm) {
		if(frm.doc.repeat_on==="Every Day") {
			["monday", "tuesday", "wednesday", "thursday",
				"friday", "saturday", "sunday"].map(function(v) {
					frm.set_value(v, 1);
				});
		}
	}
});

