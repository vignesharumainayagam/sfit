// // Copyright (c) 2017, Valiant Systems and contributors
// // For license information, please see license.txt


frappe.ui.form.on("Workout Day", "edit", function(frm, cdt, cdn){
d = locals[cdt][cdn]
frappe.set_route("Form", "WorkoutChild", frm.doc.plan_name+d.day);
});

frappe.ui.form.on("Workout Plan", "no_of_days", function(frm){
var to_length = frm.doc.no_of_days;
if(!frm.doc.__islocal)
{
    if(frm.doc.table_27){
    var r = parseInt(frm.doc.no_of_days)+1;    
    for(var e=frm.doc.table_27.length; e<r; e++)
    {
        frappe.model.add_child(cur_frm.doc, "Workout Day", "table_27");  
        $.each(frm.doc.table_27 || [], function(e, v) {
        frappe.model.set_value(v.doctype, v.name, "day", "Day "+e)
        })
        frm.refresh_field("table_27");

    }
    cur_frm.get_field("table_27").grid.grid_rows[0].remove()
}
else {
    var r = parseInt(frm.doc.no_of_days)+1;    
    for(var e=1; e<r; e++)
    {
        frappe.model.add_child(cur_frm.doc, "Workout Day", "table_27");  
        $.each(frm.doc.table_27 || [], function(e, v) {
        frappe.model.set_value(v.doctype, v.name, "day", "Day "+e)
        })
        frm.refresh_field("table_27");

    }
    cur_frm.get_field("table_27").grid.grid_rows[0].remove()
}
}
else{
    var r = parseInt(frm.doc.no_of_days)+2;    
    for(var e=1; e<r; e++)
    {
        frappe.model.add_child(cur_frm.doc, "Workout Day", "table_27");  
        $.each(frm.doc.table_27 || [], function(e, v) {
        frappe.model.set_value(v.doctype, v.name, "day", "Day "+e)
        })
        frm.refresh_field("table_27");

    }
    cur_frm.get_field("table_27").grid.grid_rows[0].remove()
}
cur_frm.save()
});

 
frappe.ui.form.on("Workout Day", "form_render", function(frm, cdt, cdn){
d = locals[cdt][cdn]
        frappe.call({
        method: "sfit.workout.doctype.workout_plan.workout_plan.get_child_data",
        args: {
            parent: frm.doc.name,
            day: d.day
                    },
        callback: function (r) {
            console.log(r.message)
            if(r.message){
            wrapper = $(frm.fields_dict[d.parentfield].grid.grid_rows_by_docname[cdn].grid_form.fields_dict['html_field'].wrapper)    
            var contacts_area = '<table><tr><th>Group</th><th>Exercise</th><th>Sets</th><th>Reps</th><th>Timer</th><th>Rest Interval</th></tr>\
            <style>table {font-family: arial, sans-serif;border-collapse: collapse;width: 100%;}td,\
            th {border: 1px solid #dddddd;text-align: left;padding: 8px;}tr:nth-child(even) {background-color: #dddddd;}</style>';
            for(var i=0; i<r.message.length; i++){
            contacts_area+="<tr><td>"+r.message[i][10]+"</td><td>"+r.message[i][15]+"</td><td>"+r.message[i][14]+"</td><td>"+r.message[i][11]+"</td><td>"+r.message[i][13]+"</td><td>"+r.message[i][12]+"</td></tr>";                    
            }
            contacts_area+="</table>";
            $(".frappe-control[data-fieldname=html_field]").html(contacts_area);
            }
            else{
            console.log("hi")  
            }

        }
        })

});


frappe.ui.form.on("Workout Plan", "no_of_days", function(frm){
alert("Please Save to Continue")
cur_frm.save()
});




frappe.ui.form.on("Workout Plan", "validate", function(frm){
console.log(frm.doc.table_27)
if(frm.doc.table_27)
{
    for (var i=0; i<frm.doc.table_27.length; i++) 
    {
          $.ajax({
          url : location.origin+"/api/resource/WorkoutChild",
          dataType: 'text',
          type: 'POST',
          contentType: 'application/json',
          data : JSON.stringify( {
          "parent1" : frm.doc.name,
          "day" : frm.doc.table_27[i].day,
          "forname" : frm.doc.name+frm.doc.table_27[i].day,
          }
          ),
          beforeSend: function(xhr){
          xhr.setRequestHeader(
          'X-Frappe-CSRF-Token', frappe.csrf_token
          );
          },success: function(data){
          console.log(data);
          }, error: function(error){
          console.log(error);
          }
          });
    }
}

       });


