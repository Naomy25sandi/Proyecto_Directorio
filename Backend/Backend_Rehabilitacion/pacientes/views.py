from django.shortcuts import render
from rest_framework import generics
from .models import Paciente #importamos la tabla pacientes
from .serializer import PacienteSerializer # convierte los datos a JSOn
# Create your views here.

class PacienteListCreate(generics.ListCreateApiView):
    queryset= Paciente.objects.all() # Definimos el conjunto de objetos que se va a consultar
    serializer_class = PacienteSerializer  # Especifico el serializador a utilizar
    
    
class PacienteDetalle(generics.RetrieveUpdateAPIView):
    queryset= Paciente.objects.all()
    serializer_class = PacienteSerializer