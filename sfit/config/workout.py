from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Workout Master"),
			"items": [
				{
					"type": "doctype",
					"name": "Exercises"
				},
				{
					"type": "doctype",
					"name": "Exercise Group"
				},
				{
					"type": "doctype",
					"name": "Muscles"
				},
				{
					"type": "doctype",
					"name": "Equipments"
				}			
			]
		},
		{
			"label": _("Create Workout Plans"),
			"items": [		
				{
					"type": "doctype",
					"name": "Workout Goals"
				},
				{
					"type": "doctype",
					"name": "Workout Log"
				},											
				{
					"type": "doctype",
					"name": "WorkoutChild"
				},											
				{
					"type": "doctype",
					"name": "Workout Plan"
				}			
			]
		},
	]
