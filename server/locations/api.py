#Django imports
from django.conf.urls import url

from tastypie import fields
from tastypie.resources import ModelResource
from tastypie.authorization import DjangoAuthorization
from locations.models import User, Location
from sample_server.authentication import OAuth20Authentication
from sample_server.CustomJSONSerializer import CustomJSONSerializer

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
        #authorization = DjangoAuthorization()
        #authentication = OAuth20Authentication()
        serializer = CustomJSONSerializer()

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

"""
    def alter_list_data_to_serialize(self,request,data_dict): 
        if isinstance(data_dict,dict): 
            if 'meta' in data_dict: 
                del(data_dict['meta']) 
                return data_dict         
"""
"""
    def prepend_urls(self):
        return [
            url(r"^(?P<resource_name>{})/(?P<min_altitude>([\+-]?\d+\.\d+))/$".format(self._meta.resource_name), self.wrap_view('get_location'), name="api_get_location"),
        ]

    def dispatch_list(self, request, **kwargs):
        #body_filters = parse_xml_get_data(request) # <- MAGIC: returns a dict()
        #kwargs.update(body_filters)
        return super(MyResource, self).dispatch_list(request, **kwargs)

    def get_location(self, request, min_altitude, **kwargs):
        min_altitude = float(min_altitude)
        logger.debug('Debug llllllllllllllllllllllllllllll')
#        return self.dispatch_list(request, latitude=latitude, longitude=longitude, windowRadius=windowRadius, **kwargs)

        return self.dispatch_list(request, **kwargs)
"""
