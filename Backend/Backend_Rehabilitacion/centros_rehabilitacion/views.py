from django.shortcuts import render
from rest_framework import generics
from .models import Centro
from .serializers import CentroSerializer

# Create your views here.
class CentroView(generics.ListCreateAPIView):
    queryset = Centro.objects.all()
    serializer_class = CentroSerializer


# Se crea la view del Centro, el ListCreateAPIView es una clase que permite hacer un GET y un POST 

# queryset es una variable que envía la petición al a bd

# serializer_class es la variable que llama al serializador que se creó en el archivo serializers.py