from rest_framework import serializers
from .models import Centro

class CentroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Centro
        fields = ['id','nombre','descripcion','telefono','estado','precio','imagen']

# El serializer es una estructura que agrupa los campos de un modelo en un solo objeto