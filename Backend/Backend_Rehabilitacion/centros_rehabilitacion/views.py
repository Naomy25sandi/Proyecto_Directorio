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

    def get_queryset(self):
        queryset = super().get_queryset()
        query = self.request.query_params.get('q', None)  # Obtiene el parámetro de búsqueda
        if query:
            queryset = queryset.filter(
                Q(nombre__icontains=query) |  # Cambia 'nombre' al campo adecuado en tu modelo
                Q(ubicacion__icontains=query)  # Cambia 'ubicacion' al campo adecuado en tu modelo
                # Agrega más condiciones de filtro aquí según sea necesario
            )
        return queryset


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


