# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"module_name": "SFIT",
			"color": "#3498db",
			"icon": "octicon octicon-home",
			"type": "module",
			"label": _("SFIT")
		},
		{
			"module_name": "Workout",
			"color": "#1abc9c",
			"icon": "octicon octicon-pulse",
			"type": "module",
			"label": _("Workout")
		},				
		{
			"module_name": "Diet",
			"color": "#8e44ad",
			"icon": "octicon octicon-law",
			"type": "module",
			"label": _("Diet")
		}		
	]
