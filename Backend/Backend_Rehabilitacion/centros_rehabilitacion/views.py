from django.shortcuts import render
from rest_framework import generics
from .models import Centro
from .serializers import CentroSerializer

# Create your views here.
# Se crea la view del Centro, el ListCreateAPIView es una clase que permite hacer un GET y un POST 
class CentroView(generics.ListCreateAPIView): #post-get
    queryset = Centro.objects.all()# queryset es una variable que envía la petición al a bd
    serializer_class = CentroSerializer # serializer_class es la variable que llama al serializador que se creó en el archivo serializers.py

class CentroUpdateView(generics.UpdateAPIView): #
    queryset = Centro.objects.all()
    serializer_class = CentroSerializer
    lookup_field = "id"

class CentroDeleteView(generics.DestroyAPIView):
    queryset = Centro.objects.all()
    serializer_class = CentroSerializer
    lookup_field = "id"



