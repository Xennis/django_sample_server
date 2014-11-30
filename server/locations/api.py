from tastypie import fields
from tastypie.resources import ModelResource
from tastypie.authorization import DjangoAuthorization
from locations.models import User, Location
from sample_server.authentication import OAuth20Authentication

#from tastypie.exceptions import NotFound
#import json

# import the logging library and get an instance of a logger 
import logging
logger = logging.getLogger(__name__)


class UserResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = 'user'
        fields = ['username', 'first_name', 'last_name', 'last_login']
        allowed_methods = ['get']


class LocationResource(ModelResource):
#   user = fields.ForeignKey(UserResource, 'user')
    class Meta:
        queryset = Location.objects.all()
        resource_name = 'location'
        list_allowed_methods = [ 'get', 'post' ]
#       detail_allowed_methods = [ 'get', 'delete' ]
#       default_format = "application/json"
#       always_return_data = True
#        authorization = DjangoAuthorization()
#        authentication = OAuth20Authentication()

    def obj_create(self, bundle, request=None, **kwargs):
        user = User.objects.get(id=bundle.data['user_id'])
        loc = Location(
            user = user,
            latitude = bundle.data['latitude'],
            longitude = bundle.data['longitude'],
            altitude = bundle.data['altitude'],
        )
        loc.save()
        return loc