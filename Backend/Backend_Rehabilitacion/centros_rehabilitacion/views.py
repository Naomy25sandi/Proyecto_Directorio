from django.shortcuts import render
from rest_framework import generics
from django.db.models import Q  #importe Q para realizar búsquedas complejas
from .models import Centro, Tratamientos
from .serializers import CentroSerializer, TratamientoSerializer
#from rest_framework.permissions import IsAuthenticated, IsAdminUser


# creamos la clase centroView hereda listcreate Apiview
class CentroView(generics.ListCreateAPIView):
    queryset = Centro.objects.all() #conjunto de datos que la vista manejará
    serializer_class = CentroSerializer # convertit objetos a JSON
    #permission_classes = [IsAuthenticated, IsAdminUser] 
  #GET: Recupera todos los centros en formato JSON.
#POST: Permite crear nuevos centros enviando los datos requeridos en el cuerpo de la solicitud.


class CentroUpdateView(generics.UpdateAPIView):# manejar las actualizaciones de un solo objeto.
    queryset = Centro.objects.all()
    serializer_class = CentroSerializer
    lookup_field = "id" # ocupamos el Id para actualizar


class CentroDeleteView(generics.DestroyAPIView):# eliminar los datos del objeto
    queryset = Centro.objects.all() #conjunto de datos que la vista manejara
    serializer_class = CentroSerializer # convierte los datos a JSON
    lookup_field = "id"# ocupamos el Id para eliminar



class TratamientosView(generics.ListCreateAPIView):# maneja la lista de tratamientos
    queryset = Tratamientos.objects.all()
    serializer_class = TratamientoSerializer
    


class BuscarCentroView(generics.ListAPIView):
    serializer_class = CentroSerializer
    
    def get_queryset(self):
        query = self.request.query_params.get('q', None)  # Obtiene el parámetro de búsqueda
        if query:
            return(Centro.objects.filter(
                Q(nombre__icontains=query)  |
                Q(provincia__icontains=query) |  
                Q(distrito__icontains=query) |
                Q(telefono__icontains=query)
            )
            )
        return Centro.objects.all()
    
        
    


