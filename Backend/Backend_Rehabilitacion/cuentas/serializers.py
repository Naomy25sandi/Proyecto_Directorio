from rest_framework import serializers
from .models import User
from .models import Blacklist



# El serializer es una estructura que agrupa los campos de un modelo en un solo objeto
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'last_name', 'email', 'password']
        
class BlacklistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blacklist
        fields = '__all__'
        
