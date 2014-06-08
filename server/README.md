# Django sample server

## Django REST/JSON server with OAuth2

### Used software

For details see [requirements.txt](requirements.txt)!

* [Django](http://www.djangoproject.com/) (v.1.6)
    * [Tastypie](http://django-tastypie.readthedocs.org/) REST API (`django-tastypie`)
    * [OAuth2](http://django-oauth2-provider.readthedocs.org) (`django-oauth2-provider`)
    * [Tastypie Swagger](https://github.com/minism/django-tastypie-swagger) (`django-tastypie-swagger`)

Used files

* [OAuth 2.0 authentication model for Tastypie](http://github.com/ianalexander/django-oauth2-tastypie) by [Ian Alexander](http://github.com/ianalexander) (`sample_server/authentication.py`)
* [Django middleware for cross-domain XHR](http://gist.github.com/strogonoff/1369619) by [strogonoff](https://github.com/strogonoff) (`sample_server/django-crossdomainxhr-middleware.py`)

### Run

1. Run server `python manage.py runserver`

    Admin site: [http://localhost:8000/admin/](http://localhost:8000/admin/)

    API: [http://localhost:8000/api/v1/](http://localhost:8000/api/v1/)

    API documenation: [http://localhost:8000/api/doc/](http://localhost:8000/api/doc/)

2. Create sample data

3. Run one of the [clients](../client/)


## Notes

### OAuth2 - Get access token

Create client

```
python manage.py shell
```

```python
 >>> from provider.oauth2.models import Client
 >>> from django.contrib.auth.models import User
 >>> u = User.objects.get(id=1)
 >>> c = Client(user=u, name="mysite client", client_type=1, url="http://exampple.com")
 >>> c.save()
 >>> c.client_id
'd63f53a7a6cceba04db5'
 >>> c.client_secret
'afe899288b9ac4127d57f2f12ac5a49d839364dc' 
```

Get access token

```
curl -d "client_id=CLIENT-ID&client_secret=CLIENT-SECRET&grant_type=password&username=USERNAME&password=PASSWORD&scope=write" http://localhost:8000/oauth2/access_token
```