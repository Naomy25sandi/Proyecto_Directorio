from django.shortcuts import render
from rest_framework import generics
from .models import Centro, Tratamientos
from .serializers import CentroSerializer, TratamientoSerializer
from rest_framework.permissions import IsAuthenticated,IsAdminUser


# Se crea la view del Centro, el ListCreateAPIView es una clase que permite hacer un GET y un POST 
class CentroView(generics.ListCreateAPIView): #post-get
    queryset = Centro.objects.all()# queryset es una variable que envía la petición al a bd
    serializer_class = CentroSerializer # serializer_class es la variable que llama al serializador que se creó en el archivo serializers.py
    #permission_classes = [IsAdminUser] # Asi se privatizan las vistas
   
class CentroUpdateView(generics.UpdateAPIView): #
    queryset = Centro.objects.all()
    serializer_class = CentroSerializer
    lookup_field = "id"

class CentroDeleteView(generics.DestroyAPIView):
    queryset = Centro.objects.all()
    serializer_class = CentroSerializer
    lookup_field = "id"

class TratamientosView(generics.ListCreateAPIView):
    queryset = Tratamientos.objects.all()
    serializer_class = TratamientoSerializer


