from rest_framework import serializers # Importa la clase serializers de Django REST Framework
from .models import User #Importamos User
from .models import Blacklist # importamos el Blacklist



# El serializer es una estructura que agrupa los campos de un modelo en un solo objeto para ser facilmente enviadas a la API
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User # se le indica que este serializer esta basado en User
        fields = ['username', 'last_name', 'email', 'password']
        # definimos los campos que ocupamos
        
class BlacklistSerializer(serializers.ModelSerializer):  # Se le indica que este serializer está basado en el modelo Blacklist
    class Meta:
        model = Blacklist
        fields = '__all__'# Incluye todos los campos del modelo Blacklist
        
