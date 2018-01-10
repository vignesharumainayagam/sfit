// Copyright (c) 2017, Valiant Systems and contributors
// For license information, please see license.txt

frappe.ui.form.on('WorkoutChild', {
	refresh: function(frm) {
		frappe.breadcrumbs.add("Workout");
	}
});


frappe.ui.form.on("WorkoutChild", "validate", function(frm){
frm.set_value('forname', frm.doc.parent1+frm.doc.day);
});


frappe.ui.form.on("WorkoutChild Child", "group", function(frm, cdt, cdn){
d = locals[cdt][cdn]
frappe.model.set_value(cdt, cdn, "table_parent", frm.doc.parent1);
frappe.model.set_value(cdt, cdn, "table_day", frm.doc.day);
});

frappe.ui.form.on("WorkoutChild Child", "exercise", function(frm, cdt, cdn){
d = locals[cdt][cdn]
frappe.model.set_value(cdt, cdn, "table_parent", frm.doc.parent1);
frappe.model.set_value(cdt, cdn, "table_day", frm.doc.day);
});







