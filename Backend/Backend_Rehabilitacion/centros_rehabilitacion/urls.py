from django.urls import path
from .views import CentroView,CentroUpdateView,CentroDeleteView
# usamos para comunicarnos con el path

urlpatterns = [
    path('api/centros/',CentroView.as_view(),name='centros_list'),
    path('api/centrosUpdate/<int:id>',CentroUpdateView.as_view(),name='centros_list_update'),
    path('api/centrosDelete/<int:id>',CentroDeleteView.as_view(),name='centros_list_delete'),


]

# Creamos la url que llama a la vista de los centros de rehabilitacion
# Este url luego se usará en el URL del proyecto