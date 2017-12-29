// Copyright (c) 2017, Valiant Systems and contributors
// For license information, please see license.txt

frappe.ui.form.on('Workout Log', {
	refresh: function(frm) {

	}
});


// frappe.ui.form.on("Workout Log", "member", function(frm) {
//     frappe.call({
//     method: "sfit.workout.doctype.workout_log.workout_log.rest",
//     args:   {
//                 member: frm.doc.member,
//                 date: frm.doc.date
//             },
//             callback: function (vicky) {

//               console.log(vicky);

//             }
//   });
// });
