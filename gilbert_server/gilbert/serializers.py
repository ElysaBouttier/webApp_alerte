from .models import Alert
from rest_framework import serializers

class AlertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alert
        fields = ['id', 'status', 'title', 'beginingDate',
                 'endingDate']
