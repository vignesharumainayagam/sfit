from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Diet Master"),
			"items": [
				{
					"type": "doctype",
					"name": "Diet"
				},
				{
					"type": "doctype",
					"name": "Diet Items"
				},
				{
					"type": "doctype",
					"name": "Units"
				}
			]
		},
		{
			"label": _("Create Diet Plans"),
			"items": [
				
				{
					"type": "doctype",
					"name": "Diet Plans"
				}
			]
		},
	]
