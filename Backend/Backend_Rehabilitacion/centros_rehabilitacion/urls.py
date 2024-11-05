from django.urls import path
from .views import BuscarCentroView, CentroView,CentroUpdateView,CentroDeleteView, TratamientosView
# usamos para comunicarnos con el path

urlpatterns = [
    path('api/centros/',CentroView.as_view(),name='centros_list'),
    path('api/centrosUpdate/<int:id>',CentroUpdateView.as_view(),name='centros_list_update'),
    path('api/centrosDelete/<int:id>',CentroDeleteView.as_view(),name='centros_list_delete'),
    path('api/tratamientos/',TratamientosView.as_view(),name='tratamientos_list'),
    path("api/buscar/centros/", BuscarCentroView.as_view(),name='centros_buscar'),
    


]

# Creamos la url que llama a la vista de los centros de rehabilitacion
# Este url luego se usará en el URL del proyecto