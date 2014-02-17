import django
from django.db import models
#from tastypie.models import create_api_key

class User(django.contrib.auth.models.User):
	date_of_birth = models.DateField()
	language = models.CharField(max_length=2)

class Location(models.Model):
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)
	user = models.ForeignKey(User)
	latitude = models.FloatField()
	longitude = models.FloatField()
	altitude = models.FloatField()

	def __unicode__(self):
		return "{}, {}: {}".format(self.latitude, self.longitude, self.altitude)

#models.signals.post_save.connect(create_api_key, sender=User)