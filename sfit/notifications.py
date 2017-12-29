# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
# MIT License. See license.txt

from __future__ import unicode_literals
import frappe

def get_notification_config():
	return {
		"for_doctype": {
		"Appointments": {"seen": 0},
		"Feedback and inputs": {"seen": 0},
		"Workout Log": {"seen": 0},
		},
		"for_other": {

		}
	}