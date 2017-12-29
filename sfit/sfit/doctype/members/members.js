// Copyright (c) 2017, Valiant Systems and contributors
// For license information, please see license.txt

frappe.ui.form.on('Members', {
	refresh: function(frm) {

		
	}
});

frappe.ui.form.on("Members", "validate", function(frm) {
    if (frm.doc.mobile_no.length != 10 ) {
        frappe.msgprint(__("Mobile number must be exactly 10 digits"));
        validated = false;
    }
});


frappe.ui.form.on("Members", "onload", function(frm) {
frappe.call({
method: "sfit.sfit.doctype.members.members.January",
args: {
    parent: frm.doc.name,

       },
callback: function (r) 
{
console.log(r.message)
cur_frm.set_value("current_workout_plan", r.message[0].workout_plan);
}
})
});


frappe.ui.form.on("Members", "onload", function(frm) {
// $(frm.fields_dict['html_field'].wrapper).html("<h1>Hello</h1>");
$(frm.fields_dict['current_workout_plan_html'].wrapper)
.html(frappe.render_template("dashboard_tile"));
$(document).ready(function(){
$("#current_plan").append(frm.doc.current_workout_plan)
});
});


frappe.ui.form.on("Members", "onload", function(frm) {
// $(frm.fields_dict['html_field'].wrapper).html("<h1>Hello</h1>");
$(frm.fields_dict['current_day_html'].wrapper)
.html(frappe.render_template("dashboard_current_day"));
$(document).ready(function(){
$("#current_day").append(frm.doc.current_day)
});
});



frappe.ui.form.on("Members", "onload", function(frm) {
$(frm.fields_dict['menu_bar'].wrapper)
.html(frappe.render_template("button"));

$( "#add_sch" ).click(function() {
frappe.set_route("Form", "Schedules", frm.doc.name);

});

$( "#mesurement" ).click(function() {
frappe.set_route("List", "Measurement charts and Progression", {"member_name": frm.doc.name});
});

$( "#workout_plan" ).click(function() {
  // window.location.href = "https://www.example.com";
  frappe.set_route("List", "Workout Plan");
});

$( "#diet_plans" ).click(function() {
  // window.location.href = "https://www.example.com";
  frappe.set_route("List", "Diet Plans");
});



});
