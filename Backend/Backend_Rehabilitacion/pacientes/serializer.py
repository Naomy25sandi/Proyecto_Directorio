from rest_framework import serializers
from .models import Paciente


class PacienteSerializer(serializers.ModelsSerializer):
    class Meta: 
        model = Paciente
        fields = ['usuario', 'fecha_nacimiento', 'genero','historia_clinica']