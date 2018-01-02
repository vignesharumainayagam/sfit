// Copyright (c) 2017, Valiant Systems and contributors
// For license information, please see license.txt

frappe.ui.form.on('Schedules', {
	refresh: function(frm) {

	}
});

frappe.ui.form.on("Schedules", "reset_current_day", function(frm) {
	frappe.call({
	method: "sfit.sfit.doctype.schedules.schedules.reset",
	args: {
            name: frm.doc.member
                    },
	callback: function (r) 
	{
		alert(r.message)
	}
            })
})




