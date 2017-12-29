function multiply_quantity(frm, cdt, cdn) {
var d = locals[cdt][cdn];
var total = 0;
frappe.model.set_value(cdt, cdn, "calories", d.quantity * d.read_calories);
frappe.model.set_value(cdt, cdn, "fats", d.quantity * d.read_fats);
frappe.model.set_value(cdt, cdn, "carbs", d.quantity * d.read_carbs);
frappe.model.set_value(cdt, cdn, "proteins", d.quantity * d.read_proteins);
}

function add_nutri(frm, cdt, cdn) {
cur_frm.set_value("total_calories", (parseFloat(frm.doc.breakfast_calories) + parseFloat(frm.doc.brunch_calories) + parseFloat(frm.doc.elevenses_calories) + parseFloat(frm.doc.lunch_calories) + parseFloat(frm.doc.snack_calories) + parseFloat(frm.doc.supper_calories) + parseFloat(frm.doc.dinner_calories)));
cur_frm.set_value("total_fats",  (parseFloat(frm.doc.breakfast_fats) + parseFloat(frm.doc.brunch_fats) + parseFloat(frm.doc.elevenses_fats) + parseFloat(frm.doc.lunch_fats) + parseFloat(frm.doc.snack_fats) + parseFloat(frm.doc.supper_fats) + parseFloat(frm.doc.dinner_fats)));
cur_frm.set_value("total_carbs",  (parseFloat(frm.doc.breakfast_carbs) + parseFloat(frm.doc.brunch_carbs) + parseFloat(frm.doc.elevenses_carbs) + parseFloat(frm.doc.lunch_carbs) + parseFloat(frm.doc.snack_carbs) + parseFloat(frm.doc.supper_carbs) + parseFloat(frm.doc.dinner_carbs)));
cur_frm.set_value("total_proteins",  (parseFloat(frm.doc.breakfast_proteins) + parseFloat(frm.doc.brunch_proteins) + parseFloat(frm.doc.elevenses_proteins) + parseFloat(frm.doc.lunch_proteins) + parseFloat(frm.doc.snack_proteins) + parseFloat(frm.doc.supper_proteins) + parseFloat(frm.doc.dinner_proteins)));
}

frappe.ui.form.on("Breakfast Diet", "quantity", multiply_quantity);   
		
frappe.ui.form.on("Brunch Diet", "quantity", multiply_quantity); 

frappe.ui.form.on("Elevenses Diet", "quantity", multiply_quantity); 

frappe.ui.form.on("Lunch Diet", "quantity", multiply_quantity); 

frappe.ui.form.on("Snack Diet", "quantity", multiply_quantity); 

frappe.ui.form.on("Supper Diet", "quantity", multiply_quantity); 

frappe.ui.form.on("Dinner Diet", "quantity", multiply_quantity); 

// For calculating total nutrients 

frappe.ui.form.on("Diet Plans", {
  breakfast_calories: add_nutri,
  elevenses_calories: add_nutri,
  brunch_calories: add_nutri,
  lunch_calories: add_nutri,
  snack_calories: add_nutri,
  supper_calories: add_nutri,
  dinner_calories: add_nutri,
});

frappe.ui.form.on("Diet Plans", {
  breakfast_fats: add_nutri,
  elevenses_fats: add_nutri,
  brunch_fats: add_nutri,
  lunch_fats: add_nutri,
  snack_fats: add_nutri,
  supper_fats: add_nutri,
  dinner_fats: add_nutri,
});

frappe.ui.form.on("Diet Plans", {
  breakfast_carbs: add_nutri,
  elevenses_carbs: add_nutri,
  brunch_carbs: add_nutri,
  lunch_carbs: add_nutri,
  snack_carbs: add_nutri,
  supper_carbs: add_nutri,
  dinner_carbs: add_nutri,
});

frappe.ui.form.on("Diet Plans", {
  breakfast_proteins: add_nutri,
  elevenses_proteins: add_nutri,
  brunch_proteins: add_nutri,
  lunch_proteins: add_nutri,
  snack_proteins: add_nutri,
  supper_proteins: add_nutri,
  dinner_proteins: add_nutri,
});

function cal_table(frm, cdt, cdn) {
  var material_details = child;
  var total = 0, total1 = 0, total2 = 0, total3 = 0;
  for(var i in material_details) {
  total = total + material_details[i].calories
  total1 = total1 + material_details[i].fats
  total2 = total2 + material_details[i].proteins
  total3 = total3 + material_details[i].carbs    
  }
  frm.set_value(field+"_calories",total)
  frm.set_value(field+"_fats",total1)
  frm.set_value(field+"_proteins",total2)
  frm.set_value(field+"_carbs",total3)
}

frappe.ui.form.on("Diet Plans", "breakfast_button", function(frm, cdt, cdn) {
cal_table(frm, cdt, cdn, child = frm.doc.breakfast_diet, field = "breakfast")
});

frappe.ui.form.on("Diet Plans", "brunch_button", function(frm, cdt, cdn) {
cal_table(frm, cdt, cdn, child = frm.doc.brunch_diet, field = "brunch")
});

frappe.ui.form.on("Diet Plans", "elevenses_button", function(frm, cdt, cdn) {
cal_table(frm, cdt, cdn, child = frm.doc.elevenses_diet, field = "elevenses")
});

frappe.ui.form.on("Diet Plans", "lunch_button", function(frm, cdt, cdn) {
cal_table(frm, cdt, cdn, child = frm.doc.lunch_diet, field = "lunch")
});

frappe.ui.form.on("Diet Plans", "snack_button", function(frm, cdt, cdn) {
cal_table(frm, cdt, cdn, child = frm.doc.snack_diet, field = "snack")
});

frappe.ui.form.on("Diet Plans", "supper_button", function(frm, cdt, cdn) {
cal_table(frm, cdt, cdn, child = frm.doc.supper_diet, field = "supper")
});

frappe.ui.form.on("Diet Plans", "dinner_button", function (frm, cdt, cdn) {
cal_table(frm, cdt, cdn, child = frm.doc.dinner_diet, field = "dinner")
});




