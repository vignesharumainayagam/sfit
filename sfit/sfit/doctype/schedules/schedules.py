# -*- coding: utf-8 -*-
# Copyright (c) 2017, Valiant Systems and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Schedules(Document):
	pass

@frappe.whitelist()
def reset(name):
	frappe.db.sql("""UPDATE `tabMembers` SET current_day = 1 WHERE name = %s""",(name))
	return "Done"
