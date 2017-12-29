from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Admin"),
			"items": [
				{
					"type": "doctype",
					"name": "Feedback and inputs"
				},
				{
					"type": "doctype",
					"name": "Gym Packages"
				},
				{
					"type": "doctype",
					"name": "Items"
				},
				{
					"type": "doctype",
					"name": "Appointments"
				},
				{
					"type": "doctype",
					"name": "Member Attendance Tool"
				}
			]
		},
		{
			"label": _("Member & Trainers"),
			"items": [
				
				{
					"type": "doctype",
					"name": "Measurement charts and Progression"
				},
				{
					"type": "doctype",
					"name": "Members"
				},
				{
					"type": "doctype",
					"name": "Schedules"
				},
				{
					"type": "doctype",
					"name": "Trainers"
				}
			]
		},
	]
