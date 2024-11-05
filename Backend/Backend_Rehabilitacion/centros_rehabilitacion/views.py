from django.shortcuts import render
from rest_framework import generics
from django.db.models import Q  # Asegúrate de importar Q para realizar búsquedas complejas
from .models import Centro, Tratamientos
from .serializers import CentroSerializer, TratamientoSerializer
#from rest_framework.permissions import IsAuthenticated, IsAdminUser


class CentroView(generics.ListCreateAPIView):
    queryset = Centro.objects.all()
    serializer_class = CentroSerializer
    # permission_classes = [IsAuthenticated]  # Para que un endpoint requiera del token para usarse
    # permission_classes = [IsAdminUser]  # Para que solo un administrador pueda usar ese endpoint



class CentroUpdateView(generics.UpdateAPIView):
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
    
        
    


