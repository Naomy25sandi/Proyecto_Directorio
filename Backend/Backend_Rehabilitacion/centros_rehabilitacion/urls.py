from django.urls import path
from .views import CentroView
# usamos para comunicarnos con el path
urlpatterns = [
    path('api/centros/',CentroView.as_view(),name='centros_list'),
]

# Creamos la url que llama a la vista de los centros de rehabilitacion
# Este url luego se usará en el URL del proyecto