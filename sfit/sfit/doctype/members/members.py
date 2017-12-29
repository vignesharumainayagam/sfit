# -*- coding: utf-8 -*-
# Copyright (c) 2017, Valiant Systems and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document


class Members(Document):
	pass

@frappe.whitelist()
def get_current_workout_plan(parent):
	data = frappe.db.sql("""select workout_plans from `tabWorkout Schedules` where parent=%s and current_plan=1""",(parent))
	return data


@frappe.whitelist()
def January(parent):
        vicky = frappe.get_list('Schedules',
                fields=["workout_plan"],
                filters = [
                ["member", "=", parent]
                ]
                )
        return vicky