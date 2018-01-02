# -*- coding: utf-8 -*-
# Copyright (c) 2017, Valiant Systems and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe import _


class Schedules(Document):
    def on_update(self):
        frappe.db.sql("""UPDATE `tabMembers` SET current_workout_plan = %s WHERE member_name = %s""",(self.workout_plan,self.member))


@frappe.whitelist()
def reset(name):
	frappe.db.sql("""UPDATE `tabMembers` SET current_day = 1 WHERE name = %s""",(name))
	return "Done"
