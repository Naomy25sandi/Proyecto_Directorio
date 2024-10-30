from django.shortcuts import render
from rest_framework import generics
from .models import Paciente
from .serializer import PacienteSerializer
# Create your views here.

class PacienteListCreate(generics.ListCreateApiView):
    queryset= Paciente.objects.all()
    serializer_class = PacienteSerializer
    
class PacienteDetalle(generics.RetrieveUpdateAPIView):
    queryset= Paciente.objects.all()
    serializer_class = PacienteSerializer