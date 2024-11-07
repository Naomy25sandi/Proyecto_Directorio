from rest_framework import serializers
from .models import Centro, Tratamientos

class CentroSerializer(serializers.ModelSerializer):# clase para enviar y recibir datos de centros
    class Meta:
        model = Centro
        fields = ['id','nombre','descripcion','distrito','provincia','telefono','estado','precio','imagen']

# El serializer es una estructura que agrupa los campos de un modelo en un solo objeto

class TratamientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tratamientos
        fields = '__all__'