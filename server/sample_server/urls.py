from django.conf.urls import patterns, include, url
from django.contrib import admin
from locations.api import UserResource, LocationResource
from tastypie.api import Api

admin.autodiscover()

api = Api(api_name='v1')
api.register(UserResource())
api.register(LocationResource())

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'sample_server.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    # Admin
    url(r'^admin/', include(admin.site.urls)),
    # Tastypie API
    url(r'^api/', include(api.urls)),
    # OAuth2
    url(r'^oauth2/', include('provider.oauth2.urls', namespace = 'oauth2')),
    # Swagger
    url(r'api/doc/', include('tastypie_swagger.urls', namespace = 'tastypie_swagger')),
)
