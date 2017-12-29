# -*- coding: utf-8 -*-
# Copyright (c) 2017, Valiant Systems and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class WorkoutLog(Document):
	def onload(self):
		if not self.seen:
			self.db_set('seen', 1, update_modified=0)
			frappe.db.commit()


	def on_submit(self):
		member = self.member;
		day = int(self.day) + 1;
		frappe.db.sql("""UPDATE `tabMembers` SET current_day = %s WHERE name = %s""",(day, member))
		return 0;

