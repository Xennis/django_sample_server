import time
import json
from django.core.serializers.json import DjangoJSONEncoder
from tastypie.serializers import Serializer

class CustomJSONSerializer(Serializer):
    def to_json(self, data, options=None):
        options = options or {}

        data = self.to_simple(data, options)

        # Add in the current time.

        return json.dumps(data, cls=DjangoJSONEncoder, sort_keys=True)

    def from_json(self, content):
        data = json.loads(content)

        if 'requested_time' in data:
            # Log the request here...
            pass

        return data