from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [,'username', 'last_name', 'email', 'password']
        
# El serializer es una estructura que agrupa los campos de un modelo en un solo objeto