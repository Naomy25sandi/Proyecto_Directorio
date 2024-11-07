from django.urls import path
from .views import BuscarCentroView, CentroView,CentroUpdateView,CentroDeleteView, TratamientosView
# usamos para comunicarnos con el path

urlpatterns = [
    path('api/centros/',CentroView.as_view(),name='centros_list'), # vista asociada con GET
    path('api/centrosUpdate/<int:id>',CentroUpdateView.as_view(),name='centros_list_update'), #vista para actualizar 
    path('api/centrosDelete/<int:id>',CentroDeleteView.as_view(),name='centros_list_delete'), # vista para eliminar
    path('api/tratamientos/',TratamientosView.as_view(),name='tratamientos_list'), # vista para tratamiento
    path("api/buscar/centros/", BuscarCentroView.as_view(),name='centros_buscar'), # vista para buscartratamiento
    
]

# Creamos la url que llama a la vista de los centros de rehabilitacion
# Este url luego se usará en el URL del proyecto