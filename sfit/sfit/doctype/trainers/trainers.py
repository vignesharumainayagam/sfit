# -*- coding: utf-8 -*-
# Copyright (c) 2017, Valiant Systems and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Trainers(Document):
	pass

@frappe.whitelist()
def get_members(trainer):
        vicky = frappe.db.sql("""SELECT * from `tabMembers` where trainer =%s """, (trainer))
        n = len(vicky)        
        return vicky
        frappe.msgprint(_(vicky));
