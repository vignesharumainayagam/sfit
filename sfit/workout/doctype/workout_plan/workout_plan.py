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
        data = frappe.get_list('WorkoutChild Child',
                fields=["groups", "exercise", "sets", "reps", "timer_count", "rest_interval"],
                filters = [
                ["table_parent", "=", parent],
                ["table_day", "=", child]
                ]
                )      
        return data

@frappe.whitelist()
def get_child_data_api(parent):
	data = frappe.db.sql("""SELECT table_day from `tabWorkoutChild Child` where table_parent=%s group by table_day""",(parent))
	array = []
	for x in xrange(0,len(data)):
		array.append(
			{
			"Days":data[x][0],
			"exercise":api(parent, data[x][0])
			}
			)
	return array


