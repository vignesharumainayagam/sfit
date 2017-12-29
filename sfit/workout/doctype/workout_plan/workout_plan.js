// // Copyright (c) 2017, Valiant Systems and contributors
// // For license information, please see license.txt

// var arr=[];
// function get_exercises(){
// frappe.call({
// method: "sfit.workout.doctype.workout_plan.workout_plan.get_exercises",
// callback: function (r) 
// {
// for(var i=0; i<r.message.length; i++)
//     { 
//     $("#exercise2").append(new Option(r.message[i][0], r.message[i][0]));
    
//     };
//  }
//             })
// }

// function get_groups(){
// frappe.call({
// method: "sfit.workout.doctype.workout_plan.workout_plan.get_groups",
// callback: function (r) 
// {
// for(var i=0; i<r.message.length; i++)
//     { 
//     $("#group2").append(new Option(r.message[i][0], r.message[i][0]));
//     };
// }
//             })
// }

// function get_sets(){
//     for (var s=1; s<11; s++) 
//     {
//     $("#sets2").append(new Option(s, s));    
//     }  

// }

// function get_reps(){

// for (var r=1; r<21; r++) 
//     {
//     $("#reps2").append(new Option(r, r));
//     }   
// }
// var d;

// function get_all(r, i){
// // get_groups();
// // get_exercises();
// // get_sets();
// // get_reps();

//       $(".group2").eq(i).val(r.message[i][1]).prop('selected', true);
//       $(".exercise2").eq(i).val(r.message[i][3]).prop('selected', true);
//       $(".sets2").eq(i).val(r.message[i][4]).prop('selected', true);
//       $(".reps2").eq(i).val(r.message[i][5]).prop('selected', true); 
//       $(".time2").eq(i).val(r.message[i][6]);
// }



// frappe.ui.form.on("Workout Day", "form_render", function(frm, cdt, cdn){
// d = locals[cdt][cdn]
// $(frm.fields_dict[d.parentfield].grid.grid_rows_by_docname[cdn].grid_form.fields_dict['html_field'].wrapper)
// .html(frappe.render_template("plan"))
// get_groups();
// get_exercises();
// get_sets();
// get_reps();

// var $TABLE = $('#table');
// var $BTN = $('#export-btn');
// var $EXPORT = $('#export');
//       //   frappe.call({
//       //   method: "sfit.workout.doctype.workout_plan.workout_plan.get_child_data",
//       //   args: {
//       //       parent: frm.doc.name,
//       //       day: d.day
//       //               },
//       //   callback: function (r) {
//       //       if(r.message){
//       //           console.log(r.message)
//       //           for(var i=0; i<r.message.length; i++){

//       // var $abd = $('.frappe-control');
//       // var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line');
//       // $abd.find('table').append($clone);
//       // get_all(r, i);

//       //           }
//       //       }
//       //       else{
//       //           console.log("Vicky")
//       //       }

//       //   }
//       //   }) 
   

//     $('.table-add').click(function add_row() {
//       var $abd = $('.frappe-control');
//       var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line');
//       $abd.find('table').append($clone);
//     });


//     $('.table-remove').click(function () {
//       $(this).parents('tr').detach();
//     });

// });



// frappe.ui.form.on("Workout Day", "button_3", function(frm, cdt, cdn){
//         $("#table1").find('tr').each(function (i, el) {
//         var $tds = $(this).find('td'),
//         groupobj = $tds.eq(0).find(".group2 :selected").text(),
//         exerciseobj = $tds.eq(1).find(".exercise2 :selected").text(),
//         setsobj = $tds.eq(2).find(".sets2 :selected").text(),
//         repsobj = $tds.eq(3).find(".reps2 :selected").text();
//         timeobj = $tds.eq(4).find(".time2").val();
//         arr.push({group:groupobj, exercise:exerciseobj, sets:setsobj, reps:repsobj, time:timeobj})
//         });
//         arr.shift();  
//         arr.pop();
//         console.log(arr);
//         frappe.call({
//         method: "sfit.workout.doctype.workout_plan.workout_plan.save",
//         args: {
//             parent: frm.doc.name,
//             day: d.day,
//             data: JSON.stringify(arr)
//                     },
//         callback: function (r) {
//             location.reload();
//         }
//         })   
// });


// frappe.ui.form.on("Workout Day", "form_render", function(frm, cdt, cdn){
// d = locals[cdt][cdn]
// var $TABLE = $('#table');
// var $BTN = $('#export-btn');
// var $EXPORT = $('#export');
//         frappe.call({
//         method: "sfit.workout.doctype.workout_plan.workout_plan.get_child_data",
//         args: {
//             parent: frm.doc.name,
//             day: d.day
//                     },
//         callback: function (r) {
//             if(r.message){
//                 console.log(r.message)
//                 for(var i=0; i<r.message.length; i++){

//       var $abd = $('.frappe-control');
//       var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line');
//       $abd.find('table').append($clone);
//       get_all(r, i);

//                 }
//             }
//             else{
//                 console.log("Vicky")
//             }

//         }
//         }) 
   

// });



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

