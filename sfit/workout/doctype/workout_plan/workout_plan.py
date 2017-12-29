# -*- coding: utf-8 -*-
# Copyright (c) 2017, Valiant Systems and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe import _
import os, sys, importlib, inspect, json
import unicodedata
import pdb


class WorkoutPlan(Document):
	pass


        


@frappe.whitelist()
def get_child_data(parent, day):
	data = frappe.db.sql("""SELECT * FROM `tabWorkoutChild Child` WHERE table_parent=%s AND table_day=%s""",(parent, day))
	return data




@frappe.whitelist()
def api(parent, child):
	data = frappe.db.sql("""SELECT exercise,groups,sets,reps,timer FROM `tabWorkout Child` WHERE main=%s AND day=%s""",(parent, child))
	array=[]
	for x in xrange(0,len(data)):
		array.append({"Groups": data[x][1], "Exercise": data[x][0], "Sets": data[x][2], "Reps": data[x][3], "seconds": data[x][4]})
	return array



@frappe.whitelist()
def get_child_data_api(parent):
	data = frappe.db.sql("""SELECT day from `tabWorkoutChild Child` where table_parent=%s group by day""",(parent))
	array = []
	for x in xrange(0,len(data)):
		array.append(
			{
			"Days":data[x][0],
			"exercise":api(parent, data[x][0])
			}
			)
	return array


